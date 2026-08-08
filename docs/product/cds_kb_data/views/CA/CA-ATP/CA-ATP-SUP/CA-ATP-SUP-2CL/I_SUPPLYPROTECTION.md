---
name: I_SUPPLYPROTECTION
description: "Supply Protection"
app_component: CA-ATP-SUP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value
semantic_en: "Supply Protection"
tags:
  - CA
  - CA-ATP
  - CA-ATP-SUP
  - CA-ATP-SUP-2CL
  - component:CA-ATP-SUP-2CL
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_SUPPLYPROTECTION

**Supply Protection**

| Property | Value |
|---|---|
| App Component | `CA-ATP-SUP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyProtectionUUID` |  | |  |  | `RAW(16)` | UUID |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SupplyProtectionName` |  | |  |  | `CHAR(60)` | Name |
| `SupProtLifecycleStatus` |  | |  |  | `CHAR(2)` | Status |
| `SupProtPlanningPeriodType` |  | |  |  | `CHAR(1)` | Planning Period Type |
| `SupProtPlanningPeriodStartDate` |  | |  |  | `DATS(8)` | Planning Period Start Date |
| `SupProtPlanningPeriodEndDate` |  | |  |  | `DATS(8)` | Planning Period End Date |
| `SupProtCoreCharc01CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `CoreCharc01CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCoreCharc01ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCoreCharc02CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `CoreCharc02CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCoreCharc02ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtIsPlanningContextSlsOrd` |  | |  |  | `CHAR(1)` | Planning Context: Sales Document |
| `SupProtIsPlanningContextSTO` |  | |  |  | `CHAR(1)` | Planning Context: Stock Transport Order |
| `SupProtCharcCatalogType` |  | |  |  | `CHAR(2)` | Characteristic Catalog Type |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On / At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Changed On / At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `CharcValAuthznGroup` |  | |  |  | `CHAR(40)` | Supply Protection Characteristic Value Authorization Group |
| `DraftLastChangedDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `SupplyProtectionIsBlocked` |  | |  |  | `CHAR(1)` | Supply protection object is blocked |
| `SupProtAutomActivationIsActive` |  | |  |  | `CHAR(1)` | Automatic Activation of Supply Protection Object |
| `SupProtAutomActivationDate` |  | |  |  | `DATS(8)` | Date of Automatic Activation |
| `SupProtActivationDate` |  | |  |  | `DATS(8)` | Activation Date |
| `SupProtCnsmpnDateTimeType` |  | |  |  | `CHAR(2)` | Reference Date Type for Consumption |
| `SupProtSelfRestrictionType` |  | |  |  | `CHAR(2)` | Restriction by Own Protection |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` |  |
| `SupProtProtectedQuantity` |  | |  |  | `QUAN(15)` |  |
| `SupProtConsumedQuantity` |  | |  |  | `QUAN(15)` |  |
| `SupProtRemainingProtectedQty` |  | |  |  | `QUAN(15)` |  |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SupProtPlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level for Supply Protection Objects |
