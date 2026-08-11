---
name: C_PFMPRODUCTSTOCKDEX
description: "This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory."
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value
semantic_en: "This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory."
semantic_vi: "CDI Data Provider for stock inventory BAM data extraction — CDS view tiêu dùng (transactional data) dựa trên I_MaterialDocumentRecord."
keywords:
  - "cdi"
  - "data"
  - "provider"
  - "for"
  - "stock"
  - "inventory"
  - "bam"
  - "extraction"
  - "material"
  - "document"
  - "key1"
  - "key2"
  - "key3"
  - "key4"
tags:
  - SUS
  - bo:inventory
  - component:SUS-PFM-INT
  - consumption-view
  - inventory
  - product
  - stock
  - SUS-PFM
  - SUS-PFM-INT
---
# C_PFMPRODUCTSTOCKDEX

**This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory.**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` | ✓ | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | ✓ | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | ✓ | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | ✓ | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | ✓ | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | ✓ | |  |  | `RAW(1)` | Key field 6 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  | `StockIdentifyingMaterial` | `CHAR(40)` | Material for Stock Mamangement |
| `StorageLocation` |  | |  | `StockIdfgStorageLocation` | `CHAR(4)` | Storage Location (Stock Identifier) |
| `Supplier` |  | |  | `SpecialStockIdfgSupplier` | `CHAR(10)` | Supplier for Special Stock |
| `Customer` |  | |  | `SpecialStockIdfgCustomer` | `CHAR(10)` | Customer for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `MaterialGroup` |  | | `_StockIdentifyingMaterial` | `MaterialGroup` | `CHAR(9)` | Material Group |
| `MaterialType` |  | | `_StockIdentifyingMaterial` | `MaterialType` | `CHAR(4)` | Material Type |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  | `cast(MatlStkChangeQtyInBaseUnit as nsdm_stock_qty preserving type)` | `QUAN(31)` | Stock Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'CPFMMATSTCKDEX',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl: {
     authorizationCheck: #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
      usageType: {
         sizeCategory: #XXL,
         serviceQuality: #C,
         dataClass:#TRANSACTIONAL
      },
      sapObjectNodeType.name: 'MaterialDocument',
      supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
      modelingPattern: #NONE
}
@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction.enabled: true

        //Currently no delta support (change data capture) is required, since this view data is only used via the
        //OData V4 aggregation extension, which always aggregates over the whole dataset.
}
@Metadata: {
        ignorePropagatedAnnotations: true
}

@EndUserText.label: 'CDI Data Provider for stock inventory BAM data extraction'

define view C_PFMProductStockDEX
  as select from I_MaterialDocumentRecord
{
      // Technical key fields
      @Consumption.hidden: true
  key MaterialDocumentKey1,
      @Consumption.hidden: true
  key MaterialDocumentKey2,
      @Consumption.hidden: true
  key MaterialDocumentKey3,
      @Consumption.hidden: true
  key MaterialDocumentKey4,
      @Consumption.hidden: true
  key MaterialDocumentKey5,
      @Consumption.hidden: true
  key MaterialDocumentKey6,

      // Stock Identifier
      CompanyCode,
      Plant,
      StockIdentifyingMaterial                                           as Material,
      StockIdfgStorageLocation                                           as StorageLocation,
      SpecialStockIdfgSupplier                                           as Supplier,
      SpecialStockIdfgCustomer                                           as Customer,
      InventoryStockType,
      InventorySpecialStockType,

      @Semantics.businessDate.at: true
      PostingDate,

      // Units
      @Semantics.unitOfMeasure: true
      MaterialBaseUnit,

      @Semantics.calendar.year: true
      MaterialDocumentYear,
      @Semantics.calendar.month: true
      CalendarMonth,
      _StockIdentifyingMaterial.MaterialGroup,
      _StockIdentifyingMaterial.MaterialType,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation : #SUM
      cast(MatlStkChangeQtyInBaseUnit as nsdm_stock_qty preserving type) as MatlWrhsStkQtyInMatlBaseUnit

}
```
