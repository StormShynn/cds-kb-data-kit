---
name: I_SRVCCONTRITMFUPBILLGDOCTP
description: "Srvccontritmfupbillgdoctp"
app_component: CRM-S4-SRV-CTR-2CL
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITMFUPBILLGDOCTP

**Srvccontritmfupbillgdoctp**

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
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `_ServiceContractItemTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Billing Document - TP'
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

define view entity I_SrvcContrItmFUPBillgDocTP as projection on R_SrvcContrItmFUPBillgDocTP {
  key ServiceContract,
  key ServiceContractItem,
  key BillingDocument,
  key BillingDocumentItem,
  
  /* Associations */
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP
}
```
