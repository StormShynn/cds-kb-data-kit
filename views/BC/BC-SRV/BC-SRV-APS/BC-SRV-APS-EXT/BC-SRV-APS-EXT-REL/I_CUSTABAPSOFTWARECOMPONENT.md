---
name: I_CUSTABAPSOFTWARECOMPONENT
description: Custabapsoftwarecomponent
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
# I_CUSTABAPSOFTWARECOMPONENT

**Custabapsoftwarecomponent**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ABAPSoftwareComponent` | `ABAPSoftwareComponent` |
| `ABAPSoftwareComponentType` | `cast(ABAPSoftwareComponentType as CUSTOM_SOFTWARE_COMPONENT_TYPE)` |
| `ABAPCloudCustomObjectCategory` | `case ABAPSoftwareComponentType when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type) then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility_add_on as relc_type) then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility else CUSTOM_OBJECT_CATEGORY.#developer_extensibility end` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Custom ABAP Software Components'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'ABAPSoftwareComponent'
define root view entity I_CustABAPSoftwareComponent
  as select from I_ABAPSoftwareComponent
  composition [0..*] of I_CustABAPSoftwareComponentTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key ABAPSoftwareComponent,
      cast(ABAPSoftwareComponentType as CUSTOM_SOFTWARE_COMPONENT_TYPE) as ABAPSoftwareComponentType,
      case ABAPSoftwareComponentType
        when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type)
        then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility
        when cast(ARS_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility_add_on as relc_type)
        then CUSTOM_OBJECT_CATEGORY.#key_user_extensibility
        else CUSTOM_OBJECT_CATEGORY.#developer_extensibility
      end             as ABAPCloudCustomObjectCategory,
      _Text
}
where
     ABAPSoftwareComponentType = cast(CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility as relc_type)
  or ABAPSoftwareComponentType = cast(CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility_add_on as relc_type)
  or ABAPSoftwareComponentType = cast(CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility_local as relc_type)
  or ABAPSoftwareComponentType = cast(CUSTOM_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility as relc_type)
  or ABAPSoftwareComponentType = cast(CUSTOM_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility_add_on as relc_type)
```
