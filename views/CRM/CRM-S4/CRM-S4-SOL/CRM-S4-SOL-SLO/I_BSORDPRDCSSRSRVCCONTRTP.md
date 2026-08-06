---
name: I_BSORDPRDCSSRSRVCCONTRTP
description: Bsordprdcssrsrvccontrtp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BSORDPRDCSSRSRVCCONTRTP

**Bsordprdcssrsrvccontrtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| key `BusSolnOrdPrdcssrSrvcContr` | `BusSolnOrdPrdcssrSrvcContr` |
| `_BusinessSolutionOrder` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Preceding Service Contract - TP'
define view entity I_BSOrdPrdcssrSrvcContrTP
  as projection on R_BSOrdPrdcssrSrvcContrTP
{

  key BusinessSolutionOrder,
  key BusSolnOrdPrdcssrSrvcContr,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
