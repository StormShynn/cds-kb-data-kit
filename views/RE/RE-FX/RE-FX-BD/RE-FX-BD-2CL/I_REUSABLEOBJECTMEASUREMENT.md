---
name: I_REUSABLEOBJECTMEASUREMENT
description: Reusableobjectmeasurement
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
# I_REUSABLEOBJECTMEASUREMENT

**Reusableobjectmeasurement**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RealEstateUsableObjectUUID` | ✓ | | `_REUsableObjectData` | `RealEstateUsableObjectUUID` |
| `InternalRealEstateNumber` | ✓ | | `_REMeasurement` | `InternalRealEstateNumber` |
| `REMeasurementType` | ✓ | | `_REMeasurement` | `REMeasurementType` |
| `ValidityEndDate` | ✓ | | `_REMeasurement` | `ValidityEndDate` |
| `ValidityStartDate` |  | | `_REMeasurement` | `ValidityStartDate` |
| `REMeasurementIsTotal` |  | | `_REMeasurement._REMeasurementType` | `REMeasurementIsTotal` |
| `REMeasurementUnit` |  | | `_REMeasurement` | `REMeasurementUnit` |
| `REMeasurementQuantity` |  | | `_REMeasurement` | `REMeasurementQuantity` |
| `REMaximumMeasurementQuantity` |  | | `_REMeasurement` | `REMaximumMeasurementQuantity` |
| `_REMeasurementType` |  | | `_REMeasurement` | `_REMeasurementType` |
| `_UnitOfMeasure` |  | | `_REMeasurement` | `_UnitOfMeasure` |
| `_REUsableObject` | | ✓ | | |

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
            representativeKey: 'InternalRealEstateNumber',
            sapObjectNodeType.name: 'REUsableObjectMeasurement',
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
@EndUserText.label: 'Real Estate Usable Object Measurement'
define view entity I_REUsableObjectMeasurement
  as select from I_REMeasurement  as _REMeasurement
    inner join   I_REUsableObject as _REUsableObjectData on _REUsableObjectData.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  
  association [1..1] to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
      @ObjectModel.foreignKey.association: '_REUsableObject'
  key _REUsableObjectData.RealEstateUsableObjectUUID,
  key _REMeasurement.InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_REMeasurementType'
  key _REMeasurement.REMeasurementType,
      @Semantics.businessDate.to: true
  key _REMeasurement.ValidityEndDate,
      @Semantics.businessDate.from: true
      _REMeasurement.ValidityStartDate,
      _REMeasurement._REMeasurementType.REMeasurementIsTotal,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      _REMeasurement.REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMeasurementQuantity,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      _REMeasurement.REMaximumMeasurementQuantity,

      /* Associations */
      _REMeasurement._REMeasurementType                      as _REMeasurementType,
      _REMeasurement._UnitOfMeasure                          as _UnitOfMeasure,
      _REUsableObject
}
```
