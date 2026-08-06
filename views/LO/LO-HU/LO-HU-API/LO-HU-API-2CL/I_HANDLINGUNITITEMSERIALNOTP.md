---
name: I_HANDLINGUNITITEMSERIALNOTP
description: Handlingunititemserialnotp
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - interface-view
  - transactional-processing
  - item-level
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# I_HANDLINGUNITITEMSERIALNOTP

**Handlingunititemserialnotp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `HandlingUnitItem` | `HandlingUnitItem` |
| key `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| key `Warehouse` | `Warehouse` |
| key `StockItemUUID` | `StockItemUUID` |
| key `SerialNumber` | `SerialNumber` |
| `Equipment` | `Equipment` |
| `HandlingUnitInternalID` | `HandlingUnitInternalID` |
| `Material` | `Material` |
| `_HandlingUnit` | *Association* |
| `_HandlingUnitItem` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck:    #MANDATORY,
    personalData.blocking: #NOT_REQUIRED
}

@EndUserText.label: 'Handling Unit Item Serial Number - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType:{
     serviceQuality: #C,
     sizeCategory: #XL,
     dataClass: #TRANSACTIONAL
   },
   semanticKey: ['HandlingUnitExternalID', 'Warehouse', 'StockItemUUID', 'SerialNumber']
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_HandlingUnitItemSerialNoTP
  as projection on R_HandlingUnitItemSerialNoTP
{
  key HandlingUnitItem,
  key HandlingUnitExternalID,
  key Warehouse,
  key StockItemUUID,
  key SerialNumber,
      Equipment,
      HandlingUnitInternalID,
      Material,

      /* Associations */
      _HandlingUnit : redirected to I_HandlingUnitTP,
      _HandlingUnitItem : redirected to parent I_HandlingUnitItemTP
}
```
