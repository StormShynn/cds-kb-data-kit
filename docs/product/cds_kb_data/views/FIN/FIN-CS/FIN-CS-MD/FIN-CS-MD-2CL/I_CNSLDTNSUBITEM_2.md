---
name: I_CNSLDTNSUBITEM_2
description: "Cnsldtnsubitem 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEM_2

**Cnsldtnsubitem 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSubitemCategory` | ✓ | |  | `cast(_Source.sityp as fincs_subitemcategory preserving type )` |  |  |
| `CnsldtnSubitem` | ✓ | |  | `cast(_Source.sitem as fincs_subitem preserving type )` |  |  |
| `_SubitemCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |
| `_Text` | `I_CnsldtnSubitemText_2` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnSubitemHierNode_2` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnSubitem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationSubitem'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Subitem'

define view entity I_CnsldtnSubitem_2
  as select from tf115 as _Source

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [0..*] to I_CnsldtnSubitemText_2     as _Text            on  $projection.CnsldtnSubitemCategory = _Text.CnsldtnSubitemCategory
                                                                       and $projection.CnsldtnSubitem         = _Text.CnsldtnSubitem

  association [0..*] to I_CnsldtnSubitemHierNode_2 as _HierarchyNode   on  $projection.CnsldtnSubitemCategory = _HierarchyNode.CnsldtnSubitemCategory
                                                                       and $projection.CnsldtnSubitem         = _HierarchyNode.CnsldtnSubitem
{

      @ObjectModel.foreignKey.association: '_SubitemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemCategoryVH_2',
          element: 'CnsldtnSubitemCategory' }
      }]
  key cast(_Source.sityp as fincs_subitemcategory preserving type ) as CnsldtnSubitemCategory,

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubitemVH_2',
          element: 'CnsldtnSubitem' },
        additionalBinding: [{
          localElement: 'CnsldtnSubitemCategory',
          element: 'CnsldtnSubitemCategory',
          usage: #FILTER_AND_RESULT }]
      }]
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key cast(_Source.sitem as fincs_subitem preserving type )         as CnsldtnSubitem,


      _SubitemCategory,
      _HierarchyNode,
      _Text

}
```
