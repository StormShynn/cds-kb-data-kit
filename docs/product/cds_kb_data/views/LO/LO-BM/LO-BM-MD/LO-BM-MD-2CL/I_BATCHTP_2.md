---
name: I_BATCHTP_2
description: "Batchtp 2"
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-BM
  - LO-BM-MD
  - interface-view
  - transactional-processing
  - batch
  - component:LO-BM-MD-2CL
  - lob:Logistics General
---
# I_BATCHTP_2

**Batchtp 2**

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
| `BatchIdentifyingPlant` | ✓ | |  |  |  |  |
| `Batch` | ✓ | |  |  |  |  |
| `BatchIsMarkedForDeletion` |  | |  |  |  |  |
| `MatlBatchIsInRstrcdUseStock` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `BatchBySupplier` |  | |  |  |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `RegionOfOrigin` |  | |  |  |  |  |
| `MatlBatchAvailabilityDate` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `ManufactureDate` |  | |  |  |  |  |
| `FreeDefinedDate1` |  | |  |  |  |  |
| `FreeDefinedDate2` |  | |  |  |  |  |
| `FreeDefinedDate3` |  | |  |  |  |  |
| `FreeDefinedDate4` |  | |  |  |  |  |
| `FreeDefinedDate5` |  | |  |  |  |  |
| `FreeDefinedDate6` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `BatchExtWhseMgmtInternalId` |  | |  |  |  |  |
| `_BatchPlantTP` | | ✓ | | | | |
| `_BatchClassTP` | | ✓ | | | | |
| `_BatchCharacteristicTP` | | ✓ | | | | |
| `_BatchTextTP` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Batch'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'Batch' 
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define root view entity I_BatchTP_2
  provider contract transactional_interface
  as projection on R_BatchTP
{
  key Material,
  key BatchIdentifyingPlant,
  key Batch,
      BatchIsMarkedForDeletion,
      MatlBatchIsInRstrcdUseStock,
      Supplier,
      BatchBySupplier,
      CountryOfOrigin,
      RegionOfOrigin,
      MatlBatchAvailabilityDate,
      ShelfLifeExpirationDate,
      ManufactureDate,
      FreeDefinedDate1,
      FreeDefinedDate2,
      FreeDefinedDate3,
      FreeDefinedDate4,
      FreeDefinedDate5,
      FreeDefinedDate6,
      CreationDateTime,
      LastChangeDateTime,
      BatchExtWhseMgmtInternalId,

      /* Compositions */
      _BatchPlantTP : redirected to composition child I_BatchPlantTP_2,
      _BatchClassTP : redirected to composition child I_BatchClassTP_2,
      _BatchCharacteristicTP : redirected to composition child I_BatchCharacteristicTP_2,
      _BatchTextTP : redirected to composition child I_BatchTextTP_2, 

      /* Associations */
      @Consumption.hidden: true
      _Product
}
```
