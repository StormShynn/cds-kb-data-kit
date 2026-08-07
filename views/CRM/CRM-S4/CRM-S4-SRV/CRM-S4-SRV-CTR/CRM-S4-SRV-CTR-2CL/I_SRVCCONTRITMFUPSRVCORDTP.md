---
name: I_SRVCCONTRITMFUPSRVCORDTP
description: Srvccontritmfupsrvcordtp
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITMFUPSRVCORDTP

**Srvccontritmfupsrvcordtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |
| `ServiceContractItem` | ✓ | |  |  |
| `ServiceOrder` | ✓ | |  |  |
| `ServiceOrderItem` | ✓ | |  |  |
| `_ServiceContractItemTP` | | ✓ | | |
| `_ServiceContractTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Service Order - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcContrItmFUPSrvcOrdTP as projection on R_SrvcContrItmFUPSrvcOrdTP {
  key ServiceContract,
  key ServiceContractItem,
  key ServiceOrder,
  key ServiceOrderItem,
  
  /* Associations */
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP
}
```
