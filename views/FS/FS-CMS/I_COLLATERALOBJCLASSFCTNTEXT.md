---
name: I_COLLATERALOBJCLASSFCTNTEXT
description: "Collateral Object Classification - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value
semantic_en: "Collateral Object Classification - Text"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALOBJCLASSFCTNTEXT

**Collateral Object Classification - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALOBJCLASSFCTNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `CollateralObjClassification` |  | |  |  | `CHAR(6)` | Classification |
| `Language` |  | |  |  | `LANG(1)` | Language in which Description is Required |
| `CollateralObjClassfctnText` |  | |  |  | `CHAR(40)` | Feature of the object type/ Object classification |
