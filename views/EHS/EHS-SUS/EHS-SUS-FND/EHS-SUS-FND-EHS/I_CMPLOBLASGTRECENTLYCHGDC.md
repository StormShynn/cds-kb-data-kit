---
name: I_CMPLOBLASGTRECENTLYCHGDC
description: Recently Chgd Obl Assignments - Cube
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value
semantic_en: Recently Chgd Obl Assignments - Cube
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_CMPLOBLASGTRECENTLYCHGDC

**Recently Chgd Obl Assignments - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMPLOBLASGTRECENTLYCHGDC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplncObligationAssignmentUUID` |  | |  |  | `RAW(16)` | Compliance Obligation Assignment UUID |
| `ComplianceObligationUUID` |  | |  |  | `RAW(16)` | Compliance Obligation |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `EHSLocationName` |  | |  |  | `CHAR(60)` | Location Revision Text |
| `CmplncOblgnAssgmtCmplncStatus` |  | |  |  | `CHAR(2)` | Status |
| `CmplncOblgnAssgmtCmplncStsText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Is Deleted |
| `ComplianceOblgnAssgmtActnRqd` |  | |  |  | `CHAR(2)` | Action Required |
| `ComplianceObligationDomainCode` |  | |  |  | `CHAR(21)` | Compliance Obligation Domain |
| `ComplianceObligationTypeCode` |  | |  |  | `CHAR(2)` | Compliance Obligation Type |
| `ComplianceObligationTitle` |  | |  |  | `CHAR(255)` | Compliance Obligation Title |
| `LastChangedDate` |  | |  |  | `DATS(8)` | Last Changed Date |
| `LastChangeUTCDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
