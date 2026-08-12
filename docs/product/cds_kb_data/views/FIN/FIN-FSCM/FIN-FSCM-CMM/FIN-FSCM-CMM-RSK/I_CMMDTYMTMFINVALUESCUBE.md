---
name: I_CMMDTYMTMFINVALUESCUBE
description: "Derivative MTM - Cube"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value
semantic_en: "Derivative MTM - Cube"
semantic_vi: "Derivative MTM - Cube — CDS view giao diện dựa trên I_CmmdtyMTMFinValues."
keywords:
  - "derivative"
  - "mtm"
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
# I_CMMDTYMTMFINVALUESCUBE

**Derivative MTM - Cube**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value) |

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
| `NumberOfCommodityContracts` |  | |  | `cast( NumberOfCommodityContracts as cmm_contracts_number)` | `CHAR(20)` | Number of Contracts |
| `CommodityPriceExposureQuantity` |  | |  |  | `QUAN(13)` | Quantity (OBSOLETE) |
| `CommodityPriceExposureUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for the Commodity |
| `TreasuryPositionAccount` |  | |  |  | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  |  | `CHAR(13)` | Contract for Listed Options and Futures |
| `OptionStrikePrice` |  | |  | `cast( OptionStrikePrice as cmm_option_strike_price)` | `CHAR(18)` | Option Strike Price |
| `OptionStrikeCurrency` |  | |  |  | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  |  | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  |  | `NUMC(1)` | Exercise Type (American or European) |
| `EvaluationDate` |  | |  |  | `DATS(8)` | Evaluation Date |
| `MTMDataSelectionType` |  | |  |  | `CHAR(2)` | VLOGP Data Selection Type |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `DisplayView` |  | |  |  | `CHAR(1)` | View Variant |
| `HasError` |  | |  |  | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `ExternalKeyFigureValue` |  | |  |  | `CHAR(50)` | External Key figures |
| `OptionDeltaFactorKeyFigure` |  | |  |  | `DEC(15)` | Option Delta Factor |
| `OptionDeltaFactor` |  | |  |  | `CHAR(30)` | Option Delta Factor Value |
| `RiskAnalyzerKeyFigureName` |  | |  |  | `CHAR(40)` | Risk Analyzer Keyfigure Name |
| `RiskAnalyzerKeyFigInQtanCrcy` |  | |  |  | `CURR(23)` | Value in Quotation Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Quotation Currency |
| `RiskAnalyzerKeyFigInPaytCrcy` |  | |  |  | `CURR(23)` | Value in Payment Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Evaluation in Payment Currency |
| `RiskAnalyzerKeyFigInStstcCrcy` |  | |  |  | `CURR(23)` | Value in Statistics Currency |
| `StatisticsCurrency` |  | |  |  | `CUKY(5)` | Statistics Currency in Evaluation |
| `HasErrorDescription` |  | |  |  | `CHAR(60)` | Error Description |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` |  |
| `_CmmdtyMtmMessage` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_FinAssetsMgmtProductType` | | ✓ | | | | |
| `_MarketIdentifierCode` | | ✓ | | | | |
| `_PhysicalCommodity` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CmmdtyMtmMessage` | `I_CmmdtyMtmMessage` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYMTMFINVALUESCUBE')/$value)*

