---
name: C_CMPLOBLASGTRECENTLYCHGDQ
description: "Recently Chgd Obl Assignments - Query"
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value
semantic_en: "Recently Chgd Obl Assignments - Query"
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - metadata-only
---
# C_CMPLOBLASGTRECENTLYCHGDQ

**Recently Chgd Obl Assignments - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CMPLOBLASGTRECENTLYCHGDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `CmplncOblgnAssgmtCmplncStsText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Is Deleted |
| `ComplianceOblgnAssgmtActnRqd` |  | |  |  | `CHAR(2)` | Action Required |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `LastChangedDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `LastChangeUTCDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
