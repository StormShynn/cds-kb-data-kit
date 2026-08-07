---
name: I_SRVCCONTRITEMREFOBJECTTP
description: Srvccontritemrefobjecttp
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITEMREFOBJECTTP

**Srvccontritemrefobjecttp**

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
| `ServiceRefObjectSequenceNumber` | ✓ | |  |  |  |  |
| `ServiceReferenceEquipment` |  | |  |  |  |  |
| `ServiceRefFunctionalLocation` |  | |  |  |  |  |
| `ServiceReferenceProduct` |  | |  |  |  |  |
| `_ServiceContractItemTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Ref Object - TP'
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

define view entity I_SrvcContrItemRefObjectTP as projection on R_SrvcContrItemRefObjectTP {
  key ServiceContract,
  key ServiceContractItem,
  key ServiceRefObjectSequenceNumber,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EquipmentStdVH', element: 'Equipment' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_EquipmentText'
  ServiceReferenceEquipment,
  @ObjectModel.text.association: '_FunctionalLocationText'
  ServiceRefFunctionalLocation,
  // SrvcRefFuncLocLabelName,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_ProductText'
  ServiceReferenceProduct,
  /* Associations */
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP,
  _EquipmentText,
  _FunctionalLocationText,
  _ProductText
}
```
