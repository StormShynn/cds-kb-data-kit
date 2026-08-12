---
name: C_CMMDTYPOSDAYOVERDAYQRY
description: "Commodity Position Day over Day Query"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSDAYOVERDAYQRY')/$value
semantic_en: "Commodity Position Day over Day Query"
semantic_vi: "Commodity Position Day over Day Query — CDS view tiêu dùng dựa trên I_CmmdtyPositionRepQtyCube."
keywords:
  - "commodity"
  - "position"
  - "day"
  - "over"
  - "query"
  - "transaction"
  - "type"
  - "pricing"
  - "condition"
  - "evaluation"
  - "date"
  - "company"
  - "code"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
---
# C_CMMDTYPOSDAYOVERDAYQRY

**Commodity Position Day over Day Query**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSDAYOVERDAYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityTransactionType` | ✓ | |  |  | `CHAR(1)` | Paper/Physical Indicator for Exposure Group |
| `PricingKey` | ✓ | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `EvaluationDate` | ✓ | |  |  | `DATS(8)` | Latest Evaluation Date |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CommodityExposureCategory` | ✓ | |  |  | `CHAR(2)` | Exposure Category |
| `EndOfDaySnapshotFromDate` |  | |  |  | `DATS(8)` | Snapshot Start Date |
| `EndOfDaySnapshotToDate` |  | |  |  | `DATS(8)` | Snapshot End Date |
| `EndOfDaySnapshotDate` |  | |  |  | `DATS(8)` | Snapshot Date |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` | VLOGP Data Selection Type |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Condition item number |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Document Type |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document Type |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Predecessor Document Type |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionStrikePrice` |  | |  |  | `CHAR(18)` | Option Strike Price |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `PriceIsRealized` |  | |  |  | `CHAR(1)` | Indicates that the MtM value is realized |
| `ImplicitFixationIsRelevant` |  | |  |  | `CHAR(1)` | Implicit Fixation Relevant |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `MaterialStockPriceExposureUnit` |  | |  |  | `UNIT(3)` | Material Stock Unit of Measure |
| `UnpricedUndeliveredCtrExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Undelivered Contract Quantity |
| `UnpricedDeliveredCtrExpsrQty` |  | |  |  | `QUAN(31)` | Unpriced Delivered Contract Quantity |
| `UnpricedContrPriceExposureQty` |  | |  |  | `QUAN(31)` | Unpriced Contract Quantity |
| `PricedUndeliveredContrExpsrQty` |  | |  |  | `QUAN(31)` | Priced Undelivered Contract Quantity |
| `PricedDeliveredContrExpsrQty` |  | |  |  | `QUAN(31)` | Priced Delivered Contract Quantity |
| `PricedContractsExposureQty` |  | |  |  | `QUAN(31)` | Priced Contract Quantity |
| `TodayPricedUndeliveredExpsrQty` |  | |  |  | `QUAN(31)` | Today Priced Undelivered Quantity |
| `UndeliveredMarketPrExposureQty` |  | |  |  | `QUAN(31)` | Undelivered Market Exposure Quantity |
| `DeliveredMarketPrExposureQty` |  | |  |  | `QUAN(31)` | Delivered Market Exposure |
| `UnrlzdMarketPriceExposureQty` |  | |  |  | `QUAN(31)` | Unrealized Market Exposure Quantity |
| `UnrealizedGoodsRcptPrcExpsrQty` |  | |  |  | `QUAN(31)` | Unrealized Goods Receipt Quantity |
| `UnrealizedGoodsIssPrcExpsrQty` |  | |  |  | `QUAN(31)` | Unrealized Goods Issue Quantity |
| `MaterialStockExposureQty` |  | |  |  | `QUAN(31)` | Stock on Hand |
| `RealizedMaterialStkPrcExpsrQty` |  | |  |  | `QUAN(31)` | Realized Stock Quantity |
| `OutrightPriceExposureQty` |  | |  |  | `QUAN(31)` | Outright Exposure Quantity |
| `AdjustedReportingDate` |  | |  |  | `DATS(8)` | Adjusted Reporting Date |
| `AdjustedReportingYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `AdjustedReportingMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `PriceSettingMethod` |  | |  |  | `NUMC(5)` | Price Setting Method |
| `PriceSettingMethodStatus` |  | |  |  | `NUMC(5)` | Price Setting Method Status |
| `ValidToDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `PricingConditionTerm` |  | |  |  | `NUMC(5)` | CPE Term - Number in Formula |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSDAYOVERDAYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPOSDAYOVERDAYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCMMPOSDODQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.compiler.compareFilter: true
@Analytics.query: true
@EndUserText.label: 'Commodity Position Day over Day Query'
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType:{  sizeCategory: #XL,
                          serviceQuality: #D,
                          dataClass: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]

