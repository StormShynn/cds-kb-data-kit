---
name: I_GLACCOUNTINCOMPANYCODE
description: GL AccountINCompany Code
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - company-code
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_GLACCOUNTINCOMPANYCODE

**GL AccountINCompany Code**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` | ✓ | |  | `saknr` |  |  |
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `AccountingClerk` |  | |  | `busab` |  |  |
| `LastInterestCalcRunDate` |  | |  | `datlz` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangeDateTime` |  | |  | `cast(case when skb1.last_changed_ts = 0 then cast( '19700101010101' as timestamp ) else skb1.last_changed_ts end as timestamp)` |  |  |
| `PlanningLevel` |  | |  | `fdlev` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `ExchRateDifferencesAccountDetn` |  | |  | `kdfsl` |  |  |
| `ReconciliationAccountType` |  | |  | `mitkz` |  |  |
| `TaxCategory` |  | |  | `mwskz` |  |  |
| `InterestCalculationCode` |  | |  | `vzskz` |  |  |
| `GLAccountCurrency` |  | |  | `waers` |  |  |
| `ReconciliationAcctIsChangeable` |  | |  | `xmitk` |  |  |
| `IsManagedExternally` |  | |  | `cast( substring(skb1.wmeth, 1, 1) as fac_gl_acct_extern_ind )` |  |  |
| `IsAutomaticallyPosted` |  | |  | `xintb` |  |  |
| `LineItemDisplayIsEnabled` |  | |  | `xkres` |  |  |
| `SupplementIsAllowed` |  | |  | `xnkon` |  |  |
| `IsOpenItemManaged` |  | |  | `xopvw` |  |  |
| `InterestCalculationDate` |  | |  | `zindt` |  |  |
| `IntrstCalcFrequencyInMonths` |  | |  | `zinrt` |  |  |
| `AcctgDocItmDisplaySequenceRule` |  | |  | `zuawa` |  |  |
| `AlternativeGLAccount` |  | |  | `cast(skb1.altkt as fis_alternativeglaccount preserving type )` |  |  |
| `JointVentureRecoveryCode` |  | |  | `recid` |  |  |
| `CommitmentItem` |  | |  | `fipos` |  |  |
| `CommitmentItemShortID` |  | |  | `cast(skb1.fipos as fmis_ci_internalname preserving type)` |  |  |
| `TaxCodeIsRequired` |  | |  | `xmwno` |  |  |
| `BalanceHasLocalCurrency` |  | |  | `xsalh` |  |  |
| `ValuationGroup` |  | |  | `bewgp` |  |  |
| `APARToleranceGroup` |  | |  | `togru` |  |  |
| `AccountIsBlockedForPosting` |  | |  | `xspeb` |  |  |
| `AccountIsMarkedForDeletion` |  | |  | `xloeb` |  |  |
| `ClearingIsLedgerGroupSpecific` |  | |  | `xlgclr` |  |  |
| `CashPlanningGroup` |  | |  | `fdgrv` |  |  |
| `IsCashFlowAccount` |  | |  | `xgkon` |  |  |
| `GLAcctInflationKey` |  | |  | `infky` |  |  |
| `FieldStatusGroup` |  | |  | `fstag` |  |  |
| `MultiCurrencyAccountingCode` |  | |  | `mcakey` |  |  |
| `IsExtendedOpenItemManaged` |  | |  | `x_uj_clr` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_Reconciliationaccttype` | | ✓ | | | | |
| `_JointVentureRecovery` | | ✓ | | | | |
| `_MultiCurrencyAccounting` | | ✓ | | | | |
| `_TaxCategory` | | ✓ | | | | |
| `_GLAcctInCoCodeStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Text` | `I_GlAccountTextInCompanycode` | [0..*] |
| `_User` | `I_User` | [1..1] |
| `_Reconciliationaccttype` | `I_Reconciliationaccttype` | [0..1] |
| `_JointVentureRecovery` | `I_JointVentureRecovery` | [0..1] |
| `_MultiCurrencyAccounting` | `I_MultiCurrencyAccounting` | [0..1] |
| `_TaxCategory` | `I_TaxCategory` | [0..1] |
| `_GLAcctInCoCodeStatus` | `I_GLAcctInCoCodeImplementStat` | [0..1] |
| `_CommitmentItemShortID` | `I_CommitmentItemShortID` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'General Ledger Account in Company Code'
@Analytics: {dataCategory: #DIMENSION, 
             dataExtraction: {
                                enabled: true,
                                delta.changeDataCapture: {
                                                           automatic: true        
                                                         }
                             }
             }
@VDM.viewType: #BASIC

@AbapCatalog: {
                 sqlViewName:      'IFIGLACCINCCODE',
                 preserveKey:      true,
                 buffering.status: #NOT_ALLOWED
              }

@ObjectModel: {
                 entityChangeStateId: 'LastChangeDateTime',
                 representativeKey: 'GLAccount',
                 sapObjectNodeType.name: 'OperatingGeneralLedgerAccount',
                 supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE],
                 usageType: {
                                sizeCategory: #M,
                                dataClass:  #MASTER,
                                serviceQuality: #C
                            }
              }


@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@Search.searchable: true


define view I_GLAccountInCompanyCode 
  as select from skb1

  association [0..1] to I_CompanyCode                 as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..*] to I_GlAccountTextInCompanycode  as _Text                    on  $projection.CompanyCode = _Text.CompanyCode
                                                                                  and $projection.GLAccount   = _Text.GLAccount
  association [1..1] to I_User                        as _User                    on  $projection.CreatedByUser = _User.UserID
  association [0..1] to I_Reconciliationaccttype      as _Reconciliationaccttype  on  $projection.ReconciliationAccountType = _Reconciliationaccttype.ReconciliationAccountType
  association [0..1] to I_JointVentureRecovery        as _JointVentureRecovery    on  $projection.CompanyCode              = _JointVentureRecovery.CompanyCode
                                                                                  and $projection.JointVentureRecoveryCode = _JointVentureRecovery.JointVentureRecoveryCode
  association [0..1] to I_MultiCurrencyAccounting     as _MultiCurrencyAccounting on  $projection.MultiCurrencyAccountingCode = _MultiCurrencyAccounting.MultiCurrencyAccountingCode

  association [0..1] to I_TaxCategory                 as _TaxCategory             on  $projection.CompanyCode = _TaxCategory.CompanyCode
                                                                                  and $projection.TaxCategory = _TaxCategory.TaxCategory

  association [0..1] to I_GLAcctInCoCodeImplementStat as _GLAcctInCoCodeStatus      on  $projection.CompanyCode  = _GLAcctInCoCodeStatus.CompanyCode
                                                                                  and $projection.GLAccount    = _GLAcctInCoCodeStatus.GLAccount
    
  association [0..1] to I_CommitmentItemShortID        as _CommitmentItemShortID  on  $projection.CommitmentItemShortID = _CommitmentItemShortID.CommitmentItemShortID
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
  key skb1.saknr                                                    as GLAccount,
      @ObjectModel.foreignKey.association: '_CompanyCode' //Inserted by VDM CDS Suite Plugin
  key skb1.bukrs                                                    as CompanyCode,
      skb1.begru                                                    as AuthorizationGroup,
      skb1.busab                                                    as AccountingClerk,
      skb1.datlz                                                    as LastInterestCalcRunDate,
      skb1.erdat                                                    as CreationDate,
      skb1.ernam                                                    as CreatedByUser,
      cast(case
        when skb1.last_changed_ts    = 0 then cast( '19700101010101' as timestamp )
        else skb1.last_changed_ts
      end as timestamp)                                             as LastChangeDateTime,
      skb1.fdlev                                                    as PlanningLevel,
      skb1.hbkid                                                    as HouseBank,
      skb1.hktid                                                    as HouseBankAccount,
      skb1.kdfsl                                                    as ExchRateDifferencesAccountDetn,
      @ObjectModel.foreignKey.association: '_Reconciliationaccttype'
      skb1.mitkz                                                    as ReconciliationAccountType,
      @ObjectModel.foreignKey.association: '_TaxCategory'
      skb1.mwskz                                                    as TaxCategory,
      skb1.vzskz                                                    as InterestCalculationCode,
      skb1.waers                                                    as GLAccountCurrency,
      skb1.xmitk                                                    as ReconciliationAcctIsChangeable,
      //skb1.wmeth as IsManagedExternally,
      cast( substring(skb1.wmeth, 1, 1) as fac_gl_acct_extern_ind ) as IsManagedExternally,
      skb1.xintb                                                    as IsAutomaticallyPosted,
      skb1.xkres                                                    as LineItemDisplayIsEnabled,
      skb1.xnkon                                                    as SupplementIsAllowed,
      skb1.xopvw                                                    as IsOpenItemManaged,
      skb1.zindt                                                    as InterestCalculationDate,
      skb1.zinrt                                                    as IntrstCalcFrequencyInMonths,
      skb1.zuawa                                                    as AcctgDocItmDisplaySequenceRule,
      cast(skb1.altkt as fis_alternativeglaccount preserving type ) as AlternativeGLAccount,
      skb1.recid                                                    as JointVentureRecoveryCode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CommitmentItemShortID'
      skb1.fipos                                                    as CommitmentItem,
      cast(skb1.fipos as fmis_ci_internalname preserving type)      as CommitmentItemShortID,
      skb1.xmwno                                                    as TaxCodeIsRequired,
      skb1.xsalh                                                    as BalanceHasLocalCurrency,
      skb1.bewgp                                                    as ValuationGroup,
      skb1.togru                                                    as APARToleranceGroup,
      skb1.xspeb                                                    as AccountIsBlockedForPosting,
      skb1.xloeb                                                    as AccountIsMarkedForDeletion,
      skb1.xlgclr                                                   as ClearingIsLedgerGroupSpecific,
      skb1.fdgrv                                                    as CashPlanningGroup,
      skb1.xgkon                                                    as IsCashFlowAccount,
      skb1.infky                                                    as GLAcctInflationKey,
      skb1.fstag                                                    as FieldStatusGroup,
      skb1.mcakey                                                   as MultiCurrencyAccountingCode,
      skb1.x_uj_clr                                                 as IsExtendedOpenItemManaged,
      _User,
      _CompanyCode,
      _Text,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Reconciliationaccttype,
      _JointVentureRecovery,
      _MultiCurrencyAccounting,
      _TaxCategory,
      _GLAcctInCoCodeStatus
};
```
