---
name: I_BSORDITMPRDCSSRSRVCCONTRTP
description: Bsorditmprdcssrsrvccontrtp
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
# I_BSORDITMPRDCSSRSRVCCONTRTP

**Bsorditmprdcssrsrvccontrtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |
| `BusSolnOrdPrdcssrSrvcContr` | ✓ | |  |  |
| `BusSolnOrdPrdcssrSrvcContrItem` | ✓ | |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | |
| `_BusinessSolutionOrderItemTP` | | ✓ | | |

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

@EndUserText.label: 'Business Solution Order Item Preceding Service Contract - TP'

define view entity I_BSOrdItmPrdcssrSrvcContrTP as projection on R_BSOrdItmPrdcssrSrvcContrTP  {

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key BusSolnOrdPrdcssrSrvcContr,
  key BusSolnOrdPrdcssrSrvcContrItem,
  
  // Associations
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP
  
}
```
