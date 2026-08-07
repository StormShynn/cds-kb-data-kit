---
name: I_EWM_FIXEDBINASSIGNMENT
description: "Ewm Fixedbinassignment"
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
# I_EWM_FIXEDBINASSIGNMENT

**Ewm Fixedbinassignment**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `EntitledToDisposeParty` | ✓ | |  | `entitled` |  |  |
| `EWMStorageBin` | ✓ | |  | `lgpla` |  |  |
| `Product` | ✓ | |  | `matnr` |  |  |
| `ProductUUID` |  | |  | `cast( matid as raw16 preserving type )` |  |  |
| `EWMStorageType` |  | |  | `lgtyp` |  |  |
| `EWMMaximumStorageQuantity` |  | |  | `maxqty` |  |  |
| `EWMMaximumStorageQuantityUnit` |  | |  | `maxqty_uom_dsp` |  |  |
| `EWMMinimumStorageQuantity` |  | |  | `minqty` |  |  |
| `EWMMinimumStorageQuantityUnit` |  | |  | `minqty_uom_dsp` |  |  |
| `EWMFixedBinAssgmtCreatedDteTme` |  | |  | `cast ( created_at as ewm_de_fixedbinassgmtcreateddt preserving type )` |  |  |
| `EWMFixedBinAssgmtCreatedByUser` |  | |  | `cast ( created_by as ewm_de_fixedbinassgmtcreatedby preserving type )` |  |  |

## Source Code

```abap
@EndUserText.label: 'Warehouse Fixed Bin Assignment'

@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType :#BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,                                      
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern:#ANALYTICAL_FACT

@Metadata.ignorePropagatedAnnotations: true

define view entity I_EWM_FixedBinAssignment
  as select from /scwm/binmat
{
  key lgnum                                                                 as EWMWarehouse,
  key entitled                                                              as EntitledToDisposeParty,
  key lgpla                                                                 as EWMStorageBin,
  key matnr                                                                 as Product,
      cast( matid as raw16 preserving type )                                as ProductUUID,
      lgtyp                                                                 as EWMStorageType,
      @Semantics.quantity.unitOfMeasure: 'EWMMaximumStorageQuantityUnit'
      maxqty                                                                as EWMMaximumStorageQuantity,
      maxqty_uom_dsp                                                        as EWMMaximumStorageQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'EWMMinimumStorageQuantityUnit'
      minqty                                                                as EWMMinimumStorageQuantity,
      minqty_uom_dsp                                                        as EWMMinimumStorageQuantityUnit,
      cast ( created_at as ewm_de_fixedbinassgmtcreateddt preserving type ) as EWMFixedBinAssgmtCreatedDteTme,
      cast ( created_by as ewm_de_fixedbinassgmtcreatedby preserving type ) as EWMFixedBinAssgmtCreatedByUser
//      outcon                                                                as EWMStorageBinImprovable,
//      datout                                                                as EWMStorBinImprovableChangedDte,
//      rmmqty_fix                                                            as EWMMinMaxReplnmtQtyIsFixed,
//      improv_fix                                                            as EWMStorageBinImprovableIsFixed
}
```
