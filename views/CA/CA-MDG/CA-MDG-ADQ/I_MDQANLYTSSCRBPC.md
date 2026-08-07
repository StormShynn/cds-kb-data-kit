---
name: I_MDQANLYTSSCRBPC
description: Master Data Quality Score for Business Partner - Cube
app_component: CA-MDG-ADQ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value
semantic_en: Master Data Quality Score for Business Partner - Cube
keywords:
  - MDQ Score for Business Partner - Cube
tags:
  - CA
  - bo:businesspartner
  - CA-MDG
  - CA-MDG-ADQ
  - component:CA-MDG-ADQ
  - interface-view
  - lob:cross_application components
  - master-data
  - metadata-only
---
# I_MDQANLYTSSCRBPC

**Master Data Quality Score for Business Partner - Cube**

| Property | Value |
|---|---|
| App Component | `CA-MDG-ADQ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MDQANLYTSSCRBPC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataChangeProcess` |  | |  |  | `NUMC(12)` | Master Data Change Process Identifier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `MDQualityBusinessRuleUUID` |  | |  |  | `RAW(16)` | Master Data Quality Validation Rule UUID |
| `MDQltyBusRuleEvalResultCode` |  | |  |  | `CHAR(1)` | Master Data Quality Rule Evaluation Result Type |
| `MDChgProcessFinishDate` |  | |  |  | `DATS(8)` | Master Data Change Process Completion Date |
| `MDChgProcessIsLatest` |  | |  |  | `CHAR(1)` |  |
| `MDQltyBusinessRuleBaseTable` |  | |  |  | `CHAR(30)` | Base Table |
| `MDQltyBusinessRuleBaseTabName` |  | |  |  | `CHAR(80)` | Alias of a table |
| `MDQltyBusinessRuleOwner` |  | |  |  | `CHAR(12)` | Master Data Quality Business Rule Owner |
| `MDQltyBusRuleCheckedField` |  | |  |  | `CHAR(30)` | Master Data Quality Fieldname of the Checked Field |
| `MDQltyBusRuleCheckedFieldTable` |  | |  |  | `CHAR(30)` | Maste Data Quality Table Name of Checked Field |
| `MDQltyBusRuleChkdFieldAndTable` |  | |  |  | `CHAR(61)` | Master Data Quality Table and Field Name of Checked Field |
| `MDQualityBusinessRule` |  | |  |  | `CHAR(26)` | Master Data Quality Rule Definition ID |
| `MDQualityBusinessRuleName` |  | |  |  | `CHAR(50)` | Master Data Quality Rule Definition Name |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `BPFirstNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 2 (Name 2/First Name) |
| `BPLastNameSearchHelp` |  | |  |  | `CHAR(35)` | Search Help Field 1 (Name 1/Last Name) |
| `BusinessPartnerCategory` |  | |  |  | `CHAR(1)` | Business Partner Category |
| `BusinessPartnerGrouping` |  | |  |  | `CHAR(4)` | Business Partner Grouping |
| `BusinessPartnerIsBlocked` |  | |  |  | `CHAR(1)` | Central Block for Business Partner |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User who created the object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on which the object was created |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `GenderCodeName` |  | |  |  | `CHAR(1)` | Gender of Business Partner (Person) |
| `IsMarkedForArchiving` |  | |  |  | `CHAR(1)` | Central Archiving Flag |
| `IsNaturalPerson` |  | |  |  | `CHAR(1)` | Business Partner Is a Natural Person Under the Tax Laws |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date when object was last changed |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last user to change object |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `LegalForm` |  | |  |  | `CHAR(2)` | BP: Legal form of organization |
| `OrganizationBPName1` |  | |  |  | `CHAR(40)` | Name 1 of organization |
| `OrganizationBPName2` |  | |  |  | `CHAR(40)` | Name 2 of organization |
| `OrganizationFoundationDate` |  | |  |  | `DATS(8)` | Date organization founded |
| `PostalCode` |  | |  |  | `CHAR(10)` | City Postal Code |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 for Business Partner |
| `SearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 for Business Partner |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `MDQltyNmbrOfSuccssflEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records OK |
| `MDQltyNmbrOfFailedEvalRslts` |  | |  |  | `INT4(10)` | Master Data Quality Counter Records Failed |
| `MDQltyNmbrOfBusRuleEvalResults` |  | |  |  | `INT4(10)` | Master Data Quality Counter Total Records |
| `MDQltyAlPgNavigationPath` |  | |  |  | `SSTR(1333)` | Fiori Host Path concatenated with Navigation Target |
