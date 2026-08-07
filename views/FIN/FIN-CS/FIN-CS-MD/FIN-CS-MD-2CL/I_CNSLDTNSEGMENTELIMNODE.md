---
name: I_CNSLDTNSEGMENTELIMNODE
description: Cnsldtnsegmentelimnode
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
# I_CNSLDTNSEGMENTELIMNODE

**Cnsldtnsegmentelimnode**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | |  | `cast(left(_node.nodevalue, 25) as fincs_elim_segment preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSegmentElimNodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSEGELIMNOD',
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
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'Segment',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnSegmentEliminationNde'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Cnsldtn Segment Elimination Node'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnSegmentElimNode
  as select distinct from hrrp_node_n      as _node

    inner join            fincs_addlcharcx as _addlcharcx on _addlcharcx.cnsldtnaddlcharcfldname = 'SEGMENT'

  association [0..*] to I_CnsldtnSegmentElimNodeT as _Text on $projection.Segment = _Text.Segment

{

      @ObjectModel.text.association: '_Text'
  key cast(left(_node.nodevalue, 25) as fincs_elim_segment preserving type ) as Segment,


      _Text
}
where
      _node.nodetype                           = '

//and _node.node_timedep                       = ''
  and _node.hrytyp                             = 'CS01'
  and _addlcharcx.cnsldtnmanagementelimenabled = 'X'
```