define view C_CmmdtyPosDayOverDayQry
  with parameters
    @Consumption.hidden: true
    @Consumption.defaultValue: '02'
    P_MTMDataSelectionType     : cmm_vlogp_posrep_consump_type, -- Analytic consumption type
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotFromDate : cmm_snapshot_start,      -- Snapshot Start Date
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate   : cmm_snapshot_end,        -- Snapshot End Date
    @Consumption.defaultValue: 'P'
    P_DisplayUnitOfMeasure     : cds_posrep_view_uom,       -- Display UoM
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              :spras  
  as select from I_CmmdtyPositionRepQtyCube(  P_DisplayUnitOfMeasure     : :P_DisplayUnitOfMeasure,
                                             P_EndOfDaySnapshotFromDate : :P_EndOfDaySnapshotFromDate,
                                             P_EndOfDaySnapshotToDate   : :P_EndOfDaySnapshotToDate,
                                             P_MTMDataSelectionType     : :P_MTMDataSelectionType, 
                                             P_OptionDeltaMethod        : '2',          // Weighted
                                             P_OptionDeltaThreshold     : 1  ) as vlogp //dummy value for technical reasons, threshold is only relevant for method 3
{
  key CommodityTransactionType,
    //  @Consumption.hidden: true  --n3278570
  key PricingKey,
  key ConditionType,
//      @AnalyticsDetails.query.axis: #COLUMNS
//      @AnalyticsDetails.query.totals: #SHOW
  key EvaluationDate,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  1
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Consumption.valueHelp: 'C_T001'
  key CompanyCode,
  key CommodityExposureCategory,
      vlogp.EndOfDaySnapshotFromDate,
      vlogp.EndOfDaySnapshotToDate,
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.totals: #SHOW      
      vlogp.EndOfDaySnapshotDate,
      
      vlogp.MTMDataSelectionType,

      vlogp.MTMDataSourceType,

      -- Business Document
      vlogp.SalesOrganization,
      vlogp.DistributionChannel,
      vlogp.Division,
      vlogp.Creditor,
      vlogp.SoldToParty,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  3
      @AnalyticsDetails.query.display: #TEXT
      vlogp.PhysicalCommodity,
       @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  4
      vlogp.Material,
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  2
      vlogp.Plant,
      vlogp.StorageLocation,
      vlogp.Batch,
      vlogp.IncotermsClassification,
      vlogp.IncotermsTransferLocation,
      vlogp.ConditionApplication,
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  6
      @AnalyticsDetails.query.sortDirection: #ASC
      vlogp.SourceDocument,
      @AnalyticsDetails.query.sortDirection: #ASC
      @EndUserText.label: 'Document Item'
      vlogp.SourceDocumentItem,
      vlogp.SourceDocumentBusObjType,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  5
      vlogp.OriginReferenceDocument,
      vlogp.OriginReferenceDocumentItem,
      vlogp.OriginReferenceDocBusObjType,
      vlogp.ReferenceDocument,
      vlogp.ReferenceDocumentItem,
      vlogp.ReferenceDocBusObjType,
      vlogp.DeliveryDate,
      vlogp.ExpectedPaymentDate,
      vlogp.ProfitCenter,
      vlogp.BusinessArea,
      vlogp.PurchasingOrganization,
      vlogp.MaterialGroup,
      vlogp.IsIntercompanyTransfer,


      -- Miscellanous fields

      --@AnalyticsDetails.query.display: #TEXT
      vlogp.MTMConditionGroup,
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #TEXT
      vlogp.MTMConditionGroupCategory,

      --Financial Fields
      vlogp.ExposureDueDate,
      vlogp.TreasuryPositionLongShortCode,
      vlogp.TimeToMaturity,
      vlogp.CmmdtyForwardIndexTiming,
      @EndUserText.label: 'Timing'
      vlogp.CmmdtyForwardIndexTimingText,
      vlogp.DerivativeContractMaturityCode,
      vlogp.FinancialAssetsMgmtProductType,
      vlogp.FinInstrTransactionCategory,
      vlogp.FinancialInstrumentProductType,
      vlogp.OptionStrikeCurrency,

      vlogp.OptionStrikePrice,
      vlogp.OptionPutCallCode,
      vlogp.ExternalKeyFigureValue,
      vlogp.OptionDeltaFactor,
      vlogp.DerivativeContrSpecification,
      vlogp.MarketIdentifierCode,
      vlogp.MaturityKeyDate,

      @Semantics.unitOfMeasure: true
      vlogp.CommodityUnit,
      vlogp.PriceIsRealized,
      vlogp.ImplicitFixationIsRelevant,
      vlogp.ConditionTermRateIsFixed,

      @Semantics.unitOfMeasure: true
      MaterialStockPriceExposureUnit,

      ------- Key Figures ---------

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      UnpricedUndeliveredCtrExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      UnpricedDeliveredCtrExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      UnpricedContrPriceExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      PricedUndeliveredContrExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      PricedDeliveredContrExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      PricedContractsExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      TodayPricedUndeliveredExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      UndeliveredMarketPrExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'MaterialStockPriceExposureUnit'
      DeliveredMarketPrExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      UnrlzdMarketPriceExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      UnrealizedGoodsRcptPrcExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      UnrealizedGoodsIssPrcExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      MaterialStockExposureQty,

      @AnalyticsDetails.query.axis: #ROWS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      RealizedMaterialStkPrcExpsrQty,

      @AnalyticsDetails.query.axis: #ROWS
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation:#SUM
      OutrightPriceExposureQty,

      vlogp.AdjustedReportingDate,

      @EndUserText.label: 'Reporting Year'
      vlogp.AdjustedReportingYear,
      --@AnalyticsDetails.query.axis: #COLUMNS
      @EndUserText.label: 'Reporting Period'
      vlogp.AdjustedReportingMonth,
      vlogp.FinInstrExternalReference,
                
      _CmmdtyMtmMessage[1:Language = :P_Language].SystemMessageText,
      vlogp.HasError,
      vlogp.PriceSettingMethod, 
      vlogp.PriceSettingMethodStatus,
      vlogp.ValidToDateTime,
      vlogp.PricingProcedure,
      vlogp.PricingConditionTerm
      

}
```
