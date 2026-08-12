---
name: C_CMMDTYMTMCURRENTDATEQRY
description: "MtM Current Values Query"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMCURRENTDATEQRY')/$value
semantic_en: "MtM Current Values Query"
semantic_vi: "MtM Current Values Query — CDS view tiêu dùng dựa trên I_CmmdtyMTMLogFinValCube."
keywords:
  - "mtm"
  - "current"
  - "values"
  - "query"
  - "pricing"
  - "version"
  - "document"
  - "item"
  - "vers"
  - "stock"
  - "record"
  - "commodity"
  - "price"
  - "exposure"
tags:
  - LO
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - bo:companycode
---
# C_CMMDTYMTMCURRENTDATEQRY

**MtM Current Values Query**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMCURRENTDATEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingKey` | ✓ | |  |  | `CHAR(40)` | A key required to access versioned pricing data |
| `Version` | ✓ | |  |  | `NUMC(10)` | Version of an MtM Valuation Record |
| `PricingDocumentItem` | ✓ | |  |  | `NUMC(6)` | Condition item number |
| `VersStockRecordUUID` | ✓ | |  |  | `RAW(16)` | GUID assigned to the VlogP stock delta record |
| `CommodityPriceExposure` | ✓ | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | ✓ | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | ✓ | |  |  | `CHAR(40)` | Hash key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PhysicalCommodity` |  | |  |  | `CHAR(18)` | Commodity |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `OriginReferenceDocument` |  | |  |  | `CHAR(20)` | Root Document |
| `SourceDocument` |  | |  |  | `CHAR(20)` | Source Document |
| `SourceDocumentItem` |  | |  |  | `NUMC(6)` | Source Document Item |
| `SourceDocumentBusObjType` |  | |  |  | `CHAR(10)` | Source Document Business Object Type |
| `EndOfDaySnapshotDate` |  | |  |  | `DATS(8)` | Snapshot Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency |
| `MTMCalculationGroup` |  | |  |  | `CHAR(1)` | MtM Calculation Group |
| `MTMConditionGroupCategory` |  | |  |  | `CHAR(1)` | Categorization of Condition Group |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `BasisID` |  | |  |  | `CHAR(18)` | Basis ID |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `PricingStatus` |  | |  |  | `CHAR(2)` | Future/Basis Price Fixation Status |
| `MTMAdjustmentType` |  | |  |  | `CHAR(2)` | Type of adjustment for the MtM or TPL calculation |
| `ConditionTermRateFixation` |  | |  |  | `NUMC(5)` | Fixation ID |
| `QuotationPeriodReferenceDate` |  | |  |  | `DATS(8)` | Reference Date |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `SubConditionType` |  | |  |  | `NUMC(6)` | The key of a sub-condition type |
| `ConditionTermValueInStstcCrcy` |  | |  |  | `CURR(31)` | Value in Statistical Currency |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionTermValueInDocCrcy` |  | |  |  | `DEC(31)` | Value in Document Currency |
| `ConditionTermRate` |  | |  |  | `DEC(31)` | Price |
| `MarketToDocExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency |
| `ConditionTermRateCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `DocToStatisticalExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Document to Statistics Currency |
| `CommodityQuantity` |  | |  |  | `QUAN(17)` | Commodity Quantity |
| `CommodityQuantityInTermUnit` |  | |  |  | `QUAN(17)` | Commodity Quantity in Price Unit |
| `CommodityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Commodity |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Creditor` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Customer Number |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `ReferenceDocument` |  | |  |  | `CHAR(20)` | Predecessor Document |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Predecessor Document Item |
| `ReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Ref (BOR) Object Type |
| `ExpectedPaymentDate` |  | |  |  | `DATS(8)` | Payment Date |
| `ExchRateEvaluationDate` |  | |  |  | `DATS(8)` | Exchange Rate Evaluation Date |
| `DocToStstcCrcyExchRateEvalDate` |  | |  |  | `DATS(8)` | Document to Statistics Currency Evaluation Date |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `IsIntercompanyTransfer` |  | |  |  | `CHAR(1)` | Intercompany Transfer |
| `ConditionTermRateQuantity` |  | |  |  | `DEC(5)` | Price Unit |
| `ConditionTermRateQuantityUnit` |  | |  |  | `UNIT(3)` | Price UoM |
| `ConditionTermValueCurrency` |  | |  |  | `CUKY(5)` | CPE Term - Currency |
| `BasisType` |  | |  |  | `CHAR(3)` | Basis Type |
| `QuotationPriceType` |  | |  |  | `CHAR(2)` | Type of Price Quotation |
| `MarketPriceCurrency` |  | |  |  | `CUKY(5)` | Market Price Currency |
| `OldestQuotationDate` |  | |  |  | `DATS(8)` | Oldest Quotation Date |
| `MTMConditionGroup` |  | |  |  | `CHAR(1)` | MtM Condition Group |
| `MTMCalcGrpMarketPriceCondition` |  | |  |  | `CHAR(4)` | Market Price Condition within a calculation group |
| `ConditionTermExchRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `CndnTermRateFixationDate` |  | |  |  | `DATS(8)` | Rate Fixation Date |
| `CndnTermRateFixationTime` |  | |  |  | `TIMS(6)` | Rate Fixation Time |
| `CndnTermExchRateFixationDate` |  | |  |  | `DATS(8)` | FX Fixation Date |
| `CndnTermExchRateFixationTime` |  | |  |  | `TIMS(6)` | FX Fixation Time |
| `ExchRateMaturityDate` |  | |  |  | `DATS(8)` | Maturity Date |
| `BasisMarketRefRate` |  | |  |  | `DEC(20)` | Original Basis Market reference rate |
| `BasisMarketRefAdjustmentSpread` |  | |  |  | `DEC(20)` | Adjustment Value |
| `MarketToDocFrozenExchRate` |  | |  |  | `DEC(20)` | Exchange Rate: Market to Document Currency at a Key Date |
| `BsMktRefDrvtvContrMaturityCode` |  | |  |  | `CHAR(13)` | Basis Market Reference Contract Maturity Code |
| `BasisMarketRefRateCurrency` |  | |  |  | `CUKY(5)` | Adjustment Value Currency |
| `BasisMarketRefKeyDate` |  | |  |  | `DATS(8)` | Basis Market reference maturity keydate |
| `ConditionTermFactor` |  | |  |  | `DEC(10)` | CPE condition type term factor |
| `ConditionTermRateIsFixed` |  | |  |  | `CHAR(1)` | Indicates that the term is fixed |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Code: Long or Short Position |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `CmmdtyForwardIndexTimingText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `EvaluationDate` |  | |  |  | `DATS(8)` |  |
| `MTMDataSourceType` |  | |  |  | `CHAR(2)` | Type of Data Record |
| `OriginReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Root Document Item |
| `OriginReferenceDocBusObjType` |  | |  |  | `CHAR(10)` | Root Document (BOR) Object Type |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `DeliveryYear` |  | |  |  | `CHAR(4)` | Abjusted Reporting Year |
| `DeliveryMonth` |  | |  |  | `CHAR(3)` | Adjusted Reporting Month |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `HasError` |  | |  |  | `CHAR(1)` | Flag: Error occured |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMCURRENTDATEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMCURRENTDATEQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMTMPFQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.compiler.compareFilter: true
@Analytics.query: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType:{  sizeCategory: #XL,
                          serviceQuality: #D,
                          dataClass: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@EndUserText.label: 'MtM Current Values Query'
define view C_CmmdtyMTMCurrentDateQry
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotFromDate : cds_evaluation_date, -- Evaluation Date
    @Consumption.defaultValue: 'P'
    P_DisplayUnitOfMeasure     : cds_posrep_view_uom -- Display UoM

  as select from I_CmmdtyMTMLogFinValCube
                 (
                       P_DisplayUnitOfMeasure:      :P_DisplayUnitOfMeasure,
                       P_EvaluationDate:            :P_EndOfDaySnapshotFromDate, -- valuation key date
                       P_ExchRateEvaluationDate:    :P_EndOfDaySnapshotFromDate, -- FX valuation date
                       P_EndOfDaySnapshotFromDate:  :P_EndOfDaySnapshotFromDate, -- date of snapshot to be selected
                       P_EndOfDaySnapshotToDate:    :P_EndOfDaySnapshotFromDate, -- date of snapshot to be selected
                       P_MTMDataSelectionType:      '03')

{
  key PricingKey,
  key Version,
  key PricingDocumentItem,
  key VersStockRecordUUID,
  key CommodityPriceExposure,
  key CommodityExposureCategory,
  key CommodityPriceSubExposure,
      @AnalyticsDetails.query.totals: #SHOW  -- Total MtM Gain/Loss
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  1
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.axis: #ROWS
//      @AnalyticsDetails.query.variableSequence:  7      
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      Plant,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  2
      PhysicalCommodity,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      Material,
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  3
      @AnalyticsDetails.query.axis: #ROWS
      OriginReferenceDocument,

      @AnalyticsDetails.query.totals: #SHOW  -- Root Document specific MtM Gain/Loss
      @AnalyticsDetails.query.axis: #ROWS
      SourceDocument,
      @AnalyticsDetails.query.axis: #ROWS
      SourceDocumentItem,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      SourceDocumentBusObjType,
      @AnalyticsDetails.query.axis: #ROWS
      EndOfDaySnapshotDate,
      @AnalyticsDetails.query.axis: #ROWS
      ValidityStartDate,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      IncotermsClassification,
      @AnalyticsDetails.query.axis: #ROWS
      IncotermsTransferLocation,
      @AnalyticsDetails.query.axis: #ROWS
      ConditionApplication,
      @AnalyticsDetails.query.axis: #ROWS
      StatisticsCurrency,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      MTMCalculationGroup,
      @AnalyticsDetails.query.totals: #SHOW  -- MtMCalculationGroup specific MtM Gain/Loss
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      MTMConditionGroupCategory,
      @AnalyticsDetails.query.axis: #ROWS
      DerivativeContractMaturityCode,
      MaturityKeyDate,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      BasisID,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      DerivativeContrSpecification,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      MarketIdentifierCode,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      PricingStatus,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.display: #TEXT
      MTMAdjustmentType,
      @AnalyticsDetails.query.axis: #ROWS
      ConditionTermRateFixation,
      @AnalyticsDetails.query.axis: #ROWS
      QuotationPeriodReferenceDate,

      @AnalyticsDetails.query.axis: #ROWS
      ConditionType,
      @AnalyticsDetails.query.axis: #ROWS
      SubConditionType,
      @Semantics.amount.currencyCode: 'StatisticsCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      ConditionTermValueInStstcCrcy,
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      ConditionTermValueInDocCrcy,
      @Semantics.amount.currencyCode: 'ConditionTermRateCurrency'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      ConditionTermRate,
      @DefaultAggregation:#SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      MarketToDocExchRate,
      @Semantics.currencyCode: true
      ConditionTermRateCurrency,
      @DefaultAggregation:#SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      DocToStatisticalExchRate,
      @Semantics.quantity.unitOfMeasure: 'CommodityUnit'
      @DefaultAggregation: #SUM
      @AnalyticsDetails.query.axis: #COLUMNS
      CommodityQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ConditionTermRateQuantityUnit'
      @AnalyticsDetails.query.axis: #COLUMNS
      CommodityQuantityInTermUnit,
      @Semantics.unitOfMeasure: true
      CommodityUnit,
      @AnalyticsDetails.query.hidden: true
      ControllingArea,
      /*Attributes */
      SalesOrganization,
      DistributionChannel,
      Division,
      Creditor,
      SoldToParty,
      StorageLocation,
      Batch,
      GoodsMovementType,
      ReferenceDocument,
      ReferenceDocumentItem,
      ReferenceDocBusObjType,
      ExpectedPaymentDate,
      ExchRateEvaluationDate,
      DocToStstcCrcyExchRateEvalDate,
      BusinessArea,
      PurchasingOrganization,
      MaterialGroup,
      IsIntercompanyTransfer,
      ConditionTermRateQuantity,
      ConditionTermRateQuantityUnit,
      ConditionTermValueCurrency,
      BasisType,
      QuotationPriceType,
      MarketPriceCurrency,
      OldestQuotationDate,
      MTMConditionGroup,
      MTMCalcGrpMarketPriceCondition,
      ConditionTermExchRateIsFixed,
      CndnTermRateFixationDate,
      CndnTermRateFixationTime,
      CndnTermExchRateFixationDate,
      CndnTermExchRateFixationTime,
      ExchRateMaturityDate,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.decimals: 4
      BasisMarketRefRate,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.decimals: 4
      BasisMarketRefAdjustmentSpread,
      @AnalyticsDetails.query.hidden
      @AnalyticsDetails.query.decimals: 4
      MarketToDocFrozenExchRate,
      BsMktRefDrvtvContrMaturityCode,
      BasisMarketRefRateCurrency,
      BasisMarketRefKeyDate,
      ConditionTermFactor,
      ConditionTermRateIsFixed,
      MaximumVersion,
      ExposureDueDate,
      ReportingDate,
      CashFlowDirection,
      TreasuryPositionLongShortCode,
      TimeToMaturity,
      CmmdtyForwardIndexTiming,
      CmmdtyForwardIndexTimingText,
      FinancialInstrProductCategory,
      FinancialAssetsMgmtProductType,
      FinInstrTransactionCategory,
      FinancialInstrumentProductType,
      FinancialInstrActivityCategory,
      EvaluationDate,
      MTMDataSourceType,
      OriginReferenceDocumentItem,
      OriginReferenceDocBusObjType,
      DeliveryDate,
      DeliveryYear,
      DeliveryMonth,
      ExternalKeyFigureValue,
      OptionDeltaFactor,
      FinInstrExternalReference,
      HasError,

      _CmmdtyMtmMessage[1:Language = $session.system_language].SystemMessageText


}
```
