---
name: I_CUSTABAPSOFTWARECOMPONENTTXT
description: "Custabapsoftwarecomponenttxt"
app_component: BC-SRV-APS-EXT-REL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
# I_CUSTABAPSOFTWARECOMPONENTTXT

**Custabapsoftwarecomponenttxt**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-REL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
