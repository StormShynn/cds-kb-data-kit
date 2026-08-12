---
name: I_TIMESHEET
description: "Timesheet"
app_component: CA-TS-S4
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_TIMESHEET

**Timesheet**

| Property | Value |
|---|---|
| App Component | `CA-TS-S4` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TimeSheetRecordUUID` | ✓ | |  |  |  |  |
| `TimeSheetRecord` |  | |  |  |  |  |
| `WorkAssignment` |  | |  |  |  |  |
| `TimeSheetDate` |  | |  |  |  |  |
| `RecordedHours` |  | |  |  |  |  |
| `HoursUnitOfMeasure` |  | |  |  |  |  |
| `TimeSheetRecordLongText` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `TimeSheetStatus` |  | |  |  |  |  |
| `TimeSheetPredecessorRecord` |  | |  |  |  |  |
| `TimeSheetAccountingDocument` |  | |  |  |  |  |
| `WorkflowTaskInternalID` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `TimeSheetApprovedByUser` |  | |  |  |  |  |
| `TimeSheetApprovedDate` |  | |  |  |  |  |
| `TimeSheetCreationDate` |  | |  |  |  |  |
| `TimeSheetEntryTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `TimeSheetLastChangedDate` |  | |  |  |  |  |
| `TimeSheetLastChangedTime` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TimeSheetExtension` | `E_TimeSheetRecord` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Time Sheet'
@VDM.viewType: #BASIC
@ObjectModel: {
   sapObjectNodeType:{name: 'TimeSheet' },
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
 }


 @AbapCatalog.extensibility : {
                              extensible    : true,
                              allowNewDatasources: false,
                              elementSuffix : 'TIM',
                              quota.maximumFields: 350,
                              quota.maximumBytes  : 35000,                      
                              dataSources : [ '_TimeSheetExtension' ] 
                             }


@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {enabled: true , delta.changeDataCapture: { mapping:[
                {
                    table: 'CATSDBEXT', role: #MAIN,
                    viewElement: ['timesheetrecorduuid'],
                    tableElement: ['TimeSheetRecordUUID']
                },

                 {  table: 'CATSDB', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['TimeSheetRecord'],
                    tableElement: ['COUNTER']
                 }
               ]
             }
           }
         }
         
define view entity I_TimeSheet
  as select from R_TimeSheet
  association [1..1] to E_TimeSheetRecord as _TimeSheetExtension on $projection.TimeSheetRecord = _TimeSheetExtension.TimeSheetRecord
{
      // Key fields
  key TimeSheetRecordUUID,
      TimeSheetRecord,

      // Basic Info for timesheet
      WorkAssignment,
      TimeSheetDate,
      @Semantics.quantity.unitOfMeasure: 'HoursUnitOfMeasure'
      RecordedHours,
      HoursUnitOfMeasure,
      TimeSheetRecordLongText,

      // Acc. Obj -> Project
      WBSElementInternalID,
      ActivityType,
      WorkItem,
      BillableControl,

      /************      Future enhancement    ***************/

      //      // Acc. Obj -> Project
      //      TimeSheetOvertimeCategory,
      //      TimeSheetWrkLocCode,

      //      // Acc. Obj -> StatKeyFig --Non-Project related tasks
      //      TimeSheetTaskType,

      //      // Acc. Obj -> Cost Center
      //      SenderCostCenter,
      //      ReceiverCostCenter,

      //      // Acc. Obj -> Purchase Order
      //      PurchaseOrder,
      //      PurchaseOrderItem,
      //
      //      // Acc. Obj -> Service Mgmt.
      //      ServiceDocumentType,
      //      ServiceDocument,
      //      ServiceDocumentItem,
      //
      //      // Acc. Obj -> PSM
      //      SenderPubSecFund,
      //      SendingPubSecFunctionalArea,
      //      SenderPubSecGrant,
      //      SenderPubSecBudgetPeriod,
      //      ReceiverPubSecFund,
      //      ReceiverPubSecFuncnlArea,
      //      ReceiverPubSecGrant,
      //      ReceiverPubSecBudgetPeriod,
      //
      //      // Administrative and change log fields
      //      TimeSheetLastChangedDate,
      //      TimeSheetLastChangedTime

      // TimeSheet Derived attributes
      TimeSheetStatus,
      //TimeSheetRejectionReason,
      TimeSheetPredecessorRecord,
      TimeSheetAccountingDocument,
      WorkflowTaskInternalID,

      // Administrative and change log fields
      CreatedByUser,
      LastChangedByUser,
      TimeSheetApprovedByUser,
      TimeSheetApprovedDate,
      TimeSheetCreationDate,
      TimeSheetEntryTime,
      LastChangeDateTime,
      TimeSheetLastChangedDate,
      TimeSheetLastChangedTime
}
```
