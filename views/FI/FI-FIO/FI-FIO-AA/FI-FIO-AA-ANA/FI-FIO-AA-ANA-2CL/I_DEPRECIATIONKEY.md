---
name: I_DEPRECIATIONKEY
description: This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?
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
# I_DEPRECIATIONKEY

**This CDS view provides the prerequisites for answering the following business question: How many depreciation keys are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRECIATIONKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` |  | |  |  | `CHAR(4)` | Chart of Depreciaton for Asset Valuation |
| `DepreciationKey` |  | |  |  | `CHAR(4)` | Depreciation Key |
