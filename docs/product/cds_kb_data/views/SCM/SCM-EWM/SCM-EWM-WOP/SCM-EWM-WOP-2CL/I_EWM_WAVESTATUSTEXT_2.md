---
name: I_EWM_WAVESTATUSTEXT_2
description: "Ewm Wavestatustext 2"
app_component: SCM-EWM-WOP-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWaveStatus` | ✓ | |  | `cast( Domain.domvalue_l as /scwm/de_stwave )as EWMWaveStatus` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EWMWaveStatusName` |  | |  | `ddtext` |  |  |

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
