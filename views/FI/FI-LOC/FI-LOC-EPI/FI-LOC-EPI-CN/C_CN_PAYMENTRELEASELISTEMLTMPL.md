---
name: C_CN_PAYMENTRELEASELISTEMLTMPL
description: CN Paymentreleaselistemltmpl
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-EPI
  - consumption-view
  - workflow
  - payment
  - lease
  - component:FI-LOC-EPI-CN
  - lob:Finance
---
# C_CN_PAYMENTRELEASELISTEMLTMPL

**CN Paymentreleaselistemltmpl**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | | `_WorkflowTask` | `WorkflowTaskInternalID` |  |  |
| `PaymentReleaseList` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `TotActualAmtInDisplayCurrency` |  | |  |  |  |  |
| `CreatedByUserFullName` |  | |  |  |  |  |
| `IncgPaytFileTotalNumberOfItems` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PaymentReleaseListItemIsClosed` |  | |  |  |  |  |
| `PaymentReleaseListDescription` |  | |  |  |  |  |
| `Processor` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `PaymentReleaseListApplication` |  | |  |  |  |  |
| `WorkflowTaskURL` |  | | `_WorkflowTaskURL` | `WorkflowTaskURL` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_WorkflowTaskURL` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CCNFPRLEMLTMPL'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'CN Email Template for Payt Release List'
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.usageType : {
  sizeCategory: #L,
  serviceQuality: #D,
  dataClass:  #TRANSACTIONAL
}

define view C_CN_PaymentReleaseListEmlTmpl
  as select from            I_WorkflowTask                as _WorkflowTask

    left outer to many join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectType     = 'CL_EPIC_WF_PR_APPROVAL'

    left outer to many join C_CN_PaymentReleaseListHeader as _CnPrlHeader            on _CnPrlHeader.PaymentReleaseList = _WorkflowTaskApplObject.TechnicalWrkflwObject

  association [0..1] to I_WorkflowTaskURL as _WorkflowTaskURL on _WorkflowTaskURL.WorkflowTaskInternalID = _WorkflowTask.WorkflowTaskInternalID
{
  key _WorkflowTask.WorkflowTaskInternalID,
      PaymentReleaseList,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      TotActualAmtInDisplayCurrency,
      CreatedByUserFullName,
      IncgPaytFileTotalNumberOfItems,
      CompanyCode,
      @Semantics.booleanIndicator:true
      PaymentReleaseListItemIsClosed,
      PaymentReleaseListDescription,
      Processor,
      CreatedByUser,
      LastChangedByUser,
      PaymentReleaseListApplication,
      _WorkflowTaskURL.WorkflowTaskURL
}
```
