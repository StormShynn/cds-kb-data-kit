---
name: I_SRVCORDITEMREFERENCEOBJECTTP
description: Srvcorditemreferenceobjecttp
app_component: CRM-S4-SRV-SVO-2CL
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMREFERENCEOBJECTTP

**Srvcorditemreferenceobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |
| `ServiceOrderItem` | ✓ | |  |  |
| `ServiceRefObjectSequenceNumber` | ✓ | |  |  |
| `SerialNumber` |  | |  |  |
| `ServiceReferenceEquipment` |  | |  |  |
| `ServiceRefFunctionalLocation` |  | |  |  |
| `ServiceReferenceProduct` |  | |  |  |
| `SrvcRefObjIsMainObject` |  | |  |  |
| `_ServiceOrderItemTP` | | ✓ | | |
| `_ServiceOrderTP` | | ✓ | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Item Reference Object - TP'
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

define view entity I_SrvcOrdItemReferenceObjectTP 
as projection on R_SrvcOrdItemReferenceObjectTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,
      /* Associations */
      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
