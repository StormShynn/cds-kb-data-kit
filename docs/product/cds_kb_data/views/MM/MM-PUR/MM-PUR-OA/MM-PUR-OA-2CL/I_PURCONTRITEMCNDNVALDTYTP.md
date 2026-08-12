---
name: I_PURCONTRITEMCNDNVALDTYTP
description: "Purcontritemcndnvaldtytp"
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRITEMCNDNVALDTYTP

**Purcontritemcndnvaldtytp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |  |  |
| `PurchaseContractItem` | ✓ | |  |  |  |  |
| `ConditionRecord` | ✓ | |  |  |  |  |
| `ConditionValidityEndDate` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionValidityStartDate` |  | |  |  |  |  |
| `ConditionIsDeleted` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ContractItem` | | ✓ | | | | |
| `_PurContract` | | ✓ | | | | |
| `_PurContrItemCndnAmount` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Itm Cndn Val - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem','ConditionRecord','ConditionValidityEndDate' ]

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurContrItemCndnValdtyTP
  as projection on R_PurContrItemCndnValdtyTP

{
  key PurchaseContract,
  key PurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
      ConditionApplication,
      ConditionType,
      ConditionValidityStartDate,
      ConditionIsDeleted,
      
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      
      /* Associations */
      _ContractItem           : redirected to parent I_PurchaseContractItemTP,
      _PurContract            : redirected to I_PurchaseContractTP,
      _PurContrItemCndnAmount : redirected to composition child I_PurContrItemCndnAmountTP

}
```
