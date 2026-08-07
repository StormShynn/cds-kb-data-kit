---
name: I_RERNTBLOBJECTSTATUSOBJECT
description: Rerntblobjectstatusobject
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
  - status
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_RERNTBLOBJECTSTATUSOBJECT

**Rerntblobjectstatusobject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateRentableObjectUUID` | ✓ | |  | `REGenericRentalObjectUUID` |  |  |
| `StatusProfile` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `InternalRealEstateNumber` |  | | `_RERentableObject` | `InternalRealEstateNumber` |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `IsUserStatus` |  | |  |  |  |  |
| `StatusIsInactive` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MIXED,
                        serviceQuality: #C,
                        sizeCategory: #XL
            },
            representativeKey: 'StatusCode',
            sapObjectNodeType.name: 'RERentableObjectStatusObject',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'RE Rentable Object Status Object'
define view entity I_RERntblObjectStatusObject 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj

  association [1..1] to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
      @ObjectModel.foreignKey.association: '_RERentableObject'
  key REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
      @ObjectModel.foreignKey.association: '_StatusProfile'
  key StatusProfile,
  key StatusCode,
      _RERentableObject.InternalRealEstateNumber,

      REStatusObject,
      IsUserStatus,
      StatusIsInactive,
      /* Associations */
      _StatusCode,
      _StatusProfile,
      _RERentableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'R'
```
