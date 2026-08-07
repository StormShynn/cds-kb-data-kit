---
name: I_BUSSOLNORDITMFUPENTPROJECTTP
description: Bussolnorditmfupentprojecttp
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
  - project
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:Project
---
# I_BUSSOLNORDITMFUPENTPROJECTTP

**Bussolnorditmfupentprojecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `Project` | ✓ | |  |  |  |  |
| `BusSolnOrderItemCharUUID` |  | |  |  |  |  |
| `_BusinessSolutionOrder` | | ✓ | | | | |
| `_BusinessSolutionOrderItem` | | ✓ | | | | |
| `_BusSolnOrdItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

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

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order item FUP Enterprise Project - TP'

define view entity I_BusSolnOrdItmFUPEntProjectTP
  as projection on R_BusSolnOrdItmFUPEntProjectTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key Project,

      BusSolnOrderItemCharUUID,

      // Associations
      _BusinessSolutionOrder     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusSolnOrdItem
}
```
