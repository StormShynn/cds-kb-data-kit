---
name: I_RERNTBLOBJARCHTRUSAGE
description: "Rerntblobjarchtrusage"
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
# I_RERNTBLOBJARCHTRUSAGE

**Rerntblobjarchtrusage**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectUsageUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `RealEstateRentableObjectUUID` |  | |  | `REGenericRentalObjectUUID` |  |  |
| `REArchitectureObjectType` |  | | `_REArchitectureObject` | `REArchitectureObjectType` |  |  |
| `REArchitectureObjectNumber` |  | | `_REArchitectureObject` | `REArchitectureObjectNumber` |  |  |
| `REArchitectureObjectOID` |  | | `_REArchitectureObject` | `REArchitectureObjectOID` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REArchtrObjUsageIsMsmtBased` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_REArchitectureObject` | | ✓ | | | | |
| `_REGenericRentalObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.allowExtensions:true

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REArchitectureObjectUsageUUID',
            sapObjectNodeType.name: 'RERntblObjectArchitectureUsage',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'RE Rentable Object Architecture Usage'
define view entity I_RERntblObjArchtrUsage
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage

  association [1..1] to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
  key REArchitectureObjectUsageUUID,
      @ObjectModel.foreignKey.association: '_REArchitectureObject'
      REArchitectureObjectUUID,
      @ObjectModel.foreignKey.association: '_REGenericRentalObject'
      REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
      _REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
      REArchtrObjUsageIsMsmtBased,

      /* Associations */
      _REArchitectureObject,
      _REGenericRentalObject,
      _RERentableObject
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'R'
```
