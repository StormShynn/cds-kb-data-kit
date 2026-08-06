---
name: I_CNSLDTNGHGSCP2CALCMETHODVH
description: Cnsldtnghgscp 2CALCMETHODVH
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGSCP2CALCMETHODVH

**Cnsldtnghgscp 2CALCMETHODVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `GHGScope2CalculationMethod` | `_Source.GHGScope2CalculationMethod` |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGScope2CalculationMethod',
  semanticKey: ['GHGScope2CalculationMethod'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn GHG Scope 2 Calculation Method'

define view entity I_CnsldtnGHGScp2CalcMethodVH
  as select from I_CnsldtnGHGScp2CalcMethod as _Source

{
      @ObjectModel.text.element: ['GHGScope2CalculationMethodName']
  key _Source.GHGScope2CalculationMethod,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].GHGScope2CalculationMethodName
}
```
