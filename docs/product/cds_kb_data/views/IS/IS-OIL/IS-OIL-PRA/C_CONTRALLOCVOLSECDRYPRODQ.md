---
name: C_CONTRALLOCVOLSECDRYPRODQ
description: "CA Volume for Secondary Products Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value
semantic_en: "CA Volume for Secondary Products Query"
semantic_vi: "CA Volume for Secondary Products Query — CDS view tiêu dùng dựa trên I_ContrAllocVolSecdryProd."
keywords:
  - "volume"
  - "for"
  - "secondary"
  - "products"
  - "query"
  - "delivery"
  - "network"
  - "measurement"
  - "point"
  - "well"
  - "completion"
  - "material"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# C_CONTRALLOCVOLSECDRYPRODQ

**CA Volume for Secondary Products Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `MeasurementPoint` |  | |  |  | `CHAR(20)` | Measurement point number |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales date |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `OwnerInterestType` |  | |  |  | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` |  | |  |  | `CHAR(2)` | Owner Interest Sequence Number |
| `OriginatingMeasurementPt` |  | |  |  | `CHAR(20)` | Original measurement point number |
| `Transporter` |  | |  |  | `CHAR(10)` | Transporter number |
| `IsLeaseOrPlant` |  | |  |  | `CHAR(1)` | Lease Plant Code |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Actual Volume Units |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Value Unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Actual Energy Unit |
| `VolReducnUnit` |  | |  |  | `UNIT(3)` | PVR Unit |
| `EnergyReducnUnit` |  | |  |  | `UNIT(3)` | PTR Unit |
| `ActualVolume` |  | |  |  | `QUAN(13)` | Actual Volume |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `ActualEnergy` |  | |  |  | `QUAN(13)` | Actual Energy |
| `EntitledVolume` |  | |  |  | `QUAN(13)` | Entitled Contract Volume |
| `EntitledEnergy` |  | |  |  | `QUAN(13)` | Entitled Contract Energy |
| `ActualVolReducn` |  | |  |  | `QUAN(13)` | Owner PVR |
| `ActualEnergyReducn` |  | |  |  | `QUAN(13)` | Owner PTR |
| `EntitledVolReducn` |  | |  |  | `QUAN(13)` | Owner PVR |
| `EntitledEngyReducn` |  | |  |  | `QUAN(13)` | Owner PTR |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CONTRALLOCVOLSECDRYPRODQ')/$value)*

```abap
@EndUserText.label: 'CA Volume for Secondary Products Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVCAVOLSECDRY'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_ContrAllocVolSecdryProdQ
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_ContrAllocVolSecdryProd
{
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.display: #KEY_TEXT
  DeliveryNetwork,
  @AnalyticsDetails.query.display: #KEY_TEXT
  MeasurementPoint,
  @AnalyticsDetails.query.display: #KEY
  Well,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WellCompletion,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Material,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAContract,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #COLUMNS
  SalesDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAOwner,
  @AnalyticsDetails.query.display: #TEXT
  OwnerInterestType,
  OwnerInterestSequence,
  @AnalyticsDetails.query.display: #KEY_TEXT
  OriginatingMeasurementPt,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Transporter,
  @AnalyticsDetails.query.display: #TEXT
  IsLeaseOrPlant,
  VolumeUnit,
  HeatingValUnit,
  EnergyUnit,
  VolReducnUnit,
  EnergyReducnUnit,
  @AnalyticsDetails.query.axis: #COLUMNS
  ActualVolume,
  @AnalyticsDetails.query.hidden
  HeatingValue,
  @AnalyticsDetails.query.hidden
  ActualEnergy,
  @AnalyticsDetails.query.hidden
  EntitledVolume,
  @AnalyticsDetails.query.hidden
  EntitledEnergy,
  @AnalyticsDetails.query.hidden
  ActualVolReducn,
  @AnalyticsDetails.query.hidden
  ActualEnergyReducn,
  @AnalyticsDetails.query.hidden
  EntitledVolReducn,
  @AnalyticsDetails.query.hidden
  EntitledEngyReducn,
      
  // OriginTransaction,
  CreatedByUser,
  CreationDateTime

};
```
