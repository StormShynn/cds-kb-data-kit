---
name: I_SAMPLINGSCHEMEINSTRUCTION
description: Samplingschemeinstruction
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_SAMPLINGSCHEMEINSTRUCTION

**Samplingschemeinstruction**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SamplingScheme` | ✓ | |  | `stprplan` |
| `SmplgSchmItemSequentialNumber` | ✓ | |  | `zaehlpos` |
| `InspectionSeverity` | ✓ | |  | `prschaerfe` |
| `SmplgSchmInstrnSequentialNmbr` | ✓ | |  | `zaehlanw` |
| `SmplgSchemeMaxLotSizeValue` |  | |  | `losumf` |
| `SmplgSchemeHasMaxLotSize` |  | |  | `cast (losumfni as vdm_qm_smpl_sm_has_max_lot_sz preserving type )` |
| `SamplingSchemeSampleSizeValue` |  | |  | `stprumf` |
| `SamplingSchemeAcceptanceValue` |  | |  | `annahmez` |
| `SamplingSchemeRejectionValue` |  | |  | `rueckwez` |
| `InspSampleAcceptanceFactor` |  | |  | `kfaktor` |
| `InspSampleHasAcceptanceFactor` |  | |  | `cast (kfaktorni as vdm_qm_smpl_schm_has_accpt_fct preserving type )` |
| `_SamplingScheme` | | ✓ | | |
| `_SamplingSchemeItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SamplingScheme` | `I_SamplingScheme` | [1..1] |
| `_SamplingSchemeItem` | `I_SamplingSchemeItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Sampling Scheme Instruction'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE,
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SamplingSchemeInstruction
  as select from qdpa
  association [1..1] to I_SamplingScheme     as _SamplingScheme     on  $projection.SamplingScheme = _SamplingScheme.SamplingScheme
  association [1..1] to I_SamplingSchemeItem as _SamplingSchemeItem on  $projection.SamplingScheme                = _SamplingSchemeItem.SamplingScheme
                                                                    and $projection.SmplgSchmItemSequentialNumber = _SamplingSchemeItem.SmplgSchmItemSequentialNumber
{
  key stprplan                                                            as SamplingScheme,
  key zaehlpos                                                            as SmplgSchmItemSequentialNumber,
  key prschaerfe                                                          as InspectionSeverity,
  key zaehlanw                                                            as SmplgSchmInstrnSequentialNmbr,
      losumf                                                              as SmplgSchemeMaxLotSizeValue,
      cast (losumfni as vdm_qm_smpl_sm_has_max_lot_sz preserving type )   as SmplgSchemeHasMaxLotSize,
      stprumf                                                             as SamplingSchemeSampleSizeValue,
      annahmez                                                            as SamplingSchemeAcceptanceValue,
      rueckwez                                                            as SamplingSchemeRejectionValue,
      kfaktor                                                             as InspSampleAcceptanceFactor,
      cast (kfaktorni as vdm_qm_smpl_schm_has_accpt_fct preserving type ) as InspSampleHasAcceptanceFactor,

      /* Associations */
      _SamplingScheme,
      _SamplingSchemeItem
}
```
