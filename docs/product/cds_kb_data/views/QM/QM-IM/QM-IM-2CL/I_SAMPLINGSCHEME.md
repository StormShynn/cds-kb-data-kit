---
name: I_SAMPLINGSCHEME
description: "Samplingscheme"
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
# I_SAMPLINGSCHEME

**Samplingscheme**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingScheme` | ✓ | |  | `stprplan` |  |  |
| `SmplgSchmIsForAttributiveInsp` |  | |  | `cast ( qdpk.kzattr as vdm_qm_smpl_sm_is_for_attr_ins preserving type )` |  |  |
| `SmplgSchmIsForVariableInsp` |  | |  | `cast ( qdpk.kzvars as vdm_qm_smpl_sm_is_for_vrbl_ins preserving type )` |  |  |
| `AcceptableQualityLevelIsUsed` |  | |  | `cast ( qdpk.kzaql as vdm_qm_aql_is_used preserving type )` |  |  |
| `SamplingSchemeIsBlocked` |  | |  | `cast ( qdpk.kznvwpk as vdm_qm_sampl_scheme_is_blocked preserving type )` |  |  |
| `CreatedByUser` |  | |  | `cast ( qdpk.ersteller as abp_creation_user preserving type )` |  |  |
| `CreationDate` |  | |  | `cast ( qdpk.erstelldat as abp_creation_date preserving type )` |  |  |
| `CreationTime` |  | |  | `cast ( qdpk.zeiterstl as abp_creation_time preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `cast ( qdpk.aenderer as abp_lastchange_user preserving type )` |  |  |
| `LastChangeDate` |  | |  | `cast ( qdpk.aenderdat as abp_lastchange_date preserving type )` |  |  |
| `LastChangeTime` |  | |  | `cast ( qdpk.zeitaend as abp_lastchange_time preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SamplingSchemeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sampling Scheme' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.technicalName: 'ISMPLGSCHEME'
@ObjectModel: {
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE,
    representativeKey: 'SamplingScheme',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER }
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view entity I_SamplingScheme
  as select from qdpk

  association [0..*] to I_SamplingSchemeText as _Text on $projection.SamplingScheme = _Text.SamplingScheme

{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
  key qdpk.stprplan                                                           as SamplingScheme,
      cast ( qdpk.kzattr as vdm_qm_smpl_sm_is_for_attr_ins preserving type  ) as SmplgSchmIsForAttributiveInsp,
      cast ( qdpk.kzvars as vdm_qm_smpl_sm_is_for_vrbl_ins preserving type )  as SmplgSchmIsForVariableInsp,
      cast ( qdpk.kzaql as vdm_qm_aql_is_used preserving type )               as AcceptableQualityLevelIsUsed,
      cast ( qdpk.kznvwpk as vdm_qm_sampl_scheme_is_blocked preserving type ) as SamplingSchemeIsBlocked,
      cast ( qdpk.ersteller as abp_creation_user preserving type )            as CreatedByUser,
      cast ( qdpk.erstelldat as abp_creation_date preserving type )           as CreationDate,
      cast ( qdpk.zeiterstl as abp_creation_time preserving type )            as CreationTime,
      cast ( qdpk.aenderer as abp_lastchange_user preserving type )           as LastChangedByUser,
      cast ( qdpk.aenderdat as  abp_lastchange_date preserving type )         as LastChangeDate,
      cast ( qdpk.zeitaend as abp_lastchange_time preserving type )           as LastChangeTime,

      /* Associations */
      _Text
}
```
