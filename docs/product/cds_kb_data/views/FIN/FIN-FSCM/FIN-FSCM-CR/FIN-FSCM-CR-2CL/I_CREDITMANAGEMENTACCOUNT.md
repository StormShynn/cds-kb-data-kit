---
name: I_CREDITMANAGEMENTACCOUNT
description: "Credit ManagementMENTACCOUNT"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
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
# I_CREDITMANAGEMENTACCOUNT

**Credit ManagementMENTACCOUNT**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `CreditSegment` | ✓ | |  | `cast( credit_sgmnt as ukm_credit_sgmnt preserving type )` |  |  |
| `CreditSegmentCurrency` |  | | `_CreditSegment` | `CreditSegmentCurrency` |  |  |
| `CustomerCreditLimitAmount` |  | |  | `credit_limit` |  |  |
| `CreditLimitCalculatedAmount` |  | |  | `cred_lim_calc` |  |  |
| `CreditLimitRequestedAmount` |  | |  | `cred_lim_req` |  |  |
| `CreditAccountIsBlocked` |  | |  | `xblocked` |  |  |
| `CreditLimitValidityEndDate` |  | |  | `limit_valid_date` |  |  |
| `CreditLimitLastChangeDate` |  | |  | `limit_chg_date` |  |  |
| `CreditCoordinator` |  | |  | `coordinator` |  |  |
| `CreditAccountResubmissionDate` |  | |  | `follow_up_dt` |  |  |
| `BusinessPartnerIsCritical` |  | |  | `cast( xcritical as ukm_critical_account preserving type )` |  |  |
| `CreditLimitIsZero` |  | |  | `x_limit_zero` |  |  |
| `CreditAccountBlockReason` |  | |  | `block_reason` |  |  |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  | `automatic_req` |  |  |
| `CreditLimitReqdValidityEndDate` |  | |  | `lim_val_date_req` |  |  |
| `CreditLimitRequestDate` |  | |  | `req_date` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditAccount` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditBlockReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_CreditAccount` | `I_CreditManagementBP` | [1..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_CreditBlockReason` | `I_CreditBlockReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICREDMGMNTACCNT'
@EndUserText.label: 'Credit Management Account'
@VDM.viewType: #BASIC
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK   //CDS Hardening
@AccessControl.personalData.blocking
@Metadata.ignorePropagatedAnnotations:true
//@ObjectModel.representativeKey: 'BusinessPartner'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CreditManagementAccount
  as select from ukmbp_cms_sgm
  association [1..1] to I_BusinessPartner         as _BusinessPartner   on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CreditManagementBP      as _CreditAccount     on $projection.BusinessPartner = _CreditAccount.BusinessPartner
  association [1..1] to I_CreditManagementSegment as _CreditSegment     on $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CreditBlockReason       as _CreditBlockReason on $projection.CreditAccountBlockReason = _CreditBlockReason.CreditAccountBlockReason
{
      // @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner                                                   as BusinessPartner,
      //      @ObjectModel.foreignKey.association: '_CreditSegment'
  key cast( credit_sgmnt as ukm_credit_sgmnt preserving type )  as CreditSegment,

      _CreditSegment.CreditSegmentCurrency                      as CreditSegmentCurrency,

      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      credit_limit                                              as CustomerCreditLimitAmount,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      cred_lim_calc                                             as CreditLimitCalculatedAmount,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      cred_lim_req                                              as CreditLimitRequestedAmount,
      xblocked                                                  as CreditAccountIsBlocked,
      limit_valid_date                                          as CreditLimitValidityEndDate,
      limit_chg_date                                            as CreditLimitLastChangeDate,
      coordinator                                               as CreditCoordinator,
      //      cust_group                                as CreditAccountGroup,
      follow_up_dt                                              as CreditAccountResubmissionDate,
      cast( xcritical as ukm_critical_account preserving type ) as BusinessPartnerIsCritical,
      x_limit_zero                                              as CreditLimitIsZero,
      @ObjectModel.foreignKey.association: '_CreditBlockReason'
      block_reason                                              as CreditAccountBlockReason,
      automatic_req                                             as CrdtLmtIsReqdFrmAutomCalc,
      lim_val_date_req                                          as CreditLimitReqdValidityEndDate,
      req_date                                                  as CreditLimitRequestDate,

      _BusinessPartner,
      _CreditAccount,
      _CreditSegment,
      _CreditBlockReason
}
```
