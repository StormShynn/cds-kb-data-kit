---
name: I_TIMESHEETRECORD
description: Timesheetrecord
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-TS
  - interface-view
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETRECORD

**Timesheetrecord**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TimeSheetRecord` | `catsdb.counter` |
| `PersonWorkAgreement` | `catsdb.pernr` |
| `TimeSheetDate` | `catsdb.workdate` |
| `WBSElementInternalID` | `cast(catsdb.rproj as ps_s4_pspnr preserving type)` |
| `ActivityType` | `catsdb.lstar` |
| `WorkItem` | `catsdb.work_item_id` |
| `RecordedHours` | `catsdb.catshours` |
| `HoursUnitOfMeasure` | `catsdb.meinh` |
| `PurchaseOrder` | `catsdb.sebeln` |
| `PurchaseOrderItem` | `catsdb.sebelp` |
| `RecordedAmount` | `catsdb.catsamount` |
| `Currency` | `catsdb.waers` |
| `RecordedQuantity` | `catsdb.catsquantity` |
| `UnitOfMeasure` | `catsdb.unit` |
| `ReceiverCostCenter` | `catsdb.rkostl` |
| `SenderCostCenter` | `catsdb.skostl` |
| `InternalOrder` | `catsdb.raufnr` |
| `ServiceDocumentType` | `catsdb.service_doc_type` |
| `ServiceDocument` | `catsdb.service_doc_id` |
| `ServiceDocumentItem` | `catsdb.service_doc_item_id` |
| `ControllingArea` | `catsdb.kokrs` |
| `TimeSheetTaskType` | `catsdb.tasktype` |
| `TimeSheetTaskLevel` | `catsdb.tasklevel` |
| `TimeSheetTaskComponent` | `catsdb.taskcomponent` |
| `CompanyCode` | `catsdb.bukrs` |
| `TimeSheetNote` | `catsdb.ltxa1` |
| `TimeSheetStatus` | `catsdb.status` |
| `RejectionReason` | `catsdb.reason` |
| `TimeSheetPredecessorRecord` | `catsdb.refcounter` |
| `TimeSheetCreationDate` | `catsdb.ersda` |
| `TimeSheetEntryTime` | `catsdb.erstm` |
| `CreatedByUser` | `catsdb.ernam` |
| `LastChangedByUser` | `catsdb.aenam` |
| `TimeSheetApprovedByUser` | `catsdb.apnam` |
| `TimeSheetApprovedDate` | `catsdb.apdat` |
| `TimeSheetLastChangedDate` | `catsdb.laeda` |
| `TimeSheetLastChangedTime` | `catsdb.laetm` |
| `AccountingIndicatorCode` | `catsdb.bemot` |
| `WorkflowTaskInternalID` | `catsdb.workitemid` |
| `TimeSheetWrkLocCode` | `catsdb.wtart` |
| `TimeSheetOvertimeCategory` | `catsdb.overtimecat` |
| `TimeSheetHasLongText` | `catsdb.longtext` |
| `TimeSheetAccountingDocument` | `catsdb.belnr` |
| `SenderPubSecFund` | `catsdb.s_fund` |
| `SendingPubSecFunctionalArea` | `catsdb.s_func_area` |
| `SenderPubSecGrant` | `catsdb.s_grant_nbr` |
| `SenderPubSecBudgetPeriod` | `catsdb.sbudget_pd` |
| `ReceiverPubSecFund` | `catsdb.fund` |
| `ReceiverPubSecFuncnlArea` | `catsdb.func_area` |
| `ReceiverPubSecGrant` | `catsdb.grant_nbr` |
| `ReceiverPubSecBudgetPeriod` | `catsdb.budget_pd` |
| `_TimeSheetRejReasonText` | *Association* |
| `_TimeSheetStatusText` | *Association* |
| `_TimeSheetWrkLoc` | *Association* |
| `_TimeSheetTaskTypeText` | *Association* |
| `_TimeSheetOvertimeCatText` | *Association* |
| `_TimeSheetRecordLongText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetRejReasonText` | `I_TimeSheetRejectionReasonText` | [0..1] |
| `_TimeSheetStatusText` | `I_TimeSheetStatusText` | [0..1] |
| `_TimeSheetWrkLoc` | `I_TimeSheetWrkLoc` | [0..1] |
| `_TimeSheetTaskTypeText` | `I_TimeSheetTaskTypeText` | [0..1] |
| `_TimeSheetOvertimeCatText` | `I_TimeSheetOvertimeCatText` | [0..1] |
| `_TimeSheetRecordLongText` | `I_TimeSheetRecordLongText` | [0..1] |
| `_TimeSheetRecordExtention` | `E_TimeSheetRecord` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITIMESHEETRECORD'
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_TimeSheetRecordLongText','_TIMESHEETTASKTYPETEXT']
@Analytics: { dataCategory: #FACT, dataExtraction: {enabled: true , delta.changeDataCapture.automatic: true}}
@ObjectModel.representativeKey: 'TimeSheetRecord'
@ObjectModel.usageType.serviceQuality : #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@EndUserText.label: 'Time Recording Data'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,  #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name :'TimeSheet'
define view I_TimeSheetRecord
  as select from catsdb
  association [0..1] to I_TimeSheetRejectionReasonText as _TimeSheetRejReasonText   on  $projection.RejectionReason      = _TimeSheetRejReasonText.TimeSheetRejectionReason
                                                                                    and _TimeSheetRejReasonText.Language = $session.system_language

  association [0..1] to I_TimeSheetStatusText          as _TimeSheetStatusText      on  $projection.TimeSheetStatus   = _TimeSheetStatusText.TimeSheetStatus
                                                                                    and _TimeSheetStatusText.Language = $session.system_language

  association [0..1] to I_TimeSheetWrkLoc              as _TimeSheetWrkLoc          on  $projection.TimeSheetWrkLocCode =       _TimeSheetWrkLoc.TimeSheetWrkLocCode
                                                                                    and $projection.TimeSheetDate       between _TimeSheetWrkLoc.TimeSheetWrkLocStartDate and _TimeSheetWrkLoc.TimeSheetWrkLocEndDate

  association [0..1] to I_TimeSheetTaskTypeText        as _TimeSheetTaskTypeText    on  $projection.TimeSheetTaskType   = _TimeSheetTaskTypeText.TimeSheetTaskType
                                                                                    and _TimeSheetTaskTypeText.Language = $session.system_language

  association [0..1] to I_TimeSheetOvertimeCatText     as _TimeSheetOvertimeCatText on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCatText.TimeSheetOvertimeCategory
                                                                                    and _TimeSheetOvertimeCatText.Language    = $session.system_language

  association [0..1] to I_TimeSheetRecordLongText      as _TimeSheetRecordLongText  on  $projection.TimeSheetRecord       = _TimeSheetRecordLongText.TimeSheetRecord
                                                                                    and _TimeSheetRecordLongText.Language is not null
  ----Extension Association
  association [1..1] to E_TimeSheetRecord              as _TimeSheetRecordExtention on  $projection.TimeSheetRecord = _TimeSheetRecordExtention.TimeSheetRecord
{

  key  catsdb.counter                                    as TimeSheetRecord,
       catsdb.pernr                                      as PersonWorkAgreement,
       catsdb.workdate                                   as TimeSheetDate,
       cast(catsdb.rproj as ps_s4_pspnr preserving type) as WBSElementInternalID,
       catsdb.lstar                                      as ActivityType,
       catsdb.work_item_id                               as WorkItem,
       catsdb.catshours                                  as RecordedHours,
       catsdb.meinh                                      as HoursUnitOfMeasure,
       catsdb.sebeln                                     as PurchaseOrder,
       catsdb.sebelp                                     as PurchaseOrderItem,
       @Semantics.amount.currencyCode: 'Currency'
       catsdb.catsamount                                 as RecordedAmount, 
       @Semantics.currencyCode: true
       catsdb.waers                                      as Currency,
       @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
       catsdb.catsquantity                               as RecordedQuantity,
       @Semantics.unitOfMeasure: true
       catsdb.unit                                       as UnitOfMeasure,
       catsdb.rkostl                                     as ReceiverCostCenter,
       catsdb.skostl                                     as SenderCostCenter,
       catsdb.raufnr                                     as InternalOrder,
       catsdb.service_doc_type                           as ServiceDocumentType,
       catsdb.service_doc_id                             as ServiceDocument,
       catsdb.service_doc_item_id                        as ServiceDocumentItem,
       catsdb.kokrs                                      as ControllingArea,
       catsdb.tasktype                                   as TimeSheetTaskType,
       catsdb.tasklevel                                  as TimeSheetTaskLevel,
       catsdb.taskcomponent                              as TimeSheetTaskComponent,
       catsdb.bukrs                                      as CompanyCode,
       catsdb.ltxa1                                      as TimeSheetNote,
       catsdb.status                                     as TimeSheetStatus,
       catsdb.reason                                     as RejectionReason,
       catsdb.refcounter                                 as TimeSheetPredecessorRecord,
       catsdb.ersda                                      as TimeSheetCreationDate,
       catsdb.erstm                                      as TimeSheetEntryTime,
       catsdb.ernam                                      as CreatedByUser,
       catsdb.aenam                                      as LastChangedByUser,
       catsdb.apnam                                      as TimeSheetApprovedByUser,
       catsdb.apdat                                      as TimeSheetApprovedDate,
       catsdb.laeda                                      as TimeSheetLastChangedDate,
       catsdb.laetm                                      as TimeSheetLastChangedTime,
       catsdb.bemot                                      as AccountingIndicatorCode,
       catsdb.workitemid                                 as WorkflowTaskInternalID,
       catsdb.wtart                                      as TimeSheetWrkLocCode,
       catsdb.overtimecat                                as TimeSheetOvertimeCategory,
       catsdb.longtext                                   as TimeSheetHasLongText,
       catsdb.belnr                                      as TimeSheetAccountingDocument, // added in CE2002
       catsdb.s_fund                                     as SenderPubSecFund,                  //added in CE2111
       catsdb.s_func_area                                as SendingPubSecFunctionalArea,      //added in CE2111
       catsdb.s_grant_nbr                                as SenderPubSecGrant,               //added in CE2111
       catsdb.sbudget_pd                                 as SenderPubSecBudgetPeriod,       //added in CE2111
       catsdb.fund                                       as ReceiverPubSecFund,            //added in CE2111
       catsdb.func_area                                  as ReceiverPubSecFuncnlArea,     //added in CE2111
       catsdb.grant_nbr                                  as ReceiverPubSecGrant,         //added in CE2111
       catsdb.budget_pd                                  as ReceiverPubSecBudgetPeriod, //added in CE2111
       _TimeSheetRejReasonText,
       _TimeSheetStatusText,
       _TimeSheetWrkLoc,
       _TimeSheetTaskTypeText,
       _TimeSheetOvertimeCatText,
       _TimeSheetRecordLongText
}
```
