---
name: C_MEASUREMENTPOINTVOLQRY
description: "Measurement Point Volume Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value
semantic_en: "Measurement Point Volume Query"
semantic_vi: "Measurement Point Volume Query — CDS view tiêu dùng dựa trên I_MeasurementPointVolume."
keywords:
  - "measurement"
  - "point"
  - "volume"
  - "query"
  - "year"
  - "type"
  - "class"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_MEASUREMENTPOINTVOLQRY

**Measurement Point Volume Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value) |

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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASUREMENTPOINTVOLQRY')/$value)*

```abap
@EndUserText.label: 'Measurement Point Volume Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVMPVLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_MeasurementPointVolQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_MeasurementPointVolume
{
  MeasurementPtVolDocYear,
  MeasurementPtVolumeDoc,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.display: #KEY_TEXT
  MeasurementPoint,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 5
  @AnalyticsDetails.query.display: #TEXT
  @AnalyticsDetails.query.axis: #ROWS
  VolumeType,
  @AnalyticsDetails.query.display: #TEXT
  VolumeClass,
  @AnalyticsDetails.query.display: #TEXT
  Transporter,
  TransporterReference,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.display: #KEY_TEXT
  @AnalyticsDetails.query.axis: #ROWS
  Material,
  @AnalyticsDetails.query.display: #TEXT
  AllocationFrequency,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.display: #KEY_TEXT
  DeliveryNetwork,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAContract,
  TicketNumber,
  TicketDateTime,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  ProductionDate,
  VolumeEntryDateTime,
  EffectiveValidityStartDate,
  EffectiveValidityEndDate,
  MeterStartDateTime,
  MeterStopDateTime,
  @AnalyticsDetails.query.display: #TEXT
  ConversionGroup,
  @AnalyticsDetails.query.display: #KEY_TEXT
  TankBatteryMeasurementPt,
  @AnalyticsDetails.query.display: #TEXT
  VolumeSource,
  @AnalyticsDetails.query.display: #TEXT
  VolumeCategory,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LoadOilDeliveryNetwork,
  @AnalyticsDetails.query.display: #KEY
  LoadOilWell,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LoadOilWellCompletion,
  @AnalyticsDetails.query.display: #KEY_TEXT
  LoadOilMeasurementPoint,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginatingMeasurementPt,
  @AnalyticsDetails.query.display: #TEXT
  DensityType,
  InventoryDate,
  CreatedByUser,
  CreationDateTime,
  StandardVolUnit,
  EnergyUnit,
  HeatingValUnit,
  StandardDensityUnit,
  @AnalyticsDetails.query.hidden
  HeatingValue,
  @AnalyticsDetails.query.hidden
  StandardDensity,
  @AnalyticsDetails.query.axis: #COLUMNS
  StandardVolume,
  @AnalyticsDetails.query.axis: #COLUMNS
  Energy,
  @AnalyticsDetails.query.hidden
  GasMolarVolume
}
```
