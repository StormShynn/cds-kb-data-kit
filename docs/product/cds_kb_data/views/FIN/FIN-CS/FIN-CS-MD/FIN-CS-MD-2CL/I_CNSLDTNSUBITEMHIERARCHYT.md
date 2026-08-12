---
name: I_CNSLDTNSUBITEMHIERARCHYT
description: "Cnsldtnsubitemhierarchyt"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUBITEMHIERARCHYT

**Cnsldtnsubitemhierarchyt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_HierarchyText` | `Language` |  |  |
| `CnsldtnSubitemCategory` | ✓ | | `_HierarchyText` | `CnsldtnSubitemCategory` |  |  |
| `ConsolidationSubitemHierarchy` | ✓ | |  | `cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_HierarchyText` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_HierarchyText` | `ValidityStartDate` |  |  |
| `ConsolidationSubitemHierText` |  | |  | `cast(_HierarchyText.UniversalHierarchyText as fincs_subitemhierarchytext preserving type )` |  |  |
| `_SubitemCategory` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |
| `_Hierarchy` | `I_CnsldtnSubitemHierarchy` | [1..1] |

## Source Code

```abap
@Analytics: {
//  dataCategory: #DIMENSION, // cannot be set for a text view entity
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
  representativeKey: 'ConsolidationSubitemHierarchy',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #LANGUAGE_DEPENDENT_TEXT,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnSubitemHierarchyText'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }

@EndUserText.label: 'Consolidation Subitem Hierarchy - Text'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSubitemHierarchyT
  as select from P_CnsldtnUnivHierarchyText_3(P_HierarchyType : 'CS18', P_MasterDataType : 'SITEM' ) as _HierarchyText

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [1..1] to I_CnsldtnSubitemHierarchy  as _Hierarchy       on  $projection.CnsldtnSubitemCategory        = _Hierarchy.CnsldtnSubitemCategory
                                                                       and $projection.ConsolidationSubitemHierarchy = _Hierarchy.ConsolidationSubitemHierarchy
                                                                       and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate

{
         @Semantics.language
         @ObjectModel.foreignKey.association: '_Language'
  key    _HierarchyText.Language,

         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnSubitemCategoryVH_2',
             element: 'CnsldtnSubitemCategory'
           }
         }]
         @ObjectModel.foreignKey.association: '_SubitemCategory'
  key    _HierarchyText.CnsldtnSubitemCategory,


  key    cast(_HierarchyText.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type )  as ConsolidationSubitemHierarchy,

         @Semantics.businessDate.to: true
  key    _HierarchyText.ValidityEndDate,

         @Semantics.businessDate.from: true
         _HierarchyText.ValidityStartDate,

         @Semantics.text: true
         cast(_HierarchyText.UniversalHierarchyText as fincs_subitemhierarchytext preserving type ) as ConsolidationSubitemHierText,

         _Language,
         _SubitemCategory,
         _Hierarchy
};
```
