---
name: I_ASSETTRANSACTIONTYPETEXT
description: This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_ASSETTRANSACTIONTYPETEXT

**This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AssetTransactionType` | `CHAR(3)` | Asset Transaction Type |
| `Language` | `LANG(1)` | Language Key |
| `AssetTransactionTypeName` | `CHAR(50)` | Asset Transaction Type Name |
