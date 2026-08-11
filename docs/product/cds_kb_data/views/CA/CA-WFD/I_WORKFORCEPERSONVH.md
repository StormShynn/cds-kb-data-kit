---
name: I_WORKFORCEPERSONVH
description: "Workforce Person Association Target"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONVH')/$value
semantic_en: "Workforce Person Association Target"
semantic_vi: "Workforce Person Association Target — CDS view giao diện dựa trên Workforce Person Association Target."
keywords:
  - "workforce"
  - "person"
  - "association"
  - "target"
  - "employee"
  - "last"
  - "name"
  - "first"
  - "full"
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
---
# I_WORKFORCEPERSONVH

**Workforce Person Association Target**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EmployeeExtID` | ✓ | |  | `PersonExternalID` | `CHAR(60)` | Identification Number |
| `Person` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `LastName` |  | |  | `BPLastNameSearchHelp` | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `FirstName` |  | |  | `BPFirstNameSearchHelp` | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWFPERSONVH'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Workforce Person Association Target'
@ObjectModel.dataCategory:#VALUE_HELP
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SEARCHABLE_ENTITY]

@Consumption.dbHints:[ 'USE_HEX_PLAN' ]
//............................................................................................................
// This CDS view is meant for Association Target ONLY ---- Do not use it for search help or for applications
//............................................................................................................

define view I_WorkforcePersonVH  as select distinct from I_WorkforcePerson as a

left outer join I_PersonWorkAgreement_1 as employment on a.Person = employment.Person

left outer join I_PersonWorkAgrmtStatus as b on employment.PersonWorkAgreement = b.PersonWorkAgreement
                                             and b.EndDate >= $session.system_date //current and future employments

left outer to one join I_BusinessUser as c on a.BusinessPartnerUUID = c.BusinessPartnerUUID
{
   @EndUserText.label: 'Person ID'
   @ObjectModel.text.element: ['PersonFullName']
   key a.PersonExternalID as EmployeeExtID,
   a.Person,
   @EndUserText.label: 'Last Name'
   a._BusinessPartner.BPLastNameSearchHelp as LastName,
   @EndUserText.label: 'First Name'
   a._BusinessPartner.BPFirstNameSearchHelp as FirstName,
   @Search.defaultSearchElement: true
   @Semantics.text: true
   a.PersonFullName,
   c.UserID,
   @UI.hidden: true
   a.AuthorizationGroup,
   @UI.hidden: true
   a.IsBusinessPurposeCompleted,
   
 //BP Data controller adoption: Added only for DCL check
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataControllerSet,                                                                                                                                                                      
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController1,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController2,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController3,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController4,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController5,                                                                                                                                                                       
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController6,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController7,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController8,
   @Consumption.hidden:true
   @UI.hidden:true 
   a.DataController9,
   @Consumption.hidden:true
   @UI.hidden:true
   a.DataController10
   
 }
 
where WorkAgreementStatus = '1'
```
