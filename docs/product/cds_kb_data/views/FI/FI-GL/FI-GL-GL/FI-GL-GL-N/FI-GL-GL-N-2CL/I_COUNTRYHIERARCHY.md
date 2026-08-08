---
name: I_COUNTRYHIERARCHY
description: "Countryhierarchy"
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
  - country
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_COUNTRYHIERARCHY

**Countryhierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CountryHierarchy` | ✓ | |  | `cast ( hrrp_dir_n.hryid as fis_hryid_country preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CountryHierarchyText` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Country/Region Hierarchy'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@ObjectModel.sapObjectNodeType.name: 'CountryHierarchy'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'CountryHierarchy' //Inserted by VDM CDS Suite Plugin


define view entity I_CountryHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_CountryHierarchyText as _Text on  $projection.CountryHierarchy = _Text.CountryHierarchy
                                                        and $projection.ValidityEndDate  = _Text.ValidityEndDate
{
      @ObjectModel.text.association: '_Text'
  key cast ( hrrp_dir_n.hryid as fis_hryid_country preserving type ) as CountryHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )        as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )      as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                             as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                             as LastChangeDateTime,
      hrrp_dir_n.hrysid                                              as HierarchyShortID,
      _Text
}
where
  hrrp_dir_n.hrytyp = 'U508';
```
