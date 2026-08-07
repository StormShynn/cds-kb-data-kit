---
name: I_SRVCCONTRFUPBILLGDOCTP
description: Srvccontrfupbillgdoctp
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
# I_SRVCCONTRFUPBILLGDOCTP

**Srvccontrfupbillgdoctp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `BillingDocument` | ✓ | |  |  |  |  |
| `_ServiceContractTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Billing Document - TP'
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
define view entity I_SrvcContrFUPBillgDocTP as projection on R_SrvcContrFUPBillgDocTP {
  key ServiceContract,
  key BillingDocument,
  /* Associations */
  _ServiceContractTP : redirected to parent I_ServiceContractTP
}
```
