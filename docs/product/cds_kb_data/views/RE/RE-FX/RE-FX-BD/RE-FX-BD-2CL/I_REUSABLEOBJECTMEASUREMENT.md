---
name: I_REUSABLEOBJECTMEASUREMENT
description: "Reusableobjectmeasurement"
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
# I_REUSABLEOBJECTMEASUREMENT

**Reusableobjectmeasurement**

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
| `RealEstateUsableObjectUUID` | ✓ | | `_REUsableObjectData` | `RealEstateUsableObjectUUID` |  |  |
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
| `_REUsableObject` | | ✓ | | | | |

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
