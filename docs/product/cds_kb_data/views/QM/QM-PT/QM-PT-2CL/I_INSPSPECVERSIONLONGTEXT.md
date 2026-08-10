---
name: I_INSPSPECVERSIONLONGTEXT
description: "This CDS view provides access to the data of a master inspection characteristic version."
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value
semantic_en: "This CDS view provides access to the data of a master inspection characteristic version."
tags:
  - QM
  - bo:project
  - component:QM-PT-2CL
  - interface-view
  - lob:quality management
  - QM-PT
  - QM-PT-2CL
  - metadata-only
---
# I_INSPSPECVERSIONLONGTEXT

**This CDS view provides access to the data of a master inspection characteristic version.**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` |  | |  |  | `CHAR(4)` | Plant for Master Inspection Characteristic |
| `InspectionSpecification` |  | |  |  | `CHAR(8)` | Master Inspection Characteristic |
| `InspectionSpecificationVersion` |  | |  |  | `CHAR(6)` | Version Number of Master Inspection Characteristic |
| `LongTextInternalNumber` |  | |  |  | `INT2(5)` | Long Text Counter |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LongTextID` |  | |  |  | `CHAR(4)` | Text ID |
| `LongTextCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
