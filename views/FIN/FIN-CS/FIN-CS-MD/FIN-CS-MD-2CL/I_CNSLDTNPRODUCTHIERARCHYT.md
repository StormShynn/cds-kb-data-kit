---
name: I_CNSLDTNPRODUCTHIERARCHYT
description: Cnsldtnproducthierarchyt
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
# I_CNSLDTNPRODUCTHIERARCHYT

**Cnsldtnproducthierarchyt**

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
| key `ConsolidationProductHierarchy` | `cast(_HierarchyText.UniversalHierarchy as fincs_producthierarchy preserving type )` |
| key `ValidityEndDate` | `_HierarchyText.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyText.ValidityStartDate` |
| `CnsldtnProductHierarchyText` | `cast(_HierarchyText.UniversalHierarchyText as fincs_productgrouphiertext preserving type )` |
| `_Hierarchy` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnProductHierarchy` | [1..1] |

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
  representativeKey: 'ConsolidationProductHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnProductHierarchyText'                        
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Product Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnProductHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3( P_HierarchyType: 'CS12', P_MasterDataType : 'MATNR_COPA' ) as _HierarchyText

  association [1..1] to I_CnsldtnProductHierarchy as _Hierarchy on  $projection.ConsolidationProductHierarchy = _Hierarchy.ConsolidationProductHierarchy
                                                                and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_producthierarchy preserving type )         as ConsolidationProductHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_productgrouphiertext preserving type ) as CnsldtnProductHierarchyText,

        _Language,
        _Hierarchy
};
```
