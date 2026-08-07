---
name: I_SEGMENTHIERARCHY
description: "Segmenthierarchy"
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
# I_SEGMENTHIERARCHY

**Segmenthierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SegmentHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_segment preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `LastChangeTime` |  | |  | `updtime` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SegmentHierarchyText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISEGMENTH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Segment Hierarchy'
@ObjectModel.representativeKey: 'SegmentHierarchy'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@ObjectModel.sapObjectNodeType.name: 'SegmentHierarchy'

define view I_SegmentHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_SegmentHierarchyText as _Text on  $projection.SegmentHierarchy = _Text.SegmentHierarchy
                                                        and $projection.ValidityEndDate  = _Text.ValidityEndDate


{
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_segment preserving type ) as SegmentHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )      as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )    as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                           as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                           as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                           as LastChangeTime,
      hrrp_dir_n.hrysid                                            as HierarchyShortID,
      _Text

}
where
  hrrp_dir_n.hrytyp = 'GL01';
```
