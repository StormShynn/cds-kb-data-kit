---
name: I_RERNTBLOBJECTMEASUREMENT
description: "Rerntblobjectmeasurement"
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
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_RERNTBLOBJECTMEASUREMENT

**Rerntblobjectmeasurement**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateRentableObjectUUID` | ✓ | | `_RERentableObjectData` | `RealEstateRentableObjectUUID` |  |  |
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
| `_RERentableObject` | | ✓ | | | | |

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
            representativeKey: 'InternalRealEstateNumber',
            semanticKey: [ 'InternalRealEstateNumber' ],
            sapObjectNodeType.name: 'RERentableObjectMeasurement',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'Real Estate Rentable Object Measurement'
define view entity I_RERntblObjectMeasurement 
  as select from I_REMeasurement    as _REMeasurement
    inner join   I_RERentableObject as _RERentableObjectData on _RERentableObjectData.InternalRealEstateNumber = _REMeasurement.InternalRealEstateNumber
  
  association [1..1] to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
      @ObjectModel.foreignKey.association: '_RERentableObject'
  key _RERentableObjectData.RealEstateRentableObjectUUID,
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
      _RERentableObject
}
```
