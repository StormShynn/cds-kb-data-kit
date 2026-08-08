---
name: I_SECURITIESACCOUNTPARTNER
description: "Securities Account Partner Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value
semantic_en: "Securities Account Partner Details"
tags:
  - FS
  - account
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_SECURITIESACCOUNTPARTNER

**Securities Account Partner Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECURITIESACCOUNTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecuritiesAccountPartnerUUID` |  | |  |  | `RAW(16)` | Account Business partner guid |
| `SecuritiesAccountObjectUUID` |  | |  |  | `RAW(16)` | GUID for securities account |
| `SecuritiesAccountPartnerID` |  | |  |  | `CHAR(32)` | Business Partner ID |
| `SecuritiesAccountPartnerFunc` |  | |  |  | `CHAR(6)` | Business Partner Function |
| `SecuritiesAccountBPShareNmrtr` |  | |  |  | `INT4(10)` | Numerator in Business Partner Share of Securities Account |
| `SecuritiesAccountBPShareDnmntr` |  | |  |  | `INT4(10)` | Denominator in Business Partner Share of Securities Account |
| `SecuritiesAcctBPValdFrmDte` |  | |  |  | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `SecuritiesAcctBPValdToDte` |  | |  |  | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
