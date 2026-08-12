---
name: I_CNSLDTNPOSTINGLEVELHIERNODET
description: "Cnsldtnpostinglevelhiernodet"
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
# I_CNSLDTNPOSTINGLEVELHIERNODET

**Cnsldtnpostinglevelhiernodet**

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
| `ConsolidationPostgLevelHier` | ✓ | |  | `cast( _HierarchyNodeText.UniversalHierarchy as fincs_postinglevelhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnPostingLevelHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICSPOSTINGLEVELHIERNODET'

}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions : true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnPostgLevelHierNodeText'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Posting Level Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnPostingLevelHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType : 'CS21', P_MasterDataType : 'PLEVL' ) as _HierarchyNodeText

  association [1..1] to I_CnsldtnPostingLevelHierarchy as _Hierarchy on $projection.ConsolidationPostgLevelHier = _Hierarchy.ConsolidationPostgLevelHier

{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  _HierarchyNodeText.Language,

       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  cast( _HierarchyNodeText.UniversalHierarchy as fincs_postinglevelhierarchy preserving type  ) as ConsolidationPostgLevelHier,

  key  _HierarchyNodeText.HierarchyNode,

       _HierarchyNodeText.ParentNode,

       _HierarchyNodeText.HierarchyVersion,

       @Semantics.text: true
       _HierarchyNodeText.HierarchyNodeText,


       _Language,
       _Hierarchy
}
```
