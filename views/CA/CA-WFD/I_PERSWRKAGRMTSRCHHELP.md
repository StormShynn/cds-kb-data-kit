---
name: I_PERSWRKAGRMTSRCHHELP
description: This CDS view provides value help for work agreements. Use this view for value help purposes only. This CDS view provides the data to answer the following business questions: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value
semantic_en: This CDS view provides value help for work agreements. Use this view for value help purposes only. This CDS view provides the data to answer the following business questions: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - CA
  - bo:companycode
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_PERSWRKAGRMTSRCHHELP

**This CDS view provides value help for work agreements. Use this view for value help purposes only. This CDS view provides the data to answer the following business questions: Which work agreement is associated with the workforce person? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSWRKAGRMTSRCHHELP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Person` |  | |  |  | `CHAR(45)` | ID of Related Object |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FamilyName` |  | |  |  | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `GivenName` |  | |  |  | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `PersonExternalID` |  | |  |  | `CHAR(60)` | Identification Number |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `Job` |  | |  |  | `NUMC(8)` | Job |
| `JobName` |  | |  |  | `CHAR(256)` | Job Title |
| `OrganizationalUnitName` |  | |  |  | `CHAR(40)` | Object Name |
| `PersonWorkAgrmtAuthznGrpg` |  | |  |  | `CHAR(14)` | Organizational Key |
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
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
