---
name: I_PLNDINDEPRQMTTP
description: Plndindeprqmttp
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - interface-view
  - transactional-processing
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTTP

**Plndindeprqmttp**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `MRPArea` | ✓ | |  |  |
| `PlndIndepRqmtType` | ✓ | |  |  |
| `PlndIndepRqmtVersion` | ✓ | |  |  |
| `RequirementPlan` | ✓ | |  |  |
| `RequirementSegment` | ✓ | |  |  |
| `RequirementPlanIsExternal` |  | |  |  |
| `PlndIndepRqmtInternalID` |  | |  |  |
| `PlndIndepRqmtIsActive` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `WBSElement` |  | |  |  |
| `PlndIndepRqmtAcctAssgmtCat` |  | |  |  |
| `InventorySpecialStockType` |  | |  |  |
| `ConsumptionPosting` |  | |  |  |
| `InventorySpecialStockValnType` |  | |  |  |
| `PlndIndepRqmtOwningApplication` |  | |  |  |
| `PlndIndepRqmtLastChgdDateTime` |  | |  |  |
| `_PlndIndepRqmtItem` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Planned Indep Req - TP'

//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #M, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.sapObjectNodeType.name: 'PlannedIndependentRequirement'

@VDM.viewType: #TRANSACTIONAL
//@VDM.usage.type : [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define root view entity I_PlndIndepRqmtTP
  provider contract transactional_interface
  as projection on R_PlndIndepRqmtTP

{
  key Product,
  key Plant,
  key MRPArea,
  key PlndIndepRqmtType,
  key PlndIndepRqmtVersion,
  key RequirementPlan,
  key RequirementSegment,
      RequirementPlanIsExternal,
      PlndIndepRqmtInternalID,
      @Semantics.booleanIndicator
      PlndIndepRqmtIsActive,
      WBSElementInternalID,
      WBSElement,
      PlndIndepRqmtAcctAssgmtCat,    
      InventorySpecialStockType,
      ConsumptionPosting, 
      InventorySpecialStockValnType,  
      PlndIndepRqmtOwningApplication,
      PlndIndepRqmtLastChgdDateTime,
      _PlndIndepRqmtItem : redirected to composition child I_PlndIndepRqmtItemTP
}
```
