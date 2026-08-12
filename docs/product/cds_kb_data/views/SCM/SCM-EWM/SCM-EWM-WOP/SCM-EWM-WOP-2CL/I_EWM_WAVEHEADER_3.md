---
name: I_EWM_WAVEHEADER_3
description: "Ewm Waveheader 3"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - header-level
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVEHEADER_3

**Ewm Waveheader 3**

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
| `EWMWave` | ✓ | |  | `cast( wave as ewm_de_wave )` |  |  |
| `EWMReferenceDocumentCategory` |  | |  | `rdoccat` |  |  |
| `EWMWaveTemplate` |  | |  | `cast( tmplt as ewm_de_wavetemplate )` |  |  |
| `EWMWaveName` |  | |  | `wave_text` |  |  |
| `EWMWaveType` |  | |  | `wave_type` |  |  |
| `EWMWaveCategory` |  | |  | `wave_cat` |  |  |
| `EWMWaveReleaseMethod` |  | |  | `rls_mthd` |  |  |
| `EWMWaveCutoffUTCDateTime` |  | |  | `cast( cutoff_dt as ewm_de_wave_cutoff_dt )` |  |  |
| `PlndWaveReleaseUTCDateTime` |  | |  | `cast( rls_dt as ewm_de_wave_release_dt )` |  |  |
| `PlndPickCompltnUTCDateTime` |  | |  | `cast( pick_comp_dt as ewm_de_wave_pick_comp_dt )` |  |  |
| `PlndPackCompletionUTCDateTime` |  | |  | `cast( pack_comp_dt as ewm_de_wave_pack_comp_dt )` |  |  |
| `PlndStagingCompltnUTCDateTime` |  | |  | `cast( stag_comp_dt as ewm_de_wave_stag_comp_dt )` |  |  |
| `PlndLoadCompletionUTCDateTime` |  | |  | `cast( load_comp_dt as ewm_de_wave_load_comp_dt )` |  |  |
| `EWMWaveCapacityProfile` |  | |  | `wave_capa` |  |  |
| `BehaviourDuringPickDenial` |  | |  | `bind_process` |  |  |
| `EWMWaveCutoffWhseTmznDateTime` |  | |  | `cast( cutoff_dt_wh as ewm_de_wave_cutoff_dt_wh )` |  |  |
| `EWMWavePlndRelWhseTmznDateTime` |  | |  | `cast( rls_dt_wh as ewm_de_wave_rls_dt_wh )` |  |  |
| `PlndPickCmpltWhseTmznDateTime` |  | |  | `cast( pick_comp_dt_wh as ewm_de_wave_pick_comp_dt_wh )` |  |  |
| `PlndPackCmpltWhseTmznDateTime` |  | |  | `cast( pack_comp_dt_wh as ewm_de_wave_pack_comp_dt_wh )` |  |  |
| `PlndStggCmpltWhseTmznDateTime` |  | |  | `cast( stag_comp_dt_wh as ewm_de_wave_stag_comp_dt_wh )` |  |  |
| `EWMWaveCompltnWhseTmznDateTime` |  | |  | `cast( load_comp_dt_wh as ewm_de_wave_load_comp_dt_wh )` |  |  |
| `EWMWaveActlReldWhseTmznDteTime` |  | |  | `cast( released_at_wh as ewm_de_wave_released_at_wh )` |  |  |
| `EWMWaveIsReleasedManually` |  | |  | `flg_mnrls` |  |  |
| `EWMWaveStatus` |  | |  | `status` |  |  |
| `EWMWaveActlReleasedUTCDateTime` |  | |  | `cast( released_at as ewm_de_wave_released_at_dt )` |  |  |
| `EWMWaveTemplateOption` |  | |  | `cast(optn as ewm_de_wave_templateoption )` |  |  |
| `EWMWaveFactoryCalendar` |  | |  | `wave_calendar` |  |  |
| `EWMWaveWhseTaskCreationMode` |  | |  | `lmode` |  |  |
| `EWMStorageType` |  | |  | `stareagr` |  |  |
| `EWMStorageSection` |  | |  | `starea` |  |  |
| `EWMWaveReleasedByUser` |  | |  | `released_by` |  |  |
| `MaximumNumberOfWaveItems` |  | |  | `cast(mxitm as ewm_de_wave_maxitem )` |  |  |
| `EWMWaveSimulationStatus` |  | |  | `sim_status_hdr` |  |  |
| `_WaveTmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Whsbupa` | `I_EWM_AssgWhseBusPartner_2` | [0..1] |
| `_WaveTmpl` | `I_EWM_WaveTemplate_3` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Warehouse Wave Header'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #TRANSACTIONAL,
                         sizeCategory: #M}
