---
name: I_CNSLDTNCUSTOMERHIERNODET
description: Cnsldtncustomerhiernodet
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
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERHIERNODET

**Cnsldtncustomerhiernodet**

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
| key `ConsolidationCustomerHierarchy` | `cast(_HierarchyNodeText.UniversalHierarchy as fincs_customerhierarchy preserving type )` |
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
| `_Hierarchy` | `I_CnsldtnCustomerHierarchy` | [1..*] |

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
  sapObjectNodeType.name: 'CnsldtnCustomerHierNodeText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Customer Hier Node - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCustomerHierNodeT
  as select from P_CnsldtnUnivHierNodeText_3(P_HierarchyType: 'CS08', P_MasterDataType: 'KUNNR') as _HierarchyNodeText

  association [1..*] to I_CnsldtnCustomerHierarchy as _Hierarchy on $projection.ConsolidationCustomerHierarchy = _Hierarchy.ConsolidationCustomerHierarchy
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _HierarchyNodeText.Language                                                             as Language,

      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(_HierarchyNodeText.UniversalHierarchy as fincs_customerhierarchy preserving type ) as ConsolidationCustomerHierarchy,

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
