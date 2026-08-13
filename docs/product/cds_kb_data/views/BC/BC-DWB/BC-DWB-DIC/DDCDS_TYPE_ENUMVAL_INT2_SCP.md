---
name: DDCDS_TYPE_ENUMVAL_INT2_SCP
description: "Ddcds Type Enumval Int 2 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_INT2_SCP hiển thị dữ liệu kiểu giá trị danh mục cho kiểu số nguyên 2 trong ngữ cảnh cụ thể. Nó được sử dụng để lấy và quản lý các giá trị danh mục này."
keywords:
  - "sap"
  - "cds"
  - "enum"
  - "ddcds"
  - "type"
  - "int2"
  - "scp"
  - "sap data type"
  - "danh mục"
  - "giá trị danh mục"
semantic_en: "The DDCDS_TYPE_ENUMVAL_INT2_SCP view exposes SAP data type enumeration values for integer type 2 in a specific context. It is used to retrieve and manage these enumeration values."
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
# DDCDS_TYPE_ENUMVAL_INT2_SCP

**Ddcds Type Enumval Int 2 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.int2 )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values INT2'
define view entity ddcds_type_enumval_int2_scp
  as select from dd_drty_st_enum_values_int2 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_int2_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value INT2'
  key cast( enum.enumValue as abap.int2 )       as enumValue,
      _Text
}
```
