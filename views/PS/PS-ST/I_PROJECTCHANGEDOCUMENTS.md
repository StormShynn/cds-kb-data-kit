---
name: I_PROJECTCHANGEDOCUMENTS
description: "Change document for Project data"
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value
semantic_en: "Change document for Project data"
tags:
  - PS
  - bo:project
  - component:PS-ST
  - document
  - interface-view
  - project
  - PS-ST
  - metadata-only
---
# I_PROJECTCHANGEDOCUMENTS

**Change document for Project data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTCHANGEDOCUMENTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeDocObject` |  | |  |  | `CHAR(90)` | Object value |
| `ChangeDocObjectClass` |  | |  |  | `CHAR(15)` | Object Class |
| `ChangeDocument` |  | |  |  | `CHAR(10)` | Change Number of Document |
| `DatabaseTable` |  | |  |  | `CHAR(30)` | Table Name |
| `ChangeDocTableKey` |  | |  |  | `CHAR(70)` | Key of Modified Table Row |
| `ChangeDocDatabaseTableField` |  | |  |  | `CHAR(30)` | Field Name |
| `ChangeDocItemChangeType` |  | |  |  | `CHAR(1)` | Type of Change |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project (internal) |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ChangeDocGlobalFieldName` |  | |  |  | `CHAR(30)` | DD: Field Name Original Spelling |
| `ProjectDescription` |  | |  |  | `CHAR(40)` | Project Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `ChangeDocPreviousUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for Old Field Content |
| `ChangeDocNewUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for New Field Content |
| `ChangeDocPreviousCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for Old Field Content |
| `ChangeDocNewCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for New Field Content |
| `ChangeDocumentOldFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `ChangeDocumentNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
