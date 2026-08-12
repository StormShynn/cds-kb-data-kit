---
name: I_RERNTBLARCHTROBJUSAGEMSMT
description: "Rerntblarchtrobjusagemsmt"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_RERNTBLARCHTROBJUSAGEMSMT

**Rerntblarchtrobjusagemsmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
