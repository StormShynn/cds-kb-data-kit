---
name: DDCDS_TYPE_ENUMVAL_CHAR2_SCP
description: "Ddcds Type Enumval Char 2 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR2_SCP hiển thị các giá trị danh mục cho kiểu dữ liệu ký tự trong SAP. Nó được sử dụng để truy cập và thao tác với các giá trị này."
keywords:
  - "sap"
  - "cds"
  - "enum"
  - "character"
  - "data"
  - "ddcds"
  - "type"
  - "scp"
  - "basis"
  - "components"
  - "dwb"
  - "dic"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR2_SCP view exposes enumeration values for character type data in SAP. It is used to access and manipulate these values."
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
# DDCDS_TYPE_ENUMVAL_CHAR2_SCP

**Ddcds Type Enumval Char 2 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.char(2) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR2'
define view entity ddcds_type_enumval_char2_scp
  as select from dd_drty_st_enum_values_char_2 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_char2_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 2'
  key cast( enum.enumValue as abap.char(2) )       as enumValue,
      _Text
}
```
