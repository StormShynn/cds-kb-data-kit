---
name: I_QLTYMGMTINTEGRATIONSCENARIO
description: Qltymgmtintegrationscenario
app_component: QM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - interface-view
  - component:QM-2CL
  - lob:Quality Management
---
# I_QLTYMGMTINTEGRATIONSCENARIO

**Qltymgmtintegrationscenario**

| Property | Value |
|---|---|
| App Component | `QM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QltyMgmtIntegrationScenario` | ✓ | |  | `integ_scenario` |  |  |
| `QltyMgmtIntegScenState` |  | |  | `integration_state` |  |  |
| `_QltyMgmtIntegScenState` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMgmtIntegScenState` | `I_QltyMgmtIntegScenState` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@VDM.viewType: #BASIC

@EndUserText.label: 'QM Integration Scenario'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.technicalName: 'IQLTYINTEGSC'
@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #S,
        serviceQuality: #A
    },
    resultSet.sizeCategory: #XS,
    representativeKey: 'QltyMgmtIntegrationScenario'
}

define view entity I_QltyMgmtIntegrationScenario as select from qinteg_conf

  association [0..1] to I_QltyMgmtIntegScenState as _QltyMgmtIntegScenState on $projection.QltyMgmtIntegScenState = _QltyMgmtIntegScenState.QltyMgmtIntegScenState

{
  key integ_scenario as QltyMgmtIntegrationScenario,
  integration_state as QltyMgmtIntegScenState,
  
  _QltyMgmtIntegScenState
}
```
