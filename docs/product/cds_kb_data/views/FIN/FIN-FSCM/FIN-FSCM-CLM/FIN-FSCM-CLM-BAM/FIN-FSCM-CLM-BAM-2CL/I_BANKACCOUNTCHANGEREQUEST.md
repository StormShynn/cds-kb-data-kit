---
name: I_BANKACCOUNTCHANGEREQUEST
description: "Bankaccountchangerequest"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
