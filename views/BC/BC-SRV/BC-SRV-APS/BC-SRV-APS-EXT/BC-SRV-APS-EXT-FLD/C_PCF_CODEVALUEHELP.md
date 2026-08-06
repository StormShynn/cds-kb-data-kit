---
name: C_PCF_CODEVALUEHELP
description: Pcf Codevaluehelp
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
  - consumption-view
  - value-help
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# C_PCF_CODEVALUEHELP

**Pcf Codevaluehelp**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-FLD` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `NodeName` | `NodeName` |
| key `FieldName` | `FieldName` |
| key `CodeValue` | `CodeValue` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPCFCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Predefined Fields: Value Help'
@Search.searchable: true
define view C_PCF_CodeValueHelp
  as select from I_PCF_CodeValueHelp
{
      @UI.hidden: true
  key NodeName,
      @UI.hidden: true
  key FieldName,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
  key CodeValue,

      _Text
}
```
