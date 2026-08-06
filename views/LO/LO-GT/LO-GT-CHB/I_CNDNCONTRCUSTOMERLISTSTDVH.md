---
name: I_CNDNCONTRCUSTOMERLISTSTDVH
description: Condition Contract Customer List
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTOMERLISTSTDVH')/$value
semantic_en: Condition Contract Customer List
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRCUSTOMERLISTSTDVH

**Condition Contract Customer List**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCUSTOMERLISTSTDVH')/$value) |

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
