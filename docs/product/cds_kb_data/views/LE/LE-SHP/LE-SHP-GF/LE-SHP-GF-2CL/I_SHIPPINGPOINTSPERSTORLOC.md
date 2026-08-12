---
name: I_SHIPPINGPOINTSPERSTORLOC
description: "Shippingpointsperstorloc"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGPOINTSPERSTORLOC

**Shippingpointsperstorloc**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingCondition` | ✓ | |  | `vsbed` |  |  |
| `LoadingGroup` | ✓ | |  | `ladgr` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `StorageLocation` | ✓ | |  | `lgort` |  |  |
| `ProposedShippingPoint` |  | |  | `vstel` |  |  |
| `AlternativeShippingPoint1` |  | |  | `vste1` |  |  |
| `AlternativeShippingPoint2` |  | |  | `vste2` |  |  |
| `AlternativeShippingPoint3` |  | |  | `vste3` |  |  |
| `AlternativeShippingPoint4` |  | |  | `vste4` |  |  |
| `AlternativeShippingPoint5` |  | |  | `vste5` |  |  |
| `AlternativeShippingPoint6` |  | |  | `vste6` |  |  |
| `AlternativeShippingPoint7` |  | |  | `vste7` |  |  |
| `AlternativeShippingPoint8` |  | |  | `vste8` |  |  |
| `AlternativeShippingPoint9` |  | |  | `vste9` |  |  |
| `AlternativeShippingPoint10` |  | |  | `vste10` |  |  |
| `AlternativeShippingPoint11` |  | |  | `vste11` |  |  |
| `_LoadingGroup` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Shipping points per storage location'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #ORGANIZATIONAL
  },
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE],
  modelingPattern: #NONE
}

define view entity I_ShippingPointsPerStorLoc
  as select from tvstz_storloc

  association of many to exact one I_ShippingCondition as _ShippingCondition on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association of many to exact one I_LoadingGroup      as _LoadingGroup      on  $projection.LoadingGroup = _LoadingGroup.LoadingGroup
  association of many to exact one I_Plant             as _Plant             on  $projection.Plant = _Plant.Plant
  association of many to exact one I_StorageLocation   as _StorageLocation   on  $projection.Plant           = _StorageLocation.Plant
                                                                             and $projection.StorageLocation = _StorageLocation.StorageLocation

{
  @ObjectModel.foreignKey.association: '_ShippingCondition'
  key vsbed  as ShippingCondition,
  @ObjectModel.foreignKey.association: '_LoadingGroup'
  key ladgr  as LoadingGroup,
  @ObjectModel.foreignKey.association: '_Plant'
  key werks  as Plant,
  @ObjectModel.foreignKey.association: '_StorageLocation'
  key lgort  as StorageLocation,
      vstel  as ProposedShippingPoint,
      vste1  as AlternativeShippingPoint1,
      vste2  as AlternativeShippingPoint2,
      vste3  as AlternativeShippingPoint3,
      vste4  as AlternativeShippingPoint4,
      vste5  as AlternativeShippingPoint5,
      vste6  as AlternativeShippingPoint6,
      vste7  as AlternativeShippingPoint7,
      vste8  as AlternativeShippingPoint8,
      vste9  as AlternativeShippingPoint9,
      vste10 as AlternativeShippingPoint10,
      vste11 as AlternativeShippingPoint11,

      _LoadingGroup,
      _ShippingCondition,
      _Plant,
      _StorageLocation
}
```
