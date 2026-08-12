---
name: I_FINTRANSCRDTLINEUTILZNCUBE
description: "This CDS view is used in the app Credit Line Analysis - Review Booklet to represent the data model for credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCRDTLINEUTILZNCUBE')/$value
semantic_en: "This CDS view is used in the app Credit Line Analysis - Review Booklet to represent the data model for credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Facility Utilization Data - Cube — CDS view giao diện dựa trên I_CreditLineUtilznWithRatio."
keywords:
  - "facility"
  - "utilization"
  - "data"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "date"
  - "counterparty"
  - "syndicated"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_FINTRANSCRDTLINEUTILZNCUBE

**This CDS view is used in the app Credit Line Analysis - Review Booklet to represent the data model for credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCRDTLINEUTILZNCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `Counterparty` | ✓ | |  |  | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | ✓ | |  |  | `CHAR(10)` | Syndicated Counterparty |
| `FacilityAuthorizedCompanyCode` | ✓ | |  | `cast( case when Utilization.FacilityAuthorizedCompanyCode is initial and RuleSet_CompanyCode.FacilityAllCoCodesAreAllowed is initial then '' else ( case when Utilization.FacilityAuthorizedCompanyCode is not initial and RuleSet_CompanyCode.FacilityAllCoCodesAreAllowed is not initial then Utilization.FacilityAuthorizedCompanyCode else RuleSet_CompanyCode.FacilityAuthorizedCompanyCode end ) end as bukrs )` | `CHAR(4)` | Company Code |
| `FcltyAuthorizedTransacCrcy` | ✓ | |  | `cast( case when Utilization.FcltyAuthorizedTransacCrcy is initial and RuleSet_TransactionCurrency.FcltyAllCurrenciesAreAllowed is initial then '' else ( case when Utilization.FcltyAuthorizedTransacCrcy is not initial and RuleSet_TransactionCurrency.FcltyAllCurrenciesAreAllowed is not initial then Utilization.FcltyAuthorizedTransacCrcy else RuleSet_TransactionCurrency.FcltyAuthorizedTransacCrcy end ) end as waers )` | `CUKY(5)` | Currency Key |
| `FcltyAuthzdBusinessPartner` | ✓ | |  | `cast( case when Utilization.FcltyAuthzdBusinessPartner is initial and RuleSet_BusinessPartner.FcltyAllBizPartnersAreAllwd is initial then '' else ( case when Utilization.FcltyAuthzdBusinessPartner is not initial and RuleSet_BusinessPartner.FcltyAllBizPartnersAreAllwd is not initial then Utilization.FcltyAuthzdBusinessPartner else RuleSet_BusinessPartner.FcltyAuthzdBusinessPartner end ) end as ftr_authzd_bp )` | `CHAR(10)` | Authorized Business Partner |
| `FacilityAuthorizedProductType` | ✓ | |  | `cast( case when Utilization.FacilityAuthorizedProductType is initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is initial then '' else ( case when Utilization.FacilityAuthorizedProductType is not initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is not initial then Utilization.FacilityAuthorizedProductType else RuleSet_TransactionType.FacilityAuthorizedProductType end ) end as vvsart )` | `CHAR(3)` | Product Type |
| `FcltyAuthzdTransactionType` | ✓ | |  | `cast( case when Utilization.FcltyAuthzdTransactionType is initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is initial then '' else ( case when Utilization.FcltyAuthzdTransactionType is not initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is not initial then Utilization.FcltyAuthzdTransactionType else RuleSet_TransactionType.FcltyAuthzdTransactionType end ) end as tb_sfhaart )` | `CHAR(3)` | Financial Transaction Type |
| `CreditLineReportingPeriod` |  | |  |  | `CHAR(10)` | Reporting Period |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key of Company Code |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TotalAmountInTransactionCrcy` |  | |  |  | `CURR(17)` | Credit Line in Transaction Currency |
| `UtilizedAmountInTransCrcy` |  | |  |  | `CURR(17)` | Utilized Amount in Transaction Currency |
| `AvailableAmountInTransCrcy` |  | |  |  | `DEC(23)` |  |
| `FcltyOvrdrftAmtInTransCrcy` |  | |  |  | `DEC(23)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Utilized Amount in Display Currency |
| `AvailableAmountInDisplayCrcy` |  | |  | `cast( case when cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) > cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) then ( cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) - cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) ) else cast(0 as abap.dec(23, 2)) end as abap.dec(23, 2) )` | `DEC(23)` |  |
| `FcltyOvrdrftAmtInDisplayCrcy` |  | |  | `cast( case when cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) > cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) then ( cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) - cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) ) else cast(0 as abap.dec(23, 2)) end as abap.dec(23, 2) )` | `DEC(23)` |  |
| `CreditLineUtilizationRatio` |  | |  |  | `DEC(23)` |  |
| `CrdtLineUnderUtilizationRatio` |  | |  |  | `DEC(23)` |  |
| `FcltyTermEndExceededIsAllowed` |  | |  |  | `CHAR(1)` | Exceedance of End of Term |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `FacilityAllCoCodesAreAllowed` |  | |  |  | `CHAR(1)` | Áll Company Codes Are Allowed |
| `FcltyAllCurrenciesAreAllowed` |  | |  |  | `CHAR(1)` | All currencies are allowed |
| `FcltyAllBizPartnersAreAllwd` |  | |  |  | `CHAR(1)` | All business partners are allowed |
| `FcltyAllTransacTypesAreAllwd` |  | |  |  | `CHAR(1)` | All transaction types are allowed |
| `_Counterparty` | | ✓ | | | | |
| `_SynCounterparty` | | ✓ | | | | |
| `_Facility` | | ✓ | | | | |
| `_FinancialTransactionCategory` | | ✓ | | | | |
| `_FinancialInstrProductCategory` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |
| `_Portfolio` | | ✓ | | | | |
| `_TermEndExceedAllowed` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_FcltyAuthorizedCompanyCode` | | ✓ | | | | |
| `_FcltyAuthzdBusinessPartner` | | ✓ | | | | |
| `_FcltyAuthorizedProductType` | | ✓ | | | | |
| `_FcltyAuthzdTransactionType` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Counterparty` | `I_Ftr_Counterparty` | [0..1] |
| `_SynCounterparty` | `I_Ftr_Counterparty` | [0..1] |
| `_Facility` | `I_Ftr_Facility_Vh` | [1..1] |
| `_FinancialTransactionCategory` | `I_Ftr_Fac_Trans_Cat_Vh` | [1..1] |
| `_FinancialInstrProductCategory` | `I_FinancialInstrProdCat` | [1..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |
| `_Portfolio` | `I_TreasuryPortfolio` | [0..1] |
| `_TermEndExceedAllowed` | `I_FacilityTermEndExceededAllwd` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FinancialInstrProdType` | `I_FinancialinstrProductType` | [0..1] |
| `_FcltyAuthorizedCompanyCode` | `I_CompanyCode` | [0..1] |
| `_FcltyAuthzdBusinessPartner` | `I_Ftr_Counterparty` | [0..1] |
| `_FcltyAuthorizedProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_FcltyAuthzdTransactionType` | `I_FinancialInstrTransType` | [0..1] |
| `_ExchangeRateType` | `I_ExchangeRateType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCRDTLINEUTILZNCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCRDTLINEUTILZNCUBE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@Analytics.internalName:#LOCAL
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Facility Utilization Data - Cube'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #CUBE }
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@Analytics.intentBasedNavigation.filterMapper: 'CL_FTR_CLA_RB_CUBE_EXIT'

define view entity I_FinTransCrdtLineUtilznCube
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate                  : vdm_v_start_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate                    : vdm_v_end_date,
    P_CrdtLineReportingFrequency : ftr_date_granularity,
    P_DisplayCurrency            : ftr_display_currency,
    P_ExchangeRateType           : kurst,
    P_FcltyAuthorizedCompanyCode : bukrs,
    P_FcltyAuthorizedTransacCrcy : waers,
    P_FcltyAuthzdBusinessPartner : ftr_authzd_bp,
    P_FcltyAuthorizedProductType : ftr_authzd_prod_type,
    P_FcltyAuthzdTransactionType : ftr_authzd_transac_type
  as select from I_CreditLineUtilznWithRatio(
                       P_StartDate                   : $parameters.P_StartDate,
                       P_EndDate                     : $parameters.P_EndDate,
                       P_CrdtLineReportingFrequency  : $parameters.P_CrdtLineReportingFrequency,
                       P_DisplayCurrency             : $parameters.P_DisplayCurrency,
                       P_ExchangeRateType            : $parameters.P_ExchangeRateType,
                       P_FcltyAuthorizedCompanyCode  : $parameters.P_FcltyAuthorizedCompanyCode,
                       P_FcltyAuthorizedTransacCrcy  : $parameters.P_FcltyAuthorizedTransacCrcy,
                       P_FcltyAuthzdBusinessPartner  : $parameters.P_FcltyAuthzdBusinessPartner,
                       P_FcltyAuthorizedProductType  : $parameters.P_FcltyAuthorizedProductType,
                       P_FcltyAuthzdTransactionType  : $parameters.P_FcltyAuthzdTransactionType )                         as Utilization
    inner join   I_FacilityCompanyCodeRuleset( P_FcltyAuthorizedCompanyCode  : $parameters.P_FcltyAuthorizedCompanyCode ) as RuleSet_CompanyCode         on  Utilization.CompanyCode          = RuleSet_CompanyCode.CompanyCode
                                                                                                                                                         and Utilization.FinancialTransaction = RuleSet_CompanyCode.FinancialTransaction
    inner join   I_FcltyTransacCurrencyRuleset( P_FcltyAuthorizedTransacCrcy : $parameters.P_FcltyAuthorizedTransacCrcy ) as RuleSet_TransactionCurrency on  Utilization.CompanyCode          = RuleSet_TransactionCurrency.CompanyCode
                                                                                                                                                         and Utilization.FinancialTransaction = RuleSet_TransactionCurrency.FinancialTransaction
    inner join   I_FcltyBusinessPartnerRuleset( P_FcltyAuthzdBusinessPartner : $parameters.P_FcltyAuthzdBusinessPartner ) as RuleSet_BusinessPartner     on  Utilization.CompanyCode          = RuleSet_BusinessPartner.CompanyCode
                                                                                                                                                         and Utilization.FinancialTransaction = RuleSet_BusinessPartner.FinancialTransaction
    inner join   I_FcltyTransactionTypeRuleset( P_FcltyAuthorizedProductType : $parameters.P_FcltyAuthorizedProductType,
                                                P_FcltyAuthzdTransactionType : $parameters.P_FcltyAuthzdTransactionType ) as RuleSet_TransactionType     on  Utilization.CompanyCode          = RuleSet_TransactionType.CompanyCode
                                                                                                                                                         and Utilization.FinancialTransaction = RuleSet_TransactionType.FinancialTransaction
  association [0..1] to I_Ftr_Counterparty             as _Counterparty                  on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [0..1] to I_Ftr_Counterparty             as _SynCounterparty               on  $projection.SyndicatedCounterparty = _SynCounterparty.BusinessPartner
  association [1..1] to I_Ftr_Facility_Vh              as _Facility                      on  $projection.CompanyCode          = _Facility.CompanyCode
                                                                                         and $projection.FinancialTransaction = _Facility.FinancialTransaction
  association [1..1] to I_Ftr_Fac_Trans_Cat_Vh         as _FinancialTransactionCategory  on  $projection.FinancialInstrProductCategory = _FinancialTransactionCategory.FinancialInstrProductCategory
                                                                                         and $projection.FinInstrTransactionCategory   = _FinancialTransactionCategory.FinInstrTransactionCategory
  association [1..1] to I_FinancialInstrProdCat        as _FinancialInstrProductCategory on  $projection.FinancialInstrProductCategory = _FinancialInstrProductCategory.FinancialInstrProductCategory
  association [1..1] to I_FinancialInstrTransType      as _FinancialInstrTransType       on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                         and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType
  association [0..1] to I_TreasuryPortfolio            as _Portfolio                     on  $projection.CompanyCode = _Portfolio.CompanyCode
                                                                                         and $projection.Portfolio   = _Portfolio.Portfolio
  association [1..1] to I_FacilityTermEndExceededAllwd as _TermEndExceedAllowed          on  $projection.FcltyTermEndExceededIsAllowed = _TermEndExceedAllowed.FcltyTermEndExceededIsAllowed
  association [1..1] to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialinstrProductType    as _FinancialInstrProdType        on  $projection.FinancialInstrumentProductType = _FinancialInstrProdType.FinancialInstrumentProductType
  association [0..1] to I_CompanyCode                  as _FcltyAuthorizedCompanyCode    on  $projection.FacilityAuthorizedCompanyCode = _FcltyAuthorizedCompanyCode.CompanyCode
  association [0..1] to I_Ftr_Counterparty             as _FcltyAuthzdBusinessPartner    on  $projection.FcltyAuthzdBusinessPartner = _FcltyAuthzdBusinessPartner.BusinessPartner
  association [0..1] to I_FinancialinstrProductType    as _FcltyAuthorizedProductType    on  $projection.FacilityAuthorizedProductType = _FcltyAuthorizedProductType.FinancialInstrumentProductType
  association [0..1] to I_FinancialInstrTransType      as _FcltyAuthzdTransactionType    on  $projection.FcltyAuthzdTransactionType    = _FcltyAuthzdTransactionType.FinancialInstrTransactionType
                                                                                         and $projection.FacilityAuthorizedProductType = _FcltyAuthzdTransactionType.FinancialInstrumentProductType
  association [0..1] to I_ExchangeRateType             as _ExchangeRateType              on  $projection.ExchangeRateType = _ExchangeRateType.ExchangeRateType
{
           @ObjectModel.foreignKey.association: '_CompanyCode'
  key      Utilization.CompanyCode,
           @ObjectModel.foreignKey.association: '_Facility'
  key      Utilization.FinancialTransaction,
  key      Utilization.KeyDate,
           @ObjectModel.foreignKey.association: '_Counterparty'
  key      Utilization.Counterparty,
           @ObjectModel.foreignKey.association: '_SynCounterparty'
  key      Utilization.SyndicatedCounterparty,
           @ObjectModel.foreignKey.association: '_FcltyAuthorizedCompanyCode'
  key      cast( case when Utilization.FacilityAuthorizedCompanyCode is initial and RuleSet_CompanyCode.FacilityAllCoCodesAreAllowed is initial then ''
             else ( case when Utilization.FacilityAuthorizedCompanyCode is not initial and RuleSet_CompanyCode.FacilityAllCoCodesAreAllowed is not initial then Utilization.FacilityAuthorizedCompanyCode
                         else RuleSet_CompanyCode.FacilityAuthorizedCompanyCode end ) end as bukrs )         as FacilityAuthorizedCompanyCode,
  key      cast( case when Utilization.FcltyAuthorizedTransacCrcy is initial and RuleSet_TransactionCurrency.FcltyAllCurrenciesAreAllowed is initial then ''
              else ( case when Utilization.FcltyAuthorizedTransacCrcy is not initial and RuleSet_TransactionCurrency.FcltyAllCurrenciesAreAllowed is not initial then Utilization.FcltyAuthorizedTransacCrcy
                          else RuleSet_TransactionCurrency.FcltyAuthorizedTransacCrcy end ) end as waers )   as FcltyAuthorizedTransacCrcy,
           @ObjectModel.foreignKey.association: '_FcltyAuthzdBusinessPartner'
  key      cast( case when Utilization.FcltyAuthzdBusinessPartner is initial and RuleSet_BusinessPartner.FcltyAllBizPartnersAreAllwd is initial then ''
             else ( case when Utilization.FcltyAuthzdBusinessPartner is not initial and RuleSet_BusinessPartner.FcltyAllBizPartnersAreAllwd is not initial then Utilization.FcltyAuthzdBusinessPartner
                        else RuleSet_BusinessPartner.FcltyAuthzdBusinessPartner end ) end as ftr_authzd_bp ) as FcltyAuthzdBusinessPartner,
           @ObjectModel.foreignKey.association: '_FcltyAuthorizedProductType'
  key      cast( case when Utilization.FacilityAuthorizedProductType is initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is initial then ''
              else ( case when Utilization.FacilityAuthorizedProductType is not initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is not initial then Utilization.FacilityAuthorizedProductType
                          else RuleSet_TransactionType.FacilityAuthorizedProductType end ) end as vvsart )   as FacilityAuthorizedProductType,
           @ObjectModel.foreignKey.association: '_FcltyAuthzdTransactionType'
  key      cast( case when Utilization.FcltyAuthzdTransactionType is initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is initial then ''
              else ( case when Utilization.FcltyAuthzdTransactionType is not initial and RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd is not initial then Utilization.FcltyAuthzdTransactionType
                          else RuleSet_TransactionType.FcltyAuthzdTransactionType end ) end as tb_sfhaart )  as FcltyAuthzdTransactionType,

           Utilization.CreditLineReportingPeriod,
           Utilization.TransactionCurrency                                                                   as TransactionCurrency,
           @ObjectModel.foreignKey.association: '_FinancialInstrProdType'
           Utilization.FinancialInstrumentProductType,
           @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
           Utilization.FinancialInstrTransactionType,
           @ObjectModel.foreignKey.association: '_FinancialInstrProductCategory'
           Utilization.FinancialInstrProductCategory,
           @ObjectModel.foreignKey.association: '_FinancialTransactionCategory'
           Utilization.FinInstrTransactionCategory,
           Utilization.CompanyCodeCountry,
           @ObjectModel.foreignKey.association: '_Portfolio'
           Utilization.Portfolio,


           @Semantics.amount.currencyCode: 'TransactionCurrency'
           @Aggregation.default: #SUM
           Utilization.TotalAmountInTransactionCrcy,
           @Semantics.amount.currencyCode: 'TransactionCurrency'
           @Aggregation.default: #SUM
           Utilization.UtilizedAmountInTransCrcy,
           @Semantics.amount.currencyCode: 'TransactionCurrency'
           @Aggregation.default: #SUM
           Utilization.AvailableAmountInTransCrcy,
           @Semantics.amount.currencyCode: 'TransactionCurrency'
           @Aggregation.default: #SUM
           Utilization.FcltyOvrdrftAmtInTransCrcy,

           @Consumption.hidden: true
           Utilization.DisplayCurrency,
           @Semantics.amount.currencyCode: 'DisplayCurrency'
           @Aggregation.default: #SUM
           Utilization.TotalAmountInDisplayCrcy,
           @Semantics.amount.currencyCode: 'DisplayCurrency'
           @Aggregation.default: #SUM
           Utilization.UtilizedAmountInDisplayCrcy,
           @Semantics.amount.currencyCode: 'DisplayCurrency'
           @Aggregation.default: #SUM
           cast(
              case when cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) > cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2))
                   then ( cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) - cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) )
                   else cast(0 as abap.dec(23, 2))
              end as abap.dec(23, 2) )                                                                       as AvailableAmountInDisplayCrcy,
           @Semantics.amount.currencyCode: 'DisplayCurrency'
           @Aggregation.default: #SUM
           cast(
              case when cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) > cast($projection.totalamountindisplaycrcy as abap.dec(23, 2))
                   then ( cast($projection.utilizedamountindisplaycrcy as abap.dec(23, 2)) - cast($projection.totalamountindisplaycrcy as abap.dec(23, 2)) )
                   else cast(0 as abap.dec(23, 2))
              end as abap.dec(23, 2) )                                                                       as FcltyOvrdrftAmtInDisplayCrcy,

           @Aggregation.default: #SUM
           Utilization.CreditLineUtilizationRatio,
           @Aggregation.default: #SUM
           Utilization.CrdtLineUnderUtilizationRatio,

           @Semantics.booleanIndicator: true
           Utilization.FcltyTermEndExceededIsAllowed,

           @ObjectModel.foreignKey.association: '_ExchangeRateType'
           Utilization.ExchangeRateType,

           RuleSet_CompanyCode.FacilityAllCoCodesAreAllowed                                                  as FacilityAllCoCodesAreAllowed,
           RuleSet_TransactionCurrency.FcltyAllCurrenciesAreAllowed                                          as FcltyAllCurrenciesAreAllowed,
           RuleSet_BusinessPartner.FcltyAllBizPartnersAreAllwd                                               as FcltyAllBizPartnersAreAllwd,
           RuleSet_TransactionType.FcltyAllTransacTypesAreAllwd                                              as FcltyAllTransacTypesAreAllwd,

           _Facility,
           _Portfolio,
           _Counterparty,
           _SynCounterparty,
           _FinancialTransactionCategory,
           _FinancialInstrProductCategory,
           _FinancialInstrTransType,
           _TermEndExceedAllowed,
           _CompanyCode,
           _FinancialInstrProdType,
           _ExchangeRateType,

           _FcltyAuthorizedCompanyCode,
           _FcltyAuthzdBusinessPartner,
           _FcltyAuthorizedProductType,
           _FcltyAuthzdTransactionType
}
```
