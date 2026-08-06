---
name: I_CNSLDTNFUNCNLAREAHIERNODET
description: Cnsldtnfuncnlareahiernodet
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFUNCNLAREAHIERNODET

**Cnsldtnfuncnlareahiernodet**

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
| key `CnsldtnFunctionalAreaHierarchy` | `cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_functionalareahierarchy preserving type )` |
| key `HierarchyNode` | `_HierarchyNodeText.HierarchyNode` |
| key `ValidityEndDate` | `_HierarchyNodeText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyNodeText.ValidityStartDate` |
| `ParentNode` | `_HierarchyNodeText.ParentNode` |
| `HierarchyVersion` | `_HierarchyNodeText.HierarchyVersion` |
| `HierarchyNodeText` | `_HierarchyNodeText.HierarchyNodeText` |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnFuncnlAreaHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFAHNT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
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
  sapObjectNodeType.name: 'CnsldtnFuncnlAreaHierNodeText'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Functional Area HierNode - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFuncnlAreaHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType : 'CS05', P_MasterDataType : 'RFAREA' ) as _HierarchyNodeText

  association [1..*] to I_CnsldtnFuncnlAreaHierarchy as _Hierarchy on $projection.CnsldtnFunctionalAreaHierarchy = _Hierarchy.CnsldtnFunctionalAreaHierarchy

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _HierarchyNodeText.Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.CnsldtnUniversalHierarchy as fincs_functionalareahierarchy preserving type ) as CnsldtnFunctionalAreaHierarchy,

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
