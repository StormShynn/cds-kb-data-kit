---
name: D_BOMDELCHANGENOOUTPARAMETER
description: "D Bomdelchangenooutparameter"
semantic_vi: "View này hiển thị các số thay đổi trong quá trình xóa BOM mà không có tham số đầu ra, hữu ích cho việc theo dõi các thay đổi trong quá trình xóa BOM."
keywords:
  - "bom"
  - "bom deletion"
  - "change number"
  - "output parameter"
  - "logistics"
  - "lo"
  - "lo-md-bom"
  - "sap"
  - "cds view"
semantic_en: "This view exposes BOM deletion change numbers without output parameters, useful for tracking changes in BOM deletion processes."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMDELCHANGENOOUTPARAMETER

**D Bomdelchangenooutparameter**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOMIsSuccessfulDeleted` |  | |  | `boolean` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'BOM deletion with change number result'
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE      
 }
define abstract entity D_BOMDelChangeNoOutParameter {
  //  DeletionStatus : abap.string( 256 ),
    BOMIsSuccessfulDeleted :  boolean;   
}
```
