---
name: I_TIMESHEETTP
description: "Timesheettp"
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
  - transactional-processing
  - component:CA-TS-S4
  - lob:Cross-Application Components
---
# I_TIMESHEETTP

**Timesheettp**

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
| `WorkAssignmentExternalID` |  | |  |  |  |  |
| `Country2DigitISOCode` |  | |  |  |  |  |
| `WorkAssignment` |  | |  |  |  |  |
| `TimeSheetDate` |  | |  |  |  |  |
| `RecordedHours` |  | |  |  |  |  |
| `HoursUnitOfMeasure` |  | |  |  |  |  |
| `TimeSheetRecordLongText` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `BillingControlCategory` |  | |  |  |  |  |
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

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Time Sheet - TP'

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
   sapObjectNodeType:{name: 'TimeSheet'},
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   }
 }

@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.extensibility : {
                              extensible    : true,
                              elementSuffix : 'TIM',
                              quota.maximumFields: 350,
                              quota.maximumBytes  : 35000,                           
                              dataSources : [ 'TimeSheet' ] 
                             }

define root view entity I_TimeSheetTP
  provider contract transactional_interface
  as projection on R_TimeSheetTP as TimeSheet
{
      // Key fields
  key TimeSheetRecordUUID,
      TimeSheetRecord,

      // Basic Info for timesheet
      WorkAssignmentExternalID,
      Country2DigitISOCode,
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
      BillingControlCategory,

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
      // UserID

      // _PersonWorkAgreement_1
}
```
