---
name: I_CNSLDTNSUBITEMTEXT_2
description: Cnsldtnsubitemtext 2
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
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMTEXT_2

**Cnsldtnsubitemtext 2**

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
| `CnsldtnSubitem` | ✓ | |  | `cast(_Source.sitem as fincs_subitem preserving type )` |  |  |
| `CnsldtnSubitemText` |  | |  | `cast(_Source.txtsh as fincs_subitemtext preserving type )` |  |  |
| `CnsldtnSubitemMediumText` |  | |  | `cast(_Source.txtmi as fincs_subitemmediumtext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SubitemCategory` | | ✓ | | | | |
| `_Subitem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |
| `_Subitem` | `I_CnsldtnSubitem_2` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  representativeKey: 'CnsldtnSubitem',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
   sapObjectNodeType.name: 'ConsolidationSubitemText'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Subitem - Text'

define view entity I_CnsldtnSubitemText_2
  as select from tf116 as _Source

  association [1..1] to I_Language                 as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [1..1] to I_CnsldtnSubitem_2         as _Subitem         on  $projection.CnsldtnSubitemCategory = _Subitem.CnsldtnSubitemCategory
                                                                       and $projection.CnsldtnSubitem         = _Subitem.CnsldtnSubitem
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast(_Source.langu as spras preserving type )                   as Language,

      @ObjectModel.foreignKey.association: '_SubitemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemCategoryVH_2',
          element: 'CnsldtnSubitemCategory' }
      }]
  key cast(_Source.sityp as fincs_subitemcategory preserving type )   as CnsldtnSubitemCategory,


      @ObjectModel.foreignKey.association: '_Subitem'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemVH_2',
          element: 'CnsldtnSubitem' },
        additionalBinding: [{
          localElement: 'CnsldtnSubitem',
          element: 'CnsldtnSubitem',
          usage: #FILTER_AND_RESULT }]
      }]
  key cast(_Source.sitem as fincs_subitem preserving type )           as CnsldtnSubitem,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #LOW
      }
      cast(_Source.txtsh as fincs_subitemtext preserving type )       as CnsldtnSubitemText,

      @Semantics.text
      cast(_Source.txtmi as fincs_subitemmediumtext preserving type ) as CnsldtnSubitemMediumText,


      _SubitemCategory,
      _Language,
      _Subitem
}
```
