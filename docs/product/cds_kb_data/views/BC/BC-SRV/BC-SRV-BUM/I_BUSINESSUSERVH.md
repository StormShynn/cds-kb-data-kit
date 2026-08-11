---
name: I_BUSINESSUSERVH
description: "Businessuservh"
app_component: BC-SRV-BUM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BUM
  - interface-view
  - value-help
  - component:BC-SRV-BUM
  - lob:Basis Components
---
# I_BUSINESSUSERVH

**Businessuservh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BPIdentificationNumber` |  | |  |  | `CHAR(60)` | Identification Number |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `DefaultEmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `PersonFullName` |  | |  |  | `CHAR(80)` | User Description |
| `Building` |  | |  |  | `CHAR(10)` | Building (number or code) |
| `RoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `Department` |  | |  |  | `CHAR(40)` | Department |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `DataController1` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController2` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController3` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController4` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController5` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController6` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController7` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController8` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController9` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |
| `DataController10` |  | |  |  | `CHAR(30)` | BP: Data Controller (Internal Use Only) |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User - Value Help'
@VDM.viewType: #COMPOSITE
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartner'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@UI.presentationVariant:[{
    sortOrder: [
        { by: 'LastName', direction: #ASC },
        { by: 'FirstName', direction: #ASC }]
}]
@Search.searchable: true
define view entity I_BusinessUserVH
  as select from    I_BusinessUserBasic
    left outer join P_BPUSRPERSONEXTERNALID on P_BPUSRPERSONEXTERNALID.BusinessPartner = I_BusinessUserBasic.BusinessPartner
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Person ID'
  key I_BusinessUserBasic.BusinessPartner                       as BusinessPartner,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @EndUserText.label: 'Person External ID'
      P_BPUSRPERSONEXTERNALID.BPIdentificationNumber            as BPIdentificationNumber,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'User ID'
      I_BusinessUserBasic.UserID                                as UserID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'First Name'
      I_BusinessUserBasic.FirstName                             as FirstName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.85
      @Search.ranking: #LOW
      @EndUserText.label: 'Last Name'
      I_BusinessUserBasic.LastName                              as LastName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Email Address'
      I_BusinessUserBasic._WorkplaceAddress.DefaultEmailAddress as DefaultEmailAddress,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Full Name'
      I_BusinessUserBasic.PersonFullName                        as PersonFullName,
      @EndUserText.label: 'Building'
      @Consumption.filter.hidden: true
      I_BusinessUserBasic._WorkplaceAddress.Building            as Building,
      @EndUserText.label: 'Room Number'
      @Consumption.filter.hidden: true
      I_BusinessUserBasic._WorkplaceAddress.RoomNumber          as RoomNumber,
      @EndUserText.label: 'Department'
      @Consumption.filter.hidden: true
      I_BusinessUserBasic._WorkplaceAddress.Department          as Department,
      @UI.hidden: true
      I_BusinessUserBasic.IsBusinessPurposeCompleted            as IsBusinessPurposeCompleted,
      @UI.hidden: true
      I_BusinessUserBasic.AuthorizationGroup                    as AuthorizationGroup,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataControllerSet                     as DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController1                       as DataController1,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController2                       as DataController2,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController3                       as DataController3,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController4                       as DataController4,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController5                       as DataController5,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController6                       as DataController6,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController7                       as DataController7,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController8                       as DataController8,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController9                       as DataController9,
      @Consumption.hidden:true
      @UI.hidden: true
      I_BusinessUserBasic.DataController10                      as DataController10
}
```
