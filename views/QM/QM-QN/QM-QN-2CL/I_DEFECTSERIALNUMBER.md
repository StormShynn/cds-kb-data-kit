---
name: I_DEFECTSERIALNUMBER
description: Serial Number in Defect
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value
semantic_en: Serial Number in Defect
tags:
  - QM
  - component:QM-QN-2CL
  - interface-view
  - lob:quality management
  - QM-QN
  - QM-QN-2CL
  - metadata-only
---
# I_DEFECTSERIALNUMBER

**Serial Number in Defect**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DefectInternalID` | `CHAR(12)` | Internal Defect ID |
| `DfctSerialNmbrSequentialNumber` | `INT2(5)` | Counter of Serial Number in a Defect |
| `Defect` | `CHAR(11)` | Defect Number |
| `SerialNumber` | `CHAR(18)` | Serial Number |
| `Equipment` | `CHAR(18)` | Equipment Number |
| `SerialNumberAssignmentDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
