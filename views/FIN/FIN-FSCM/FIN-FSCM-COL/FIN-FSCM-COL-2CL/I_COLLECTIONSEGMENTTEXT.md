---
name: I_COLLECTIONSEGMENTTEXT
description: Collectionsegmenttext
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - text-view
  - text
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONSEGMENTTEXT

**Collectionsegmenttext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionSegment` | ✓ | |  | `cast(coll_segment as bdm_coll_segment preserving type)` |  |  |
| `Language` | ✓ | |  | `lang` |  |  |
| `CollectionSegmentName` |  | |  | `coll_segment_txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Collection Segment - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLSGMTT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CollectionSegment'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CollectionSegmentText
  as select from udm_coll_sgmtt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(coll_segment as bdm_coll_segment preserving type) as CollectionSegment,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key lang                                                   as Language,
      @Semantics.text: true
      coll_segment_txt                                       as CollectionSegmentName,
      _Language
};
```
