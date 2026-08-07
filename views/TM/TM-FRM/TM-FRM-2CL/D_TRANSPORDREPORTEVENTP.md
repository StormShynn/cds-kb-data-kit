---
name: D_TRANSPORDREPORTEVENTP
description: D Transpordreporteventp
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - transactional-processing
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDREPORTEVENTP

**D Transpordreporteventp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventCode` |  | |  | `/scmtms/tor_event` |  |  |
| `TransportationOrderStopUUID` |  | |  | `/scmtms/torstopuuid` |  |  |
| `TranspOrdEvtActualDateTime` |  | |  | `/scmtms/vdm_event_actl_dtetme` |  |  |
| `TranspOrdEvtEstimatedDateTime` |  | |  | `/scmtms/vdm_estimated_datetime` |  |  |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'ReportEvent Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdReportEventP
{
  TranspOrdEventCode              : /scmtms/tor_event;
  TransportationOrderStopUUID     : /scmtms/torstopuuid;
  TranspOrdEvtActualDateTime      : /scmtms/vdm_event_actl_dtetme;
  TranspOrdEvtEstimatedDateTime   : /scmtms/vdm_estimated_datetime;
  _TransportationOrderItems       : association [0..*] to D_TranspOrdReportEventItemP on 1 = 0;
}
```
