---
name: I_CNSLDTNPROFITCENTERELIMNODE
description: "CNSLDTNProfit CenterELIMNODE"
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERELIMNODE

**CNSLDTNProfit CenterELIMNODE**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast(_node.kokrs as fincs_controllingarea preserving type )` |  |  |
| `ProfitCenter` | ✓ | |  | `cast(left(_node.nodevalue, 25) as fincs_elim_profitcenter preserving type )` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text` | `I_CnsldtnProfitCenterElimNodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPCELIMNOD',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true,
  allowExtensions:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ProfitCenter',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnProfitCenterElimNde'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Profit Center Elimination Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnProfitCenterElimNode
  as select distinct from hrrp_node_n      as _node

    inner join            fincs_addlcharcx as _addlcharcx on _addlcharcx.cnsldtnaddlcharcfldname = 'PRCTR'

  association [1..1] to I_CnsldtnControllingArea       as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CnsldtnProfitCenterElimNodeT as _Text            on  $projection.ControllingArea = _Text.ControllingArea
                                                                           and $projection.ProfitCenter    = _Text.ProfitCenter

{

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast(_node.kokrs as fincs_controllingarea preserving type )                 as ControllingArea,

      @ObjectModel:{
        sapObjectNodeTypeReference: 'CnsldtnProfitCenterForElim',
        text.association: '_Text' }
  key cast(left(_node.nodevalue, 25) as fincs_elim_profitcenter preserving type ) as ProfitCenter,


      _ControllingArea,
      _Text
}
where
      _node.nodetype                           = '

//and _node.node_timedep                       = ''
  and _node.hrytyp                             = 'CS04'
  and _addlcharcx.cnsldtnmanagementelimenabled = 'X';
```
