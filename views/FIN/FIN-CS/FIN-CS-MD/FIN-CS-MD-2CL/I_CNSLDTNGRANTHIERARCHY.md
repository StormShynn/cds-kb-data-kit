---
name: I_CNSLDTNGRANTHIERARCHY
description: "Cnsldtngranthierarchy"
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
# I_CNSLDTNGRANTHIERARCHY

**Cnsldtngranthierarchy**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnGrantHierarchy` | ✓ | |  | `cast(_Hierarchy.UniversalHierarchy as fincs_granthierarchy preserving type )` |  |  |
| `ValidityEndDate` | ✓ | | `_Hierarchy` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_Hierarchy` | `ValidityStartDate` |  |  |
| `LastChangedByUser` |  | | `_Hierarchy` | `LastChangedByUser` |  |  |
| `LastChangeDateTime` |  | | `_Hierarchy` | `LastChangeDateTime` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnGrantHierarchyT` | [0..*] |

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
  representativeKey: 'CnsldtnGrantHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnGrantHierarchy'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Grant Hierarchy'

define view entity I_CnsldtnGrantHierarchy
  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType : 'CS26', P_MasterDataType : 'RGRANT_NBR' ) as _Hierarchy

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                              as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                         and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [0..*] to I_CnsldtnGrantHierarchyT as _Text on $projection.CnsldtnGrantHierarchy = _Text.CnsldtnGrantHierarchy // no validity date condition due to limitation in analytic engine

{
      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.UniversalHierarchy as fincs_granthierarchy preserving type ) as CnsldtnGrantHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,


      /* associations */
      _Text
}
```
