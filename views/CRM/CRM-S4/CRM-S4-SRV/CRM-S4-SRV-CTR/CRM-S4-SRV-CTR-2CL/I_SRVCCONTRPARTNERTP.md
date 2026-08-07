---
name: I_SRVCCONTRPARTNERTP
description: Srvccontrpartnertp
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
  - partner
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRPARTNERTP

**Srvccontrpartnertp**

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
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartFunctionCategory` |  | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_ServiceContractTP` | | ✓ | | | | |
| `_SrvcContrPartnerAddressTP` | | ✓ | | | | |
| `_SrvcMgmtPartnerFunctionText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Partner - TP'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
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

define view entity I_SrvcContrPartnerTP
  as projection on R_SrvcContrPartnerTP
{
  key  ServiceContract,

       @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SrvcMgmtPartnerFunction',
                                                       element: 'CustMgmtPartnerFunction' },
                                             useAsTemplate: true } ]
       @EndUserText.label: 'Partner Function'
       @ObjectModel.text.association: '_SrvcMgmtPartnerFunctionText'
  key  CustMgmtPartnerFunction,

       @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessPartnerVH', element: 'BusinessPartner' },
                                             useAsTemplate: true } ]
  key  CustMgmtBusinessPartner,

       CustMgmtPartFunctionCategory,

       CustMgmtPartnerIsMainPartner,

       /* Compositions */
       _ServiceContractTP         : redirected to parent I_ServiceContractTP,
       _SrvcContrPartnerAddressTP : redirected to composition child I_SrvcContrPartnerAddressTP,
       _SrvcMgmtPartnerFunctionText

}
```
