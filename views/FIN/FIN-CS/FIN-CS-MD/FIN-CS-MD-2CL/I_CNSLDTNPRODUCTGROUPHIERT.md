---
name: I_CNSLDTNPRODUCTGROUPHIERT
description: Cnsldtnproductgrouphiert
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
# I_CNSLDTNPRODUCTGROUPHIERT

**Cnsldtnproductgrouphiert**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |
| `CnsldtnProductGroupHierarchy` | ✓ | |  | `cast(_HierarchyText.UniversalHierarchy as fincs_productgrouphierarchy preserving type )` |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |
| `CnsldtnProductGroupHierText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_productgrouphiertext preserving type )` |
| `_Hierarchy` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_CnsldtnProductGroupHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
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
  representativeKey: 'CnsldtnProductGroupHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnProductGroupHierText'                         
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Product Group Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnProductGroupHierT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS33', P_MasterDataType : 'MATKL' ) as _HierarchyText

  association [1..1] to I_CnsldtnProductGroupHierarchy as _Hierarchy on  $projection.CnsldtnProductGroupHierarchy = _Hierarchy.CnsldtnProductGroupHierarchy
                                                                     and $projection.ValidityEndDate              = _Hierarchy.ValidityEndDate
{
        @Semantics.language
        @ObjectModel.foreignKey.association: '_Language'
  key   _HierarchyText.Language,

        @ObjectModel.foreignKey.association: '_Hierarchy'
  key   cast(_HierarchyText.UniversalHierarchy as fincs_productgrouphierarchy preserving type )     as CnsldtnProductGroupHierarchy,

        @Semantics.businessDate.to: true
  key   _HierarchyText.ValidityEndDate,

        @Semantics.businessDate.from: true
        _HierarchyText.ValidityStartDate,

        @Semantics.text: true
        cast(_HierarchyText.UniversalHierarchyText as fincs_productgrouphiertext  preserving type ) as CnsldtnProductGroupHierText,


        /* associations */
        _HierarchyText._Language,
        _Hierarchy
}
```
