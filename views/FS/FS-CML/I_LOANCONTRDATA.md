---
name: I_LOANCONTRDATA
description: "Loan Contract Master Data"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value
semantic_en: "Loan Contract Master Data"
tags:
  - FS
  - bo:businesspartner
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
  - master-data
  - metadata-only
---
# I_LOANCONTRDATA

**Loan Contract Master Data**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LoanArchivingCategory` |  | |  |  | `CHAR(1)` | Archiving Category Indicator |
| `LoanContractID` |  | |  |  | `CHAR(13)` | Contract Number |
| `LoanContractEnteredBy` |  | |  |  | `CHAR(12)` | Entered By |
| `LoanContractEnteredDate` |  | |  |  | `DATS(8)` | First Entered On |
| `LoanContractEnteredTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `LoanContractEnteredSource` |  | |  |  | `CHAR(10)` | Source of Initial Entry |
| `LoanContractEditedBy` |  | |  |  | `CHAR(12)` | Employee ID |
| `LoanContractEditedDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LoanContractEditedTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `LoanContractEditedSource` |  | |  |  | `CHAR(10)` | Editing Source |
| `LoanObjectInternalKey` |  | |  |  | `CHAR(10)` | Internal key for object |
| `LoanLifeCycleStatus` |  | |  |  | `NUMC(2)` | Status of data record |
| `LoanProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `LoanProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `LoanAcctAssgmtRef` |  | |  |  | `CHAR(8)` | Account Assignment Reference in Financial Assets Management |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
| `LoanType` |  | |  |  | `NUMC(3)` | Loan Type Indicator |
| `StateCntrlBkAstGrp` |  | |  |  | `CHAR(4)` | SCB Asset Group Indicator |
| `FinAcctgAstGrp` |  | |  |  | `NUMC(4)` | Asset Grouping Indicator |
| `BalanceSheetCode` |  | |  |  | `CHAR(2)` | Balance Sheet Indicator |
| `LoanFileNumber` |  | |  |  | `CHAR(32)` | File Number |
| `LoanAlternativeID1` |  | |  |  | `CHAR(13)` | Alternative Identification |
| `LoanAlternativeID2` |  | |  |  | `CHAR(13)` | Alternative identification 2 |
| `LoanGroupKey1` |  | |  |  | `CHAR(6)` | Group Key 1 (Freely Available) |
| `LoanGroupKey2` |  | |  |  | `CHAR(6)` | Group Key 2 (Freely Available) |
| `LoanClassfctnNmbr` |  | |  |  | `CHAR(13)` | Classification Number for Finance Projects |
| `PrncpLoanInvmtNmbr` |  | |  |  | `CHAR(13)` | Principle loan investment number |
| `LoanApplicationNumber` |  | |  |  | `CHAR(13)` | Application number |
| `LoanIntrstCalcCptlMeth` |  | |  |  | `CHAR(1)` | Plan/Actual principle |
| `LoanTerm` |  | |  |  | `NUMC(2)` | Loan Term |
| `LoanCapitalAppliedAmount` |  | |  |  | `CURR(13)` | Capital applied for |
| `LoanContractCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `LoanApplicationEntryDate` |  | |  |  | `DATS(8)` | Entry Date of Loan Application |
| `LoanCommittedCapitalAmount` |  | |  |  | `CURR(13)` | Commitment capital |
| `LoanCommitmentDate` |  | |  |  | `DATS(8)` | Loan - Date of Commitment by Lender |
| `LoanTermStartDate` |  | |  |  | `DATS(8)` | Start of Term |
| `LoanTermEndDate` |  | |  |  | `DATS(8)` | End of Loan Term |
| `LoanPurpose` |  | |  |  | `CHAR(2)` | Purpose of Loan |
| `LoanSpecialTreatment` |  | |  |  | `NUMC(2)` | Special treatment of loan |
| `LoanCountryID` |  | |  |  | `CHAR(3)` | Country/Region ID |
| `LoanNonAccptcRsn` |  | |  |  | `NUMC(2)` | Reason for Non-Acceptance |
| `LoanWithdrawalDate` |  | |  |  | `DATS(8)` | Date of Rejection/Withdrawal |
| `LoanClass` |  | |  |  | `NUMC(3)` | Loans Class |
| `LoanApprovalDate` |  | |  |  | `DATS(8)` | Approval date |
| `LoanAssignmentCreditor` |  | |  |  | `CHAR(4)` | Assignee |
| `DunningArea` |  | |  |  | `CHAR(2)` | Dunning Area |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `LastDunningDate` |  | |  |  | `DATS(8)` | Date of Last Dunning Notice |
| `LoanSpecialPostingType` |  | |  |  | `CHAR(2)` | Special posting treatment |
| `LoanGroupKey3` |  | |  |  | `CHAR(6)` | Group Key 3 (Freely Available) |
| `LoanGroupKey4` |  | |  |  | `CHAR(6)` | Group Key 4 (Freely Available) |
| `LoanIncgPaytDistrCtrl` |  | |  |  | `NUMC(2)` | Indicator for Control of Incoming Payment Distribution |
| `LoanAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `LoanDrwgRestraintType` |  | |  |  | `NUMC(2)` | Type of Restraint on Drawing |
| `LoanSecurityType` |  | |  |  | `NUMC(2)` | Borrower's Note Loan Security Type |
| `LoanPortfolioType` |  | |  |  | `CHAR(10)` | Portfolio |
| `LoanSalesRegion` |  | |  |  | `CHAR(4)` | Sales Region |
| `LoanBranchOffice` |  | |  |  | `CHAR(4)` | Branch Office |
| `LoanProcessingControl` |  | |  |  | `NUMC(2)` | Loan Processing Indicator |
| `LoanOrganizationalDistrict` |  | |  |  | `CHAR(2)` | Organizational District |
| `LoanAgentDistrict` |  | |  |  | `CHAR(4)` | Agent District |
| `LoanManualDunLevel` |  | |  |  | `CHAR(1)` | Loan Manual Dunning Level |
| `LoanRedeemDate` |  | |  |  | `DATS(8)` | Date when loan will probably be redeemed |
| `LoanDiscountMethod` |  | |  |  | `CHAR(1)` | Loan Discount Accrual/Deferral Method |
| `LoanFixedContractControl` |  | |  |  | `CHAR(1)` | Indicator for Control of Fixed Contract |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `FinTransObjNmbr` |  | |  |  | `CHAR(22)` | Object Number for Financial Transactions |
| `LoanMainBrwrCustNmbr` |  | |  |  | `CHAR(10)` | Main Borrower Customer Number |
| `LoanMasterNumber` |  | |  |  | `CHAR(13)` | Master number part of loan number for finding contracts |
| `LoanDunSmmrzn` |  | |  |  | `CHAR(2)` | Summarization Level for Dunning Letter |
| `LoanDunRunIsExclude` |  | |  |  | `CHAR(1)` | Exclude Loan from Dunning Run |
| `LoanInternalReference` |  | |  |  | `CHAR(16)` | Internal Reference |
| `LoanCharacteristic` |  | |  |  | `CHAR(25)` | Characteristics |
| `LoanIsPostDunCharge` |  | |  |  | `CHAR(1)` | Post Dunning Charges and Interest to this Contract |
| `LoanIsLiabilityTransaction` |  | |  |  | `CHAR(1)` | Indicator: Asset/Liability Transaction |
| `LoanBusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `LoanIsPayoffLock` |  | |  |  | `CHAR(1)` | Payoff Lock |
| `LoanIsPOffBlkOpnItmClrg` |  | |  |  | `CHAR(1)` | Blocked by Payoff: No Open Item Clearing for Loan |
| `LoanGeneralValuationClass` |  | |  |  | `NUMC(4)` | General Valuation Class |
| `LoanPaymentStatus` |  | |  |  | `CHAR(1)` | Payment Status |
| `LoanConcludedRegion` |  | |  |  | `CHAR(3)` | Region Where Contract Concluded |
| `LoanBackOffice` |  | |  |  | `NUMC(8)` | Back Office |
| `LoanContractIBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
| `LoanBusProcChnAssgmtType` |  | |  |  | `CHAR(6)` | Business Process Type Code |
| `LoanBusProcChnAssgmtID` |  | |  |  | `CHAR(32)` | ID number of Business Process Chain Assignment |
