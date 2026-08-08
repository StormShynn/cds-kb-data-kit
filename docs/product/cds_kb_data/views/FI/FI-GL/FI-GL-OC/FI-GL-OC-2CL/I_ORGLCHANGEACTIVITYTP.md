---
name: I_ORGLCHANGEACTIVITYTP
description: "Orglchangeactivitytp"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - transactional-processing
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGLCHANGEACTIVITYTP

**Orglchangeactivitytp**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChangeActivity` | ✓ | |  |  |  |  |
| `OrganizationalChange` | ✓ | |  |  |  |  |
| `OrganizationalChangeJobType` |  | |  |  |  |  |
| `ApplicationJobName` |  | |  |  |  |  |
| `ApplicationJob` |  | |  |  |  |  |
| `ApplicationLog` |  | |  |  |  |  |
| `ApplicationLogHandle` |  | |  |  |  |  |
| `NumberOfUniqueWarnings` |  | |  |  |  |  |
| `NumberOfUniqueErrors` |  | |  |  |  |  |
| `JobStatusValue` |  | |  |  |  |  |
| `OrglChangeActivityDateTime` |  | |  |  |  |  |
| `FullName` |  | | `_UserContactCard` | `FullName` |  |  |
| `Department` |  | | `_UserContactCard` | `Department` |  |  |
| `EmailAddress` |  | | `_UserContactCard` | `EmailAddress` |  |  |
| `PhoneNumber` |  | | `_UserContactCard` | `PhoneNumber` |  |  |
| `MobilePhoneNumber` |  | | `_UserContactCard` | `MobilePhoneNumber` |  |  |
| `OrglChangeActivityProcdByUser` |  | |  |  |  |  |
| `OrglChangeProcessingStatus` |  | |  |  |  |  |
| `OrglChangeProcessingStatusName` |  | |  | `_OrglChangeProcgStatusText[1:Language=$session.system_language].OrglChangeProcessingStatusName` |  |  |
| `OrglChangeJobTypeName` |  | |  | `_JobTypeText[1:Language=$session.system_language].OrglChangeJobTypeName` |  |  |

## Source Code

```abap
@EndUserText.label: 'Organizational Change Activity - TP'

@AccessControl.authorizationCheck: #MANDATORY //old #CHECK ATC

@VDM.viewType:                           #TRANSACTIONAL // old #CONSUMPTION ATC,
@VDM.usage.type:                         [#TRANSACTIONAL_PROCESSING_SERVICE]
//@VDM.lifecycle.contract.type:            #PUBLIC_LOCAL_API //from I_Salesorder follow; new error

@ObjectModel.usageType: {
  dataClass: #TRANSACTIONAL,
  serviceQuality: #D,
  sizeCategory: #XL //before L due to new error
}

@ObjectModel.supportedCapabilities:      [#TRANSACTIONAL_PROVIDER] // ATC
//@ObjectModel.modelingPattern:             #TRANSACTIONAL_INTERFACE //new error
@Metadata.ignorePropagatedAnnotations:   true                      // ATC

//------------------------------------------------------------------


define view entity I_OrglChangeActivityTP
  as select from I_OrganizationalChangeActivity

{
  key OrganizationalChangeActivity,

  key OrganizationalChange,

      OrganizationalChangeJobType,
      ApplicationJobName,
      ApplicationJob,
      ApplicationLog,
      ApplicationLogHandle,
      NumberOfUniqueWarnings,
      NumberOfUniqueErrors,
      @EndUserText.label: 'JobStatusValue'
      JobStatusValue,
      OrglChangeActivityDateTime,
      _UserContactCard.FullName,
      _UserContactCard.Department,
      _UserContactCard.EmailAddress,
      _UserContactCard.PhoneNumber,
      _UserContactCard.MobilePhoneNumber,
      OrglChangeActivityProcdByUser,
      OrglChangeProcessingStatus,

      @Semantics.text: true
       _OrglChangeProcgStatusText[1:Language=$session.system_language].OrglChangeProcessingStatusName as OrglChangeProcessingStatusName,
      @Semantics.text: true
      _JobTypeText[1:Language=$session.system_language].OrglChangeJobTypeName as OrglChangeJobTypeName


}
```
