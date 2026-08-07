---
name: I_ASSETKEYFIGURESET
description: This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?
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
# I_ASSETKEYFIGURESET

**This CDS view provides the prerequisites for answering the following business question: How many asset accounting key figure groups are defined?**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` |  | |  |  | `CHAR(10)` | Key Figure Group |
| `AssetAcctgKeyFigSetAnlytlCntxt` |  | |  |  | `CHAR(2)` | Application Context of Key Figure Variant |
