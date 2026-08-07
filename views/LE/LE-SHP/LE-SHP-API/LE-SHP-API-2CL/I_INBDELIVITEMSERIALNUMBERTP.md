---
name: I_INBDELIVITEMSERIALNUMBERTP
description: "INBDELIVITEMSerial NumberTP"
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - serial-number
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_INBDELIVITEMSERIALNUMBERTP

**INBDELIVITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InboundDelivery` | ✓ | |  |  |  |  |
| `InboundDeliveryItem` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Delivery` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inbound Delivery Item Serial Number - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    semanticKey: ['InboundDelivery', 'InboundDeliveryItem', 'SerialNumber'],
    representativeKey: 'SerialNumber'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InbDelivItemSerialNumberTP
  as projection on R_InbDelivItemSerialNumberTP as InbDeliveryItemSerialNumber
{
      // Key
      @ObjectModel.foreignKey.association: '_Delivery'
  key InboundDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key InboundDeliveryItem,
  key SerialNumber,
  
      // Material
      Equipment,
      Material,      
      
      /* Associations */
      _Item: redirected to parent I_InboundDeliveryItemTP,
      _Delivery : redirected to I_InboundDeliveryTP
}
```
