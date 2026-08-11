---
name: I_FINTRANSCURRENTACTIVITY
description: "This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value
semantic_en: "This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?"
semantic_vi: "Financial Transaction Current Activity — CDS view giao diện dựa trên I_FinTransActivity."
keywords:
  - "financial"
  - "transaction"
  - "current"
  - "activity"
  - "company"
  - "code"
  - "instrument"
  - "instr"
  - "category"
  - "term"
  - "date"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSCURRENTACTIVITY

**This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinancialInstrActivityCategory` |  | |  |  | `NUMC(2)` | Transaction Activity Category |
| `TermEndDate` |  | |  |  | `DATS(8)` | Term End |
| `TermEndDateIsInclusive` |  | |  |  | `CHAR(1)` | End of Term Inclusive Indicator |
| `FinTransNoticeDate` |  | |  |  | `DATS(8)` | OTC Notice Date |
| `FinTransActyConclusionDate` |  | |  |  | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `FinTransActyConclusionTime` |  | |  |  | `TIMS(6)` | Time of Contract Conclusion |
| `FinTransActyConclusionTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Contract Date and Time |
| `FinTransRolloverDate` |  | |  |  | `DATS(8)` | Term Start |
| `FinTransExerciseDate` |  | |  |  | `DATS(8)` | Term End |
| `FinTransOrderValidityEndDate` |  | |  |  | `DATS(8)` | Limit Date |
| `FinTransFixingDate` |  | |  |  | `DATS(8)` | Fixing Date |
| `ForeignExchangeFixingReference` |  | |  |  | `CHAR(30)` | Fixing Reference ID |
| `Trader` |  | |  |  | `CHAR(12)` | Trader |
| `FinancialInstrContactPerson` |  | |  |  | `CHAR(19)` | Contact Person |
| `FinInstrExternalReference` |  | |  |  | `CHAR(16)` | External Reference |
| `TreasuryReversalReason` |  | |  |  | `CHAR(2)` | Reason for Reversal |
| `FinTransConfirmationStatus` |  | |  |  | `NUMC(1)` | Confirmation Status |
| `FinTransConfirmationDate` |  | |  |  | `DATS(8)` | Confirmation Date |
| `FinTransConfirmedByUser` |  | |  |  | `CHAR(12)` | Confirmation Executed By (User Responsible) |
| `FinTransCntrconfStatus` |  | |  |  | `NUMC(1)` | Counterconfirmation |
| `FinTransCntrconfDate` |  | |  |  | `DATS(8)` | Counterconfirmation Date |
| `FinTransCntrconfCreatedByUser` |  | |  |  | `CHAR(12)` | Counterconfirmation Executed by (User Responsible) |
| `LeadingCurrency` |  | |  |  | `CUKY(5)` | Leading Currency |
| `FollowingCurrency` |  | |  |  | `CUKY(5)` | Following Currency |
| `ExchangeRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `SpotExchangeRate` |  | |  |  | `DEC(13)` | Spot Rate |
| `SwapExchangeRate` |  | |  |  | `DEC(13)` | Swap Rate |
| `EffectiveInterestRate` |  | |  |  | `DEC(10)` | Effective Interest Rate |
| `EffectiveInterestMethod` |  | |  |  | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `LetterOfCredit` |  | |  |  | `CHAR(16)` | Letter of Credit Number |
| `TreasuryApplicant` |  | |  |  | `CHAR(10)` | Applicant |
| `TreasuryBeneficiary` |  | |  |  | `CHAR(10)` | Beneficiary |
| `TrsyMnllyEnteredBnfcyName` |  | |  |  | `CHAR(25)` | Manually Entered Beneficiary Name |
| `TrsyMnllyEnteredApplcntName` |  | |  |  | `CHAR(25)` | Manually Entered Applicant Name |
| `TreasuryAdvisingBank` |  | |  |  | `CHAR(10)` | Advising Bank |
| `TreasuryIssuingBank` |  | |  |  | `CHAR(10)` | Issuing Bank |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFTRCURRENTACT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Current Activity'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransCurrentActivity 
// restrict selection from I_FinTransActivity to last active activity
  as select from I_FinTransActivity as Activity
  inner join I_FinancialTransaction as Transaction on  Activity.CompanyCode                 = Transaction.CompanyCode
                                                   and Activity.FinancialTransaction        = Transaction.FinancialTransaction
                                                   and Activity.FinancialInstrumentActivity = Transaction.FinInstrLastActiveActivity

{
// exposed fields (same as with I_FinTransActivity)
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key Activity.CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key Activity.FinancialTransaction,
  key Activity.FinancialInstrumentActivity,
  @ObjectModel.foreignKey.association: '_ActivityCategory'
  Activity.FinancialInstrActivityCategory,
  Activity.TermEndDate,
  Activity.TermEndDateIsInclusive,
  Activity.FinTransNoticeDate,
  Activity.FinTransActyConclusionDate,
  Activity.FinTransActyConclusionTime,
  @ObjectModel.foreignKey.association: '_TimeZone'
  Activity.FinTransActyConclusionTimeZone,
  Activity.FinTransRolloverDate,
  @EndUserText.label: 'Exercise Date'
  @EndUserText.quickInfo: 'Exercise Date'
  Activity.FinTransExerciseDate,
  Activity.FinTransOrderValidityEndDate,
  Activity.FinTransFixingDate,
  @ObjectModel.foreignKey.association: '_FixRef'
  Activity.ForeignExchangeFixingReference,
  Activity.Trader,
  Activity.FinancialInstrContactPerson,
  Activity.FinInstrExternalReference,
  @ObjectModel.foreignKey.association: '_RevReason'
  Activity.TreasuryReversalReason,
  @ObjectModel.foreignKey.association: '_ConfStatus'
  Activity.FinTransConfirmationStatus,
  Activity.FinTransConfirmationDate,
  @EndUserText.label: 'Confirmed By User'
  Activity.FinTransConfirmedByUser,
  @ObjectModel.foreignKey.association: '_CntrconfStatus'
  Activity.FinTransCntrconfStatus,
  Activity.FinTransCntrconfDate,
  @EndUserText.label: 'Conterconfirmed By User'
  Activity.FinTransCntrconfCreatedByUser,
  @ObjectModel.foreignKey.association: '_LeadingCurrency'
  @Semantics.currencyCode: true
  Activity.LeadingCurrency,
  @ObjectModel.foreignKey.association: '_FollowingCurrency'
  @Semantics.currencyCode: true
  Activity.FollowingCurrency,
  Activity.ExchangeRate,
  Activity.SpotExchangeRate,
  Activity.SwapExchangeRate,
  Activity.EffectiveInterestRate,
  Activity.EffectiveInterestMethod,
  Activity.LetterOfCredit,
  @ObjectModel.foreignKey.association: '_ApplicantBP'
  Activity.TreasuryApplicant,
  @ObjectModel.foreignKey.association: '_BeneficiaryBP'
  Activity.TreasuryBeneficiary,
  Activity.TrsyMnllyEnteredBnfcyName,
  Activity.TrsyMnllyEnteredApplcntName,
  @ObjectModel.foreignKey.association: '_AdvisingBankBP'
  Activity.TreasuryAdvisingBank,
  @ObjectModel.foreignKey.association: '_IssuingBankBP'
  Activity.TreasuryIssuingBank,
// exposed dimensions (same as within I_FinTransActivity)
  Activity._CompanyCode,
  Activity._FinTrans,
  Activity._ActivityCategory,
  Activity._TimeZone,
  Activity._FixRef,
  Activity._RevReason,
  Activity._ConfStatus,
  Activity._CntrconfStatus,
  Activity._LeadingCurrency,
  Activity._FollowingCurrency,
  Activity._ApplicantBP,
  Activity._BeneficiaryBP,
  Activity._AdvisingBankBP,
  Activity._IssuingBankBP
}
```
