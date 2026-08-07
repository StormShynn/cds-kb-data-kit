---
name: I_REUSBLOBJARCHTRUSAGE
description: Reusblobjarchtrusage
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
# I_REUSBLOBJARCHTRUSAGE

**Reusblobjarchtrusage**

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
| `_REUsableObject` | `I_REUsableObject` | [1..1] |

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
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REArchitectureObjectUsageUUID',
            sapObjectNodeType.name: 'REUsblObjectArchitectureUsage',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'RE Usable Object Architecture Usage'
define view entity I_REUsblObjArchtrUsage 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
 
  association [1..1] to I_REUsableObject  as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REArchitectureObjectUsageUUID,
      @ObjectModel.foreignKey.association: '_REArchitectureObject'
      REArchitectureObjectUUID,
      @ObjectModel.foreignKey.association: '_REGenericRentalObject'
      REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,

      /* Associations */
      _REArchitectureObjectUsage._REArchitectureObject,
      _REGenericRentalObject,
      _REUsableObject
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'U'
```
