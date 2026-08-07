---
name: C_CABILLGREQWRKFLWEMLTMPL
description: Cabillgreqwrkflwemltmpl
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - consumption-view
  - workflow
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# C_CABILLGREQWRKFLWEMLTMPL

**Cabillgreqwrkflwemltmpl**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkflowTaskInternalID` | ✓ | |  |  |
| `CABillgReqDocument` |  | | `_CABillgReq` | `CABillgReqDocument` |
| `CABillgReqTotalAmountCurrency` |  | | `_CABillgReq` | `CABillgReqTotalAmountCurrency` |
| `CABillgReqType` |  | | `_CABillgReq` | `CABillgReqType` |
| `CABillgReqReason` |  | | `_CABillgReq` | `CABillgReqReason` |
| `CABillgReqCreationDate` |  | | `_CABillgReq` | `CABillgReqCreationDate` |
| `CABillgReqDescription` |  | | `_CABillgReq` | `CABillgReqDescription` |
| `WorkflowTaskURL` |  | | `_WorkflowTaskURL` | `WorkflowTaskURL` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_CAWorkflowTaskURL` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'CA Billing request Workflow Email Templ'
@ObjectModel: {
  usageType : {
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
    },
  modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER,
  supportedCapabilities:  [ #OUTPUT_EMAIL_DATA_PROVIDER ]
}

@VDM.viewType : #CONSUMPTION

define view entity C_CABillgReqWrkflwEmlTmpl
  as select from           I_WorkflowTask           as Workflowtask
    left outer to one join I_WorkflowTaskApplObject as _WorkflowTaskApplObject on Workflowtask.WorkflowTaskInternalID = _WorkflowTaskApplObject.WorkflowTaskInternalID
    left outer to one join I_CABillgRequest    as _CABillgReq             on _CABillgReq.CABillgReqDocument = _WorkflowTaskApplObject.TechnicalWrkflwObject
  association [0..1] to I_CAWorkflowTaskURL as _WorkflowTaskURL on _WorkflowTaskURL.WorkflowTaskInternalID = Workflowtask.WorkflowTaskInternalID
{
  key Workflowtask.WorkflowTaskInternalID,
      _CABillgReq.CABillgReqDocument,
      _CABillgReq.CABillgReqTotalAmountCurrency,
      _CABillgReq.CABillgReqType,
      _CABillgReq.CABillgReqReason,
      _CABillgReq.CABillgReqCreationDate,
      _CABillgReq.CABillgReqDescription,
      _WorkflowTaskURL.WorkflowTaskURL
}

where
  (
       _WorkflowTaskApplObject.WorkflowObjectRole            = '01'
    or _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
  )
  and  _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'ContrAcctgBillingRequest'
  and  _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
```
