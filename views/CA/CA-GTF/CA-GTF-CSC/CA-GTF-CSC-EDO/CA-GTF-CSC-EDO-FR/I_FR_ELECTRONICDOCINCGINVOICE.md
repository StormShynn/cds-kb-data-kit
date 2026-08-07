---
name: I_FR_ELECTRONICDOCINCGINVOICE
description: "eDocument France Incoming Invoice"
app_component: CA-GTF-CSC-EDO-FR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value
semantic_en: "eDocument France Incoming Invoice"
tags:
  - CA
  - bo:billingdocument
  - CA-GTF
  - CA-GTF-CSC
  - CA-GTF-CSC-EDO
  - CA-GTF-CSC-EDO-FR
  - component:CA-GTF-CSC-EDO-FR
  - document
  - interface-view
  - invoice
  - lob:cross_application components
  - metadata-only
---
# I_FR_ELECTRONICDOCINCGINVOICE

**eDocument France Incoming Invoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-FR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FR_ELECTRONICDOCINCGINVOICE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FR_EDocInvoiceUUID` |  | |  |  | `CHAR(32)` | eDocument: GUID |
| `ElectronicDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ElectronicDocProcess` |  | |  |  | `CHAR(10)` | eDocument Process |
| `ElectronicDocCreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `FR_EDocSupInvoiceType` |  | |  |  | `CHAR(1)` | Invoice Type |
| `FR_EDocInvoiceTypeCode` |  | |  |  | `CHAR(10)` | eDocument France: Invoice Type Code |
| `FR_ElectronicDocSuppEmailAddr` |  | |  |  | `CHAR(125)` | eDocument France: Supplier Electronic Address |
| `FR_ElectronicDocCustEmailAddr` |  | |  |  | `CHAR(125)` | eDocument France: Customer Electronic Address |
| `FR_ElectronicDocInvoiceID` |  | |  |  | `CHAR(35)` | Invoice ID |
