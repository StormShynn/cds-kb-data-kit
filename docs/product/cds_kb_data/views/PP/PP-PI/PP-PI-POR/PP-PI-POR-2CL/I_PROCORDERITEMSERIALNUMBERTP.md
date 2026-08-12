---
name: I_PROCORDERITEMSERIALNUMBERTP
description: "PROCORDERITEMSerial NumberTP"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - interface-view
  - transactional-processing
  - serial-number
  - item-level
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# I_PROCORDERITEMSERIALNUMBERTP

**PROCORDERITEMSerial NumberTP**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessOrder` | ✓ | |  |  |  |  |
| `ProcessOrderItem` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  |  |  |  |
| `ProcessOrderType` |  | |  |  |  |  |
| `SerialNumberProfile` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProcessOrderSerialNumber'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Process Order Item Serial Number - TP'

define view entity I_ProcOrderItemSerialNumberTP
  as projection on R_ProcOrderItemSerialNumberTP as SerialNumber

{
      // Key
  key ProcessOrder,
  key ProcessOrderItem,
  key SerialNumber.SerialNumber,

      Product,
      ProductionPlant,
      ManufacturingOrderCategory,
      ProcessOrderType,
      SerialNumberProfile,

      // Associations
      _Item  : redirected to parent I_ProcessOrderItemTP,
      _Order : redirected to I_ProcessOrderTP

}
```
