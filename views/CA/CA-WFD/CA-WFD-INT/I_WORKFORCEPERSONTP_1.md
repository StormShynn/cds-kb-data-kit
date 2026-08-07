---
name: I_WORKFORCEPERSONTP_1
description: Workforcepersontp 1
app_component: CA-WFD-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-WFD
  - CA-WFD-INT
  - interface-view
  - transactional-processing
  - component:CA-WFD-INT
  - lob:Cross-Application Components
---
# I_WORKFORCEPERSONTP_1

**Workforcepersontp 1**

| Property | Value |
|---|---|
| App Component | `CA-WFD-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkforcePersonExternalID` | ✓ | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `WorkforcePersonExternalUUID` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `FirstName` |  | |  |  |  |  |
| `MiddleName` |  | |  |  |  |  |
| `BirthName` |  | |  |  |  |  |
| `LastName` |  | |  |  |  |  |
| `AdditionalLastName` |  | |  |  |  |  |
| `Initials` |  | |  |  |  |  |
| `LastNamePrefix` |  | |  |  |  |  |
| `LastNameSecondPrefix` |  | |  |  |  |  |
| `AcademicTitle` |  | |  |  |  |  |
| `AcademicTitle2` |  | |  |  |  |  |
| `NativePreferredLanguage` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `I_WorkAssignmentTP_1` |  | |  | `WorkforcePerson._WorkAssignment : redirected to composition child I_WorkAssignmentTP_1` |  |  |
| `I_WorkforcePersonSkillTagTP_1` |  | |  | `WorkforcePerson._WorkforcePersonSkillTags : redirected to composition child I_WorkforcePersonSkillTagTP_1` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Workforce Person - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
//@AbapCatalog.extensibility: {
//  extensible: true,
//  elementSuffix: 'WFD',
//  dataSources: ['Workforce Person'],
//  quota: {
//    maximumFields: 204, //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <max number of fields in SCFD_REGISTRY>
//    maximumBytes: 4080  //This is calculated with formula - 2* <Customer Percentage from SCFD_REGISTRY> * <number of chars as defined in SCFD_REGISTRY>
//  }
//}
@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@ObjectModel.sapObjectNodeType.name: 'WorkforcePerson'
@ObjectModel.representativeKey: 'WorkforcePersonExternalID'
@ObjectModel.alternativeKey: [{id: 'BusinessPartner'}, {id: 'WorkforcePersonExternalUUID'}]
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
define root view entity I_WorkforcePersonTP_1
  provider contract transactional_interface
  as projection on I_WorkforcePersonTP as WorkforcePerson
{
         @Search.defaultSearchElement: true
         @Search.fuzzinessThreshold: 0.8
         @Search.ranking: #HIGH
  key    WorkforcePersonExternalID,
         BusinessPartner,
         WorkforcePersonExternalUUID,
         @Semantics.text:true
         @EndUserText.label: 'Full Name'
         FullName,
         FirstName,
         MiddleName,
         BirthName,
         LastName,
         AdditionalLastName,
         Initials,
         LastNamePrefix,
         LastNameSecondPrefix,
         AcademicTitle,
         AcademicTitle2,
         NativePreferredLanguage,
         @Semantics.booleanIndicator
         IsBusinessPurposeCompleted,

         AuthorizationGroup,
         ////////////// Start of Datacontroller 10+1 fields -  Not to be consumed by any other views//////////
         @UI.hidden:true
         @Consumption.hidden:true
         DataControllerSet,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController1,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController2,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController3,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController4,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController5,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController6,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController7,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController8,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController9,
         @Consumption.hidden:true
         @UI.hidden:true
         DataController10,
         ////////////// End of Datacontroller 10+1 fields//////////

         WorkforcePerson._WorkAssignment           : redirected to composition child I_WorkAssignmentTP_1,
         WorkforcePerson._WorkforcePersonSkillTags : redirected to composition child I_WorkforcePersonSkillTagTP_1

}
```
