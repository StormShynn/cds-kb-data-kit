---
name: I_CREDITACCOUNTEXTENDED
description: "Creditaccountextended"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - text
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITACCOUNTEXTENDED

**Creditaccountextended**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CreditSegment` | ✓ | |  | `cast( CreditSegment as farp_credit_segment preserving type )` |  |  |
| `CreditRiskClass` |  | |  | `cast( _Partner.CreditRiskClass as farp_risk_class preserving type )` |  |  |
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)` |  |  |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `CustomerCreditExposureAmount` |  | |  | `cast( CustomerCreditExposureAmount as farp_credit_exposure preserving type )` |  |  |
| `CustomerCreditLimitAmount` |  | |  | `cast( CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )` |  |  |
| `CreditLimitCalculatedAmount` |  | |  | `cast( CreditLimitCalculatedAmount as farp_credlimit_calculated_amt preserving type )` |  |  |
| `CreditLimitRequestedAmount` |  | |  | `cast( CreditLimitRequestedAmount as farp_credlimit_requested_amt preserving type )` |  |  |
| `NumberOfBusinessPartners` |  | |  | `cast( NumberOfBusinessPartners as farp_number_of_bp )` |  |  |
| `CrdtLimitIsEqualCrdtLimitCalcd` |  | |  | `cast( CrdtLimitIsEqualCrdtLimitCalcd as farp_crdtlmtisequalcrdtlmtcalc preserving type )` |  |  |
| `CrdtLimitIsEqualCrdtLimitReqd` |  | |  | `cast( CrdtLimitIsEqualCrdtLimitReqd as farp_crdtlmt_eq_rdtlmtreqd )` |  |  |
| `CreditAccountIsBlocked` |  | |  | `cast( CreditAccountIsBlocked as farp_crdtacct_is_blocked preserving type )` |  |  |
| `CreditLimitValidityEndDate` |  | |  | `cast( CreditLimitValidityEndDate as farp_crdtlmt_validity_enddate preserving type )` |  |  |
| `CreditLimitLastChangeDate` |  | |  | `cast( CreditLimitLastChangeDate as farp_crdt_lmt_last_change_date preserving type )` |  |  |
| `CreditAccountGroup` |  | |  | `cast( _Partner.CreditAccountGroup as ukm_cred_group )` |  |  |
| `CrdtMgmtBusinessPartnerGroup` |  | |  | `cast(_Partner.CrdtMgmtBusinessPartnerGroup as ukm_cred_group preserving type)` |  |  |
| `CreditAccountResubmissionDate` |  | |  | `cast( CreditAccountResubmissionDate as ukm_follow_up_dt preserving type )` |  |  |
| `BusinessPartnerIsCritical` |  | |  | `cast( BusinessPartnerIsCritical as farp_critical_account preserving type )` |  |  |
| `CreditLimitIsZero` |  | |  | `cast( CreditLimitIsZero as farp_crdtlmt_is_zero preserving type )` |  |  |
| `CreditAccountBlockReason` |  | |  | `cast( CreditAccountBlockReason as farp_crdtacct_block_reason preserving type )` |  |  |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  | `cast( CrdtLmtIsReqdFrmAutomCalc as farp_crdtlmt_reqdfrm_automcalc preserving type )` |  |  |
| `CreditLimitReqdValidityEndDate` |  | |  | `cast( CreditLimitReqdValidityEndDate as farp_crdtlmt_reqd_enddate preserving type )` |  |  |
| `CreditLimitRequestDate` |  | |  | `cast( CreditLimitRequestDate as farp_crdtlmt_reqd_date preserving type )` |  |  |
| `CrdtLimitValidityRemainingDays` |  | |  | `cast( CrdtLimitValidityRemainingDays as farp_crdtlmt_remaining_days preserving type )` |  |  |
| `CreditLimitLastChangeDays` |  | |  | `cast( CreditLimitLastChangeDays as farp_crdtlmt_last_change_days preserving type )` |  |  |
| `ExchangeRateType` |  | |  | `:P_ExchangeRateType` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CustomerCreditGroup` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |
| `_BlockReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Partner` | `I_CreditManagementBP` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CustomerCreditGroup` | `I_CustomerCreditGroup` | [0..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |
| `_BlockReason` | `I_CreditBlockReason` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Credit Account Extended'
@AbapCatalog.sqlViewName: 'ICRDTACCTEXTEND'
@AbapCatalog.compiler.compareFilter:true
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                     
define view I_CreditAccountExtended
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    P_ReadLineItem     : read_fiar_lineitems,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate
  as select from P_CreditAccountData
                 (
                 P_ExchangeRateDate: :P_KeyDate,
                 P_ExchangeRateType: :P_ExchangeRateType,
                 P_DisplayCurrency: :P_DisplayCurrency,
                 P_ReadLineItem : :P_ReadLineItem,
                 P_KeyDate : :P_KeyDate
                 )
  association [0..1] to I_BusinessPartner         as _BusinessPartner      on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementBP      as _Partner              on  $projection.BusinessPartner = _Partner.BusinessPartner
  association [1..1] to I_Currency                as _DisplayCurrency      on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_CreditRiskClass         as _CreditRiskClass      on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_Country                 as _Country              on  $projection.Country = _Country.Country
  association [0..1] to I_Region                  as _Region               on  $projection.Country = _Region.Country
                                                                           and $projection.Region  = _Region.Region
  association [0..1] to I_CreditManagementSegment as _CreditSegment        on  $projection.CreditSegment = _CreditSegment.CreditSegment

  //deprecated
  association [0..1] to I_CustomerCreditGroup     as _CustomerCreditGroup  on  $projection.CreditAccountGroup = _CustomerCreditGroup.CreditAccountGroup

  association [0..1] to I_CrdtMBusPartnerGroup    as _CrdtMBusPartnerGroup on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup
  association [0..1] to I_CreditBlockReason       as _BlockReason          on  $projection.CreditAccountBlockReason = _BlockReason.CreditAccountBlockReason
{
      @ObjectModel.foreignKey.association: '_Partner'
  key BusinessPartner,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      //  key cast( cast( CreditSegment as abap.char(10)) as farp_credit_segment preserving type )                    as CreditSegment,
  key cast( CreditSegment as farp_credit_segment preserving type )                                            as CreditSegment,

      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      cast( _Partner.CreditRiskClass as farp_risk_class preserving type )                                     as CreditRiskClass,

      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type) as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                         as Region,

      @Semantics.currencyCode: true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CustomerCreditExposureAmount as farp_credit_exposure preserving type )                            as CustomerCreditExposureAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )                               as CustomerCreditLimitAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CreditLimitCalculatedAmount as farp_credlimit_calculated_amt preserving type )                    as CreditLimitCalculatedAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CreditLimitRequestedAmount as farp_credlimit_requested_amt preserving type )                      as CreditLimitRequestedAmount,

      @DefaultAggregation: #SUM
      cast( NumberOfBusinessPartners as farp_number_of_bp )                                                   as NumberOfBusinessPartners,

      cast( CrdtLimitIsEqualCrdtLimitCalcd as farp_crdtlmtisequalcrdtlmtcalc preserving type )                as CrdtLimitIsEqualCrdtLimitCalcd,
      cast( CrdtLimitIsEqualCrdtLimitReqd as farp_crdtlmt_eq_rdtlmtreqd )                                     as CrdtLimitIsEqualCrdtLimitReqd,
      cast( CreditAccountIsBlocked as farp_crdtacct_is_blocked preserving type )                              as CreditAccountIsBlocked,

      cast( CreditLimitValidityEndDate as farp_crdtlmt_validity_enddate preserving type )                     as CreditLimitValidityEndDate,
      cast( CreditLimitLastChangeDate as farp_crdt_lmt_last_change_date preserving type )                     as CreditLimitLastChangeDate,
      //      cast( CreditCoordinator as farp_crdtacct_coordinator )                                            as CreditCoordinator,

      // deprecated.
      @ObjectModel.foreignKey.association: '_CustomerCreditGroup'
      cast( _Partner.CreditAccountGroup as ukm_cred_group )                                                   as CreditAccountGroup, //deprecated
      //      cast( _Partner.CreditAccountGroup as ukm_cust_group )                                                   as CreditAccountGroup, //deprecated

      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      cast(_Partner.CrdtMgmtBusinessPartnerGroup as ukm_cred_group preserving type)                           as CrdtMgmtBusinessPartnerGroup,

      cast( CreditAccountResubmissionDate as ukm_follow_up_dt preserving type )                               as CreditAccountResubmissionDate,

      //      @DefaultAggregation: #SUM
      //      cast( BusinessPartnerIsCritical as farp_crdtacct_is_critical )                                    as BusinessPartnerIsCritical,
      cast( BusinessPartnerIsCritical as farp_critical_account preserving type )                              as BusinessPartnerIsCritical,
      cast( CreditLimitIsZero as farp_crdtlmt_is_zero preserving type )                                       as CreditLimitIsZero,
      @ObjectModel.foreignKey.association: '_BlockReason'
      cast( CreditAccountBlockReason as farp_crdtacct_block_reason preserving type )                          as CreditAccountBlockReason,
      cast( CrdtLmtIsReqdFrmAutomCalc as farp_crdtlmt_reqdfrm_automcalc preserving type )                     as CrdtLmtIsReqdFrmAutomCalc,
      cast( CreditLimitReqdValidityEndDate as farp_crdtlmt_reqd_enddate preserving type )                     as CreditLimitReqdValidityEndDate,
      cast( CreditLimitRequestDate as farp_crdtlmt_reqd_date preserving type )                                as CreditLimitRequestDate,
      @DefaultAggregation: #MIN
      cast( CrdtLimitValidityRemainingDays as farp_crdtlmt_remaining_days preserving type )                   as CrdtLimitValidityRemainingDays,
      @DefaultAggregation: #MIN
      cast( CreditLimitLastChangeDays as farp_crdtlmt_last_change_days preserving type )                      as CreditLimitLastChangeDays,
      :P_ExchangeRateType                                                                                     as ExchangeRateType,

      _DisplayCurrency,
      _CreditRiskClass,
      _CreditSegment,
      _Country,
      _Region,
      _BusinessPartner,
      _Partner,
      _CustomerCreditGroup,
      _CrdtMBusPartnerGroup,
      _BlockReason
};
```
