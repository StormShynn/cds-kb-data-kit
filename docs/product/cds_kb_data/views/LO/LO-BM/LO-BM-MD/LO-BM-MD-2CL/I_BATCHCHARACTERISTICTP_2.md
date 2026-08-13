---
name: I_BATCHCHARACTERISTICTP_2
description: "Batchcharacteristictp 2"
semantic_vi: "Chứa dữ liệu đặc trưng lô hàng cho logistics tổng thể, được sử dụng trong xử lý giao dịch."
keywords:
  - "batch"
  - "characteristic"
  - "logistics"
  - "general"
  - "transactional"
  - "processing"
  - "lo"
  - "lob"
  - "sap"
  - "cds"
  - "view"
semantic_en: "Exposes batch characteristic data for logistics general, used in transactional processing."
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
# I_BATCHCHARACTERISTICTP_2

**Batchcharacteristictp 2**

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
| `CharcInternalID` | ✓ | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `ClassInternalID` |  | |  |  |  |  |
| `_BatchTP` | | ✓ | | | | |
| `_BatchCharacteristicValueTP` | | ✓ | | | | |
| `_Characteristic` | | ✓ | | | | |
| `_Class` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Batch Characteristic'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_BatchCharacteristicTP_2 
  as projection on R_BatchCharacteristicTP
{
  key Material, 
  key BatchIdentifyingPlant,
  key Batch, 
  key CharcInternalID,
  
  LastChangeDateTime,
  
  /* Compositions */
  _BatchTP : redirected to parent I_BatchTP_2,
  _BatchCharacteristicValueTP : redirected to composition child I_BatchCharacteristicValueTP_2,

  /* DCL */
  @Consumption.hidden: true
  ClassType,
  @Consumption.hidden: true
  ClassInternalID,
  @Consumption.hidden: true
  _Characteristic,
  @Consumption.hidden: true
  _Class
}
```
