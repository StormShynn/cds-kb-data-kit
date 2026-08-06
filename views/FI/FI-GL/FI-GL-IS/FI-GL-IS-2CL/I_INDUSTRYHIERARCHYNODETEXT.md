---
name: I_INDUSTRYHIERARCHYNODETEXT
description: Industryhierarchynodetext
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
# I_INDUSTRYHIERARCHYNODETEXT

**Industryhierarchynodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `IndustryHierarchy` | `cast ( hrrp_nodet_n.hryid as fis_hryid_industry preserving type )` |
| key `HierarchyNode` | `hrrp_nodet_n.hrynode` |
| key `ValidityEndDate` | `cast (hrrp_nodet_n.hryvalto as fis_datbi)` |
| key `Language` | `hrrp_nodet_n.spras` |
| `HierarchyNodeText` | `hrrp_nodet_n.nodetxt` |
| `ValidityStartDate` | `cast (hrrp_nodet_n.hryvalfrom as fis_datab)` |
| `_Language` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_IndustryHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Industry Hierarchy Node - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'IndustryHierarchyNodeText'
@ObjectModel.representativeKey: 'HierarchyNode'

define view entity I_IndustryHierarchyNodeText
  as select from hrrp_nodet_n

  association [0..1] to I_Language          as _Language  on $projection.Language = _Language.Language

  association [1..*] to I_IndustryHierarchy as _Hierarchy on $projection.IndustryHierarchy = _Hierarchy.IndustryHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid as fis_hryid_industry preserving type ) as IndustryHierarchy,
  key hrrp_nodet_n.hrynode                                              as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast (hrrp_nodet_n.hryvalto as fis_datbi)                         as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                                as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      hrrp_nodet_n.nodetxt                                              as HierarchyNodeText,
      @Semantics.businessDate.from: true
      cast (hrrp_nodet_n.hryvalfrom as fis_datab)                       as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = 'U517'
```
