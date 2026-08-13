---
name: C_REARCHTROBJUSGEMSMTDEX
description: "Rearchtrobjusgemsmtdex"
semantic_vi: "Chỉ ra dữ liệu đo lường cho các đối tượng kiến trúc, bao gồm thông tin sử dụng và cho thuê, trong các khoảng thời gian khác nhau. CDS này hữu ích cho việc phân tích và báo cáo về đo lường đối tượng kiến trúc."
keywords:
  - "architecture object"
  - "kiến trúc"
  - "dữ liệu đo lường"
  - "sử dụng"
  - "cho thuê"
  - "thời gian"
  - "kiểm kê"
  - "công cụ đo lường"
semantic_en: "Exposes measurement data for architecture objects, including usage and rental information, across different time periods. This view is useful for analyzing and reporting on architecture object measurements."
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
# C_REARCHTROBJUSGEMSMTDEX

**Rearchtrobjusgemsmtdex**

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
