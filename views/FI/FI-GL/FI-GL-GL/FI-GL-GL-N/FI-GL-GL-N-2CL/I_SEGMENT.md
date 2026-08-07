---
name: I_SEGMENT
description: Segment
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_SEGMENT

**Segment**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | |  | `segment` |  |  |
| `_Text` | | ✓ | | | | |
| `_SegmentHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SegmentText` | [0..*] |
| `_SegmentHierNode` | `I_SegmentHierNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Segment'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISEGMENT'
@ObjectModel.representativeKey: 'Segment'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@Metadata.allowExtensions:true
@Search.searchable: true
@AbapCatalog.preserveKey:true
@ObjectModel.sapObjectNodeType.name: 'Segment'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view I_Segment
  as select from fagl_segm

  association [0..*] to I_SegmentText     as _Text            on $projection.Segment = _Text.Segment
  association [0..*] to I_SegmentHierNode as _SegmentHierNode on $projection.Segment = _SegmentHierNode.Segment

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH
      @ObjectModel.hierarchy.association: '_SegmentHierNode'
  key segment as Segment,
      _Text,
      _SegmentHierNode
      //Test Transport release
};
```
