---
name: I_EWM_WAREHOUSEORDER_2
description: "Ewm Warehouse Order 2"
app_component: SCM-EWM-WOP-2CL
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
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - warehouse
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAREHOUSEORDER_2

**Ewm Warehouse Order 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
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
| `EWMWarehouse` | ✓ | |  | `lgnum` |  |  |
| `WarehouseOrder` | ✓ | |  | `cast ( who as /scwm/de_who_conv_alpha preserving type )` |  |  |
| `WarehouseOrderCreationRule` |  | |  | `wcr` |  |  |
| `WhseOrderCreationRuleCategory` |  | |  | `type` |  |  |
| `WhseProcessTypeDocumentHdr` |  | |  | `hdr_procty` |  |  |
| `Wave` |  | |  | `cast ( wave as /scwm/de_wave_conv_alpha preserving type )` |  |  |
| `EWMWave` |  | |  | `cast ( wave as ewm_de_wave preserving type )` |  |  |
| `WarehouseOrderStatus` |  | |  | `status` |  |  |
| `ActivityArea` |  | |  | `areawho` |  |  |
| `EWMStorageType` |  | |  | `lgtyp` |  |  |
| `EWMStorageBin` |  | |  | `lgpla` |  |  |
| `WrhsOrdCrtnUTCDateTime` |  | |  | `cast( created_at as /scwm/de_created_dt_noconv preserving type )` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `Queue` |  | |  | `queue` |  |  |
| `WarehouseOrderStartDateTime` |  | |  | `cast ( started_at as /scwm/de_started_dt_noconv preserving type )` |  |  |
| `WarehouseOrderStartTimeIsFixed` |  | |  | `start_fixed` |  |  |
| `WhseOrderConfirmedDateTime` |  | |  | `cast ( confirmed_at as /scwm/de_confirmed_dt_noconv preserving type )` |  |  |
| `WarehouseOrderConfirmedBy` |  | |  | `confirmed_by` |  |  |
| `Processor` |  | |  | `cast( processor as /scwm/de_processor_conv_alpha preserving type )` |  |  |
| `ExecutingResource` |  | |  | `rsrc` |  |  |
| `ProcessorIsManualAssigned` |  | |  | `man_assign` |  |  |
| `WarehouseOrderHasPhysInvtryDoc` |  | |  | `flginv` |  |  |
| `WhseOrderForSplitWhseOrder` |  | |  | `cast ( splitwhoid as /scwm/de_splitwo_conv_alpha preserving type )` |  |  |
| `WarehouseOrderIsSplit` |  | |  | `flgsplit` |  |  |
| `ResourceStartBin` |  | |  | `start_bin` |  |  |
| `WhseOrderLatestStartDateTime` |  | |  | `cast( lsd as /scwm/de_lsd_noconv preserving type )` |  |  |
| `WarehouseOrderPlannedDuration` |  | |  | `plandura` |  |  |
| `WhseOrderPlanDurationTimeUnit` |  | |  | `unit_t` |  |  |
| `WhseOrderLastChgUTCDateTime` |  | |  | `cast( changed_at as /scwm/de_changed_dt_noconv preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `changed_by` |  |  |
| `WhseOrderHigherLevelWhseOrder` |  | |  | `cast ( topwhoid as /scwm/de_topwho_conv_alpha preserving type )` |  |  |
| `WhseOrderSubsequentWhseOrder` |  | |  | `cast ( refwhoid as /scwm/de_refwho_conv_alpha preserving type )` |  |  |
| `WhseOrderHasSubsqntWhseOrder` |  | |  | `flgwho` |  |  |
| `WarehouseOrderHasWhseTask` |  | |  | `flgto` |  |  |
| `WarehouseOrderLogicalNumber` |  | |  | `whologno` |  |  |
| `HzdsSubstanceIsRlvtForStorage` |  | |  | `hazmat` |  |  |
| `WarehouseOrderUUID` |  | |  | `whoid` |  |  |
| `WhseOrderCrtnWhseTmznDateTime` |  | |  | `cast( created_at_wh as timestamp preserving type )` |  |  |
| `WhseOrderStrtWhseTmznDateTime` |  | |  | `cast( started_at_wh as timestamp preserving type )` |  |  |
| `WhseOrdLtstStrtWhseTmznDteTme` |  | |  | `cast( lsd_wh as timestamp preserving type )` |  |  |
| `WhseOrderConfWhseTmznDateTime` |  | |  | `cast( confirmed_at_wh as timestamp preserving type )` |  |  |
| `WhseOrderChgdWhseTmznDateTime` |  | |  | `cast( changed_at_wh as timestamp preserving type )` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM.viewType: #BASIC
@EndUserText.label: 'Warehouse Order'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'WarehouseOrder'
define view entity I_EWM_WarehouseOrder_2
  as select from /scwm/who
{
  key lgnum                                                                 as EWMWarehouse,
  key cast ( who as /scwm/de_who_conv_alpha preserving type )               as WarehouseOrder,
      wcr                                                                   as WarehouseOrderCreationRule,
      type                                                                  as WhseOrderCreationRuleCategory,
      hdr_procty                                                            as WhseProcessTypeDocumentHdr,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor: 'EWMWave'
      cast ( wave as /scwm/de_wave_conv_alpha preserving type )             as Wave,
      cast ( wave as ewm_de_wave preserving type )                          as EWMWave,
      status                                                                as WarehouseOrderStatus,
      areawho                                                               as ActivityArea,
      lgtyp                                                                 as EWMStorageType,
      lgpla                                                                 as EWMStorageBin,
      cast( created_at as /scwm/de_created_dt_noconv preserving type )      as WrhsOrdCrtnUTCDateTime,
      created_by                                                            as CreatedByUser,
      queue                                                                 as Queue,
      cast ( started_at as /scwm/de_started_dt_noconv preserving type )     as WarehouseOrderStartDateTime,
      start_fixed                                                           as WarehouseOrderStartTimeIsFixed,
      cast ( confirmed_at as /scwm/de_confirmed_dt_noconv preserving type ) as WhseOrderConfirmedDateTime,
      confirmed_by                                                          as WarehouseOrderConfirmedBy,
      cast( processor as /scwm/de_processor_conv_alpha preserving type )    as Processor,
      rsrc                                                                  as ExecutingResource,
      man_assign                                                            as ProcessorIsManualAssigned,
      flginv                                                                as WarehouseOrderHasPhysInvtryDoc,
      cast ( splitwhoid as /scwm/de_splitwo_conv_alpha preserving type )    as WhseOrderForSplitWhseOrder,
      flgsplit                                                              as WarehouseOrderIsSplit,
      //    ResourceStartBin is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      start_bin                                                             as ResourceStartBin,
      cast( lsd as /scwm/de_lsd_noconv preserving type )                    as WhseOrderLatestStartDateTime,
      @Semantics.quantity.unitOfMeasure: 'WHSEORDERPLANDURATIONTIMEUNIT'
      plandura                                                              as WarehouseOrderPlannedDuration,
      unit_t                                                                as WhseOrderPlanDurationTimeUnit,
      cast( changed_at as /scwm/de_changed_dt_noconv preserving type )      as WhseOrderLastChgUTCDateTime,
      changed_by                                                            as LastChangedByUser,
      //    WhseOrderHigherLevelWhseOrder is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      cast ( topwhoid as /scwm/de_topwho_conv_alpha preserving type )       as WhseOrderHigherLevelWhseOrder,
      //    WhseOrderSubsequentWhseOrder is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      cast ( refwhoid as /scwm/de_refwho_conv_alpha preserving type )       as WhseOrderSubsequentWhseOrder,
      //    WhseOrderHasSubsqntWhseOrder is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      flgwho                                                                as WhseOrderHasSubsqntWhseOrder,
      flgto                                                                 as WarehouseOrderHasWhseTask,
      whologno                                                              as WarehouseOrderLogicalNumber,
      //    HzdsSubstanceIsRlvtForStorage is not supported in cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      hazmat                                                                as HzdsSubstanceIsRlvtForStorage,
      whoid                                                                 as WarehouseOrderUUID,
      cast( created_at_wh as timestamp preserving type )                    as WhseOrderCrtnWhseTmznDateTime,
      cast( started_at_wh as timestamp preserving type )                    as WhseOrderStrtWhseTmznDateTime,
      cast( lsd_wh as timestamp preserving type )                           as WhseOrdLtstStrtWhseTmznDteTme,
      cast( confirmed_at_wh as timestamp preserving type )                  as WhseOrderConfWhseTmznDateTime,
      cast( changed_at_wh as timestamp preserving type )                    as WhseOrderChgdWhseTmznDateTime

}
```
