---
name: I_PCF_CODEVALUEHELP
description: "Pcf Codevaluehelp"
app_component: BC-SRV-APS-EXT-FLD
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
  - value-help
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_PCF_CODEVALUEHELP

**Pcf Codevaluehelp**

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
| `CodeValue` | ✓ | |  | `code_value` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PCF_CodeValueHelpText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Predefined Fields: Value Help'
define view entity I_PCF_CodeValueHelp
  as select from pcf_c_rep_code as db

  association [0..*] to I_PCF_CodeValueHelpText as _Text on  _Text.NodeName  = $projection.NodeName
                                                         and _Text.FieldName = $projection.FieldName
                                                         and _Text.CodeValue = $projection.CodeValue
{
  key db.node_name  as NodeName,
  key db.field_name as FieldName,
      @ObjectModel.text.association: '_Text'
  key db.code_value as CodeValue,

      _Text
}
where
      db.is_disabled = ' '
  and db.version     = 'A'
```
