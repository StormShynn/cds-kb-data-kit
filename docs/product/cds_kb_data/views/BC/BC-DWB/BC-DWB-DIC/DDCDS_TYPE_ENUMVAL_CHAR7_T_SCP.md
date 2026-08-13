---
name: DDCDS_TYPE_ENUMVAL_CHAR7_T_SCP
description: "Ddcds Type Enumval Char 7 T Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR7_T_SCP hiển thị dữ liệu kiểu giá trị danh sách cho trường ký tự có độ dài 7 trong SAP, có thể sử dụng khi làm việc với kiểu dữ liệu SAP trong ABAP hoặc phát triển đám mây."
keywords:
  - "sap"
  - "ddcds"
  - "enumval"
  - "char7"
  - "scp"
  - "abap"
  - "cloud"
  - "development"
  - "data"
  - "type"
  - "enumeration"
  - "value"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR7_T_SCP view exposes SAP data type enumeration values for character fields with a length of 7, which can be used when working with SAP data types in ABAP or cloud development."
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - component:BC-DWB-DIC
  - lob:Basis Components
---
# DDCDS_TYPE_ENUMVAL_CHAR7_T_SCP

**Ddcds Type Enumval Char 7 T Scp**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `simpleType` | ✓ | |  | `cast( enum_t.simpleType as abap.char(30) )` |  |  |
| `enumIdentifier` | ✓ | |  | `cast( enum_t.enumIdentifier as abap.char(30) )` |  |  |
| `enumValue` | ✓ | |  | `cast( enum_t.enumValue as abap.char(7) )` |  |  |
| `language` | ✓ | |  |  |  |  |
| `enumTextName` | ✓ | |  | `cast( enum_t.enumTextName as abap.char(240) )` |  |  |
| `enumText` |  | |  | `cast( enum_t.enumText as abap.char(255) )` |  |  |
| `_EnumValue` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR7 Texts'
define view entity ddcds_type_enumval_char7_t_scp 
  as select from dd_drty_st_enum_value_t_char_7 as enum_t
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum_t.simpleType
  association to parent ddcds_type_enumval_char7_scp as _EnumValue on  $projection.simpleType     = _EnumValue.simpleType
                                                                     and $projection.enumIdentifier = _EnumValue.enumIdentifier
                                                                     and $projection.enumValue      = _EnumValue.enumValue
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum_t.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum_t.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 7'
  key cast( enum_t.enumValue as abap.char(7) )       as enumValue,
  key enum_t.language,
  key cast( enum_t.enumTextName as abap.char(240) )  as enumTextName,
      cast( enum_t.enumText as abap.char(255) )      as enumText,
      _EnumValue,
      enum_t._Language
}
```
