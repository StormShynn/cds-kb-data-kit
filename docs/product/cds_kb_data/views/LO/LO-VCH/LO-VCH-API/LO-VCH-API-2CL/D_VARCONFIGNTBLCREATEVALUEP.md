---
name: D_VARCONFIGNTBLCREATEVALUEP
description: "D Varconfigntblcreatevaluep"
semantic_vi: "View D_VARCONFIGNTBLCREATEVALUEP hiển thị dữ liệu cấu hình cho các đặc tính biến trong bảng. Nó được sử dụng để tạo hoặc cập nhật giá trị cho các đặc tính này."
keywords:
  - "variable characteristic"
  - "dặc tính biến"
  - "configuration data"
  - "cấu hình dữ liệu"
  - "sap cds"
  - "cds view"
  - "lo-vch-api-2cl"
  - "logistics general"
  - "lob logistics general"
  - "characteristic value"
  - "giá trị đặc tính"
semantic_en: "The D_VARCONFIGNTBLCREATEVALUEP view exposes configuration data for variable characteristics in a table. It is used to create or update values for these characteristics."
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# D_VARCONFIGNTBLCREATEVALUEP

**D Varconfigntblcreatevaluep**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarConfignTblLineNumber` |  | |  | `vtlin` |  |  |
| `ChangeNumber` |  | |  | `aennr` |  |  |
| `Characteristic` |  | |  | `atnam` |  |  |
| `CharcValue` |  | |  | `atwrt` |  |  |
| `CharcFromNumericValue` |  | |  | `atflv` |  |  |
| `CharcToNumericValue` |  | |  | `atflb` |  |  |
| `CharcValueIntervalType` |  | |  | `atcod` |  |  |
| `CharcFromNumericValueUnit` |  | |  | `msehi` |  |  |
| `CharcToNumericValueUnit` |  | |  | `msehi` |  |  |
| `VarConfignTblAnyValueIsAllowed` |  | |  | `boole_d` |  |  |

## Source Code

```abap
@EndUserText.label: 'Abs. Entity for Line with Values param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_VarConfignTblCreateValueP
{
  VarConfignTblLineNumber        : vtlin;
  ChangeNumber                   : aennr;
  Characteristic                 : atnam;
  CharcValue                     : atwrt;
  CharcFromNumericValue          : atflv;
  CharcToNumericValue            : atflb;
  CharcValueIntervalType         : atcod;
  CharcFromNumericValueUnit      : msehi;
  CharcToNumericValueUnit        : msehi;
  VarConfignTblAnyValueIsAllowed : boole_d;
}
```
