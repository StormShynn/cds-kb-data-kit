---
name: I_ABAPCLOUDCUSTOMOBJECTS
description: "Abapcloudcustomobjects"
app_component: BC-SRV-APS-EXT-REL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-EXT-REL
  - lob:Basis Components
---
# I_ABAPCLOUDCUSTOMOBJECTS

**Abapcloudcustomobjects**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABAPObjectType` | ✓ | |  | `object` |  |  |
| `ABAPObjectName` | ✓ | |  | `obj_name` |  |  |
| `ABAPCloudCustomObjectCategory` |  | |  | `case software_component.comp_type when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type) then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility else CUSTOM_OBJECT_CATEGORY.#developer_extensibility end` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'ABAP Cloud Custom Objects'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_ABAPCloudCustomObjects
  // Objects in dedicated cloud software components
  as select from tadir            as object
    inner join   tdevc            as package            on package.devclass = object.devclass
    inner join   abap_langu_swcmp as software_component on software_component.dlvunit = package.dlvunit
{
  key object.object   as ABAPObjectType,
  key object.obj_name as ABAPObjectName,
      case software_component.comp_type
        when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type)
        then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility
        else CUSTOM_OBJECT_CATEGORY.#developer_extensibility
      end             as ABAPCloudCustomObjectCategory
}
where
       object.delflag               is initial
  and(
       software_component.comp_type = cast(ARS_SOFTWARE_COMPONENT_TYPE.#developer_extensibility as relc_type)
    or software_component.comp_type = cast(ARS_SOFTWARE_COMPONENT_TYPE.#developer_extensibility_local as relc_type)
    or software_component.comp_type = cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type)
  )

// Key user artefacts in ATO_W_ITEM_BOM (in- and outside of dedicated cloud software components)
union select from ato_w_item_bom as ato_object
  inner join      tadir          as object on  object.object   = ato_object.object
                                           and object.obj_name = ato_object.object_name
{
  key object.object                                  as ABAPObjectType,
  key object.obj_name                                as ABAPObjectName,
      CUSTOM_OBJECT_CATEGORY.#key_user_extensibility as ABAPCloudCustomObjectCategory
}
where
  object.delflag is initial

// CDS artefacts of key user CDS entities in ATO_W_ITEM_BOM (in- and outside of dedicated cloud software components)
union select from ddldependency  as cds_artefact
  inner join      ato_w_item_bom as ato_object on  ato_object.object      = 'DDLS'
                                               and ato_object.object_name = cds_artefact.ddlname
  inner join      tadir          as object     on  object.object   = cds_artefact.objecttype
                                               and object.obj_name = cds_artefact.objectname
{
  key object.object                                  as ABAPObjectType,
  key object.obj_name                                as ABAPObjectName,
      CUSTOM_OBJECT_CATEGORY.#key_user_extensibility as ABAPCloudCustomObjectCategory
}
where
       cds_artefact.state      = 'A'
  and(
       cds_artefact.objecttype = 'VIEW'
    or cds_artefact.objecttype = 'STOB'
  )
  and  object.delflag          is initial

// Key user artefacts in the local cloud key user package
union select from tadir            as object
  inner join      tdevc            as package            on package.devclass = object.devclass
  inner join      abap_langu_swcmp as software_component on software_component.dlvunit = package.dlvunit
{
  key object.object                                  as ABAPObjectType,
  key object.obj_name                                as ABAPObjectName,
      CUSTOM_OBJECT_CATEGORY.#key_user_extensibility as ABAPCloudCustomObjectCategory
}
where
      object.delflag               is initial
  and package.devclass             = 'TEST_YY1_DEFAULT'
  and software_component.comp_type = cast(ARS_SOFTWARE_COMPONENT_TYPE.#local_development as relc_type)
```
