---
name: I_SLSORDBILLOFMATERIALITEMTP_2
description: "SLSORDBill of MaterialITEMTP 2"
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
# I_SLSORDBILLOFMATERIALITEMTP_2

**SLSORDBill of MaterialITEMTP 2**

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
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |  |  |
| `HeaderChangeDocument` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfMaterialItemUUID` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `BOMItemInternalChangeCount` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `EngineeringChangeDocForEdit` |  | |  | `EngineeringChangeDocument` |  |  |
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
| `BillOfMaterialObjectType` |  | |  | `ObjectType` |  |  |
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
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `_BillOfMaterial` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Sales Order Bill of Material Item'
@AccessControl.personalData.blocking: #NOT_REQUIRED
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
@ObjectModel.sapObjectNodeType.name: 'SalesBillOfMaterialItem'
define view entity I_SlsOrdBillOfMaterialItemTP_2 as projection on R_SlsOrdBillOfMaterialItemTP
 {
   
       key BillOfMaterial,
       key BillOfMaterialCategory,
       key BillOfMaterialVariant,
       key BillOfMaterialItemNodeNumber,
       key HeaderChangeDocument,
       key Material,
       key Plant,
       BillOfMaterialItemUUID,
       BillOfMaterialVariantUsage,       
       BOMItemInternalChangeCount,       
       ValidityStartDate,
       ValidityEndDate,
       @ObjectModel.editableFieldFor: 'EngineeringChangeDocForEdit'
       EngineeringChangeDocument as EngineeringChangeDocForEdit,
      // EngineeringChangeDocument,
       ChgToEngineeringChgDocument,
       InheritedNodeNumberForBOMItem,
       BOMItemRecordCreationDate,
       BOMItemCreatedByUser,
       BOMItemLastChangeDate,
       BOMItemLastChangedByUser,
       BillOfMaterialComponent,
       BillOfMaterialItemCategory,
       BillOfMaterialItemNumber,
  //   @Semantics.unitOfMeasure: true
       BillOfMaterialItemUnit,
       @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
       BillOfMaterialItemQuantity,
       @Semantics.booleanIndicator: true
       IsAssembly,
       IsSubItem,
       BOMItemSorter,
       //FixedQuantity,
       BOMItemHasFixedQuantity,
       PurchasingGroup,
      // @Semantics.currencyCode: true
       Currency,
       @Semantics.amount.currencyCode : 'Currency'
       MaterialComponentPrice,
       IdentifierBOMItem,
       @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
       MaterialPriceUnitQty,
       ComponentScrapInPercent,
       OperationScrapInPercent,
       IsNetScrap,
       //NumberOfVariableSizeItem,
       @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
       QuantityVariableSizeItem,
       FormulaKey,
       @EndUserText.label: 'Component Description'
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
       ObjectType as BillOfMaterialObjectType,
       IsClassificationRelevant,
       IsBulkMaterial,
       @Semantics.booleanIndicator: true
       BOMItemIsSparePart,
       @Semantics.booleanIndicator: true
       BOMItemIsSalesRelevant,
       IsProductionRelevant,
       BOMItemIsPlantMaintRelevant,
       @Semantics.booleanIndicator: true
       BOMItemIsCostingRelevant,
       IsEngineeringRelevant,
       SpecialProcurementType,
       IsBOMRecursiveAllowed,
       OperationLeadTimeOffset,
       OpsLeadTimeOffsetUnit,
       @Semantics.booleanIndicator: true
       IsMaterialProvision,
       BOMIsRecursive,
       DocumentIsCreatedByCAD,
       DistrKeyCompConsumption,
       DeliveryDurationInDays,
       Creditor,
       CostElement,
       @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
       Size1,
       @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
       Size2,
       @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
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
       @Semantics.booleanIndicator: true
       IsConfigurableBOM,
       ReferencePoint,
       LeadTimeOffset,
       ProductionSupplyArea,
       IsDeleted,
       IsALE,
       LastChangeDateTime,
       SalesOrder,
       SalesOrderItem,
      _BillOfMaterial : redirected to parent I_SalesOrderBillOfMaterialTP_2

                 
}
```
