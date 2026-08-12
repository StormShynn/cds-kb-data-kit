---
name: I_CNSLDTNSUBITEMHIERARCHY
description: "Cnsldtnsubitemhierarchy"
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
# I_CNSLDTNSUBITEMHIERARCHY

**Cnsldtnsubitemhierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnSubitemCategory` | ✓ | | `_Hierarchy` | `CnsldtnSubitemCategory` |  |  |
| `ConsolidationSubitemHierarchy` | ✓ | |  | `cast( _Hierarchy.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_SubitemCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SubitemCategory` | `I_CnsldtnSubitemCategory_2` | [1..1] |
| `_Text` | `I_CnsldtnSubitemHierarchyT` | [1..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationSubitemHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationSubitemHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Consolidation Subitem Hierarchy'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSubitemHierarchy

  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType : 'CS18', P_MasterDataType : 'SITEM' ) as _Hierarchy

  association [1..1] to I_CnsldtnSubitemCategory_2 as _SubitemCategory on  $projection.CnsldtnSubitemCategory = _SubitemCategory.CnsldtnSubitemCategory

  association [1..*] to I_CnsldtnSubitemHierarchyT as _Text            on  $projection.ConsolidationSubitemHierarchy = _Text.ConsolidationSubitemHierarchy
                                                                       and $projection.CnsldtnSubitemCategory        = _Text.CnsldtnSubitemCategory
{
         @ObjectModel.foreignKey.association: '_SubitemCategory'
         @Consumption.valueHelpDefinition: [{
           entity: {
             name: 'I_CnsldtnSubitemCategoryVH_2',
             element: 'CnsldtnSubitemCategory'
           }
         }]
         @Hierarchy.notAssignedNode.filter: true
  key    _Hierarchy.CnsldtnSubitemCategory,

         @ObjectModel.text.association: '_Text'
  key    cast( _Hierarchy.CnsldtnUniversalHierarchy as fincs_subitemhierarchy preserving type ) as ConsolidationSubitemHierarchy,

         @Semantics.businessDate.to: true
  key    _Hierarchy.ValidityEndDate,

         @Semantics.businessDate.from: true
         _Hierarchy.ValidityStartDate,

         @Semantics.user.lastChangedBy: true
         _Hierarchy.LastChangedByUser,

         @Semantics.systemDateTime.lastChangedAt: true
         _Hierarchy.LastChangeDateTime,

         _Text,
         _SubitemCategory
};
```
