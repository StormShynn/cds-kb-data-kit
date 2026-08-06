---
name: I_QLTYMGMTINTEGSCENSTATE
description: Qltymgmtintegscenstate
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
# I_QLTYMGMTINTEGSCENSTATE

**Qltymgmtintegscenstate**

| Property | Value |
|---|---|
| App Component | `QM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QltyMgmtIntegScenState` | `cast(substring(domvalue_l, 1, 1) as qinteg_state preserving type)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_QltyMgmtIntegScenStateText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMgmtIntegScenStateText` | `I_QltyMgmtIntegScenStateText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@VDM.viewType: #BASIC


@EndUserText.label: 'QM Integration Scenario State'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: 
  [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'QltyMgmtIntegScenState',
    resultSet.sizeCategory: #XS
}
define view entity I_QltyMgmtIntegScenState as select from dd07l

  association [0..*] to I_QltyMgmtIntegScenStateText as _QltyMgmtIntegScenStateText on $projection.QltyMgmtIntegScenState = _QltyMgmtIntegScenStateText.QltyMgmtIntegScenState

{
  @ObjectModel.text.association: '_QltyMgmtIntegScenStateText'
  key cast(substring(domvalue_l, 1, 1) as qinteg_state preserving type) as QltyMgmtIntegScenState,
  @Analytics.hidden: true
  @Consumption.hidden: true
  // To enable search on the code value & to enable optimized join definitions
  dd07l.domvalue_l as DomainValue,
  
  _QltyMgmtIntegScenStateText
  
}
where
      dd07l.domname  = 'QINTEG_STATE'
  and dd07l.as4local = 'A'
```
