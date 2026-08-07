---
name: I_BANKGROUPBANKFEECUBE
description: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value
semantic_en: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BANKGROUPBANKFEECUBE

**This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BkSrvcBillgStmntUUID` |  | |  |  | `CHAR(36)` | Bank Services Billing Statement UUID |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `FeeType` |  | |  |  | `CHAR(12)` |  |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | To Date |
| `BankFeeService` |  | |  |  | `CHAR(35)` | Billing Service ID |
| `BankFeeServiceDescription` |  | |  |  | `CHAR(70)` | Description field of length 70 |
| `BankFeeSrvcComCode` |  | |  |  | `CHAR(8)` |  |
| `BankFeeSrvcComCodeIssuer` |  | |  |  | `CHAR(6)` | Bank Service Common Code Issuer |
| `BankFeeSrvcType` |  | |  |  | `CHAR(12)` |  |
| `BankFeeChargeType` |  | |  |  | `CHAR(12)` | Charge Type |
| `BankFeeChargeTypeText` |  | |  |  | `CHAR(20)` | Charge Type Long Text |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Fiori Reference Apps: Calendar Quarter |
| `CalendarYear` |  | |  |  | `NUMC(4)` |  |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` |  |
| `OriginalChargePriceCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OriginalChargePrice` |  | |  |  | `CURR(23)` |  |
| `TotalTaxAmountCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalTaxAmount` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BankAccountType` |  | |  |  | `CHAR(10)` | Bank Account Type ID |
