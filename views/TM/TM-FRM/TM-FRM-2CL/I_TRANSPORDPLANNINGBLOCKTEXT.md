---
name: I_TRANSPORDPLANNINGBLOCKTEXT
description: "Transpordplanningblocktext"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - text-view
  - text
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDPLANNINGBLOCKTEXT

**Transpordplanningblocktext**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdPlanningBlock` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_planning preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdPlanningBlockDesc` |  | |  | `cast(ddtext as /scmtms/vdm_block_planng_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdPlanningBlock` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Transp Ord Planning Block - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdPlanningBlock',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IPLANNINGBLOCKT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdPlanningBlockText
  as select from dd07t
  association        to parent I_TranspOrdPlanningBlock as _TranspOrdPlanningBlock on $projection.TranspOrdPlanningBlock = _TranspOrdPlanningBlock.TranspOrdPlanningBlock
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdPlanningBlock'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_planning preserving type) as TranspOrdPlanningBlock,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                      as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_block_planng_desc preserving type )                  as TranspOrdPlanningBlockDesc,

      /* Associations */
      _TranspOrdPlanningBlock,
      _Language
}
where
      domname  = '/SCMTMS/BLOCK_PLANNING'
  and as4local = 'A';
```
