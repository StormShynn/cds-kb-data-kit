---
name: I_PRODUCTIONSUPPLYAREATEXTTP_2
description: Productionsupplyareatexttp 2
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
  - text
  - component:PP-KAB-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREATEXTTP_2

**Productionsupplyareatexttp 2**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductionSupplyArea` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `ProductionSupplyAreaName` |  | |  |  |
| `ProdSupplyAreaUpperCaseName` |  | |  |  |
| `_ProductionSupplyArea` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Production Supply Area - Text TP'

@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@ObjectModel.dataCategory: #TEXT

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProductionSupplyAreaTextTP_2 as projection on R_ProductionSupplyAreaTextTP {

  key ProductionSupplyArea,
  key Plant,
  @Semantics.language:true 
  key Language,
  @Semantics.text:true 
  ProductionSupplyAreaName,
  ProdSupplyAreaUpperCaseName,
  
  /* Associations */
  _ProductionSupplyArea: redirected to parent I_ProductionSupplyAreaTP_2
}
```
