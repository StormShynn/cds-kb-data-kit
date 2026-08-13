---
name: I_ABAPCLOUDCUSTOMOBJECTS
description: "Abapcloudcustomobjects"
semantic_vi: "Chỉ ra các đối tượng tùy chỉnh được tạo trong môi trường ABAP Cloud, được sử dụng để quản lý và theo dõi các đối tượng tùy chỉnh trên toàn hệ thống."
keywords:
  - "abap cloud"
  - "custom object"
  - "object type"
  - "object name"
  - "category"
  - "abap object"
  - "abap cloud custom object"
  - "basis components"
  - "sap cds view"
  - "custom object management"
semantic_en: "Exposes custom objects created in the ABAP Cloud environment, used to manage and track custom objects across the system."
app_component: BC-SRV-APS-EXT-REL
software_component: SAP_BASIS
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABAPObjectType` | ✓ | |  | `object` | `CHAR(4)` | Object Type in Object Directory |
| `ABAPObjectName` | ✓ | |  | `obj_name` | `CHAR(40)` | Object Name in Object Directory |
| `ABAPCloudCustomObjectCategory` |  | |  | `case software_component.comp_type when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type) then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility else CUSTOM_OBJECT_CATEGORY.#developer_extensibility end` | `ENUM(1)` |  |

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
