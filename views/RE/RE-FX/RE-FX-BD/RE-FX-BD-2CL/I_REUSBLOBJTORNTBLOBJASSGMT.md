---
name: I_REUSBLOBJTORNTBLOBJASSGMT
description: Reusblobjtorntblobjassgmt
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
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSBLOBJTORNTBLOBJASSGMT

**Reusblobjtorntblobjassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REUsblObjToRntblAssgmtUUID` | ✓ | |  | `rouoassignuuid` |  |  |
| `RealEstateRentableObjectUUID` |  | |  | `rentableobjectuuid` |  |  |
| `RealEstateUsableObjectUUID` |  | |  | `usableobjectuuid` |  |  |
| `ValidityStartDate` |  | |  | `validfrom` |  |  |
| `ValidityEndDate` |  | |  | `validto` |  |  |
| `REIsAssignmentFromUsableObj` |  | |  | `assignmentfromusable` |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_RERentableObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [1..1] |
| `_RERentableObject` | `I_RERentableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Usable to Rentable Object Assignment'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REUsblObjToRntblObjAssignment'
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM.viewType: #BASIC

define view entity I_REUsblObjToRntblObjAssgmt
  as select from vigorouoassign
  association [1..1] to I_REUsableObject   as _REUsableObject   on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID

{
  key rouoassignuuid       as REUsblObjToRntblAssgmtUUID,
      rentableobjectuuid   as RealEstateRentableObjectUUID,
      usableobjectuuid     as RealEstateUsableObjectUUID,
      validfrom            as ValidityStartDate,
      validto              as ValidityEndDate,
      assignmentfromusable as REIsAssignmentFromUsableObj,

      /* Associations */
      _RERentableObject,
      _REUsableObject
}
where
  assignmentfromusable = 'X'
```
