---
name: I_BANKACCTCHANGEREQUEST
description: "Bankacctchangerequest"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
  - bo:Bank
---
# I_BANKACCTCHANGEREQUEST

**Bankacctchangerequest**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankAccountChangeRequest` | ✓ | |  | `request_id` |  |  |
| `BankAcctChangeReqHeadingText` |  | |  | `title` |  |  |
| `BankAccountAction` |  | |  | `account_action` |  |  |
| `BankAccountActionText` |  | | `_actionText` | `BankAccountActionText` |  |  |
| `BankAccountChangeRequestStatus` |  | |  | `request_status` |  |  |
| `BankAccountReqStatusText` |  | | `_requestStatusText` | `BankAccountReqStatusText` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationDate` |  | |  | `created_on` |  |  |
| `BankAcctChangeRequestDueDate` |  | |  | `duedate` |  |  |
| `LastChangedByUser` |  | |  | `lastchged_by` |  |  |
| `BankAcctRequestProcess` |  | |  | `request_process` |  |  |
| `BankAccountChangeRequestStep` |  | |  | `request_step` |  |  |
| `LastChangeDate` |  | |  | `lastchged_on` |  |  |
| `LastChangeTime` |  | |  | `lastchged_tm` |  |  |
| `CreationTime` |  | |  | `created_tm` |  |  |
| `ChangeRequestIsBypassCheck` |  | |  | `bypass_check_mass` |  |  |
| `ChgReqBypassChkIsHidn` |  | |  | `cast ( case when bypass_check_mass = 'X' then '' else 'X' end as boolean preserving type )` |  |  |
| `_Bankaccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Bankaccount` | `I_RequestWithBankAccount` | [1..*] |
| `_requestStatusText` | `I_BankAcctReqStatusText` | [0..1] |
| `_actionText` | `I_ActionOnBankAcctText` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBAMREQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bank Account Change Request'
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #B
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: ['SQL_DATA_SOURCE','CDS_MODELING_DATA_SOURCE']

define view I_BankAcctChangeRequest
  as select from fclm_bam_req as cr
  association [1..*] to I_RequestWithBankAccount as _Bankaccount       on  $projection.BankAccountChangeRequest = _Bankaccount.BankAccountChangeRequest
  association [0..1] to I_BankAcctReqStatusText  as _requestStatusText on  $projection.BankAccountChangeRequestStatus = _requestStatusText.BankAccountChangeRequestStatus
                                                                       and _requestStatusText.Language                = $session.system_language
  association [0..1] to I_ActionOnBankAcctText   as _actionText        on  $projection.BankAccountAction = _actionText.BankAccountAction
                                                                       and _actionText.Language          = $session.system_language
{

  key   cr.request_id                                                                              as BankAccountChangeRequest,
        cr.title                                                                                   as BankAcctChangeReqHeadingText,
        cr.account_action                                                                          as BankAccountAction,
        _actionText.BankAccountActionText                                                          as BankAccountActionText,

        cr.request_status                                                                          as BankAccountChangeRequestStatus,
        _requestStatusText.BankAccountReqStatusText                                                as BankAccountReqStatusText,

        cr.created_by                                                                              as CreatedByUser,
        cr.created_on                                                                              as CreationDate,
        cr.duedate                                                                                 as BankAcctChangeRequestDueDate,
        cr.lastchged_by                                                                            as LastChangedByUser,
        cr.request_process                                                                         as BankAcctRequestProcess,

        cr.request_step                                                                            as BankAccountChangeRequestStep,
        cr.lastchged_on                                                                            as LastChangeDate,
        cr.lastchged_tm                                                                            as LastChangeTime,
        cr.created_tm                                                                              as CreationTime,
        cr.bypass_check_mass                                                                       as ChangeRequestIsBypassCheck,
        cast ( case when bypass_check_mass = 'X' then '' else 'X' end as boolean preserving type ) as ChgReqBypassChkIsHidn,

        _Bankaccount

}
```
