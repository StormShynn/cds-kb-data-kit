---
name: I_SEMANTICTAGLEAFNODE
description: Semantictagleafnode
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_SEMANTICTAGLEAFNODE

**Semantictagleafnode**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GLAccountHierarchy` | ✓ | |  | `hryid_42` |
| `HierarchyNode` | ✓ | |  | `hrynode` |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |
| `SemanticTag` | ✓ | |  | `fins_sem_tag` |
| `ValidityStartDate` |  | |  | `hryvalfrom` |
| `ChartOfAccounts` |  | |  | `ktopl` |
| `GLAccount` |  | |  | `saknr` |
| `FunctionalArea` |  | |  | `fkber` |
| `_GLAccountHierarchyNode` | | ✓ | | |
| `_Hierarchy` | | ✓ | | |
| `_SemanticTag` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountHierarchyNode` | `I_GLAccountHierarchyNode` | [0..1] |
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..1] |
| `_SemanticTag` | `I_SemanticTag` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISVDHRRPSEMTA'
@Analytics.internalName: #LOCAL
@Analytics: { //dataCategory: #DIMENSION,
              dataExtraction: {
              enabled: true }
      }
@EndUserText.label: 'Hierarchy Leaf Node with Semantic Tag'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'SemanticTagLeafNode'

define view I_SemanticTagLeafNode
  as select from hrrp_semtag_n

  association [0..1] to I_GLAccountHierarchyNode as _GLAccountHierarchyNode on  $projection.GLAccountHierarchy = _GLAccountHierarchyNode.GLAccountHierarchy
                                                                            and $projection.HierarchyNode      = _GLAccountHierarchyNode.HierarchyNode
                                                                            and $projection.ValidityEndDate    = _GLAccountHierarchyNode.ValidityEndDate

  association [0..1] to I_GLAccountHierarchy     as _Hierarchy              on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy
                                                                            and $projection.ValidityEndDate    = _Hierarchy.ValidityEndDate

  association [0..1] to I_SemanticTag            as _SemanticTag            on  $projection.SemanticTag = _SemanticTag.SemanticTag

{

       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  hrrp_semtag_n.hryid_42 as GLAccountHierarchy,
       @ObjectModel.foreignKey.association: '_GLAccountHierarchyNode'
  key  hrynode                as HierarchyNode,
       @Semantics.businessDate.to: true
  key  hryvalto               as ValidityEndDate,
       @ObjectModel.foreignKey.association: '_SemanticTag'
  key  fins_sem_tag           as SemanticTag,

       @Semantics.businessDate.from: true
       hryvalfrom             as ValidityStartDate,

       ktopl                  as ChartOfAccounts,
       saknr                  as GLAccount,
       fkber                  as FunctionalArea,

       _GLAccountHierarchyNode,
       _SemanticTag,
       _Hierarchy

}
where
  hrytyp = 'FSVN'
```
