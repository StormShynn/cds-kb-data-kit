---
name: DDCDS_TYPE_ENUMVAL_CHAR3_SCP
description: "Ddcds Type Enumval Char 3 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR3_SCP cung cấp dữ liệu về loại dữ liệu SAP, cụ thể là giá trị danh mục ký tự có chiều dài 3. Nó được sử dụng để truy cập và thao tác với loại dữ liệu này trong phát triển ABAP và đám mây."
keywords:
  - "sap data type"
  - "character type"
  - "enumeration value"
  - "ddcds"
  - "abap"
  - "cloud development"
  - "sap cds"
  - "data type"
  - "danh mục ký tự"
  - "giá trị danh mục"
  - "loại dữ liệu"
  - "ddcds_type_enumval_char3_scp"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR3_SCP view provides data about SAP data types, specifically character type enumeration values with a length of 3. It is used to access and manipulate these data types in ABAP and cloud development."
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
# DDCDS_TYPE_ENUMVAL_CHAR3_SCP

**Ddcds Type Enumval Char 3 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.char(3) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR3'
define view entity ddcds_type_enumval_char3_scp
  as select from dd_drty_st_enum_values_char_3 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_char3_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 3'
  key cast( enum.enumValue as abap.char(3) )       as enumValue,
      _Text
}
```
