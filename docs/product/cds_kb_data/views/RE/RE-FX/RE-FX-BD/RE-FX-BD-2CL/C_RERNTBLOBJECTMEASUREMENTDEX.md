---
name: C_RERNTBLOBJECTMEASUREMENTDEX
description: "Rerntblobjectmeasurementdex"
semantic_vi: "Chứa dữ liệu đo lường đối tượng cho thuê bất động sản, bao gồm loại đo lường, số lượng và đơn vị, trong một khoảng thời gian cụ thể. View này được sử dụng để trích xuất và phân tích dữ liệu đo lường đối tượng cho thuê."
keywords:
  - "rentable object"
  - "đối tượng cho thuê"
  - "data extraction"
  - "trích xuất dữ liệu"
  - "real estate"
  - "bất động sản"
  - "measurement data"
  - "dữ liệu đo lường"
  - "sap cds view"
  - "view dữ liệu sap"
semantic_en: "Exposes real estate rentable object measurement data, including measurement types, quantities, and units, for a specific time period. This view is used to extract and analyze rentable object measurement data."
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
