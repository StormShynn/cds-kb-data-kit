---
name: I_EWM_WHSEORDERHNDLGUNIT_2
description: Ewm Whseorderhndlgunit 2
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WHSEORDERHNDLGUNIT_2

**Ewm Whseorderhndlgunit 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |
| `WarehouseOrder` | ✓ | |  | `cast ( whohu.who as /scwm/de_who_conv_alpha preserving type )` |
| `EWMWhseOrderNmbrOfHndlgUnits` | ✓ | |  | `hukng` |
| `PackagingMaterialUUID` |  | |  | `cast(whohu.pmat_guid as matid_no_conv preserving type )` |
| `PackagingMaterial` |  | | `_Material` | `Product` |
| `HandlingUnitUUID` |  | |  | `huid` |
| `HandlingUnitNumber` |  | |  | `huident` |
| `HndlgUnitIsShippingHndlgUnit` |  | |  | `shiphu` |
| `HndlgUnitIsCreatedByWhseOrder` |  | |  | `flgwcr` |
| `StorageProcess` |  | |  | `prces` |
| `EWMConsolidationGroup` |  | |  | `dstgrp` |
| `EWMStorageType` |  | |  | `wstyp` |
| `EWMStorageSection` |  | |  | `wssec` |
| `EWMStorageBin` |  | |  | `wsbin` |
| `WarehouseOrderCreationRule` |  | |  | `wcr` |
| `HndlgUnitIsUsedInWhseOrder` |  | |  | `used` |
| `PlannedShippingHndlgUnitUUID` |  | |  | `pohu_guid` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@EndUserText.label: 'Handling Unit for Warehouse Order'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'WarehouseOrderPickHndlgUnit'
define view entity I_EWM_WhseOrderHndlgUnit_2
  as select from /scwm/whohu as whohu

  association [0..1] to I_Product as _Material on  $projection.PackagingMaterialUUID = _Material.ProductUUID
                                               and _Material.ProdSupChnMgmtUUID22    is not initial

{
  key whohu.lgnum                                                   as EWMWarehouse,
  key cast ( whohu.who as /scwm/de_who_conv_alpha preserving type ) as WarehouseOrder,
  key whohu.hukng                                                   as EWMWhseOrderNmbrOfHndlgUnits,
      cast(whohu.pmat_guid as matid_no_conv preserving type )       as PackagingMaterialUUID,
      _Material.Product                                             as PackagingMaterial,
      whohu.huid                                                    as HandlingUnitUUID,
      whohu.huident                                                 as HandlingUnitNumber,
      whohu.shiphu                                                  as HndlgUnitIsShippingHndlgUnit,
      whohu.flgwcr                                                  as HndlgUnitIsCreatedByWhseOrder,
      //    StorageProcess is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      whohu.prces                                                   as StorageProcess,
      whohu.dstgrp                                                  as EWMConsolidationGroup,
      whohu.wstyp                                                   as EWMStorageType,
      whohu.wssec                                                   as EWMStorageSection,
      whohu.wsbin                                                   as EWMStorageBin,
      whohu.wcr                                                     as WarehouseOrderCreationRule,
      @Semantics.booleanIndicator:true
      whohu.used                                                    as HndlgUnitIsUsedInWhseOrder,
      whohu.pohu_guid                                               as PlannedShippingHndlgUnitUUID

}
```
