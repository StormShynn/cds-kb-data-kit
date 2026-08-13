---
name: DDCDS_TYPE_ENUMVAL_NUMC8_SCP
description: "Ddcds Type Enumval Numc 8 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_NUMC8_SCP hiển thị dữ liệu về giá trị liệt kê cho trường số có độ dài 8 ký tự trong SAP. Nó được sử dụng để truy cập và chỉnh sửa các giá trị này trong phát triển ABAP và đám mây."
keywords:
  - "sap"
  - "ddcds"
  - "enumval"
  - "numc8"
  - "scp"
  - "abap"
  - "cloud"
  - "development"
  - "basis"
  - "components"
  - "enumeration"
  - "values"
semantic_en: "The DDCDS_TYPE_ENUMVAL_NUMC8_SCP view exposes data about enumeration values for numeric fields with a length of 8 characters in SAP systems. It is used to access and manipulate these values in ABAP and cloud development."
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
# DDCDS_TYPE_ENUMVAL_NUMC8_SCP

**Ddcds Type Enumval Numc 8 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.numc(8) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values NUMC8'
define view entity ddcds_type_enumval_numc8_scp
  as select from dd_drty_st_enum_values_numc_8 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_numc8_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Numc 8'
  key cast( enum.enumValue as abap.numc(8) )       as enumValue,
      _Text
}
```
