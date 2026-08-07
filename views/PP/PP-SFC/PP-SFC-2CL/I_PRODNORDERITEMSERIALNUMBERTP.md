---
name: I_PRODNORDERITEMSERIALNUMBERTP
description: PRODNORDERITEMSerial NumberTP
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - serial-number
  - item-level
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# I_PRODNORDERITEMSERIALNUMBERTP

**PRODNORDERITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionOrder` | ✓ | |  |  |
| `ProductionOrderItem` | ✓ | |  |  |
| `SerialNumber` | ✓ | |  |  |
| `Product` |  | |  |  |
| `ProductionPlant` |  | |  |  |
| `ManufacturingOrderCategory` |  | |  |  |
| `ProductionOrderType` |  | |  |  |
| `SerialNumberProfile` |  | |  |  |
| `_ProductionOrderItem` | | ✓ | | |
| `_ProductionOrder` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSerialNumber'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Production Order Item Serial Number - TP'

define view entity I_ProdnOrderItemSerialNumberTP
  as projection on R_ProdnOrderItemSerialNumberTP as SerialNumber

{
      // Key
  key ProductionOrder,
  key ProductionOrderItem,
  key SerialNumber.SerialNumber,

      Product,
      ProductionPlant,
      ManufacturingOrderCategory,
      ProductionOrderType,
      SerialNumberProfile,

      // Associations
      _ProductionOrderItem : redirected to parent I_ProductionOrderItemTP,
      _ProductionOrder : redirected to I_ProductionOrderTP

}
```
