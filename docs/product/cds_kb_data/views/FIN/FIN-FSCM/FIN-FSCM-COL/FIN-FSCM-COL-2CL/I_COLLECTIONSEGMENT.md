---
name: I_COLLECTIONSEGMENT
description: "Collectionsegment"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONSEGMENT

**Collectionsegment**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionSegment` | ✓ | |  | `cast(coll_segment as farp_collection_segment preserving type)` |  |  |
| `IsReleased` |  | |  | `xreleased` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollectionSegmentText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Collection Segment'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLSGMT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CollectionSegment'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CollectionsSegment'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
@Metadata.allowExtensions:true
define view I_CollectionSegment
  as select from udm_coll_sgmt
  association [0..*] to I_CollectionSegmentText as _Text on $projection.CollectionSegment = _Text.CollectionSegment
{
      @ObjectModel.text.association: '_Text'
  key cast(coll_segment as farp_collection_segment preserving type) as CollectionSegment,
      xreleased                                                     as IsReleased,
      _Text
};
```
