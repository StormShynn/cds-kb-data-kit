---
name: I_WORKFORCEPERSONMAPPING
description: Workforce Person Mappings
app_component: CA-WFD-BL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value
semantic_en: Workforce Person Mappings
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
# I_WORKFORCEPERSONMAPPING

**Workforce Person Mappings**

| Property | Value |
|---|---|
| App Component | `CA-WFD-BL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKFORCEPERSONMAPPING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkAssignmentExternalID` |  | |  |  | `CHAR(100)` | Workforce Assignment External ID |
| `Country2DigitISOCode` |  | |  |  | `CHAR(2)` | Workforce Country ISO Code |
| `WorkAssignmentStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkforcePersonExternalID` |  | |  |  | `CHAR(100)` | External Person ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `WorkforcePersonID` |  | |  |  | `CHAR(36)` | Worker ID |
| `FirstName` |  | |  |  | `CHAR(40)` | First Name of Business Partner (Person) |
| `LastName` |  | |  |  | `CHAR(40)` | Last Name of Business Partner (Person) |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `WorkAssignmentBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `IsBlocked` |  | |  |  | `CHAR(1)` | Blocked Indicator |
| `Person` |  | |  |  | `CHAR(10)` | Business Partner Number |
