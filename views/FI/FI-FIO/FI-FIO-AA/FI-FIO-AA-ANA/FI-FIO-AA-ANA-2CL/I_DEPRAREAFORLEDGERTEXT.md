---
name: I_DEPRAREAFORLEDGERTEXT
description: This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?
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
# I_DEPRAREAFORLEDGERTEXT

**This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` | `NUMC(2)` | Depreciation Area Real or Derived |
| `Language` | `LANG(1)` | Language Key |
| `AssetDepreciationAreaName` | `CHAR(50)` | Depreciation Area Name |
| `AssetDepreciationAreaShortName` | `CHAR(12)` | Short Name for Depreciation Area |
