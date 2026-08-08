---
name: I_BANKACCOUNTCHANGEREQUEST
description: "Bankaccountchangerequest"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
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
# I_BANKACCOUNTCHANGEREQUEST

**Bankaccountchangerequest**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRequest` | ✓ | |  | `request_id` |  |  |
| `BankAccountChangeRequestStatus` |  | |  | `request_status` |  |  |
| `BankAccountAction` |  | |  | `account_action` |  |  |
| `BankAcctChangeReqHeadingText` |  | |  | `title` |  |  |
| `BankAccountChangeRequestStep` |  | |  | `request_step` |  |  |
| `CreationDate` |  | |  | `created_on` |  |  |
| `CreatedByUser` |  | |  | `created_by` |  |  |
| `CreationTime` |  | |  | `created_tm` |  |  |
| `LastChangeDate` |  | |  | `lastchged_on` |  |  |
| `LastChangedByUser` |  | |  | `lastchged_by` |  |  |
| `LastChangeTime` |  | |  | `lastchged_tm` |  |  |
| `BankAcctChangeRequestDueDate` |  | |  | `duedate` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK //#NOT_REQUIRED
@EndUserText.label: 'Bank Account Change Request'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIBAMCHGREQUEST'
@ObjectModel.representativeKey: 'ChangeRequest'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [   #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BankAccountChangeRequest'
define view I_BankAccountChangeRequest
  as select from fclm_bam_req
{

  key request_id     as ChangeRequest,

      request_status as BankAccountChangeRequestStatus,
      account_action as BankAccountAction,
      //request_process as BankAcctChangeRequestProcess,
      title          as BankAcctChangeReqHeadingText,
      request_step   as BankAccountChangeRequestStep,
      created_on     as CreationDate,
      created_by     as CreatedByUser,
      created_tm     as CreationTime,
      lastchged_on   as LastChangeDate,
      lastchged_by   as LastChangedByUser,

      lastchged_tm   as LastChangeTime,
      //request_step    as BankAccountChangeRequestStep,
      duedate        as BankAcctChangeRequestDueDate

}
```
