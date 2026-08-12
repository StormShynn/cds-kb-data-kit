---
name: I_PRODPLANTSTORAGELOCATIONTP_2
description: "Prodplantstoragelocationtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODPLANTSTORAGELOCATIONTP_2

**Prodplantstoragelocationtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` | ✓ | |  |  |  |  |
| `WarehouseStorageBin` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `LeanWrhsManagementPickingArea` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Storage Location - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProdPlantStorageLocationTP_2
  as projection on R_ProdPlantStorageLocationTP as ProductPlantStorageLocation
{
      @ObjectModel.text.association: '_ProductDescription_2'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
  key StorageLocation,
      WarehouseStorageBin,
      @Semantics.booleanIndicator: true
      IsMarkedForDeletion,
      LeanWrhsManagementPickingArea,
      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2,
      _ProductDescription_2
}
```
