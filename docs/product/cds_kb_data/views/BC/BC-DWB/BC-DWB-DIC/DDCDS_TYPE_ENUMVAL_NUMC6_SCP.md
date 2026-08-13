---
name: DDCDS_TYPE_ENUMVAL_NUMC6_SCP
description: "Ddcds Type Enumval Numc 6 Scp"
semantic_vi: "Chỉ ra các giá trị liệt kê cho một loại cụ thể với độ dài số là 6. Sử dụng trong các thành phần cơ bản của SAP cho định nghĩa và xác thực dữ liệu."
keywords:
  - "sap basis components"
  - "data definition"
  - "validation"
  - "enumeration"
  - "type"
  - "numeric length"
  - "ddcds"
  - "enumval"
  - "scp"
  - "bcdwbdic"
  - "basis components"
semantic_en: "Exposes enumeration values for a specific type with a numeric length of 6. Used in SAP Basis Components for data definition and validation."
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
# DDCDS_TYPE_ENUMVAL_NUMC6_SCP

**Ddcds Type Enumval Numc 6 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.numc(6) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values NUMC6'
define view entity ddcds_type_enumval_numc6_scp
  as select from dd_drty_st_enum_values_numc_6 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_numc6_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Numc 6'
  key cast( enum.enumValue as abap.numc(6) )       as enumValue,
      _Text
}
```
