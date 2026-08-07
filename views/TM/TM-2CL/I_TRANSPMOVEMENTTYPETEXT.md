---
name: I_TRANSPMOVEMENTTYPETEXT
description: "Transpmovementtypetext"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPMOVEMENTTYPETEXT

**Transpmovementtypetext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `MovementTypeDescription` |  | |  | `cast( description_s as /scmtms/vdm_movement_type_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_MovementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText:   {label:              'TranspOrd Movement Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'MovementType',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITORMVTYPETEXT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspMovementTypeText
  as select from /scmtms/c_mvmtyt
  association        to parent I_TranspMovementType as _MovementType on $projection.MovementType = _MovementType.MovementType
  association [0..1] to I_Language                  as _Language     on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MovementType'
  key movem_type                                                              as MovementType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                   as Language,
      @Semantics.text
      cast( description_s as /scmtms/vdm_movement_type_desc preserving type ) as MovementTypeDescription,

      /* Associations */
      _MovementType,
      _Language
}
```
