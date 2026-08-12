---
name: I_SUPLRACTYTASKEMAILTMPLAPI01
description: "Suplractytaskemailtmplapi 01"
app_component: SLC-ACT
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
  - SLC
  - SLC-ACT
  - interface-view
  - workflow
  - email
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTYTASKEMAILTMPLAPI01

**Suplractytaskemailtmplapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
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
| `SuplrActyTaskUUID` | ✓ | |  |  |  |  |
| `SupplierActivityTask` |  | |  | `cast(ltrim(Task.SupplierActivityTask,'0') as /srmsmc/task_id )` |  |  |
| `SuplrActyTaskName` |  | |  |  |  |  |
| `EndDate` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(Task.CreatedByUser as /srmsmc/created_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(Task.LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `Language` |  | |  |  |  |  |
| `CreatedByUserDescription` |  | |  | `cast(Task._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/created_by_user_desc)` |  |  |
| `LastChangedByUserName` |  | |  | `cast(Task._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/last_changed_by_desc)` |  |  |
| `SuplrActyName` |  | |  |  |  |  |
| `FormOfAddressName` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `FamilyName` |  | |  | `LastName` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITSKMAILTAPI01'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #OUTPUT_EMAIL_DATA_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Email Template for Task Notification'

define view I_SuplrActyTaskEmailTmplAPI01  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : /srmsmc/language_parameter
  as select distinct from    I_SupplierActivityTask as Task
    join I_SupplierActivityTskProcessor processor on processor.SuplrActyTaskUUID = Task.SuplrActyTaskUUID
    left outer join  I_BusinessUser   businessuser on processor.UserID = businessuser.UserID and businessuser.IsBusinessPurposeCompleted = '' 
    left outer join  I_FormOfAddressText  formofaddressname on formofaddressname.FormOfAddress = businessuser.FormOfAddress and formofaddressname.Language = $parameters.P_Language
{
  key Task.SuplrActyTaskUUID,
      cast(ltrim(Task.SupplierActivityTask,'0') as /srmsmc/task_id )                                                                          as SupplierActivityTask,
      Task.SuplrActyTaskName,
      Task.EndDate,
      Task.CreationDateTime,
      cast(Task.CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      Task.LastChangeDateTime,
      cast(Task.LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      Task.Language,
      cast(Task._CreatedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/created_by_user_desc)     as CreatedByUserDescription,
      cast(Task._LastChangedByUser._BusinessPartner[IsBusinessPurposeCompleted = ''].BusinessPartnerFullName as /srmsmc/last_changed_by_desc) as LastChangedByUserName,
      Task._SupplierActivity._SupplierActivity.SuplrActyName,
      Task._SupplierActivityTaskPrio._SupplierActivityTaskPrioText[1:Language=$parameters.P_Language].SuplrActyTaskPriorityName,
      formofaddressname.FormOfAddressName as FormOfAddressName,
      businessuser.FirstName as FirstName,
      businessuser.LastName as FamilyName
}
```
