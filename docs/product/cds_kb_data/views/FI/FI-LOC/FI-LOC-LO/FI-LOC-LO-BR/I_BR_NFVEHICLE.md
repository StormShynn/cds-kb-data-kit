---
name: I_BR_NFVEHICLE
description: "BR Nfvehicle"
semantic_vi: "View I_BR_NFVEHICLE hiển thị thông tin xe liên quan đến biên lai thuế Brazil, bao gồm mô hình xe, năm sản xuất và chi tiết động cơ. Nó được sử dụng để truy cập dữ liệu xe liên quan đến biên lai thuế trong thành phần FI-LOC-LO-BR."
keywords:
  - "vehicle"
  - "tax note"
  - "brazil"
  - "fi-loc-lo-br"
  - "component"
  - "sap"
  - "cds view"
  - "brazilian tax"
  - "xe"
  - "biên lai thuế"
  - "thông tin xe"
semantic_en: "The I_BR_NFVEHICLE view exposes vehicle information related to Brazilian tax notes, including vehicle models, years of manufacture, and engine details. It is used to access vehicle data associated with tax notes in the FI-LOC-LO-BR component."
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFVEHICLE

**BR Nfvehicle**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |  |  |
| `VehicleModel` |  | |  | `cmod` |  |  |
| `VehicleModelYear` |  | |  | `cast(anomod as logbr_veh_model_year preserving type)` |  |  |
| `VehicleYearOfManufacture` |  | |  | `cast(anofab as logbr_manufacturing_year preserving type)` |  |  |
| `VehicleType` |  | |  | `cast(tpveic as logbr_vehicletype preserving type )` |  |  |
| `VehicleFuelType` |  | |  | `cast(tpcomb as logbr_vehiclefueltype preserving type)` |  |  |
| `VehicleEnginePower` |  | |  | `cast(pot as logbr_engine_power preserving type)` |  |  |
| `VehicleCylinderCapacityValue` |  | |  | `cilin` |  |  |
| `VehicleEngineNumber` |  | |  | `nmotor` |  |  |
| `VehicleCarMakerColor` |  | |  | `cast(ccor as logbr_veh_color preserving type)` |  |  |
| `VehiclePaintingType` |  | |  | `tppint` |  |  |
| `BR_NFeVehicleDENATRANColor` |  | |  | `ccordenatran` |  |  |
| `VehicleColorDesc` |  | |  | `xcor` |  |  |
| `VehicleChassis` |  | |  | `chassi` |  |  |
| `VehicleSerialNumber` |  | |  | `nserie` |  |  |
| `VehicleNetWeightUnit` |  | |  | `cast('TO' as msehi)` |  |  |
| `VehicleNetWeight` |  | |  | `cast(pesol as logbr_vehiclenetweight)` |  |  |
| `VehicleGrossWeightUnit` |  | |  | `cast('TO' as msehi)` |  |  |
| `VehicleGrossWeight` |  | |  | `cast(pesob as logbr_vehiclegrossweight)` |  |  |
| `VehicleMaximumCapacityValue` |  | |  | `cast(lota as logbr_veh_max_capacity preserving type)` |  |  |
| `VehicleMaxTractionCapacity` |  | |  | `cast(cmt as logbr_max_traction_cap preserving type)` |  |  |
| `DistanceBetweenAxlesQtyValue` |  | |  | `cast(dist as logbr_dist_axels preserving type)` |  |  |
| `VehicleUsage` |  | |  | `espveic` |  |  |
| `BR_NFItemVINCondition` |  | |  | `vin` |  |  |
| `VehicleCondition` |  | |  | `condveic` |  |  |
| `VehicleRestriction` |  | |  | `cast(tprest as logbr_vehiclerestriction preserving type)` |  |  |
| `VehicleOperationType` |  | |  | `cast(tpop as logbr_vehicleoperationtype preserving type)` |  |  |
| `_VehicleNetWeightUnit` | | ✓ | | | | |
| `_VehicleGrossWeightUnit` | | ✓ | | | | |
| `_BR_VehicleCondition` | | ✓ | | | | |
| `_BR_VehicleFuelType` | | ✓ | | | | |
| `_BR_VehicleFuelType_2` | | ✓ | | | | |
| `_BR_VehicleOperationType` | | ✓ | | | | |
| `_BR_VehicleRestriction` | | ✓ | | | | |
| `_BR_VehicleUsage` | | ✓ | | | | |
| `_BR_VehicleUsage_2` | | ✓ | | | | |
| `_BR_NFeVehDENATRANColor` | | ✓ | | | | |
| `_BR_NFItemVINCondition` | | ✓ | | | | |
| `_BR_VehicleType` | | ✓ | | | | |
| `_BR_VehicleType_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VehicleNetWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VehicleGrossWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BR_VehicleCondition` | `I_BR_VehicleCondition` | [0..1] |
| `_BR_VehicleFuelType` | `I_BR_VehicleFuelType` | [0..1] |
| `_BR_VehicleFuelType_2` | `I_BR_VehicleFuelType_2` | [0..1] |
| `_BR_VehicleOperationType` | `I_BR_VehicleOperationType` | [0..1] |
| `_BR_VehicleRestriction` | `I_BR_VehicleRestriction` | [0..1] |
| `_BR_VehicleUsage` | `I_BR_VehicleUsage` | [0..1] |
| `_BR_VehicleUsage_2` | `I_BR_VehicleUsage_2` | [0..1] |
| `_BR_NFeVehDENATRANColor` | `I_BR_NFeVehDENATRANColor` | [0..1] |
| `_BR_NFItemVINCondition` | `I_BR_NFItemVINCondition` | [0..1] |
| `_BR_VehicleType` | `I_BR_NFVehicleType` | [0..1] |
| `_BR_VehicleType_2` | `I_BR_NFVehicleType_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFVEHICLE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal Vehicle'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_NFVehicle 
  as select from j_1bnfvehicle   
  association [0..1] to I_UnitOfMeasure as _VehicleNetWeightUnit on $projection.VehicleNetWeightUnit = _VehicleNetWeightUnit.UnitOfMeasure 
  association [0..1] to I_UnitOfMeasure as _VehicleGrossWeightUnit on $projection.VehicleGrossWeightUnit = _VehicleGrossWeightUnit.UnitOfMeasure 
  
  association [0..1] to I_BR_VehicleCondition as _BR_VehicleCondition on _BR_VehicleCondition.VehicleCondition = $projection.VehicleCondition
  association [0..1] to I_BR_VehicleFuelType as _BR_VehicleFuelType on _BR_VehicleFuelType.VehicleFuelType = $projection.VehicleFuelType
  association [0..1] to I_BR_VehicleFuelType_2 as _BR_VehicleFuelType_2 on _BR_VehicleFuelType_2.VehicleFuelType = $projection.VehicleFuelType
  association [0..1] to I_BR_VehicleOperationType as _BR_VehicleOperationType on _BR_VehicleOperationType.VehicleOperationType = $projection.VehicleOperationType
  association [0..1] to I_BR_VehicleRestriction as _BR_VehicleRestriction on _BR_VehicleRestriction.VehicleRestriction = $projection.VehicleRestriction
  association [0..1] to I_BR_VehicleUsage as _BR_VehicleUsage on _BR_VehicleUsage.VehicleUsage = $projection.VehicleUsage
  association [0..1] to I_BR_VehicleUsage_2 as _BR_VehicleUsage_2 on _BR_VehicleUsage_2.VehicleUsage = $projection.VehicleUsage
  association [0..1] to I_BR_NFeVehDENATRANColor as _BR_NFeVehDENATRANColor on _BR_NFeVehDENATRANColor.BR_NFeVehicleDENATRANColor = $projection.BR_NFeVehicleDENATRANColor
  association [0..1] to I_BR_NFItemVINCondition as _BR_NFItemVINCondition on _BR_NFItemVINCondition.BR_NFItemVINCondition = $projection.BR_NFItemVINCondition
  association [0..1] to I_BR_NFVehicleType as _BR_VehicleType on _BR_VehicleType.VehicleType = $projection.VehicleType
  association [0..1] to I_BR_NFVehicleType_2 as _BR_VehicleType_2 on _BR_VehicleType_2.NFVehicleType = $projection.VehicleType

{
  //Document Number
  key docnum as BR_NotaFiscal,

  //Item number Number
  key itmnum as BR_NotaFiscalItem,

  //Model
  cmod as VehicleModel,
  cast(anomod as logbr_veh_model_year preserving type) as VehicleModelYear,
  cast(anofab as logbr_manufacturing_year preserving type) as VehicleYearOfManufacture,
  @ObjectModel.foreignKey.association: '_BR_VehicleType_2'
  cast(tpveic as logbr_vehicletype preserving type ) as VehicleType,
  
  //Engine
  @ObjectModel.foreignKey.association: '_BR_VehicleFuelType_2'
  cast(tpcomb as logbr_vehiclefueltype preserving type) as VehicleFuelType,
  cast(pot as logbr_engine_power preserving type)  as VehicleEnginePower,
    
  cilin as VehicleCylinderCapacityValue,
  
  nmotor as VehicleEngineNumber,

  //Color  
  cast(ccor as logbr_veh_color preserving type) as VehicleCarMakerColor,
  tppint as VehiclePaintingType,
  @ObjectModel.foreignKey.association: '_BR_NFeVehDENATRANColor'
  ccordenatran as BR_NFeVehicleDENATRANColor,
  xcor as VehicleColorDesc,
  
  //Technical Information
  chassi as VehicleChassis,
  nserie as VehicleSerialNumber,   
  @Semantics.unitOfMeasure: true
  cast('TO' as msehi) as VehicleNetWeightUnit, 
  @Semantics.quantity.unitOfMeasure: 'VehicleNetWeightUnit'
  @DefaultAggregation: #NONE
  cast(pesol as logbr_vehiclenetweight) as VehicleNetWeight,
  
  @Semantics.unitOfMeasure: true
  cast('TO' as msehi) as VehicleGrossWeightUnit,  
  @Semantics.quantity.unitOfMeasure: 'VehicleGrossWeightUnit'
  @DefaultAggregation: #NONE   
  cast(pesob as logbr_vehiclegrossweight) as VehicleGrossWeight,
  
  cast(lota as logbr_veh_max_capacity preserving type) as VehicleMaximumCapacityValue,
    
  @Semantics.quantity.unitOfMeasure: 'VehicleGrossWeightUnit' 
  cast(cmt as logbr_max_traction_cap preserving type) as VehicleMaxTractionCapacity,
  
  cast(dist as logbr_dist_axels preserving type) as DistanceBetweenAxlesQtyValue,
  
  @ObjectModel.foreignKey.association: '_BR_VehicleUsage_2'
  espveic as VehicleUsage,
  @ObjectModel.foreignKey.association: '_BR_NFItemVINCondition'
  vin as BR_NFItemVINCondition, 
  @ObjectModel.foreignKey.association: '_BR_VehicleCondition'
  condveic as VehicleCondition,
  @ObjectModel.foreignKey.association: '_BR_VehicleRestriction'
  cast(tprest as logbr_vehiclerestriction preserving type) as VehicleRestriction,
  //Operation Type 
  @ObjectModel.foreignKey.association: '_BR_VehicleOperationType'
  cast(tpop as logbr_vehicleoperationtype preserving type) as VehicleOperationType,
  
  _VehicleNetWeightUnit,
  _VehicleGrossWeightUnit,
  _BR_VehicleCondition,
  @API.element: { releaseState: #DEPRECATED, successor: '_BR_VehicleFuelType_2' }
  _BR_VehicleFuelType,
  _BR_VehicleFuelType_2,
  _BR_VehicleOperationType,
  _BR_VehicleRestriction,
   @API.element: { releaseState: #DEPRECATED, successor: '_BR_VehicleUsage_2' }
  _BR_VehicleUsage,
  _BR_VehicleUsage_2,
  _BR_NFeVehDENATRANColor,
  _BR_NFItemVINCondition,
  @API.element: { releaseState: #DEPRECATED, successor: '_BR_VehicleType_2' }
  _BR_VehicleType,
  _BR_VehicleType_2
}
```
