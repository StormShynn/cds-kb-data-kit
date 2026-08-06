---
name: I_EWM_WAVESTATUSTEXT_2
description: Ewm Wavestatustext 2
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text
  - status
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVESTATUSTEXT_2

**Ewm Wavestatustext 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `EWMWaveStatus` | `cast( Domain.domvalue_l as /scwm/de_stwave )as EWMWaveStatus` |
| key `Language` | `Domain.ddlanguage` |
| `EWMWaveStatusName` | `Domain.ddtext` |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEWMWVSTATUST_2'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Status - Text'

@ObjectModel.dataCategory:         #TEXT
@Search.searchable:                true
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'EWMWaveStatus'
@VDM.viewType:#BASIC
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
define view entity I_EWM_WaveStatusText_2
  as select from dd07t as Domain
{
      @EndUserText.label: 'Warehouse Wave Status'
      @ObjectModel.text.element: ['EWMWaveStatusName']
  key cast( Domain.domvalue_l as /scwm/de_stwave )as EWMWaveStatus,
      @Semantics.language: true
  key Domain.ddlanguage as Language,

      @EndUserText.label: 'Warehouse Wave Status Name'
      @Semantics.text: true
      @Search.defaultSearchElement: true
      Domain.ddtext     as EWMWaveStatusName
}
where
      Domain.as4local = 'A'
  and Domain.domname  = '/SCWM/DO_STWAVE'
```
