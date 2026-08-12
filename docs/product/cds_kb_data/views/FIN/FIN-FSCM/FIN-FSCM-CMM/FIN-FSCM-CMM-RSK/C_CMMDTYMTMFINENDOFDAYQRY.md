---
name: C_CMMDTYMTMFINENDOFDAYQRY
description: "Derivative MTM End-Of-Day Query"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMFINENDOFDAYQRY')/$value
semantic_en: "Derivative MTM End-Of-Day Query"
semantic_vi: "Derivative MTM End-Of-Day Query — CDS view tiêu dùng dựa trên I_CmmdtyMTMFinValuesCube."
keywords:
  - "derivative"
  - "mtm"
  - "end"
  - "day"
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
# C_CMMDTYMTMFINENDOFDAYQRY

**Derivative MTM End-Of-Day Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMFINENDOFDAYQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` |  | |  |  | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` |  | |  |  | `CHAR(2)` | Exposure Category |
| `CommodityPriceExposureVersion` |  | |  |  | `NUMC(10)` | Version of a Commodity Price Exposure |
| `CommodityPriceSubExposure` |  | |  |  | `CHAR(40)` | Hash key |
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
| `PnLEventType` |  | |  |  | `CHAR(10)` | Profit and Loss Event Type |
| `TermStartDate` |  | |  |  | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `DeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of a Commodity Derivative (OBSOLETE) |
| `CommodityPriceExposureQuantity` |  | |  |  | `QUAN(13)` | Quantity (OBSOLETE) |
| `CommodityPriceExposureUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` | VLOGP Data Selection Type |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `RiskAnalyzerKeyFigureName` |  | |  |  | `CHAR(40)` | Risk Analyzer Keyfigure Name |
| `RiskAnalyzerKeyFigInQtanCrcy` |  | |  |  | `CURR(23)` | Value in Quotation Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Quotation Currency |
| `RiskAnalyzerKeyFigInPaytCrcy` |  | |  |  | `CURR(23)` | Value in Payment Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Payment Currency |
| `RiskAnalyzerKeyFigInStstcCrcy` |  | |  |  | `CURR(23)` | Value in Statistics Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency in Evaluation |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMFINENDOFDAYQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMMDTYMTMFINENDOFDAYQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CDRVTVMTMEODQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.query: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Derivative MTM End-Of-Day Query'
define view C_CmmdtyMTMFinEndOfDayQry  with parameters
    @Consumption.defaultValue: 'P'
    P_DisplayView          : cds_view_uom,
//    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_EvaluationDate       : cds_evaluation_date,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              :spras  
    as select from I_CmmdtyMTMFinValuesCube (P_DisplayView: $parameters.P_DisplayView,
                         P_EvaluationDate: $parameters.P_EvaluationDate,
                         P_EndOfDaySnapshotToDate: $parameters.P_EvaluationDate,
                         P_MTMDataSelectionType: '01')
    {

    //ZI_DrvtvMTMCube
    @AnalyticsDetails.query.axis: #ROWS
    @Consumption.filter.multipleSelections: true
    @AnalyticsDetails.query.variableSequence:  1
    @AnalyticsDetails.query.display: #KEY_TEXT
    CompanyCode,

    @AnalyticsDetails.query.axis: #ROWS
    @Consumption.filter.multipleSelections: true
    @AnalyticsDetails.query.variableSequence:  3
    CommodityPriceExposure,
    CommodityExposureCategory,
    CommodityPriceExposureVersion,
    CommodityPriceSubExposure,
    ValidityStartDateTime,
    ValidityEndDateTime,
    ValidityStartDate,
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
    PnLEventType,
    TermStartDate,
    TermEndDate,
    DeliveryDate,
    CommodityPriceExposureQuantity,
    CommodityPriceExposureUnit,
    TreasuryPositionAccount,
    DerivativeContract,
    OptionStrikeCurrency,
    OptionPutCallCode,
    OptionExerciseType,
    ExternalKeyFigureValue,
    OptionDeltaFactor,
    EvaluationDate,
    MTMDataSelectionType,
    FinInstrExternalReference,
    DisplayView,
  



    @AnalyticsDetails.query.axis: #ROWS
    @AnalyticsDetails.query.variableSequence:  4
    //@AnalyticsDetails.query.display: 'PriceType'
    RiskAnalyzerKeyFigureName,

    @AnalyticsDetails.query.axis: #ROWS
    @AnalyticsDetails.query.variableSequence: 5   
    _CmmdtyMtmMessage[1:Language = :P_Language].SystemMessageText,
    
    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.variableSequence: 1
    RiskAnalyzerKeyFigInQtanCrcy,
    QuotationCurrency,

    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.variableSequence: 2
    RiskAnalyzerKeyFigInPaytCrcy,
    PaymentCurrency,

    @AnalyticsDetails.query.axis: #COLUMNS
    @AnalyticsDetails.query.variableSequence: 3
    RiskAnalyzerKeyFigInStstcCrcy,
    StatisticsCurrency

    }
```
