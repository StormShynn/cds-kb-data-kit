---
name: DDCDS_TYPE_ENUMVAL_INT4_SCP
description: "Ddcds Type Enumval Int 4 Scp"
semantic_vi: "Chứa các giá trị danh mục cho kiểu số nguyên trong Datasheet của SAP, hữu ích khi cần lấy các giá trị danh mục cụ thể cho một kiểu và định danh."
keywords:
  - "sap"
  - "data dictionary"
  - "ddcds"
  - "enum"
  - "integer"
  - "type"
  - "enumeration"
  - "danh mục"
  - "kiểu số nguyên"
  - "datasheet"
  - "sap data dictionary"
semantic_en: "Exposes enumeration values for integer type in SAP Data Dictionary, useful for retrieving specific enumeration values for a given type and identifier."
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
# DDCDS_TYPE_ENUMVAL_INT4_SCP

**Ddcds Type Enumval Int 4 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.int4 )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values INT4'
define view entity ddcds_type_enumval_int4_scp
  as select from dd_drty_st_enum_values_int4 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_int4_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value INT4'
  key cast( enum.enumValue as abap.int4 )       as enumValue,
      _Text
}
```
