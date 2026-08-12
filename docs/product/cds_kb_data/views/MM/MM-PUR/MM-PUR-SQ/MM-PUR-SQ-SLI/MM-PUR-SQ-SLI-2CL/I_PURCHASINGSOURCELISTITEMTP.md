---
name: I_PURCHASINGSOURCELISTITEMTP
description: "Purchasingsourcelistitemtp"
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGSOURCELISTITEMTP

**Purchasingsourcelistitemtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceListRecord` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `MaterialForEdit` |  | |  |  |  |  |
| `PlantForEdit` |  | |  |  |  |  |
| `SourceListRecordForEdit` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `OutlineAgreement` |  | |  |  |  |  |
| `PurchaseOutlineAgreement` |  | |  |  |  |  |
| `PurchaseOutlineAgreementItem` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `SupplierIsFixed` |  | |  |  |  |  |
| `PurOutlineAgreementIsFixed` |  | |  |  |  |  |
| `IssgPlantIsFixed` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SourceOfSupplyIsBlocked` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `SourceListRecordCategory` |  | |  |  |  |  |
| `MRPSourcingControl` |  | |  |  |  |  |
| `MRPArea` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OriginSystem` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `SourceOfSupplyIsFixed` |  | |  |  |  |  |
| `SourceListStatus` |  | |  |  |  |  |
| `SourceListStatusCriticality` |  | |  |  |  |  |
| `SupplierName` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `MaterialName` |  | |  |  |  |  |
| `SupplyingPlantName` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_MaterialPlanningUsage` | | ✓ | | | | |
| `_PurchasingSourceStatus` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_PurchasingSourceTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Source List Item - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['SourceListRecord','Material','Plant']

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurchasingSourceListItemTP
  as projection on R_PurchasingSourceListItemTP
{

  key SourceListRecord,
  key Material,
  key Plant,
      @ObjectModel.editableFieldFor: 'MaterialForEdit'
      MaterialForEdit,
      @ObjectModel.editableFieldFor: 'PlantForEdit'
      PlantForEdit,
      @ObjectModel.editableFieldFor: 'SourceListRecordForEdit'
      SourceListRecordForEdit,
      CreationDate,
      CreatedByUserName,
      ValidityStartDate,
      ValidityEndDate,
      Supplier,
      OutlineAgreement,
      PurchaseOutlineAgreement,
      PurchaseOutlineAgreementItem,
      PurchasingOrganization,
      SupplyingPlant,
      SupplierIsFixed,
      PurOutlineAgreementIsFixed,
      IssgPlantIsFixed,
      ManufacturerMaterial,
      SourceOfSupplyIsBlocked,
      PurchasingDocumentCategory,
      SourceListRecordCategory,
      MRPSourcingControl,
      @EndUserText.label: 'MRP Area'
      MRPArea,
      OrderQuantityUnit,
      OriginSystem,
      InventorySpecialStockType,
      @Semantics.booleanIndicator: true
      SourceOfSupplyIsFixed,
      SourceListStatus,
      SourceListStatusCriticality,
      _PurchaseContract,
      _PurchaseContractItem,
      _LogicalSystem,
      _PurchasingOrganization,
      _UnitOfMeasure,
      SupplierName,
      PlantName,
      MaterialName,
      SupplyingPlantName,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      //Foreign entities
      _MaterialPlanningUsage,
      _PurchasingSourceStatus,
      _MaterialText,
      _Supplier,
      _Material,
      _Plant,
      _SupplyingPlant,

      //Composition entities
      _PurchasingSourceTP : redirected to parent I_PurchasingSourceListTP

}
```
