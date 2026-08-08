---
name: I_CUSTOMERGROUPHIERARCHYTEXT
description: "Customergrouphierarchytext"
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
# I_CUSTOMERGROUPHIERARCHYTEXT

**Customergrouphierarchytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerGroupHierarchy` | ✓ | |  | `cast(hrrp_dirt_n.hryid as fis_hryid_customergroup preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `CustomerGroupHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Group Hierarchy - Text'
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
@ObjectModel.sapObjectNodeType.name:'CustomerGroupHierarchyText'
@ObjectModel.representativeKey: 'CustomerGroupHierarchy'

define view entity I_CustomerGroupHierarchyText
  as select from hrrp_dirt_n
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key   cast(hrrp_dirt_n.hryid as fis_hryid_customergroup preserving type )  as CustomerGroupHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )             as ValidityEndDate,
        @Semantics.language
  key   spras                                                                as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )           as ValidityStartDate,
        @Semantics.text
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        hrytxt                                                               as CustomerGroupHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = 'U506'
```
