---
name: C_REARCHTROBJUSAGEDEX
description: Rearchtrobjusagedex
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
# C_REARCHTROBJUSAGEDEX

**Rearchtrobjusagedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `REArchitectureObjectUUID` | `REArchitectureObjectUUID` |
| `REArchitectureObjectType` | `REArchitectureObjectType` |
| `InternalRealEstateNumber` | `InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `REArchitectureObjectOID` | `REArchitectureObjectOID` |
| `REArchitectureObjectNumber` | `REArchitectureObjectNumber` |
| `REArchtrObjectAlternativeID` | `REArchtrObjectAlternativeID` |
| `REArchitectureObjectName` | `REArchitectureObjectName` |
| `REIdentificationKey` | `REIdentificationKey` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REAuthorizationGroup` | `REAuthorizationGroup` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction for Architecture Object Usage'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800
 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjUsageDEX 
  as select from I_REArchitectureObject

{
  key REArchitectureObjectUUID,
      REArchitectureObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      REArchitectureObjectOID,
      REArchitectureObjectNumber,
      REArchtrObjectAlternativeID,
      REArchitectureObjectName,
      REIdentificationKey,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime

//      _REArchitectureObjectType,
//      _REAuthorizationGroup,
//      _REKeyAssgmt,
//      _StatusObject,
//      _Text
}
```
