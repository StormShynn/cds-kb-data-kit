---
name: I_TRANSPNUMBERINGSCHEME
description: Transpnumberingscheme
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPNUMBERINGSCHEME

**Transpnumberingscheme**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchm` | ✓ | |  |  |  |  |
| `TrdClassfctnNmbrSchmType` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@EndUserText.label: 'Transportation Numbering Scheme'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchm'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view entity I_TranspNumberingScheme
  as select from I_TrdClassfctnNmbrSchm

{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key TrdClassfctnNmbrSchm,
      TrdClassfctnNmbrSchmType

}
where
     TrdClassfctnNmbrSchmType = '11'
  or TrdClassfctnNmbrSchmType = '12'
  or TrdClassfctnNmbrSchmType = '13'
  or TrdClassfctnNmbrSchmType = '14'
  or TrdClassfctnNmbrSchmType = '15'
```
