---
name: I_APMOBJECTLIST
description: "APM Object List"
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value
semantic_en: "APM Object List"
semantic_vi: "APM Object List — CDS view giao diện dựa trên APM Object List."
keywords:
  - "apm"
  - "object"
  - "list"
  - "date"
  - "number"
  - "type"
  - "reference"
  - "file"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
---
# I_APMOBJECTLIST

**APM Object List**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `APMObjectListUUID` | ✓ | |  | `guid` | `RAW(16)` | Globally Unique Identifier |
| `APMObjectListDate` |  | |  | `ol_date` | `DATS(8)` | Object List Date |
| `APMObjectListNumber` |  | |  | `ol_no` | `NUMC(12)` | Object List Number from Number Range (Secondary Key) |
| `APMObjectListType` |  | |  | `ol_type` | `CHAR(6)` | Object List Type |
| `APMReferenceFileName` |  | |  | `ref_ext` | `CHAR(255)` | External Filename Reference of Object List |
| `APMReceiverConfirmationCode` |  | |  | `disp_stat` | `CHAR(6)` | External Status |
| `APMFormat` |  | |  | `in_out_format` | `CHAR(10)` | Format |
| `APMMedium` |  | |  | `medium` | `CHAR(4)` | Medium |
| `APMChannel` |  | |  | `channel` | `CHAR(10)` | Channel |
| `PaymentFileMsgIdentification` |  | |  | `ref_ext_id` | `CHAR(35)` | External Reference ID (File or Message) |
| `APMMessageCreationDateTime` |  | |  | `timestamp_file_creation` | `CHAR(14)` | File creation Timestamp (external) |
| `APMObjectListProcessStatusCode` |  | |  | `tech_stat` | `CHAR(3)` | Technical Status of Object List |
| `APMObjListFileHandlerStartDate` |  | |  | `fh_start_date` | `DATS(8)` | Start Date of the File Handler Process |
| `APMObjListFileHandlerStartTime` |  | |  | `fh_start_time` | `TIMS(6)` | Start Time of the File Handler Process |
| `APMObjListFileHandlerEndDate` |  | |  | `fh_end_date` | `DATS(8)` | End Date of the File Handler Process |
| `APMObjListFileHandlerEndTime` |  | |  | `fh_end_time` | `TIMS(6)` | End Time of the File Handler Process |
| `APMGroupingID` |  | |  | `grouping_id` | `CHAR(22)` | Grouping Master Data Object ID |
| `APMPlannedProcessingDate` |  | |  | `pl_proc_date` | `DATS(8)` | Planned Processing Date of Object List |
| `APMPlannedProcessingTime` |  | |  | `pl_proc_time` | `TIMS(6)` | Planned Processing Time of the Object List |
| `HierarchyTreeType` |  | |  | `tree_type` | `CHAR(4)` | DMEE: tree type |
| `HierarchyTree` |  | |  | `format_tree` | `CHAR(30)` | DMEE: unique description for a DMEE format tree |
| `APMGroupProcessStatusCode` |  | |  | `group_status` | `CHAR(3)` | Group Processing Status |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMOBJECTLIST')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'APM Object List'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_APMObjectList 
  as select from /pf1/db_olist
{
  key guid                    as APMObjectListUUID,
      ol_date                 as APMObjectListDate,
      ol_no                   as APMObjectListNumber,
      ol_type                 as APMObjectListType,
      ref_ext                 as APMReferenceFileName,
      //      ref_any_1               as RefAny1,
      //      ref_any_2               as RefAny2,
      //      ref_any_3               as RefAny3,
      //      ref_any_4               as RefAny4,
      //      ref_any_5               as RefAny5,
      disp_stat               as APMReceiverConfirmationCode,
      in_out_format           as APMFormat,
      medium                  as APMMedium,
      channel                 as APMChannel,
      //      bulk_type               as BulkType,
      //      flg_post_cancel         as FlgPostCancel,
      //      ref_ext_no              as RefExtNo,
      ref_ext_id              as PaymentFileMsgIdentification,
      //      laufd                   as Laufd,
      //      laufi                   as Laufi,
      @Semantics.dateTime:true
      timestamp_file_creation as APMMessageCreationDateTime,
      tech_stat               as APMObjectListProcessStatusCode,
      //      prev_tech_stat          as PrevTechStat,
      //      flg_single_cla          as FlgSingleCla,
      //      clearing_area           as ClearingArea,
      //      cnt_objects             as CntObjects,
      //      cnt_ok_objects          as CntOkObjects,
      //      cnt_transaction         as CntTransaction,
      fh_start_date           as APMObjListFileHandlerStartDate,
      fh_start_time           as APMObjListFileHandlerStartTime,
      fh_end_date             as APMObjListFileHandlerEndDate,
      fh_end_time             as APMObjListFileHandlerEndTime,
      grouping_id             as APMGroupingID,
      pl_proc_date            as APMPlannedProcessingDate,
      pl_proc_time            as APMPlannedProcessingTime,
      //      snd_int_ref             as SndIntRef,
      //      snd_company_code        as SndCompanyCode,
      //      rcv_country             as RcvCountry,
      //      rcv_bankkey             as RcvBankkey,
      //      rcv_bic                 as RcvBic,
      tree_type               as HierarchyTreeType,
      format_tree             as HierarchyTree,
      group_status            as APMGroupProcessStatusCode
      //      crusr                   as Crusr,
      //      crdat                   as Crdat,
      //      crtim                   as Crtim,
      //      chusr                   as Chusr,
      //      chdat                   as Chdat,
      //      chtim                   as Chtim,
      //      rlusr                   as Rlusr,
      //      rldat                   as Rldat,
      //      rltim                   as Rltim,
      //      archive_status          as ArchiveStatus,
      //      archive_flud            as ArchiveFlud,
      //      rejection               as Rejection
}
```
