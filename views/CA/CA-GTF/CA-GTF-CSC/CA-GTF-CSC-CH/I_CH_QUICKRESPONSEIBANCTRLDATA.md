---
name: I_CH_QUICKRESPONSEIBANCTRLDATA
description: QRBILL Ctrl Data Config for Switzerland
app_component: CA-GTF-CSC-CH
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value
semantic_en: QRBILL Ctrl Data Config for Switzerland
tags:
  - CA
  - bo:companycode
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-CH
  - component:CA-GTF-CSC-CH
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_CH_QUICKRESPONSEIBANCTRLDATA

**QRBILL Ctrl Data Config for Switzerland**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CH_QUICKRESPONSEIBANCTRLDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QuickResponseIBAN` |  | |  |  | `CHAR(34)` | QR-IBAN International Bank Account Number |
| `CH_CustomerIdentifier` |  | |  |  | `CHAR(6)` | Customer ID Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `IsLeadingCompanyCode` |  | |  |  | `CHAR(1)` | Leading Company Code |
| `AccountingDocumentNumberOffset` |  | |  |  | `NUMC(2)` | Offset of Document Number in the QR-Bill Reference Number |
| `AccountingDocumentNumberLength` |  | |  |  | `NUMC(2)` | Length of Document Number |
| `CustomerNumberOffset` |  | |  |  | `NUMC(2)` | Offset of Customer Number in the QR Reference Number |
| `CustomerNumberLength` |  | |  |  | `NUMC(2)` | Length of Customer Number |
| `CH_AmountIsNotRequired` |  | |  |  | `CHAR(1)` | Do Not Print Amount |
| `CH_BillInfoIsNotRequired` |  | |  |  | `CHAR(1)` | Do Not Print Billing Information |
| `CH_QckRspBillIsNotRequired` |  | |  |  | `CHAR(1)` | Do Not Print QR-Bill |
| `CH_QuickResponseBillOutputFrmt` |  | |  |  | `CHAR(2)` | Format Parameter for QR-Bill |
| `CH_QuickResponseProvider` |  | |  |  | `CHAR(2)` | QR Provider |
| `CH_QuickResponseReference` |  | |  |  | `CHAR(4)` | Reference Type of QR-Bill |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `CH_AccountModification` |  | |  |  | `CHAR(10)` | Bank Statement: Account Modification |
| `CH_AppIndicatorIdentifier` |  | |  |  | `CHAR(6)` | Application Indicator |
| `DunningNoticeIsPrinted` |  | |  |  | `CHAR(1)` | Print Dunning Notices |
