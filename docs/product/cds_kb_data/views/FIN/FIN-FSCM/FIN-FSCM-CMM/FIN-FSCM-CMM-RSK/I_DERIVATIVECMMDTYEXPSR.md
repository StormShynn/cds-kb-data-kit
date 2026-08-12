---
name: I_DERIVATIVECMMDTYEXPSR
description: "Drvtv Basic Layer Select data from VFIND"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value
semantic_en: "Drvtv Basic Layer Select data from VFIND"
semantic_vi: "Drvtv Basic Layer Select data from VFIND — CDS view giao diện dựa trên cmm_vfind."
keywords:
  - "drvtv"
  - "basic"
  - "layer"
  - "select"
  - "data"
  - "from"
  - "vfind"
  - "client"
  - "company"
  - "code"
  - "commodity"
  - "price"
  - "exposure"
  - "category"
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
# I_DERIVATIVECMMDTYEXPSR

**Drvtv Basic Layer Select data from VFIND**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SAPClient` | ✓ | |  | `mandt` |  |  |
| `CompanyCode` | ✓ | |  | `company_code` | `CHAR(4)` | Company Code |
| `CommodityPriceExposure` | ✓ | |  | `exposure_id` | `CHAR(13)` | Commodity Price Exposure ID |
| `CommodityExposureCategory` | ✓ | |  | `exposure_cat` | `CHAR(2)` | Exposure Category |
| `CommodityPriceSubExposure` | ✓ | |  | `exposure_subkey` | `CHAR(40)` | Hash key |
| `CommodityPriceExposureVersion` | ✓ | |  | `version` | `NUMC(10)` | Version of a Commodity Price Exposure |
| `ValidityStartDateTime` |  | |  | `valid_from_tst` | `DEC(15)` | Valid-From Timestamp of Commodity Derivative |
| `ValidityEndDateTime` |  | |  | `valid_to_tst` | `DEC(15)` | Valid-To Timestamp of Commodity Derivative |
| `ValidityStartDate` |  | |  | `valid_from_date` | `DATS(8)` | Valid-From Date of Exposure |
| `ValidityStartTime` |  | |  | `valid_from_time` | `TIMS(6)` | Valid-From Time of Commodity Derivative |
| `ValidityEndDate` |  | |  | `valid_to_date` | `DATS(8)` | Valid-To Date of Commodity Derivative |
| `ValidityEndTime` |  | |  | `valid_to_time` | `TIMS(6)` | Valid-To Time of Commodity Derivative |
| `MaximumVersion` |  | |  | `version_max` | `NUMC(10)` | Highest Version Number |
| `RiskAnalyzerVersionUUID` |  | |  | `version_guid` | `RAW(16)` | CMM_VFIND Version GUID |
| `ExposureDueDate` |  | |  | `expos_due_date` | `DATS(8)` | Date on which the exposure is due and expires |
| `ReportingDate` |  | |  | `reporting_date` | `DATS(8)` | Reporting Date |
| `Commodity` |  | |  | `phys_comm_id` | `CHAR(18)` | Commodity |
| `CashFlowDirection` |  | |  | `side` | `CHAR(1)` | Transaction Flow Direction |
| `TreasuryPositionLongShortCode` |  | |  | `direction` | `CHAR(1)` | Indicates whether it is a long or a short position |
| `DerivativeContrSpecification` |  | |  | `dcs` | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  | `mic` | `CHAR(4)` | Market Identifier Code |
| `QuotationPriceType` |  | |  | `price_type` | `CHAR(2)` | Type of Price Quotation |
| `TimeToMaturity` |  | |  | `tenor` | `CHAR(10)` | Time to Maturity |
| `CmmdtyForwardIndexTiming` |  | |  | `timing` | `NUMC(2)` | Timing/Periodicity of Commodity Forward Indexes |
| `MaturityKeyDate` | ✓ | |  | `keydate` | `DATS(8)` | Maturity Key Date |
| `DerivativeContractMaturityCode` |  | |  | `contract_code` | `CHAR(13)` | Contract Maturity Code |
| `FinancialInstrProductCategory` |  | |  | `product_cat` | `NUMC(3)` | Product Category |
| `FinancialAssetsMgmtProductType` |  | |  | `product_type` | `CHAR(3)` | Product Type |
| `FinInstrTransactionCategory` |  | |  | `f_trans_cat` | `NUMC(3)` | Transaction Category |
| `FinancialInstrumentProductType` |  | |  | `trans_type` | `CHAR(3)` | Financial Transaction Type |
| `FinancialInstrActivityCategory` |  | |  | `trans_act_type` | `NUMC(2)` | Transaction Activity Category |
| `FinancialObject` |  | |  | `objnr` | `CHAR(22)` | Financial Object Number |
| `PnLEventType` |  | |  | `event_type` | `CHAR(10)` | Profit and Loss Event Type |
| `HasError` |  | |  | `has_error` | `CHAR(1)` | Error Flag for Data Record of Commodity Risk Analytics |
| `IsNotRelevantForMTMRisk` |  | |  | `is_not_relevant` | `CHAR(1)` | Indicates whether derivative entry is reporting relevant |
| `CalculationPeriodStartDate` |  | |  | `calc_start_date` | `DATS(8)` | Start Date of Calculation Period |
| `CalculationPeriodEndDate` |  | |  | `calc_end_date` | `DATS(8)` | End Date of Calculation Period |
| `TermStartDate` |  | |  | `start_term` | `DATS(8)` | Term Start |
| `TermEndDate` |  | |  | `end_term` | `DATS(8)` | Term End |
| `DeliveryDate` |  | |  | `delivery_date` | `DATS(8)` | Delivery Date of a Commodity Derivative (OBSOLETE) |
| `NumberOfCommodityContracts` |  | |  | `number_of_contracts` | `DEC(15)` | Number of Contracts |
| `CommodityPriceExposureUnit` |  | |  | `unit_of_measure` | `UNIT(3)` | Unit of Measure for the Commodity |
| `CommodityPriceExposureBaseUnit` |  | |  | `base_uom` | `UNIT(3)` | Base Unit of Measure for the Commodity |
| `CmmdtyPriceExpsrMassUnit` |  | |  | `cast ( mass_uom as cds_mass_uom )` | `UNIT(3)` | Mass Unit of Measure |
| `CmmdtyPriceExpsrVolumeUnit` |  | |  | `cast ( volume_uom as cds_volume_uom )` | `UNIT(3)` | Volume Unit of Measure |
| `CommodityPriceExposureQuantity` |  | |  | `quantity` | `QUAN(13)` | Quantity (OBSOLETE) |
| `CommodityPriceExposureBaseQty` |  | |  | `base_quantity` | `QUAN(13)` | Base Quantity |
| `CmmdtyPriceExpsrQtyInMassUnit` |  | |  | `cast ( mass_quantity as cds_qty_in_mass_uom )` | `QUAN(13)` | Quantity in Mass Unit of Measure |
| `CmmdtyPriceExpsrQtyInVolUnit` |  | |  | `cast ( volume_quantity as cds_qty_in_volume_uom )` | `QUAN(13)` | Quantity in Volume Unit of Measure |
| `CmmdtyPriceExpsrPaymentAmount` |  | |  | `amount` | `CURR(13)` | Contract Amount in Payment Currency |
| `CommodityPriceFixationStatus` |  | |  | `fixing_status` | `CHAR(1)` | Fixation Status (OBSOLETE) |
| `TreasuryPositionAccount` |  | |  | `futures_account` | `CHAR(10)` | Futures Account for Listed Options and Futures |
| `DerivativeContract` |  | |  | `derivative_contract_id` | `CHAR(13)` | Contract for Listed Options and Futures |
| `QuotationCurrency` |  | |  | `quot_currency` | `CUKY(5)` | Evaluation in Quotation Currency |
| `PaymentCurrency` |  | |  | `payt_currency` | `CUKY(5)` | Evaluation in Payment Currency |
| `OptionStrikePrice` |  | |  | `cty_strike_price` | `DEC(13)` | Strike price for commodity listed options |
| `OptionStrikeCurrency` |  | |  | `cty_strike_curr_unit` | `CHAR(5)` | Currency Unit of the Rate |
| `OptionPutCallCode` |  | |  | `option_direction` | `NUMC(1)` | Put/Call Indicator |
| `OptionExerciseType` |  | |  | `exercise_type` | `NUMC(1)` | Exercise Type (American or European) |
| `EndOfDayBusinessEntityKey` |  | |  | `entity_key` | `RAW(20)` | Key of an Business Entity requiring an End-of-day snapshot |
| `ReportingMonth` |  | |  | `cast(substring(reporting_date, 5, 2) as cds_reporting_month)` | `CHAR(3)` | Reporting Month |
| `ReportingYear` |  | |  | `cast(substring(reporting_date, 1, 4) as cds_reporting_year)` | `NUMC(4)` | Reporting Year |
| `FinInstrExternalReference` |  | |  | `external_reference` | `CHAR(16)` | External Reference |
| `TradedDrvtvContrSpecification` |  | |  | `traded_dcs` | `CHAR(20)` | Traded Derivative Contract Specification ID |
| `ParDrvtvContractSpecification` |  | |  | `parent_dcs` | `CHAR(20)` | Parent Derivative Contract Specification ID |
| `RiskViewIsNotRelevant` |  | |  | `ignr_rsk_view` | `CHAR(1)` | Ignore for Risk View |
| `FinancialTransactionPortfolio` |  | |  | `portfolio` | `CHAR(10)` | Portfolio |
| `CmmdtyHdgPlanExposureHedgeBook` |  | |  | `hedge_book` | `CHAR(10)` |  |
| `CommodityHedgePlanExposureID` |  | |  | `plan_exposure_id` | `CHAR(13)` |  |
| `_DerivativeContrSpecification` | | ✓ | | | | |
| `_MarketIdentifierCode` | | ✓ | | | | |
| `_PhysicalCommodity` | | ✓ | | | | |
| `_CommodityPriceFixationStatus` | | ✓ | | | | |
| `_FinAssetsMgmtProductType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DerivativeContrSpecification` | `I_DerivativeContrSpec` | [0..1] |
| `_MarketIdentifierCode` | `I_MarketIdentCode` | [0..1] |
| `_PhysicalCommodity` | `I_Cmmdty` | [0..1] |
| `_CommodityPriceFixationStatus` | `I_CmmdtyPriceFixationStatus` | [0..1] |
| `_FinAssetsMgmtProductType` | `I_FinAssetsMgntProductType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DERIVATIVECMMDTYEXPSR')/$value)*

