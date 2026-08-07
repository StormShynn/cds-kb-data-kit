---
name: I_INSPRESULTVALUELONGTEXT
description: This CDS view provides access to the inspection result data for an inspection characteristic (single values)
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value
semantic_en: This CDS view provides access to the inspection result data for an inspection characteristic (single values)
tags:
  - QM
  - component:QM-IM-2CL
  - interface-view
  - lob:quality management
  - QM-IM
  - QM-IM-2CL
  - metadata-only
---
# I_INSPRESULTVALUELONGTEXT

**This CDS view provides access to the inspection result data for an inspection characteristic (single values)**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPRESULTVALUELONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` |  | |  |  | `NUMC(12)` | Inspection Lot Number |
| `InspPlanOperationInternalID` |  | |  |  | `NUMC(8)` | Current Node Number from Order Counter |
| `InspectionCharacteristic` |  | |  |  | `NUMC(4)` | Inspection Characteristic Number |
| `InspResultValueInternalID` |  | |  |  | `NUMC(8)` | Number of Individual Result |
| `LongTextInternalNumber` |  | |  |  | `INT2(5)` | Long Text Counter |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LongTextCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
