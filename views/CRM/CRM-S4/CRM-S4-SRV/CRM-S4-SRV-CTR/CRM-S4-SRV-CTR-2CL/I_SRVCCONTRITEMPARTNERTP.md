---
name: I_SRVCCONTRITEMPARTNERTP
description: Srvccontritempartnertp
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
  - item-level
  - partner
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITEMPARTNERTP

**Srvccontritempartnertp**

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
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CustMgmtPartFunctionCategory` |  | |  |  |  |  |
| `CustMgmtPartnerIsMainPartner` |  | |  |  |  |  |
| `_SrvcMgmtPartnerFunctionText` | | ✓ | | | | |
| `_ServiceContractItemTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |
| `_SrvcContrItmPartnerAddressTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Partner of Service Contract Item - TP'
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
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcContrItemPartnerTP
  as projection on R_SrvcContrItemPartnerTP
{
  key  ServiceContract,

  key  ServiceContractItem,

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
       _SrvcMgmtPartnerFunctionText,
       _ServiceContractItemTP        : redirected to parent I_ServiceContractItemTP,
       _ServiceContractTP            : redirected to I_ServiceContractTP,
       _SrvcContrItmPartnerAddressTP : redirected to composition child I_SrvcContrItmPartnerAddressTP
}
```