```abap
@EndUserText.label: 'Drvtv Basic Layer Select data from VFIND'
@Analytics.dataCategory: #DIMENSION
//@VDM.private: false
@Metadata.allowExtensions:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IVFINDDB'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_DerivativeCmmdtyExpsr
  //  with parameters
  //    @Environment.systemField: #SYSTEM_DATE
  //    P_EvaluationDate : cds_evaluation_date

  as select from cmm_vfind

  association [0..1] to I_DerivativeContrSpec       as _DerivativeContrSpecification on $projection.DerivativeContrSpecification = _DerivativeContrSpecification.DerivativeContrSpecification

  association [0..1] to I_MarketIdentCode           as _MarketIdentifierCode         on $projection.MarketIdentifierCode = _MarketIdentifierCode.MarketIdentifierCode

  association [0..1] to I_Cmmdty                    as _PhysicalCommodity            on $projection.Commodity = _PhysicalCommodity.Commodity

  association [0..1] to I_CmmdtyPriceFixationStatus as _CommodityPriceFixationStatus on $projection.CommodityPriceFixationStatus = _CommodityPriceFixationStatus.CommodityPriceFixationStatus

  association [0..1] to I_FinAssetsMgntProductType  as _FinAssetsMgmtProductType     on $projection.FinancialAssetsMgmtProductType = _FinAssetsMgmtProductType.FinancialAssetsMgmtProductType

  association [0..1] to I_UnitOfMeasure             as _UnitOfMeasure                on $projection.CommodityPriceExposureUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_CompanyCode               as _CompanyCode                  on $projection.CompanyCode = _CompanyCode.CompanyCode


{
  key mandt                                                        as SAPClient,
  key company_code                                                 as CompanyCode,
  key exposure_id                                                  as CommodityPriceExposure,
  key exposure_cat                                                 as CommodityExposureCategory,
  key exposure_subkey                                              as CommodityPriceSubExposure,
  key version                                                      as CommodityPriceExposureVersion,
      valid_from_tst                                               as ValidityStartDateTime,
      valid_to_tst                                                 as ValidityEndDateTime,
      valid_from_date                                              as ValidityStartDate,
      valid_from_time                                              as ValidityStartTime,
      valid_to_date                                                as ValidityEndDate,
      valid_to_time                                                as ValidityEndTime,
      version_max                                                  as MaximumVersion,
      version_guid                                                 as RiskAnalyzerVersionUUID,
      expos_due_date                                               as ExposureDueDate,
      reporting_date                                               as ReportingDate,
      phys_comm_id                                                 as Commodity,
      side                                                         as CashFlowDirection,
      direction                                                    as TreasuryPositionLongShortCode,
      dcs                                                          as DerivativeContrSpecification,
      mic                                                          as MarketIdentifierCode,
      price_type                                                   as QuotationPriceType,
      tenor                                                        as TimeToMaturity,
      timing                                                       as CmmdtyForwardIndexTiming,
      keydate                                                      as MaturityKeyDate,
      contract_code                                                as DerivativeContractMaturityCode,
      product_cat                                                  as FinancialInstrProductCategory,
      product_type                                                 as FinancialAssetsMgmtProductType,
      f_trans_cat                                                  as FinInstrTransactionCategory,
      trans_type                                                   as FinancialInstrumentProductType,
      trans_act_type                                               as FinancialInstrActivityCategory,
      objnr                                                        as FinancialObject,
      event_type                                                   as PnLEventType,
      has_error                                                    as HasError,
      is_not_relevant                                              as IsNotRelevantForMTMRisk,
      calc_start_date                                              as CalculationPeriodStartDate,
      calc_end_date                                                as CalculationPeriodEndDate,
      start_term                                                   as TermStartDate,
      end_term                                                     as TermEndDate,
      delivery_date                                                as DeliveryDate,
      number_of_contracts                                          as NumberOfCommodityContracts,

      // Unit of Measures
      @Semantics.unitOfMeasure: true
      unit_of_measure                                              as CommodityPriceExposureUnit,

      @Semantics.unitOfMeasure: true
      base_uom                                                     as CommodityPriceExposureBaseUnit,

      @Semantics.unitOfMeasure: true
      cast ( mass_uom   as cds_mass_uom )                          as CmmdtyPriceExpsrMassUnit,

      @Semantics.unitOfMeasure: true
      cast ( volume_uom as cds_volume_uom )                        as CmmdtyPriceExpsrVolumeUnit,

      // Keyfigures
      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureUnit'
      quantity                                                     as CommodityPriceExposureQuantity,

      @Semantics.quantity.unitOfMeasure: 'CommodityPriceExposureBaseUnit'
      base_quantity                                                as CommodityPriceExposureBaseQty,

      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrMassUnit'
      cast ( mass_quantity as cds_qty_in_mass_uom )                as CmmdtyPriceExpsrQtyInMassUnit,

      @Semantics.quantity.unitOfMeasure: 'CmmdtyPriceExpsrVolumeUnit'
      cast ( volume_quantity as cds_qty_in_volume_uom )            as CmmdtyPriceExpsrQtyInVolUnit,
      
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      amount                                                       as CmmdtyPriceExpsrPaymentAmount,
      
      fixing_status                                                as CommodityPriceFixationStatus,
      futures_account                                              as TreasuryPositionAccount,
      derivative_contract_id                                       as DerivativeContract,

      //Currency Units
      @Semantics.currencyCode: true
      quot_currency                                                as QuotationCurrency,
      @Semantics.currencyCode: true
      payt_currency                                                as PaymentCurrency,

      cty_strike_price                                             as OptionStrikePrice,
      cty_strike_curr_unit                                         as OptionStrikeCurrency,
      option_direction                                             as OptionPutCallCode,
      exercise_type                                                as OptionExerciseType,
      entity_key                                                   as EndOfDayBusinessEntityKey,

      // Reporting Period and Year
      cast(substring(reporting_date, 5, 2) as cds_reporting_month) as ReportingMonth,
      @Semantics.calendar.year: true
      cast(substring(reporting_date, 1, 4) as cds_reporting_year)  as ReportingYear,
      external_reference                                           as FinInstrExternalReference,

      traded_dcs                                                   as TradedDrvtvContrSpecification,
      parent_dcs                                                   as ParDrvtvContractSpecification,
      @Semantics.booleanIndicator
      ignr_rsk_view                                                as RiskViewIsNotRelevant,
      
      portfolio                                                    as FinancialTransactionPortfolio,
      hedge_book                                                   as CmmdtyHdgPlanExposureHedgeBook,
      plan_exposure_id                                             as CommodityHedgePlanExposureID,

      // Additional data

      //      cast ( $parameters.P_EvaluationDate as cds_evaluation_date )       as EvaluationDate,

      // Associations

      _DerivativeContrSpecification,
      _MarketIdentifierCode,
      _PhysicalCommodity,
      _CommodityPriceFixationStatus,
      _FinAssetsMgmtProductType,
      _UnitOfMeasure,
      _CompanyCode

}
```
