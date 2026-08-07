---
name: I_RERNTBLOBJTOUSBLOBJASSGMT
description: Rerntblobjtousblobjassgmt
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
# I_RERNTBLOBJTOUSBLOBJASSGMT

**Rerntblobjtousblobjassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RERntblObjToUsblObjAssgmtUUID` | ✓ | |  | `rouoassignuuid` |
| `RealEstateRentableObjectUUID` |  | |  | `rentableobjectuuid` |
| `RealEstateUsableObjectUUID` |  | |  | `usableobjectuuid` |
| `ValidityStartDate` |  | |  | `validfrom` |
| `ValidityEndDate` |  | |  | `validto` |
| `_RERentableObject` | | ✓ | | |
| `_REUsableObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [1..1] |
| `_REUsableObject` | `I_REUsableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Rentable to Usable Object Assignment'


@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #A,
                        sizeCategory: #L
            },
            representativeKey: 'RERntblObjToUsblObjAssgmtUUID',
            sapObjectNodeType.name: 'RERntblObjToUsblObjAssignment',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC

@Analytics.internalName:#LOCAL
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true
//        delta.changeDataCapture: {
//        automatic: true
//        }
    }
}

define view entity I_RERntblObjToUsblObjAssgmt
  as select from vigorouoassign
  association [1..1] to I_RERentableObject           as _RERentableObject           on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
  association [1..1] to I_REUsableObject             as _REUsableObject             on $projection.RealEstateUsableObjectUUID   = _REUsableObject.RealEstateUsableObjectUUID
  
{
  key rouoassignuuid     as RERntblObjToUsblObjAssgmtUUID,
      rentableobjectuuid as RealEstateRentableObjectUUID,
      usableobjectuuid   as RealEstateUsableObjectUUID,
      validfrom          as ValidityStartDate,
      validto            as ValidityEndDate,

      /* Associations */
      _RERentableObject,
      _REUsableObject

} where assignmentfromusable = ' '
```
