---
name: I_CONTRALLOCVOLSECDRYPROD
description: "CA Volume for Secondary Products"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTRALLOCVOLSECDRYPROD')/$value
semantic_en: "CA Volume for Secondary Products"
semantic_vi: "CA Volume for Secondary Products — CDS view giao diện dựa trên P_ContrAllocVolSecdryProd."
keywords:
  - "volume"
  - "for"
  - "secondary"
  - "products"
  - "delivery"
  - "network"
  - "measurement"
  - "point"
  - "well"
  - "completion"
  - "material"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_CONTRALLOCVOLSECDRYPROD

**CA Volume for Secondary Products**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTRALLOCVOLSECDRYPROD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryNetwork` | ✓ | |  |  | `CHAR(20)` | Delivery network number |
| `MeasurementPoint` | ✓ | |  |  | `CHAR(20)` | Measurement point number |
| `Well` | ✓ | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  |  | `CHAR(5)` | Well Completion Number |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `PRAContract` | ✓ | |  |  | `CHAR(10)` | Contract Number |
| `SalesDate` | ✓ | |  |  | `DATS(8)` | Sales date |
| `PRAOwner` | ✓ | |  |  | `CHAR(10)` | PRA owner |
| `OwnerInterestType` | ✓ | |  |  | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | ✓ | |  |  | `CHAR(2)` | Owner Interest Sequence Number |
| `OriginatingMeasurementPt` | ✓ | |  |  | `CHAR(20)` | Original measurement point number |
| `Transporter` | ✓ | |  |  | `CHAR(10)` | Transporter number |
| `IsLeaseOrPlant` | ✓ | |  |  | `CHAR(1)` | Lease Plant Code |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Actual Volume Units |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Value Unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Actual Energy Unit |
| `VolReducnUnit` |  | |  |  | `UNIT(3)` | PVR Unit |
| `EnergyReducnUnit` |  | |  |  | `UNIT(3)` | PTR Unit |
| `ActualVolume` |  | |  |  | `QUAN(13)` | Actual Volume |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `ActualEnergy` |  | |  |  | `QUAN(13)` | Actual Energy |
| `EntitledVolume` |  | |  |  | `QUAN(13)` | Entitled Contract Volume |
| `EntitledEnergy` |  | |  |  | `QUAN(13)` | Entitled Contract Energy |
| `ActualVolReducn` |  | |  |  | `QUAN(13)` | Owner PVR |
| `ActualEnergyReducn` |  | |  |  | `QUAN(13)` | Owner PTR |
| `EntitledVolReducn` |  | |  |  | `QUAN(13)` | Owner PVR |
| `EntitledEngyReducn` |  | |  |  | `QUAN(13)` | Owner PTR |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_OwnerInterestType` | | ✓ | | | | |
| `_OriginatingMeasurementPt` | | ✓ | | | | |
| `_Transporter` | | ✓ | | | | |
| `_IsLeaseOrPlant` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_HeatingValUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_VolReducnUnit` | | ✓ | | | | |
| `_EnergyReducnUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_OwnerInterestType` | `I_OwnerInterestType` | [0..1] |
| `_OriginatingMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_Transporter` | `I_Customer` | [0..1] |
| `_IsLeaseOrPlant` | `I_PRALeasePlantIndicator` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeatingValUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VolReducnUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyReducnUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTRALLOCVOLSECDRYPROD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTRALLOCVOLSECDRYPROD')/$value)*

```abap
@EndUserText.label: 'CA Volume for Secondary Products'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVCAVOLSECDRY'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'PRAContrAllocVolSecdryProd'

define view I_ContrAllocVolSecdryProd
  as select from P_ContrAllocVolSecdryProd

  association [0..1] to I_DeliveryNetwork        as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_MeasurementPoint       as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_Well                   as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion         as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                              and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_Material               as _Material                 on  $projection.Material = _Material.Material
  association [0..1] to I_PRAContract            as _PRAContract              on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_PRAOwner               as _PRAOwner                 on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_OwnerInterestType      as _OwnerInterestType        on  $projection.OwnerInterestType = _OwnerInterestType.OwnerInterestType
  association [0..1] to I_MeasurementPoint       as _OriginatingMeasurementPt on  $projection.OriginatingMeasurementPt = _OriginatingMeasurementPt.MeasurementPoint
  association [0..1] to I_Customer               as _Transporter              on  $projection.Transporter = _Transporter.Customer
  association [0..1] to I_PRALeasePlantIndicator as _IsLeaseOrPlant           on  $projection.IsLeaseOrPlant = _IsLeaseOrPlant.IsLeaseOrPlant
  association [0..1] to I_UnitOfMeasure          as _VolumeUnit               on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _HeatingValUnit           on  $projection.HeatingValUnit = _HeatingValUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _EnergyUnit               on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _VolReducnUnit            on  $projection.VolReducnUnit = _VolReducnUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure          as _EnergyReducnUnit         on  $projection.EnergyReducnUnit = _EnergyReducnUnit.UnitOfMeasure

{

      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
  key DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
  key MeasurementPoint,
      @ObjectModel.foreignKey.association: '_Well'
  key Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key WellCompletion,
      @ObjectModel.foreignKey.association: '_Material'
  key Material,
      @ObjectModel.foreignKey.association: '_PRAContract'
  key PRAContract,
      @Semantics.businessDate.at: true
  key SalesDate,
      @ObjectModel.foreignKey.association: '_PRAOwner'
  key PRAOwner,
      @ObjectModel.foreignKey.association: '_OwnerInterestType'
  key OwnerInterestType,
      //No FK relationship or search help in DB table
  key OwnerInterestSequence,
      @ObjectModel.foreignKey.association: '_OriginatingMeasurementPt'
  key OriginatingMeasurementPt,
      @ObjectModel.foreignKey.association: '_Transporter'
  key Transporter,
      @ObjectModel.foreignKey.association: '_IsLeaseOrPlant'
  key IsLeaseOrPlant,

      //needed to support authorization check
      OriginTransaction,

      //adminstrative
      @Semantics.user.createdBy: true
      CreatedByUser,
      CreationDateTime,


      //UOMs
      @Semantics.unitOfMeasure: true
      VolumeUnit,
      @Semantics.unitOfMeasure: true
      HeatingValUnit,
      @Semantics.unitOfMeasure: true
      EnergyUnit,
      @Semantics.unitOfMeasure: true
      VolReducnUnit,
      @Semantics.unitOfMeasure: true
      EnergyReducnUnit,

      //Measures
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      ActualVolume,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      HeatingValue,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      ActualEnergy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      EntitledVolume,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      EntitledEnergy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolReducnUnit'
      ActualVolReducn,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyReducnUnit'
      ActualEnergyReducn,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolReducnUnit'
      EntitledVolReducn,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyReducnUnit'
      EntitledEngyReducn,

      _DeliveryNetwork,
      _MeasurementPoint,
      _Well,
      _WellCompletion,
      _Material,
      _PRAContract,
      _PRAOwner,
      _OwnerInterestType,
      _IsLeaseOrPlant,
      _OriginatingMeasurementPt,
      _Transporter,
      _VolumeUnit,
      _HeatingValUnit,
      _EnergyUnit,
      _VolReducnUnit,
      _EnergyReducnUnit

};
```
