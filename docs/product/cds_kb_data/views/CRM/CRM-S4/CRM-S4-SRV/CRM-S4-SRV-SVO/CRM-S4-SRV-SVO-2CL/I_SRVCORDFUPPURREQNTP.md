---
name: I_SRVCORDFUPPURREQNTP
description: "Srvcordfuppurreqntp"
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_SRVCORDFUPPURREQNTP

**Srvcordfuppurreqntp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Follow-Up Purchase Requisition - TP'
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

define view entity I_SrvcOrdFUPPurReqnTP
 as projection on R_SrvcOrdFUPPurReqnTP
{
key ServiceOrder,
key PurchaseRequisition,
/* Associations */
_ServiceOrderTP : redirected to parent I_ServiceOrderTP 
}
```
