---
name: I_SRVCCONFFUPBILLGDOCTP
description: "Srvcconffupbillgdoctp"
app_component: CRM-S4-SRV-SCO-2CL
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFFUPBILLGDOCTP

**Srvcconffupbillgdoctp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |  |  |
| `BillingDocument` | ✓ | |  |  |  |  |
| `_ServiceConfirmationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Billing Document - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel: {
   
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfFUPBillgDocTP as projection on R_SrvcConfFUPBillgDocTP {
  key ServiceConfirmation,
  key BillingDocument,
  /* Associations */
  _ServiceConfirmationTP : redirected to parent I_ServiceConfirmationTP
}
```
