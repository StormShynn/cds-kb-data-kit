---
name: C_STOCKQTYCURRENTVALUE_3
description: "This CDS view retrieves the time-dependent records of quantity and value for a particular stock. This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock at current prices? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IM-VDM-SGM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_3')/$value
semantic_en: "This CDS view retrieves the time-dependent records of quantity and value for a particular stock. This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock at current prices? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Current Stock Quantity and Value — CDS view tiêu dùng (transactional data) dựa trên I_StockQuantityCurrentValue_2."
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
# C_STOCKQTYCURRENTVALUE_3

**This CDS view retrieves the time-dependent records of quantity and value for a particular stock. This CDS view provides the prerequisites for answering the following business question: What is the current material stock quantity and the current material stock value for a particular stock at current prices? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-SGM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_3')/$value) |

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
| `ValuationAreaType` |  | |  |  | `CHAR(1)` | Valuation area setting |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(17)` | Stock Quantity in Base Unit of Measure |
| `StockValueInCCCrcy` |  | |  |  | `CURR(17)` | Stock Value in Company Code Currency |
| `StockValueInDisplayCurrency` |  | |  |  | `CURR(17)` | Stock Value in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_3')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_STOCKQTYCURRENTVALUE_3')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Stock Quantity and Value'
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This view is the succesor of view C_StockQtyCurrentValue_2. It is optimized for performance by use of an additional
// field with annotation derviation.lookupEntity, which is an incompatible change for a C1 released view
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }
@Analytics.query: true
@Analytics.technicalName: 'CSTKQUANVALCUR3'
@OData.publish: true
@Metadata: { 
             allowExtensions: true,
             ignorePropagatedAnnotations: true
            }

define view entity C_StockQtyCurrentValue_3
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
    P_DisplayCurrency : nsdm_display_currency
  as select from I_StockQuantityCurrentValue_2 (P_DisplayCurrency : $parameters.P_DisplayCurrency)
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

  @Consumption: {
                 filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                           mandatory: false,
                           hidden: true,
                           selectionType: #SINGLE,
                           multipleSelections: false
                         },
                  derivation: {
                                lookupEntity: 'F_ValuationAreaType',
                                resultElement: 'ValuationAreaType'
                              }
                }
  ValuationAreaType,

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