```abap
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IDRVTVMTMCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@EndUserText.label: 'Derivative MTM - Cube'
define view I_CmmdtyMTMFinValuesCube  with parameters
    @Consumption.defaultValue: 'P'
    P_DisplayView     : cds_view_uom,
    @Environment.systemField: #SYSTEM_DATE
    P_EvaluationDate  : cds_evaluation_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndOfDaySnapshotToDate : cds_evaluation_date_comp,
    P_MTMDataSelectionType : cmm_vlogp_consumptiontype
 as select from I_CmmdtyMTMFinValues (P_DisplayView:$parameters.P_DisplayView,
                             P_EvaluationDate:$parameters.P_EvaluationDate,
                             P_EndOfDaySnapshotToDate:$parameters.P_EndOfDaySnapshotToDate,
                             P_MTMDataSelectionType:$parameters.P_MTMDataSelectionType)

    association [0..*] to I_CmmdtyMtmMessage          as _CmmdtyMtmMessage             
        on $projection.SystemMessageNumber = _CmmdtyMtmMessage.SystemMessageNumber          
    {
    //ZI_DrvtvMTMInterfaceLayer
    @ObjectModel.foreignKey.association: '_CompanyCode'
    CompanyCode,
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
    //ValidityStartCharTimestamp,
    //ValidityEndCharTimestamp,
    MaximumVersion,
    RiskAnalyzerVersionUUID,
    ExposureDueDate,
    ReportingDate,

     @ObjectModel.foreignKey.association: '_PhysicalCommodity'
    Commodity,
    CashFlowDirection,
    TreasuryPositionLongShortCode,

    @ObjectModel.foreignKey.association: '_DerivativeContrSpecification'
    DerivativeContrSpecification,

     @ObjectModel.foreignKey.association: '_MarketIdentifierCode'
    MarketIdentifierCode,
    TimeToMaturity,
    CmmdtyForwardIndexTiming,
    MaturityKeyDate,
    DerivativeContractMaturityCode,
    FinancialInstrProductCategory,

    @ObjectModel.foreignKey.association: '_FinAssetsMgmtProductType'
    FinancialAssetsMgmtProductType,
    FinInstrTransactionCategory,
    FinancialInstrumentProductType,
    FinancialInstrActivityCategory,
    FinancialObject,
    PnLEventType,
    TermStartDate,
    TermEndDate,
    DeliveryDate,
    cast( NumberOfCommodityContracts as cmm_contracts_number) as NumberOfCommodityContracts,

    @DefaultAggregation:  #SUM
    @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
    CommodityPriceExposureQuantity,

    @Semantics.unitOfMeasure:true
    @ObjectModel.foreignKey.association: '_UnitOfMeasure'
    CommodityPriceExposureUnit,

    //CommodityPriceFixationStatus,
    TreasuryPositionAccount,
    DerivativeContract,
    //@Semantics.amount.currencyCode: 'OptionStrikeCurrency'
    cast( OptionStrikePrice as cmm_option_strike_price)       as OptionStrikePrice,
    OptionStrikeCurrency,
    OptionPutCallCode,
    OptionExerciseType,
    EvaluationDate,
    MTMDataSelectionType,
    FinInstrExternalReference,
    DisplayView,
    HasError,
    ExternalKeyFigureValue,
    @DefaultAggregation:  #SUM
    OptionDeltaFactorKeyFigure,
    OptionDeltaFactor,    
    RiskAnalyzerKeyFigureName,

    @DefaultAggregation:  #SUM
    @Semantics.amount.currencyCode: 'QuotationCurrency'
    RiskAnalyzerKeyFigInQtanCrcy,
    @Semantics.currencyCode: true
    QuotationCurrency,

    @DefaultAggregation:  #SUM
    @Semantics.amount.currencyCode: 'PaymentCurrency'
    RiskAnalyzerKeyFigInPaytCrcy,
    @Semantics.currencyCode: true
    PaymentCurrency,
    @DefaultAggregation:  #SUM
    @Semantics.amount.currencyCode: 'StatisticsCurrency'
    RiskAnalyzerKeyFigInStstcCrcy,
    @Semantics.currencyCode: true
    StatisticsCurrency,

    HasErrorDescription,
    @ObjectModel.foreignKey.association:'_CmmdtyMtmMessage'
    SystemMessageNumber,
    
         
    /* Associations */
    //ZI_DrvtvMTMInterfaceLayer
    _CompanyCode,
    _DerivativeContrSpecification,
    _FinAssetsMgmtProductType,
    _MarketIdentifierCode,
    _PhysicalCommodity,
    _CmmdtyMtmMessage,
    _UnitOfMeasure

    }
```
