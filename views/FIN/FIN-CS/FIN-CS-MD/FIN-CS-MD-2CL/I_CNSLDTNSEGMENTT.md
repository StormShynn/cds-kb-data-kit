---
name: I_CNSLDTNSEGMENTT
description: "Cnsldtnsegmentt"
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
# I_CNSLDTNSEGMENTT

**Cnsldtnsegmentt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `Segment` | ✓ | |  | `cast( _Source.Segment as fincs_segment preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.SegmentName as fincs_description_text_50 preserving type )` |  |  |
| `SegmentName` |  | |  | `cast( _Source.SegmentName as fincs_segmentname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Segment` | `I_CnsldtnSegment` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSSEGMENTT' 
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'Segment',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSegmentText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Segment - Text'

define view entity I_CnsldtnSegmentT
  as select distinct from P_CnsldtnSegmentT as _Source

    inner join            I_CnsldtnSegment  as _Main on  _Main.Segment                       = _Source.Segment
                                                     and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language       as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSegment as _Segment  on $projection.Segment = _Segment.Segment
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Segment'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSegmentVH',
          element: 'Segment'
        }
      }]
  key cast( _Source.Segment as fincs_segment preserving type )                             as Segment,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'SegmentName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'SegmentName' }
      cast( _Source.SegmentName as fincs_description_text_50 preserving type )             as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.SegmentName as fincs_segmentname preserving type )                     as SegmentName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Segment
}
where
  _Source.Language is not null
```
