---
name: I_BILLOFMATERIALITEMTP_3
description: "Bill of MaterialITEMTP 3"
semantic_vi: "View Bill of Material ITEMTP 3 hiển thị dữ liệu chi tiết cho danh mục vật liệu, bao gồm vật liệu, nhà máy và nút vật liệu. Nó được sử dụng trong xử lý giao dịch cho logistics tổng thể, cụ thể trong quản lý vật liệu."
keywords:
  - "bill of material"
  - "danh mục vật liệu"
  - "material"
  - "vật liệu"
  - "plant"
  - "nhà máy"
  - "item node"
  - "nút vật liệu"
  - "transactional processing"
  - "xử lý giao dịch"
  - "logistics general"
  - "quản lý vật liệu"
semantic_en: "The Bill of Material ITEMTP 3 view exposes item-level data for bill of materials, including materials, plants, and item nodes. It is used in transactional processing for logistics general, specifically in material management."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - transactional-processing
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALITEMTP_3

**Bill of MaterialITEMTP 3**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialVersion` | ✓ | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |  |  |
| `HeaderChangeDocument` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfMaterialItemUUID` |  | |  |  |  |  |
| `BillOfMaterialHeaderUUID` |  | |  |  |  |  |
| `BOMItemInternalChangeCount` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `EngineeringChangeDocForEdit` |  | |  |  |  |  |
| `EngineeringChangeDocument` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `ChgToEngineeringChgDocument` |  | |  |  |  |  |
| `InheritedNodeNumberForBOMItem` |  | |  |  |  |  |
| `BOMItemRecordCreationDate` |  | |  |  |  |  |
| `BOMItemCreatedByUser` |  | |  |  |  |  |
| `BOMItemLastChangeDate` |  | |  |  |  |  |
| `BOMItemLastChangedByUser` |  | |  |  |  |  |
| `BillOfMaterialComponent` |  | |  |  |  |  |
| `BillOfMaterialItemCategory` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `BillOfMaterialItemQuantity` |  | |  |  |  |  |
| `IsAssembly` |  | |  |  |  |  |
| `IsSubItem` |  | |  |  |  |  |
| `BOMItemSorter` |  | |  |  |  |  |
| `BOMItemHasFixedQuantity` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MaterialComponentPrice` |  | |  |  |  |  |
| `IdentifierBOMItem` |  | |  |  |  |  |
| `MaterialPriceUnitQty` |  | |  |  |  |  |
| `ComponentScrapInPercent` |  | |  |  |  |  |
| `OperationScrapInPercent` |  | |  |  |  |  |
| `IsNetScrap` |  | |  |  |  |  |
| `VariableSizeItemQuantity` |  | |  |  |  |  |
| `VariableSizeCompUnitOfMeasure` |  | |  |  |  |  |
| `QuantityVariableSizeItem` |  | |  |  |  |  |
| `FormulaKey` |  | |  |  |  |  |
| `ComponentDescription` |  | |  |  |  |  |
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMItemText2` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `DocumentType` |  | |  |  |  |  |
| `DocNumber` |  | |  |  |  |  |
| `DocumentVersion` |  | |  |  |  |  |
| `DocumentPart` |  | |  |  |  |  |
| `ClassNumber` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `ResultingItemCategory` |  | |  |  |  |  |
| `DependencyObjectNumber` |  | |  |  |  |  |
| `IsClassificationRelevant` |  | |  |  |  |  |
| `IsBulkMaterial` |  | |  |  |  |  |
| `BOMItemIsSparePart` |  | |  |  |  |  |
| `BOMItemIsSalesRelevant` |  | |  |  |  |  |
| `IsProductionRelevant` |  | |  |  |  |  |
| `BOMItemIsPlantMaintRelevant` |  | |  |  |  |  |
| `BOMItemIsCostingRelevant` |  | |  |  |  |  |
| `IsEngineeringRelevant` |  | |  |  |  |  |
| `SpecialProcurementType` |  | |  |  |  |  |
| `IsBOMRecursiveAllowed` |  | |  |  |  |  |
| `OperationLeadTimeOffset` |  | |  |  |  |  |
| `OpsLeadTimeOffsetUnit` |  | |  |  |  |  |
| `IsMaterialProvision` |  | |  |  |  |  |
| `BOMIsRecursive` |  | |  |  |  |  |
| `DocumentIsCreatedByCAD` |  | |  |  |  |  |
| `DistrKeyCompConsumption` |  | |  |  |  |  |
| `DeliveryDurationInDays` |  | |  |  |  |  |
| `Creditor` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `Size1` |  | |  |  |  |  |
| `Size2` |  | |  |  |  |  |
| `Size3` |  | |  |  |  |  |
| `UnitOfMeasureForSize1To3` |  | |  |  |  |  |
| `GoodsReceiptDuration` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `RequiredComponent` |  | |  |  |  |  |
| `MultipleSelectionAllowed` |  | |  |  |  |  |
| `ProdOrderIssueLocation` |  | |  |  |  |  |
| `MaterialIsCoProduct` |  | |  |  |  |  |
| `ExplosionType` |  | |  |  |  |  |
| `AlternativeItemGroup` |  | |  |  |  |  |
| `AlternativeItemPriority` |  | |  |  |  |  |
| `AlternativeItemStrategy` |  | |  |  |  |  |
| `UsageProbabilityPercent` |  | |  |  |  |  |
| `FollowUpGroup` |  | |  |  |  |  |
| `DiscontinuationGroup` |  | |  |  |  |  |
| `IsConfigurableBOM` |  | |  |  |  |  |
| `ReferencePoint` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsALE` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `PreliminaryComponent` |  | |  |  |  |  |
| `ProductExternalID` |  | |  |  |  |  |
| `ProductIsConfigurable` |  | |  |  |  |  |
| `IsBulkMaterialComponent` |  | |  |  |  |  |
| `IsItemDraftModified` |  | |  |  |  |  |
| `VariableSizeItemIsHidden` |  | |  |  |  |  |
| `ClassDetailsIsHidden` |  | |  |  |  |  |
| `NonStockItemDetailsIsHidden` |  | |  |  |  |  |
| `DocumentItemDetailsIsHidden` |  | |  |  |  |  |
| `_MaterialPlant` | | ✓ | | | | |
| `_BOMItemCategory` | | ✓ | | | | |
| `_MatBOMHeader` | | ✓ | | | | |
| `_MatBOMSubitem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Bill Of Material Item - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    usageType:  { 
        serviceQuality: #D, 
        sizeCategory: #XL, 
        dataClass: #TRANSACTIONAL
        },
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}      
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillOfMaterialItemTP_3
  as projection on R_MatBillOfMaterialItemTP as BillOfMaterialItem
{ 
  key BillOfMaterial,
  key BillOfMaterialCategory,
  key BillOfMaterialVariant                                        as BillOfMaterialVariant,
  key BillOfMaterialVersion,
  key BillOfMaterialItemNodeNumber                                 as BillOfMaterialItemNodeNumber,
  key HeaderChangeDocument,
  key Material                                                     as Material,
  key Plant                                                        as Plant,
      BillOfMaterialItemUUID,
      BillOfMaterialHeaderUUID,
      BOMItemInternalChangeCount,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.editableFieldFor: 'EngineeringChangeDocument'
      @EndUserText.label: 'Change Number for Edit'
      EngineeringChangeDocForEdit,
      EngineeringChangeDocument,
      BillOfMaterialVariantUsage,
      ChgToEngineeringChgDocument,
      InheritedNodeNumberForBOMItem,
      BOMItemRecordCreationDate,
      BOMItemCreatedByUser,
      BOMItemLastChangeDate,
      BOMItemLastChangedByUser,
      BillOfMaterialComponent,
      BillOfMaterialItemCategory,
      BillOfMaterialItemNumber,
      BillOfMaterialItemUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialItemQuantity,
      IsAssembly,
      @EndUserText.label: 'Sub-Item Indicators'
      IsSubItem,
      BOMItemSorter,
      BOMItemHasFixedQuantity,
      PurchasingGroup,
      Currency,
      @Semantics.amount.currencyCode : 'Currency'
      MaterialComponentPrice,
      IdentifierBOMItem,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      MaterialPriceUnitQty,
      ComponentScrapInPercent,
      OperationScrapInPercent,
      IsNetScrap,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      @EndUserText.label: 'Variable Size Item Quantity'
      VariableSizeItemQuantity,
      @EndUserText.label: 'Variable Size Comp Unit Of Measure'
      VariableSizeCompUnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      QuantityVariableSizeItem,
      FormulaKey,
      ComponentDescription,
      BOMItemDescription,
      BOMItemText2,
      MaterialGroup,
      DocumentType,
      DocNumber,
      DocumentVersion,
      DocumentPart,
      ClassNumber,
      ClassType,
      ResultingItemCategory,
      DependencyObjectNumber,
      IsClassificationRelevant,
      IsBulkMaterial,
      @Semantics.booleanIndicator
      BOMItemIsSparePart,
      @Semantics.booleanIndicator
      BOMItemIsSalesRelevant,
      IsProductionRelevant,
      BOMItemIsPlantMaintRelevant,
      @Semantics.booleanIndicator
      BOMItemIsCostingRelevant,
      IsEngineeringRelevant,
      SpecialProcurementType,
      IsBOMRecursiveAllowed,
      OperationLeadTimeOffset,
      OpsLeadTimeOffsetUnit,
      @Semantics.booleanIndicator
      IsMaterialProvision,
      BOMIsRecursive,
      DocumentIsCreatedByCAD,
      DistrKeyCompConsumption,
      DeliveryDurationInDays,
      Creditor,
      CostElement,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      Size1,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      Size2,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      Size3,
      UnitOfMeasureForSize1To3,
      GoodsReceiptDuration,
      PurchasingOrganization,
      RequiredComponent,
      MultipleSelectionAllowed,
      ProdOrderIssueLocation,
      MaterialIsCoProduct,
      ExplosionType,
      AlternativeItemGroup,
      AlternativeItemPriority,
      AlternativeItemStrategy,
      UsageProbabilityPercent,
      FollowUpGroup,
      DiscontinuationGroup,
      @Semantics.booleanIndicator
      IsConfigurableBOM,
      ReferencePoint,
      LeadTimeOffset,
      ProductionSupplyArea,
      IsDeleted,
      IsALE,
      LastChangeDateTime,
      PreliminaryComponent,
      ProductExternalID,
      ProductIsConfigurable,
      IsBulkMaterialComponent,
      @EndUserText.label: 'Is Item Draft Modified'
      IsItemDraftModified,
      @EndUserText.label: 'Variable Size Item Is Hidden'
      VariableSizeItemIsHidden,
      @EndUserText.label: 'Class Details Is Hidden'
      ClassDetailsIsHidden,
      @EndUserText.label: 'Non Stock Item Details Is Hidden'
      NonStockItemDetailsIsHidden,
      @EndUserText.label: 'Document Item Details Is Hidden'
      DocumentItemDetailsIsHidden,
      _MaterialPlant,
      _BOMItemCategory,
      _MatBOMHeader  : redirected to parent I_BillOfMaterialTP_3,
      _MatBOMSubitem : redirected to composition child I_BillOfMaterialSubItemTP_3     
}
```
