---
name: I_MSRGPTLASTMSMTDOCUMENT
description: "Msrgptlastmsmtdocument"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasurementDocument` | ✓ | |  |  |  |  |
| `MeasuringPoint` |  | |  |  |  |  |
| `MsmtRdngDate` |  | |  |  |  |  |
| `MsmtRdngTime` |  | |  |  |  |  |
| `MeasurementReadingDateTime` |  | |  |  |  |  |
| `MsmtRdngSourceMeasurementDoc` |  | |  |  |  |  |
| `MeasurementReading` |  | |  |  |  |  |
| `MeasurementCounterReading` |  | |  |  |  |  |
| `MeasurementReadingInEntryUoM` |  | |  |  |  |  |
| `MeasurementReadingEntryUoM` |  | |  |  |  |  |
| `MsmtRdngByUser` |  | |  |  |  |  |
| `_User` | | ✓ | | | | |
| `_MeasuringPoint` | | ✓ | | | | |

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
