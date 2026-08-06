---
name: I_CNDNCONTRPLANTLISTSTDVH
description: This CDS view exposes the values for the condition contract plant list.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPLANTLISTSTDVH')/$value
semantic_en: This CDS view exposes the values for the condition contract plant list.
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - plan
  - metadata-only
---
# I_CNDNCONTRPLANTLISTSTDVH

**This CDS view exposes the values for the condition contract plant list.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPLANTLISTSTDVH')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConditionContract` | `CHAR(10)` | Condition Contract |
| `CndnContrType` | `CHAR(4)` | Condition Contract Type |
| `CndnContrTypeDesc` | `CHAR(40)` | Condition Contract Type Description |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `CndnContrValidFrom` | `DATS(8)` | Valid From |
| `CndnContrValidTo` | `DATS(8)` | Valid To |
