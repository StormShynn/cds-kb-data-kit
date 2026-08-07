---
name: I_SRVCORDFUPPURCHASEORDERTP
description: SRVCORDFUPPurchase OrderTP
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
  - purchase-order
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
  - bo:PurchaseOrder
---
# I_SRVCORDFUPPURCHASEORDERTP

**SRVCORDFUPPurchase OrderTP**

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
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Follow-Up Purchase Order - TP'
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

define view entity I_SrvcOrdFUPPurchaseOrderTP 
as projection on R_SrvcOrdFUPPurchaseOrderTP
{

  key ServiceOrder,
  key PurchaseOrder,

      /* Associations */
      _ServiceOrderTP : redirected to parent I_ServiceOrderTP

}
```
