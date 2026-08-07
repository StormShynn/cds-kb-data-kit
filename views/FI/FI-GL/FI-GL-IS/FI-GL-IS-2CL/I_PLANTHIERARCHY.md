---
name: I_PLANTHIERARCHY
description: Planthierarchy
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
  - plant
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Plant
---
# I_PLANTHIERARCHY

**Planthierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PlantHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_plant preserving type )` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |
| `LastChangedByUser` |  | |  | `upduser` |
| `LastChangeDateTime` |  | |  | `updtime` |
| `HierarchyShortID` |  | |  | `hrysid` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlantHierarchyText` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Plant Hierarchy'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'PlantHierarchy'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'PlantHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics.internalName:#LOCAL 

define view entity I_PlantHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_PlantHierarchyText as _Text on  $projection.PlantHierarchy  = _Text.PlantHierarchy
                                                      and $projection.ValidityEndDate = _Text.ValidityEndDate

{
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_plant preserving type ) as PlantHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )    as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )  as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                         as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                         as LastChangeDateTime,
      hrrp_dir_n.hrysid                                          as HierarchyShortID,
      _Text
}
where
  hrrp_dir_n.hrytyp = 'U514'
```
