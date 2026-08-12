---
name: I_CNSLDTNSUBITEMCATEGORYTEXT_2
description: "Cnsldtnsubitemcategorytext 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMCATEGORYTEXT_2

**Cnsldtnsubitemcategorytext 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(_Source.langu as spras preserving type )` |  |  |
| `CnsldtnSubitemCategory` | ✓ | |  | `cast(_Source.sityp as fincs_subitemcategory preserving type )` |  |  |
| `CnsldtnSubitemCategoryText` |  | |  | `cast(_Source.txt as fincs_subitemcategorytext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SubitemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSUBITEMCATEGORYT2'
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnSubitemCategory',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSubitemCategoryText'                        
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Subitem Category - Text'

define view entity I_CnsldtnSubitemCategoryText_2
  as select from tf111 as _Source

  association [1..1] to I_Language                 as _Language        on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_Source.langu as spras preserving type )                   as Language,

      @ObjectModel.foreignKey.association: '_SubitemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemCategoryVH_2',
          element: 'CnsldtnSubitemCategory'
        }
      }]
  key cast(_Source.sityp as fincs_subitemcategory preserving type )   as CnsldtnSubitemCategory,


      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #LOW
      }
      cast(_Source.txt as fincs_subitemcategorytext preserving type ) as CnsldtnSubitemCategoryText,


      _Language,
      _SubitemCategory
}
```
