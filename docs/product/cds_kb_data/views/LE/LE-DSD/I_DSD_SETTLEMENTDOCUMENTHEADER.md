---
name: I_DSD_SETTLEMENTDOCUMENTHEADER
description: "Dsd Settlementdocumentheader"
app_component: LE-DSD
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
  - LE
  - LE-DSD
  - interface-view
  - document
  - header-level
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_SETTLEMENTDOCUMENTHEADER

**Dsd Settlementdocumentheader**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
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
| `DSD_SettlementDocument` | ✓ | |  | `sld_doc_id` |  |  |
| `MainDriver` |  | |  | `driver` |  |  |
| `ForwardingAgent` |  | |  | `carrier` |  |  |
| `RouteSettlementOffice` |  | |  | `bso` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `RouteSettlementType` |  | |  | `sl_typ` |  |  |
| `OverallSettlementStatus` |  | |  | `sl_status` |  |  |
| `FinalCheckOutDifferencesStatus` |  | |  | `chko_diff_ok` |  |  |
| `FinalReturnsLoadingNoteStatus` |  | |  | `ret_load_ok` |  |  |
| `FinalTourTimeDataStatus` |  | |  | `timdat_ok` |  |  |
| `FinalTourDistanceDataStatus` |  | |  | `dstdat_ok` |  |  |
| `FinalNewStandardOrdersStatus` |  | |  | `new_ord_ok` |  |  |
| `FnlSlsOrdsAndDelivsProcStatus` |  | |  | `cstdocs_ok` |  |  |
| `FinalDiffDocsForDriverStatus` |  | |  | `drv_diff_ok` |  |  |
| `FinalGoodsMovementsStatus` |  | |  | `gi_post_ok` |  |  |
| `FinalBillingDocumentStatus` |  | |  | `inv_prc_ok` |  |  |
| `FinalCollectionPostingStatus` |  | |  | `post_pymt_ok` |  |  |
| `FinalCollectionClearingStatus` |  | |  | `clr_fi_ok` |  |  |
| `CreatedAtDate` |  | |  | `credate` |  |  |
| `TimeOfCreation` |  | |  | `cretime` |  |  |
| `EnteredByUser` |  | |  | `creuser` |  |  |
| `DocumentFlowDocumentCategory` |  | |  | `doc_type` |  |  |
| `FinalSettlementRunNumber` |  | |  | `fsr_procno` |  |  |
| `Plant` |  | |  | `plant` |  |  |
| `FinalDiffsDeterminationStatus` |  | |  | `bal_ok` |  |  |
| `FinalMoneyDiffsPostingStatus` |  | |  | `mbal_diff_ok` |  |  |
| `FinalLoadingConfDiffsStatus` |  | |  | `lc_diff_ok` |  |  |
| `FinalCheckInDifferencesStatus` |  | |  | `ci_diff_ok` |  |  |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SettlementOffice` | | ✓ | | | | |
| `_SettlementType` | | ✓ | | | | |
| `_SettlementStatus` | | ✓ | | | | |
| `_DocumentCategory` | | ✓ | | | | |
| `_CheckOutDiffStatus` | | ✓ | | | | |
| `_ReturnsLoadingNoteStatus` | | ✓ | | | | |
| `_TourTimeDataStatus` | | ✓ | | | | |
| `_TourDistanceDataStatus` | | ✓ | | | | |
| `_NewStandardOrdersStatus` | | ✓ | | | | |
| `_SlsOrdsAndDelivsProcStatus` | | ✓ | | | | |
| `_DiffDocsForDriverStatus` | | ✓ | | | | |
| `_GoodsMovementsStatus` | | ✓ | | | | |
| `_BillingDocumentStatus` | | ✓ | | | | |
| `_CollectionPostingStatus` | | ✓ | | | | |
| `_CollectionClearingStatus` | | ✓ | | | | |
| `_DiffsDeterminationStatus` | | ✓ | | | | |
| `_MoneyDiffsPostingStatus` | | ✓ | | | | |
| `_LoadingConfDiffsStatus` | | ✓ | | | | |
| `_CheckInDifferencesStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_SettlementOffice` | `I_DSD_RouteSettlementOffice` | [0..1] |
| `_SettlementType` | `I_DSD_RouteSettlementType` | [0..1] |
| `_SettlementStatus` | `I_DSD_OverallSettlementStatus` | [0..1] |
| `_DocumentCategory` | `I_DSD_DocumentCategory` | [0..1] |
| `_CheckOutDiffStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_ReturnsLoadingNoteStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_TourTimeDataStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_TourDistanceDataStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_NewStandardOrdersStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_SlsOrdsAndDelivsProcStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_DiffDocsForDriverStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_GoodsMovementsStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_BillingDocumentStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_CollectionPostingStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_CollectionClearingStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_DiffsDeterminationStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_MoneyDiffsPostingStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_LoadingConfDiffsStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |
| `_CheckInDifferencesStatus` | `I_DSD_FinalSettlmtDetailStatus` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Settlement Document Header'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_SettlementDocumentHeader
  as select from /dsd/sl_sld_head as _Header

  association [0..1] to I_Customer                     as _Customer                   on $projection.MainDriver      = _Customer.Customer
  association [0..1] to I_Supplier                     as _Supplier                   on $projection.ForwardingAgent = _Supplier.Supplier
  association [0..1] to I_User                         as _User                       on $projection.EnteredByUser   = _User.UserID
  
  association [0..1] to I_SalesOrganization            as _SalesOrganization          on $projection.SalesOrganization   = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel        on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division                     as _Division                   on $projection.Division            = _Division.Division
  association [0..1] to I_Plant                        as _Plant                      on $projection.Plant               = _Plant.Plant

  association [0..1] to I_DSD_RouteSettlementOffice    as _SettlementOffice           on $projection.RouteSettlementOffice         = _SettlementOffice.RouteSettlementOffice
  association [0..1] to I_DSD_RouteSettlementType      as _SettlementType             on $projection.RouteSettlementType           = _SettlementType.RouteSettlementType
  association [0..1] to I_DSD_OverallSettlementStatus  as _SettlementStatus           on $projection.OverallSettlementStatus       = _SettlementStatus.OverallSettlementStatus
  association [0..1] to I_DSD_DocumentCategory         as _DocumentCategory           on $projection.DocumentFlowDocumentCategory  = _DocumentCategory.DocumentFlowDocumentCategory

  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _CheckOutDiffStatus         on $projection.FinalCheckOutDifferencesStatus = _CheckOutDiffStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _ReturnsLoadingNoteStatus   on $projection.FinalReturnsLoadingNoteStatus  = _ReturnsLoadingNoteStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _TourTimeDataStatus         on $projection.FinalTourTimeDataStatus        = _TourTimeDataStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _TourDistanceDataStatus     on $projection.FinalTourDistanceDataStatus    = _TourDistanceDataStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _NewStandardOrdersStatus    on $projection.FinalNewStandardOrdersStatus   = _NewStandardOrdersStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _SlsOrdsAndDelivsProcStatus on $projection.FnlSlsOrdsAndDelivsProcStatus  = _SlsOrdsAndDelivsProcStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _DiffDocsForDriverStatus    on $projection.FinalDiffDocsForDriverStatus   = _DiffDocsForDriverStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _GoodsMovementsStatus       on $projection.FinalGoodsMovementsStatus      = _GoodsMovementsStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _BillingDocumentStatus      on $projection.FinalBillingDocumentStatus     = _BillingDocumentStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _CollectionPostingStatus    on $projection.FinalCollectionPostingStatus   = _CollectionPostingStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _CollectionClearingStatus   on $projection.FinalCollectionClearingStatus  = _CollectionClearingStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _DiffsDeterminationStatus   on $projection.FinalDiffsDeterminationStatus  = _DiffsDeterminationStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _MoneyDiffsPostingStatus    on $projection.FinalMoneyDiffsPostingStatus   = _MoneyDiffsPostingStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _LoadingConfDiffsStatus     on $projection.FinalLoadingConfDiffsStatus    = _LoadingConfDiffsStatus.FinalSettlementDetailStatus
  association [0..1] to I_DSD_FinalSettlmtDetailStatus as _CheckInDifferencesStatus   on $projection.FinalCheckInDifferencesStatus  = _CheckInDifferencesStatus.FinalSettlementDetailStatus

