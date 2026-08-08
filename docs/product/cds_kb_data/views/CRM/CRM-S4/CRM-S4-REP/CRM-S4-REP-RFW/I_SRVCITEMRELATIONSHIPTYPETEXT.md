---
name: I_SRVCITEMRELATIONSHIPTYPETEXT
description: "Service Item Relationships - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value
semantic_en: "Service Item Relationships - Text"
tags:
  - CRM
  - bo:project
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
  - metadata-only
---
# I_SRVCITEMRELATIONSHIPTYPETEXT

**Service Item Relationships - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCITEMRELATIONSHIPTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcItemRelshpType` |  | |  |  | `CHAR(3)` | Item Relationship Type |
| `Language` |  | |  |  | `LANG(1)` | Language Key of Description |
| `SrvcItemRelshpFromTypeName` |  | |  |  | `CHAR(50)` | Name of Item Relationship (Forward) |
| `SrvcItemRelshpToTypeName` |  | |  |  | `CHAR(50)` | Name of Item Relationship (Backward) |
