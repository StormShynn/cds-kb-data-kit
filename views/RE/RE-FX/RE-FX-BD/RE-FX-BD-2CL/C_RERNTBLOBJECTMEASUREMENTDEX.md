---
name: C_RERNTBLOBJECTMEASUREMENTDEX
description: Rerntblobjectmeasurementdex
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
# C_RERNTBLOBJECTMEASUREMENTDEX

**Rerntblobjectmeasurementdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateRentableObjectUUID` | ✓ | | `_RERentableObject` | `RealEstateRentableObjectUUID` |  |  |
| `InternalRealEstateNumber` | ✓ | | `_REMeasurement` | `InternalRealEstateNumber` |  |  |
| `REMeasurementType` | ✓ | | `_REMeasurement` | `REMeasurementType` |  |  |
| `ValidityEndDate` | ✓ | | `_REMeasurement` | `ValidityEndDate` |  |  |
| `ValidityStartDate` |  | | `_REMeasurement` | `ValidityStartDate` |  |  |
| `REMeasurementIsTotal` |  | | `_REMeasurement._REMeasurementType` | `REMeasurementIsTotal` |  |  |
| `REMeasurementUnit` |  | | `_REMeasurement` | `REMeasurementUnit` |  |  |
| `REMeasurementQuantity` |  | | `_REMeasurement` | `REMeasurementQuantity` |  |  |
| `REMaximumMeasurementQuantity` |  | | `_REMeasurement` | `REMaximumMeasurementQuantity` |  |  |
| `_REMeasurementType` |  | | `_REMeasurement` | `_REMeasurementType` |  |  |
| `_UnitOfMeasure` |  | | `_REMeasurement` | `_UnitOfMeasure` |  |  |
| `_REGenericRentalObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REGenericRentalObject` | `I_REGenericRentalObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rntbl Obj Measurement'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CRERNTBLOBJECTMEASUREMENTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjectMeasurementDEX 
  as select from I_REMeasurement as _REMeasurement
    inner join   I_RERentableObject as _RERentableObject on _RERentableObject.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  association    to I_REGenericRentalObject as _REGenericRentalObject on $projection.RealEstateRentableObjectUUID = _REGenericRentalObject.REGenericRentalObjectUUID

{
  key _RERentableObject.RealEstateRentableObjectUUID,
  key _REMeasurement.InternalRealEstateNumber,
  key _REMeasurement.REMeasurementType,
  key _REMeasurement.ValidityEndDate                        as ValidityEndDate,
      _REMeasurement.ValidityStartDate,
      _REMeasurement._REMeasurementType.REMeasurementIsTotal,
      _REMeasurement.REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMeasurementQuantity,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMaximumMeasurementQuantity,

      _REGenericRentalObject,
      _REMeasurement._REMeasurementType                      as _REMeasurementType,
      _REMeasurement._UnitOfMeasure                          as _UnitOfMeasure

    
}
```
