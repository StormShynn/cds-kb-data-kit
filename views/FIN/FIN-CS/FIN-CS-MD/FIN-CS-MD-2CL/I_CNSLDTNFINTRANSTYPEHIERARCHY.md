---
name: I_CNSLDTNFINTRANSTYPEHIERARCHY
description: Cnsldtnfintranstypehierarchy
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
# I_CNSLDTNFINTRANSTYPEHIERARCHY

**Cnsldtnfintranstypehierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CnsldtnFinTransTypeHierarchy` | ✓ | |  | `cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type )` |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinTransTypeHierText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFTTHIERARCHY',
  compiler.compareFilter: true
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
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
  representativeKey: 'CnsldtnFinTransTypeHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnFinTransTypeHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Financial Trans Type Hierarchy'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnFinTransTypeHierarchy
  as select from P_CnsldtnUnivHierarchy_2(P_HierarchyType : 'CS07', P_MasterDataType : 'RMVCT' ) as _Hierarchy

  association [0..*] to I_CnsldtnFinTransTypeHierText as _Text on $projection.CnsldtnFinTransTypeHierarchy = _Text.CnsldtnFinTransTypeHierarchy
{

      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_fintransactiontypehier preserving type ) as CnsldtnFinTransTypeHierarchy,

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
