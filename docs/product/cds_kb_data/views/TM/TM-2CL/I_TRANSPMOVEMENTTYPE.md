---
name: I_TRANSPMOVEMENTTYPE
description: "Transpmovementtype"
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
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPMOVEMENTTYPE

**Transpmovementtype**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovementType` | ✓ | |  | `movem_type` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Order Movement Type'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITORMVTYPE'
@ObjectModel:   {representativeKey:  'MovementType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
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
@ObjectModel.sapObjectNodeType.name: 'TransportationMovementType'

define root view entity I_TranspMovementType
  as select from /scmtms/c_mvmty
  composition [0..*] of I_TranspMovementTypeText as _Text

{
      @ObjectModel.text.association: '_Text'
  key movem_type as MovementType,

      /* Associations */
      _Text
}
```
