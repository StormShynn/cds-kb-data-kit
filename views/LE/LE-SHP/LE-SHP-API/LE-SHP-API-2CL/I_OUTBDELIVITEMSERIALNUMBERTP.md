---
name: I_OUTBDELIVITEMSERIALNUMBERTP
description: OUTBDELIVITEMSerial NumberTP
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
# I_OUTBDELIVITEMSERIALNUMBERTP

**OUTBDELIVITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |  |  |
| `OutboundDeliveryItem` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `_Delivery` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Outbound Dlv Item Serial Number - TP'
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
    semanticKey: ['OutboundDelivery', 'OutboundDeliveryItem', 'SerialNumber'],
    representativeKey: 'SerialNumber'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_OutbDelivItemSerialNumberTP
  as projection on R_OutbDelivItemSerialNumberTP as _OutbDelivItemSerialNumberTP
{
      // Key fields
      @ObjectModel.foreignKey.association: '_Delivery'
  key OutboundDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key OutboundDeliveryItem,
  key SerialNumber,

      Equipment,
      Material,

      /* Associations */

      _Delivery : redirected to I_OutboundDeliveryTP,
      _Item     : redirected to parent I_OutboundDeliveryItemTP
}
```
