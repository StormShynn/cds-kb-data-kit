---
name: I_CNSLDTNSUBITEM
description: Cnsldtnsubitem
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEM

**Cnsldtnsubitem**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubItemCategory` | ✓ | |  | `cast(sityp as fincs_subitemcategory preserving type )` |  |  |
| `SubItem` | ✓ | |  | `cast(sitem as fincs_subitem preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubitemHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSubItemText` | [0..*] |
| `_SubItemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |
| `_SubitemHierNode` | `I_CnsldtnSubitemHierNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNSUBITEM',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
    },
  resultSet.sizeCategory: #XS,
  representativeKey: 'SubItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationSubitem'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnSubItem
  as select from tf115

  association [0..*] to I_CnsldtnSubItemText     as _Text            on  $projection.SubItemCategory = _Text.SubItemCategory
                                                                     and $projection.SubItem         = _Text.SubItem
                                                                     
  association [0..1] to I_CnsldtnSubItemCategory as _SubItemCategory on  $projection.SubItemCategory = _SubItemCategory.SubItemCategory

  association [0..*] to I_CnsldtnSubitemHierNode as _SubitemHierNode on  $projection.SubItemCategory = _SubitemHierNode.SubItemCategory
                                                                     and $projection.SubItem         = _SubitemHierNode.SubItem
{

      @ObjectModel.foreignKey.association: '_SubItemCategory'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemCategoryVH',
          element: 'SubItemCategory'
        }
      }]
  key cast(sityp as fincs_subitemcategory preserving type ) as SubItemCategory,

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SubitemHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSubItemVH',
          element: 'SubItem' },
        additionalBinding: [{ localElement: 'SubItemCategory',
                              element: 'SubItemCategory' }]
      }]
  key cast(sitem as fincs_subitem preserving type )         as SubItem,


      _SubItemCategory,
      _SubitemHierNode,
      _Text
};
```
