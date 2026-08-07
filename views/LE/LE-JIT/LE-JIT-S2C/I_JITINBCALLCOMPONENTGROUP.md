---
name: I_JITINBCALLCOMPONENTGROUP
description: Jitinbcallcomponentgroup
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBCALLCOMPONENTGROUP

**Jitinbcallcomponentgroup**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `JITCallCompGrpUUID` | ✓ | |  | `db_key` |
| `JITHeaderUUID` |  | |  | `parent_key` |
| `InternalJITCallNumber` |  | |  | `int_call_num` |
| `JITCallComponentGrpItemNumber` |  | |  | `jitcallcomponentgrpitemnumber` |
| `CompGrpNumber` |  | |  | `comp_grp_num` |
| `JITPredecessorCompGrpItmNmbr` |  | |  | `jitpredecessorcompgrpitmnmbr` |
| `ExtCompGrpNumber` |  | |  | `ext_comp_grp_num` |
| `CompGrpMatl` |  | |  | `comp_grp_mat` |
| `CustCompGrpMatl` |  | |  | `cust_comp_grp_mat` |
| `CustSupplyArea` |  | |  | `cust_sup_area` |
| `UnloadingPointName` |  | |  | `ablad` |
| `Plant` |  | |  | `werks` |
| `CustAssemblyLoc` |  | |  | `fldpo` |
| `ShippingPoint` |  | |  | `vstel` |
| `StorageLocation` |  | |  | `lgort` |
| `ProductionVersion` |  | |  | `productionversion` |
| `JITDelivConfControl` |  | |  | `jitdelivconfcontrol` |
| `JITSuperPckgGrpUUID` |  | |  | `jitsuperpckggrpuuid` |
| `TransmittedExtStatusByMfr` |  | |  | `ext_stat_trans` |
| `TransmittedExtStsUpdtdDteTme` |  | |  | `transmittedextstsupdtddtetme` |
| `JITExtStatusAtSupplier` |  | |  | `ext_stat` |
| `JITExtStatusUpdtdOn` |  | |  | `ext_stat_updated_on` |
| `JITIntProcessingStatus` |  | |  | `int_stat` |
| `JITIntStatusUpdtdOn` |  | |  | `int_stat_updated_on` |
| `SupplyControlID` |  | |  | `supply_cntrl` |
| `SupplyControlUUID` |  | |  | `supplycontroluuid` |
| `JITActionCtrl` |  | |  | `action_cntrl` |
| `RequirementDateTime` |  | |  | `requirement_dt` |
| `PlannedShippingDateTime` |  | |  | `planned_shipping_dt` |
| `ActualShippingDateTime` |  | |  | `actual_shipping_dt` |
| `MaterialAvailabilityDate` |  | |  | `material_availability_date` |
| `MaterialAvailabilityTime` |  | |  | `material_availability_time` |
| `RequestedDeliveryDate` |  | |  | `wldat` |
| `RequestedDeliveryTime` |  | |  | `wluhr` |
| `WarehouseNumber` |  | |  | `lgnum` |
| `DeliveryCreationDate` |  | |  | `ledat` |
| `ProductionStartDate` |  | |  | `prodn_start_date` |
| `JITProductionStartTime` |  | |  | `jitproductionstarttime` |
| `ProductionEndDate` |  | |  | `prodn_end_date` |
| `DeliveryCreationTime` |  | |  | `deliverycreationtime` |
| `JITIntSequenceNumber` |  | |  | `int_sequence_num` |
| `JITExtSequenceNumber` |  | |  | `ext_sequence_num` |
| `JITFormattedSequenceNumber` |  | |  | `formatted_sequence_num` |
| `JITFormattedSequenceNmbrPrefix` |  | |  | `formatted_sequence_num_prefix` |
| `JITFrmtdSqncNmbrIntervalRange` |  | |  | `interval_range` |
| `JITDelivSqncGrpID` |  | |  | `jitdelivsqncgrpid` |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` |
| `DeliveryStatus` |  | |  | `deli_crea_stat` |
| `PickingStatus` |  | |  | `pick_stat` |
| `GoodsMovementStatus` |  | |  | `goods_mvmt_stat` |
| `JITCompGrpDocPckgGrpSts` |  | |  | `pkg_grp_stat` |
| `JITCompGrpDocRelToProdnSts` |  | |  | `r2p_stat` |
| `JITCompGrpDocConfToProdnSts` |  | |  | `cp_stat` |
| `OverallBillingStatus` |  | |  | `bill_stat` |
| `HandlingUnitStatus` |  | |  | `hu_stat` |
| `JITPackingConfirmationStatus` |  | |  | `pack_stat` |
| `JITReleaseForPackingStatus` |  | |  | `r2pck_stat` |
| `JITCallCompGrpCancellationSts` |  | |  | `cancellationstatus` |
| `RequestedQuantity` |  | |  | `requestedquantity` |
| `QuantityUnit` |  | |  | `quantityunit` |
| `NetWeight` |  | |  | `netweight` |
| `GrossWeight` |  | |  | `grossweight` |
| `WeightUnit` |  | |  | `weightunit` |
| `LocalLastChangeDateTime` |  | |  | `locallastchangedatetime` |
| `_JITInbCallComponent` | | ✓ | | |
| `_ProductCompGrp` | | ✓ | | |
| `_SupplierExtStatus` | | ✓ | | |
| `_JITInternalStatus` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_JITSupplyControlHeader` | | ✓ | | |
| `_ShippingPoint` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_JITPckgGrpItemRef` | | ✓ | | |
| `_JITCallCompGrpCanclnStatus` | | ✓ | | |
| `_ProductionVersion` | | ✓ | | |
| `_JITPackingGrpCreationStatus` | | ✓ | | |
| `_JITDeliveryStatus` | | ✓ | | |
| `_JITGoodsMovementStatus` | | ✓ | | |
| `_JITBillingStatus` | | ✓ | | |
| `_JITReleaseToProductionStatus` | | ✓ | | |
| `_JITProdnConfirmationStatus` | | ✓ | | |
| `_JITReleaseToPackingStatus` | | ✓ | | |
| `_JITPackingConfStatus` | | ✓ | | |
| `_JITHndlgUnitCrtnStatus` | | ✓ | | |
| `_JITPckgGrpStatus` | | ✓ | | |
| `_JITPckgGrpHeader` | | ✓ | | |
| `_JITCompGrpEnhanced` | | ✓ | | |
| `_JITCallCompGrpRefTextEnhcd` | | ✓ | | |
| `_JITCallHdrRefTextEnhcd` | | ✓ | | |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | |
| `_JITActionCtrl` | | ✓ | | |
| `_JITDelivConfControl` | | ✓ | | |
| `_JITInboundCall` | | ✓ | | |
| `_JITInbCallActionLog` | | ✓ | | |
| `_JITInbCallCompGrpRefText` | | ✓ | | |
| `_JITInbCallCompGrpDocRef` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInbCallComponent` | `I_JITInbCallComponent` | [0..*] |
| `_ProductCompGrp` | `I_Product` | [1..1] |
| `_SupplierExtStatus` | `I_SupplierExtStatus` | [0..1] |
| `_JITInternalStatus` | `I_JITInternalStatus` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_JITSupplyControlHeader` | `I_JITSupplyControlHeader` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_JITPckgGrpItemRef` | `I_JITPckgGrpItemRef` | [0..1] |
| `_JITCallCompGrpCanclnStatus` | `I_JITCallCompGrpCanclnStatus` | [0..1] |
| `_ProductionVersion` | `I_ProductionVersion` | [0..1] |
| `_JITPackingGrpCreationStatus` | `I_JITPackingGrpCreationStatus` | [0..1] |
| `_JITDeliveryStatus` | `I_JITDeliveryStatus` | [0..1] |
| `_JITGoodsMovementStatus` | `I_JITGoodsMovementStatus` | [0..1] |
| `_JITBillingStatus` | `I_JITBillingStatus` | [0..1] |
| `_JITReleaseToProductionStatus` | `I_JITReleaseToProductionStatus` | [0..1] |
| `_JITProdnConfirmationStatus` | `I_JITProdnConfirmationStatus` | [0..1] |
| `_JITReleaseToPackingStatus` | `I_JITReleaseToPackingStatus` | [0..1] |
| `_JITPackingConfStatus` | `I_JITPackingConfStatus` | [0..1] |
| `_JITHndlgUnitCrtnStatus` | `I_JITHndlgUnitCrtnStatus` | [0..1] |
| `_JITPckgGrpStatus` | `I_JITPckgGrpStatus` | [0..1] |
| `_JITPckgGrpHeader` | `I_JITPckgGrpHeader` | [0..1] |
| `_JITCompGrpEnhanced` | `I_JITCompGrpEnhanced` | [0..1] |
| `_JITCallCompGrpRefTextEnhcd` | `I_JITCallCompGrpRefTextEnhcd` | [0..1] |
| `_JITCallHdrRefTextEnhcd` | `I_JITCallHdrRefTextEnhcd` | [0..1] |
| `_JITDelivSqncGrpHeaderBasic` | `I_JITDelivSqncGrpHeaderBasic` | [0..1] |
| `_JITActionCtrl` | `I_JITActionCtrl` | [0..1] |
| `_JITDelivConfControl` | `I_JITDelivConfControl` | [0..1] |
| `_Extension` | `E_JITInbCallComponentGroup` | [1] |

