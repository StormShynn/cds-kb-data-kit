---
name: C_MATLSTKATKEYDATEINALTUOM
description: "This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?"
semantic_vi: "Stock at Key Date in Alternative UoM — CDS view tiêu dùng (transactional data) dựa trên I_MatlStkAtKeyDateInAltUoM."
keywords:
  - "stock"
  - "key"
  - "date"
  - "alternative"
  - "uom"
  - "product"
  - "plant"
  - "storage"
  - "location"
  - "batch"
  - "supplier"
tags:
  - MM
  - bo:plant
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - bo:inventory
  - stock
---
# C_MATLSTKATKEYDATEINALTUOM

**This CDS view provides the prerequisites for answering the following business question: Which quantity in alternative unit of measure (AUoM) of a material was available at a certain date?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number (Stock Identifier) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales Order Number of Valuated Sales Order Stock |
| `SDDocumentItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Valuated Sales Order Stock WBS Element |
| `Customer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `SpecialStockIdfgStockOwner` |  | |  |  | `CHAR(10)` | Add. Supplier for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AlternativeUnit` |  | |  |  | `UNIT(3)` | Alternative Unit of Measure for Stockkeeping Unit |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `MatlStkIncrQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `MatlStkDecrQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` |  |
| `MatlWrhsStkQtyInAltUoM` |  | |  |  | `QUAN(31)` | Stock Quantity in AUoM |
| `MatlCnsmpnQtyInAltUoM` |  | |  |  | `QUAN(31)` | Consumption Quantity in AUoM |
| `MatlStkIncrQtyInAltUoM` |  | |  |  | `QUAN(31)` | Stock Increase Quantity in AUoM |
| `MatlStkDecrQtyInAltUoM` |  | |  |  | `QUAN(31)` | Stock Decrease Quantity in AUoM |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MATLSTKATKEYDATEINALTUOM')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Stock at Key Date in Alternative UoM'
@ObjectModel:{
               usageType:{
                            sizeCategory: #XXL,
                            serviceQuality: #C,
                            dataClass:#TRANSACTIONAL
                         },
                modelingPattern: #ANALYTICAL_QUERY,
                supportedCapabilities: [#ANALYTICAL_QUERY]
             }
@VDM:{
       viewType: #CONSUMPTION
     }
@Analytics: { 
              query: true,
              internalName: #LOCAL,
              technicalName: 'CMATSTKDATEAUOM'
            }
@OData.publish: true
@Metadata:{
            allowExtensions: true,
            ignorePropagatedAnnotations: true -- ignore annotations from I-View w/o inserting here annotations from I-View, bacause AE cosumes the I-View basically.   
          }
define view entity C_MatlStkAtKeyDateInAltUoM
  with parameters
    P_KeyDate : vdm_v_key_date    
  as select from I_MatlStkAtKeyDateInAltUoM( P_KeyDate : $parameters.P_KeyDate )
{
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption: {
     filter: { selectionType: #RANGE,
               mandatory: false,
               multipleSelections: true }
  }
  Product,
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption: {
     filter: { selectionType: #RANGE,
               mandatory: false,
               multipleSelections: true }
  }
  Plant,
  StorageLocation,
  Batch,
  Supplier,
  SDDocument,
  SDDocumentItem,
  WBSElementInternalID,
  Customer,
  SpecialStockIdfgStockOwner,
  InventoryStockType,
  InventorySpecialStockType,
// Quantity in BUoM
  MaterialBaseUnit,
  AlternativeUnit,
  CompanyCode,
  FiscalYearVariant,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  @AnalyticsDetails.query.axis: #COLUMNS
  MatlWrhsStkQtyInMatlBaseUnit,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  MatlCnsmpnQtyInMatlBaseUnit,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  MatlStkIncrQtyInMatlBaseUnit,
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  MatlStkDecrQtyInMatlBaseUnit,
// Quantity in AUoM
  @Semantics.quantity.unitOfMeasure: 'AlternativeUnit' 
  @AnalyticsDetails.query.axis: #COLUMNS
  MatlWrhsStkQtyInAltUoM,
  @Semantics.quantity.unitOfMeasure: 'AlternativeUnit' 
  MatlCnsmpnQtyInAltUoM,
  @Semantics.quantity.unitOfMeasure: 'AlternativeUnit' 
  MatlStkIncrQtyInAltUoM,
  @Semantics.quantity.unitOfMeasure: 'AlternativeUnit' 
  MatlStkDecrQtyInAltUoM
}
```
