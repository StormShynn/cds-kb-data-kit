---
name: C_STOCKQTYCURRENTVALUE_2
description: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where \"the stock value is valuated\" by the price at period end?"
semantic_vi: "Current stock quantity and value — CDS view tiêu dùng (transactional data) dựa trên I_StockQuantityCurrentValue."
keywords:
  - "current"
  - "stock"
  - "quantity"
  - "and"
  - "value"
  - "product"
  - "plant"
  - "storage"
  - "location"
  - "batch"
  - "supplier"
tags:
  - MM
  - bo:inventory
  - component:MM-IM-VDM-SGM-2CL
  - consumption-view
  - lob:sourcing & procurement
  - material
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-SGM
  - MM-IM-VDM-SGM-2CL
  - stock
---
# C_STOCKQTYCURRENTVALUE_2

**This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock where "the stock value is valuated" by the price at period end?**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_2')/$value) |

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
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(17)` | Stock Quantity in Base Unit of Measure |
| `StockValueInCCCrcy` |  | |  |  | `CURR(17)` | Stock Value in Company Code Currency |
| `StockValueInDisplayCurrency` |  | |  |  | `CURR(17)` | Stock Value in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current stock quantity and value'
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
       viewType: #CONSUMPTION,
       lifecycle: {
                  status: #DEPRECATED,
                  successor: 'C_STOCKQTYCURRENTVALUE_3' 
                 }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This view is the succesor of view C_StockQuantityCurrentValue because the predecessor could not be annotated by @OData.publish: true
// because the view name exceeds 26 characters
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }
@Analytics.query: true
@Analytics.technicalName: 'CSTKQUANVALCUR2'
@OData.publish: true
@Metadata.allowExtensions: true

define view entity C_StockQtyCurrentValue_2
with parameters
  @Consumption: {
                   defaultValue: 'EUR',
                   valueHelpDefinition: [{
                                            entity: {
                                                       name:'I_Currency',
                                                       element:'Currency'
                                                    }
                                        }]
                }
  P_DisplayCurrency: nsdm_display_currency
as select from I_StockQuantityCurrentValue (P_DisplayCurrency : $parameters.P_DisplayCurrency)
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
  ProductGroup,
  ProductType,

  MaterialBaseUnit,
  Currency,
  DisplayCurrency,


// Quantity and Value
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
  @AnalyticsDetails.query.axis: #COLUMNS
  MatlWrhsStkQtyInMatlBaseUnit,
  @Semantics.amount.currencyCode: 'Currency' 
  @AnalyticsDetails.query.axis: #COLUMNS
  StockValueInCCCrcy,
  @Semantics.amount.currencyCode: 'DisplayCurrency' 
  @AnalyticsDetails.query.axis: #COLUMNS
  StockValueInDisplayCurrency
}
```
