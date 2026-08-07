---
name: I_RERNTBLARCHTROBJUSAGEMSMT
description: Rerntblarchtrobjusagemsmt
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
# I_RERNTBLARCHTROBJUSAGEMSMT

**Rerntblarchtrobjusagemsmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjMsmtUsageUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectUsageUUID` |  | |  |  |  |  |
| `REGenericRentalObjectType` |  | |  |  |  |  |
| `RealEstateRentableObjectUUID` |  | |  | `REGenericRentalObjectUUID` |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REMeasurementType` |  | |  |  |  |  |
| `REMeasurementUnit` |  | |  |  |  |  |
| `REMeasurementQuantity` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_REArchitectureObject` | | ✓ | | | | |
| `_REGenericRentalObject` | | ✓ | | | | |
| `_REMeasurementType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

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
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REArchitectureObjMsmtUsageUUID',
            sapObjectNodeType.name: 'RERntblObjArchtrObjUsgeMsmt',
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
@EndUserText.label: 'RE Arch Object Measurement Based Usage'
define view entity I_RERntblArchtrObjUsageMsmt as select from I_REArchtrObjUsageMeasurement
  association [1..1] to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
  key REArchitectureObjMsmtUsageUUID,
  REArchitectureObjectUsageUUID,
  REGenericRentalObjectType,
  REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
  REArchitectureObjectUUID,
  ValidityStartDate,
  ValidityEndDate,
  @ObjectModel.foreignKey.association: '_REMeasurementType'
  REMeasurementType,
  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  REMeasurementUnit,
  @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
  REMeasurementQuantity,
  

  /* Associations */
  _REArchitectureObject,
  _REGenericRentalObject,
  _REMeasurementType,
  _UnitOfMeasure,
  _RERentableObject
}
where
     REGenericRentalObjectType = 'R'
```