define view entity I_EWM_WaveHeader_3
  as select from /scwm/wavehdr as wavehdr
  association [0..1] to I_EWM_AssgWhseBusPartner_2 as _Whsbupa  on  //$projection.sapclient = _Whsbupa.client
                                                                    //and
                                                                    $projection.EWMWarehouse = _Whsbupa.EWMWarehouse
  association [0..1] to I_EWM_WaveTemplate_3       as _WaveTmpl on  $projection.EWMWarehouse    = _WaveTmpl.EWMWarehouse
                                                                and $projection.EWMWaveTemplate = _WaveTmpl.EWMWaveTemplate
{
      //  @ObjectModel.foreignKey.association: '_WaveTmpl'
  key lgnum                                                  as EWMWarehouse,
  key cast( wave as ewm_de_wave )                            as EWMWave,
      rdoccat                                                as EWMReferenceDocumentCategory,
      cast( tmplt as ewm_de_wavetemplate )                   as EWMWaveTemplate,
      wave_text                                              as EWMWaveName,
      wave_type                                              as EWMWaveType,
      wave_cat                                               as EWMWaveCategory,
      rls_mthd                                               as EWMWaveReleaseMethod,
      cast( cutoff_dt as ewm_de_wave_cutoff_dt )             as EWMWaveCutoffUTCDateTime,
      cast( rls_dt as ewm_de_wave_release_dt )               as PlndWaveReleaseUTCDateTime,
      cast( pick_comp_dt as ewm_de_wave_pick_comp_dt )       as PlndPickCompltnUTCDateTime,    //created
      cast( pack_comp_dt as ewm_de_wave_pack_comp_dt )       as PlndPackCompletionUTCDateTime, //created
      cast( stag_comp_dt as ewm_de_wave_stag_comp_dt )       as PlndStagingCompltnUTCDateTime, //created
      cast( load_comp_dt as ewm_de_wave_load_comp_dt )       as PlndLoadCompletionUTCDateTime, //created
      //      satind                        as SATIND,
      //  wave_assign_rel                                      as WaveAssgmtIsPossibleAftWaveRel,
      //WaveAssgnPossiAfterWaveRelease,
      wave_capa                                              as EWMWaveCapacityProfile,
      bind_process                                           as BehaviourDuringPickDenial,
      //PickDenialBehaviour,
      cast( cutoff_dt_wh    as ewm_de_wave_cutoff_dt_wh )    as EWMWaveCutoffWhseTmznDateTime,
      cast( rls_dt_wh       as ewm_de_wave_rls_dt_wh )       as EWMWavePlndRelWhseTmznDateTime,
      cast( pick_comp_dt_wh as ewm_de_wave_pick_comp_dt_wh ) as PlndPickCmpltWhseTmznDateTime,
      cast( pack_comp_dt_wh as ewm_de_wave_pack_comp_dt_wh ) as PlndPackCmpltWhseTmznDateTime,
      cast( stag_comp_dt_wh as ewm_de_wave_stag_comp_dt_wh ) as PlndStggCmpltWhseTmznDateTime,
      cast( load_comp_dt_wh as ewm_de_wave_load_comp_dt_wh ) as EWMWaveCompltnWhseTmznDateTime,
      cast( released_at_wh  as ewm_de_wave_released_at_wh )  as EWMWaveActlReldWhseTmznDteTime,

      flg_mnrls                                              as EWMWaveIsReleasedManually,
      //WaveReleasedManually,
      status                                                 as EWMWaveStatus,
      cast( released_at as ewm_de_wave_released_at_dt )      as EWMWaveActlReleasedUTCDateTime, // created
      cast(optn as ewm_de_wave_templateoption )              as EWMWaveTemplateOption,
      wave_calendar                                          as EWMWaveFactoryCalendar,
      // l2skr                                                as WhseTskIsRlvtForTwoStpPicking,
      lmode                                                  as EWMWaveWhseTaskCreationMode,
      stareagr                                               as EWMStorageType,
      starea                                                 as EWMStorageSection,
      //  satind                                               as SpclActyCatInWhse,
      released_by                                            as EWMWaveReleasedByUser,
      //  l2skm                                                as TwoStepPickingDependency,
      //mxitm                                                as MaximumNumberOfWaveItems,
      cast(mxitm as ewm_de_wave_maxitem )                    as MaximumNumberOfWaveItems,
      //      sim_status                                           as WaveSimulationStatus,
      sim_status_hdr                                         as EWMWaveSimulationStatus,

      _WaveTmpl
}
```
