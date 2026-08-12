---
name: I_PCF_CODEVALUEHELPTEXT
description: "Pcf Codevaluehelptext"
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
  - value-help
  - text-view
  - text
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_PCF_CODEVALUEHELPTEXT

**Pcf Codevaluehelptext**

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
| `CodeValue` | ✓ | |  | `code_value` |  |  |
| `Description` |  | |  | `description` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Predefined Fields: Value Help Texts'
@Search.searchable: true
define view entity I_PCF_CodeValueHelpText
  as select from pcf_c_rep_code_t
{
  key node_name   as NodeName,
  key field_name  as FieldName,
      @Semantics.language: true
  key language    as Language,
  key code_value  as CodeValue,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      description as Description
} where version = 'A'
```
