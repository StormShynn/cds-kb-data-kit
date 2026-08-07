---
name: I_CNSLDTNGHGENGYCLASSFCTNT
description: Cnsldtnghgengyclassfctnt
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
# I_CNSLDTNGHGENGYCLASSFCTNT

**Cnsldtnghgengyclassfctnt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |
| `GHGEnergyClassification` | ✓ | |  | `cast( _Source.GHGEnergyClassification as fincs_ghgenergyclassification preserving type )` |
| `GHGEnergyClassificationName` |  | |  | `cast( _Source.GHGEnergyClassificationName as fincs_ghgenergyclassifctnname preserving type )` |
| `_Language` | | ✓ | | |
| `_GHGEnergyClassification` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGEnergyClassification` | `I_CnsldtnGHGEngyClassification` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  representativeKey: 'GHGEnergyClassification',
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
@EndUserText.label: 'Cnsldtn GHG Energy Classification - Text'

define view entity I_CnsldtnGHGEngyClassfctnT
  as select distinct from I_GHGEngyClassificationText    as _Source

    inner join            I_CnsldtnGHGEngyClassification as _Main on _Main.GHGEnergyClassification = _Source.GHGEnergyClassification

  association [1..1] to I_Language                     as _Language                on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGEngyClassification as _GHGEnergyClassification on $projection.GHGEnergyClassification = _GHGEnergyClassification.GHGEnergyClassification
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                            as Language,

      @ObjectModel.foreignKey.association: '_GHGEnergyClassification'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGEngyClassfctnVH',
          element: 'GHGEnergyClassification'
        }
      }]
  key cast( _Source.GHGEnergyClassification as fincs_ghgenergyclassification preserving type )     as GHGEnergyClassification,

      @Semantics.text
      cast( _Source.GHGEnergyClassificationName as fincs_ghgenergyclassifctnname preserving type ) as GHGEnergyClassificationName,


      /* associations */
      _Language,
      _GHGEnergyClassification
}
```
