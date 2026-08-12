---
name: I_TRANSPORDSTAGETYPETEXT_2
description: "Transpordstagetypetext 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSTAGETYPETEXT_2

**Transpordstagetypetext 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStageType` | ✓ | |  | `stage_type` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `TranspOrdStageTypeDesc` |  | |  | `cast ( description_s as /scmtms/vdm_stage_type_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdStageType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transportation Order Stage Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdStageType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TranspOrdStageTypeText_2
  as select from /scmtms/c_stgtyt
  association        to parent I_TranspOrdStageType_2 as _TranspOrdStageType on $projection.TranspOrdStageType = _TranspOrdStageType.TranspOrdStageType
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStageType'
  key stage_type                                                            as TranspOrdStageType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                 as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( description_s as /scmtms/vdm_stage_type_desc preserving type ) as TranspOrdStageTypeDesc,

      /* Associations */
      _TranspOrdStageType,
      _Language
}
```
