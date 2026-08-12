---
name: D_VARCONFIGNTBLCNTNTCRTELINEP
description: "D Varconfigntblcntntcrtelinep"
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
# D_VARCONFIGNTBLCNTNTCRTELINEP

**D Varconfigntblcntntcrtelinep**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarConfignTblTgtLinePosition` |  | |  | `vtlin` |  |  |
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
define abstract entity D_VarConfignTblCntntCrteLineP
{
  VarConfignTblTgtLinePosition   : vtlin;
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
