---
name: I_DSD_TOURSTATUSHISTORY
description: Dsd Tourstatushistory
app_component: LE-DSD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-DSD
  - interface-view
  - status
  - component:LE-DSD
  - lob:Logistics Execution
---
# I_DSD_TOURSTATUSHISTORY

**Dsd Tourstatushistory**

| Property | Value |
|---|---|
| App Component | `LE-DSD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DSD_TourIdentification` | `_History.tourid` |
| key `TourStatusSequentialNumber` | `_History.counter` |
| `TourStatusIdentification` | `_History.status_id` |
| `CreatedAtDate` | `_History.idate` |
| `TimeOfCreation` | `_History.itime` |
| `TourStatusHasBeenCancelled` | `_History.canceled` |
| `TourStatusHasBeenSetManually` | `_History.man_exec` |
| `TourScenario` | `_TourStatus.scenario` |
| `_Status` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Status` | `I_DSD_TourStatus` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Tour Status History'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@VDM: { viewType: #BASIC }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view entity I_DSD_TourStatusHistory
  as select from /dsd/st_status_h as _History

  inner join /dsd/st_status as _TourStatus on _History.tourid = _TourStatus.tourid 

  association [0..1] to I_DSD_TourStatus as _Status on $projection.TourStatusIdentification = _Status.TourStatusIdentification
{

  key _History.tourid    as DSD_TourIdentification,
  key _History.counter   as TourStatusSequentialNumber,
      _History.status_id as TourStatusIdentification,
      _History.idate     as CreatedAtDate,
      _History.itime     as TimeOfCreation,
      _History.canceled  as TourStatusHasBeenCancelled,
      _History.man_exec  as TourStatusHasBeenSetManually,

      _TourStatus.scenario as TourScenario,

      _Status

}
```