{

  key sld_doc_id   as DSD_SettlementDocument,
      driver       as MainDriver,
      carrier      as ForwardingAgent,
      bso          as RouteSettlementOffice,
      vkorg        as SalesOrganization,
      vtweg        as DistributionChannel,
      spart        as Division,
      sl_typ       as RouteSettlementType,
      sl_status    as OverallSettlementStatus,
      chko_diff_ok as FinalCheckOutDifferencesStatus,
      ret_load_ok  as FinalReturnsLoadingNoteStatus,
      timdat_ok    as FinalTourTimeDataStatus,
      dstdat_ok    as FinalTourDistanceDataStatus,
      new_ord_ok   as FinalNewStandardOrdersStatus,
      cstdocs_ok   as FnlSlsOrdsAndDelivsProcStatus,
      drv_diff_ok  as FinalDiffDocsForDriverStatus,
      gi_post_ok   as FinalGoodsMovementsStatus,
      inv_prc_ok   as FinalBillingDocumentStatus,
      post_pymt_ok as FinalCollectionPostingStatus,
      clr_fi_ok    as FinalCollectionClearingStatus,
      credate      as CreatedAtDate,
      cretime      as TimeOfCreation,
      creuser      as EnteredByUser,
      doc_type     as DocumentFlowDocumentCategory,
      fsr_procno   as FinalSettlementRunNumber,
      plant        as Plant,
      bal_ok       as FinalDiffsDeterminationStatus,
      mbal_diff_ok as FinalMoneyDiffsPostingStatus,
      lc_diff_ok   as FinalLoadingConfDiffsStatus,
      ci_diff_ok   as FinalCheckInDifferencesStatus,

      _Customer,
      _Supplier,
      _User,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _Plant,
      _SettlementOffice,
      _SettlementType,
      _SettlementStatus,
      _DocumentCategory,

      _CheckOutDiffStatus,
      _ReturnsLoadingNoteStatus,
      _TourTimeDataStatus,
      _TourDistanceDataStatus,
      _NewStandardOrdersStatus,
      _SlsOrdsAndDelivsProcStatus,
      _DiffDocsForDriverStatus,
      _GoodsMovementsStatus,
      _BillingDocumentStatus,
      _CollectionPostingStatus,
      _CollectionClearingStatus,
      _DiffsDeterminationStatus,
      _MoneyDiffsPostingStatus,
      _LoadingConfDiffsStatus,
      _CheckInDifferencesStatus
      
}
```
