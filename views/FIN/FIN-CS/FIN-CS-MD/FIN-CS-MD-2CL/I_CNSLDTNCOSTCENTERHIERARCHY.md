---
name: I_CNSLDTNCOSTCENTERHIERARCHY
description: CNSLDTNCost CenterHIERARCHY
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
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERHIERARCHY

**CNSLDTNCost CenterHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `ControllingArea` |
| key `CnsldtnCostCenterHierarchy` | `cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type )` |
| key `ValidityEndDate` | `_Hierarchy.ValidityEndDate` |
| `ValidityStartDate` | `_Hierarchy.ValidityStartDate` |
| `LastChangedByUser` | `_Hierarchy.LastChangedByUser` |
| `LastChangeDateTime` | `_Hierarchy.LastChangeDateTime` |
| `_ControllingArea` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text` | `I_CnsldtnCostCenterHierText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCCOSTCTRHIER',
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
  representativeKey: 'CnsldtnCostCenterHierarchy',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnCostCenterHierarchy'
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Cost Center Hierarchy'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CnsldtnCostCenterHierarchy
  as select from P_CnsldtnUnivHierarchy_3(P_HierarchyType: 'CS03', P_MasterDataType: 'RCNTR') as _Hierarchy

  association [1..1] to I_CnsldtnControllingArea    as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CnsldtnCostCenterHierText as _Text            on  $projection.ControllingArea            = _Text.ControllingArea
                                                                        and $projection.CnsldtnCostCenterHierarchy = _Text.CnsldtnCostCenterHierarchy
{

      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnControllingArea',
        foreignKey.association: '_ControllingArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
      @Hierarchy.notAssignedNode.filter: true
  key ControllingArea,

      @ObjectModel.text.association: '_Text'
  key cast(_Hierarchy.CnsldtnUniversalHierarchy as fincs_costcenterhierarchy preserving type ) as CnsldtnCostCenterHierarchy,

      @Semantics.businessDate.to: true
  key _Hierarchy.ValidityEndDate,

      @Semantics.businessDate.from: true
      _Hierarchy.ValidityStartDate,

      @Semantics.user.lastChangedBy: true
      _Hierarchy.LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      _Hierarchy.LastChangeDateTime,


      _Text,
      _ControllingArea
};
```
