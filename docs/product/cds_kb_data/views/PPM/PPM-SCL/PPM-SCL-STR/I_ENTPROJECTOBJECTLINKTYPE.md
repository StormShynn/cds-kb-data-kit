---
name: I_ENTPROJECTOBJECTLINKTYPE
description: "Entprojectobjectlinktype"
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectLinkType` | ✓ | |  | `cast( ObjectLinkType.object_type as /s4ppm/tv_object_link_type preserving type )` |  |  |
| `ObjectLinkTypeCategory` |  | |  | `cast( ObjectLinkType.category as /s4ppm/tv_object_link_type_cat preserving type )` |  |  |
| `ObjectLinkTypeGrouping` |  | |  | `grouping` |  |  |
| `_ObjectLinkTypeText` | | ✓ | | | | |

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
