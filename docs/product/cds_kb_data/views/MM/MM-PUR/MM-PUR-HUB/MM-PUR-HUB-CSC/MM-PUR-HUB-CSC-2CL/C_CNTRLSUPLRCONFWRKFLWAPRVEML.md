---
name: C_CNTRLSUPLRCONFWRKFLWAPRVEML
description: "Cntrlsuplrconfwrkflwaprveml"
app_component: MM-PUR-HUB-CSC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - workflow
  - component:MM-PUR-HUB-CSC-2CL
  - lob:Sourcing & Procurement
---
# C_CNTRLSUPLRCONFWRKFLWAPRVEML

**Cntrlsuplrconfwrkflwaprveml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_Workflowtask` | `WorkflowTaskInternalID` |  |  |
| `CentralSupplierConfirmation` |  | |  | `cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )` |  |  |
| `PurchasingDocumentType` |  | | `_CntrlSupplierConfirmation` | `PurchasingDocumentType` |  |  |
| `PurchaseOrder` |  | | `_CntrlSupplierConfirmation` | `CntrlSuplrConfRefPrmtHbRpldPO` |  |  |
| `PurchaseOrderNetAmount` |  | | `_CntrlSupplierConfirmation._PurchaseOrder` | `PurchaseOrderNetAmount` |  |  |
| `DocumentCurrency` |  | | `_CntrlSupplierConfirmation._PurchaseOrder` | `DocumentCurrency` |  |  |
| `ExtSourceSystem` |  | | `_CntrlSupplierConfirmation` | `ProcurementHubSourceSystem` |  |  |
| `CreatedByUserName` |  | | `_CntrlSupplierConfirmation` | `CreatedByUser` |  |  |
| `CreationDate` |  | | `_CntrlSupplierConfirmation` | `CreationDate` |  |  |
| `Supplier` |  | | `_CntrlSupplierConfirmation` | `Supplier` |  |  |
| `PrmtHbWrkflwTskCrtnUTCDte` |  | |  | `cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )` |  |  |
| `PrmtHbWrkflwTskCrtnUTCTme` |  | |  | `cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )` |  |  |
| `PrmtHbWrkflwTskDuUTCDte` |  | |  | `cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )` |  |  |
| `PrmtHbWrkflwTskDuUTCTme` |  | |  | `cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )` |  |  |
| `WorkflowTaskResult` |  | | `_Workflowtask` | `WorkflowTaskResult` |  |  |
| `WorkflowTaskResultReasonText` |  | | `_Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText` | `WorkflowTaskResultReasonText` |  |  |
| `WorkflowTaskResultComment` |  | | `_Workflowtask._WorkflowTaskResult` | `WorkflowTaskResultComment` |  |  |
| `ApprovedByUserFullName` |  | | `_Workflowtask` | `WorkflowTaskCurrentUser` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CCSCAPRVEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Central Supplier Conf WF Approval Email'
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view C_CntrlSuplrConfWrkflwAprvEml
  as select from            I_WorkflowTask                as _Workflowtask
    left outer to many join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject    on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                        and _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
                                                                                        and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'CentralSupplierConfirmation'
                                                                                        and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  R_CntrlSupplierConfirmationTP as _CntrlSupplierConfirmation on _CntrlSupplierConfirmation.CentralSupplierConfirmation = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
{
  key _Workflowtask.WorkflowTaskInternalID,
      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                                      as CentralSupplierConfirmation,
      _CntrlSupplierConfirmation.PurchasingDocumentType                                                                      as PurchasingDocumentType,
      _CntrlSupplierConfirmation.CntrlSuplrConfRefPrmtHbRpldPO                                                               as PurchaseOrder,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      _CntrlSupplierConfirmation._PurchaseOrder.PurchaseOrderNetAmount                                                       as PurchaseOrderNetAmount,
      _CntrlSupplierConfirmation._PurchaseOrder.DocumentCurrency                                                             as DocumentCurrency,
      _CntrlSupplierConfirmation.ProcurementHubSourceSystem                                                                  as ExtSourceSystem,
      _CntrlSupplierConfirmation.CreatedByUser                                                                               as CreatedByUserName,
      _CntrlSupplierConfirmation.CreationDate                                                                                as CreationDate,
      _CntrlSupplierConfirmation.Supplier                                                                                    as Supplier,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd )          as PrmtHbWrkflwTskCrtnUTCDte,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst )          as PrmtHbWrkflwTskCrtnUTCTme,
      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_led )          as PrmtHbWrkflwTskDuUTCDte,
      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_let )          as PrmtHbWrkflwTskDuUTCTme,
      _Workflowtask.WorkflowTaskResult                                                                                       as WorkflowTaskResult,
      _Workflowtask._WorkflowTaskResult._WorkflowTaskResultReason._WorkflowTaskResultReasonText.WorkflowTaskResultReasonText as WorkflowTaskResultReasonText,
      _Workflowtask._WorkflowTaskResult.WorkflowTaskResultComment                                                            as WorkflowTaskResultComment,
      _Workflowtask.WorkflowTaskCurrentUser                                                                                  as ApprovedByUserFullName
}
```
