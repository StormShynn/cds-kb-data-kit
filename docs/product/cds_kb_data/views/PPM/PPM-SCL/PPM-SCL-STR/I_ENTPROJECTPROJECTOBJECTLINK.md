---
name: I_ENTPROJECTPROJECTOBJECTLINK
description: "Entprojectprojectobjectlink"
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
# I_ENTPROJECTPROJECTOBJECTLINK

**Entprojectprojectobjectlink**

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
| `EntProjectObjectLinkUUID` | ✓ | |  |  |  |  |
| `ProjectUUID` |  | |  | `cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )` |  |  |
| `ProjectElementUUID` |  | |  | `cast( ProjectElementUUID as /s4ppm/tv_project_element_uuid preserving type )` |  |  |
| `EntProjectObjectLinkType` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  | `cast( ReferencedObjectUUID as /s4ppm/tv_ref_object_uuid preserving type )` |  |  |
| `ReferencedObjectIdentifier` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast( LastChangedByUser as /s4ppm/tv_changed_by preserving type )` |  |  |
| `LastChangeDateTime` |  | |  | `cast( LastChangeDateTime as abp_lastchange_tstmpl preserving type )` |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_ObjectLinkType` | | ✓ | | | | |
| `_ObjectLinkTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |
| `_ObjectLinkType` | `I_EntProjectObjectLinkType` | [1] |
| `_ObjectLinkTypeText` | `I_EntProjectObjectLinkTypeText` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IEPRJPRJOBJLNK'
@VDM.viewType: #BASIC

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.representativeKey: 'EntProjectObjectLinkUUID'
@EndUserText.label: 'Object Link of Enterprise Project'

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

define view I_EntProjectProjectObjectLink
  as select from I_EnterpriseProjectObjectLink
  association [1..1] to I_EnterpriseProject            as _EnterpriseProject  on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID

  //  // associations for fixed values and texts
  //  association [1 ] to I_PPM_ObjectLinkType       as _ObjectLinkType      on $projection.EntProjectObjectLinkType       = _ObjectLinkType.ObjectLinkType
  //  // TODO TOASK [*] cardinality in Template area code (but cardinality defined differrently in StatusAreaCode view
  //  association [1 ] to I_PPM_ObjectLinkTypeText   as _ObjectLinkTypeText  on $projection.EntProjectObjectLinkType       = _ObjectLinkTypeText.ObjectLinkType
  //                                                                        and _ObjectLinkTypeText.LanguageCode = $session.system_language

  association [1]    to I_EntProjectObjectLinkType     as _ObjectLinkType     on  $projection.EntProjectObjectLinkType = _ObjectLinkType.ObjectLinkType

  association [1]    to I_EntProjectObjectLinkTypeText as _ObjectLinkTypeText on  $projection.EntProjectObjectLinkType = _ObjectLinkTypeText.ObjectLinkType
                                                                              and _ObjectLinkTypeText.LanguageCode     = $session.system_language

{

  key EntProjectObjectLinkUUID,

      cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )                as ProjectUUID,

      cast( ProjectElementUUID as /s4ppm/tv_project_element_uuid preserving type ) as ProjectElementUUID,

      @ObjectModel.foreignKey.association: '_ObjectLinkType'
      EntProjectObjectLinkType,

      cast( ReferencedObjectUUID as /s4ppm/tv_ref_object_uuid preserving type )    as ReferencedObjectUUID,

      ReferencedObjectIdentifier,

      CreatedByUser,

      CreationDateTime,

      cast( LastChangedByUser as /s4ppm/tv_changed_by preserving type )            as LastChangedByUser,

      cast( LastChangeDateTime as abp_lastchange_tstmpl preserving type )          as LastChangeDateTime,

      _EnterpriseProject,

      _ObjectLinkType,

      _ObjectLinkTypeText

}
```
