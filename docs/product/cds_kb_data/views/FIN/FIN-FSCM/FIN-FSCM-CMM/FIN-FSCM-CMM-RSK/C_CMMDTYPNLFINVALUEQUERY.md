---
name: C_CMMDTYPNLFINVALUEQUERY
description: "Derivative PnL Query"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPNLFINVALUEQUERY')/$value
semantic_en: "Derivative PnL Query"
semantic_vi: "Derivative PnL Query — CDS view tiêu dùng dựa trên I_CmmdtyPnLFinValuesCube."
keywords:
  - "derivative"
  - "pnl"
  - "query"
  - "company"
  - "code"
  - "commodity"
  - "price"
  - "exposure"
  - "category"
  - "version"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - lob:finance
  - lob:sourcing & procurement
---
# C_CMMDTYPNLFINVALUEQUERY

**Derivative PnL Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPNLFINVALUEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` | ✓ | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | ✓ | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | ✓ | |  |  | `CHAR(40)` | Hash key |
| `CommodityPriceExposureVersion` | ✓ | |  |  | `NUMC(10)` | Version of a Commodity Price Exposure |
| `ValidityStartDateTime` |  | |  |  | `DEC(15)` | Valid-From Timestamp of Commodity Derivative |
| `ValidityEndDateTime` |  | |  |  | `DEC(15)` | Valid-To Timestamp of Commodity Derivative |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date of Exposure |
| `ValidityStartTime` |  | |  |  | `TIMS(6)` | Valid-From Time of Commodity Derivative |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date of Commodity Derivative |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Valid-To Time of Commodity Derivative |
| `MaximumVersion` |  | |  |  | `NUMC(10)` | Highest Version Number |
| `RiskAnalyzerVersionUUID` |  | |  |  | `RAW(16)` | CMM_VFIND Version GUID |
| `ExposureDueDate` |  | |  |  | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `Commodity` |  | |  |  | `CHAR(18)` | Commodity |
| `CashFlowDirection` |  | |  |  | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  |  | `CHAR(1)` | Indicates whether it is a long or a short position |
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  |  | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` |  | |  |  | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  |  | `CHAR(22)` | Financial Object Number |
| `PnLEventCategory` |  | |  |  | `CHAR(10)` | Profit and Loss Event Category |
| `PnLEventType` |  | |  |  | `CHAR(10)` | Profit and Loss Event Type |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of a Commodity Derivative (OBSOLETE) |
| `NumberOfCommodityContracts` |  | |  |  | `CHAR(20)` | Number of Contracts |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  |  | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `DisplayCurrency` |  | |  |  | `CHAR(1)` | Currency Variant |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `HasErrorDescription` |  | |  |  | `CHAR(60)` | Error Description |
| `PnLValue` |  | |  |  | `CURR(15)` | PnLValue |
| `PnLCalculationRelevantValue` |  | |  |  | `CURR(15)` | PnLCalculationRelevantValue |
| `PnLCalculationRelevantQuantity` |  | |  |  | `QUAN(17)` | PnLRelevantTermQty |
| `PnLRelevantComparativeTermVal` |  | |  |  | `CURR(15)` | PnLRelevantCamparativeTermValue |
| `PnLRelevantComparativeTermQty` |  | |  |  | `QUAN(17)` | PnLRelevantTermQty |
| `PnLRelevantTermValue` |  | |  |  | `CURR(15)` | PnLRelevantCamparativeTermValue |
| `PnLRelevantTermQuantity` |  | |  |  | `QUAN(17)` | PnLRelevantTermQty |
| `Currency` |  | |  |  | `CUKY(5)` | Statistics Currency in Evaluation |
| `CommodityPriceExposureUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPNLFINVALUEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYPNLFINVALUEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CDRVTVPNLQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@AbapCatalog.preserveKey: true

@EndUserText.label: 'Derivative PnL Query'

define view C_CmmdtyPnLFinValueQuery
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_EvaluationDate         : cds_evaluation_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate : cds_evaluation_date_comp,
    @Consumption.defaultValue: 'P'
    P_DisplayView            : cds_view_uom,
    @Consumption.defaultValue: 'S'
    P_DisplayCurrency        : cds_view_currency

  as select from I_CmmdtyPnLFinValuesCube(
                             P_EvaluationDate         : $parameters.P_EvaluationDate,
                             P_EndOfDaySnapshotToDate : $parameters.P_EndOfDaySnapshotToDate,
                             P_DisplayView            : $parameters.P_DisplayView,
                             P_DisplayCurrency        : $parameters.P_DisplayCurrency)
{
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  1
      @AnalyticsDetails.query.display: #KEY_TEXT
  key CompanyCode,

      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  3
  key CommodityPriceExposure,
  key CommodityExposureCategory,
  key CommodityPriceSubExposure,
  key CommodityPriceExposureVersion,

      ValidityStartDateTime,
      ValidityEndDateTime,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.sortDirection: #ASC
      @AnalyticsDetails.query.variableSequence:  4
      ValidityStartDate,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.sortDirection: #ASC
      @AnalyticsDetails.query.variableSequence:  5
      ValidityStartTime,
      ValidityEndDate,
      ValidityEndTime,
      MaximumVersion,
      RiskAnalyzerVersionUUID,
      ExposureDueDate,
      ReportingDate,

      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter.multipleSelections: true
      @AnalyticsDetails.query.variableSequence:  2
      @AnalyticsDetails.query.display: #TEXT
      Commodity,
      CashFlowDirection,
      TreasuryPositionLongShortCode,
      DerivativeContrSpecification,
      MarketIdentifierCode,
      TimeToMaturity,
      CmmdtyForwardIndexTiming,
      MaturityKeyDate,
      DerivativeContractMaturityCode,
      FinancialInstrProductCategory,
      FinancialAssetsMgmtProductType,
      FinInstrTransactionCategory,
      FinancialInstrumentProductType,
      FinancialInstrActivityCategory,
      FinancialObject,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence:  6
      @AnalyticsDetails.query.display: #TEXT
      PnLEventCategory,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence:  7
      @AnalyticsDetails.query.display: #TEXT
      PnLEventType,
      TermStartDate,
      TermEndDate,
      DeliveryDate,
      NumberOfCommodityContracts,
      TreasuryPositionAccount,
      DerivativeContract,
      OptionStrikePrice,
      OptionStrikeCurrency,
      OptionPutCallCode,
      OptionExerciseType,
      EvaluationDate,
      FinInstrExternalReference,
      DisplayView,
      DisplayCurrency,
      ExternalKeyFigureValue,
      HasError,
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.variableSequence: 8
      HasErrorDescription,

      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnLValue,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnLCalculationRelevantValue,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnLCalculationRelevantQuantity,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnLRelevantComparativeTermVal,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnLRelevantComparativeTermQty,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnLRelevantTermValue,
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnLRelevantTermQuantity,

      @Semantics.currencyCode: true
      Currency,

      @Semantics.unitOfMeasure: true
      CommodityPriceExposureUnit
      
      

}
```
