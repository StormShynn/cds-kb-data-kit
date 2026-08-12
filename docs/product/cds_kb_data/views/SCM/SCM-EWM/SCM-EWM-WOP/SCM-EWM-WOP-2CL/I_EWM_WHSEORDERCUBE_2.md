---
name: I_EWM_WHSEORDERCUBE_2
description: "This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value
semantic_en: "This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Order - Cube — CDS view giao diện dựa trên P_EWM_WarehouseOrder_2."
keywords:
  - "warehouse"
  - "order"
  - "cube"
  - "number"
  - "orders"
  - "creation"
  - "rule"
  - "whse"
  - "category"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - order
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WHSEORDERCUBE_2

**This CDS view provides information about warehouse orders in your warehouse. This CDS view provides the data to answer the following business questions: What are the existing warehouse orders with their related information in your warehouse? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `WarehouseOrder` | ✓ | |  |  | `NUMC(10)` | Warehouse Order Number |
| `NumberOfWarehouseOrders` |  | |  | `0` | `FLTP(16)` |  |
| `WarehouseOrderCreationRule` |  | |  |  | `CHAR(4)` | Warehouse Order Creation Rule |
| `WhseOrderCreationRuleCategory` |  | |  |  | `CHAR(1)` | Category of Warehouse Order Creation Rule |
| `WhseProcessTypeDocumentHdr` |  | |  |  | `CHAR(4)` | Document Header Warehouse Process Type |
| `Wave` |  | |  |  | `NUMC(10)` | Wave |
| `EWMWave` |  | |  |  | `NUMC(10)` | Wave |
| `WarehouseOrderStatus` |  | |  |  | `CHAR(1)` | Warehouse Order Status |
| `WarehouseOrderStatusName` |  | |  | `_WarehouseOrderStatusText[1:Language = $parameters.P_Language].WarehouseOrderStatusName` | `CHAR(60)` | Short Text for Fixed Values |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `WrhsOrdCrtnUTCDateTime` |  | |  |  | `DEC(15)` | Creation Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `WarehouseOrderQueue` |  | |  | `Queue` | `CHAR(10)` | Queue |
| `WrhsOrdStrtUTCDateTime` |  | |  | `WarehouseOrderStartDateTime` | `DEC(15)` | Start Time |
| `WarehouseOrderStartTimeIsFixed` |  | |  |  | `CHAR(1)` | Warehouse Order Start Time Fixed |
| `WhseOrderConfUTCDateTime` |  | |  | `WhseOrderConfirmedDateTime` | `DEC(15)` | Time of Confirmation |
| `WarehouseOrderConfirmedBy` |  | |  |  | `CHAR(12)` | Confirmed By |
| `Processor` |  | |  |  | `CHAR(12)` | Processor |
| `ExecutingResource` |  | |  |  | `CHAR(18)` | Resource (Means of Transportation or User) |
| `ProcessorIsManualAssigned` |  | |  |  | `CHAR(1)` | Manual Assignment of Processor |
| `WarehouseOrderHasPhysInvtryDoc` |  | |  |  | `CHAR(1)` | WO Contains Physical Inventory Document |
| `WhseOrderForSplitWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of WO That Was Split |
| `WarehouseOrderIsSplit` |  | |  |  | `CHAR(1)` | Warehouse Order Was Split |
| `ResourceStartBin` |  | |  |  | `CHAR(18)` | Starting Point for Processing Resource |
| `LatestStartUTCDateTime` |  | |  | `WhseOrderLatestStartDateTime` | `DEC(15)` | Latest Starting Date (LSD) |
| `WarehouseOrderPlannedDuration` |  | |  |  | `QUAN(15)` | Planned Execution Time of Warehouse Order |
| `WhseOrderPlanDurationTimeUnit` |  | |  |  | `UNIT(3)` | Warehouse Order: Time Unit |
| `WhseOrderLastChgUTCDateTime` |  | |  |  | `DEC(15)` | Time of Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `WhseOrderHigherLevelWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Higher-Level Warehouse Order |
| `WhseOrderSubsequentWhseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number of Subsequent Warehouse Order |
| `WhseOrderHasSubsqntWhseOrder` |  | |  |  | `CHAR(1)` | WO Contains Warehouse Order |
| `WarehouseOrderHasWhseTask` |  | |  |  | `CHAR(1)` | Warehouse Order Contains Warehouse Task |
| `HzdsSubstanceIsRlvtForStorage` |  | |  |  | `CHAR(1)` | Hazardous Substance Relevant for Storage |
| `WhseOrderCrtnWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderCrtnWhseTmznYear` |  | |  | `cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseOrderCrtnWhseTmznMonth` |  | |  | `cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WhseOrderCrtnWhseTmznDate` |  | |  | `cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WhseOrderCrtnWhseTmznHour` |  | |  | `cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc( 10 ) )` | `NUMC(10)` |  |
| `WhseOrderCrtnWhseTmznTime` |  | |  | `cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseOrderCrtnRnddTo10MinsTime` |  | |  | `cast(concat(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)` | `TIMS(6)` |  |
| `WhseOrdLtstStrtWhseTmznDteTme` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrdLtstStrtWhseTmznYear` |  | |  | `cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseOrdLtstStrtWhseTmznMonth` |  | |  | `cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WhseOrdLtstStrtWhseTmznDate` |  | |  | `cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WhseOrdLtstStrtWhseTmznHour` |  | |  | `cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 10) as abap.numc( 10 ) )` | `NUMC(10)` |  |
| `WhseOrdLtstStrtWhseTmznTime` |  | |  | `cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseOrdLtstStrtRnddTo10MinsTme` |  | |  | `cast(concat( substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 9, 3), '000') as abap.tims)` | `TIMS(6)` |  |
| `WhseOrderConfWhseTmznDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WhseOrderConfWhseTmznYear` |  | |  | `cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WhseOrderConfWhseTmznMonth` |  | |  | `cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WhseOrderConfWhseTmznDate` |  | |  | `cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WhseOrderConfWhseTmznHour` |  | |  | `cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc( 10 ) )` | `NUMC(10)` |  |
| `WhseOrderConfWhseTmznTime` |  | |  | `cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WhseOrderConfRnddTo10MinsTime` |  | |  | `cast(concat(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)` | `TIMS(6)` |  |
| `WhseOrderOverdueHours` |  | |  | `case when WarehouseOrderStatus = '' and WhseOrderLatestStartDateTime <> 00000000000000 then case when OpenMod = 0 then WhseOrderOverdueHours else case when WhseOrderLatestStartDateTime < tstmp_current_utctimestamp() then WhseOrderOverdueHours+1 else WhseOrderOverdueHours end end else case when WarehouseOrderStatus = 'C' and WhseOrderLatestStartDateTime <> 00000000000000 then case when ConfirmedMod = 0 then WhseOrderOverdueHours else case when WhseOrderLatestStartDateTime < WhseOrderConfirmedDateTime then WhseOrderOverdueHours+1 else WhseOrderOverdueHours end end else WhseOrderOverdueHours end end` | `DEC(16)` |  |
| `WaveItem` |  | |  | `'000000'` | `NUMC(6)` |  |
| `EWMWaveItem` |  | |  | `'000000'` | `NUMC(6)` |  |
| `PlndLoadCompletionUTCDateTime` |  | | `_Wave` | `PlndLoadCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCompletionUTCDateTime` |  | | `_Wave` | `PlndPackCompletionUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCompltnUTCDateTime` |  | | `_Wave` | `PlndPickCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStagingCompltnUTCDateTime` |  | | `_Wave` | `PlndStagingCompltnUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActlReleasedUTCDateTime` |  | | `_Wave` | `WaveActlReleasedUTCDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCutoffWhseTmznDateTime` |  | | `_Wave` | `WaveCutoffWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WavePlndRelWhseTmznDateTime` |  | | `_Wave` | `WavePlndRelWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPickCmpltWhseTmznDateTime` |  | | `_Wave` | `PlndPickCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndPackCmpltWhseTmznDateTime` |  | | `_Wave` | `PlndPackCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `PlndStggCmpltWhseTmznDateTime` |  | | `_Wave` | `PlndStggCmpltWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveCompletionWhseTmznDateTime` |  | | `_Wave` | `WaveCompletionWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznDateTime` |  | | `_Wave` | `WaveActualReldWhseTmznDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `WaveActualReldWhseTmznYear` |  | |  | `cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 4) as abap.numc( 4 ) )` | `NUMC(4)` |  |
| `WaveActualReldWhseTmznMonth` |  | |  | `cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 6) as abap.numc( 6 ) )` | `NUMC(6)` |  |
| `WaveActualReldWhseTmznDate` |  | |  | `cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 8) as abap.dats)` | `DATS(8)` |  |
| `WaveActualReldWhseTmznHour` |  | |  | `cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 10) as abap.numc( 10 ) )` | `NUMC(10)` |  |
| `WaveActualReldWhseTmznTime` |  | |  | `cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)` | `TIMS(6)` |  |
| `WaveTemplate` |  | | `_Wave._WaveTmpl` | `WaveTemplate` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `_Warehouse` | | ✓ | | | | |
| `_WarehouseOrderStatusText` | | ✓ | | | | |
| `_WhseOrderCtnRule` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_Wave` | | ✓ | | | | |
| `_WarehouseOrderQueue` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_WarehouseOrderStatusText` | `I_EWM_WarehouseOrderStatusText` | [0..*] |
| `_WhseOrderCtnRule` | `I_EWM_WhseOrderCtnRule_2` | [0..1] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_Wave` | `I_EWM_WaveHeader_2` | [0..1] |
| `_WarehouseOrderQueue` | `I_EWM_WarehouseOrderQueue_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEORDERCUBE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Warehouse Order - Cube'

@ObjectModel.compositionRoot: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@Metadata.allowExtensions:true
@VDM.viewType:#COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL

define view entity I_EWM_WhseOrderCube_2
  with parameters
    @Environment.systemField: #SYSTEM_LANGUAGE
    @Consumption.hidden
    P_Language : /scwm/lang
  as select from P_EWM_WarehouseOrder_2
  association [0..1] to I_EWM_WarehouseNumber_2        as _Warehouse                on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_WarehouseOrderStatusText as _WarehouseOrderStatusText on  $projection.WarehouseOrderStatus = _WarehouseOrderStatusText.WarehouseOrderStatus
  association [0..1] to I_EWM_WhseOrderCtnRule_2       as _WhseOrderCtnRule         on  $projection.WarehouseOrderCreationRule = _WhseOrderCtnRule.WarehouseOrderCreationRule
                                                                                    and $projection.EWMWarehouse               = _WhseOrderCtnRule.EWMWarehouse
  association [0..1] to I_EWM_ActivityArea_2           as _ActivityArea             on  $projection.ActivityArea = _ActivityArea.ActivityArea
                                                                                    and $projection.EWMWarehouse = _ActivityArea.EWMWarehouse
  association [0..1] to I_EWM_WaveHeader_2             as _Wave                     on  $projection.Wave         = _Wave.Wave
                                                                                    and $projection.EWMWarehouse = _Wave.EWMWarehouse
  association [0..1] to I_EWM_WarehouseOrderQueue_2    as _WarehouseOrderQueue      on  $projection.WarehouseOrderQueue = _WarehouseOrderQueue.WarehouseOrderQueue
                                                                                    and $projection.EWMWarehouse        = _WarehouseOrderQueue.EWMWarehouse
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key EWMWarehouse,
  key WarehouseOrder,
      //replace COUNT by SUM for sake of performance
      @DefaultAggregation: #SUM
      1.0                                                                                                        as NumberOfWarehouseOrders,
      WarehouseOrderCreationRule,
      WhseOrderCreationRuleCategory,
      WhseProcessTypeDocumentHdr,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWave'
      Wave,
      EWMWave,
      WarehouseOrderStatus,
      _WarehouseOrderStatusText[1:Language = $parameters.P_Language].WarehouseOrderStatusName                    as WarehouseOrderStatusName,
      @ObjectModel.foreignKey.association: '_ActivityArea'
      ActivityArea,
      EWMStorageType,
      EWMStorageBin,
      WrhsOrdCrtnUTCDateTime,
      CreatedByUser,
      @ObjectModel.foreignKey.association: '_WarehouseOrderQueue'
      Queue                                                                                                      as WarehouseOrderQueue,
      WarehouseOrderStartDateTime                                                                                as WrhsOrdStrtUTCDateTime,
      WarehouseOrderStartTimeIsFixed,
      WhseOrderConfirmedDateTime                                                                                 as WhseOrderConfUTCDateTime,
      WarehouseOrderConfirmedBy,
      Processor,
      ExecutingResource,
      ProcessorIsManualAssigned,
      WarehouseOrderHasPhysInvtryDoc,
      WhseOrderForSplitWhseOrder,
      WarehouseOrderIsSplit,
      ResourceStartBin,
      WhseOrderLatestStartDateTime                                                                               as LatestStartUTCDateTime,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'WhseOrderPlanDurationTimeUnit'} }
      WarehouseOrderPlannedDuration,
      WhseOrderPlanDurationTimeUnit,
      WhseOrderLastChgUTCDateTime,
      LastChangedByUser,
      WhseOrderHigherLevelWhseOrder,
      WhseOrderSubsequentWhseOrder,
      WhseOrderHasSubsqntWhseOrder,
      WarehouseOrderHasWhseTask,
      HzdsSubstanceIsRlvtForStorage,

      WhseOrderCrtnWhseTmznDateTime,
      cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 4)   as abap.numc( 4 ) )         as WhseOrderCrtnWhseTmznYear,
      cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 6)     as abap.numc( 6 ) )       as WhseOrderCrtnWhseTmznMonth,
      cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 8)  as abap.dats)                as WhseOrderCrtnWhseTmznDate,
      cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 1, 10)     as abap.numc( 10 ) )     as WhseOrderCrtnWhseTmznHour,
      cast(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)                 as WhseOrderCrtnWhseTmznTime,
      cast(concat(substring(cast(WhseOrderCrtnWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)   as WhseOrderCrtnRnddTo10MinsTime,

      WhseOrdLtstStrtWhseTmznDteTme,
      cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 4)       as abap.numc( 4 ) )     as WhseOrdLtstStrtWhseTmznYear,
      cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 6)        as abap.numc( 6 ) )    as WhseOrdLtstStrtWhseTmznMonth,
      cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 8)  as abap.dats)                as WhseOrdLtstStrtWhseTmznDate,
      cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 1, 10)  as abap.numc( 10 ) )        as WhseOrdLtstStrtWhseTmznHour,
      cast(substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 9, 6) as abap.tims)                 as WhseOrdLtstStrtWhseTmznTime,
      cast(concat( substring(cast(WhseOrdLtstStrtWhseTmznDteTme as abap.char( 17 )), 9, 3), '000') as abap.tims) as WhseOrdLtstStrtRnddTo10MinsTme,
      WhseOrderConfWhseTmznDateTime,
      cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 4)       as abap.numc( 4 ) )     as WhseOrderConfWhseTmznYear,
      cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 6)       as abap.numc( 6 ) )     as WhseOrderConfWhseTmznMonth,
      cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 8)  as abap.dats)                as WhseOrderConfWhseTmznDate,
      cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 1, 10)  as abap.numc( 10 ) )        as WhseOrderConfWhseTmznHour,
      cast(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)                 as WhseOrderConfWhseTmznTime,
      cast(concat(substring(cast(WhseOrderConfWhseTmznDateTime as abap.char( 17 )), 9, 3),'000') as abap.tims)   as WhseOrderConfRnddTo10MinsTime,

      case when WarehouseOrderStatus = '' and WhseOrderLatestStartDateTime <> 00000000000000    then
            case when OpenMod = 0   then WhseOrderOverdueHours
              else case when WhseOrderLatestStartDateTime < tstmp_current_utctimestamp()    then WhseOrderOverdueHours+1
                else WhseOrderOverdueHours
                end
              end
      else case when WarehouseOrderStatus = 'C' and WhseOrderLatestStartDateTime <> 00000000000000  then
            case when ConfirmedMod = 0  then WhseOrderOverdueHours
              else case when WhseOrderLatestStartDateTime < WhseOrderConfirmedDateTime    then WhseOrderOverdueHours+1
                else WhseOrderOverdueHours
                end
              end
      else WhseOrderOverdueHours  end
      end                                                                                                        as WhseOrderOverdueHours,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMWaveItem'
      '000000'                                                                                                   as WaveItem,
      '000000'                                                                                                   as EWMWaveItem,
      _Wave.PlndLoadCompletionUTCDateTime,
      _Wave.PlndPackCompletionUTCDateTime,
      _Wave.PlndPickCompltnUTCDateTime,
      _Wave.PlndStagingCompltnUTCDateTime,
      _Wave.WaveActlReleasedUTCDateTime,

      _Wave.WaveCutoffWhseTmznDateTime,
      _Wave.WavePlndRelWhseTmznDateTime,
      _Wave.PlndPickCmpltWhseTmznDateTime,
      _Wave.PlndPackCmpltWhseTmznDateTime,
      _Wave.PlndStggCmpltWhseTmznDateTime,
      _Wave.WaveCompletionWhseTmznDateTime,
      _Wave.WaveActualReldWhseTmznDateTime,
      cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 4)  as abap.numc( 4 ) )   as WaveActualReldWhseTmznYear,
      cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 6)  as abap.numc( 6 ) )   as WaveActualReldWhseTmznMonth,
      cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 8)  as abap.dats)         as WaveActualReldWhseTmznDate,
      cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 1, 10)  as abap.numc( 10 ) ) as WaveActualReldWhseTmznHour,
      cast(substring(cast(_Wave.WaveActualReldWhseTmznDateTime as abap.char( 17 )), 9, 6) as abap.tims)          as WaveActualReldWhseTmznTime,

      _Wave._WaveTmpl.WaveTemplate,
      _Wave._WaveTmpl._Text[1:Language = $parameters.P_Language].WaveTemplateName,
      _Warehouse,
      _WarehouseOrderStatusText,
      _WhseOrderCtnRule,
      _ActivityArea,
      _WarehouseOrderQueue,
      _Wave
}
```
