---
name: I_MEASUREMENTPOINTVOLUME
description: "Measurement Point Volume"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINTVOLUME')/$value
semantic_en: "Measurement Point Volume"
semantic_vi: "Measurement Point Volume — CDS view giao diện dựa trên oiu_pr_mpvl."
keywords:
  - "measurement"
  - "point"
  - "volume"
  - "year"
  - "type"
  - "class"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_MEASUREMENTPOINTVOLUME

**Measurement Point Volume**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINTVOLUME')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementPtVolDocYear` | ✓ | |  | `mpvl_year` | `NUMC(4)` | Measurement point document year |
| `MeasurementPtVolumeDoc` | ✓ | |  | `mpvl_no` | `CHAR(10)` | MP volume Number |
| `MeasurementPoint` |  | |  | `mp_no` | `CHAR(20)` | Measurement point number |
| `VolumeType` |  | |  | `vt_cd` | `CHAR(2)` | Volume Type Code |
| `VolumeClass` |  | |  | `vc_cd` | `CHAR(1)` | Volume class code |
| `Transporter` |  | |  | `trnsp_no` | `CHAR(10)` | Transporter number |
| `TransporterReference` |  | |  | `trnsp_ref_no` | `CHAR(25)` | Transporter Reference Number |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `AllocationFrequency` |  | |  | `freq_cd` | `CHAR(1)` | Frequency |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `PRAContract` |  | |  | `ct_no` | `CHAR(10)` | Contract Number |
| `TicketNumber` |  | |  | `tkt_no` | `CHAR(45)` | Ticket number |
| `TicketDateTime` |  | |  | `tkt_timestamp` | `DEC(15)` | Ticket timestamp |
| `ProductionDate` |  | |  | `prd_dt` | `DATS(8)` | Production date |
| `VolumeEntryDateTime` |  | |  | `ent_timestamp` | `DEC(15)` | Entry timestamp |
| `EffectiveValidityStartDate` |  | |  | `eff_from_dt` | `DATS(8)` | Effective from date |
| `EffectiveValidityEndDate` |  | |  | `eff_to_dt` | `DATS(8)` | Effective To Date |
| `MeterStartDateTime` |  | |  | `meter_start` | `DEC(15)` | Meter start time |
| `MeterStopDateTime` |  | |  | `meter_stop` | `DEC(15)` | Meter stop time |
| `ConversionGroup` |  | |  | `conv_grp` | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `TankBatteryMeasurementPt` |  | |  | `tkbtry_mp_no` | `CHAR(20)` | Tank battery measurement point number |
| `VolumeSource` |  | |  | `vs_cd` | `CHAR(1)` | Volume Source Code |
| `VolumeCategory` |  | |  | `vl_cat_cd` | `CHAR(1)` | Volume Category Code |
| `LoadOilDeliveryNetwork` |  | |  | `ld_oil_dn_no` | `CHAR(20)` | Load oil delivery network |
| `LoadOilWell` |  | |  | `ld_oil_wl_no` | `CHAR(15)` | Load oil well number |
| `LoadOilWellCompletion` |  | |  | `ld_oil_wc_no` | `CHAR(5)` | Load oil well completion |
| `LoadOilMeasurementPoint` |  | |  | `ld_oil_mp_no` | `CHAR(20)` | Load oil measurement point |
| `OriginatingMeasurementPt` |  | |  | `orig_mp_no` | `CHAR(20)` | Original measurement point number |
| `DensityType` |  | |  | `dentyp` | `CHAR(1)` | Density Type |
| `InventoryDate` |  | |  | `invt_dt` | `DATS(8)` | Inventory date |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `OriginTransaction` |  | |  | `cast( 'O3U_MPVL3' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `StandardVolUnit` |  | |  | `std_vol_u` | `UNIT(3)` | Standard volume unit |
| `EnergyUnit` |  | |  | `energy_u` | `UNIT(3)` | Energy quantity unit |
| `HeatingValUnit` |  | |  | `heat_val_u` | `UNIT(3)` | Heating Value Unit |
| `StandardDensityUnit` |  | |  | `base_density_u` | `UNIT(3)` | Unit for densities at standard/base conditions |
| `HeatingValue` |  | |  | `heat_val` | `QUAN(13)` | Heating value |
| `StandardDensity` |  | |  | `base_density` | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `StandardVolume` |  | |  | `std_vol` | `QUAN(13)` | Standard volume |
| `Energy` |  | |  | `energy` | `QUAN(13)` | Energy quantity |
| `GasMolarVolume` |  | |  | `mol_volume` | `QUAN(13)` | Gas mol volume |
| `LoadOilTransferWithoutRecovery` |  | |  | `ld_oil_wo_recov` | `CHAR(1)` | Load Oil Transfer without Recovery |
| `MsmtPtVolDocSts` |  | |  | `status` | `CHAR(1)` | MP Volume Status Code |
| `PRAMeasurementDocumentNumber` |  | |  | `me_docnr` | `CHAR(10)` | Meas. document number |
| `MeasurementDocYear` |  | |  | `me_docyr` | `NUMC(4)` | Meas. document year |
| `DraftMeasurementDocumentNumber` |  | |  | `draft_me_docnr` | `CHAR(10)` | Meas. document number |
| `DraftMeasurementDocYear` |  | |  | `draft_me_docyr` | `NUMC(4)` | Meas. document year |
| `_DocYear` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_VolumeClass` | | ✓ | | | | |
| `_VolumeSource` | | ✓ | | | | |
| `_Transporter` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_AllocationFrequencyCode` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_ConversionGroup` | | ✓ | | | | |
| `_TankBatteryMeasurementPt` | | ✓ | | | | |
| `_VolumeCategory` | | ✓ | | | | |
| `_LoadOilDeliveryNetwork` | | ✓ | | | | |
| `_LoadOilWell` | | ✓ | | | | |
| `_LoadOilWellCompletion` | | ✓ | | | | |
| `_LoadOilMeasurementPoint` | | ✓ | | | | |
| `_OriginatingMeasurementPt` | | ✓ | | | | |
| `_DensityType` | | ✓ | | | | |
| `_StandardVolUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_HeatingValUnit` | | ✓ | | | | |
| `_StandardDensityUnit` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocYear` | `I_CalendarYear` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_VolumeClass` | `I_VolumeClass` | [0..1] |
| `_VolumeSource` | `I_VolumeSource` | [0..1] |
| `_Transporter` | `I_Customer` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_AllocationFrequencyCode` | `I_AllocationFrequencyCode` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_ConversionGroup` | `I_ConversionGroup` | [0..1] |
| `_TankBatteryMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_VolumeCategory` | `I_VolumeCategory` | [0..1] |
| `_LoadOilDeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_LoadOilWell` | `I_Well` | [0..1] |
| `_LoadOilWellCompletion` | `I_WellCompletion` | [0..1] |
| `_LoadOilMeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_OriginatingMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_DensityType` | `I_DensityType` | [0..1] |
| `_StandardVolUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeatingValUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StandardDensityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINTVOLUME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MEASUREMENTPOINTVOLUME')/$value)*

```abap
@EndUserText.label: 'Measurement Point Volume'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMPVL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'PRAMeasurementPointVolumes'

