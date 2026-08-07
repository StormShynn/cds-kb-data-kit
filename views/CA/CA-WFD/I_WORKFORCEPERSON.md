---
name: I_WORKFORCEPERSON
description: This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value
semantic_en: This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKFORCEPERSON

**This view provides the prerequisites for answering the following business questions: Who are the persons in my workforce and what are their basic information?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Person` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `PersonExternalID` |  | |  |  | `CHAR(60)` | Identification Number |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `AdditionalLastName` |  | |  |  | `CHAR(40)` | Other Last Name of a Person |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner GUID |
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
