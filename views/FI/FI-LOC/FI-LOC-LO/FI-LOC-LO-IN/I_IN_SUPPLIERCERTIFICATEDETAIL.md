---
name: I_IN_SUPPLIERCERTIFICATEDETAIL
description: Supplier Certificate detail for India
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value
semantic_en: Supplier Certificate detail for India
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - supplier
  - metadata-only
---
# I_IN_SUPPLIERCERTIFICATEDETAIL

**Supplier Certificate detail for India**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUPPLIERCERTIFICATEDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CertificateId` |  | |  |  | `CHAR(10)` | Certificate ID |
| `IN_CertificateNumber` |  | |  |  | `CHAR(30)` | Certification Number |
| `IN_ValidFromDate` |  | |  |  | `DATS(8)` | Certificate Valid From Date |
| `IN_ValidToDate` |  | |  |  | `DATS(8)` | Certificate Valid to Date |
| `IN_SuplrCertRegCityName` |  | |  |  | `CHAR(25)` | Registration City |
| `IN_SuplrCertExmpType` |  | |  |  | `CHAR(1)` | Exemption Area |
| `IN_SuplrCertExmpRsnTxt` |  | |  |  | `CHAR(50)` | Exempt Reason |
| `IN_SuplrCertStatus` |  | |  |  | `CHAR(1)` | Certification Status |
| `IN_SuplrCertIsMainCertificate` |  | |  |  | `CHAR(1)` | Main Certificate |
| `CreationDate` |  | |  |  | `DATS(8)` | Certificate Creation Date |
| `IN_SuplrCertDescription1Text` |  | |  |  | `CHAR(150)` | Description 1 |
| `IN_SuplrCertDescription2Text` |  | |  |  | `CHAR(100)` | Description 2 |
| `IN_SuplrCertAdditional1Date` |  | |  |  | `DATS(8)` | Date 1 |
| `IN_SuplrCertAdditional2Date` |  | |  |  | `DATS(8)` | Date 2 |
| `IN_SupplierCertificateNumber1` |  | |  |  | `NUMC(15)` | Number 1 |
| `IN_SupplierCertificateNumber2` |  | |  |  | `NUMC(15)` | Number 2 |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
