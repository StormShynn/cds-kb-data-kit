---
name: I_PERSWRKAGRMTSRCHHELP
description: "This view provides value help for Personnel Number. This view should be used for value help purposes only. This CDS view provides the data to answer the following business question: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value
semantic_en: "This view provides value help for Personnel Number. This view should be used for value help purposes only. This CDS view provides the data to answer the following business question: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Search Help for WorkAgreements — CDS view giao diện dựa trên Search Help for WorkAgreements."
keywords:
  - "search"
  - "help"
  - "for"
  - "workagreements"
  - "person"
  - "work"
  - "agreement"
  - "last"
  - "name"
  - "family"
  - "first"
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
---
# I_PERSWRKAGRMTSRCHHELP

**This view provides value help for Personnel Number. This view should be used for value help purposes only. This CDS view provides the data to answer the following business question: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` | ✓ | |  |  | `NUMC(8)` | Personnel Number |
| `Person` |  | |  | `cast( employment.Person as sobid )` | `CHAR(45)` | ID of Related Object |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FamilyName` |  | |  | `BPLastNameSearchHelp` | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `GivenName` |  | |  | `BPFirstNameSearchHelp` | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `PersonExternalID` |  | |  |  | `CHAR(60)` | Identification Number |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Job` |  | |  |  | `NUMC(8)` | Job |
| `JobName` |  | |  | `a._PersonWorkAgrmtJobText[1:Language = $session.system_language].JobName` | `CHAR(256)` | Job Title |
| `OrganizationalUnitName` |  | |  | `a._OrganizationalUnitText[1:Language = $session.system_language].OrganizationalUnitName` | `CHAR(40)` | Object Name |
| `PersonWorkAgrmtAuthznGrpg` |  | |  |  | `CHAR(14)` | Organizational Key |
| `AuthorizationGroup` |  | |  | `c. AuthorizationGroup` | `CHAR(4)` | Authorization Group |
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
| `BusinessPartner` |  | |  | `Person` | `CHAR(10)` | Business Partner Number |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERSWKAGRMTSHLP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Search Help for WorkAgreements'
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.dataCategory:#VALUE_HELP
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints:['USE_HEX_PLAN']
//@Consumption.dbHints:['NO_JOIN_THRU_JOIN']
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]

define view I_PersWrkAgrmtSrchHelp as select distinct from  I_PersonWorkAgreement_1       as employment


//    inner join             P_PERSONWORKAGRMTORGLDETAILS2 as a on employment.PersonWorkAgreement = a.PersonWorkAgreement
    inner join I_PersonWorkAgrmtOrglDetails as a on employment.PersonWorkAgreement = a.PersonWorkAgreement

    inner join             I_PersonWorkAgrmtStatus       as b on  a.PersonWorkAgreement =  b.PersonWorkAgreement
                                                              and b.StartDate           <= a.EndDate
                                                              and b.EndDate             >= a.StartDate //find appropriate status record
                                                              and a.EndDate             >= $session.system_date // all current and future org assignments
                                                              and b.EndDate             >= $session.system_date
                                                              and b.WorkAgreementStatus =  '1'

    inner join             I_WorkforcePerson             as c on employment.Person = c.Person

    left outer to one join I_BusinessUser                as d on d.BusinessPartnerUUID = c.BusinessPartnerUUID

{
      @EndUserText.label: 'Personnel Number'
      @EndUserText.quickInfo: 'Personnel Number'
      @ObjectModel.text.element:  [ 'PersonFullName' ]
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
  key employment.PersonWorkAgreement,
      //      employment.Person
      cast( employment.Person as sobid )                                                      as Person,
      @EndUserText.label: 'Last Name'
      c.LastName,
      @EndUserText.quickInfo: 'Family Name'
      @EndUserText.label: 'Family Name'
      c._BusinessPartner.BPLastNameSearchHelp                                                 as FamilyName,
      @EndUserText.label: 'First Name'
      c.FirstName,
      @EndUserText.quickInfo: 'Given Name'
      @EndUserText.label: 'Given Name'
      c._BusinessPartner.BPFirstNameSearchHelp                                                as GivenName,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW
      c.PersonExternalID,
      d.UserID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #LOW
      @Semantics.text: true
      c.PersonFullName,
      a.CompanyCode,
      a._CompanyCode.CompanyCodeName,
      a.CostCenter,
      a._CostCenter._Text[1: Language =  $session.system_language ].CostCenterName,
      @EndUserText.label: 'Job Key'
      @EndUserText.quickInfo: 'Job Key'
      a.Job,
      @EndUserText.label: 'Job Name'
      a._PersonWorkAgrmtJobText[1:Language = $session.system_language].JobName                as JobName,
      @EndUserText.label: 'Organizational Unit Name'
      @EndUserText.quickInfo: 'Organizational Unit Name'
      a._OrganizationalUnitText[1:Language = $session.system_language].OrganizationalUnitName as OrganizationalUnitName,
      @UI.hidden
      a.PersonWorkAgrmtAuthznGrpg,
      @UI.hidden
      c. AuthorizationGroup,
      @UI.hidden
      c.IsBusinessPurposeCompleted,

      //BP Data controller adoption: Added only for DCL check
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController1,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController2,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController3,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController4,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController6,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController7,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController8,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController9,
      @Consumption.hidden:true
      @UI.hidden:true
      c.DataController10,
      @Consumption.hidden:true
      @UI.hidden:true
      @ObjectModel.text.element:null
      c.Person as BusinessPartner

}
```
