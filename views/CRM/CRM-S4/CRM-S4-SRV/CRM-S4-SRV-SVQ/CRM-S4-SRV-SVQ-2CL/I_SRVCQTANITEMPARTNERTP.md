---
name: I_SRVCQTANITEMPARTNERTP
description: Srvcqtanitempartnertp
app_component: CRM-S4-SRV-SVQ-2CL
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANITEMPARTNERTP

**Srvcqtanitempartnertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceQuotation` | `ServiceQuotation` |
| key `ServiceQuotationItem` | `ServiceQuotationItem` |
| key `CustMgmtPartnerFunction` | `CustMgmtPartnerFunction` |
| key `CustMgmtBusinessPartner` | `CustMgmtBusinessPartner` |
| `CustMgmtPartnerIsMainPartner` | `CustMgmtPartnerIsMainPartner` |
| `_BusinessPartner` | *Association* |
| `_PartnerFunction` | *Association* |
| `_ServiceQuotationItemTP` | *Association* |
| `_ServiceQuotationTP` | *Association* |
| `_SrvcQtanItemPartnerAddressTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Quotation Partner Item - TP'
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

define view entity I_SrvcQtanItemPartnerTP as projection on R_SrvcQtanItemPartnerTP {
  key ServiceQuotation,
  key ServiceQuotationItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
  CustMgmtPartnerIsMainPartner,
  /* Associations */
  _BusinessPartner,
  _PartnerFunction,
  _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
  _ServiceQuotationTP : redirected to I_ServiceQuotationTP,
  _SrvcQtanItemPartnerAddressTP : redirected to composition child I_SrvcQtanItemPartnerAddressTP
}
```
