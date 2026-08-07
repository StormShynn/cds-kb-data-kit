---
name: I_CASETYPES
description: Case Types
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value
semantic_en: Case Types
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_CASETYPES

**Case Types**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASETYPES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseRecordModel` |  | |  |  | `CHAR(42)` | Case Record Model ID |
| `CaseAttributeProfile` |  | |  |  | `CHAR(8)` | Case: Attribute Profile ID |
| `CaseFunctionProfile` |  | |  |  | `CHAR(8)` | Case: Function Profile ID |
| `CaseTextProfile` |  | |  |  | `CHAR(8)` | Text Profile for Case Notes |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseTerminologyProfile` |  | |  |  | `CHAR(8)` | Terminology Profile ID |
| `CaseRMSID` |  | |  |  | `CHAR(32)` | RMS ID |
| `CaseElementType` |  | |  |  | `CHAR(32)` | Element Type ID (Case) |
| `CaseRecordElementType` |  | |  |  | `CHAR(32)` | Element Type ID (Record) |
| `CaseNoteElementType` |  | |  |  | `CHAR(32)` | Element Type ID (Notes) |
| `CaseProcess` |  | |  |  | `CHAR(4)` | Permitted Process for Case Type |
| `CaseNumberRangeInterval` |  | |  |  | `CHAR(2)` | Case: Number Range Interval (For Internal Number Assignment) |
| `CaseIndicatorNumberAssignment` |  | |  |  | `CHAR(1)` | Case: Indicator for Early Number Assignment |
| `CaseProcessRouteFlag` |  | |  |  | `CHAR(1)` | Case: Flag for 'Process Route Used' |
| `CaseTypeObsolate` |  | |  |  | `CHAR(1)` | Case type obsolete |
| `PPFActionProfile` |  | |  |  | `CHAR(30)` | PPF: Name of Action Profile |
