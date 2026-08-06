---
name: I_PURCHASINGSOURCELISTTP
description: Purchasingsourcelisttp
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - transactional-processing
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGSOURCELISTTP

**Purchasingsourcelisttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `Material` |
| key `Plant` | `Plant` |
| `MaterialForEdit` | `MaterialForEdit` |
| `PlantForEdit` | `PlantForEdit` |
| `MaterialName` | `MaterialName` |
| `_Material` | *Association* |
| `_MaterialText` | *Association* |
| `_Plant` | *Association* |
| `_PurchasingSourceItem` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Source List - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['Material','Plant']

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@ObjectModel.sapObjectNodeType.name: 'PurchasingSourceList'
 

@Metadata.ignorePropagatedAnnotations: true
define root view entity I_PurchasingSourceListTP 
provider contract transactional_interface
as projection on R_PurchasingSourceListTP 
 {
  key Material,
  key Plant,
      @ObjectModel.editableFieldFor: 'MaterialForEdit'
      MaterialForEdit,
      @ObjectModel.editableFieldFor: 'PlantForEdit'
      PlantForEdit,
      MaterialName,
                  
      //Foreign Entities
      _Material,
      _MaterialText,
      _Plant,
      
      //Composition Entities
      _PurchasingSourceItem : redirected to composition child I_PurchasingSourceListItemTP
  
}
```
