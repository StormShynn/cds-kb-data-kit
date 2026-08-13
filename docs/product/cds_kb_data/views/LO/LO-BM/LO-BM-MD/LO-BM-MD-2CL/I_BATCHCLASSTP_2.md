---
name: I_BATCHCLASSTP_2
description: "Batchclasstp 2"
semantic_vi: "View Batchclasstp 2 hiển thị thông tin lớp batch cho logistics tổng thể, bao gồm vật liệu, batch và loại lớp chi tiết. Nó được sử dụng trong xử lý giao dịch cho quản lý batch."
keywords:
  - "batch"
  - "class"
  - "logistics"
  - "transactional"
  - "processing"
  - "management"
  - "material"
  - "batchidentifyingplant"
  - "batchclasstp"
  - "lo-bm-md-2cl"
semantic_en: "The Batchclasstp 2 view exposes batch class information for logistics general, including material, batch, and class type details. It is used in transactional processing for batch management."
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
# I_BATCHCLASSTP_2

**Batchclasstp 2**

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
| `ClassInternalID` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `_BatchTP` | | ✓ | | | | |
| `_Class` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Batch Class Assignment'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_BatchClassTP_2 
  as projection on R_BatchClassTP
{
  key Material, 
  key BatchIdentifyingPlant,
  key Batch, 
  
  ClassInternalID,
  
  LastChangeDateTime,    

  /* Compositions */
  _BatchTP : redirected to parent I_BatchTP_2,

  /* DCL */
  @Consumption.hidden: true
  ClassType,
  @Consumption.hidden: true
  _Class
}
```
