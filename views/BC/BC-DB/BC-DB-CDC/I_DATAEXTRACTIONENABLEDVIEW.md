---
name: I_DATAEXTRACTIONENABLEDVIEW
description: "Core Data Services Views enabled for Data Extraction"
app_component: BC-DB-CDC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value
semantic_en: "Core Data Services Views enabled for Data Extraction"
tags:
  - BC
  - BC-DB
  - BC-DB-CDC
  - component:BC-DB-CDC
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_DATAEXTRACTIONENABLEDVIEW

**Core Data Services Views enabled for Data Extraction**

| Property | Value |
|---|---|
| App Component | `BC-DB-CDC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DataExtractionViewName` |  | |  |  | `CHAR(30)` |  |
| `DataExtractionViewDescription` |  | |  |  | `CHAR(60)` | Short Description of Repository Objects |
| `IsSAPReleasedView` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `DeltaChgDataCaptureIsSupported` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
