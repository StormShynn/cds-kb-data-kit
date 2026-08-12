---
name: D_PURCHASINGINFORECORDCHANGED
description: "D Purchasinginforecordchanged"
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# D_PURCHASINGINFORECORDCHANGED

**D Purchasinginforecordchanged**

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
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchasing Info Record Changed'
define abstract entity D_PurchasingInfoRecordChanged
{

  Supplier                     : elifn;
  Material                     : matnr;
  MaterialGroup                : matkl;

}
```
