---
name: I_TAXCLASSIFICATIONTEXT
description: "Tax Classification - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value
semantic_en: "Tax Classification - Text"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_TAXCLASSIFICATIONTEXT

**Tax Classification - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXCLASSIFICATIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `TaxClassification` |  | |  |  | `CHAR(4)` | Tax Class |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `TaxClassificationName` |  | |  |  | `CHAR(50)` | Tax Class Name |
