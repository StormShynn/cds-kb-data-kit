---
name: I_LOANCONTRCNDNHDRDATA
description: Conditon Header for Loan Contract
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value
semantic_en: Conditon Header for Loan Contract
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - metadata-only
---
# I_LOANCONTRCNDNHDRDATA

**Conditon Header for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRCNDNHDRDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LoanProductCategory` | `NUMC(3)` | Product Category |
| `LoanContractID` | `CHAR(13)` | Key part 1 |
| `LoanCndnHdrValdtyStrtDte` | `DATS(8)` | Date Condition Effective from |
| `LoanConditionHeaderOfferNumber` | `NUMC(3)` | Offer consecutive number |
| `LoanLifeCycleStatus` | `NUMC(2)` | Status of data record |
| `LoanConditionHeaderType` | `NUMC(2)` | Type of Condition Header |
| `LoanRepaymentType` | `NUMC(1)` | Repayment Type Indicator |
| `LoanDisbursementRate` | `DEC(10)` | Pay-in/disbursement rate |
| `LoanCommittedCapitalAmount` | `CURR(13)` | Commitment capital |
| `LoanCommittedCapitalCrcy` | `CUKY(5)` | Currency of commitment amount |
| `LoanEffectiveInterestRate` | `DEC(10)` | Effective Interest Rate |
| `LoanEffectiveInterestMethod` | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `InterestCalculationMethod` | `CHAR(1)` | Interest Calculation Method |
| `LoanNoticeDate` | `DATS(8)` | Date of notice |
| `LoanNoticeReason` | `NUMC(3)` | Reason for Notice |
| `LoanLndrErlstNtcDate` | `DATS(8)` | Earliest Possible Date for Notice Given by the Lender |
| `LoanTermStartDate` | `DATS(8)` | Start of Term |
| `LoanTermEndDate` | `DATS(8)` | End of Term |
| `LoanIntEffctvIntrstRate` | `DEC(10)` | Internal Effective Interest Rate |
| `LoanIntEffctvIntrstMeth` | `NUMC(1)` | Effective Interest Method (Financial Mathematics) |
| `LoanLenderNoticeArrgmt` | `NUMC(3)` | Notice Arrangement Lender |
| `LoanCndnHdrValdtyEndDte` | `DATS(8)` | Date of fixed period end |
| `LoanCndnEffctvIntrstStrtDte` | `DATS(8)` | Date when calculation of effective rate starts |
| `LoanContrBrwrNtcArrgmt` | `NUMC(3)` | Notice Arrangement Borrower |
| `LoanContrNtcType` | `NUMC(3)` | Notice Type for the Loan |
| `InterestDaysCalendar` | `CHAR(2)` | Interest Calendar |
