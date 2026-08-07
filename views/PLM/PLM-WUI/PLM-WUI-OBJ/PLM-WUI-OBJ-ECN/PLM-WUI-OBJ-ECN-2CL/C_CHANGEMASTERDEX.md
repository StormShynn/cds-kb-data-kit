---
name: C_CHANGEMASTERDEX
description: Engineering Change Master
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGEMASTERDEX')/$value
semantic_en: Engineering Change Master
tags:
  - PLM
  - component:PLM-WUI-OBJ-ECN-2CL
  - consumption-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# C_CHANGEMASTERDEX

**Engineering Change Master**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CHANGEMASTERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ChangeNumberStatus` |  | |  |  | `NUMC(2)` | Status of Change Number |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization group for change master record |
| `ChangeNumberFunction` |  | |  |  | `CHAR(1)` | Change number function |
| `ChangeNumberReleaseKey` |  | |  |  | `NUMC(2)` | Release Key for Change Master Record |
| `ReasonForChangeText` |  | |  |  | `CHAR(40)` | Reason for change |
| `ChangeNumberDescription` |  | |  |  | `CHAR(40)` | Change number description |
| `LeadingChangeNumber` |  | |  |  | `CHAR(12)` | Change package |
| `ChangeNumberValidFromDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ChangeNumberCreationDate` |  | |  |  | `DATS(8)` | Date on Which Record Was Created |
| `ChangeNumberCreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created Record |
| `ChangeNumberLastChangedDate` |  | |  |  | `DATS(8)` | Changed On |
| `ChangeNumberLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `ChangeNumberLastChgdDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `IsTechnicallyReleased` |  | |  |  | `CHAR(1)` | Indicator: Technical release occurs |
| `IsUsedForDataDefinition` |  | |  |  | `CHAR(1)` | Change Number Is Currently Being Used in Objects |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for Change Number (Reorganization) |
| `IsGloballyReleased` |  | |  |  | `CHAR(1)` | ECM: global release indicator |
| `IsReleasedForCosting` |  | |  |  | `CHAR(1)` | Release for costing |
| `IsReleasedForPlanning` |  | |  |  | `CHAR(1)` | Release for planning |
| `IsReleasedForProduction` |  | |  |  | `CHAR(1)` | Release for production |
| `IsReleasedForSimulation` |  | |  |  | `CHAR(1)` | Release for simulation |
| `IsDateShiftCreatedOCMPresel` |  | |  |  | `CHAR(1)` | Date shift creates preselection for OCM |
| `IsReleaseKeyCreatedOCMPresel` |  | |  |  | `CHAR(1)` | Release key creates preselection for OCM |
| `ChangeIsAllowed` |  | |  |  | `CHAR(1)` | Status allows changes |
| `DateChangeIsAllowed` |  | |  |  | `CHAR(1)` | Valid-from date can be changed |
| `DistributionIsLocked` |  | |  |  | `CHAR(1)` | Indicator: Distribution lock |
