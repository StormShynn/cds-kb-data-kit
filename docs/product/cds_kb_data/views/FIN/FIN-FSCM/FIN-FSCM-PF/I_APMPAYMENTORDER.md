---
name: I_APMPAYMENTORDER
description: "APM Payment Order"
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value
semantic_en: "APM Payment Order"
semantic_vi: "APM Payment Order — CDS view giao diện dựa trên APM Payment Order."
keywords:
  - "apm"
  - "payment"
  - "order"
  - "clearing"
  - "area"
  - "date"
  - "number"
  - "process"
  - "status"
  - "code"
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - order
  - payment
---
# I_APMPAYMENTORDER

**APM Payment Order**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentOrderUUID` | ✓ | |  | `guid` | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` |  | |  | `clearing_area` | `CHAR(6)` | Clearing Area |
| `APMPaymentOrderDate` |  | |  | `po_date` | `DATS(8)` | Payment Order Date |
| `APMPaymentOrderNumber` |  | |  | `po_no` | `NUMC(12)` | Payment Order Number From Number Range |
| `APMPayOrderProcessStatusCode` |  | |  | `tech_stat` | `CHAR(3)` | Technical Status of Payment Order |
| `PaymentOrderType` |  | |  | `po_type` | `CHAR(6)` | Payment Order Type |
| `APMPlannedProcessingDate` |  | |  | `pl_proc_date` | `DATS(8)` | Execution Date (Planned) |
| `APMPlannedProcessingTime` |  | |  | `pl_proc_time` | `TIMS(6)` | Execution Time (Planned) |
| `APMInternalCreationProcess` |  | |  | `process` | `CHAR(4)` | Creation Process of Payment Object |
| `APMFormat` |  | |  | `in_out_format` | `CHAR(10)` | Format |
| `APMMedium` |  | |  | `medium` | `CHAR(4)` | Medium |
| `APMChannel` |  | |  | `channel` | `CHAR(10)` | Channel |
| `PaymentOrderScenario` |  | |  | `payment_scenario` | `CHAR(1)` | Payment Scenario Description |
| `CreationUserName` |  | |  | `crusr` | `CHAR(12)` | Creating User |
| `CreationDate` |  | |  | `crdat` | `DATS(8)` | Creation Date |
| `CreationTime` |  | |  | `crtim` | `TIMS(6)` | Creation Time |
| `PaytInformationIdentification` |  | |  | `ref_ext_po` | `CHAR(35)` | External Payment Order Number |
| `APMObjectListDate` |  | |  | `ol_date` | `DATS(8)` | Object List Date |
| `APMObjectListNumber` |  | |  | `ol_no` | `NUMC(12)` | Object List Number from Number Range (Secondary Key) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'APM Payment Order'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view entity I_APMPaymentOrder 
  as select from /pf1/db_order
{
  key guid             as PaymentOrderUUID,
      clearing_area    as ClearingArea,
      po_date          as APMPaymentOrderDate,
      po_no            as APMPaymentOrderNumber,
      tech_stat        as APMPayOrderProcessStatusCode,
      po_type          as PaymentOrderType,
      pl_proc_date     as APMPlannedProcessingDate,
      pl_proc_time     as APMPlannedProcessingTime,
      process          as APMInternalCreationProcess,
      in_out_format    as APMFormat,
      medium           as APMMedium,
      channel          as APMChannel,
      payment_scenario as PaymentOrderScenario, //APMPaymentOrderScenario,
      crusr            as CreationUserName,
      crdat            as CreationDate,
      crtim            as CreationTime,
      //      prev_tech_stat            as PrevTechStat,
      //      snd_company_code          as SndCompanyCode,
      ref_ext_po       as PaytInformationIdentification,
      //      cnt_tov_items             as CntTovItems,
      //      release_amount            as ReleaseAmount,
      //      release_curr              as ReleaseCurr,
      //      due_date                  as DueDate,
      //      disp_stat                 as DispStat,
      //      proc_date                 as ProcDate,
      //      proc_time                 as ProcTime,
      //      priority                  as Priority,
      //      reversal_code             as ReversalCode,
      //      file_number               as FileNumber,
      //      file_crdate               as FileCrdate,
      //      flg_fh_error              as FlgFhError,
      //      flg_enforce_proc          as FlgEnforceProc,
      //      po_size                   as PoSize,
      //      flg_eh_error              as FlgEhError,
      //      ipo_resub_stat            as IpoResubStat,
      //      flg_listener_reg          as FlgListenerReg,
      //      update_counter            as UpdateCounter,
      //      btchbookg                 as Btchbookg,
      //      tech_priority             as TechPriority,
      //      segmentation_key          as SegmentationKey,
      //      snd_int_country           as SndIntCountry,
      //      snd_int_bankkey           as SndIntBankkey,
      //      snd_int_bic               as SndIntBic,
      //      snd_int_iban              as SndIntIban,
      //      snd_int_acc               as SndIntAcc,
      //      snd_int_acc_cur           as SndIntAccCur,
      //      snd_int_acc_hldr          as SndIntAccHldr,
      //      snd_int_ref               as SndIntRef,
      //      snd_bam_id                as SndBamId,
      //      rcv_country               as RcvCountry,
      //      rcv_bankkey               as RcvBankkey,
      //      rcv_bic                   as RcvBic,
      //      rcv_name                  as RcvName,
      //      flg_add_info              as FlgAddInfo,
      //      risk_score                as RiskScore,
      //      payment_method            as PaymentMethod,
      //      payment_method_supplement as PaymentMethodSupplement,
      //      lcl_instrument            as LclInstrument,
      //      category_purpose_code     as CategoryPurposeCode,
      //      service_level             as ServiceLevel,
      ol_date          as APMObjectListDate,
      ol_no            as APMObjectListNumber
      //      cnt_orp_items             as CntOrpItems,
      //      cnt_rcp_items             as CntRcpItems,
      //      cnt_clr_items             as CntClrItems,
      //      cnt_entry_items           as CntEntryItems,
      //      sum_items                 as SumItems,
      //      sum_curr                  as SumCurr,
      //      ref_coll_date             as RefCollDate,
      //      ref_coll_no               as RefCollNo,
      //      ref_coll_seq_no           as RefCollSeqNo,
      //      release_activity          as ReleaseActivity,
      //      release_status            as ReleaseStatus,
      //      flg_ev_status             as FlgEvStatus,
      //      ev_id_order               as EvIdOrder,
      //      ev_id_x_item              as EvIdXItem,
      //      continue_ev               as ContinueEv,
      //      check_sum_method          as CheckSumMethod,
      //      flg_dup_check             as FlgDupCheck,
      //      flg_dup_checksum          as FlgDupChecksum,
      //      timestamp_sbm_ps          as TimestampSbmPs,
      //      po_auth_flag              as PoAuthFlag,
      //      checksum                  as Checksum,
      //      timestamp_fct_ps          as TimestampFctPs,
      //      orp_split                 as OrpSplit,
      //      ref_cust_grp              as RefCustGrp,
      //      ref_customer              as RefCustomer,
      //      ref_cust_sgm              as RefCustSgm,
      //      ref_recall_date           as RefRecallDate,
      //      ref_recall_no             as RefRecallNo,
      //      auth_pending              as AuthPending,
      //      auth_po_id                as AuthPoId,
      //      auth_timestamp            as AuthTimestamp,
      //      orp_val_date_1            as OrpValDate1,
      //      orp_val_date_2            as OrpValDate2,
      //      flg_hold_valdate          as FlgHoldValdate,
      //      sett_date                 as SettDate,
      //      flg_multi_coll            as FlgMultiColl,
      //      flg_multi_proc            as FlgMultiProc,
      //      archive_status            as ArchiveStatus,
      //      archive_flud              as ArchiveFlud,
      //      rejection                 as Rejection,
      //      chusr                     as Chusr,
      //      chdat                     as Chdat,
      //      chtim                     as Chtim,
      //      rlusr                     as Rlusr,
      //      rldat                     as Rldat,
      //      rltim                     as Rltim
}
```
