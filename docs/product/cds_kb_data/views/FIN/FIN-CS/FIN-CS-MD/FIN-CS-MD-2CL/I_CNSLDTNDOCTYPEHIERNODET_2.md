---
name: I_CNSLDTNDOCTYPEHIERNODET_2
description: "Cnsldtndoctypehiernodet 2"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDOCTYPEHIERNODET_2

**Cnsldtndoctypehiernodet 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyNodeText` | `spras` |  |  |
| `ConsolidationDocTypeHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.hryid as fincs_doctypehierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `cast(_HierarchyNode.hrynode as fincs_hierarchynode preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(_HierarchyNodeText.hryvalto as fincs_validityenddate preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(_HierarchyNodeText.hryvalfrom as fincs_validitystartdate preserving type )` |  |  |
| `ParentNode` |  | |  | `cast(_HierarchyNodeText.parnode as fincs_parentnode preserving type )` |  |  |
| `HierarchyVersion` |  | |  | `cast(_HierarchyNodeText.hryver as fincs_hierarchyversion preserving type )` |  |  |
| `HierarchyNodeText` |  | |  | `cast(_HierarchyNodeText.nodetxt as fincs_hierarchynodetext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Hierarchy` | `I_CnsldtnDocTypeHierarchy_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCDOCTYPEHIERT2',
  compiler.compareFilter: true ,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
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
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnDocTypeHierNodeText'                        
  }
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Document Type Hier Node - Text'

define view I_CnsldtnDocTypeHierNodeT_2
  as select from hrrp_nodet as _HierarchyNodeText

    inner join   hrrp_node  as _HierarchyNode on  _HierarchyNode.hryid      = _HierarchyNodeText.hryid
                                              and _HierarchyNode.hryver     = _HierarchyNodeText.hryver
                                              and _HierarchyNode.nodecls    = _HierarchyNodeText.nodecls
                                              and _HierarchyNode.hrynode    = _HierarchyNodeText.hrynode
                                              and _HierarchyNode.parnode    = _HierarchyNodeText.parnode
                                              and _HierarchyNode.hryvalto   = _HierarchyNodeText.hryvalto
                                              and (
                                                 _HierarchyNode.nodetype    = 'R'
                                                 or _HierarchyNode.nodetype = 'N'
                                               )

  association [1..1] to I_Language                  as _Language  on $projection.Language = _Language.Language

  association [0..*] to I_CnsldtnDocTypeHierarchy_2 as _Hierarchy on $projection.ConsolidationDocTypeHierarchy = _Hierarchy.ConsolidationDocTypeHierarchy
  //                                                              and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate  " HL avoid error in ODPTransientProvider Preview. Similar to Acctg
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _HierarchyNodeText.spras                                                        as Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.hryid as fincs_doctypehierarchy preserving type )       as ConsolidationDocTypeHierarchy,

  key cast(_HierarchyNode.hrynode as fincs_hierarchynode preserving type )            as HierarchyNode,

      @Semantics.businessDate.to: true
  key cast(_HierarchyNodeText.hryvalto as fincs_validityenddate preserving type )     as ValidityEndDate,

      @Semantics.businessDate.from: true
      cast(_HierarchyNodeText.hryvalfrom as fincs_validitystartdate preserving type ) as ValidityStartDate,

      cast(_HierarchyNodeText.parnode as fincs_parentnode preserving type )           as ParentNode,

      cast(_HierarchyNodeText.hryver as fincs_hierarchyversion preserving type )      as HierarchyVersion,

      @Semantics.text: true
      cast(_HierarchyNodeText.nodetxt as fincs_hierarchynodetext preserving type )    as HierarchyNodeText,


      /* Associations */
      _Language,
      _Hierarchy
}
where
  _HierarchyNodeText.hrytyp = 'CS19'
```
