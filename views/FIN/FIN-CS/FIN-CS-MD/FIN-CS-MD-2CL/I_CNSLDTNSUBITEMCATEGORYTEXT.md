---
name: I_CNSLDTNSUBITEMCATEGORYTEXT
description: Cnsldtnsubitemcategorytext
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
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMCATEGORYTEXT

**Cnsldtnsubitemcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SubItemCategory` | `cast(sityp as fincs_subitemcategory preserving type )` |
| key `Language` | `cast(langu as spras preserving type )` |
| `SubItemCategoryText` | `cast(txt as fincs_description_text_30 preserving type )` |
| `_Language` | *Association* |
| `_SubItemCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SubItemCategory` | `I_CnsldtnSubItemCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUBITEMCATT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
    },
  dataCategory: #TEXT,
  representativeKey: 'SubItemCategory',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'CnsldtnSubitemCategoryText'                        
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem Category - Text'

define view I_CnsldtnSubItemCategoryText
  as select from tf111

  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSubItemCategory as _SubItemCategory on $projection.SubItemCategory = _SubItemCategory.SubItemCategory
{

      @ObjectModel.foreignKey.association: '_SubItemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemCategoryVH',
          element: 'SubItemCategory'
        }
      }]
  key cast(sityp as fincs_subitemcategory preserving type )   as SubItemCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(langu as spras preserving type )                   as Language,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(txt as fincs_description_text_30 preserving type ) as SubItemCategoryText,


      _Language,
      _SubItemCategory
};
```
