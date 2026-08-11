---
name: I_INSPSUBSETRESULTLONGTEXT
description: "This CDS view provides access to the inspection result of an inspection point."
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value
semantic_en: "This CDS view provides access to the inspection result of an inspection point."
tags:
  - QM
  - bo:project
  - component:QM-IM-2CL
  - interface-view
  - lob:quality management
  - QM-IM
  - QM-IM-2CL
  - metadata-only
---
# I_INSPSUBSETRESULTLONGTEXT

**This CDS view provides access to the inspection result of an inspection point.**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSUBSETRESULTLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` |  | |  |  | `NUMC(12)` | Inspection Lot Number |
| `InspPlanOperationInternalID` |  | |  |  | `NUMC(8)` | Current Node Number from Order Counter |
| `InspectionCharacteristic` |  | |  |  | `NUMC(4)` | Inspection Characteristic Number |
| `InspectionSubsetInternalID` |  | |  |  | `NUMC(6)` | Number of Partial Sample |
| `ItemCounter` |  | |  |  | `INT2(5)` | Long Text Counter |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LongTextID` |  | |  |  | `CHAR(4)` | Text ID |
| `LongTextCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
