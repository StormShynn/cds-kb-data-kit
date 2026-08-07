---
name: C_REUSBLOBJECTSTATUSOBJECTDEX
description: "Reusblobjectstatusobjectdex"
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
# C_REUSBLOBJECTSTATUSOBJECTDEX

**Reusblobjectstatusobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateUsableObjectUUID` | ✓ | |  | `REGenericRentalObjectUUID` |  |  |
| `StatusProfile` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `InternalRealEstateNumber` |  | | `_REUsableObject` | `InternalRealEstateNumber` |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `IsUserStatus` |  | |  |  |  |  |
| `StatusIsInactive` |  | |  |  |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usable Obj Status Obj'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLOBJSTATUSOBJDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
//@ObjectModel.representativeKey: 'StatusCode'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjectStatusObjectDEX 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj
  association to I_REUsableObject as _REUsableObject on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
  key StatusProfile,
  key StatusCode,
      _REUsableObject.InternalRealEstateNumber,
      REStatusObject,
      IsUserStatus,
      StatusIsInactive,

      _StatusCode,
      _StatusProfile,
      _REUsableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'U'
```
