---
name: I_WORKFORCEPERSONDEX_1
description: Workforce Person
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX_1')/$value
semantic_en: Workforce Person
tags:
  - CA
  - bo:salesorder
  - CA-WFD
  - CA-WFD-BL
  - component:CA-WFD-BL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKFORCEPERSONDEX_1

**Workforce Person**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONDEX_1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `MiddleName` |  | |  |  | `CHAR(40)` | Middle Name or Second Forename of a Person |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `FullName` |  | |  |  | `CHAR(80)` | Full Name |
| `BirthName` |  | |  |  | `CHAR(40)` | Name at birth of business partner |
| `Initials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `NativePreferredLanguage` |  | |  |  | `LANG(1)` | Business Partner: Correspondence Language |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Business Purpose Completed Flag |
| `DataControllerSet` |  | |  |  | `CHAR(1)` | BP: Data Controller Set Flag |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
