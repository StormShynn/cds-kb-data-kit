---
name: I_ASSETKEYFIGURETEXT
description: This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ASSETKEYFIGURETEXT

**This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figures are defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `AssetAccountingKeyFigure` |  | |  |  | `CHAR(10)` | Key Figure for Asset Accounting |
| `AssetAccountingKeyFigureText` |  | |  |  | `CHAR(70)` | Key Figure Code Name |