define view I_MeasurementPointVolume
  as select from oiu_pr_mpvl
  association [0..1] to I_CalendarYear            as _DocYear                  on  $projection.MeasurementPtVolDocYear = _DocYear.CalendarYear
  association [0..1] to I_MeasurementPoint        as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_VolumeType              as _VolumeType               on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_VolumeClass             as _VolumeClass              on  $projection.VolumeClass = _VolumeClass.VolumeClass
  association [0..1] to I_VolumeSource            as _VolumeSource             on  $projection.VolumeSource = _VolumeSource.VolumeSource
  association [0..1] to I_Customer                as _Transporter              on  $projection.Transporter = _Transporter.Customer
  association [0..1] to I_Material                as _Material                 on  $projection.Material = _Material.Material
  association [0..1] to I_AllocationFrequencyCode as _AllocationFrequencyCode  on  $projection.AllocationFrequency = _AllocationFrequencyCode.AllocationFrequency
  association [0..1] to I_DeliveryNetwork         as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAContract             as _PRAContract              on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_ConversionGroup         as _ConversionGroup          on  $projection.ConversionGroup = _ConversionGroup.ConversionGroup
  association [0..1] to I_MeasurementPoint        as _TankBatteryMeasurementPt on  $projection.TankBatteryMeasurementPt = _TankBatteryMeasurementPt.MeasurementPoint
  association [0..1] to I_VolumeCategory          as _VolumeCategory           on  $projection.VolumeCategory = _VolumeCategory.VolumeCategory
  association [0..1] to I_DeliveryNetwork         as _LoadOilDeliveryNetwork   on  $projection.LoadOilDeliveryNetwork = _LoadOilDeliveryNetwork.DeliveryNetwork
  association [0..1] to I_Well                    as _LoadOilWell              on  $projection.LoadOilWell = _LoadOilWell.Well
  association [0..1] to I_WellCompletion          as _LoadOilWellCompletion    on  $projection.LoadOilWell           = _LoadOilWellCompletion.Well
                                                                               and $projection.LoadOilWellCompletion = _LoadOilWellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint        as _LoadOilMeasurementPoint  on  $projection.LoadOilMeasurementPoint = _LoadOilMeasurementPoint.MeasurementPoint
  association [0..1] to I_MeasurementPoint        as _OriginatingMeasurementPt on  $projection.OriginatingMeasurementPt = _OriginatingMeasurementPt.MeasurementPoint
  association [0..1] to I_DensityType             as _DensityType              on  $projection.DensityType = _DensityType.DensityType
  association [0..1] to I_UnitOfMeasure           as _StandardVolUnit          on  $projection.StandardVolUnit = _StandardVolUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _EnergyUnit               on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _HeatingValUnit           on  $projection.HeatingValUnit = _HeatingValUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _StandardDensityUnit      on  $projection.StandardDensityUnit = _StandardDensityUnit.UnitOfMeasure
  association [0..1] to I_User                    as _CreatedByUser            on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.foreignKey.association: '_DocYear'
  key mpvl_year                                                         as MeasurementPtVolDocYear,
  key mpvl_no                                                           as MeasurementPtVolumeDoc,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
      mp_no                                                             as MeasurementPoint,
      @ObjectModel.foreignKey.association: '_VolumeType'
      vt_cd                                                             as VolumeType,
      @ObjectModel.foreignKey.association: '_VolumeClass'
      vc_cd                                                             as VolumeClass,
      @ObjectModel.foreignKey.association: '_Transporter'
      trnsp_no                                                          as Transporter,
      trnsp_ref_no                                                      as TransporterReference,
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                             as Material,
      @ObjectModel.foreignKey.association: '_AllocationFrequencyCode'
      freq_cd                                                           as AllocationFrequency,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                             as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_PRAContract'
      ct_no                                                             as PRAContract,
      tkt_no                                                            as TicketNumber,
      tkt_timestamp                                                     as TicketDateTime,
      @Semantics.businessDate.at: true
      prd_dt                                                            as ProductionDate,
      ent_timestamp                                                     as VolumeEntryDateTime,
      @Semantics.businessDate.from: true
      eff_from_dt                                                       as EffectiveValidityStartDate,
      @Semantics.businessDate.to: true
      eff_to_dt                                                         as EffectiveValidityEndDate,
      meter_start                                                       as MeterStartDateTime,
      meter_stop                                                        as MeterStopDateTime,
      @ObjectModel.foreignKey.association: '_ConversionGroup'
      conv_grp                                                          as ConversionGroup,
      @ObjectModel.foreignKey.association: '_TankBatteryMeasurementPt'
      tkbtry_mp_no                                                      as TankBatteryMeasurementPt,
      @ObjectModel.foreignKey.association: '_VolumeSource'
      vs_cd                                                             as VolumeSource,
      @ObjectModel.foreignKey.association: '_VolumeCategory'
      vl_cat_cd                                                         as VolumeCategory,
      @ObjectModel.foreignKey.association: '_LoadOilDeliveryNetwork'
      ld_oil_dn_no                                                      as LoadOilDeliveryNetwork,
      @ObjectModel.foreignKey.association: '_LoadOilWell'
      ld_oil_wl_no                                                      as LoadOilWell,
      @ObjectModel.foreignKey.association: '_LoadOilWellCompletion'
      ld_oil_wc_no                                                      as LoadOilWellCompletion,
      @ObjectModel.foreignKey.association: '_LoadOilMeasurementPoint'
      ld_oil_mp_no                                                      as LoadOilMeasurementPoint,
      @ObjectModel.foreignKey.association: '_OriginatingMeasurementPt'
      orig_mp_no                                                        as OriginatingMeasurementPt,
      @ObjectModel.foreignKey.association: '_DensityType'
      dentyp                                                            as DensityType,
      @Semantics.businessDate.at: true
      invt_dt                                                           as InventoryDate,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                         as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                    as CreationDateTime,

      //needed to support authorization check
      cast( 'O3U_MPVL3' as fqm_origin_trans_id )                        as OriginTransaction,

      // UOMs
      @Semantics.unitOfMeasure: true
      std_vol_u                                                         as StandardVolUnit,
      @Semantics.unitOfMeasure: true
      energy_u                                                          as EnergyUnit,
      @Semantics.unitOfMeasure: true
      heat_val_u                                                        as HeatingValUnit,
      @Semantics.unitOfMeasure: true
      base_density_u                                                    as StandardDensityUnit,

      // Quality attributes (change later to not sum)
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      @DefaultAggregation: #SUM
      heat_val                                                          as HeatingValue,
      @Semantics.quantity.unitOfMeasure: 'StandardDensityUnit'
      @DefaultAggregation: #SUM
      base_density                                                      as StandardDensity,

      // Measures
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'StandardVolUnit'
      std_vol                                                           as StandardVolume,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      energy                                                            as Energy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'StandardDensityUnit'
      mol_volume                                                        as GasMolarVolume,
      
      ld_oil_wo_recov   as       LoadOilTransferWithoutRecovery,
      status            as       MsmtPtVolDocSts,
      me_docnr          as       PRAMeasurementDocumentNumber,
      me_docyr          as       MeasurementDocYear,
      draft_me_docnr    as       DraftMeasurementDocumentNumber,
      draft_me_docyr    as       DraftMeasurementDocYear,

      //associations
      _DocYear,
      _MeasurementPoint,
      _VolumeType,
      _VolumeClass,
      _Transporter,
      _Material,
      _AllocationFrequencyCode,
      _DeliveryNetwork,
      _PRAContract,
      _ConversionGroup,
      _TankBatteryMeasurementPt,
      _VolumeSource,
      _VolumeCategory,
      _LoadOilDeliveryNetwork,
      _LoadOilWell,
      _LoadOilWellCompletion,
      _LoadOilMeasurementPoint,
      _OriginatingMeasurementPt,
      _DensityType,
      _StandardVolUnit,
      _EnergyUnit,
      _HeatingValUnit,
      _StandardDensityUnit,
      _CreatedByUser
}
```
