---
name: I_CHANGEMASTERFUNCTIONTEXT
description: This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?
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
# I_CHANGEMASTERFUNCTIONTEXT

**This CDS view provides the prerequisites for answering the following business question: Which are the possible functions that can be assigned to change numbers?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberFunction` |  | |  |  | `CHAR(1)` | Change number function |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ChangeNumberFunctionText` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
