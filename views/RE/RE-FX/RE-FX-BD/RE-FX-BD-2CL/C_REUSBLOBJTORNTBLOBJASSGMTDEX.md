---
name: C_REUSBLOBJTORNTBLOBJASSGMTDEX
description: Reusblobjtorntblobjassgmtdex
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
# C_REUSBLOBJTORNTBLOBJASSGMTDEX

**Reusblobjtorntblobjassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `REUsblObjToRntblAssgmtUUID` | `REUsblObjToRntblAssgmtUUID` |
| `RealEstateRentableObjectUUID` | `RealEstateRentableObjectUUID` |
| `RealEstateUsableObjectUUID` | `RealEstateUsableObjectUUID` |
| `RealEstateRentableObjectNumber` | `_RERentableObject.RealEstateRentableObjectNumber` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `REIsAssignmentFromUsableObj` | `REIsAssignmentFromUsableObj` |
| `_REUsableObject` | *Association* |
| `_RERentableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extractor for RE Usbl to Rentable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLTORNTBLASSGMTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REUsblObjToRntblAssgmtUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjToRntblObjAssgmtDEX 
  as select from I_REUsblObjToRntblObjAssgmt as _REUsblObjToRntblObjAssgmt
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REUsblObjToRntblAssgmtUUID,
      RealEstateRentableObjectUUID,
      RealEstateUsableObjectUUID,
      _RERentableObject.RealEstateRentableObjectNumber as RealEstateRentableObjectNumber,

      ValidityEndDate,
      ValidityStartDate,
      REIsAssignmentFromUsableObj,

      _RERentableObject,
      _REUsableObject
}
where
  REIsAssignmentFromUsableObj = 'X'
```
