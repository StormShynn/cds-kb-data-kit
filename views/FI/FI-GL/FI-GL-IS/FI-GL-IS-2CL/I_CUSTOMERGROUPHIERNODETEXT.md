---
name: I_CUSTOMERGROUPHIERNODETEXT
description: "Customergrouphiernodetext"
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
  - customer
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
---
# I_CUSTOMERGROUPHIERNODETEXT

**Customergrouphiernodetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroupHierarchy` | ✓ | |  | `cast ( hrrp_nodet_n.hryid as fis_hryid_customergroup preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast (hrrp_nodet_n.hryvalto as fis_datbi)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HierarchyNodeText` |  | |  | `nodetxt` |  |  |
| `ValidityStartDate` |  | |  | `cast (hrrp_nodet_n.hryvalfrom as fis_datab)` |  |  |
| `_Language` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_CustomerGroupHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Customer Group Hierarchy Node - Text'
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
@ObjectModel.sapObjectNodeType.name:'CustomerGroupHierarchyNodeText'
@ObjectModel.representativeKey: 'HierarchyNode'

define view entity I_CustomerGroupHierNodeText
  as select from hrrp_nodet_n

  association [0..1] to I_Language               as _Language  on $projection.Language = _Language.Language

  association [1..*] to I_CustomerGroupHierarchy as _Hierarchy on $projection.CustomerGroupHierarchy = _Hierarchy.CustomerGroupHierarchy

{
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast ( hrrp_nodet_n.hryid as fis_hryid_customergroup preserving type ) as CustomerGroupHierarchy,
  key hrrp_nodet_n.hrynode                                                   as HierarchyNode,
      @Semantics.businessDate.to: true
  key cast (hrrp_nodet_n.hryvalto as fis_datbi)                              as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                                     as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      hrrp_nodet_n.nodetxt                                                   as HierarchyNodeText,
      @Semantics.businessDate.from: true
      cast (hrrp_nodet_n.hryvalfrom as fis_datab)                            as ValidityStartDate,
      _Language,
      _Hierarchy
}
where
  hrrp_nodet_n.hrytyp = 'U506'
```
