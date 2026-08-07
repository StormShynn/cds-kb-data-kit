---
name: I_CNSLDTNPROFITCENTERFORELIM
description: CNSLDTNProfit CenterFORELIM
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERFORELIM

**CNSLDTNProfit CenterFORELIM**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( ControllingArea as fincs_controllingarea preserving type )` |
| `ProfitCenter` |  | |  | `}] key cast( ProfitCenter as fincs_elim_profitcenter preserving type )` |
| `_ControllingArea` | | ✓ | | |
| `_Text_2` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_ProfitCenterHierNode_2` | | ✓ | | |
| `_TmprlNde` | | ✓ | | |
| `_ProfitCenterHierNode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text_2` | `I_CnsldtnProfitCtrForElimT_2` | [0..*] |
| `_Text` | `I_CnsldtnProfitCenterForElimT` | [0..*] |
| `_ProfitCenterHierNode_2` | `I_CnsldtnPrftCtrForElimHN` | [0..*] |
| `_TmprlNde` | `I_CnsldtnElimPrftCtrTNHN` | [0..*] |
| `_ProfitCenterHierNode` | `I_CnsldtnPrftCtrHierNodeInElim` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICCPCFORELIM'
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_ProfitCenterHierNode'] //obsolete
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'ProfitCenter',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnProfitCenterForElim'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Profit Center for Elimination'
define view entity I_CnsldtnProfitCenterForElim
  as select from P_CnsldtnPrftCtrForElim

  association [1..1] to I_CnsldtnControllingArea       as _ControllingArea        on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CnsldtnProfitCtrForElimT_2   as _Text_2                 on  $projection.ControllingArea = _Text_2.ControllingArea
                                                                                  and $projection.ProfitCenter    = _Text_2.ProfitCenter

  association [0..*] to I_CnsldtnProfitCenterForElimT  as _Text                   on  $projection.ControllingArea = _Text.ControllingArea
                                                                                  and $projection.ProfitCenter    = _Text.ProfitCenter

  association [0..*] to I_CnsldtnPrftCtrForElimHN      as _ProfitCenterHierNode_2 on  $projection.ControllingArea = _ProfitCenterHierNode_2.ControllingArea
                                                                                  and $projection.ProfitCenter    = _ProfitCenterHierNode_2.ProfitCenter

  association [0..*] to I_CnsldtnElimPrftCtrTNHN       as _TmprlNde               on  $projection.ProfitCenter    = _TmprlNde.ProfitCenter
                                                                                  and $projection.ControllingArea = _TmprlNde.ControllingArea

  association [0..*] to I_CnsldtnPrftCtrHierNodeInElim as _ProfitCenterHierNode   on  $projection.ControllingArea = _ProfitCenterHierNode.ControllingArea
                                                                                  and $projection.ProfitCenter    = _ProfitCenterHierNode.ProfitCenter

{

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnControllingArea',
        foreignKey.association: '_ControllingArea' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast( ControllingArea as fincs_controllingarea preserving type ) as ControllingArea,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnProfitCenter',
        text.association: '_Text_2',
        hierarchy.association:'_ProfitCenterHierNode_2' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProfitCenterForElimVH',
          element: 'ProfitCenter'},
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key cast( ProfitCenter as fincs_elim_profitcenter preserving type )  as ProfitCenter,


      /* associations */
      _ControllingArea,

      _Text_2,
      _ProfitCenterHierNode_2,

      @ObjectModel.association.toHierarchy: true
      _TmprlNde,

      /* deprecated associations */
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,

      @API.element: {releaseState: #DEPRECATED, successor: '_ProfitCenterHierNode_2'}
      _ProfitCenterHierNode
}
```
