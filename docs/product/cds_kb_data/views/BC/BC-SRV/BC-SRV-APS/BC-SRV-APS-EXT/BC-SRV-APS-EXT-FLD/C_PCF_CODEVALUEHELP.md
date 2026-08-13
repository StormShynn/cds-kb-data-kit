---
name: C_PCF_CODEVALUEHELP
description: "Pcf Codevaluehelp"
semantic_vi: "Cung cấp hỗ trợ giá trị mã cho giá trị trường, hữu ích khi thực hiện mở rộng trường trong ứng dụng SAP."
keywords:
  - "code value help"
  - "custom field extension"
  - "sap application"
  - "field value"
  - "mã giá trị"
  - "trường mở rộng"
  - "hỗ trợ giá trị mã"
  - "sap ứng dụng"
semantic_en: "Provides code value help for field values, useful when implementing custom field extensions in SAP applications."
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NodeName` | ✓ | |  |  |  |  |
| `FieldName` | ✓ | |  |  |  |  |
| `CodeValue` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

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
