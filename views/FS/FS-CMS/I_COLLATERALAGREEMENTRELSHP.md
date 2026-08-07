---
name: I_COLLATERALAGREEMENTRELSHP
description: "Agreement Relationship Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value
semantic_en: "Agreement Relationship Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALAGREEMENTRELSHP

**Agreement Relationship Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRelationshipUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_REL |
| `AgreementRelationshipType` |  | |  |  | `CHAR(6)` | Relationship type |
| `AgreementRelationshipSrceUUID` |  | |  |  | `RAW(16)` | Relationship Source GUID |
| `AgrmtRelshpSrceSecdryUUID` |  | |  |  | `RAW(16)` | Relationship Source Secondary GUID |
| `AgreementRelationshipDestUUID` |  | |  |  | `RAW(16)` | Relationship destination GUID |
| `AgrmtRelshpValidFromDate` |  | |  |  | `DATS(8)` | Date |
| `AgrmtRelshpValidToDate` |  | |  |  | `DATS(8)` | Date |
| `AgrmtRelshpRankValue` |  | |  |  | `NUMC(4)` | Relationship Rank-Order of the source linked to destination |
| `AgrmtRelshpPriorityValue` |  | |  |  | `NUMC(4)` | Priority of a Relationship |
| `AgreementRelationshipCalcType` |  | |  |  | `CHAR(6)` | Calculation type for relations of collateral agreements |
| `AgreementRelationshipObject` |  | |  |  | `CHAR(6)` | Relationship Object |
