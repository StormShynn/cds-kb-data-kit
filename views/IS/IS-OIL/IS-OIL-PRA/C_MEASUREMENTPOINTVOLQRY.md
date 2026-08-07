---
name: C_MEASUREMENTPOINTVOLQRY
description: "Measurement Point Volume Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value
semantic_en: "Measurement Point Volume Query"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_MEASUREMENTPOINTVOLQRY

**Measurement Point Volume Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementPtVolDocYear` |  | |  |  | `NUMC(4)` | Measurement point document year |
| `MeasurementPtVolumeDoc` |  | |  |  | `CHAR(10)` | MP volume Number |
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume Type Code |
| `VolumeClass` |  | |  |  | `CHAR(1)` | Volume class code |
| `Transporter` |  | |  |  | `CHAR(10)` | Transporter number |
| `TransporterReference` |  | |  |  | `CHAR(25)` | Transporter Reference Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `TicketNumber` |  | |  |  | `CHAR(45)` | Ticket number |
| `TicketDateTime` |  | |  |  | `DEC(15)` | Ticket timestamp |
| `ProductionDate` |  | |  |  | `DATS(8)` | Production date |
| `VolumeEntryDateTime` |  | |  |  | `DEC(15)` | Entry timestamp |
| `EffectiveValidityStartDate` |  | |  |  | `DATS(8)` | Effective from date |
| `EffectiveValidityEndDate` |  | |  |  | `DATS(8)` | Effective To Date |
| `MeterStartDateTime` |  | |  |  | `DEC(15)` | Meter start time |
| `MeterStopDateTime` |  | |  |  | `DEC(15)` | Meter stop time |
| `ConversionGroup` |  | |  |  | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `TankBatteryMeasurementPt` |  | |  |  | `CHAR(20)` | Tank battery measurement point number |
| `VolumeSource` |  | |  |  | `CHAR(1)` | Volume Source Code |
| `VolumeCategory` |  | |  |  | `CHAR(1)` | Volume Category Code |
| `LoadOilDeliveryNetwork` |  | |  |  | `CHAR(20)` | Load oil delivery network |
| `LoadOilWell` |  | |  |  | `CHAR(15)` | Load oil well number |
| `LoadOilWellCompletion` |  | |  |  | `CHAR(5)` | Load oil well completion |
| `LoadOilMeasurementPoint` |  | |  |  | `CHAR(20)` | Load oil measurement point |
| `OriginatingMeasurementPt` |  | |  |  | `CHAR(20)` | Original measurement point number |
| `DensityType` |  | |  |  | `CHAR(1)` | Density Type |
| `InventoryDate` |  | |  |  | `DATS(8)` | Inventory date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `StandardVolUnit` |  | |  |  | `UNIT(3)` | Standard volume unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy quantity unit |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Value Unit |
| `StandardDensityUnit` |  | |  |  | `UNIT(3)` | Unit for densities at standard/base conditions |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `StandardDensity` |  | |  |  | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `StandardVolume` |  | |  |  | `QUAN(13)` | Standard volume |
| `Energy` |  | |  |  | `QUAN(13)` | Energy quantity |
| `GasMolarVolume` |  | |  |  | `QUAN(13)` | Gas mol volume |
