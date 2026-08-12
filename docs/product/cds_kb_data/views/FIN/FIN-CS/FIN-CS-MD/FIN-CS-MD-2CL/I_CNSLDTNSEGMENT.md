---
name: I_CNSLDTNSEGMENT
description: "Cnsldtnsegment"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSEGMENT

**Cnsldtnsegment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Segment` | ✓ | |  | `cast( Segment as fincs_segment preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_SegmentHierNode` | | ✓ | | | | |
| `_TmprlNde` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSegmentT` | [0..*] |
| `_SegmentHierNode` | `I_CnsldtnSegmentHierNode` | [0..*] |
| `_TmprlNde` | `I_CnsldtnSegmentTNHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSSEGMENT'
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
    sizeCategory: #S},
  representativeKey: 'Segment',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnSegment'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Segment'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnSegment
  as select distinct from P_CnsldtnSegment

  association [0..*] to I_CnsldtnSegmentT          as _Text            on $projection.Segment = _Text.Segment

  association [0..*] to I_CnsldtnSegmentHierNode   as _SegmentHierNode on $projection.Segment = _SegmentHierNode.Segment

  association [0..*] to I_CnsldtnSegmentTNHierNode as _TmprlNde        on $projection.Segment = _TmprlNde.Segment

  association [1..1] to I_CnsldtnMDSource          as _MDSource        on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SegmentHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSegmentVH',
          element: 'Segment'
        }
      }]
  key cast( Segment as fincs_segment preserving type )                                              as Segment,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text,
      _SegmentHierNode,
      _MDSource,
      @ObjectModel.association.toHierarchy: true
      _TmprlNde
}
where
  Segment is not initial //required to avoid access to corrupt database entries
group by
  Segment
```
