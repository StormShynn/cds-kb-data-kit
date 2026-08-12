---
name: I_PCF_FIELD_TEXT_API
description: "Pcf Field Text Api"
app_component: BC-SRV-APS-EXT-FLD
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - text
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_PCF_FIELD_TEXT_API

**Pcf Field Text Api**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-FLD` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NodeName` | ✓ | |  | `node_name` |  |  |
| `FieldName` | ✓ | |  | `field_name` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `FieldLabel` |  | |  | `field_label` |  |  |
| `FieldTooltip` |  | |  | `field_tooltip` |  |  |

## Source Code

```abap
@EndUserText.label: 'Predefined Custom Field Texts'
@AccessControl.authorizationCheck: #NOT_ALLOWED

define view entity I_PCF_Field_Text_API
  as select from pcf_c_rep_fieldt as FieldText
{
  key FieldText.node_name     as NodeName,
  key FieldText.field_name    as FieldName,
      @Semantics.language: true
  key FieldText.language      as Language,
      @Semantics.text: true
      FieldText.field_label   as FieldLabel,
      FieldText.field_tooltip as FieldTooltip
}
where
  version = 'A'
```
