---
name: DDCDS_TYPE_ENUMVAL_NUMC3_SCP
description: "Ddcds Type Enumval Numc 3 Scp"
semantic_vi: "View DDCDS_TYPE_ENUMVAL_NUMC3_SCP hiển thị dữ liệu liên quan đến giá trị danh mục với loại số 3 trong Dữ liệu Dictionary của SAP. Nó có thể được sử dụng để lấy hoặc chỉnh sửa các giá trị này trong các ứng dụng ABAP hoặc dựa trên đám mây."
keywords:
  - "sap data dictionary"
  - "ddcds"
  - "enum value"
  - "numeric type"
  - "ddcds type enumval numc 3 scp"
  - "ddcds type"
  - "enumval"
  - "numc 3"
  - "scp"
  - "sap basis components"
  - "basis components"
  - "component bc-dwb-dic"
semantic_en: "The DDCDS_TYPE_ENUMVAL_NUMC3_SCP view exposes data related to enumeration values with numeric type 3 in the SAP Data Dictionary. It can be used to retrieve or manipulate these values in ABAP or cloud-based applications."
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
# DDCDS_TYPE_ENUMVAL_NUMC3_SCP

**Ddcds Type Enumval Numc 3 Scp**

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
| `enumValue` | ✓ | |  | `cast( enum.enumValue as abap.numc(3) )` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values NUMC3'
define view entity ddcds_type_enumval_numc3_scp
  as select from dd_drty_st_enum_values_numc_3 as enum
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum.simpleType
  composition [0..*] of ddcds_type_enumval_numc3_t_scp as _Text
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value Numc 3'
  key cast( enum.enumValue as abap.numc(3) )       as enumValue,
      _Text
}
```
