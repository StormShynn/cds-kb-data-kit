---
name: I_SRVCCONFITEMPARTNERTP
description: "Srvcconfitempartnertp"
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
  - item-level
  - partner
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMPARTNERTP

**Srvcconfitempartnertp**

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
| `ServiceConfirmationItem` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_SrvcConfItemPartnerAddressTP` | | ✓ | | | | |
| `_ServiceConfirmationItemTP` | | ✓ | | | | |
| `_ServiceConfirmationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Item Partner - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemPartnerTP
  as projection on R_SrvcConfItemPartnerTP
{

  key  ServiceConfirmation,
  key  ServiceConfirmationItem,
  key  CustMgmtPartnerFunction,
  key  CustMgmtBusinessPartner,

       CustMgmtPartnerIsMainPartner,

       _SrvcConfItemPartnerAddressTP : redirected to composition child I_SrvcConfItemPartnerAddressTP,

       _ServiceConfirmationItemTP    : redirected to parent I_ServiceConfirmationItemTP,

       _ServiceConfirmationTP        : redirected to I_ServiceConfirmationTP
}
```
