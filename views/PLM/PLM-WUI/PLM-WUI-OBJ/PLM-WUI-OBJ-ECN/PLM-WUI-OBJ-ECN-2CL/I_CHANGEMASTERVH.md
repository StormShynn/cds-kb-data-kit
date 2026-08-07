---
name: I_CHANGEMASTERVH
description: This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead.
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value
semantic_en: This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead.
tags:
  - PLM
  - bo:purchaseorder
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - metadata-only
---
# I_CHANGEMASTERVH

**This view provides value help for change number. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number instead.**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ChangeNumberDescription` |  | |  |  | `CHAR(40)` | Change number description |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization group for change master record |
| `ChangeNumberStatus` |  | |  |  | `NUMC(2)` | Status of Change Number |
| `ChangeNumberFunction` |  | |  |  | `CHAR(1)` | Change number function |
| `ReasonForChangeText` |  | |  |  | `CHAR(40)` | Reason for change |
| `IsTechnicallyReleased` |  | |  |  | `CHAR(1)` | Indicator: Technical release occurs |
| `ChangeNumberReleaseKey` |  | |  |  | `NUMC(2)` | Release Key for Change Master Record |
| `ChangeNumberValidFromDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ChangeNumberCreationDate` |  | |  |  | `DATS(8)` | Date on Which Record Was Created |
| `ChangeNumberCreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created Record |
| `ChangeNumberLastChangedDate` |  | |  |  | `DATS(8)` | Changed On |
| `ChangeNumberLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `IsUsedForDataDefinition` |  | |  |  | `CHAR(1)` | Change Number Is Currently Being Used in Objects |
| `ChangeNumberIsMrkdForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for Change Number (Reorganization) |
| `ChangeNumberLastChgdDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
