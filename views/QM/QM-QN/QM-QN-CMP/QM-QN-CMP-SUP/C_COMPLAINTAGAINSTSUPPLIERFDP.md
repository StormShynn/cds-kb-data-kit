---
name: C_COMPLAINTAGAINSTSUPPLIERFDP
description: FDP for Complaint Against Supplier
app_component: QM-QN-CMP-SUP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value
semantic_en: FDP for Complaint Against Supplier
tags:
  - QM
  - component:QM-QN-CMP-SUP
  - consumption-view
  - lob:quality management
  - QM-QN
  - QM-QN-CMP
  - QM-QN-CMP-SUP
  - supplier
  - metadata-only
---
# C_COMPLAINTAGAINSTSUPPLIERFDP

**FDP for Complaint Against Supplier**

| Property | Value |
|---|---|
| App Component | `QM-QN-CMP-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COMPLAINTAGAINSTSUPPLIERFDP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ComplaintAgainstSupplier` | `CHAR(12)` | Number of Quality Complaint |
| `Plant` | `CHAR(4)` | Plant |
| `PlantName` | `CHAR(30)` | Plant Name |
| `QltyCmplLifecycleStatus` | `CHAR(2)` | Lifecycle Status of Quality Complaint |
| `QltyCmplLifecycleStatusText` | `CHAR(60)` | Text of Lifecycle Status for Quality Complaint |
| `MasterLanguage` | `LANG(1)` | Original Language |
| `QualityComplaintDescription` | `CHAR(40)` | Short Description of Quality Complaint |
| `QualityIssueReference` | `CHAR(40)` | External Reference Number |
| `QltyCmplPlannedStartDateTime` | `DEC(15)` | Planned Start Date and Time of Quality Complaint |
| `QltyCmplPlannedEndDateTime` | `DEC(15)` | Planned End Date and Time of Quality Complaint |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BPSupplierName` | `CHAR(81)` |  |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `QltyCmplCompletedByUser` | `CHAR(12)` | User Who Completed the Quality Complaint |
| `QltyCmplCompletedByUsrFullName` | `CHAR(80)` | Completed by User - Description |
| `QltyCmplCmpltdOnDateTime` | `DEC(15)` | Completion Date and Time of Quality Complaint |
| `CreatedByUser` | `CHAR(12)` | User Who Created the Object |
| `CreatedByUserFullName` | `CHAR(80)` | Created by User - Description |
| `QltyCmplCreatedOnDateTime` | `DEC(15)` | Date and Time of Creation |
| `LastChangedByUser` | `CHAR(12)` | User Who Last Changed the Object |
| `LastChangedByUserFullName` | `CHAR(80)` | Last Changed by User - Description |
| `QltyCmplLastChangedOnDateTime` | `DEC(15)` | Date and Time of the Last Change |
