---
name: C_WELLCOMPLTNDISPOSNVOLQRY
description: "Well Completion Disposition Volume Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WELLCOMPLTNDISPOSNVOLQRY')/$value
semantic_en: "Well Completion Disposition Volume Query"
semantic_vi: "Well Completion Disposition Volume Query — CDS view tiêu dùng dựa trên I_WellCompltnDisposnVol."
keywords:
  - "well"
  - "completion"
  - "disposition"
  - "volume"
  - "query"
  - "compltn"
  - "delivery"
  - "network"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_WELLCOMPLTNDISPOSNVOLQRY

**Well Completion Disposition Volume Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WELLCOMPLTNDISPOSNVOLQRY')/$value) |

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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WELLCOMPLTNDISPOSNVOLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WELLCOMPLTNDISPOSNVOLQRY')/$value)*

```abap
@EndUserText.label: 'Well Completion Disposition Volume Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVWCDVLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_WellCompltnDisposnVolQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_WellCompltnDisposnVol
{

  WellCompltnVolDocYr,
  WellCompltnVolDoc,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.display: #KEY
  Well,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.display: #KEY_TEXT
  WellCompletion,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.display: #KEY_TEXT
  DeliveryNetwork,
  EffectiveValidityStartDate,
  EffectiveValidityEndDate,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  ProductionDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ReclassifiedMaterial,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 6
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #ROWS
  Material,
  @AnalyticsDetails.query.display: #TEXT
  AllocationFrequency,
  TankBatteryMeasurementPt,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 5
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #COLUMNS
  VolumeType,
  @AnalyticsDetails.query.display: #TEXT
  VolumeClass,
  @AnalyticsDetails.query.display: #TEXT
  VolumeSource,
  @AnalyticsDetails.query.display: #TEXT
  Transporter,
  TransporterReference,
  TicketNumber,
  TicketDateTime,
  OriginatingMeasurementPt,
  @AnalyticsDetails.query.display: #TEXT
  ConversionGroup,
  @AnalyticsDetails.query.display: #TEXT
  DensityType,
  InventoryDate,
  @AnalyticsDetails.query.display: #KEY
  CrossRefWell,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CrossRefWellCompletion,
  CreatedByUser,
  CreationDateTime,
  // OriginTransaction,
  StandardVolUnit,
  EnergyUnit,
  ThrtclVolUnit,
  HeatingValUnit,
  StandardDensityUnit,
  @AnalyticsDetails.query.hidden
  HeatingValue,
  @AnalyticsDetails.query.hidden
  StandardDensity,
  @AnalyticsDetails.query.hidden
  NmbrOfDaysProduced,
  @AnalyticsDetails.query.hidden
  NmbrOfHoursProduced,
  @AnalyticsDetails.query.hidden
  NumberOfItems,
  @AnalyticsDetails.query.hidden
  TheoreticalVolume,
  @AnalyticsDetails.query.axis: #COLUMNS
  StandardVolume,
  @AnalyticsDetails.query.hidden
  Energy,
  @AnalyticsDetails.query.hidden
  GasMolarVolume
}
```
