---
name: DDCDS_TYPE_ENUMVAL_CHAR3_T_SCP
description: "Ddcds Type Enumval Char 3 T Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR3_T_SCP cung cấp dữ liệu về giá trị danh sách cho các trường kiểu ký tự trong hệ thống SAP. Nó được sử dụng để truy cập và quản lý giá trị danh sách cho các trường ký tự."
keywords:
  - "sap"
  - "ddcds"
  - "enumval"
  - "character"
  - "type"
  - "field"
  - "sap system"
  - "sap enumeration"
  - "sap data"
  - "sap management"
  - "sap access"
  - "sap character field"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR3_T_SCP view provides data about enumeration values for character type fields in SAP systems. It is used to access and manage enumeration values for character fields."
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
# DDCDS_TYPE_ENUMVAL_CHAR3_T_SCP

**Ddcds Type Enumval Char 3 T Scp**

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
| `enumValue` | ✓ | |  | `cast( enum_t.enumValue as abap.char(3) )` |  |  |
| `language` | ✓ | |  |  |  |  |
| `enumTextName` | ✓ | |  | `cast( enum_t.enumTextName as abap.char(240) )` |  |  |
| `enumText` |  | |  | `cast( enum_t.enumText as abap.char(255) )` |  |  |
| `_EnumValue` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR3 Texts'
define view entity ddcds_type_enumval_char3_t_scp 
  as select from dd_drty_st_enum_value_t_char_3 as enum_t
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum_t.simpleType
  association to parent ddcds_type_enumval_char3_scp as _EnumValue on  $projection.simpleType     = _EnumValue.simpleType
                                                                     and $projection.enumIdentifier = _EnumValue.enumIdentifier
                                                                     and $projection.enumValue      = _EnumValue.enumValue
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum_t.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum_t.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 3'
  key cast( enum_t.enumValue as abap.char(3) )       as enumValue,
  key enum_t.language,
  key cast( enum_t.enumTextName as abap.char(240) )  as enumTextName,
      cast( enum_t.enumText as abap.char(255) )      as enumText,
      _EnumValue,
      enum_t._Language
}
```
