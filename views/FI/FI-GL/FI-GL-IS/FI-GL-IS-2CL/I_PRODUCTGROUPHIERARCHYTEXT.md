---
name: I_PRODUCTGROUPHIERARCHYTEXT
description: Productgrouphierarchytext
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
  - product
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PRODUCTGROUPHIERARCHYTEXT

**Productgrouphierarchytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductGroupHierarchy` | ✓ | |  | `cast(hrrp_dirt_n.hryid as fis_hryid_productgroup preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `ProductGroupHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Group Hierarchy - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name:'ProductGroupHierarchyText'
@ObjectModel.representativeKey: 'ProductGroupHierarchy'

define view entity I_ProductGroupHierarchyText
  as select from hrrp_dirt_n
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key   cast(hrrp_dirt_n.hryid as fis_hryid_productgroup preserving type ) as ProductGroupHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )           as ValidityEndDate,
        @Semantics.language
  key   spras                                                              as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )         as ValidityStartDate,
        @Semantics.text
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        hrytxt                                                             as ProductGroupHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = 'U509'
```
