---
name: I_ENTPROJECTOBJECTLINKTYPE
description: Entprojectobjectlinktype
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTOBJECTLINKTYPE

**Entprojectobjectlinktype**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ObjectLinkType` | `cast( ObjectLinkType.object_type as /s4ppm/tv_object_link_type preserving type )` |
| `ObjectLinkTypeCategory` | `cast( ObjectLinkType.category as /s4ppm/tv_object_link_type_cat preserving type )` |
| `ObjectLinkTypeGrouping` | `ObjectLinkType.grouping` |
| `_ObjectLinkTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectLinkTypeText` | `I_EntProjectObjectLinkTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Object Link Type for Enterprise Projects'
@ObjectModel.representativeKey: 'ObjectLinkType'
@Analytics.technicalName: 'IEPRJMOBJLKTYP'

@AccessControl.authorizationCheck: #NOT_ALLOWED
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjectObjectLinkType
  as select from dpr_obl_obtyp as ObjectLinkType
  association [0..*] to I_EntProjectObjectLinkTypeText as _ObjectLinkTypeText on _ObjectLinkTypeText.ObjectLinkType = $projection.ObjectLinkType
{
      @ObjectModel.text.association: '_ObjectLinkTypeText'
  key cast( ObjectLinkType.object_type as /s4ppm/tv_object_link_type preserving type )  as ObjectLinkType,
      // ObjectLinkType.open_appl as HasOpenApplicationLink, not used
      cast( ObjectLinkType.category as /s4ppm/tv_object_link_type_cat preserving type ) as ObjectLinkTypeCategory,
      ObjectLinkType.grouping                                                           as ObjectLinkTypeGrouping,
      _ObjectLinkTypeText
}
```
