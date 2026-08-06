---
name: I_FINTRANSCURRENTACTIVITY
description: This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value
semantic_en: This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?
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
  - metadata-only
---
# I_FINTRANSCURRENTACTIVITY

**This CDS view provides access to data of the current financial transaction activities. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: Which is the current financial transaction activity of a financial transaction? Who created or changed a financial transaction activity?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCURRENTACTIVITY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FinancialTransaction` | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | `NUMC(5)` | Transaction Activity |
| `FinancialInstrActivityCategory` | `NUMC(2)` | Transaction Activity Category |
| `TermEndDate` | `DATS(8)` | Term End |
| `TermEndDateIsInclusive` | `CHAR(1)` | End of Term Inclusive Indicator |
| `FinTransNoticeDate` | `DATS(8)` | OTC Notice Date |
| `FinTransActyConclusionDate` | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `FinTransActyConclusionTime` | `TIMS(6)` | Time of Contract Conclusion |
| `FinTransActyConclusionTimeZone` | `CHAR(6)` | Time Zone of Contract Date and Time |
| `FinTransRolloverDate` | `DATS(8)` | Term Start |
| `FinTransExerciseDate` | `DATS(8)` | Term End |
| `FinTransOrderValidityEndDate` | `DATS(8)` | Limit Date |
| `FinTransFixingDate` | `DATS(8)` | Fixing Date |
| `ForeignExchangeFixingReference` | `CHAR(30)` | Fixing Reference ID |
| `Trader` | `CHAR(12)` | Trader |
| `FinancialInstrContactPerson` | `CHAR(19)` | Contact Person |
| `FinInstrExternalReference` | `CHAR(16)` | External Reference |
| `TreasuryReversalReason` | `CHAR(2)` | Reason for Reversal |
| `FinTransConfirmationStatus` | `NUMC(1)` | Confirmation Status |
| `FinTransConfirmationDate` | `DATS(8)` | Confirmation Date |
| `FinTransConfirmedByUser` | `CHAR(12)` | Confirmation Executed By (User Responsible) |
| `FinTransCntrconfStatus` | `NUMC(1)` | Counterconfirmation |
| `FinTransCntrconfDate` | `DATS(8)` | Counterconfirmation Date |
| `FinTransCntrconfCreatedByUser` | `CHAR(12)` | Counterconfirmation Executed by (User Responsible) |
| `LeadingCurrency` | `CUKY(5)` | Leading Currency |
| `FollowingCurrency` | `CUKY(5)` | Following Currency |
| `ExchangeRate` | `DEC(13)` | Rate of Foreign Exchange Transaction |
| `SpotExchangeRate` | `DEC(13)` | Spot Rate |
| `SwapExchangeRate` | `DEC(13)` | Swap Rate |
| `EffectiveInterestRate` | `DEC(10)` | Effective Interest Rate |
| `EffectiveInterestMethod` | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `LetterOfCredit` | `CHAR(16)` | Letter of Credit Number |
| `TreasuryApplicant` | `CHAR(10)` | Applicant |
| `TreasuryBeneficiary` | `CHAR(10)` | Beneficiary |
| `TrsyMnllyEnteredBnfcyName` | `CHAR(25)` | Manually Entered Beneficiary Name |
| `TrsyMnllyEnteredApplcntName` | `CHAR(25)` | Manually Entered Applicant Name |
| `TreasuryAdvisingBank` | `CHAR(10)` | Advising Bank |
| `TreasuryIssuingBank` | `CHAR(10)` | Issuing Bank |
