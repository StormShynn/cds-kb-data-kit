---
name: I_DIVISIONHIERARCHYNODETEXT
description: Divisionhierarchynodetext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_DIVISIONHIERARCHYNODETEXT

**Divisionhierarchynodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DivisionHierarchy` | ✓ | |  | `cast ( hrrp_nodet_n.hryid as fis_hryid_division preserving type )` |
| `HierarchyNode` | ✓ | |  | `hrynode` |
| `ValidityEndDate` | ✓ | |  | `cast (hrrp_nodet_n.hryvalto as fis_datbi preserving type )` |
| `Language` | ✓ | |  | `spras` |
| `HierarchyNodeText` |  | |  | `nodetxt` |
| `ValidityStartDate` |  | |  | `cast (hrrp_nodet_n.hryvalfrom as fis_datab preserving type )` |
| `_Language` | | ✓ | | |
| `_Hierarchy` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_DivisionHierarchy` | [1..*] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'Division Hierarchy Node - Text'
@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {
dataClass: #MASTER,
serviceQuality: #A,
sizeCategory: #XL
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name:'DivisionHierarchyNodeText'

define view entity I_DivisionHierarchyNodeText
  as select from hrrp_nodet_n

  association [0..1] to I_Language          as _Language  on $projection.Language = _Language.Language

  association [1..*] to I_DivisionHierarchy as _Hierarchy on $projection.DivisionHierarchy = _Hierarchy.DivisionHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid as fis_hryid_division preserving type ) as DivisionHierarchy,
  key hrrp_nodet_n.hrynode                                              as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast (hrrp_nodet_n.hryvalto as fis_datbi preserving type )        as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                                as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      hrrp_nodet_n.nodetxt                                              as HierarchyNodeText,
      @Semantics.businessDate.from: true
      cast (hrrp_nodet_n.hryvalfrom as fis_datab preserving type )      as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = 'U511';
```
