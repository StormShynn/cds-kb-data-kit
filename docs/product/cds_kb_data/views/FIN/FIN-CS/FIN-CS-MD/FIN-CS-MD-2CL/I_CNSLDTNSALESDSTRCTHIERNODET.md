---
name: I_CNSLDTNSALESDSTRCTHIERNODET
description: "Cnsldtnsalesdstrcthiernodet"
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
# I_CNSLDTNSALESDSTRCTHIERNODET

**Cnsldtnsalesdstrcthiernodet**

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
| `CnsldtnSalesDistrictHierarchy` | ✓ | |  | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_salesdistricthierarchy preserving type )` |  |  |
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
| `_Hierarchy` | `I_CnsldtnSalesDistrictHier` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSALESDSTRCTHIERNODET'

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
  sapObjectNodeType.name: 'CnsldtnSalesDstrctHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Sales District Hier Node - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CARDINALITY_CHECK" ]  } */
define view entity I_CnsldtnSalesDstrctHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS32', P_MasterDataType: 'BZIRK') as _HierarchyNodeText

  association [1..1] to I_CnsldtnSalesDistrictHier as _Hierarchy on $projection.CnsldtnSalesDistrictHierarchy = _Hierarchy.CnsldtnSalesDistrictHierarchy // no validity date condition due to limitation in analytic engine

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.UniversalHierarchy as fincs_salesdistricthierarchy preserving type ) as CnsldtnSalesDistrictHierarchy,

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
