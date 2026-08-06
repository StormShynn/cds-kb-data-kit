---
name: C_RERNTBLOBJECTSTATUSOBJECTDEX
description: Rerntblobjectstatusobjectdex
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
  - status
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_RERNTBLOBJECTSTATUSOBJECTDEX

**Rerntblobjectstatusobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RealEstateRentableObjectUUID` | `REGenericRentalObjectUUID` |
| key `StatusProfile` | `StatusProfile` |
| key `StatusCode` | `StatusCode` |
| `InternalRealEstateNumber` | `_RERentableObject.InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `IsUserStatus` | `IsUserStatus` |
| `StatusIsInactive` | `StatusIsInactive` |
| `_RERentableObject` | *Association* |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rentable Obj Status Obj'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CRERNTBLOBJSTATUSOBJECTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjectStatusObjectDEX 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj
    association to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
  
{
  key REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
  key StatusProfile,
  key StatusCode,
      _RERentableObject.InternalRealEstateNumber,
      REStatusObject,
      IsUserStatus,
      StatusIsInactive,

      _StatusCode,
      _StatusProfile,
      _RERentableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'R'
```
