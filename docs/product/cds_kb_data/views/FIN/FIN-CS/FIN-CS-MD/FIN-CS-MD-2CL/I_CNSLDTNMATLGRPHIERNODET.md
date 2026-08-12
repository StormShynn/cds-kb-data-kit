---
name: I_CNSLDTNMATLGRPHIERNODET
description: "Cnsldtnmatlgrphiernodet"
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
# I_CNSLDTNMATLGRPHIERNODET

**Cnsldtnmatlgrphiernodet**

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
| `CnsldtnMaterialGroupHierarchy` | ✓ | |  | `cast( _HierarchyNodeText.UniversalHierarchy as fincs_materialgrouphierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnMaterialGroupHier` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #XL
  },
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnMatlGroupHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Material Group Hier Node - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_CnsldtnMatlGrpHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS22', P_MasterDataType: 'MATKL_MM') as _HierarchyNodeText

  association [1..1] to I_CnsldtnMaterialGroupHier as _Hierarchy on $projection.CnsldtnMaterialGroupHierarchy = _Hierarchy.CnsldtnMaterialGroupHierarchy // no validity date condition due to limitation in analytic engine

{

       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  _HierarchyNodeText.Language,

       @ObjectModel.foreignKey.association: '_Hierarchy'
  key  cast( _HierarchyNodeText.UniversalHierarchy as fincs_materialgrouphierarchy preserving type ) as CnsldtnMaterialGroupHierarchy,

  key  _HierarchyNodeText.HierarchyNode,

       @Semantics.businessDate.to: true
  key  _HierarchyNodeText.ValidityEndDate,

       @Semantics.businessDate.from: true
       _HierarchyNodeText.ValidityStartDate,

       _HierarchyNodeText.ParentNode,

       _HierarchyNodeText.HierarchyVersion,

       @Semantics.text: true
       _HierarchyNodeText.HierarchyNodeText,


       /* associations */
       _HierarchyNodeText._Language,
       _Hierarchy
}
```
