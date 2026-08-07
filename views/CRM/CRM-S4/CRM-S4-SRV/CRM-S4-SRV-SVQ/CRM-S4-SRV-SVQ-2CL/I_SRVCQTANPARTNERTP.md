---
name: I_SRVCQTANPARTNERTP
description: Srvcqtanpartnertp
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
  - partner
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANPARTNERTP

**Srvcqtanpartnertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_ServiceQuotationTP` | | ✓ | | | | |
| `_SrvcQtanPartnerAddressTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Quotation Partner - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}                
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define view entity I_SrvcQtanPartnerTP 
as projection on R_SrvcQtanPartnerTP {
  key ServiceQuotation,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
  CustMgmtPartnerIsMainPartner,
  /* Associations */
  _BusinessPartner,
  _PartnerFunction,
  /* Associations */
  _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP,
  _SrvcQtanPartnerAddressTP : redirected to composition child I_SrvcQtanPartnerAddressTP
}
```
