---
name: I_BANKCHAINHEADER
description: Bank Chain per Business Partner Account
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value
semantic_en: Bank Chain per Business Partner Account
tags:
  - FI
  - account
  - component:FI-BL-MD-2CL
  - FI-BL
  - FI-BL-MD
  - FI-BL-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BANKCHAINHEADER

**Bank Chain per Business Partner Account**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINHEADER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BkChnCountryKeyOfRecipientBank` | `CHAR(3)` | Country/Region Key of Recipient Bank |
| `BkChnBankKeyOfRecipientBank` | `CHAR(15)` | Bank Key of Recipient Bank |
| `BkChnAcctNumberAtRecipientBank` | `CHAR(35)` | Account Number at Recipient Bank |
| `BkChnCurrencyKey` | `CUKY(5)` | Currency |
| `BkChnCountryKeyOfSenderBank` | `CHAR(3)` | Country/Region Key of Sender Bank |
| `BkChnBankKeyOfSenderBank` | `CHAR(15)` | Bank Key of Sender Bank |
| `BkChnPaymentMethodSupplement` | `CHAR(2)` | Payment method supplement |
| `BkChnBankAccountNumberForUI` | `CHAR(35)` | Account Number at Recipient Bank |
| `NumberOfOccurrences` | `INT4(10)` | Account Number of a Technical Type |
| `IBAN` | `CHAR(34)` | IBAN (International Bank Account Number) |
