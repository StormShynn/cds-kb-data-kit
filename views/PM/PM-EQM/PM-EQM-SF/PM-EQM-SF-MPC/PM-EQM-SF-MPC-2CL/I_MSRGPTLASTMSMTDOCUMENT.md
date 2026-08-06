---
name: I_MSRGPTLASTMSMTDOCUMENT
description: Msrgptlastmsmtdocument
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - document
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MSRGPTLASTMSMTDOCUMENT

**Msrgptlastmsmtdocument**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MeasurementDocument` | `MeasurementDocument` |
| `MeasuringPoint` | `MeasuringPoint` |
| `MsmtRdngDate` | `MsmtRdngDate` |
| `MsmtRdngTime` | `MsmtRdngTime` |
| `MeasurementReadingDateTime` | `MeasurementReadingDateTime` |
| `MsmtRdngSourceMeasurementDoc` | `MsmtRdngSourceMeasurementDoc` |
| `MeasurementReading` | `MeasurementReading` |
| `MeasurementCounterReading` | `MeasurementCounterReading` |
| `MeasurementReadingInEntryUoM` | `MeasurementReadingInEntryUoM` |
| `MeasurementReadingEntryUoM` | `MeasurementReadingEntryUoM` |
| `MsmtRdngByUser` | `MsmtRdngByUser` |
| `_User` | *Association* |
| `_MeasuringPoint` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Latest Measurement Document'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_MsrgPtLastMsmtDocument
  as select from P_MeasuringPointLastMsmtDoc
  association [0..1] to I_User as _User on $projection.MsmtRdngByUser = _User.UserID
{
  key  MeasurementDocument,
       MeasuringPoint,
       MsmtRdngDate,
       MsmtRdngTime,
       MeasurementReadingDateTime,
       MsmtRdngSourceMeasurementDoc,
       @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
       MeasurementReading,
       @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
       MeasurementCounterReading,
       @Semantics.quantity.unitOfMeasure: 'MeasurementReadingEntryUoM'
       MeasurementReadingInEntryUoM,
       MeasurementReadingEntryUoM,
       MsmtRdngByUser,
       _MeasuringPoint,
       _User
}
```
