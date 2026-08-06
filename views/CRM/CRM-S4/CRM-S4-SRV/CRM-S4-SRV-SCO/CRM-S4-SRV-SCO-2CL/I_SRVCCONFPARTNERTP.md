---
name: I_SRVCCONFPARTNERTP
description: Srvcconfpartnertp
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - partner
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFPARTNERTP

**Srvcconfpartnertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceConfirmation` | `ServiceConfirmation` |
| key `CustMgmtPartnerFunction` | `CustMgmtPartnerFunction` |
| key `CustMgmtBusinessPartner` | `CustMgmtBusinessPartner` |
| `CustMgmtPartnerIsMainPartner` | `CustMgmtPartnerIsMainPartner` |
| `_ServiceConfirmationTP` | *Association* |
| `_SrvcConfPartnerAddressTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Partner - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel: {

   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

define view entity I_SrvcConfPartnerTP
  as projection on R_SrvcConfPartnerTP
{

  key  ServiceConfirmation,
  key  CustMgmtPartnerFunction,
  key  CustMgmtBusinessPartner,
       CustMgmtPartnerIsMainPartner,

       _ServiceConfirmationTP    : redirected to parent I_ServiceConfirmationTP,
       _SrvcConfPartnerAddressTP : redirected to composition child I_SrvcConfPartnerAddressTP

}
```
