---
name: I_WELLCOMPLTNDISPOSNVOL
description: "Well Completion Disposition Volume"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value
semantic_en: "Well Completion Disposition Volume"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_WELLCOMPLTNDISPOSNVOL

**Well Completion Disposition Volume**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WELLCOMPLTNDISPOSNVOL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WellCompltnVolDocYr` |  | |  |  | `NUMC(4)` | WC Volumes Document Year |
| `WellCompltnVolDoc` |  | |  |  | `CHAR(10)` | Well Completion Delivery Volume Header Number |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `EffectiveValidityStartDate` |  | |  |  | `DATS(8)` | Effective from date |
| `EffectiveValidityEndDate` |  | |  |  | `DATS(8)` | Effective To Date |
| `ProductionDate` |  | |  |  | `DATS(8)` | Production date |
| `ReclassifiedMaterial` |  | |  |  | `CHAR(40)` | Production Material |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `TankBatteryMeasurementPt` |  | |  |  | `CHAR(20)` | Tank battery measurement point number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume type code |
| `VolumeClass` |  | |  |  | `CHAR(1)` | Volume class code |
| `VolumeSource` |  | |  |  | `CHAR(1)` | Volume Source Code |
| `Transporter` |  | |  |  | `CHAR(10)` | Transporter number |
| `TransporterReference` |  | |  |  | `CHAR(25)` | Transporter Reference Number |
| `TicketNumber` |  | |  |  | `CHAR(45)` | Ticket number |
| `TicketDateTime` |  | |  |  | `DEC(15)` | Ticket Timestamp (Date) |
| `OriginatingMeasurementPt` |  | |  |  | `CHAR(20)` | Original measurement point number |
| `ConversionGroup` |  | |  |  | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `DensityType` |  | |  |  | `CHAR(1)` | Density Type |
| `InventoryDate` |  | |  |  | `DATS(8)` | Inventory date |
| `CrossRefWell` |  | |  |  | `CHAR(15)` | Cross-Reference Well Number |
| `CrossRefWellCompletion` |  | |  |  | `CHAR(5)` | Cross-Reference Wellcompletion Number |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
| `StandardVolUnit` |  | |  |  | `UNIT(3)` | Standard volume unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy quantity unit |
| `ThrtclVolUnit` |  | |  |  | `UNIT(3)` | Theoretical Unit |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Value Unit |
| `StandardDensityUnit` |  | |  |  | `UNIT(3)` | Unit for densities at standard/base conditions |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `StandardDensity` |  | |  |  | `FLTP(16)` | Oil/gas density at standard/base conditions |
| `NmbrOfDaysProduced` |  | |  |  | `INT4(10)` | Days of Production |
| `NmbrOfHoursProduced` |  | |  |  | `INT4(10)` | Days of Production |
| `NumberOfItems` |  | |  |  | `INT4(10)` | Number of Items |
| `TheoreticalVolume` |  | |  |  | `QUAN(13)` | Theoretical Volume |
| `StandardVolume` |  | |  |  | `QUAN(13)` | Standard volume |
| `Energy` |  | |  |  | `QUAN(13)` | Energy quantity |
| `GasMolarVolume` |  | |  |  | `QUAN(13)` | Gas mol volume |
