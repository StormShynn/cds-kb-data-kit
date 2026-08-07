---
name: I_BANKCHAINITEM
description: Intermediary bank for Bank Chain
app_component: FI-BL-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value
semantic_en: Intermediary bank for Bank Chain
tags:
  - FI
  - component:FI-BL-MD-2CL
  - FI-BL
  - FI-BL-MD
  - FI-BL-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_BANKCHAINITEM

**Intermediary bank for Bank Chain**

| Property | Value |
|---|---|
| App Component | `FI-BL-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKCHAINITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BkChnCountryKeyOfRecipientBank` |  | |  |  | `CHAR(3)` | Country/Region Key of Recipient Bank |
| `BkChnBankKeyOfRecipientBank` |  | |  |  | `CHAR(15)` | Bank Key of Recipient Bank |
| `BkChnAcctNumberAtRecipientBank` |  | |  |  | `CHAR(35)` | Account Number at Recipient Bank |
| `BkChnCurrencyKey` |  | |  |  | `CUKY(5)` | Currency |
| `BkChnCountryKeyOfSenderBank` |  | |  |  | `CHAR(3)` | Country/Region Key of Sender Bank |
| `BkChnBankKeyOfSenderBank` |  | |  |  | `CHAR(15)` | Bank Key of Sender Bank |
| `BkChnPaymentMethodSupplement` |  | |  |  | `CHAR(2)` | Payment method supplement |
| `BkChnIntermediaryBank` |  | |  |  | `NUMC(2)` | Current Number of a Bank in Bank Chain |
| `BkChnTypeOfBankInBankChain` |  | |  |  | `CHAR(1)` | Type of Bank in a Bank Chain (Correspondent, Intermediary) |
| `BkChnCntryKeyOfCorrespondentBk` |  | |  |  | `CHAR(3)` | Country/Region Key of a Correspondent Bank |
| `BkChnBkKeyOfCorrespondenceBank` |  | |  |  | `CHAR(15)` | Bank Key of a Correspondent Bank |
| `BkChnAcctNmbrAtCorrespondBank` |  | |  |  | `CHAR(35)` | Account Number at Correspondent Bank |
| `IBAN` |  | |  |  | `CHAR(34)` | IBAN (International Bank Account Number) |
