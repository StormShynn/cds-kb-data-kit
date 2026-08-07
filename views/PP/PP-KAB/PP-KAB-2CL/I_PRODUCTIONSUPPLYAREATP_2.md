---
name: I_PRODUCTIONSUPPLYAREATP_2
description: Productionsupplyareatp 2
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - interface-view
  - transactional-processing
  - product
  - component:PP-KAB-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREATP_2

**Productionsupplyareatp 2**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionSupplyArea` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ProductionSupplyAreaRespPerson` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `ShiftGrouping` |  | |  |  |  |  |
| `ShiftSequence` |  | |  |  |  |  |
| `PullIntervalInWorkdays` |  | |  |  |  |  |
| `PullIntervalInMinutes` |  | |  |  |  |  |
| `UnloadingWarehouseStagingArea` |  | |  |  |  |  |
| `AutomotiveLoadingPoint` |  | |  |  |  |  |
| `ProductionSupplyAreaAddressID` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ProductionSupplyAreaAddress` | | ✓ | | | | |
| `_ProductionSupplyAreaText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Production Supply Area - TP'

@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@ObjectModel.sapObjectNodeType.name: 'ProductionSupplyArea'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ProductionSupplyAreaTP_2 
  provider contract transactional_interface
  as projection on R_ProductionSupplyAreaTP as _ProductionSupplyAreaTP {
@ObjectModel.sapObjectNodeTypeReference: 'ProductionSupplyArea'
  key ProductionSupplyArea,
  key Plant,
      StorageLocation,
      ProductionSupplyAreaRespPerson,
      UnloadingPointName,
      FactoryCalendar,
      ShiftGrouping,
      ShiftSequence,
      PullIntervalInWorkdays,
      PullIntervalInMinutes,
      UnloadingWarehouseStagingArea,
      AutomotiveLoadingPoint,
      ProductionSupplyAreaAddressID,
      LastChangeDateTime,
     
      /* Associations */
      _ProductionSupplyAreaAddress : redirected to composition child I_ProductionSupplyAreaAddrTP_2,
      _ProductionSupplyAreaText : redirected to composition child I_ProductionSupplyAreaTextTP_2
}
```
