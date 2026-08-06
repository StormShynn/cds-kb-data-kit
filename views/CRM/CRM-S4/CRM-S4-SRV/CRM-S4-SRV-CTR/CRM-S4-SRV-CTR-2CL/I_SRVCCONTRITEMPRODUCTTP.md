---
name: I_SRVCCONTRITEMPRODUCTTP
description: Srvccontritemproducttp
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
  - product
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITEMPRODUCTTP

**Srvccontritemproducttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceContract` |
| key `ServiceContractItem` | `ServiceContractItem` |
| key `ServiceProductListItem` | `ServiceProductListItem` |
| `SrvcContrProdListProduct` | `SrvcContrProdListProduct` |
| `_ProductText` | *Association* |
| `_ServiceContractItemTP` | *Association* |
| `_ServiceContractTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Product List - TP'
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
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcContrItemProductTP as projection on R_SrvcContrItemProductTP {
  key ServiceContract,
  key ServiceContractItem,
  key ServiceProductListItem,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_ProductText'
  SrvcContrProdListProduct,


  /* Associations */
  _ProductText,
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP
}
```
