---
name: C_REARCHTROBJTIMELINEDEX
description: "Rearchtrobjtimelinedex"
semantic_vi: "View C_REARCHTROBJTIMELINEDEX hiển thị một chỉ mục thời gian của đối tượng kiến trúc, cung cấp một hồ sơ lịch sử về trạng thái và hoạt động của chúng. Nó được sử dụng để theo dõi các thay đổi và cập nhật trạng thái của đối tượng kiến trúc theo thời gian."
keywords:
  - "architecture object"
  - "kiến trúc"
  - "đối tượng kiến trúc"
  - "timeline index"
  - "index thời gian"
  - "cập nhật trạng thái"
  - "thay đổi"
  - "sap cds"
  - "c_rearchtrobjtimelinedex"
semantic_en: "The C_REARCHTROBJTIMELINEDEX view exposes a timeline index of architecture objects, providing a historical record of their status and activity. It is used to track changes and status updates of architecture objects over time."
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REARCHTROBJTIMELINEDEX

**Rearchtrobjtimelinedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjTimelineUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REArchitectureObjectStatus` |  | |  |  |  |  |
| `REArchitectureObjectIsActive` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction for Architect Obj Timeline'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjTimelineUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
                                       
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjTimelineDEX     
  as select from I_REArchitectureObjectTimeline

{
    
  key REArchitectureObjTimelineUUID,
      REArchitectureObjectUUID,
      ValidityStartDate,
      ValidityEndDate,
      REArchitectureObjectStatus,
      REArchitectureObjectIsActive

//      _REArchitectureObject      
}
```
