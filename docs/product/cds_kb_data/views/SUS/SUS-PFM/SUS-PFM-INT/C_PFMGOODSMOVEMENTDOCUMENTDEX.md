---
name: C_PFMGOODSMOVEMENTDOCUMENTDEX
description: "This CDS view is used by Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way."
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: "This CDS view is used by Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way."
semantic_vi: "Material flow data extractor for PFM — CDS view tiêu dùng dựa trên I_MaterialDocumentRecord."
keywords:
  - "material"
  - "flow"
  - "data"
  - "extractor"
  - "for"
  - "pfm"
  - "document"
  - "key1"
  - "key2"
  - "key3"
  - "key4"
  - "key5"
tags:
  - SUS
  - bo:material
  - component:SUS-PFM-INT
  - consumption-view
  - document
  - material
  - product
  - SUS-PFM
  - SUS-PFM-INT
---
# C_PFMGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by Product Footprint Management for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents. The material flow data is consumed by the solution in an aggregated way.**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` | ✓ | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | ✓ | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | ✓ | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | ✓ | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | ✓ | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | ✓ | |  |  | `RAW(1)` | Key field 6 |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `WBSElementInternalID` |  | |  | `cast(WBSElementInternalID as ps_s4_pspnr preserving type)` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectExternalID` |  | | `_WBSElementBasicData._Project` | `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectInternalID` |  | |  | `cast(_WBSElementBasicData.ProjectInternalID as ps_pspnr preserving type)` | `NUMC(8)` | Project definition |
| `OrderID` |  | | `_Order` | `OrderID` | `CHAR(12)` | Order Number |
| `OrderCategory` |  | | `_Order` | `OrderCategory` | `NUMC(2)` | Order Category |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `MainProduct` |  | |  | `cast(_ManufacturingOrder.Material as pph_matko preserving type)` | `CHAR(40)` | Main Product |
| `ManufacturingOrderCategory` |  | | `_ManufacturingOrder` | `ManufacturingOrderCategory` | `NUMC(2)` | Order Category |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `MaterialGroup` |  | | `_Material` | `MaterialGroup` | `CHAR(9)` | Material Group |
| `PurchasingGroup` |  | | `_PurchaseOrder` | `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | | `_PurchaseOrder` | `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `StockChangeCategory` |  | |  | `cast(case when MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = 'X' then 'GR' else case when MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = 'X' then 'GI' else '' end end as nsdm_stock_change_category preserving type)` | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` |  | |  | `cast(case when IssuingOrReceivingPlant <> '' and IssuingOrReceivingPlant <> Plant then 'X' else '' end as nsdm_cross_plant_transfer preserving type)` | `CHAR(1)` | Is Cross Plant Transfer |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `_Currency` | | ✓ | | | | |
| `_MaterialBaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_Order` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMGOODSMOVEMENTDOCUMENTDEX')/$value)*

```abap
@EndUserText.label: 'Material flow data extractor for PFM'

@AbapCatalog: {
    sqlViewName: 'CPFMGDSMVTDDEX',
    compiler.compareFilter: true
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
         dataClass:#MIXED
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

define view C_PFMGoodsMovementDocumentDEX
  as select from I_MaterialDocumentRecord
  
  association [0..1] to I_Order as _Order on I_MaterialDocumentRecord.OrderID = _Order.OrderID
{
  key MaterialDocumentKey1,
  key MaterialDocumentKey2,
  key MaterialDocumentKey3,
  key MaterialDocumentKey4,
  key MaterialDocumentKey5,
  key MaterialDocumentKey6,

      MaterialDocument,
      MaterialDocumentItem,

      @Semantics.calendar.year: true
      MaterialDocumentYear,

      Plant,
      StorageLocation,
      Material,
      InventorySpecialStockType,
      InventoryStockType,
      StockOwner,
      CompanyCode,
      CostCenter,
      ControllingArea,

      @Semantics.currencyCode: true
      CompanyCodeCurrency,
      @Semantics.unitOfMeasure: true
      MaterialBaseUnit,

      IsReversalMovementType,

      // Stock Transfers
      IssuingOrReceivingPlant,
      IssuingOrReceivingStorageLoc,

      // Periods & Times
      @Semantics.businessDate.at: true
      DocumentDate,
      CreationDate,
      CreationTime,

      PostingDate,
      //YearQuarter,
      @Semantics.calendar.quarter: true
      CalendarQuarter,
      @Semantics.calendar.month: true
      CalendarMonth,
      @Semantics.calendar.week: true
      CalendarWeek,

      // Reference Documents
      SalesOrder,
      PurchaseOrder,
      ProjectNetwork,
      DeliveryDocument,
      -- CAST to get rid of conversion exit
      cast(WBSElementInternalID as ps_s4_pspnr preserving type)                   as WBSElementInternalID,
      _WBSElementBasicData.WBSElementExternalID                                   as WBSElementExternalID,
      _WBSElementBasicData._Project.ProjectExternalID                             as ProjectExternalID,
      -- CAST to get rid of conversion exit
      cast(_WBSElementBasicData.ProjectInternalID as ps_pspnr preserving type)    as ProjectInternalID,
      
      _Order.OrderID,
      _Order.OrderCategory,
      
      ManufacturingOrder,
      cast(_ManufacturingOrder.Material as pph_matko preserving type)             as MainProduct,
      _ManufacturingOrder.ManufacturingOrderCategory,
      
      InvtryMgmtReferenceDocument,
      
      // Other
      GoodsMovementType,
      Supplier,
      Customer,

      _Material.MaterialGroup,
      _PurchaseOrder.PurchasingGroup,
      _PurchaseOrder.PurchasingOrganization,

      // Classifications
      cast(case when MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = 'X'
            then 'GR'
        else case
           when MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = 'X'
             then 'GI'
           else '' end
      end as nsdm_stock_change_category preserving type)                           as StockChangeCategory,

      cast(case when IssuingOrReceivingPlant <> '' and IssuingOrReceivingPlant <> Plant
        then 'X'
        else ''
      end as nsdm_cross_plant_transfer preserving type)                            as IsCrossPlantTransfer,

      // Amounts
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TotalGoodsMvtAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsMovementStkAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GoodsMvtCnsmpnAmtInCCCrcy,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      MatlStkChangeQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      MatlCnsmpnQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @DefaultAggregation: #SUM
      QuantityInBaseUnit,

      //Associations
      _Currency,
      _MaterialBaseUnit
}
where
     MaterialDocumentRecordType = 'MDOC'
  or MaterialDocumentRecordType = 'MDOC_CP'
  or MaterialDocumentRecordType = 'MDOC340'
  or MaterialDocumentRecordType = 'CORR'
```
