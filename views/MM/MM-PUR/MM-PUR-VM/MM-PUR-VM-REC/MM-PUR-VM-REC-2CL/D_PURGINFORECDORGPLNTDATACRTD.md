---
name: D_PURGINFORECDORGPLNTDATACRTD
description: D Purginforecdorgplntdatacrtd
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# D_PURGINFORECDORGPLNTDATACRTD

**D Purginforecdorgplntdatacrtd**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  | `elifn` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchasing Info Record Organization Plant Data Created'
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PurgInfoRecdOrgPlntDataCrtd
{
  Supplier      : elifn;
  Material      : matnr;
  MaterialGroup : matkl;

}
```
