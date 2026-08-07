---
name: I_EWM_WAVERELEASEMETHODT_2
description: "Ewm Wavereleasemethodt 2"
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
  - lease
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_WAVERELEASEMETHODT_2

**Ewm Wavereleasemethodt 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWaveReleaseMethod` | ✓ | |  | `cast( Domain.domvalue_l as /scwm/de_rls_mthd)as EWMWaveReleaseMethod` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EWMWaveReleaseMethodName` |  | |  | `ddtext` |  |  |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IEWMWVRLSMTHDT2'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Wave Release Method - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory:         #TEXT
@ObjectModel.representativeKey: 'EWMWaveReleaseMethod'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}

@Search.searchable:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
//@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType:#BASIC

define view entity I_EWM_WaveReleaseMethodT_2
  as select from dd07t as Domain
{
      @Semantics.text:true
      @EndUserText.label: 'Warehouse Wave Release Method'
      @ObjectModel.text.element: ['EWMWaveReleaseMethod']
  key cast( Domain.domvalue_l as /scwm/de_rls_mthd)as EWMWaveReleaseMethod,
      @Semantics.language: true
  key Domain.ddlanguage as Language,

      @EndUserText.label: 'Warehouse Wave Release Method Name'
      @Semantics.text: true
      @Search.defaultSearchElement: true
      Domain.ddtext     as EWMWaveReleaseMethodName
}
where
      Domain.as4local = 'A'
  and Domain.domname  = '/SCWM/DO_RLS_MTHD'
```
