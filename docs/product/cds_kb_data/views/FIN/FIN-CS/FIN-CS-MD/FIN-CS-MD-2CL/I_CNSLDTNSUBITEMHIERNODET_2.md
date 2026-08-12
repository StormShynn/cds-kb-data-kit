---
name: I_CNSLDTNSUBITEMHIERNODET_2
description: "Cnsldtnsubitemhiernodet 2"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMHIERNODET_2

**Cnsldtnsubitemhiernodet 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `Language` |  |  |
| `CnsldtnSubitemCategory` | ✓ | | `_HierarchyNodeText` | `CnsldtnSubitemCategory` |  |  |
| `ConsolidationSubitemHierarchy` | ✓ | |  | `cast( _HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_SubitemCategory` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |
| `_Hierarchy` | `I_CnsldtnSubitemHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
 }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnSubitemHierNodeText'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_CnsldtnSubitemHierNodeT_2
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType : 'CS18', P_MasterDataType : 'SITEM' ) as _HierarchyNodeText

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [1..1] to I_CnsldtnSubitemHierarchy  as _Hierarchy       on  $projection.CnsldtnSubitemCategory        = _Hierarchy.CnsldtnSubitemCategory
                                                                       and $projection.ConsolidationSubitemHierarchy = _Hierarchy.ConsolidationSubitemHierarchy

{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  _HierarchyNodeText.Language,

       @ObjectModel.foreignKey.association: '_SubitemCategory'
       @Consumption.valueHelpDefinition: [{
         entity: {
           name: 'I_CnsldtnSubitemCategoryVH_2',
           element: 'CnsldtnSubitemCategory'
         }
       }]
  key  _HierarchyNodeText.CnsldtnSubitemCategory,


       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  cast( _HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type ) as ConsolidationSubitemHierarchy,

  key  _HierarchyNodeText.HierarchyNode,

       @Semantics.businessDate.to: true
  key  _HierarchyNodeText.ValidityEndDate,

       @Semantics.businessDate.from: true
       _HierarchyNodeText.ValidityStartDate,

       _HierarchyNodeText.ParentNode,

       _HierarchyNodeText.HierarchyVersion,

       @Semantics.text: true
       _HierarchyNodeText.HierarchyNodeText,


       _Language,
       _SubitemCategory,
       _Hierarchy
};
```
