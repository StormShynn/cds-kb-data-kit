---
name: I_ENTPROJECTPROJECTOBJECTLINK
description: Entprojectprojectobjectlink
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
# I_ENTPROJECTPROJECTOBJECTLINK

**Entprojectprojectobjectlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EntProjectObjectLinkUUID` | `EntProjectObjectLinkUUID` |
| `ProjectUUID` | `cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )` |
| `ProjectElementUUID` | `cast( ProjectElementUUID as /s4ppm/tv_project_element_uuid preserving type )` |
| `EntProjectObjectLinkType` | `EntProjectObjectLinkType` |
| `ReferencedObjectUUID` | `cast( ReferencedObjectUUID as /s4ppm/tv_ref_object_uuid preserving type )` |
| `ReferencedObjectIdentifier` | `ReferencedObjectIdentifier` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `cast( LastChangedByUser as /s4ppm/tv_changed_by preserving type )` |
| `LastChangeDateTime` | `cast( LastChangeDateTime as abp_lastchange_tstmpl preserving type )` |
| `_EnterpriseProject` | *Association* |
| `_ObjectLinkType` | *Association* |
| `_ObjectLinkTypeText` | *Association* |

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
