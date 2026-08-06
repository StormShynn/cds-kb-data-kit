---
name: D_SRVCCONTRACTPERFORMRENEWALP
description: D Srvccontractperformrenewalp
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - contract
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRACTPERFORMRENEWALP

**D Srvccontractperformrenewalp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `NewServiceContractIsCreated` | `crmt_boolean` |
| `SrvcTransChgReqRcvdOnDateTime` | `timestamp` |
| `SrvcContrDuration` | `timedura` |
| `SrvcContrDurationUnit` | `timeunitdu` |
| `PurchaseOrderByCustomer` | `crmt_po_number_sold` |
| `ServiceContractIsReleased` | `crms4_stat_released` |

## Source Code

```abap
@EndUserText.label: 'Renew Service Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContractPerformRenewalP 
{
  @Semantics.booleanIndicator: true
  NewServiceContractIsCreated   : crmt_boolean;
  
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  SrvcContrDuration             : timedura;
  
  SrvcContrDurationUnit         : timeunitdu;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractIsReleased     : crms4_stat_released;
}
```
