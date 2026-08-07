---
name: I_SEGMENTHIERARCHYTEXT
description: Segmenthierarchytext
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
  - text-view
  - text
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_SEGMENTHIERARCHYTEXT

**Segmenthierarchytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SegmentHierarchy` | ✓ | |  | `cast(hrrp_dirt_n.hryid as fis_hryid_segment preserving type )` |
| `ValidityEndDate` | ✓ | |  | `hryvalto` |
| `Language` | ✓ | |  | `spras` |
| `ValidityStartDate` |  | |  | `hryvalfrom` |
| `SegmentHierarchyName` |  | |  | `cast(hrytxt as fis_hryn_segment preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISEGMENTHT'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Segment Hierarchy - Text'
@ObjectModel.representativeKey: 'SegmentHierarchy'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@ObjectModel.sapObjectNodeType.name:'SegmentHierarchyText'

define view I_SegmentHierarchyText
  as select from hrrp_dirt_n

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key   cast(hrrp_dirt_n.hryid as fis_hryid_segment preserving type ) as SegmentHierarchy,
        @Semantics.businessDate.to: true
  key   hrrp_dirt_n.hryvalto                                          as ValidityEndDate,
        @Semantics.language
  key   spras                                                         as Language,
        @Semantics.businessDate.from: true
        hrrp_dirt_n.hryvalfrom                                        as ValidityStartDate,
        @Semantics.text
        cast(hrytxt as fis_hryn_segment preserving type )             as SegmentHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = 'GL01'
```
