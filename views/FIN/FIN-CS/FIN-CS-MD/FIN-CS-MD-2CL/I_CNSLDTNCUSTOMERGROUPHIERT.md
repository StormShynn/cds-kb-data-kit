---
name: I_CNSLDTNCUSTOMERGROUPHIERT
description: Cnsldtncustomergrouphiert
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
# I_CNSLDTNCUSTOMERGROUPHIERT

**Cnsldtncustomergrouphiert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_HierarchyText.Language` |
| key `CnsldtnCustomerGroupHierarchy` | `cast(_HierarchyText.UniversalHierarchy as fincs_customergrouphierarchy preserving type )` |
| key `ValidityEndDate` | `_HierarchyText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyText.ValidityStartDate` |
| `CnsldtnCustomerGroupHierText` | `cast(_HierarchyText.UniversalHierarchyText as fincs_customergrouphiertext preserving type )` |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnCustomerGroupHier` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  representativeKey: 'CnsldtnCustomerGroupHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnCustomerGroupHierText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Customer Group Hierarchy - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnCustomerGroupHierT
  as select from P_CnsldtnUnivHierarchyText_3( P_HierarchyType: 'CS13', P_MasterDataType : 'KDGRP' ) as _HierarchyText

  association [1..1] to I_CnsldtnCustomerGroupHier as _Hierarchy on  $projection.CnsldtnCustomerGroupHierarchy = _Hierarchy.CnsldtnCustomerGroupHierarchy
                                                                 and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_customergrouphierarchy preserving type )    as CnsldtnCustomerGroupHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_customergrouphiertext preserving type ) as CnsldtnCustomerGroupHierText,

        _Language,
        _Hierarchy
};
```
