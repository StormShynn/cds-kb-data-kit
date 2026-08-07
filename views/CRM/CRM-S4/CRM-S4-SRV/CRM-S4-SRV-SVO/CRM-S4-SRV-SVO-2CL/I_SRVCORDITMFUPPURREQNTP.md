---
name: I_SRVCORDITMFUPPURREQNTP
description: Srvcorditmfuppurreqntp
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITMFUPPURREQNTP

**Srvcorditmfuppurreqntp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |
| `ServiceOrderItem` | ✓ | |  |  |
| `PurchaseRequisition` | ✓ | |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |
| `_ServiceOrderItem` | | ✓ | | |
| `_ServiceOrderTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Purchase Requisition - TP'
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

define view entity I_SrvcOrdItmFUPPurReqnTP 
as projection on R_SrvcOrdItmFUPPurReqnTP {
  key ServiceOrder,
  key ServiceOrderItem,
  key PurchaseRequisition,
  key PurchaseRequisitionItem,
  /* Associations */
  _ServiceOrderItem : redirected to parent I_ServiceOrderItemTP,
  _ServiceOrderTP   : redirected to I_ServiceOrderTP
}
```
