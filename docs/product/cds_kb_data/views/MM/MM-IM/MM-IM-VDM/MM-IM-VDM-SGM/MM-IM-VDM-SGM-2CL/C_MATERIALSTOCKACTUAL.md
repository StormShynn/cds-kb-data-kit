---
name: C_MATERIALSTOCKACTUAL
description: "This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?"
semantic_vi: "Total actual stock quantity — CDS view tiêu dùng (transactional data) dựa trên I_MaterialStock_2."
keywords:
  - "total"
  - "actual"
  - "stock"
  - "quantity"
  - "material"
  - "plant"
  - "storage"
  - "location"
  - "batch"
  - "supplier"
tags:
  - MM
  - bo:companycode
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
  - bo:inventory
---
# C_MATERIALSTOCKACTUAL

**This CDS view provides the prerequisites for answering the following business question: What is the total stock for a set of stock identifying fields at the end of the current period based on all relevant material movements?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` |  | |  | `cast( WBSElementInternalID as mat_pspnr preserving type )` | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MaterialName` |  | |  | `_Material._Text[1: Language=$parameters.P_Language].ProductName` | `CHAR(40)` | Product Description |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `StorageLocationName` |  | |  |  | `CHAR(16)` | Storage Location Name |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATERIALSTOCKACTUAL')/$value)*

```abap
@EndUserText.label: 'Total actual stock quantity'
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass:#TRANSACTIONAL
                           },
                modelingPattern: #ANALYTICAL_QUERY,
                supportedCapabilities: [#ANALYTICAL_QUERY]
              }
@VDM.viewType: #CONSUMPTION
@Analytics.query : true
@Analytics.technicalName: 'CMATSTOCKACT'
@Metadata.allowExtensions: true
define view entity C_MaterialStockActual
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_MaterialStock_2
{
  // Stock Identifier
  @ObjectModel.text.element: ['MaterialName']
  Material,
  @ObjectModel.text.element: ['PlantName']
  @AnalyticsDetails.query.axis: #ROWS
  Plant,
  @ObjectModel.text.element: ['StorageLocationName']
  StorageLocation,
  Batch,
  @ObjectModel.text.element: ['SupplierName']
  Supplier,
  SDDocument,
  SDDocumentItem,
  cast( WBSElementInternalID as mat_pspnr preserving type ) as WBSElementInternalID,   --I_MaterailStock_2 does a cast to a DE w/o conversion exit, for compatibility reason: cast back
  @ObjectModel.text.element: ['CustomerName']
  Customer,
  @ObjectModel.text.element: ['InventoryStockTypeName']
  InventoryStockType,
  @ObjectModel.text.element: ['InventorySpecialStockTypeName']
  InventorySpecialStockType,

  // Further Stock Groups
  CompanyCode,

  // Quantity and Unit
  MaterialBaseUnit,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  @AnalyticsDetails.query.axis: #COLUMNS
  MatlWrhsStkQtyInMatlBaseUnit,

  // Names and descriptions
  _Material._Text[1: Language=$parameters.P_Language].ProductName as MaterialName,
  I_MaterialStock_2._CompanyCode.CompanyCodeName,
  I_MaterialStock_2._Plant.PlantName,
  I_MaterialStock_2._StorageLocation.StorageLocationName,
  I_MaterialStock_2._Supplier.SupplierName,
  I_MaterialStock_2._Customer.CustomerName,
  _InventoryStockType._Text[1: Language=$parameters.P_Language].InventoryStockTypeName,
  _InventorySpecialStockType._Text[1: Language=$parameters.P_Language].InventorySpecialStockTypeName
}
```
