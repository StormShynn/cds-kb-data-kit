---
name: I_SUPLRACTYTASKEMAILTMPLAPI01
description: "Suplractytaskemailtmplapi 01"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
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
