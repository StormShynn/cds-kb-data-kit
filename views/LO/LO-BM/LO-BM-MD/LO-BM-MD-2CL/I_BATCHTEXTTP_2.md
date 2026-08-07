---
name: I_BATCHTEXTTP_2
description: Batchtexttp 2
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
  - batch
  - text
  - component:LO-BM-MD-2CL
  - lob:Logistics General
---
# I_BATCHTEXTTP_2

**Batchtexttp 2**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Material` | ✓ | |  |  |
| `BatchIdentifyingPlant` | ✓ | |  |  |
| `Batch` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `BatchDescription` |  | |  |  |
| `_BatchTP` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY

@EndUserText.label: 'Batch - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER}
@ObjectModel.dataCategory:#TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_BatchTextTP_2 as projection on R_BatchTextTP
{   
  key Material,
  key BatchIdentifyingPlant,
  key Batch,
  @Semantics.language: true
  key Language,
  @Semantics.text: true
  BatchDescription,
  
  /* Compositions */
  _BatchTP : redirected to parent I_BatchTP_2 
}
```
