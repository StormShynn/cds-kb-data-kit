---
name: I_LOANCONTRPLNDITMDATA
description: Planned Items for Loan Contract
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value
semantic_en: Planned Items for Loan Contract
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - plan
  - metadata-only
---
# I_LOANCONTRPLNDITMDATA

**Planned Items for Loan Contract**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRPLNDITMDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LoanContractID` | `CHAR(13)` | Contract Number |
| `CashFlowItemGenerationDate` | `DATS(8)` | Flow data key: System date |
| `CashFlowItemGenerationTime` | `TIMS(6)` | Transaction data key: system time |
| `CashFlowItemSequenceNumber` | `NUMC(4)` | Transaction data key: Consecutive number |
| `CashFlowItemEnteredBy` | `CHAR(12)` | Entered By |
| `CashFlowItemEnteredDate` | `DATS(8)` | First Entered On |
| `CashFlowItemEnteredTime` | `TIMS(6)` | Time of Creation |
| `CashFlowItemEnteredSource` | `CHAR(10)` | Source of Initial Entry |
| `CashFlowItemEditedBy` | `CHAR(12)` | Employee ID |
| `CashFlowItemEditedDate` | `DATS(8)` | Last Edited On |
| `CashFlowItemEditedTime` | `TIMS(6)` | Last Edited At |
| `CashFlowItemEditedSource` | `CHAR(10)` | Editing Source |
| `CashFlowItemType` | `CHAR(4)` | Flow Type |
| `CashFlowItemReferenceType` | `CHAR(4)` | Reference flow type |
| `CashFlowItemCategory` | `CHAR(4)` | Flow Category |
| `CashFlowItemPostingDirection` | `CHAR(1)` | Debit/credit indicator |
| `CashFlowItemReversalStatus` | `CHAR(1)` | Reversal indicator |
| `ReverseDocument` | `CHAR(10)` | Reverse Document Number |
| `LoanLifeCycleStatus` | `NUMC(2)` | Status of data record |
| `LoanProductType` | `CHAR(3)` | Product Type |
| `LoanAcctAssgmtRef` | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `LoanBusinessArea` | `CHAR(4)` | Business Area |
| `CashFlowItmNominalAmt` | `CURR(13)` | Nominal amount |
| `CashFlowItmNominalAmtCrcy` | `CUKY(5)` | Currency of nominal amount |
| `CashFlowItemPositionCurrency` | `CUKY(5)` | Position Currency (Currency of Position Amount) |
| `CshFlwItmAmtInPosCrcy` | `CURR(13)` | Amount in Position Currency |
| `CashFlowItemSettlementCurrency` | `CUKY(5)` | Settlement Currency |
| `CshFlwItmAmtInSettlmtCrcy` | `CURR(13)` | Settlement Amount |
| `CashFlowItemCalcDate` | `DATS(8)` | Calculation Date |
| `CashFlowItemDueDate` | `DATS(8)` | Due date/calculation date |
| `CashFlowItemPaymentDate` | `DATS(8)` | Payment Date |
| `CalculationPeriodStartDate` | `DATS(8)` | Start of Calculation Period |
| `CalculationPeriodEndDate` | `DATS(8)` | End of Calculation Period |
| `CshFlwItmDebitPostgAcct` | `CHAR(10)` | Account for debit posting |
| `CshFlwItmCreditPostgAcct` | `CHAR(10)` | Account for credit posting |
| `CashFlowItemPercentageRate` | `DEC(10)` | Percentage rate for condition items |
| `CashFlowItemSource` | `CHAR(1)` | Source of flow record |
| `LoanClassfctnNmbr` | `CHAR(13)` | Classification Number for Finance Projects |
| `CshFlwItmBusTransNmbr` | `CHAR(10)` | Daybook no. |
| `FinConditionConditionType` | `NUMC(4)` | Condition Type (Smallest Subdivision of Condition Records) |
| `CalcPeriodStartDateIsExclusive` | `NUMC(1)` | Exclusive Indicator for the Start of a Calculation Period |
| `CalcPeriodEndDateIsInclusive` | `NUMC(1)` | Inclusive Indicator for the End of a Calculation Period |
| `CalcEndDteIsInclusive` | `NUMC(1)` | Inclusive Indicator for Beginning and End of a Period |
| `CshFlwItmSettlementDate` | `DATS(8)` | Settlement date |
| `CshFlwItmClrgDteIsInclusive` | `NUMC(1)` | Inclusive Indicator for Clearing Date |
| `AccrDefrlRefFlwCat` | `CHAR(4)` | Refer.flow category in accrual/deferral flow records |
| `DebitCrdtCtrlActyType` | `NUMC(2)` | Activity indicator for debit/credit control |
| `WvrWriteoffDocument` | `CHAR(10)` | Document number of waiver/write-off document |
| `LoanCshFlwItmIntrstFixingDte` | `DATS(8)` | Interest Rate Fixing Date |
| `LoanMainBrwrCustNmbr` | `CHAR(10)` | Main Borrower Customer Number |
| `AccountingDocument` | `CHAR(10)` | Document Number of an Accounting Document |
| `LoanCshFlwItmActivityCat` | `CHAR(4)` | Activity Category (Posting Area) |
| `CshFlwItmDirectionOfFlow` | `CHAR(1)` | Direction of Flow |
