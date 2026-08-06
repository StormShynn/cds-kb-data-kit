---
name: I_TRANSPORDPLANNINGBLOCK
description: Transpordplanningblock
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
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDPLANNINGBLOCK

**Transpordplanningblock**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdPlanningBlock` | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_planning preserving type)` |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Order Planning Block'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'IPLANNINGBLOCK'
@ObjectModel:   {representativeKey:  'TranspOrdPlanningBlock',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Search.searchable:                  false
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspOrderPlanningBlock'
define root view entity I_TranspOrdPlanningBlock
  as select from dd07l
  //association [0..*] to I_TranspOrdPlanningBlockText as _Text on $projection.TranspOrdPlanningBlock = _Text.TranspOrdPlanningBlock
  composition [0..*] of I_TranspOrdPlanningBlockText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_planning preserving type) as TranspOrdPlanningBlock,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/BLOCK_PLANNING'
  and as4local = 'A';
```
