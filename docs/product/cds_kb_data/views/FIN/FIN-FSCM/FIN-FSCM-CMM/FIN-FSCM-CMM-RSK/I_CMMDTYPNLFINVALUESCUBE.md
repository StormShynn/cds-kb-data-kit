---
name: I_CMMDTYPNLFINVALUESCUBE
description: "Derivative PnL - Cube"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPNLFINVALUESCUBE')/$value
semantic_en: "Derivative PnL - Cube"
semantic_vi: "Derivative PnL - Cube — CDS view giao diện dựa trên I_CmmdtyPnLFinValues."
keywords:
  - "derivative"
  - "pnl"
  - "cube"
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
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_CMMDTYPNLFINVALUESCUBE

**Derivative PnL - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPNLFINVALUESCUBE')/$value) |

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
| `NumberOfCommodityContracts` |  | |  | `cast( PnL.NumberOfCommodityContracts as cmm_contracts_number)` | `CHAR(20)` | Number of Contracts |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  | `cast( PnL.OptionStrikePrice as cmm_option_strike_price)` | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `DisplayCurrency` |  | |  |  | `CHAR(1)` | Currency Variant |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `HasErrorDescription` |  | |  |  | `CHAR(60)` | Error Description |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPNLFINVALUESCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPNLFINVALUESCUBE')/$value)*

```abap
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IDRVTVPNLCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AbapCatalog.preserveKey: true
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@EndUserText.label: 'Derivative PnL - Cube'

define view I_CmmdtyPnLFinValuesCube
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_EvaluationDate         : cds_evaluation_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate : cds_evaluation_date_comp,
    @Consumption.defaultValue: 'P'
    P_DisplayView            : cds_view_uom,
    @Consumption.defaultValue: 'S'
    P_DisplayCurrency        : cds_view_currency
  as select from I_CmmdtyPnLFinValues (
                           P_EvaluationDate         : $parameters.P_EvaluationDate,
                           P_EndOfDaySnapshotToDate : $parameters.P_EndOfDaySnapshotToDate,
                           P_DisplayView            : $parameters.P_DisplayView,
                           P_DisplayCurrency        : $parameters.P_DisplayCurrency) as PnL
{
      /* Key Fields */
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key PnL.CompanyCode,
  key PnL.CommodityPriceExposure,
  key PnL.CommodityExposureCategory,
  key PnL.CommodityPriceSubExposure,
  key PnL.CommodityPriceExposureVersion,

      /* Validity Start Date & Time */
      PnL.ValidityStartDateTime,
      PnL.ValidityEndDateTime,
      PnL.ValidityStartDate,
      PnL.ValidityStartTime,
      PnL.ValidityEndDate,
      PnL.ValidityEndTime,

      PnL.MaximumVersion,
      PnL.RiskAnalyzerVersionUUID,
      PnL.ExposureDueDate,
      PnL.ReportingDate,

      @ObjectModel.foreignKey.association: '_PhysicalCommodity'
      PnL.Commodity,
      PnL.CashFlowDirection,
      PnL.TreasuryPositionLongShortCode,

      @ObjectModel.foreignKey.association: '_DerivativeContrSpecification'
      PnL.DerivativeContrSpecification,

      @ObjectModel.foreignKey.association: '_MarketIdentifierCode'
      PnL.MarketIdentifierCode,
      PnL.TimeToMaturity,
      PnL.CmmdtyForwardIndexTiming,
      PnL.MaturityKeyDate,
      PnL.DerivativeContractMaturityCode,
      PnL.FinancialInstrProductCategory,

      @ObjectModel.foreignKey.association: '_FinAssetsMgmtProductType'
      PnL.FinancialAssetsMgmtProductType,
      PnL.FinInstrTransactionCategory,
      PnL.FinancialInstrumentProductType,
      PnL.FinancialInstrActivityCategory,
      PnL.FinancialObject,
      @ObjectModel.foreignKey.association: '_PnLEventCategory'
      PnL.PnLEventCategory,

      @ObjectModel.foreignKey.association: '_PnLEventType'
      PnL.PnLEventType,
      PnL.TermStartDate,
      PnL.TermEndDate,
      PnL.DeliveryDate,
      cast( PnL.NumberOfCommodityContracts as cmm_contracts_number) as NumberOfCommodityContracts,
      PnL.TreasuryPositionAccount,
      PnL.DerivativeContract,
      //@Semantics.amount.currencyCode: 'OptionStrikeCurrency'
      cast( PnL.OptionStrikePrice as cmm_option_strike_price)       as OptionStrikePrice,
      PnL.OptionStrikeCurrency,
      PnL.OptionPutCallCode,
      PnL.OptionExerciseType,
      PnL.EvaluationDate,
      PnL.FinInstrExternalReference,
      PnL.DisplayView,
      PnL.DisplayCurrency,
      PnL.HasError,
      PnL.HasErrorDescription,
      PnL.ExternalKeyFigureValue,

      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnL.PnLValue,
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnL.PnLCalculationRelevantValue,
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnL.PnLCalculationRelevantQuantity,
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnL.PnLRelevantComparativeTermVal,
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnL.PnLRelevantComparativeTermQty,
      @DefaultAggregation:  #SUM
      @Semantics.amount.currencyCode: 'Currency'
      PnL.PnLRelevantTermValue,
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      PnL.PnLRelevantTermQuantity,

      @Semantics.currencyCode: true
      PnL.Currency,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      PnL.CommodityPriceExposureUnit,

      /*---------------Associations-------------*/
      PnL._CompanyCode,
      PnL._DerivativeContrSpecification,
      PnL._FinAssetsMgmtProductType,
      PnL._MarketIdentifierCode,
      PnL._PhysicalCommodity,
      PnL._UnitOfMeasure,
      PnL._PnLEventCategory,
      PnL._PnLEventType
}
```
