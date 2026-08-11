---
name: I_WELLCOMPLTNDISPOSNVOL
description: "Well Completion Disposition Volume"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value
semantic_en: "Well Completion Disposition Volume"
semantic_vi: "Well Completion Disposition Volume — CDS view giao diện dựa trên oiu_pr_wcdvlh."
keywords:
  - "well"
  - "completion"
  - "disposition"
  - "volume"
  - "compltn"
  - "delivery"
  - "network"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_WELLCOMPLTNDISPOSNVOL

**Well Completion Disposition Volume**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WellCompltnVolDocYr` | ✓ | |  | `cast( doc_year as oiu_vdm_wc_vol_doc_year preserving type )` | `NUMC(4)` | WC Volumes Document Year |
| `WellCompltnVolDoc` | ✓ | |  | `wcdvlh_no` | `CHAR(10)` | Well Completion Delivery Volume Header Number |
| `Well` |  | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `EffectiveValidityStartDate` |  | |  | `eff_from_dt` | `DATS(8)` | Effective from date |
| `EffectiveValidityEndDate` |  | |  | `eff_to_dt` | `DATS(8)` | Effective To Date |
| `ProductionDate` |  | |  | `prd_dt` | `DATS(8)` | Production date |
| `ReclassifiedMaterial` |  | |  | `prd_matnr` | `CHAR(40)` | Production Material |
| `Material` |  | |  | `matnr` | `CHAR(40)` | Material Number |
| `AllocationFrequency` |  | |  | `freq_cd` | `CHAR(1)` | Frequency |
| `TankBatteryMeasurementPt` |  | |  | `tkbtry_mp_no` | `CHAR(20)` | Tank battery measurement point number |
| `VolumeType` |  | |  | `vt_cd` | `CHAR(2)` | Volume type code |
| `VolumeClass` |  | |  | `vc_cd` | `CHAR(1)` | Volume class code |
| `VolumeSource` |  | |  | `vs_cd` | `CHAR(1)` | Volume Source Code |
| `Transporter` |  | |  | `trnsp_no` | `CHAR(10)` | Transporter number |
| `TransporterReference` |  | |  | `trnsp_ref_no` | `CHAR(25)` | Transporter Reference Number |
| `TicketNumber` |  | |  | `tkt_no` | `CHAR(45)` | Ticket number |
| `TicketDateTime` |  | |  | `tkt_timestamp` | `DEC(15)` | Ticket Timestamp (Date) |
| `OriginatingMeasurementPt` |  | |  | `orig_mp_no` | `CHAR(20)` | Original measurement point number |
| `ConversionGroup` |  | |  | `conv_grp` | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `DensityType` |  | |  | `dentyp` | `CHAR(1)` | Density Type |
| `InventoryDate` |  | |  | `invt_dt` | `DATS(8)` | Inventory date |
| `CrossRefWell` |  | |  | `xref_wl_no` | `CHAR(15)` | Cross-Reference Well Number |
| `CrossRefWellCompletion` |  | |  | `xref_wc_no` | `CHAR(5)` | Cross-Reference Wellcompletion Number |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `OriginTransaction` |  | |  | `cast( 'O3U_WCDVL3' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `StandardVolUnit` |  | |  | `std_vol_u` | `UNIT(3)` | Standard volume unit |
| `EnergyUnit` |  | |  | `energy_u` | `UNIT(3)` | Energy quantity unit |
| `ThrtclVolUnit` |  | |  | `theo_u` | `UNIT(3)` | Theoretical Unit |
| `HeatingValUnit` |  | |  | `heat_val_u` | `UNIT(3)` | Heating Value Unit |
| `StandardDensityUnit` |  | |  | `base_density_u` | `UNIT(3)` | Unit for densities at standard/base conditions |
| `HeatingValue` |  | |  | `heat_val` | `QUAN(13)` | Heating value |
| `StandardDensity` |  | |  | `base_density` | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `NmbrOfDaysProduced` |  | |  | `cast( days_prod as oiu_vdm_int_days_of_prod )` | `INT4(10)` | Days of Production |
| `NmbrOfHoursProduced` |  | |  | `cast( prd_hrs as oiu_vdm_int_hrs_of_prod )` | `INT4(10)` | Days of Production |
| `NumberOfItems` |  | |  | `cast( 1 as oiu_vdm_no_of_items )` | `INT4(10)` | Number of Items |
| `TheoreticalVolume` |  | |  | `theo` | `QUAN(13)` | Theoretical Volume |
| `StandardVolume` |  | |  | `std_vol` | `QUAN(13)` | Standard volume |
| `Energy` |  | |  | `energy` | `QUAN(13)` | Energy quantity |
| `GasMolarVolume` |  | |  | `mol_volume` | `QUAN(13)` | Gas mol volume |
| `_DocYear` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_ReclassifiedMaterial` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_AllocationFrequencyCode` | | ✓ | | | | |
| `_TankBatteryMeasurementPt` | | ✓ | | | | |
| `_OriginatingMeasurementPt` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_VolumeClass` | | ✓ | | | | |
| `_VolumeSource` | | ✓ | | | | |
| `_Transporter` | | ✓ | | | | |
| `_ConversionGroup` | | ✓ | | | | |
| `_DensityType` | | ✓ | | | | |
| `_CrossRefWell` | | ✓ | | | | |
| `_CrossRefWellCompletion` | | ✓ | | | | |
| `_StandardVolUnit` | | ✓ | | | | |
| `_ThrtclVolUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_StandardDensityUnit` | | ✓ | | | | |
| `_HeatingValUnit` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocYear` | `I_CalendarYear` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_ReclassifiedMaterial` | `I_Material` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_AllocationFrequencyCode` | `I_AllocationFrequencyCode` | [0..1] |
| `_TankBatteryMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_OriginatingMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_VolumeClass` | `I_VolumeClass` | [0..1] |
| `_VolumeSource` | `I_VolumeSource` | [0..1] |
| `_Transporter` | `I_Customer` | [0..1] |
| `_ConversionGroup` | `I_ConversionGroup` | [0..1] |
| `_DensityType` | `I_DensityType` | [0..1] |
| `_CrossRefWell` | `I_Well` | [0..1] |
| `_CrossRefWellCompletion` | `I_WellCompletion` | [0..1] |
| `_StandardVolUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ThrtclVolUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_StandardDensityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeatingValUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value)*

```abap
@EndUserText.label: 'Well Completion Disposition Volume'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVWCDVL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'PRAWellCompltnDsposVol'

define view I_WellCompltnDisposnVol
  as select from oiu_pr_wcdvlh
  association [0..1] to I_CalendarYear            as _DocYear                  on  $projection.WellCompltnVolDocYr = _DocYear.CalendarYear
  association [0..1] to I_Well                    as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion          as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                               and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_DeliveryNetwork         as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork

  association [0..1] to I_Material                as _ReclassifiedMaterial     on  $projection.ReclassifiedMaterial = _ReclassifiedMaterial.Material
  association [0..1] to I_Material                as _Material                 on  $projection.Material = _Material.Material
  association [0..1] to I_AllocationFrequencyCode as _AllocationFrequencyCode  on  $projection.AllocationFrequency = _AllocationFrequencyCode.AllocationFrequency
  association [0..1] to I_MeasurementPoint        as _TankBatteryMeasurementPt on  $projection.TankBatteryMeasurementPt = _TankBatteryMeasurementPt.MeasurementPoint
  association [0..1] to I_MeasurementPoint        as _OriginatingMeasurementPt on  $projection.OriginatingMeasurementPt = _OriginatingMeasurementPt.MeasurementPoint
  association [0..1] to I_VolumeType              as _VolumeType               on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_VolumeClass             as _VolumeClass              on  $projection.VolumeClass = _VolumeClass.VolumeClass
  association [0..1] to I_VolumeSource            as _VolumeSource             on  $projection.VolumeSource = _VolumeSource.VolumeSource
  association [0..1] to I_Customer                as _Transporter              on  $projection.Transporter = _Transporter.Customer
  association [0..1] to I_ConversionGroup         as _ConversionGroup          on  $projection.ConversionGroup = _ConversionGroup.ConversionGroup
  association [0..1] to I_DensityType             as _DensityType              on  $projection.DensityType = _DensityType.DensityType
  association [0..1] to I_Well                    as _CrossRefWell             on  $projection.CrossRefWell = _CrossRefWell.Well
  association [0..1] to I_WellCompletion          as _CrossRefWellCompletion   on  $projection.CrossRefWell           = _CrossRefWellCompletion.Well
                                                                               and $projection.CrossRefWellCompletion = _CrossRefWellCompletion.WellCompletion
  association [0..1] to I_UnitOfMeasure           as _StandardVolUnit          on  $projection.StandardVolUnit = _StandardVolUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _ThrtclVolUnit            on  $projection.ThrtclVolUnit = _ThrtclVolUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _EnergyUnit               on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _StandardDensityUnit      on  $projection.StandardDensityUnit = _StandardDensityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _HeatingValUnit           on  $projection.HeatingValUnit = _HeatingValUnit.UnitOfMeasure
  association [0..1] to I_User                    as _CreatedByUser            on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.foreignKey.association: '_DocYear'
  key cast( doc_year as oiu_vdm_wc_vol_doc_year preserving type )        as WellCompltnVolDocYr,
  key wcdvlh_no                                                          as WellCompltnVolDoc,
      @ObjectModel.foreignKey.association: '_Well'
      wl_no                                                              as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
      wc_no                                                              as WellCompletion,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                              as DeliveryNetwork,
      @Semantics.businessDate.from: true
      eff_from_dt                                                        as EffectiveValidityStartDate,
      @Semantics.businessDate.to: true
      eff_to_dt                                                          as EffectiveValidityEndDate,
      @Semantics.businessDate.at: true
      prd_dt                                                             as ProductionDate,
      @ObjectModel.foreignKey.association: '_ReclassifiedMaterial'
      prd_matnr                                                          as ReclassifiedMaterial,
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                              as Material,
      @ObjectModel.foreignKey.association: '_AllocationFrequencyCode'
      freq_cd                                                            as AllocationFrequency,
      @ObjectModel.foreignKey.association: '_TankBatteryMeasurementPt'
      tkbtry_mp_no                                                       as TankBatteryMeasurementPt,
      @ObjectModel.foreignKey.association: '_VolumeType'
      vt_cd                                                              as VolumeType,
      @ObjectModel.foreignKey.association: '_VolumeClass'
      vc_cd                                                              as VolumeClass,
      @ObjectModel.foreignKey.association: '_VolumeSource'
      vs_cd                                                              as VolumeSource,
      @ObjectModel.foreignKey.association: '_Transporter'
      trnsp_no                                                           as Transporter,
      trnsp_ref_no                                                       as TransporterReference,
      tkt_no                                                             as TicketNumber,
      tkt_timestamp                                                      as TicketDateTime,
      @ObjectModel.foreignKey.association: '_OriginatingMeasurementPt'
      orig_mp_no                                                         as OriginatingMeasurementPt,
      @ObjectModel.foreignKey.association: '_ConversionGroup'
      conv_grp                                                           as ConversionGroup,
      @ObjectModel.foreignKey.association: '_DensityType'
      dentyp                                                             as DensityType,
      invt_dt                                                            as InventoryDate,
      @ObjectModel.foreignKey.association: '_CrossRefWell'
      xref_wl_no                                                         as CrossRefWell,
      @ObjectModel.foreignKey.association: '_CrossRefWellCompletion'
      xref_wc_no                                                         as CrossRefWellCompletion,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                          as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                     as CreationDateTime,

      //needed to support authorization check
      cast( 'O3U_WCDVL3' as fqm_origin_trans_id )                        as OriginTransaction,

      //UOMs
      @Semantics.unitOfMeasure: true
      std_vol_u                                                          as StandardVolUnit,
      @Semantics.unitOfMeasure: true
      energy_u                                                           as EnergyUnit,
      @Semantics.unitOfMeasure: true
      theo_u                                                             as ThrtclVolUnit,
      @Semantics.unitOfMeasure: true
      heat_val_u                                                         as HeatingValUnit,
      @Semantics.unitOfMeasure: true
      base_density_u                                                     as StandardDensityUnit,

      //Quality measures
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      @DefaultAggregation: #SUM // should be attribute, change when capable
      heat_val                                                           as HeatingValue,
//      @EndUserText.label: 'Heat Value Char'
//      cast( heat_val as oiu_vdm_char_heat_val ) as HeatingValue,
      @Semantics.quantity.unitOfMeasure: 'StandardDensityUnit'
      @DefaultAggregation: #SUM // should be attribute, change when capable
      base_density                                                       as StandardDensity,

      //Count Metrics
      @DefaultAggregation: #SUM
      cast( days_prod as oiu_vdm_int_days_of_prod )                      as NmbrOfDaysProduced,
      @DefaultAggregation: #SUM
      cast( prd_hrs as oiu_vdm_int_hrs_of_prod )                         as NmbrOfHoursProduced,
      @DefaultAggregation: #SUM
      cast( 1 as oiu_vdm_no_of_items )                                   as NumberOfItems,

      //Quantities
      @Semantics.quantity.unitOfMeasure: 'ThrtclVolUnit'
      @DefaultAggregation: #SUM
      theo                                                               as TheoreticalVolume,
      @Semantics.quantity.unitOfMeasure: 'StandardVolUnit'
      @DefaultAggregation: #SUM
      std_vol                                                            as StandardVolume,
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      @DefaultAggregation: #SUM
      energy                                                             as Energy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'StandardDensityUnit'
      mol_volume                                                         as GasMolarVolume,

      //associations
      _DocYear,
      _Well,
      _WellCompletion,
      _DeliveryNetwork,
      _ReclassifiedMaterial,
      _Material,
      _AllocationFrequencyCode,
      _TankBatteryMeasurementPt,
      _VolumeType,
      _VolumeClass,
      _VolumeSource,
      _Transporter,
      _OriginatingMeasurementPt,
      _ConversionGroup,
      _DensityType,
      _CrossRefWell,
      _CrossRefWellCompletion,
      _StandardVolUnit,
      _ThrtclVolUnit,
      _EnergyUnit,
      _StandardDensityUnit,
      _HeatingValUnit,
      _CreatedByUser
}
```
