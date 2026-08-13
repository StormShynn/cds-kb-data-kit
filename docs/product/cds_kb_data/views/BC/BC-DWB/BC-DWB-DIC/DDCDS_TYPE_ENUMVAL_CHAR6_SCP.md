---
name: DDCDS_TYPE_ENUMVAL_CHAR6_SCP
description: "Ddcds Type Enumval Char 6 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_CHAR6_SCP trong cơ sở dữ liệu CDS hiển thị một loại giá trị danh mục với độ dài ký tự 6, được sử dụng trong các thành phần cơ sở của SAP. Nó được sử dụng khi làm việc với giá trị danh mục trong các ứng dụng SAP."
keywords:
  - "sap"
  - "basis components"
  - "ddcds"
  - "enumval"
  - "character"
  - "length"
  - "enumeration"
  - "value"
  - "sap basis"
  - "ddcds type"
  - "enumval char 6"
  - "sap application"
semantic_en: "The DDCDS_TYPE_ENUMVAL_CHAR6_SCP CDS view exposes a type of enumeration value with a character length of 6, which is used in SAP Basis Components. It is used when working with enumeration values in SAP applications."
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
# DDCDS_TYPE_ENUMVAL_CHAR6_SCP

**Ddcds Type Enumval Char 6 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.char(6) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values CHAR6'
define view entity ddcds_type_enumval_char6_scp
  as select from dd_drty_st_enum_values_char_6 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_char6_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Char 6'
  key cast( enum.enumValue as abap.char(6) )       as enumValue,
      _Text
}
```
