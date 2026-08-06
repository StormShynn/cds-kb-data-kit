---
name: I_FINTRANSACTIVITY
description: Fintransactivity
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSACTIVITY

**Fintransactivity**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `Activity.bukrs` |
| key `FinancialTransaction` | `Activity.rfha` |
| key `FinancialInstrumentActivity` | `Activity.rfhazu` |
| `FinancialInstrActivityCategory` | `Activity.sfgzustt` |
| `TermEndDate` | `Activity.delfz` |
| `FinTransTermCategory` | `cast( case when Activity.delfz is initial then 'X' else '' end as ftr_term_category )` |
| `TermEndDateIsInclusive` | `Activity.sincle` |
| `FinTransTermStartEndInclusive` | `cast( Activity.sincle as ftr_term_start_end_inclusive preserving type )` |
| `FinTransNoticeDate` | `Activity.notice_date` |
| `FinTransActyConclusionDate` | `cast(Activity.dvtrab as ftr_acty_conclusion_dte preserving type )` |
| `FinTransActyConclusionTime` | `Activity.tvtrab` |
| `FinTransActyConclusionTimeZone` | `Activity.zvtrab` |
| `FinTransRolloverDate` | `case when Activity.sfgzustt = '11' or Activity.sfgzustt = '21' then Activity.dblfz else cast('00000000' as tb_dblfz) end` |
| `FinTransExerciseDate` | `case when Activity.sfgzustt = '41' or Activity.sfgzustt = '51' or Activity.sfgzustt = '61' or Activity.sfgzustt = '71' or Activity.sfgzustt = '42' or Activity.sfgzustt = '52' or Activity.sfgzustt = '62' or Activity.sfgzustt = '72' then Activity.delfz else cast('00000000' as tb_delfz) end` |
| `FinTransOrderValidityEndDate` | `Activity.limitdat` |
| `FinTransFixingDate` | `Activity.dfix` |
| `ForeignExchangeFixingReference` | `Activity.fixing_ref_id` |
| `Trader` | `Activity.rdealer` |
| `FinancialInstrContactPerson` | `Activity.gsppart` |
| `FinInstrExternalReference` | `Activity.nordext` |
| `TreasuryReversalReason` | `Activity.sstogrd` |
| `FinTransConfirmationStatus` | `Activity.sconfirm` |
| `FinTransConfirmationDate` | `Activity.dexdat` |
| `FinTransConfirmedByUser` | `Activity.uexnam` |
| `FinTransCntrconfStatus` | `Activity.sreconfirm` |
| `FinTransCntrconfDate` | `Activity.dredat` |
| `FinTransCntrconfCreatedByUser` | `Activity.urenam` |
| `LeadingCurrency` | `Activity.wlwaers` |
| `FollowingCurrency` | `Activity.wfwaers` |
| `ExchangeRate` | `Activity.kkurs` |
| `SpotExchangeRate` | `Activity.kkassa` |
| `SwapExchangeRate` | `Activity.kswap` |
| `LiquidityEffectValue` | `Activity.kwliqui` |
| `CurrencyPair` | `case when (Activity.wlwaers is not initial and Activity.wfwaers is not initial) then cast( concat(concat(Activity.wlwaers, '/'), Activity.wfwaers) as ftr_curr_pair) end` |
| `EffectiveInterestRate` | `Activity.peffzins` |
| `EffectiveInterestMethod` | `Activity.seffmeth` |
| `FinTransIntrstHndlgAtRollover` | `Activity.sznspro` |
| `RolloverDfrrdIntrstPyoutDte` | `Activity.dznsstd` |
| `LetterOfCredit` | `LetterOfCredit.lc_number` |
| `TreasuryApplicant` | `LetterOfCredit.applicant` |
| `TreasuryBeneficiary` | `LetterOfCredit.benficiary` |
| `TrsyMnllyEnteredBnfcyName` | `cast( case when ( LetterOfCredit.man_benficiary is initial and TransactionType.sfgtyp = '100' ) then LetterOfCredit.man_comp_name else '' end as ftr_man_bene_name )` |
| `TrsyMnllyEnteredApplcntName` | `cast( case when ( LetterOfCredit.man_applicant is initial and TransactionType.sfgtyp = '200' ) then LetterOfCredit.man_comp_name else '' end as ftr_man_appl_name )` |
| `TreasuryAdvisingBank` | `LetterOfCredit.advising_bank` |
| `TreasuryIssuingBank` | `LetterOfCredit.issuing_bank` |
| `BankGuaranteeNumber` | `LetterOfCredit.bg_number` |
| `BankGuaranteeType` | `LetterOfCredit.bg_type` |
| `FinInstrTransactionCategory` | `TransactionType.sfgtyp` |
| `FinancialInstrProductCategory` | `ProductType.sanlf` |
| `_CompanyCode` | *Association* |
| `_FinTrans` | *Association* |
| `_ActivityCategory` | *Association* |
| `_TimeZone` | *Association* |
| `_FixRef` | *Association* |
| `_RevReason` | *Association* |
| `_ConfStatus` | *Association* |
| `_CntrconfStatus` | *Association* |
| `_LeadingCurrency` | *Association* |
| `_FollowingCurrency` | *Association* |
| `_ApplicantBP` | *Association* |
| `_BeneficiaryBP` | *Association* |
| `_AdvisingBankBP` | *Association* |
| `_IssuingBankBP` | *Association* |
| `_ActivityCategory2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_ActivityCategory` | `I_FinTransActivityCategory` | [0..1] |
| `_TimeZone` | `I_TimeZone` | [0..1] |
| `_FixRef` | `I_FXFixingReference` | [0..1] |
| `_RevReason` | `I_TreasuryReversalReason` | [0..1] |
| `_ConfStatus` | `I_FinTransConfStatus` | [0..1] |
| `_CntrconfStatus` | `I_FinTransCntrconfStatus` | [0..1] |
| `_LeadingCurrency` | `I_Currency` | [0..1] |
| `_FollowingCurrency` | `I_Currency` | [0..1] |
| `_ApplicantBP` | `I_BusinessPartner` | [0..1] |
| `_BeneficiaryBP` | `I_BusinessPartner` | [0..1] |
| `_AdvisingBankBP` | `I_BusinessPartner` | [0..1] |
| `_IssuingBankBP` | `I_BusinessPartner` | [0..1] |
| `_ActivityCategory2` | `I_FinInstrActivityCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSACTY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Activity'
@ObjectModel.representativeKey: 'FinancialInstrumentActivity'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
define view I_FinTransActivity
  as select from    vtbfhazu      as Activity
    inner join      at10          as TransactionType on  Activity.sgsart  = TransactionType.sgsart
                                                     and Activity.sfhaart = TransactionType.sfhaart
    inner join      tzpa          as ProductType     on Activity.sgsart = ProductType.gsart
    left outer join tlct_activity as LetterOfCredit  on  Activity.bukrs  = LetterOfCredit.bukrs
                                                     and Activity.rfha   = LetterOfCredit.rfha
                                                     and Activity.rfhazu = LetterOfCredit.rfhazu

  // dimensions, containing for example text fields
  association [0..1] to I_CompanyCode              as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction     as _FinTrans          on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                         and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
  association [0..1] to I_FinTransActivityCategory as _ActivityCategory  on  $projection.CompanyCode                    = _ActivityCategory.CompanyCode
                                                                         and $projection.FinancialTransaction           = _ActivityCategory.FinancialTransaction
                                                                         and $projection.FinancialInstrActivityCategory = _ActivityCategory.FinancialInstrActivityCategory
  association [0..1] to I_TimeZone                 as _TimeZone          on  $projection.FinTransActyConclusionTimeZone = _TimeZone.TimeZoneID
  association [0..1] to I_FXFixingReference        as _FixRef            on  $projection.ForeignExchangeFixingReference = _FixRef.ForeignExchangeFixingReference
  association [0..1] to I_TreasuryReversalReason   as _RevReason         on  $projection.TreasuryReversalReason = _RevReason.TreasuryReversalReason
  association [0..1] to I_FinTransConfStatus       as _ConfStatus        on  $projection.FinTransConfirmationStatus = _ConfStatus.FinTransConfirmationStatus
  association [0..1] to I_FinTransCntrconfStatus   as _CntrconfStatus    on  $projection.FinTransCntrconfStatus = _CntrconfStatus.FinTransCntrconfStatus
  association [0..1] to I_Currency                 as _LeadingCurrency   on  $projection.LeadingCurrency = _LeadingCurrency.Currency
  association [0..1] to I_Currency                 as _FollowingCurrency on  $projection.FollowingCurrency = _FollowingCurrency.Currency
  association [0..1] to I_BusinessPartner          as _ApplicantBP       on  $projection.TreasuryApplicant = _ApplicantBP.BusinessPartner
  association [0..1] to I_BusinessPartner          as _BeneficiaryBP     on  $projection.TreasuryBeneficiary = _BeneficiaryBP.BusinessPartner
  association [0..1] to I_BusinessPartner          as _AdvisingBankBP    on  $projection.TreasuryAdvisingBank = _AdvisingBankBP.BusinessPartner
  association [0..1] to I_BusinessPartner          as _IssuingBankBP     on  $projection.TreasuryIssuingBank = _IssuingBankBP.BusinessPartner
  association [0..1] to I_FinInstrActivityCategory as _ActivityCategory2 on  $projection.FinancialInstrProductCategory  = _ActivityCategory2.FinancialInstrProductCategory
                                                                         and $projection.FinInstrTransactionCategory    = _ActivityCategory2.FinInstrTransactionCategory
                                                                         and $projection.FinancialInstrActivityCategory = _ActivityCategory2.FinancialInstrActivityCategory

{
      // Exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Activity.bukrs                                                          as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Activity.rfha                                                           as FinancialTransaction,
  key Activity.rfhazu                                                         as FinancialInstrumentActivity,

      @ObjectModel.foreignKey.association: '_ActivityCategory'
      Activity.sfgzustt                                                       as FinancialInstrActivityCategory,

      Activity.delfz                                                          as TermEndDate,
      cast( case when Activity.delfz is initial
           then 'X'
           else ''
           end as ftr_term_category )                                         as FinTransTermCategory,
      Activity.sincle                                                         as TermEndDateIsInclusive,
      // Because of the legacy GFN TermEndDateIsInclusive is not accurate, the sincle will not store a boolean value, but a char1 data.
      // To aviod the C1 release incompatible change, a new field FinTransTermStartEndInclusive is added here
      cast( Activity.sincle as ftr_term_start_end_inclusive preserving type ) as FinTransTermStartEndInclusive,
      Activity.notice_date                                                    as FinTransNoticeDate,
      cast(Activity.dvtrab as ftr_acty_conclusion_dte preserving type )       as FinTransActyConclusionDate,
      Activity.tvtrab                                                         as FinTransActyConclusionTime,
      @ObjectModel.foreignKey.association: '_TimeZone'
      Activity.zvtrab                                                         as FinTransActyConclusionTimeZone,
      case when Activity.sfgzustt = '11'
             or Activity.sfgzustt = '21'
           then Activity.dblfz
           else cast('00000000' as tb_dblfz)
           end                                                                as FinTransRolloverDate,
      @EndUserText.label: 'Exercise Date'
      @EndUserText.quickInfo: 'Exercise Date'
      case when Activity.sfgzustt = '41'
             or Activity.sfgzustt = '51'
             or Activity.sfgzustt = '61'
             or Activity.sfgzustt = '71'
             or Activity.sfgzustt = '42'
             or Activity.sfgzustt = '52'
             or Activity.sfgzustt = '62'
             or Activity.sfgzustt = '72'
           then Activity.delfz
           else cast('00000000' as tb_delfz)
           end                                                                as FinTransExerciseDate,
      Activity.limitdat                                                       as FinTransOrderValidityEndDate,
      Activity.dfix                                                           as FinTransFixingDate,
      @ObjectModel.foreignKey.association: '_FixRef'
      Activity.fixing_ref_id                                                  as ForeignExchangeFixingReference,

      Activity.rdealer                                                        as Trader,
      Activity.gsppart                                                        as FinancialInstrContactPerson,
      Activity.nordext                                                        as FinInstrExternalReference,

      @ObjectModel.foreignKey.association: '_RevReason'
      Activity.sstogrd                                                        as TreasuryReversalReason,

      @ObjectModel.foreignKey.association: '_ConfStatus'
      Activity.sconfirm                                                       as FinTransConfirmationStatus,
      Activity.dexdat                                                         as FinTransConfirmationDate,
      @EndUserText.label: 'Confirmed By User'
      Activity.uexnam                                                         as FinTransConfirmedByUser,
      @ObjectModel.foreignKey.association: '_CntrconfStatus'
      Activity.sreconfirm                                                     as FinTransCntrconfStatus,
      Activity.dredat                                                         as FinTransCntrconfDate,
      @EndUserText.label: 'Conterconfirmed By User'
      Activity.urenam                                                         as FinTransCntrconfCreatedByUser,

      @ObjectModel.foreignKey.association: '_LeadingCurrency'
      @Semantics.currencyCode: true
      Activity.wlwaers                                                        as LeadingCurrency,
      @ObjectModel.foreignKey.association: '_FollowingCurrency'
      @Semantics.currencyCode: true
      Activity.wfwaers                                                        as FollowingCurrency,
      Activity.kkurs                                                          as ExchangeRate,
      Activity.kkassa                                                         as SpotExchangeRate,
      Activity.kswap                                                          as SwapExchangeRate,
      Activity.kwliqui                                                        as LiquidityEffectValue,
      case
        when (Activity.wlwaers is not initial and Activity.wfwaers is not initial)
            then cast( concat(concat(Activity.wlwaers, '/'), Activity.wfwaers) as ftr_curr_pair)
      end                                                                     as CurrencyPair,

      Activity.peffzins                                                       as EffectiveInterestRate,
      Activity.seffmeth                                                       as EffectiveInterestMethod,
      Activity.sznspro                                                        as FinTransIntrstHndlgAtRollover,
      Activity.dznsstd                                                        as RolloverDfrrdIntrstPyoutDte,

      LetterOfCredit.lc_number                                                as LetterOfCredit,
      @ObjectModel.foreignKey.association: '_ApplicantBP'
      LetterOfCredit.applicant                                                as TreasuryApplicant,
      @ObjectModel.foreignKey.association: '_BeneficiaryBP'
      LetterOfCredit.benficiary                                               as TreasuryBeneficiary,
      
      cast( case when ( LetterOfCredit.man_benficiary is initial
                    and TransactionType.sfgtyp = '100' )
                 then LetterOfCredit.man_comp_name
                 else ''
                 end as ftr_man_bene_name )                             as TrsyMnllyEnteredBnfcyName,

      cast( case when ( LetterOfCredit.man_applicant is initial
                    and TransactionType.sfgtyp = '200' )
                 then LetterOfCredit.man_comp_name
                 else ''
                 end as ftr_man_appl_name )                             as TrsyMnllyEnteredApplcntName,
                 
      @ObjectModel.foreignKey.association: '_AdvisingBankBP'
      LetterOfCredit.advising_bank                                            as TreasuryAdvisingBank,
      @ObjectModel.foreignKey.association: '_IssuingBankBP'
      LetterOfCredit.issuing_bank                                             as TreasuryIssuingBank,
      LetterOfCredit.bg_number                                                as BankGuaranteeNumber,
      LetterOfCredit.bg_type                                                  as BankGuaranteeType,

      TransactionType.sfgtyp                                                  as FinInstrTransactionCategory,
      ProductType.sanlf                                                       as FinancialInstrProductCategory,
      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _FinTrans,
      _ActivityCategory,
      _TimeZone,
      _FixRef,
      _RevReason,
      _ConfStatus,
      _CntrconfStatus,
      _LeadingCurrency,
      _FollowingCurrency,
      _ApplicantBP,
      _BeneficiaryBP,
      _AdvisingBankBP,
      _IssuingBankBP,
      _ActivityCategory2
}
//restriction: do not provide interest rate adjustment activities
where
  Activity.sfgzustt <> '70'
```
