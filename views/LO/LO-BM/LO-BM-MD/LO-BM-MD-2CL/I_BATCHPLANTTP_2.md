---
name: I_BATCHPLANTTP_2
description: Batchplanttp 2
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-BM
  - LO-BM-MD
  - interface-view
  - transactional-processing
  - plant
  - batch
  - component:LO-BM-MD-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_BATCHPLANTTP_2

**Batchplanttp 2**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BatchIdentifyingPlant` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_BatchTP` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Plant Specific Batch Information'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_BatchPlantTP_2
  as projection on R_BatchPlantTP
{
  key Material,
  key Batch,
  key Plant,
      BatchIdentifyingPlant,
      InventoryValuationType,
      LastChangeDateTime,
      
      /* Compositions */
      _BatchTP : redirected to parent I_BatchTP_2,
        
      /* Associations */
      @Consumption.hidden: true
      _Product
}
```
