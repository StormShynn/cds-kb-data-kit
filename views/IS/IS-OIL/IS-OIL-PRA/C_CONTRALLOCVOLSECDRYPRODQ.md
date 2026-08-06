---
name: C_CONTRALLOCVOLSECDRYPRODQ
description: CA Volume for Secondary Products Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value
semantic_en: CA Volume for Secondary Products Query
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# C_CONTRALLOCVOLSECDRYPRODQ

**CA Volume for Secondary Products Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DeliveryNetwork` | `CHAR(20)` | Delivery network number |
| `MeasurementPoint` | `CHAR(20)` | Measurement point number |
| `Well` | `CHAR(15)` | Well ID number |
| `WellCompletion` | `CHAR(5)` | Well Completion Number |
| `Material` | `CHAR(40)` | Material Number |
| `PRAContract` | `CHAR(10)` | Contract Number |
| `SalesDate` | `DATS(8)` | Sales date |
| `PRAOwner` | `CHAR(10)` | PRA owner |
| `OwnerInterestType` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | `CHAR(2)` | Owner Interest Sequence Number |
| `OriginatingMeasurementPt` | `CHAR(20)` | Original measurement point number |
| `Transporter` | `CHAR(10)` | Transporter number |
| `IsLeaseOrPlant` | `CHAR(1)` | Lease Plant Code |
| `VolumeUnit` | `UNIT(3)` | Actual Volume Units |
| `HeatingValUnit` | `UNIT(3)` | Heating Value Unit |
| `EnergyUnit` | `UNIT(3)` | Actual Energy Unit |
| `VolReducnUnit` | `UNIT(3)` | PVR Unit |
| `EnergyReducnUnit` | `UNIT(3)` | PTR Unit |
| `ActualVolume` | `QUAN(13)` | Actual Volume |
| `HeatingValue` | `QUAN(13)` | Heating value |
| `ActualEnergy` | `QUAN(13)` | Actual Energy |
| `EntitledVolume` | `QUAN(13)` | Entitled Contract Volume |
| `EntitledEnergy` | `QUAN(13)` | Entitled Contract Energy |
| `ActualVolReducn` | `QUAN(13)` | Owner PVR |
| `ActualEnergyReducn` | `QUAN(13)` | Owner PTR |
| `EntitledVolReducn` | `QUAN(13)` | Owner PVR |
| `EntitledEngyReducn` | `QUAN(13)` | Owner PTR |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
