---
name: I_CNSLDTNTASKGROUPTP
description: Cnsldtntaskgrouptp
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - transactional-processing
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKGROUPTP

**Cnsldtntaskgrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationTaskGroup` | `ConsolidationTaskGroup` |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType:{
    name: 'ConsolidationTaskGroup'
  },
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Task Group - TP'
define root view entity I_CnsldtnTaskGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnTaskGroupTP

{
  key ConsolidationTaskGroup
}
```
