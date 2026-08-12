---
name: I_CNSLDTNDOCTYPEHIERNODE_2
description: "Cnsldtndoctypehiernode 2"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDOCTYPEHIERNODE_2

**Cnsldtndoctypehiernode 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDocTypeHierarchy` | ✓ | |  | `cast(_HierarchyNode.hryid as fincs_doctypehierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `cast(_HierarchyNode.hrynode as fincs_hierarchynode preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(_HierarchyNode.hryvalto as fincs_validityenddate preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(_HierarchyNode.hryvalfrom as fincs_validitystartdate preserving type )` |  |  |
| `ParentNode` |  | |  | `cast(_HierarchyNode.parnode as fincs_parentnode preserving type )` |  |  |
| `HierarchyVersion` |  | |  | `cast(_HierarchyNode.hryver as fincs_hierarchyversion preserving type )` |  |  |
| `ConsolidationDocumentType` |  | |  | `cast( left(_HierarchyNode.leafvalue, 2) as fincs_documenttype preserving type )` |  |  |
| `HierarchyNodeSequence` |  | | `_HierarchyNode` | `hryseqnbr` |  |  |
| `HierarchyNodeLevel` |  | | `_HierarchyNode` | `hrylevel` |  |  |
| `NodeType` |  | | `_HierarchyNode` | `nodetype` |  |  |
| `_Text` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_DocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnDocTypeHierNodeT_2` | [0..*] |
| `_Hierarchy` | `I_CnsldtnDocTypeHierarchy_2` | [1..1] |
| `_DocumentType` | `I_CnsldtnDocumentType_2` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCDOCTYPEHNODE2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@Hierarchy.parentChild: {
  recurse:          { parent:    'ParentNode',  child: 'HierarchyNode'   },
  siblingsOrder:    { by:        'HierarchyNodeSequence', direction: #ASC   },
  directory:        '_Hierarchy'
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M},
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnDocumentTypeHierNode'
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Document Type - Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnDocTypeHierNode_2
  as select from hrrp_node as _HierarchyNode

  association [0..*] to I_CnsldtnDocTypeHierNodeT_2 as _Text         on  $projection.ConsolidationDocTypeHierarchy = _Text.ConsolidationDocTypeHierarchy
                                                                     and $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                     and $projection.ConsolidationDocumentType     = ''

  association [1..1] to I_CnsldtnDocTypeHierarchy_2 as _Hierarchy    on  $projection.ConsolidationDocTypeHierarchy = _Hierarchy.ConsolidationDocTypeHierarchy
                                                                     and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

  association [0..1] to I_CnsldtnDocumentType_2     as _DocumentType on  $projection.ConsolidationDocumentType = _DocumentType.ConsolidationDocumentType

{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy',
        sapObjectNodeTypeReference: 'CnsldtnDocumentTypeHierarchy' }
  key cast(_HierarchyNode.hryid as fincs_doctypehierarchy preserving type )           as ConsolidationDocTypeHierarchy,

      @ObjectModel.text.association: '_Text'
  key cast(_HierarchyNode.hrynode as fincs_hierarchynode preserving type )            as HierarchyNode,

      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @Semantics.businessDate.to: true
  key cast(_HierarchyNode.hryvalto as fincs_validityenddate preserving type )         as ValidityEndDate,

      @Semantics.businessDate.from: true
      cast(_HierarchyNode.hryvalfrom as fincs_validitystartdate preserving type )     as ValidityStartDate,

      cast(_HierarchyNode.parnode as fincs_parentnode preserving type )               as ParentNode,

      cast(_HierarchyNode.hryver as fincs_hierarchyversion preserving type )          as HierarchyVersion,

      @ObjectModel:{
        foreignKey.association: '_DocumentType',
        sapObjectNodeTypeReference: 'ConsolidationDocumentType' }
      cast( left(_HierarchyNode.leafvalue, 2) as fincs_documenttype preserving type ) as ConsolidationDocumentType,

      _HierarchyNode.hryseqnbr                                                        as HierarchyNodeSequence,
      _HierarchyNode.hrylevel                                                         as HierarchyNodeLevel,
      _HierarchyNode.nodetype                                                         as NodeType,


      _DocumentType,
      _Text,
      _Hierarchy
}
where
       _HierarchyNode.hrytype  = 'CS19'
  and(
       _HierarchyNode.nodetype = 'R'
    or _HierarchyNode.nodetype = 'N'
    or _HierarchyNode.nodetype = 'L'
  );
```
