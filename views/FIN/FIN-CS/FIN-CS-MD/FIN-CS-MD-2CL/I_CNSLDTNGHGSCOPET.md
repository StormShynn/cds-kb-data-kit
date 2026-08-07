---
name: I_CNSLDTNGHGSCOPET
description: "Cnsldtnghgscopet"
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
# I_CNSLDTNGHGSCOPET

**Cnsldtnghgscopet**

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
| `GHGScope` | ✓ | |  | `cast( _Source.GHGScope as fincs_ghgscope preserving type )` |  |  |
| `GHGScopeName` |  | |  | `cast( _Source.GHGScopeName as fincs_ghgscopename preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_GHGScope` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGScope` | `I_CnsldtnGHGScope` | [1..1] |

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
  representativeKey: 'GHGScope',
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
@EndUserText.label: 'Consolidation GHG Scope - Text'

define view entity I_CnsldtnGHGScopeT
  as select distinct from I_GHGScopeText    as _Source

    inner join            I_CnsldtnGHGScope as _Main on _Main.GHGScope = _Source.GHGScope

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGScope as _GHGScope on $projection.GHGScope = _GHGScope.GHGScope
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                  as Language,

      @ObjectModel.foreignKey.association: '_GHGScope'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGScopeVH',
          element: 'GHGScope'
        }
      }]
  key cast( _Source.GHGScope as fincs_ghgscope preserving type )         as GHGScope,

      @Semantics.text
      cast( _Source.GHGScopeName as fincs_ghgscopename preserving type ) as GHGScopeName,


      /* associations */
      _Language,
      _GHGScope
}
```
