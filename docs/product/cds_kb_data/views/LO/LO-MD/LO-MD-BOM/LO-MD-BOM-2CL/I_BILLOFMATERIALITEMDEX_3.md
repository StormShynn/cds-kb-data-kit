---
name: I_BILLOFMATERIALITEMDEX_3
description: "Bill of MaterialITEMDEX 3"
semantic_vi: "View ITEMDEX 3 của bảng vật liệu cung cấp dữ liệu chi tiết cho bảng vật liệu, bao gồm các loại, vật liệu và phiên bản. Nó được sử dụng để trích xuất và phân tích các thành phần vật liệu."
keywords:
  - "bill of material"
  - "bảng vật liệu"
  - "item-level"
  - "data extraction"
  - "material component"
  - "ekko"
  - "logistics general"
  - "material management"
  - "bom"
  - "bill of material item"
semantic_en: "The Bill of Material ITEMDEX 3 view provides item-level data for bill of materials, including categories, items, and versions. It is used to extract and analyze material components."
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - data-extraction
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALITEMDEX_3

**Bill of MaterialITEMDEX 3**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  |  |  |  |
| `BOMInstceInternalChangeNumber` | ✓ | |  |  |  |  |
| `BOMItemInternalChangeCount` |  | |  |  |  |  |
| `BillOfMaterialItemUUID` |  | |  |  |  |  |
| `InheritedNodeNumberForBOMItem` |  | |  |  |  |  |
| `InheritedNodeNumberVersionBOM` |  | |  |  |  |  |
| `BillOfMaterialVersion` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `EngineeringChangeDocument` |  | |  |  |  |  |
| `ChgToEngineeringChgDocument` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `BOMItemRecordCreationDate` |  | |  |  |  |  |
| `BOMItemCreatedByUser` |  | |  |  |  |  |
| `BOMItemLastChangeDate` |  | |  |  |  |  |
| `BOMItemLastChangedByUser` |  | |  |  |  |  |
| `BillOfMaterialComponent` |  | |  |  |  |  |
| `BillOfMaterialItemCategory` |  | |  |  |  |  |
| `BillOfMaterialItemNumber` |  | |  |  |  |  |
| `BillOfMaterialItemUnit` |  | |  |  |  |  |
| `BillOfMaterialItemQuantity` |  | |  |  |  |  |
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
| `BOMItemDescription` |  | |  |  |  |  |
| `BOMItemText2` |  | |  |  |  |  |
| `LongTextLanguage` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `DocumentType` |  | |  |  |  |  |
| `DocNumber` |  | |  |  |  |  |
| `DocumentVersion` |  | |  |  |  |  |
| `DocumentPart` |  | |  |  |  |  |
| `ClassNumber` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `ResultingItemCategory` |  | |  |  |  |  |
| `DependencyObjectNumber` |  | |  |  |  |  |
| `BillOfMaterialObjectType` |  | |  |  |  |  |
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
| `FollowUpGroup` |  | |  |  |  |  |
| `DiscontinuationGroup` |  | |  |  |  |  |
| `ReinsurContrOrgUnit` |  | |  |  |  |  |
| `IsConfigurableBOM` |  | |  |  |  |  |
| `ReferencePoint` |  | |  |  |  |  |
| `LeadTimeOffset` |  | |  |  |  |  |
| `IsSoftwareComponent` |  | |  |  |  |  |
| `ProductionSupplyArea` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsALE` |  | |  |  |  |  |
| `AlternativeItemGroup` |  | |  |  |  |  |
| `AlternativeItemPriority` |  | |  |  |  |  |
| `AlternativeItemStrategy` |  | |  |  |  |  |
| `UsageProbabilityPercent` |  | |  |  |  |  |
| `IsPMAssemblyRelevant` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `OrigSalesOrderBOMItmCategory` |  | |  |  |  |  |
| `OrigSalesOrderBOMItmNodeNumber` |  | |  |  |  |  |
| `OrigSalesOrderBOMItmNumber` |  | |  |  |  |  |
| `PreliminaryMaterial` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data Extraction for BOM Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name : 'BillOfMaterialItem'

// CDC Annotation for DATA extraction

@Analytics:{
     dataCategory: #FACT,
     dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'stas', role:#MAIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial', 'BillOfMaterialVariant', 'BillOfMaterialItemNodeNumber', 'BOMInstceInternalChangeNumber'],
                    tableElement: ['stlty', 'stlnr', 'stlal', 'stlkn', 'stasz']

                },

                {
                    table: 'stpo', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['BillOfMaterialCategory', 'BillOfMaterial', 'BillOfMaterialItemNodeNumber'],
                    tableElement: ['stlty', 'stlnr', 'stlkn']
                }
            ]
        }
    }
}

define view entity I_BillOfMaterialItemDEX_3
  as select from P_BillOfMaterialItemDEX
{
  key BillOfMaterialCategory,
  key BillOfMaterial,
  key BillOfMaterialVariant,
  key BillOfMaterialItemNodeNumber,
  key BOMInstceInternalChangeNumber,
      BOMItemInternalChangeCount,
      BillOfMaterialItemUUID,
      InheritedNodeNumberForBOMItem,
      InheritedNodeNumberVersionBOM,
      BillOfMaterialVersion,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      EngineeringChangeDocument,
      ChgToEngineeringChgDocument,
      @Semantics.businessDate.to: true
      ValidityEndDate,
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
      QuantityVariableSizeItem,
      FormulaKey,
      BOMItemDescription,
      BOMItemText2,
      LongTextLanguage,
      MaterialGroup,
      DocumentType,
      DocNumber,
      DocumentVersion,
      DocumentPart,
      ClassNumber,
      ClassType,
      ResultingItemCategory,
      DependencyObjectNumber,
      BillOfMaterialObjectType,
      IsClassificationRelevant,
      IsBulkMaterial,
      @Semantics.booleanIndicator:true
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
      @Semantics.booleanIndicator:true
      IsMaterialProvision,
      BOMIsRecursive,
      DocumentIsCreatedByCAD,
      DistrKeyCompConsumption,
      DeliveryDurationInDays,
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
      FollowUpGroup,
      DiscontinuationGroup,
      ReinsurContrOrgUnit,
      @Semantics.booleanIndicator:true
      IsConfigurableBOM,
      ReferencePoint,
      LeadTimeOffset,
      IsSoftwareComponent,
      ProductionSupplyArea,
      IsDeleted,
      IsALE,
      AlternativeItemGroup,
      AlternativeItemPriority,
      AlternativeItemStrategy,
      UsageProbabilityPercent,
      IsPMAssemblyRelevant,
      LastChangeDateTime,
      OrigSalesOrderBOMItmCategory,
      OrigSalesOrderBOMItmNodeNumber,
      OrigSalesOrderBOMItmNumber,
      PreliminaryMaterial
}
```
