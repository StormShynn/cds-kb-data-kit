---
name: I_SRVCORDTMPLPARTNERTP
description: Srvcordtmplpartnertp
app_component: CRM-S4-SRV-SVT-2CL
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
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLPARTNERTP

**Srvcordtmplpartnertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |
| `_SrvcOrdTmplPartnerAddressTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Template Partner - TP'
@VDM: {
  viewType: #TRANSACTIONAL
  //lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}                
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdTmplPartnerTP as projection on R_SrvcOrdTmplPartnerTP {
   key ServiceOrderTemplate,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
  CustMgmtPartnerIsMainPartner,
      /* Associations */
      _BusinessPartner,
      _PartnerFunction,
      _ServiceOrderTemplateTP: redirected to parent I_ServiceOrderTemplateTP,
      _SrvcOrdTmplPartnerAddressTP : redirected to composition child I_SrvcOrdTmplPartnerAddressTP      

}
```
