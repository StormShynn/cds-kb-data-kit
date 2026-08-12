---
name: I_EWM_HANDLINGUNITHDR_2
description: "This CDS view provides details about handling units, for example, the weight, volume, or packaging material. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value
semantic_en: "This CDS view provides details about handling units, for example, the weight, volume, or packaging material. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Handling Unit Header — CDS view giao diện dựa trên Warehouse Handling Unit Header."
keywords:
  - "warehouse"
  - "handling"
  - "unit"
  - "header"
  - "number"
  - "indicator"
  - "packaging"
  - "material"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - material
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_HANDLINGUNITHDR_2

**This CDS view provides details about handling units, for example, the weight, volume, or packaging material. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitNumber` | ✓ | |  | `cast(huident as ewm_de_hu_no_conv preserving type )` | `CHAR(20)` | Handling Unit Identification |
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `HandlingUnitIndicator` | ✓ | |  | `vhi` | `CHAR(1)` | Virtual Handling Unit |
| `HandlingUnitUUID` |  | |  | `guid_hu` | `RAW(16)` | Unique Internal Identification of a Handling Unit |
| `PackagingMaterialUUID` |  | |  | `cast(pmat_guid as matid_no_conv preserving type )` | `RAW(16)` | Product UUID |
| `CreatedByUser` |  | |  | `created_by` | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  | `created_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  | `changed_by` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `changed_at` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `GrossWeight` |  | |  | `g_weight` | `QUAN(15)` | Total Weight of Handling Unit |
| `NetWeight` |  | |  | `n_weight` | `QUAN(15)` | Loading Weight of Handling Unit |
| `WeightUnit` |  | |  | `unit_gw` | `UNIT(3)` | Weight Unit |
| `HandlingUnitTareWeight` |  | |  | `t_weight` | `QUAN(15)` | Tare Weight of Handling Unit |
| `HandlingUnitTareWeightUnit` |  | |  | `unit_tw` | `UNIT(3)` | Weight Unit |
| `GrossVolume` |  | |  | `g_volume` | `QUAN(15)` | Total Volume of Handling Unit |
| `HandlingUnitNetVolume` |  | |  | `n_volume` | `QUAN(15)` | Loading Volume of Handling Unit |
| `VolumeUnit` |  | |  | `unit_gv` | `UNIT(3)` | Volume Unit |
| `HandlingUnitTareVolume` |  | |  | `t_volume` | `QUAN(15)` | Tare Volume of Handling Unit |
| `HandlingUnitTareVolumeUnit` |  | |  | `unit_tv` | `UNIT(3)` | Volume Unit |
| `HandlingUnitGrossCapacity` |  | |  | `g_capa` | `DEC(15)` | Total Capacity Key Figure |
| `HandlingUnitNetCapacity` |  | |  | `n_capa` | `DEC(15)` | Net Capacity Key Figure |
| `HandlingUnitTareCapacity` |  | |  | `t_capa` | `DEC(15)` | Tare Capacity Key Figure for Packaging |
| `HandlingUnitLength` |  | |  | `length` | `QUAN(15)` | Length |
| `HandlingUnitWidth` |  | |  | `width` | `QUAN(15)` | Width |
| `HandlingUnitHeight` |  | |  | `height` | `QUAN(15)` | Height |
| `EWMDimensionUnit` |  | |  | `unit_lwh` | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `HandlingUnitMaxWeight` |  | |  | `max_weight` | `QUAN(15)` | Maximum Allowed Weight |
| `HandlingUnitWeightTolerance` |  | |  | `tolw` | `DEC(3)` | Excess Weight Tolerance for Handling Unit |
| `HasVariableTareWeight` |  | |  | `tare_var` | `CHAR(1)` | Tare Weight Variable |
| `HandlingUnitMaxVolume` |  | |  | `max_volume` | `QUAN(15)` | Maximum Volume |
| `HandlingUnitVolumeTolerance` |  | |  | `tolv` | `DEC(3)` | Excess Volume Tolerance of the Handling Unit |
| `HandlingUnitIsClosed` |  | |  | `closed_package` | `CHAR(1)` | Closed Packaging Material |
| `MaximumCapacity` |  | |  | `max_capa` | `DEC(15)` | Maximum Permitted Capacity for Packaging Material |
| `HandlingUnitCapacityTolerance` |  | |  | `tolc` | `DEC(3)` | Excess Capacity Tolerance of Handling Unit |
| `HandlingUnitMaxLength` |  | |  | `max_length` | `QUAN(15)` | Maximum Packing Length of a Packaging Material |
| `HandlingUnitMaxWidth` |  | |  | `max_width` | `QUAN(15)` | Maximum Allowed Packing Width of a Packaging Material |
| `HandlingUnitMaxHeight` |  | |  | `max_height` | `QUAN(15)` | Maximum Packing Height of a Packaging Material |
| `HandlingUnitMaxDimensionUnit` |  | |  | `unit_max_lwh` | `UNIT(3)` | Unit of Measure for Maximum Packing Length/Width/Height |
| `HandlingUnitType` |  | |  | `letyp` | `CHAR(4)` | Handling Unit Type |
| `HandlingUnitHasAvailQty` |  | |  | `flgavq` | `CHAR(1)` | Indicator: Handling Unit Contains an Available Quantity |
| `HandlingUnitOpenTaskInd` |  | |  | `flgmove` | `CHAR(1)` | Indicator: Handling Unit is Being Moved (Open HU WT) |
| `ExternalStorageProcessStep` |  | |  | `procs` | `CHAR(4)` | External Storage Process Step |
| `ProcessStepCompletedInd` |  | |  | `copst` | `CHAR(1)` | Process Step for HU Completed |
| `EWMHUProcessStepIsCompleted` |  | |  | `copst` | `CHAR(1)` | Process Step for HU Completed |
| `StorageProcess` |  | |  | `prces` | `CHAR(4)` | Storage Process |
| `EWMConsolidationGroup` |  | |  | `dstgrp` | `CHAR(10)` | Consolidation Group |
| `WorkloadIdentification` |  | |  | `wklid` | `NUMC(12)` | Workload Identification |
| `EntitledToDisposeParty` |  | |  | `entitled` | `CHAR(10)` | Party Entitled to Dispose |
| `EWMStorageType` |  | |  | `wstyp` | `CHAR(4)` | Storage Type |
| `EWMStorageSection` |  | |  | `wssec` | `CHAR(4)` | Storage Section |
| `EWMStorageBin` |  | |  | `wsbin` | `CHAR(18)` | Storage Bin |
| `WarehouseOrderCreationRule` |  | |  | `wcr` | `CHAR(4)` | Warehouse Order Creation Rule |
| `HandlingUnitDefectCode` |  | |  | `mfserror` | `CHAR(4)` | Handling Unit Contains a Defect |
| `HandlingUnitContentInd` |  | |  | `ukcon` | `CHAR(1)` | Indicator of HU Content Type |
| `PackagingMaterialType` |  | |  | `pmtyp` | `CHAR(4)` | Packaging Material Type |
| `HandlingUnitPackingGroup` |  | |  | `packgr` | `CHAR(4)` | Packing Group |
| `HandlingUnitStatus` |  | |  | `phystat` | `CHAR(1)` | Internal Status of a Handling Unit |
| `HandlingUnitTopLevelInd` |  | |  | `top` | `CHAR(1)` |  |
| `HandlingUnitBottomInd` |  | |  | `bottom` | `CHAR(1)` |  |
| `StatusProfile` |  | |  | `stsma` | `CHAR(8)` | Status Profile for Handling Unit User Status |
| `PackagingSpecificationUUID` |  | |  | `cast( ps_guid as raw16 preserving type )` | `RAW(16)` | RAW16 |
| `PackagingSpecificationLevel` |  | |  | `ps_level_seq` | `CHAR(2)` | Sequence Number of a Level in a Packaging Specification |
| `HandlingUnitObjRefInd` |  | |  | `objref` | `CHAR(1)` |  |
| `HazardousSubstanceIndicator` |  | |  | `hzmt` | `CHAR(1)` | Hazardous Substance |
| `HandlingUnitLogicalPosition` |  | |  | `logpos` | `CHAR(2)` | Logical Position of Handling Unit |
| `DistrEquipmentLogicalPos` |  | |  | `logpos_ext` | `CHAR(11)` | Actual Handling Unit Position |
| `HandlingUnitAutoCreationLevel` |  | |  | `auto_crea_pick` | `CHAR(1)` | Display of Automatically Created Nested Pick-HUs |
| `EWMHandlingUnitExternalUUID` |  | |  | `hu_guid_ext` | `RAW(16)` | Additional Unique External Identification of a Handling Unit |
| `EWMHghstLvlHandlingUnitUUID` |  | |  | `guid_hu_top` | `RAW(16)` | DO NOT USE: Highest-Level Handling Unit |
| `EWMHndlgUnitPickingCriteria` |  | |  | `pickhuind` | `CHAR(1)` | Apply Picking Criteria for Handling Units |
| `EWMPackingInstructionUUID` |  | |  | `cast( pi_guid as raw16 preserving type )` | `RAW(16)` | RAW16 |
| `UnifiedPackageBuildingEngine` |  | |  | `pb_engine` | `CHAR(2)` | Unified Package Building Engine |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_HANDLINGUNITHDR_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Warehouse Handling Unit Header'
@VDM.viewType:#BASIC

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #L
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view entity I_EWM_HandlingUnitHdr_2
  as select from /scwm/huhdr as huhdr
{
  key cast(huident as ewm_de_hu_no_conv preserving type ) as HandlingUnitNumber,
  key lgnum                                               as EWMWarehouse,
  key vhi                                                 as HandlingUnitIndicator,
      guid_hu                                             as HandlingUnitUUID,
      cast(pmat_guid as matid_no_conv preserving type )   as PackagingMaterialUUID,
      created_by                                          as CreatedByUser,
      created_at                                          as CreationDateTime,
      //orig_system,
      changed_by                                          as LastChangedByUser,
      changed_at                                          as LastChangeDateTime,
      @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
      g_weight                                            as GrossWeight,
      @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
      n_weight                                            as NetWeight,
      unit_gw                                             as WeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HANDLINGUNITTAREWEIGHTUNIT'
      t_weight                                            as HandlingUnitTareWeight,
      unit_tw                                             as HandlingUnitTareWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
      g_volume                                            as GrossVolume,
      @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
      n_volume                                            as HandlingUnitNetVolume,
      unit_gv                                             as VolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'HANDLINGUNITTAREVOLUMEUNIT'
      t_volume                                            as HandlingUnitTareVolume,
      unit_tv                                             as HandlingUnitTareVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      g_capa                                              as HandlingUnitGrossCapacity,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      n_capa                                              as HandlingUnitNetCapacity,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      t_capa                                              as HandlingUnitTareCapacity,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      length                                              as HandlingUnitLength,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      width                                               as HandlingUnitWidth,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      height                                              as HandlingUnitHeight,
      unit_lwh                                            as EWMDimensionUnit,
      @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
      max_weight                                          as HandlingUnitMaxWeight,
      @Semantics.quantity.unitOfMeasure: 'WEIGHTUNIT'
      tolw                                                as HandlingUnitWeightTolerance,
      tare_var                                            as HasVariableTareWeight,
      @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
      max_volume                                          as HandlingUnitMaxVolume,
      @Semantics.quantity.unitOfMeasure: 'VOLUMEUNIT'
      tolv                                                as HandlingUnitVolumeTolerance,
      closed_package                                      as HandlingUnitIsClosed,
      max_capa                                            as MaximumCapacity,
      @Semantics.quantity.unitOfMeasure: 'EWMDIMENSIONUNIT'
      tolc                                                as HandlingUnitCapacityTolerance,
      @Semantics.quantity.unitOfMeasure: 'HANDLINGUNITMAXDIMENSIONUNIT'
      max_length                                          as HandlingUnitMaxLength,
      @Semantics.quantity.unitOfMeasure: 'HANDLINGUNITMAXDIMENSIONUNIT'
      max_width                                           as HandlingUnitMaxWidth,
      @Semantics.quantity.unitOfMeasure: 'HANDLINGUNITMAXDIMENSIONUNIT'
      max_height                                          as HandlingUnitMaxHeight,
      unit_max_lwh                                        as HandlingUnitMaxDimensionUnit,
      letyp                                               as HandlingUnitType,
      flgavq                                              as HandlingUnitHasAvailQty,
      flgmove                                             as HandlingUnitOpenTaskInd,
      procs                                               as ExternalStorageProcessStep,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'EWMHUProcessStepIsCompleted'
      copst                                               as ProcessStepCompletedInd,
      copst                                               as EWMHUProcessStepIsCompleted,
      prces                                               as StorageProcess,
      dstgrp                                              as EWMConsolidationGroup,
      wklid                                               as WorkloadIdentification,
      entitled                                            as EntitledToDisposeParty,
      wstyp                                               as EWMStorageType,
      wssec                                               as EWMStorageSection,
      wsbin                                               as EWMStorageBin,
      wcr                                                 as WarehouseOrderCreationRule,
      mfserror                                            as HandlingUnitDefectCode,
      ukcon                                               as HandlingUnitContentInd,
      pmtyp                                               as PackagingMaterialType,
      packgr                                              as HandlingUnitPackingGroup,
      //saprl,
      phystat                                             as HandlingUnitStatus,
      @Semantics.booleanIndicator: true
      top                                                 as HandlingUnitTopLevelInd,
      @Semantics.booleanIndicator: true
      bottom                                              as HandlingUnitBottomInd,
      stsma                                               as StatusProfile,
      cast( ps_guid as raw16 preserving type )            as PackagingSpecificationUUID,
      ps_level_seq                                        as PackagingSpecificationLevel,
      @Semantics.booleanIndicator: true
      objref                                              as HandlingUnitObjRefInd,
      hzmt                                                as HazardousSubstanceIndicator,
      logpos                                              as HandlingUnitLogicalPosition,
      logpos_ext                                          as DistrEquipmentLogicalPos,
      auto_crea_pick                                      as HandlingUnitAutoCreationLevel,
      hu_guid_ext                                         as EWMHandlingUnitExternalUUID, 
      //!!! ATTENTION !!! 
      //This field requires that silent data migration /SCWM/CL_SDM_HUHDR_GUID_HU_TOP that was introduced in CE 2208 / OP 2022 has finished after upgrade
      //This field will not return any data otherwise. Note that SDM runs after upgrade and business users can already work in the system.
      //If you want to use this field you must check that silent data migration has finished in your code (error message).
      //Special attention must be paid if you use this view within an existing application. 
      //You must ensure that your application is working with the old logic without this view until SDM has finished.
      guid_hu_top                                         as EWMHghstLvlHandlingUnitUUID,
      pickhuind                                           as EWMHndlgUnitPickingCriteria,
      cast( pi_guid as raw16 preserving type )            as EWMPackingInstructionUUID,
      pb_engine                                           as UnifiedPackageBuildingEngine
}
```
