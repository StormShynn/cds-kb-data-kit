---
name: I_CNSLDTNMATERIALHIERNODET
description: "Cnsldtnmaterialhiernodet"
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
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALHIERNODET

**Cnsldtnmaterialhiernodet**

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
| `ConsolidationMaterialHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type )` |  |  |
| `HierarchyNode` | ✓ | | `_HierarchyNodeText` | `HierarchyNode` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyNodeText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyNodeText` | `ValidityStartDate` |  |  |
| `ParentNode` |  | | `_HierarchyNodeText` | `ParentNode` |  |  |
| `HierarchyVersion` |  | | `_HierarchyNodeText` | `HierarchyVersion` |  |  |
| `HierarchyNodeText` |  | | `_HierarchyNodeText` | `HierarchyNodeText` |  |  |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnMaterialHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCMATERIALHNT',
  compiler.compareFilter: true,
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
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnMaterialHierNodeText'                        
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Material HierNode - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnMaterialHierNodeT
  as select from P_CnsldtnUnivHierNodeText_2(P_HierarchyType: 'CS23', P_MasterDataType: 'MATNR') as _HierarchyNodeText

  association [1..*] to I_CnsldtnMaterialHierarchy as _Hierarchy on $projection.ConsolidationMaterialHierarchy = _Hierarchy.ConsolidationMaterialHierarchy
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type ) as ConsolidationMaterialHierarchy,

  key _HierarchyNodeText.HierarchyNode,

      @Semantics.businessDate.to: true
  key _HierarchyNodeText.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNodeText.ValidityStartDate,

      _HierarchyNodeText.ParentNode,

      _HierarchyNodeText.HierarchyVersion,

      @Semantics.text: true
      _HierarchyNodeText.HierarchyNodeText,


      _Language,
      _Hierarchy
};
```
