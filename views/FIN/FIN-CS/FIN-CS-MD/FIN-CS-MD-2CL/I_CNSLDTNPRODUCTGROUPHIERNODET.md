---
name: I_CNSLDTNPRODUCTGROUPHIERNODET
description: Cnsldtnproductgrouphiernodet
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
  - product
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTGROUPHIERNODET

**Cnsldtnproductgrouphiernodet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_HierarchyNodeText.Language` |
| key `CnsldtnProductGroupHierarchy` | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_productgrouphierarchy preserving type )` |
| key `HierarchyNode` | `_HierarchyNodeText.HierarchyNode` |
| key `ValidityEndDate` | `_HierarchyNodeText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyNodeText.ValidityStartDate` |
| `ParentNode` | `_HierarchyNodeText.ParentNode` |
| `HierarchyVersion` | `_HierarchyNodeText.HierarchyVersion` |
| `HierarchyNodeText` | `_HierarchyNodeText.HierarchyNodeText` |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnProductGroupHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSPRODUCTGROUPHIERNODET'

}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
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
  sapObjectNodeType.name: 'CnsldtnProdGroupHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Product Group Hier Node - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_CnsldtnProductGroupHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS33', P_MasterDataType: 'MATKL') as _HierarchyNodeText

  association [1..1] to I_CnsldtnProductGroupHierarchy as _Hierarchy on $projection.CnsldtnProductGroupHierarchy = _Hierarchy.CnsldtnProductGroupHierarchy // no validity date condition due to limitation in analytic engine

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.UniversalHierarchy as fincs_productgrouphierarchy preserving type ) as CnsldtnProductGroupHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

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
