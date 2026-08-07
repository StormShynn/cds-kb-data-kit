---
name: I_CNSLDTNSEGMENTFORELIM
description: Cnsldtnsegmentforelim
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
# I_CNSLDTNSEGMENTFORELIM

**Cnsldtnsegmentforelim**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | |  |  |  |  |
| `_Text_2` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_SegmentHierNode_2` | | ✓ | | | | |
| `_TmprlNde` | | ✓ | | | | |
| `_SegmentHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text_2` | `I_CnsldtnSegmentForElimT_2` | [0..*] |
| `_Text` | `I_CnsldtnSegmentForElimT` | [0..*] |
| `_SegmentHierNode_2` | `I_CnsldtnSgmtForElimHierNode` | [0..*] |
| `_TmprlNde` | `I_CnsldtnElimSgmtTNHierNode` | [0..*] |
| `_SegmentHierNode` | `I_CnsldtnSgmtHierNodeForElim` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ISEGMENTFORELIM'
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
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'Segment',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnSegmentForElimination'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Segment for Elimination'
define view entity I_CnsldtnSegmentForElim
  as select from P_CnsldtnSegmentForElim

  association [0..*] to I_CnsldtnSegmentForElimT_2   as _Text_2            on $projection.Segment = _Text_2.Segment

  association [0..*] to I_CnsldtnSegmentForElimT     as _Text              on $projection.Segment = _Text.Segment

  association [0..*] to I_CnsldtnSgmtForElimHierNode as _SegmentHierNode_2 on $projection.Segment = _SegmentHierNode_2.Segment

  association [0..*] to I_CnsldtnElimSgmtTNHierNode  as _TmprlNde          on $projection.Segment = _TmprlNde.Segment

  association [0..*] to I_CnsldtnSgmtHierNodeForElim as _SegmentHierNode   on $projection.Segment = _SegmentHierNode.Segment

{
      @ObjectModel.text.association: '_Text_2'
      @ObjectModel.hierarchy.association: '_SegmentHierNode_2'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSegmentForElimVH',
          element: 'Segment'
        }
      }]
  key Segment,


      /* associations */
      _SegmentHierNode_2,

      @API.element: {releaseState: #DEPRECATED, successor: '_SegmentHierNode_2'}
      _SegmentHierNode,

      _Text_2,

      @API.element: {releaseState: #DEPRECATED, successor: '_Text_2'}
      _Text,

      @ObjectModel.association.toHierarchy: true
      _TmprlNde

};
```
