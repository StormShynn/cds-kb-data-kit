---
name: I_CMPLOBLASGTACTNRQDCHGDNOTIF
description: Action Required Changed Email Notif
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value
semantic_en: Action Required Changed Email Notif
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_CMPLOBLASGTACTNRQDCHGDNOTIF

**Action Required Changed Email Notif**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTACTNRQDCHGDNOTIF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SenderFullName` |  | |  |  | `CHAR(80)` | Full Name of Party |
| `EHSReceiverFullName` |  | |  |  | `CHAR(80)` | Full Name of Party |
| `CmplncOblgnAssgmtURL` |  | |  |  | `CHAR(1333)` | Long Text (max) |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
