---
name: I_WBSELEMENTCHANGEDOCUMENTS
description: Change document for Work Breakdown Structure Element data
app_component: PS-ST
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value
semantic_en: Change document for Work Breakdown Structure Element data
tags:
  - PS
  - bo:wbs
  - component:PS-ST
  - document
  - interface-view
  - PS-ST
  - metadata-only
---
# I_WBSELEMENTCHANGEDOCUMENTS

**Change document for Work Breakdown Structure Element data**

| Property | Value |
|---|---|
| App Component | `PS-ST` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WBSELEMENTCHANGEDOCUMENTS')/$value) |

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
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ChangeDocGlobalFieldName` |  | |  |  | `CHAR(30)` | DD: Field Name Original Spelling |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `ChangeDocPreviousUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for Old Field Content |
| `ChangeDocNewUnit` |  | |  |  | `UNIT(3)` | Referenced Unit for New Field Content |
| `ChangeDocPreviousCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for Old Field Content |
| `ChangeDocNewCurrency` |  | |  |  | `CUKY(5)` | Referenced Currency for New Field Content |
| `ChangeDocumentOldFieldValue` |  | |  |  | `CHAR(254)` | Old Content of Changed Field |
| `ChangeDocumentNewFieldValue` |  | |  |  | `CHAR(254)` | New Content of Changed Field |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name of Person Making Change in Change Document |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Creation Date of Change Document |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ResponsiblePerson` |  | |  |  | `NUMC(8)` | Responsible Person Number (Project Manager) |
| `ApplicantCode` |  | |  |  | `NUMC(8)` | Applicant number |
| `RespCostCenterControllingArea` |  | |  |  | `CHAR(4)` | Responsible Cost Center Controlling Area |
| `ResponsibleCostCenter` |  | |  |  | `CHAR(10)` | Responsible Cost Center |
| `FreeDefinedAttribute01` |  | |  |  | `CHAR(20)` | 1st user field for 20 characters - WBS element- |
| `FreeDefinedAttribute02` |  | |  |  | `CHAR(20)` | 2nd user field 20 digits - WBS element |
| `FreeDefinedAttribute03` |  | |  |  | `CHAR(10)` | 3rd user-defined field 10 digits -WBS element |
| `FreeDefinedAttribute04` |  | |  |  | `CHAR(10)` | 4th user-defined field 10 digits -WBS element |
| `FreeDefinedIndicator1` |  | |  |  | `CHAR(1)` | 1st user field for 'Ind. for evaluations' WBS elem. |
| `FreeDefinedIndicator2` |  | |  |  | `CHAR(1)` | 2nd user field for 'Indicator for eval.s' WBS elemnt |
| `ProjectType` |  | |  |  | `CHAR(2)` | Project Type |
