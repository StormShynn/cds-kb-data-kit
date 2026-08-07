---
name: C_REARCHTROBJTIMELINEDEX
description: Rearchtrobjtimelinedex
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REArchitectureObjTimelineUUID` | ✓ | |  |  |
| `REArchitectureObjectUUID` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `REArchitectureObjectStatus` |  | |  |  |
| `REArchitectureObjectIsActive` |  | |  |  |

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
