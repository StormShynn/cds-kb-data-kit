---
name: DDCDS_TYPE_ENUMVAL_CHAR1_SCP
description: "Ddcds Type Enumval Char 1 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR1_SCP hiển thị dữ liệu liên quan đến loại dữ liệu dictionary SAP enum với độ dài ký tự 1, có thể được sử dụng khi làm việc với loại dữ liệu SAP và các thuộc tính của chúng."
keywords:
  - "sap"
  - "data dictionary"
  - "enum"
  - "data type"
  - "character length"
  - "ddcds"
  - "sap data types"
  - "sap properties"
  - "sap data dictionary"
  - "sap enum values"
  - "sap type enumval char 1 scp"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR1_SCP view exposes data related to SAP data dictionary type enum values with character length 1, which can be used when working with SAP data types and their properties."
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
# DDCDS_TYPE_ENUMVAL_CHAR1_SCP

**Ddcds Type Enumval Char 1 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.char(1) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR1'
define view entity ddcds_type_enumval_char1_scp
  as select from dd_drty_st_enum_values_char_1 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_char1_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 1'
  key cast( enum.enumValue as abap.char(1) )       as enumValue,
      _Text
}
```
