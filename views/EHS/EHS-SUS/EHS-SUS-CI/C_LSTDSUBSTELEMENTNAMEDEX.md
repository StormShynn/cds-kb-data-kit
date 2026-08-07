---
name: C_LSTDSUBSTELEMENTNAMEDEX
description: Listed Substance Element Name
app_component: EHS-SUS-CI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value
semantic_en: Listed Substance Element Name
tags:
  - EHS
  - component:EHS-SUS-CI
  - consumption-view
  - EHS-SUS
  - EHS-SUS-CI
  - metadata-only
---
# C_LSTDSUBSTELEMENTNAMEDEX

**Listed Substance Element Name**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-CI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LSTDSUBSTELEMENTNAMEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ListedSubstance` |  | |  |  | `CHAR(12)` | Listed Substance |
| `ListedSubstanceNameCharUUID` |  | |  |  | `CHAR(32)` | Listed Substance UUID in character form |
| `ListedSubstanceNameUUID` |  | |  |  | `RAW(16)` | Listed Substance Name UUID |
| `ListedSubstanceUUID` |  | |  |  | `RAW(16)` | Listed Substance Key |
| `ListedSubstanceNameSequence` |  | |  |  | `INT1(3)` | Listed Substance Name Sequence Number |
| `Language` |  | |  |  | `LANG(1)` | Language |
| `ListedSubstanceName` |  | |  |  | `CHAR(1333)` | Listed Substance Name |
