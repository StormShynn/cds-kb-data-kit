---
name: C_REARCHTROBJUSGEMSMTDEX
description: "Rearchtrobjusgemsmtdex"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# C_REARCHTROBJUSGEMSMTDEX

**Rearchtrobjusgemsmtdex**

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
| `REGenericRentalObjectUUID` |  | |  |  |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REMeasurementType` |  | |  |  |  |  |
| `REMeasurementUnit` |  | |  |  |  |  |
| `REMeasurementQuantity` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction Arch Object Meas Based Usage'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjMsmtUsageUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjUsgeMsmtDEX     
  as select from I_REArchtrObjUsageMeasurement

{
  key REArchitectureObjMsmtUsageUUID,
      REArchitectureObjectUsageUUID,
      REGenericRentalObjectType,
      REGenericRentalObjectUUID,
      REArchitectureObjectUUID,
      ValidityStartDate,
      ValidityEndDate,
      REMeasurementType,
      REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      REMeasurementQuantity

//      _REArchitectureObject,
//      _REGenericRentalObject,
//      _REMeasurementType,
//      _UnitOfMeasure
}
```
