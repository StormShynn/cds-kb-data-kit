---
name: I_QLTYMGMTPLANTLVLCONFIGN
description: "Qltymgmtplantlvlconfign"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - plant
  - component:QM-IM-2CL
  - lob:Quality Management
  - bo:Plant
---
# I_QLTYMGMTPLANTLVLCONFIGN

**Qltymgmtplantlvlconfign**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `SelectedCodeSet` |  | |  | `ppvemenge` |  |  |
| `SelectedCodeSetPlant` |  | |  | `ppvewerk` |  |  |
| `InspSpecAddlDecimalPlaces` |  | |  | `nkstellof` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Settings at Plant Level'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyMgmtPlantLvlConfign
  as select from tqss1
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant

{
      @ObjectModel.foreignKey.association: '_Plant'
  key tqss1.werks      as Plant,
      ppvemenge        as SelectedCodeSet,
      ppvewerk         as SelectedCodeSetPlant,
      _Plant,

      tqss1.nkstellof  as InspSpecAddlDecimalPlaces
}
```
