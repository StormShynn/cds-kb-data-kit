---
name: D_LGLDOCCREATEFILEFROMVRTLDOCP
description: D Lgldoccreatefilefromvrtldocp
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - component:CM-DOC-2CL
  - lob:Other
---
# D_LGLDOCCREATEFILEFROMVRTLDOCP

**D Lgldoccreatefilefromvrtldocp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LglCntntMDocFileFrmt` |  | |  | `lcm_doc_dms_file_format` |

## Source Code

```abap
@EndUserText.label: 'Legal Doc Create File From Virtual Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglDocCreateFileFromVrtlDocP
{
  LglCntntMDocFileFrmt : lcm_doc_dms_file_format;
}
```
