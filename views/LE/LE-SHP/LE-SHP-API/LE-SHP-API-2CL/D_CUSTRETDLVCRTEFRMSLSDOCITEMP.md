---
name: D_CUSTRETDLVCRTEFRMSLSDOCITEMP
description: D Custretdlvcrtefrmslsdocitemp
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_CUSTRETDLVCRTEFRMSLSDOCITEMP

**D Custretdlvcrtefrmslsdocitemp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocument` |  | |  | `vbeln` |  |  |
| `ReferenceSDDocumentItem` |  | |  | `posnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crte Frm Sls Doc Item P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetDlvCrteFrmSlsDocItemP {
    ReferenceSDDocument : vbeln;
    ReferenceSDDocumentItem : posnr;
}
```
