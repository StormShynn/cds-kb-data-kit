---
name: I_AGREEMENTPARTNER
description: Agreement Business Partner Relationship
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value
semantic_en: Agreement Business Partner Relationship
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTPARTNER

**Agreement Business Partner Relationship**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AgreementPartnerUUID` | `RAW(16)` | GUID for Table CMS_CAG_BP |
| `CollateralAgreementUUID` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPortionUUID` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `AgreementPartnerID` | `CHAR(32)` | Business Partner ID |
| `AgreementPartnerFunction` | `CHAR(6)` | Business Partner Function |
| `AgreementPartnerSignDate` | `DATS(8)` | Date on which Business Partner Signs an Agreement |
| `AgrmtPartnerAgrmtDisclosureDte` | `DATS(8)` | Date on which Business Partner is disclosed an agreement |
