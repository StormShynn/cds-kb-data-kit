---
name: DDCDS_TYPE_ENUMVAL_CHAR5_SCP
description: "Ddcds Type Enumval Char 5 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR5_SCP cung cấp truy cập vào giá trị enum có độ dài ký tự 5, được sử dụng trong SAP Data Dictionary (DDIC) cho định nghĩa kiểu dữ liệu. Nó được sử dụng khi làm việc với kiểu dữ liệu trong hệ thống SAP."
keywords:
  - "sap data dictionary"
  - "ddic"
  - "data type"
  - "enumeration value"
  - "character length"
  - "ddcds"
  - "sap basis components"
  - "basis components"
  - "ddic data type"
  - "enum value"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR5_SCP view provides access to enumeration values with character length 5, which are used in SAP Data Dictionary (DDIC) for data type definitions. It is used when working with data types in SAP systems."
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
# DDCDS_TYPE_ENUMVAL_CHAR5_SCP

**Ddcds Type Enumval Char 5 Scp**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `simpleType` | ✓ | |  | `cast( enum.simpleType as abap.char(30) )` |  |  |
| `enumIdentifier` | ✓ | |  | `cast( enum.enumIdentifier as abap.char(30) )` |  |  |
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.char(5) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR5'
define view entity ddcds_type_enumval_char5_scp
  as select from dd_drty_st_enum_values_char_5 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_char5_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 5'
  key cast( enum.enumValue as abap.char(5) )       as enumValue,
      _Text
}
```
