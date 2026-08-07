---
name: C_REUSBLOBJARCHTRUSAGEDEX
description: Reusblobjarchtrusagedex
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
# C_REUSBLOBJARCHTRUSAGEDEX

**Reusblobjarchtrusagedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REArchitectureObjectUsageUUID` | ✓ | |  |  |
| `REArchitectureObjectUUID` |  | |  |  |
| `RealEstateUsableObjectUUID` |  | |  | `REGenericRentalObjectUUID` |
| `REArchitectureObjectType` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectType` |
| `REArchitectureObjectNumber` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectNumber` |
| `REArchitectureObjectOID` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectOID` |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `_REUsableObject` | | ✓ | | |
| `_REGenericRentalObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usbl Obj Archtr Usage'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUsageUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L



define view entity C_REUsblObjArchtrUsageDEX 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID

{
  key REArchitectureObjectUsageUUID,
      REArchitectureObjectUUID,
      REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
    
      _REArchitectureObjectUsage._REArchitectureObject,
      _REGenericRentalObject,
      _REUsableObject
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'U'
```
