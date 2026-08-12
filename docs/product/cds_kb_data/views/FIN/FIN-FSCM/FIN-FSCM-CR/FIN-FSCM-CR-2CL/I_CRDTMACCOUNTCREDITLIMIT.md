---
name: I_CRDTMACCOUNTCREDITLIMIT
description: "Crdtmaccountcreditlimit"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTMACCOUNTCREDITLIMIT

**Crdtmaccountcreditlimit**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CreditSegment` | ✓ | |  |  |  |  |
| `CreditSegmentCurrency` |  | |  |  |  |  |
| `EffectiveTotalCreditLimitAmt` |  | |  | `cast( ( CustomerCreditLimitAmount + SgmSecuredCreditLimitAmount + SgmInsuredCreditLimitAmount + SgmTempIncreasedCreditLmtAmt + ProfSecLimitAmount + ProfInsLimitAmount + ProfTmpIncrLimitAmount ) as ukm_effectivetotalcrdlimitamt )` |  |  |
| `CustomerCreditLimitAmount` |  | |  |  |  |  |
| `SecuredCreditLimitAmount` |  | |  | `cast( ( SgmSecuredCreditLimitAmount + ProfSecLimitAmount ) as ukm_securedcreditlimitamt )` |  |  |
| `InsuredCreditLimitAmount` |  | |  | `cast( ( SgmInsuredCreditLimitAmount + ProfInsLimitAmount ) as ukm_insuredcreditlimitamt )` |  |  |
| `TemporaryIncreasedCreditLmtAmt` |  | |  | `cast( ( SgmTempIncreasedCreditLmtAmt + ProfTmpIncrLimitAmount ) as ukm_tmpincreasedcrdlimitamt )` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditManagementSegment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditManagementSegment` | `I_CreditManagementSegment` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICRDMACCTCRDLMT'
@EndUserText.label: 'Credit Mgmt Account Credit Limit'
@VDM.viewType: #COMPOSITE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.representativeKey: 'CreditSegment'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                     
define view I_CrdtMAccountCreditLimit
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    //    @Consumption.defaultValue: 'EUR'
    //    P_DisplayCurrency  : vdm_v_display_currency,
    //    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    //    @Consumption.defaultValue:
    P_KeyDate          : sydate
  as select from P_TotalCreditLimitAmount_1
                 (  P_ExchangeRateType: :P_ExchangeRateType,
                    P_KeyDate: :P_KeyDate
                 )
  association [0..1] to I_BusinessPartner         as _BusinessPartner         on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementSegment as _CreditManagementSegment on $projection.CreditSegment = _CreditManagementSegment.CreditSegment
{
        @ObjectModel.foreignKey.association: '_BusinessPartner'
  key   BusinessPartner,
        @ObjectModel.foreignKey.association: '_CreditManagementSegment'
  key   CreditSegment,
        CreditSegmentCurrency,

        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        cast( ( CustomerCreditLimitAmount
                + SgmSecuredCreditLimitAmount + SgmInsuredCreditLimitAmount + SgmTempIncreasedCreditLmtAmt
                + ProfSecLimitAmount + ProfInsLimitAmount + ProfTmpIncrLimitAmount
              ) as ukm_effectivetotalcrdlimitamt ) as EffectiveTotalCreditLimitAmt,

        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        CustomerCreditLimitAmount,

        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        cast( ( SgmSecuredCreditLimitAmount + ProfSecLimitAmount
              ) as ukm_securedcreditlimitamt )     as SecuredCreditLimitAmount,

        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        cast( ( SgmInsuredCreditLimitAmount + ProfInsLimitAmount
              ) as ukm_insuredcreditlimitamt )     as InsuredCreditLimitAmount,

        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        cast( ( SgmTempIncreasedCreditLmtAmt + ProfTmpIncrLimitAmount
              ) as ukm_tmpincreasedcrdlimitamt )   as TemporaryIncreasedCreditLmtAmt,

        _BusinessPartner,
        _CreditManagementSegment

        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        ProfSecLimitAmount,
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        ProfInsLimitAmount,
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        ProfTmpIncrLimitAmount,
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        SgmSecuredCreditLimitAmount,
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        SgmInsuredCreditLimitAmount,
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        SgmTempIncreasedCreditLmtAmt,
        //
        //        @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
        //        ( SgmSecuredCreditLimitAmount + SgmInsuredCreditLimitAmount + SgmTempIncreasedCreditLmtAmt
        //          + ProfSecLimitAmount + ProfInsLimitAmount + ProfTmpIncrLimitAmount
        //        )                                                         as AdditionalTotalCreditLimitAmt
}
```
