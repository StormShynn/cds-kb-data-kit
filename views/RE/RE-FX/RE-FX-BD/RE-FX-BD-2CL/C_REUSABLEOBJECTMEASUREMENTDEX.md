---
name: C_REUSABLEOBJECTMEASUREMENTDEX
description: Reusableobjectmeasurementdex
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
# C_REUSABLEOBJECTMEASUREMENTDEX

**Reusableobjectmeasurementdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RealEstateUsableObjectUUID` | `_REUsableObjectData.RealEstateUsableObjectUUID` |
| key `InternalRealEstateNumber` | `_REMeasurement.InternalRealEstateNumber` |
| key `REMeasurementType` | `_REMeasurement.REMeasurementType` |
| key `ValidityEndDate` | `_REMeasurement.ValidityEndDate` |
| `ValidityStartDate` | `_REMeasurement.ValidityStartDate` |
| `REMeasurementIsTotal` | `_REMeasurement._REMeasurementType.REMeasurementIsTotal` |
| `REMeasurementUnit` | `_REMeasurement.REMeasurementUnit` |
| `REMeasurementQuantity` | `_REMeasurement.REMeasurementQuantity` |
| `REMaximumMeasurementQuantity` | `_REMeasurement.REMaximumMeasurementQuantity` |
| `_REMeasurementType` | `_REMeasurement._REMeasurementType` |
| `_UnitOfMeasure` | `_REMeasurement._UnitOfMeasure` |
| `_REUsableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usable Obj Measurement'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSABLEOBJMEASUREMENTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsableObjectMeasurementDEX 
  as select from I_REMeasurement  as _REMeasurement
    inner join   I_REUsableObject as _REUsableObjectData on _REUsableObjectData.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key _REUsableObjectData.RealEstateUsableObjectUUID,
  key _REMeasurement.InternalRealEstateNumber,
  key _REMeasurement.REMeasurementType,
  key _REMeasurement.ValidityEndDate                         as ValidityEndDate,
      _REMeasurement.ValidityStartDate,
      _REMeasurement._REMeasurementType.REMeasurementIsTotal,
      _REMeasurement.REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMeasurementQuantity,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMaximumMeasurementQuantity,

      _REUsableObject,
      _REMeasurement._REMeasurementType                      as _REMeasurementType,
      _REMeasurement._UnitOfMeasure                          as _UnitOfMeasure

    
}
```