## Source Code

```abap
@AccessControl                        : { authorizationCheck      : #MANDATORY,
                                          personalData.blocking   : #REQUIRED }
@Analytics                            : { dataCategory            : #DIMENSION,
                                          internalName            : #LOCAL }
@AbapCatalog.extensibility            : { allowNewDatasources     : false,
                                          dataSources             : ['_Extension'],
                                          extensible              : true,
                                          quota                   : { maximumFields : 500,
                                                                      maximumBytes  : 50000 }
                                        }
@EndUserText.label                    : 'JIT Inbound Call Component Group'
@Metadata.allowExtensions             : true
@Metadata.ignorePropagatedAnnotations : true
@ObjectModel                          : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                          representativeKey       : 'JITCallCompGrpUUID',
                                          sapObjectNodeType.name  : 'JITInbCallComponentGroup',
                                          supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                          usageType               : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                        }
@VDM.viewType                         : #BASIC

define view entity I_JITInbCallComponentGroup
  as select from njit_call_d_cgrp
  composition [0..*] of I_JITInbCallActionLog          as _JITInbCallActionLog
  composition [0..*] of I_JITInbCallCompGrpRefText     as _JITInbCallCompGrpRefText
  composition [0..*] of I_JITInbCallCompGrpDocRef      as _JITInbCallCompGrpDocRef
  association        to parent I_JITInboundCall        as _JITInboundCall               on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [0..*] to I_JITInbCallComponent          as _JITInbCallComponent          on  $projection.JITCallCompGrpUUID = _JITInbCallComponent.JITCallCompGrpUUID
  association [1..1] to I_Product                      as _ProductCompGrp               on  $projection.CompGrpMatl = _ProductCompGrp.Product
  association [0..1] to I_SupplierExtStatus            as _SupplierExtStatus            on  $projection.JITExtStatusAtSupplier = _SupplierExtStatus.JITExtStatusAtSupplier
  association [0..1] to I_JITInternalStatus            as _JITInternalStatus            on  $projection.JITIntProcessingStatus = _JITInternalStatus.JITIntProcessingStatus
  association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_JITSupplyControlHeader       as _JITSupplyControlHeader       on  $projection.SupplyControlUUID = _JITSupplyControlHeader.SupplyControlUUID
  association [0..1] to I_ShippingPoint                as _ShippingPoint                on  $projection.ShippingPoint = _ShippingPoint.ShippingPoint
  association [0..1] to I_StorageLocation              as _StorageLocation              on  $projection.Plant           = _StorageLocation.Plant
                                                                                        and $projection.StorageLocation = _StorageLocation.StorageLocation
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_JITPckgGrpItemRef            as _JITPckgGrpItemRef            on  $projection.JITCallCompGrpUUID = _JITPckgGrpItemRef.ReferenceDocumentUUID
  association [0..1] to I_JITCallCompGrpCanclnStatus   as _JITCallCompGrpCanclnStatus   on  $projection.JITCallCompGrpCancellationSts = _JITCallCompGrpCanclnStatus.JITCallCompGrpCancellationSts
  association [0..1] to I_ProductionVersion            as _ProductionVersion            on  $projection.CompGrpMatl       = _ProductionVersion.Material
                                                                                        and $projection.Plant             = _ProductionVersion.Plant
                                                                                        and $projection.ProductionVersion = _ProductionVersion.ProductionVersion
  association [0..1] to I_JITPackingGrpCreationStatus  as _JITPackingGrpCreationStatus  on  $projection.JITCompGrpDocPckgGrpSts = _JITPackingGrpCreationStatus.JITPackingGroupCreationStatus
  association [0..1] to I_JITDeliveryStatus            as _JITDeliveryStatus            on  $projection.DeliveryStatus = _JITDeliveryStatus.DeliveryStatus
  association [0..1] to I_JITGoodsMovementStatus       as _JITGoodsMovementStatus       on  $projection.GoodsMovementStatus = _JITGoodsMovementStatus.GoodsMovementStatus
  association [0..1] to I_JITBillingStatus             as _JITBillingStatus             on  $projection.OverallBillingStatus = _JITBillingStatus.JITBillingStatus
  association [0..1] to I_JITReleaseToProductionStatus as _JITReleaseToProductionStatus on  $projection.JITCompGrpDocRelToProdnSts = _JITReleaseToProductionStatus.JITReleaseToProductionStatus
  association [0..1] to I_JITProdnConfirmationStatus   as _JITProdnConfirmationStatus   on  $projection.JITCompGrpDocConfToProdnSts = _JITProdnConfirmationStatus.JITProdnConfirmationStatus
  association [0..1] to I_JITReleaseToPackingStatus    as _JITReleaseToPackingStatus    on  $projection.JITReleaseForPackingStatus = _JITReleaseToPackingStatus.JITReleaseToPackingStatus
  association [0..1] to I_JITPackingConfStatus         as _JITPackingConfStatus         on  $projection.JITPackingConfirmationStatus = _JITPackingConfStatus.JITPackingConfirmationStatus
  association [0..1] to I_JITHndlgUnitCrtnStatus       as _JITHndlgUnitCrtnStatus       on  $projection.HandlingUnitStatus = _JITHndlgUnitCrtnStatus.HandlingUnitStatus
  association [0..1] to I_JITPckgGrpStatus             as _JITPckgGrpStatus             on  $projection.PickingStatus = _JITPckgGrpStatus.JITPckgGrpStatus
  association [0..1] to I_JITPckgGrpHeader             as _JITPckgGrpHeader             on  $projection.JITSuperPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
  association [0..1] to I_JITCompGrpEnhanced           as _JITCompGrpEnhanced           on  $projection.JITCallCompGrpUUID = _JITCompGrpEnhanced.JITCallCompGrpUUID
  association [0..1] to I_JITCallCompGrpRefTextEnhcd   as _JITCallCompGrpRefTextEnhcd   on  $projection.JITCallCompGrpUUID = _JITCallCompGrpRefTextEnhcd.JITObjectUUID
  association [0..1] to I_JITCallHdrRefTextEnhcd       as _JITCallHdrRefTextEnhcd       on  $projection.JITHeaderUUID = _JITCallHdrRefTextEnhcd.JITObjectUUID
  association [0..1] to I_JITDelivSqncGrpHeaderBasic   as _JITDelivSqncGrpHeaderBasic   on  $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID
  association [0..1] to I_JITActionCtrl                as _JITActionCtrl                on  $projection.JITActionCtrl = _JITActionCtrl.JITActionCtrl
  association [0..1] to I_JITDelivConfControl          as _JITDelivConfControl          on  $projection.JITDelivConfControl = _JITDelivConfControl.JITDelivConfControl
  association [1]    to E_JITInbCallComponentGroup     as _Extension                    on  $projection.JITCallCompGrpUUID = _Extension.JITCallCompGrpUUID
{
  key db_key                        as JITCallCompGrpUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      parent_key                    as JITHeaderUUID,
      int_call_num                  as InternalJITCallNumber,
      jitcallcomponentgrpitemnumber as JITCallComponentGrpItemNumber,
      comp_grp_num                  as CompGrpNumber,
      jitpredecessorcompgrpitmnmbr  as JITPredecessorCompGrpItmNmbr,
      ext_comp_grp_num              as ExtCompGrpNumber,
      @ObjectModel.foreignKey.association : '_ProductCompGrp'
      comp_grp_mat                  as CompGrpMatl,
      cust_comp_grp_mat             as CustCompGrpMatl,
      cust_sup_area                 as CustSupplyArea,
      ablad                         as UnloadingPointName,
      @ObjectModel.foreignKey.association : '_Plant'
      werks                         as Plant,
      fldpo                         as CustAssemblyLoc,
      @ObjectModel.foreignKey.association : '_ShippingPoint'
      vstel                         as ShippingPoint,
      @ObjectModel.foreignKey.association : '_StorageLocation'
      lgort                         as StorageLocation,
      productionversion             as ProductionVersion,
      @ObjectModel.foreignKey.association : '_JITDelivConfControl'
      jitdelivconfcontrol           as JITDelivConfControl,
      @ObjectModel.foreignKey.association : '_JITPckgGrpHeader'
      jitsuperpckggrpuuid           as JITSuperPckgGrpUUID,
      /* Status */
      ext_stat_trans                as TransmittedExtStatusByMfr,
      transmittedextstsupdtddtetme  as TransmittedExtStsUpdtdDteTme,
      @ObjectModel.foreignKey.association : '_SupplierExtStatus'
      ext_stat                      as JITExtStatusAtSupplier,
      ext_stat_updated_on           as JITExtStatusUpdtdOn,
      @ObjectModel.foreignKey.association : '_JITInternalStatus'
      int_stat                      as JITIntProcessingStatus,
      int_stat_updated_on           as JITIntStatusUpdtdOn,
      supply_cntrl                  as SupplyControlID,
      @ObjectModel.foreignKey.association : '_JITSupplyControlHeader'
      supplycontroluuid             as SupplyControlUUID,
      @ObjectModel.foreignKey.association : '_JITActionCtrl'
      action_cntrl                  as JITActionCtrl,
      /* Dates */
      requirement_dt                as RequirementDateTime,
      planned_shipping_dt           as PlannedShippingDateTime,
      actual_shipping_dt            as ActualShippingDateTime,
      material_availability_date    as MaterialAvailabilityDate,
      material_availability_time    as MaterialAvailabilityTime,
      wldat                         as RequestedDeliveryDate,
      wluhr                         as RequestedDeliveryTime,
      lgnum                         as WarehouseNumber,
      ledat                         as DeliveryCreationDate,
      prodn_start_date              as ProductionStartDate,
      jitproductionstarttime        as JITProductionStartTime,
      prodn_end_date                as ProductionEndDate,
      deliverycreationtime          as DeliveryCreationTime,
      /* Sequence Numbers */
      int_sequence_num              as JITIntSequenceNumber,
      ext_sequence_num              as JITExtSequenceNumber,
      formatted_sequence_num        as JITFormattedSequenceNumber,
      formatted_sequence_num_prefix as JITFormattedSequenceNmbrPrefix,
      interval_range                as JITFrmtdSqncNmbrIntervalRange,
      jitdelivsqncgrpid             as JITDelivSqncGrpID,
      @ObjectModel.foreignKey.association : '_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid           as JITDelivSqncGrpUUID,
      /* Document Status Indicator */
      @ObjectModel.foreignKey.association : '_JITDeliveryStatus'
      deli_crea_stat                as DeliveryStatus,
      @ObjectModel.foreignKey.association : '_JITPckgGrpStatus'
      pick_stat                     as PickingStatus,
      @ObjectModel.foreignKey.association : '_JITGoodsMovementStatus'
      goods_mvmt_stat               as GoodsMovementStatus,
      @ObjectModel.foreignKey.association : '_JITPackingGrpCreationStatus'
      pkg_grp_stat                  as JITCompGrpDocPckgGrpSts,
      @ObjectModel.foreignKey.association : '_JITReleaseToProductionStatus'
      r2p_stat                      as JITCompGrpDocRelToProdnSts,
      @ObjectModel.foreignKey.association : '_JITProdnConfirmationStatus'
      cp_stat                       as JITCompGrpDocConfToProdnSts,
      @ObjectModel.foreignKey.association : '_JITBillingStatus'
      bill_stat                     as OverallBillingStatus,
      @ObjectModel.foreignKey.association : '_JITHndlgUnitCrtnStatus'
      hu_stat                       as HandlingUnitStatus,
      @ObjectModel.foreignKey.association : '_JITPackingConfStatus'
      pack_stat                     as JITPackingConfirmationStatus,
      @ObjectModel.foreignKey.association : '_JITReleaseToPackingStatus'
      r2pck_stat                    as JITReleaseForPackingStatus,
      @ObjectModel.foreignKey.association : '_JITCallCompGrpCanclnStatus'
      cancellationstatus            as JITCallCompGrpCancellationSts,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      requestedquantity             as RequestedQuantity,
      quantityunit                  as QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      netweight                     as NetWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      grossweight                   as GrossWeight,
      weightunit                    as WeightUnit,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      locallastchangedatetime       as LocalLastChangeDateTime,
      //Associations
      _JITDelivSqncGrpHeaderBasic,
      _ProductCompGrp,
      _SupplierExtStatus,
      _JITInternalStatus,
      _Plant,
      _JITSupplyControlHeader,
      _ShippingPoint,
      _StorageLocation,
      _JITInbCallComponent,
      _JITPckgGrpItemRef,
      _JITCallCompGrpCanclnStatus,
      _JITInboundCall,
      _JITInbCallActionLog,
      _JITInbCallCompGrpRefText,
      _ProductionVersion,
      _JITPckgGrpHeader,
      _JITCompGrpEnhanced,
      _JITCallCompGrpRefTextEnhcd,
      _JITCallHdrRefTextEnhcd,
      _JITPackingGrpCreationStatus,
      _JITDeliveryStatus,
      _JITGoodsMovementStatus,
      _JITBillingStatus,
      _JITReleaseToProductionStatus,
      _JITProdnConfirmationStatus,
      _JITReleaseToPackingStatus,
      _JITPackingConfStatus,
      _JITHndlgUnitCrtnStatus,
      _JITPckgGrpStatus,
      _JITActionCtrl,
      _JITDelivConfControl,
      _JITInbCallCompGrpDocRef
}
where
  _JITInboundCall.JITScenario = '1'
```
