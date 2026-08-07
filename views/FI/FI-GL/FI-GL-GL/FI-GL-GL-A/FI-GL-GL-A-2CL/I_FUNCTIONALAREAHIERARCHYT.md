---
name: I_FUNCTIONALAREAHIERARCHYT
description: Functionalareahierarchyt
app_component: FI-GL-GL-A-2CL
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
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FUNCTIONALAREAHIERARCHYT

**Functionalareahierarchyt**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaHierarchy` | ✓ | |  | `cast ( hrrp_dirt_n.hryid_42 as fis_hryid_functionalarea_42 preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `FunctionalAreaHierarchyName` |  | |  | `hrytxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Functional Area Hierarchy - Text'
@ObjectModel.representativeKey: 'FunctionalAreaHierarchy'
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFNCAREAHT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@ObjectModel.sapObjectNodeType.name:'FunctionalAreaHierarchyText'

define view I_FunctionalAreaHierarchyT
  as select from hrrp_dirt_n

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key   cast ( hrrp_dirt_n.hryid_42 as fis_hryid_functionalarea_42 preserving type ) as FunctionalAreaHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )                     as ValidityEndDate,
        @Semantics.language
  key   spras                                                                        as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )                   as ValidityStartDate,
        @Semantics.text
        hrytxt                                                                       as FunctionalAreaHierarchyName,
        _Language
}
where
  hrrp_dirt_n.hrytyp = '0112';
```
