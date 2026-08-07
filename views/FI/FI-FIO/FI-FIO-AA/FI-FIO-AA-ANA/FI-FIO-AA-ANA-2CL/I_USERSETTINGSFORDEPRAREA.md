---
name: I_USERSETTINGSFORDEPRAREA
description: This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity.
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity.
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_USERSETTINGSFORDEPRAREA

**This CDS view provides the prerequisites for answering the following business question: What is the default value of the depreciation area for my business user? This CDS view can be used as a derivation entity.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_USERSETTINGSFORDEPRAREA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessUser` |  | |  |  | `CHAR(12)` | User ID |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
