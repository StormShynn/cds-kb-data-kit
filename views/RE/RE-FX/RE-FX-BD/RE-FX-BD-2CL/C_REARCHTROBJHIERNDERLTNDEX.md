---
name: C_REARCHTROBJHIERNDERLTNDEX
description: Rearchtrobjhiernderltndex
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
# C_REARCHTROBJHIERNDERLTNDEX

**Rearchtrobjhiernderltndex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REArchitectureObjectRltnUUID` | ✓ | |  |  |
| `REArchitectureObjectOID` |  | |  |  |
| `REArchitectureObjectParentOID` |  | |  |  |
| `REArchitectureObjectUUID` |  | |  |  |
| `REArchitectureObjectNumber` |  | |  |  |
| `REArchitectureObjectName` |  | |  |  |
| `REArchitectureObjectType` |  | |  |  |
| `REArchitectureObjectTypeText` |  | |  |  |
| `REAuthorizationGroup` |  | |  |  |
| `REArchitectureObjectCategory` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction for Architect Obj Hierarchy'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectRltnUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjHierNdeRltnDEX     
  as select from I_REArchitectureObjectHNRltn



{
  key REArchitectureObjectRltnUUID,
    REArchitectureObjectOID,
    REArchitectureObjectParentOID,
    REArchitectureObjectUUID,
    REArchitectureObjectNumber,
    REArchitectureObjectName,
    REArchitectureObjectType,
    REArchitectureObjectTypeText,
    REAuthorizationGroup,
    REArchitectureObjectCategory,
    ValidityStartDate,
    ValidityEndDate
   
//    _REArchitectureObject._REArchitectureObjectType,
//    _REArchitectureObject._REAuthorizationGroup,
//    _REArchitectureObject,      
//    _Parent   
}
```
