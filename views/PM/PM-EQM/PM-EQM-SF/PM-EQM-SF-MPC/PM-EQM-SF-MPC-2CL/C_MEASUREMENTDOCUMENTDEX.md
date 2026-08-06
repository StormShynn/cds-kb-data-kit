---
name: C_MEASUREMENTDOCUMENTDEX
description: Data Extraction for Measurement Document
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTDOCUMENTDEX')/$value
semantic_en: Data Extraction for Measurement Document
tags:
  - PM
  - component:PM-EQM-SF-MPC-2CL
  - consumption-view
  - document
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-SF
  - PM-EQM-SF-MPC
  - PM-EQM-SF-MPC-2CL
  - metadata-only
---
# C_MEASUREMENTDOCUMENTDEX

**Data Extraction for Measurement Document**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MeasurementDocument` | `CHAR(20)` | Measurement Document |
| `MeasuringPoint` | `CHAR(12)` | Measuring Point |
| `MsmtRdngDate` | `DATS(8)` | Date of the Measurement |
| `MsmtRdngTime` | `TIMS(6)` | Time of Measurement |
| `MsmtRdngIsForCounter` | `CHAR(1)` | Indicator: Counter Reading Document |
| `MeasurementDocumentText` | `CHAR(40)` | Measurement Document Text |
| `Language` | `LANG(1)` | Language Key |
| `MeasurementDocumentHasLongText` | `CHAR(1)` | Long Text Exists |
| `MsmtRdngByUser` | `CHAR(12)` | Person who Took the Measurement Reading |
| `CreationDate` | `DATS(8)` | Date on which the object was created |
| `CreationTime` | `TIMS(6)` | Time at which the object was created |
| `CreatedByUser` | `CHAR(12)` | Name of User Who Created the Object |
| `LastChangeDate` | `DATS(8)` | Date on which the object was last changed |
| `LastChangedByUser` | `CHAR(12)` | Name of the user who last changed the object |
| `SingleLevelDeletionLogicFlag` | `CHAR(1)` | Deletion Flag for 1-Level Deletion Logic |
| `MeasurementDocumentOrigin` | `CHAR(1)` | Origin Indicator |
| `InspectionLot` | `NUMC(12)` | Inspection Lot Number |
| `InspectionCharacteristic` | `NUMC(4)` | Inspection Characteristic Number |
| `MsmtRdngSourceMeasurementDoc` | `CHAR(20)` | Source Document for Measurement Reading Transfer |
| `ProdnRsceToolTypeCode` | `CHAR(2)` | CIM Resource Object Type for Production Resources/Tools |
| `ProdnRsceToolInternalID` | `NUMC(8)` | Production Resource/Tool Object ID |
| `MsmtDocumentReferredOrder` | `CHAR(22)` | Object Number of Order |
| `MsmtIsDoneAfterTaskCompltn` | `CHAR(1)` | Indicator: MeasDoc. Created After Associated Task |
| `MeasurementReading` | `FLTP(16)` | Measurement Reading/Total Counter Reading in SI Unit |
| `MsmtRdngIsEntered` | `CHAR(1)` | Indicator: Associated Number Field Contains a Value |
| `MeasurementReadingInEntryUoM` | `FLTP(16)` | Measurement Reading in Unit of Entry |
| `MsmtReadingInEntryUoMIsEntered` | `CHAR(1)` | Indicator: Associated Number Field Contains a Value |
| `MeasurementReadingEntryUoM` | `UNIT(3)` | Unit of Measurement for Document Entry |
| `MeasurementCounterReading` | `FLTP(16)` | Counter Reading in SI Unit |
| `MsmtCntrRdngIsEntered` | `CHAR(1)` | Indicator: Associated Number Field Contains a Value |
| `MsmtCounterReadingDifference` | `FLTP(16)` | Counter Reading Difference in SI Unit |
| `MsmtCntrReadingDiffIsEntered` | `CHAR(1)` | Indicator: Counter Reading Entered as Difference |
| `MsmtCounterReadingIsReplaced` | `CHAR(1)` | Indicator: Counter Replaced |
| `TotalMsmtRdngIsSetExternally` | `CHAR(1)` | Indicator: Total Counter Reading Set Externally |
| `MeasurementDocumentCatalogType` | `CHAR(1)` | Catalog Type - Measurement Reading Valuation Code |
| `MeasurementDocumentCodeGroup` | `CHAR(8)` | Code Group - Measurement Reading Valuation Code |
| `MsmtValuationCode` | `CHAR(4)` | Valuation Code |
| `MsmtValuationCodeVersNmbr` | `CHAR(6)` | Version Number |
| `MsmtRdngStatus` | `CHAR(1)` | Processing Status |
| `MsmtRdngIsReversed` | `CHAR(1)` | Reversal Indicator |
| `InspectionValuationResult` | `CHAR(1)` | Inspection Result Valuation |
| `MsmtRdngIsIntervalDoc` | `CHAR(1)` | Indicator that Document Refers to Time Interval |
| `MsmtRdngIntervalStartDate` | `DATS(8)` | Date of Interval Start |
| `MsmtRdngIntervalStartTime` | `TIMS(6)` | Time of Interval Start |
| `MaintOrderOperationInternalID` | `CHAR(22)` | Object Number of Order Operation/Confirmation Counter etc. |
