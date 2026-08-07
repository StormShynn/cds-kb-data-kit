---
name: I_SALESDISTRICTHIERARCHYTEXT
description: Salesdistricthierarchytext
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
# I_SALESDISTRICTHIERARCHYTEXT

**Salesdistricthierarchytext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDistrictHierarchy` | ✓ | |  | `cast(hrrp_dirt_n.hryid as fis_hryid_salesdistrict preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `SalesDistrictHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales District Hierarchy - Text'
@ObjectModel.representativeKey: 'SalesDistrictHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name: 'SalesDistrictHierarchyText'

define view entity I_SalesDistrictHierarchyText
  as select from hrrp_dirt_n
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key   cast(hrrp_dirt_n.hryid as fis_hryid_salesdistrict preserving type ) as SalesDistrictHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )            as ValidityEndDate,
        @Semantics.language
  key   spras                                                               as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )          as ValidityStartDate,
        @Semantics.text
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        hrytxt                                                              as SalesDistrictHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = 'U503';
```
