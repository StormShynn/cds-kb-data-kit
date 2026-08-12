---
name: I_SEGMENTTEXT
description: "Segmenttext"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_SEGMENTTEXT

**Segmenttext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `Segment` | ✓ | |  | `segment` |  |  |
| `SegmentName` |  | |  | `cast (name as fis_segment_name preserving type )as SegmentName` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Segment - Text'
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISEGMENTTEXT'
@ObjectModel.representativeKey: 'Segment'
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.preserveKey:true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

define view I_SegmentText
  as select from fagl_segmt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu                                           as Language,
  key segment                                         as Segment,
      @Semantics.text: true
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#LOW
      cast (name as fis_segment_name preserving type )as SegmentName,
      _Language
};
```
