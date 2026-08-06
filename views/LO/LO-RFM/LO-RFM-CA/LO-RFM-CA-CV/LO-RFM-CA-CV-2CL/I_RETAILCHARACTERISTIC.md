---
name: I_RETAILCHARACTERISTIC
description: Controlling Characteristics Header
app_component: LO-RFM-CA-CV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value
semantic_en: Controlling Characteristics Header
tags:
  - LO
  - component:LO-RFM-CA-CV-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-CV
  - LO-RFM-CA-CV-2CL
  - lob:cross_application components
  - lob:logistics general
  - metadata-only
---
# I_RETAILCHARACTERISTIC

**Controlling Characteristics Header**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-CV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RETAILCHARACTERISTIC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CharcInternalID` | `NUMC(10)` | Numeric Character Field, Length 10 |
| `Characteristic` | `CHAR(30)` | Characteristic Name |
| `RetailCharacteristicType` | `CHAR(1)` | Characteristic Type |
| `RtlCharcValValdtn` | `CHAR(1)` | Check Option |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangedDate` | `DATS(8)` | Last Changed On |
