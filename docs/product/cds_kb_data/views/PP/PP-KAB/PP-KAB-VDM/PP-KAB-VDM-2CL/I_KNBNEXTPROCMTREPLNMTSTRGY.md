---
name: I_KNBNEXTPROCMTREPLNMTSTRGY
description: "Knbnextprocmtreplnmtstrgy"
app_component: PP-KAB-VDM-2CL
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
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNEXTPROCMTREPLNMTSTRGY

**Knbnextprocmtreplnmtstrgy**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
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
| `Plant` | ✓ | |  | `werks` |  |  |
| `ExtProcurementReplnmtStrgy` | ✓ | |  | `pkstf` |  |  |
| `KnbnCtrlCycExtProcmtCtrlType` |  | |  | `pksaf` |  |  |
| `GoodsReceiptMovementType` |  | |  | `bwawe` |  |  |
| `SignalLockingTimeInMinutes` |  | |  | `aussp` |  |  |
| `PurchasingOrderType` |  | |  | `bsart` |  |  |
| `PostCnsmpnToCostCtrExtProcmt` |  | |  | `cnscc` |  |  |
| `PostCnsmpnToCostCtrMvtType` |  | |  | `bwacc` |  |  |
| `SubDaySchedulingIsConsdrd` |  | |  | `uttrm` |  |  |
| `UsageOfPackingInstructions` |  | |  | `vpack` |  |  |
| `CostCenterAcctAsgtCategory` |  | |  | `knttp` |  |  |
| `KanbanCtrlCycPrintFormTemplate` |  | |  | `cc_print_form` |  |  |
| `KanbanCtnPrintFormTemplate` |  | |  | `kbform` |  |  |
| `GoodsMvtIsPostedSynchronously` |  | |  | `post_sync_ewm_im` |  |  |
| `SchedulingIsBasedOnCalcProfile` |  | |  | `kzakb` |  |  |
| `KnbnSDSchedgAgrmtDelivCrtnType` |  | |  | `sddkz` |  |  |
| `_Text` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KnbnExtProcmtReplnmtStrgyTxt` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNPROCSTRAT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle External Procurement Strategy'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ExtProcurementReplnmtStrgy'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'ExtProcurementReplnmtStrgy'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.compiler.compareFilter: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions:true
define view I_KnbnExtProcmtReplnmtStrgy
  as select from tpk02

  association [0..*] to I_KnbnExtProcmtReplnmtStrgyTxt as _Text  on  $projection.ExtProcurementReplnmtStrgy = _Text.ExtProcurementReplnmtStrgy
                                                                 and $projection.Plant                      = _Text.Plant
  association [0..1] to I_Plant                        as _Plant on  $projection.Plant = _Plant.Plant

{
      @ObjectModel.foreignKey.association: '_Plant'
  key werks            as Plant,
      @ObjectModel.text.association: '_Text'
  key pkstf            as ExtProcurementReplnmtStrgy,
      pksaf            as KnbnCtrlCycExtProcmtCtrlType,
      bwawe            as GoodsReceiptMovementType,
      aussp            as SignalLockingTimeInMinutes,
      bsart            as PurchasingOrderType,
      cnscc            as PostCnsmpnToCostCtrExtProcmt,
      bwacc            as PostCnsmpnToCostCtrMvtType,
      uttrm            as SubDaySchedulingIsConsdrd,
      vpack            as UsageOfPackingInstructions,
      knttp            as CostCenterAcctAsgtCategory,
      cc_print_form    as KanbanCtrlCycPrintFormTemplate,
      kbform           as KanbanCtnPrintFormTemplate,
      post_sync_ewm_im as GoodsMvtIsPostedSynchronously,
      kzakb            as SchedulingIsBasedOnCalcProfile,
      sddkz            as KnbnSDSchedgAgrmtDelivCrtnType,      
      
      _Text,
      _Plant
}
```
