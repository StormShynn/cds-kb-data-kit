---
name: C_BANKGROUPBANKFEEQUERY
description: This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value
semantic_en: This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - metadata-only
---
# C_BANKGROUPBANKFEEQUERY

**This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` |  |
| `BankFeeSrvcComCodeIssuer` |  | |  |  | `CHAR(6)` | Bank Service Common Code Issuer |
| `BankFeeSrvcComCode` |  | |  |  | `CHAR(8)` |  |
| `BankFeeChargeType` |  | |  |  | `CHAR(12)` | Charge Type |
| `BankFeeChargeTypeText` |  | |  |  | `CHAR(20)` | Charge Type Long Text |
| `BankFeeSrvcType` |  | |  |  | `CHAR(12)` |  |
| `BankFeeService` |  | |  |  | `CHAR(35)` | Billing Service ID |
| `BankFeeServiceDescription` |  | |  |  | `CHAR(70)` | Description field of length 70 |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | To Date |
| `FeeType` |  | |  |  | `CHAR(12)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` |  |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Fiori Reference Apps: Calendar Quarter |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `ChargePriceInDC` |  | |  |  | `CURR(23)` |  |
| `TaxInDC` |  | |  |  | `CURR(23)` |  |
