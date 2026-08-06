---
name: I_CNSLDTNMATERIALHIERARCHY
description: Cnsldtnmaterialhierarchy
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
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIALHIERARCHY

**Cnsldtnmaterialhierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationMaterialHierarchy` | `cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type )` |
| key `ValidityEndDate` | `_Hierarchy.ValidityEndDate` |
| `ValidityStartDate` | `_Hierarchy.ValidityStartDate` |
| `LastChangedByUser` | `_Hierarchy.LastChangedByUser` |
| `LastChangeDateTime` | `_Hierarchy.LastChangeDateTime` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnMaterialHierarchyT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCMATERIALHNENH',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationMaterialHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnMaterialHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Material Hierarchy'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnMaterialHierarchy
  as select from P_CnsldtnUnivHierarchy_2(P_HierarchyType: 'CS23', P_MasterDataType: 'MATNR') as _Hierarchy

  association [0..*] to I_CnsldtnMaterialHierarchyT as _Text on $projection.ConsolidationMaterialHierarchy = _Text.ConsolidationMaterialHierarchy
{

      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_materialhierarchy preserving type ) as ConsolidationMaterialHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,


      _Text
};
```
