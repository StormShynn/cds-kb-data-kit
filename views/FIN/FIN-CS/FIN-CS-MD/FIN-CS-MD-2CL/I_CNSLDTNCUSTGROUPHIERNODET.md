---
name: I_CNSLDTNCUSTGROUPHIERNODET
description: Cnsldtncustgrouphiernodet
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
# I_CNSLDTNCUSTGROUPHIERNODET

**Cnsldtncustgrouphiernodet**

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
| key `CnsldtnCustomerGroupHierarchy` | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_customergrouphierarchy preserving type )` |
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
| `_Hierarchy` | `I_CnsldtnCustomerGroupHier` | [1..*] |

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
    sizeCategory: #XL},
  dataCategory: #TEXT,
  representativeKey: 'HierarchyNode',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT],
  sapObjectNodeType.name: 'CnsldtnCustGroupHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Customer Group Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCustGroupHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS13', P_MasterDataType: 'KDGRP') as _HierarchyNodeText

  association [1..*] to I_CnsldtnCustomerGroupHier as _Hierarchy on $projection.CnsldtnCustomerGroupHierarchy = _Hierarchy.CnsldtnCustomerGroupHierarchy
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language                                                                  as Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.UniversalHierarchy as fincs_customergrouphierarchy preserving type ) as CnsldtnCustomerGroupHierarchy,

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
