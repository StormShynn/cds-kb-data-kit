---
name: I_SRVCORDITMPARTNERTP
description: "Srvcorditmpartnertp"
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
  - partner
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITMPARTNERTP

**Srvcorditmpartnertp**

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
| `ServiceOrderItem` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_SrvcOrdItemPartnerAddressTP` | | ✓ | | | | |
| `_ServiceOrderItemTP` | | ✓ | | | | |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Service Order Item Partner - TP'
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


define view entity I_SrvcOrdItmPartnerTP
  as projection on R_SrvcOrdItmPartnerTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
      CustMgmtPartnerIsMainPartner,
      //CustMgmtPartFunctionCategory,
      /* Associations */
      _SrvcOrdItemPartnerAddressTP : redirected to composition child I_SrvcOrdItemPartnerAddressTP,
      _ServiceOrderItemTP          : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP              : redirected to I_ServiceOrderTP
      
      
}
```
