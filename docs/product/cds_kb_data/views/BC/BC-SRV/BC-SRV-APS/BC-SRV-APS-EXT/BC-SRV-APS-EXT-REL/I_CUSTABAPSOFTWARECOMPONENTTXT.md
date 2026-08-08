---
name: I_CUSTABAPSOFTWARECOMPONENTTXT
description: "Custabapsoftwarecomponenttxt"
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
# I_CUSTABAPSOFTWARECOMPONENTTXT

**Custabapsoftwarecomponenttxt**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABAPSoftwareComponent` | ✓ | |  |  | `CHAR(30)` | Software Component |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ABAPSoftwareComponentName` |  | |  |  | `CHAR(80)` | Short Description of a Software Component |
| `_ABAPSoftwareComponent` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Custom ABAP Software Component Texts'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: 'ABAPSoftwareComponent'
define view entity I_CustABAPSoftwareComponentTxt
  as select from I_ABAPSoftwareComponentText
  association to parent I_CustABAPSoftwareComponent as _ABAPSoftwareComponent on $projection.ABAPSoftwareComponent = _ABAPSoftwareComponent.ABAPSoftwareComponent
{
      @ObjectModel.foreignKey.association: '_ABAPSoftwareComponent'
  key ABAPSoftwareComponent,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      ABAPSoftwareComponentName,
      _ABAPSoftwareComponent,
      _Language
}
where
     _ABAPSoftwareComponent.ABAPSoftwareComponentType = CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility
  or _ABAPSoftwareComponent.ABAPSoftwareComponentType = CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility_add_on
  or _ABAPSoftwareComponent.ABAPSoftwareComponentType = CUSTOM_SOFTWARE_COMPONENT_TYPE.#developer_extensibility_local
  or _ABAPSoftwareComponent.ABAPSoftwareComponentType = CUSTOM_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility
  or _ABAPSoftwareComponent.ABAPSoftwareComponentType = CUSTOM_SOFTWARE_COMPONENT_TYPE.#key_user_extensibility_add_on
```
