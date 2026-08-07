---
name: I_CNSLDTNGHGCATEGORYT
description: Cnsldtnghgcategoryt
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
# I_CNSLDTNGHGCATEGORYT

**Cnsldtnghgcategoryt**

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
| `GHGCategory` | ✓ | |  | `cast( _Source.GHGCategory as fincs_ghgcategory preserving type )` |
| `GHGCategoryName` |  | |  | `cast( _Source.GHGCategoryName as fincs_ghgcategoryname preserving type )` |
| `_Language` | | ✓ | | |
| `_GHGCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_GHGCategory` | `I_CnsldtnGHGCategory` | [1..1] |

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
  representativeKey: 'GHGCategory',
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
@EndUserText.label: 'Consolidation GHG Category - Text'

define view entity I_CnsldtnGHGCategoryT
  as select distinct from I_GHGCategoryText    as _Source

    inner join            I_CnsldtnGHGCategory as _Main on _Main.GHGCategory = _Source.GHGCategory

  association [1..1] to I_Language           as _Language    on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGHGCategory as _GHGCategory on $projection.GHGCategory = _GHGCategory.GHGCategory
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                        as Language,

      @ObjectModel.foreignKey.association: '_GHGCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGHGCategoryVH',
          element: 'GHGCategory'
        }
      }]
  key cast( _Source.GHGCategory as fincs_ghgcategory preserving type )         as GHGCategory,

      @Semantics.text
      cast( _Source.GHGCategoryName as fincs_ghgcategoryname preserving type ) as GHGCategoryName,


      /* associations */
      _Language,
      _GHGCategory
}
```
