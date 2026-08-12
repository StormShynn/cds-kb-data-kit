---
name: I_QLTYMGMTINTEGRATIONSCENARIO
description: "Qltymgmtintegrationscenario"
app_component: QM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
