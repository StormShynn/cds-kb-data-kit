---
name: I_CHGMSTRLOGACCMSECUREIDASSGMT
description: This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value
semantic_en: This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHGMSTRLOGACCMSECUREIDASSGMT

**This CDS view helps retrieve change number assignments to secure IDs used in access control management (ACM). This CDS view provides the prerequisites for answering the following business questions: Which change numbers are assigned to a certain access control context? To which access control contexts has a certain change number been assigned?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHGMSTRLOGACCMSECUREIDASSGMT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LogAccMObjectID` | `CHAR(90)` | Internal Key |
| `LogAccMSecureID` | `RAW(16)` | Secure ID |
| `LogAccMObjectType` | `CHAR(10)` | Object Type |
