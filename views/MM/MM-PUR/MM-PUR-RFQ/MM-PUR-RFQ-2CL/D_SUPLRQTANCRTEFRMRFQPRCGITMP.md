---
name: D_SUPLRQTANCRTEFRMRFQPRCGITMP
description: D Suplrqtancrtefrmrfqprcgitmp
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQPRCGITMP

**D Suplrqtancrtefrmrfqprcgitmp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` |  | |  | `kscha` |  |  |
| `ConditionRateValue` |  | |  | `kbetr` |  |  |
| `ConditionCurrency` |  | |  | `waers` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Cre From RFQ Prcng Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_SuplrQtanCrteFrmRFQPrcgItmP
{
      
      ConditionType      : kscha;
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateValue : kbetr;
      ConditionCurrency  : waers;
//        _DummyAssociation  : association to parent D_SuplrQtanCrteFrmRFQItemP
//         on $projection.DummyKey = _DummyAssociation.DummyKey;
      _DummyAssociation : association to parent D_SuplrQtanCrteFrmRFQItemP;

}
```
