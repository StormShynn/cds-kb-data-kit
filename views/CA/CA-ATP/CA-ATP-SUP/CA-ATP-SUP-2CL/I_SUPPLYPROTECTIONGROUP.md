---
name: I_SUPPLYPROTECTIONGROUP
description: "Supply Protection Group"
app_component: CA-ATP-SUP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value
semantic_en: "Supply Protection Group"
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
# I_SUPPLYPROTECTIONGROUP

**Supply Protection Group**

| Property | Value |
|---|---|
| App Component | `CA-ATP-SUP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLYPROTECTIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyProtectionGroupUUID` |  | |  |  | `RAW(16)` | Characteristic Value Combination UUID |
| `SupplyProtectionUUID` |  | |  |  | `RAW(16)` | UUID |
| `SupProtCharc01CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc01CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc01ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc02CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc02CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc02ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc03CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc03CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc03ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc04CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc04CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc04ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc05CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc05CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc05ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc06CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc06CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc06ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc07CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc07CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc07ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc08CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc08CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc08ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc09CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc09CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc09ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtCharc10CtlgPathUUID` |  | |  |  | `RAW(16)` | Characteristic Catalog Path UUID |
| `SupProtCharc10CtlgPathIntID` |  | |  |  | `RAW(20)` | Characteristic Catalog Path Internal ID |
| `SupProtCharc10ValueID` |  | |  |  | `SSTR(40)` | Characteristic Value |
| `SupProtGroupPriorityValue` |  | |  |  | `INT4(10)` | Priority |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On / At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Changed On / At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `CharcValAuthznGroup` |  | |  |  | `CHAR(40)` | Supply Protection Characteristic Value Authorization Group |
| `SupplyProtectionGroupIsBlocked` |  | |  |  | `CHAR(1)` | Supply protection group is blocked |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` |  |
| `SupProtProtectedQuantity` |  | |  |  | `QUAN(15)` |  |
| `SupProtConsumedQuantity` |  | |  |  | `QUAN(15)` |  |
| `SupProtRemainingProtectedQty` |  | |  |  | `QUAN(15)` |  |
