---
name: I_CNSLDTNGHGENGYSOURCINGTYPET
description: "Cnsldtnghgengysourcingtypet"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGENGYSOURCINGTYPET

**Cnsldtnghgengysourcingtypet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `GHGEnergySourcingType` | ✓ | |  | `cast( _Source.GHGEnergySourcingType as fincs_ghgenergysourcingtype preserving type )` |  |  |
| `GHGEnergySourcingTypeName` |  | |  | `cast( _Source.GHGEnergySourcingTypeName as fincs_ghgengysourcingtypename preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_GHGEnergySourcingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGEnergySourcingType` | `I_CnsldtnGHGEnergySourcingType` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSGHGENGYSOURCINGTYPET'
  
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGEnergySourcingType',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Energy Sourcing Type - Text'

define view entity I_CnsldtnGHGEngySourcingTypeT
  as select distinct from I_GHGEnergySourcingTypeText    as _Source

  inner join            I_CnsldtnGHGEnergySourcingType as _Main on _Main.GHGEnergySourcingType = _Source.GHGEnergySourcingType

  association [1..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGEnergySourcingType as _GHGEnergySourcingType on $projection.GHGEnergySourcingType = _GHGEnergySourcingType.GHGEnergySourcingType
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                          as Language,

      @ObjectModel.foreignKey.association: '_GHGEnergySourcingType'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGEngySourcingTypeVH',
          element: 'GHGEnergySourcingType'
        }
      }]
  key cast( _Source.GHGEnergySourcingType as fincs_ghgenergysourcingtype preserving type )       as GHGEnergySourcingType,

      @Semantics.text
      cast( _Source.GHGEnergySourcingTypeName as fincs_ghgengysourcingtypename preserving type ) as GHGEnergySourcingTypeName,


      /* associations */
      _Language,
      _GHGEnergySourcingType
}
```
