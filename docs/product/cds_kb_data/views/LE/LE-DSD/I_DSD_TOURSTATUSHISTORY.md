---
name: I_DSD_TOURSTATUSHISTORY
description: "Dsd Tourstatushistory"
app_component: LE-DSD
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DSD_TourIdentification` | ✓ | | `_History` | `tourid` |  |  |
| `TourStatusSequentialNumber` | ✓ | | `_History` | `counter` |  |  |
| `TourStatusIdentification` |  | | `_History` | `status_id` |  |  |
| `CreatedAtDate` |  | | `_History` | `idate` |  |  |
| `TimeOfCreation` |  | | `_History` | `itime` |  |  |
| `TourStatusHasBeenCancelled` |  | | `_History` | `canceled` |  |  |
| `TourStatusHasBeenSetManually` |  | | `_History` | `man_exec` |  |  |
| `TourScenario` |  | | `_TourStatus` | `scenario` |  |  |
| `_Status` | | ✓ | | | | |

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
