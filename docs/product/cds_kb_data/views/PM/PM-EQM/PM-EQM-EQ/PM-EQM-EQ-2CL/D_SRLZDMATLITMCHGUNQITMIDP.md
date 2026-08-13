---
name: D_SRLZDMATLITMCHGUNQITMIDP
description: "D Srlzdmatlitmchgunqitmidp"
semantic_vi: "Chứa thông tin thay đổi của vật tư thiết bị trong bối cảnh bảo trì nhà máy, hữu ích cho việc theo dõi và phân tích thay đổi của vật tư thiết bị."
keywords:
  - "equipment maintenance"
  - "plant maintenance"
  - "equipment item"
  - "change management"
  - "pm-eqm"
  - "pm-eqm-eq"
  - "equipment change"
  - "vật tư thiết bị"
  - "bảo trì nhà máy"
  - "thay đổi vật tư thiết bị"
semantic_en: "Exposes equipment maintenance item changes in a plant maintenance context, useful for tracking and analyzing changes to equipment items."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_SRLZDMATLITMCHGUNQITMIDP

**D Srlzdmatlitmchgunqitmidp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UniqueItemIdentifier` |  | |  | `vdm_uii_char72` |  |  |

## Source Code

```abap
@EndUserText.label: 'Change UII Action Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrlzdMatlItmChgUnqItmIdP
{
  @EndUserText.label   : 'Unique Item Identifier'
  UniqueItemIdentifier : vdm_uii_char72;
}
```
