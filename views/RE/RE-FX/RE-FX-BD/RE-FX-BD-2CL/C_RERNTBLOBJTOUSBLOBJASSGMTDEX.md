---
name: C_RERNTBLOBJTOUSBLOBJASSGMTDEX
description: Rerntblobjtousblobjassgmtdex
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
# C_RERNTBLOBJTOUSBLOBJASSGMTDEX

**Rerntblobjtousblobjassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RERntblObjToUsblObjAssgmtUUID` | ✓ | |  |  |  |  |
| `RealEstateRentableObjectUUID` |  | |  |  |  |  |
| `RealEstateUsableObjectUUID` |  | |  |  |  |  |
| `RealEstateUsableObjectNumber` |  | | `_REUsableObject` | `RealEstateUsableObjectNumber` |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_REUsableObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [0..1] |
| `_REUsableObject` | `I_REUsableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rentable to Usable Obj'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CRERNTBLTOUSBLASSGMTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
} 

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RERntblObjToUsblObjAssgmtUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjToUsblObjAssgmtDEX 
  as select from I_RERntblObjToUsblObjAssgmt
  association        to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
  association [1..1] to I_REUsableObject   as _REUsableObject   on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID

  
{
  key RERntblObjToUsblObjAssgmtUUID,
      RealEstateRentableObjectUUID,
      RealEstateUsableObjectUUID,
      _REUsableObject.RealEstateUsableObjectNumber as RealEstateUsableObjectNumber,
      ValidityEndDate,  
      ValidityStartDate,

      _RERentableObject,
      _REUsableObject
}
```
