---
name: I_BOMCOMPONENTWITHKEYDATE
description: Bomcomponentwithkeydate
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMCOMPONENTWITHKEYDATE

**Bomcomponentwithkeydate**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterialCategory` | `valid_items.BillOfMaterialCategory` |
| key `BillOfMaterial` | `valid_items.BillOfMaterial` |
| key `BillOfMaterialVariant` | `valid_items.BillOfMaterialVariant` |
| key `BillOfMaterialItemNodeNumber` | `valid_items.BillOfMaterialItemNodeNumber` |
| key `BillOfMaterialVersion` | `valid_items.BillOfMaterialVersion` |
| key `BOMItemInternalChangeCount` | `valid_items.BOMItemInternalChangeCount` |
| `ValidityStartDate` | `valid_items.ValidityStartDate` |
| `ValidityEndDate` | `valid_items.ValidityEndDate` |
| `EngineeringChangeDocument` | `valid_items.EngineeringChangeDocument` |
| `ChgToEngineeringChgDocument` | `cast( valid_items.ChgToEngineeringChgDocument as aenra preserving type )` |
| `InheritedNodeNumberForBOMItem` | `valid_items.InheritedNodeNumberForBOMItem` |
| `InheritedNodeNumberVersionBOM` | `valid_items.InheritedNodeNumberVersionBOM` |
| `BOMItemRecordCreationDate` | `valid_items.BOMItemRecordCreationDate` |
| `BOMItemCreatedByUser` | `valid_items.BOMItemCreatedByUser` |
| `BOMItemLastChangeDate` | `valid_items.BOMItemLastChangeDate` |
| `BOMItemLastChangedByUser` | `valid_items.BOMItemLastChangedByUser` |
| `BillOfMaterialComponent` | `valid_items.BillOfMaterialComponent` |
| `BillOfMaterialItemCategory` | `valid_items.BillOfMaterialItemCategory` |
| `BillOfMaterialItemNumber` | `valid_items.BillOfMaterialItemNumber` |
| `BillOfMaterialItemUnit` | `case when _BOMItemCategory.FixedItemCategory = 'R' then UnitOfMeasureForVarSizeItem else valid_items.BillOfMaterialItemUnit end` |
| `BillOfMaterialItemQuantity` | `case when _BOMItemCategory.FixedItemCategory = 'R' then NumberOfVariableSizeItem else valid_items.BillOfMaterialItemQuantity end` |
| `IsAssembly` | `cast( valid_items.IsAssembly as stlkz preserving type )` |
| `IsSubItem` | `valid_items.IsSubItem` |
| `BOMItemSorter` | `valid_items.BOMItemSorter` |
| `FixedQuantity` | `valid_items.FixedQuantity` |
| `BOMItemHasFixedQuantity` | `valid_items.BOMItemHasFixedQuantity` |
| `PurchasingGroup` | `valid_items.PurchasingGroup` |
| `Currency` | `valid_items.Currency` |
| `MaterialComponentPrice` | `valid_items.MaterialComponentPrice` |
| `IdentifierBOMItem` | `valid_items.IdentifierBOMItem` |
| `MaterialPriceUnitQty` | `valid_items.MaterialPriceUnitQty` |
| `ComponentScrapInPercent` | `valid_items.ComponentScrapInPercent` |
| `OperationScrapInPercent` | `valid_items.OperationScrapInPercent` |
| `IsNetScrap` | `valid_items.IsNetScrap` |
| `NumberOfVariableSizeItem` | `valid_items.NumberOfVariableSizeItem` |
| `QuantityVariableSizeItem` | `valid_items.QuantityVariableSizeItem` |
| `FormulaKey` | `valid_items.FormulaKey` |
| `ComponentDescription` | `case when _BOMItemCategory.FixedItemCategory = 'L' or _BOMItemCategory.FixedItemCategory = 'C' then case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> '' then _MaterialText.MaterialName else _MaterialTextEN.MaterialName end when _BOMItemCategory.FixedItemCategory = 'T' then valid_items.BOMItemDescription when _BOMItemCategory.FixedItemCategory = 'R' and (valid_items.BillOfMaterialComponent is not null) then case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> '' then _MaterialText.MaterialName else _MaterialTextEN.MaterialName end when _BOMItemCategory.FixedItemCategory = 'R' and (valid_items.BillOfMaterialComponent = '') then valid_items.BOMItemDescription when _BOMItemCategory.FixedItemCategory = 'D' then case when _DocumentText.DocumentDescription is not null or _DocumentText.DocumentDescription <> '' then _DocumentText.DocumentDescription else _DocumentTextEN.DocumentDescription end when _BOMItemCategory.FixedItemCategory = 'K' then case when _Class._ClassDescription[1:Language = $session.system_language].ClassDescription is not null or _Class._ClassDescription[1:Language = $session.system_language].ClassDescription <> '' then _Class._ClassDescription[1:Language = $session.system_language].ClassDescription else _Class._ClassDescription[1:Language = 'E'].ClassDescription end when _BOMItemCategory.FixedItemCategory = 'N' and (valid_items.BillOfMaterialComponent <> '') then case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> '' then _MaterialText.MaterialName else _MaterialTextEN.MaterialName end when _BOMItemCategory.FixedItemCategory = 'N' and (valid_items.BillOfMaterialComponent = '') then valid_items.BOMItemDescription end` |
| `BOMItemDescription` | `valid_items.BOMItemDescription` |
| `BOMItemText2` | `valid_items.BOMItemText2` |
| `MaterialGroup` | `valid_items.MaterialGroup` |
| `DocumentType` | `valid_items.DocumentType` |
| `DocNumber` | `valid_items.DocNumber` |
| `DocumentVersion` | `valid_items.DocumentVersion` |
| `DocumentPart` | `valid_items.DocumentPart` |
| `ClassNumber` | `valid_items.ClassNumber` |
| `ClassType` | `valid_items.ClassType` |
| `ResultingItemCategory` | `valid_items.ResultingItemCategory` |
| `DependencyObjectNumber` | `valid_items.DependencyObjectNumber` |
| `ObjectType` | `valid_items.ObjectType` |
| `IsClassificationRelevant` | `valid_items.IsClassificationRelevant` |
| `IsBulkMaterial` | `valid_items.IsBulkMaterial` |
| `BOMItemIsSparePart` | `valid_items.BOMItemIsSparePart` |
| `BOMItemIsSalesRelevant` | `valid_items.BOMItemIsSalesRelevant` |
| `IsProductionRelevant` | `valid_items.IsProductionRelevant` |
| `BOMItemIsPlantMaintRelevant` | `valid_items.BOMItemIsPlantMaintRelevant` |
| `BOMItemIsCostingRelevant` | `valid_items.BOMItemIsCostingRelevant` |
| `IsEngineeringRelevant` | `valid_items.IsEngineeringRelevant` |
| `SpecialProcurementType` | `valid_items.SpecialProcurementType` |
| `IsBOMRecursiveAllowed` | `valid_items.IsBOMRecursiveAllowed` |
| `OperationLeadTimeOffset` | `valid_items.OperationLeadTimeOffset` |
| `OpsLeadTimeOffsetUnit` | `valid_items.OpsLeadTimeOffsetUnit` |
| `IsMaterialProvision` | `valid_items.IsMaterialProvision` |
| `BOMIsRecursive` | `valid_items.BOMIsRecursive` |
| `DocumentIsCreatedByCAD` | `valid_items.DocumentIsCreatedByCAD` |
| `DistrKeyCompConsumption` | `valid_items.DistrKeyCompConsumption` |
| `DeliveryDurationInDays` | `valid_items.DeliveryDurationInDays` |
| `Creditor` | `valid_items.Creditor` |
| `CostElement` | `valid_items.CostElement` |
| `Size1` | `valid_items.Size1` |
| `Size2` | `valid_items.Size2` |
| `Size3` | `valid_items.Size3` |
| `UnitOfMeasureForSize1To3` | `valid_items.UnitOfMeasureForSize1To3` |
| `GoodsReceiptDuration` | `valid_items.GoodsReceiptDuration` |
| `PurchasingOrganization` | `valid_items.PurchasingOrganization` |
| `RequiredComponent` | `valid_items.RequiredComponent` |
| `MultipleSelectionAllowed` | `valid_items.MultipleSelectionAllowed` |
| `ProdOrderIssueLocation` | `valid_items.ProdOrderIssueLocation` |
| `MaterialIsCoProduct` | `valid_items.MaterialIsCoProduct` |
| `ExplosionType` | `valid_items.ExplosionType` |
| `FollowUpGroup` | `valid_items.FollowUpGroup` |
| `DiscontinuationGroup` | `valid_items.DiscontinuationGroup` |
| `IsConfigurableBOM` | `valid_items.IsConfigurableBOM` |
| `ReferencePoint` | `valid_items.ReferencePoint` |
| `LeadTimeOffset` | `valid_items.LeadTimeOffset` |
| `IsSoftwareComponent` | `valid_items.IsSoftwareComponent` |
| `ProductionSupplyArea` | `valid_items.ProductionSupplyArea` |
| `IsDeleted` | `valid_items.IsDeleted` |
| `IsALE` | `valid_items.IsALE` |
| `AlternativeItemGroup` | `valid_items.AlternativeItemGroup` |
| `AlternativeItemPriority` | `valid_items.AlternativeItemPriority` |
| `AlternativeItemStrategy` | `valid_items.AlternativeItemStrategy` |
| `UsageProbabilityPercent` | `valid_items.UsageProbabilityPercent` |
| `BillOfMaterialItemCategoryDesc` | `_BOMItemCategoryText.BillOfMaterialItemCategoryDesc` |
| `MaterialComponentIsPhantomItem` | `cast ( valid_items.IsPhantomItem as dumps preserving type )` |
| `IsPhantomItem` | `cast ( valid_items.IsPhantomItem as dumps preserving type )` |
| `LastChangeDateTime` | `valid_items.LastChangeDateTime` |
| `_BOMItemCategory` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Currency` | *Association* |
| `_Mast` | *Association* |
| `_Dost` | *Association* |
| `_Prst` | *Association* |
| `_Kdst` | *Association* |
| `_Eqst` | *Association* |
| `_Tpst` | *Association* |
| `_Stst` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOMItemCategory` | `I_BillOfMaterialItemCategory` | [1..1] |
| `_BOMItemCategoryText` | `I_BomItemCategoryText` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_Mast` | `I_MaterialBOMLink` | [0..*] |
| `_Dost` | `I_DocumentBOMLink` | [0..*] |
| `_Prst` | `I_ProjectBOMLink` | [0..*] |
| `_Kdst` | `I_SalesOrderBOMLink` | [0..*] |
| `_Eqst` | `I_EquipmentBOMLink` | [0..*] |
| `_Tpst` | `I_FunctionalLocBOMLink` | [0..*] |
| `_Stst` | `I_StandardBOMLink` | [0..*] |
| `_MaterialText` | `I_MaterialText` | [0..1] |
| `_MaterialTextEN` | `I_MaterialText` | [0..1] |
| `_DocumentText` | `I_DocumentInfoRecordDesc` | [0..1] |
| `_DocumentTextEN` | `I_DocumentInfoRecordDesc` | [0..1] |
| `_Class` | `I_ClfnClassVH` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMCOMPWITHDATE'
@ClientHandling.type : #INHERITED
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Bill of Material Component Details'
//@ObjectModel.createEnabled: true
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations: true

define view I_BOMComponentWithKeyDate
with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from P_BOMComponentsWithKeyDate as valid_items
  association [1..1] to I_BillOfMaterialItemCategory as _BOMItemCategory on  $projection.BillOfMaterialItemCategory = _BOMItemCategory.BillOfMaterialItemCategory
  association [0..1] to I_BomItemCategoryText as _BOMItemCategoryText                on  $projection.BillOfMaterialItemCategory = _BOMItemCategoryText.BillOfMaterialItemCategory
                                                                                     and _BOMItemCategoryText.Language = $session.system_language
  association [1..1] to I_UnitOfMeasure              as _UnitOfMeasure   on  $projection.BillOfMaterialItemUnit = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to I_Currency                   as _Currency        on  $projection.Currency = _Currency.Currency
  association [0..*] to I_MaterialBOMLink            as _Mast            on  $projection.BillOfMaterialCategory = _Mast.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Mast.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Mast.BillOfMaterialVariant
  association [0..*] to I_DocumentBOMLink            as _Dost            on  $projection.BillOfMaterialCategory = _Dost.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Dost.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Dost.BillOfMaterialVariant
  association [0..*] to I_ProjectBOMLink             as _Prst            on  $projection.BillOfMaterialCategory = _Prst.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Prst.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Prst.BillOfMaterialVariant
  association [0..*] to I_SalesOrderBOMLink          as _Kdst            on  $projection.BillOfMaterialCategory = _Kdst.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Kdst.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Kdst.BillOfMaterialVariant
  association [0..*] to I_EquipmentBOMLink           as _Eqst            on  $projection.BillOfMaterialCategory = _Eqst.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Eqst.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Eqst.BillOfMaterialVariant
  association [0..*] to I_FunctionalLocBOMLink       as _Tpst            on  $projection.BillOfMaterialCategory = _Tpst.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Tpst.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Tpst.BillOfMaterialVariant
  association [0..*] to I_StandardBOMLink            as _Stst            on  $projection.BillOfMaterialCategory = _Stst.BillOfMaterialCategory
                                                                         and $projection.BillOfMaterial         = _Stst.BillOfMaterial
                                                                         and $projection.BillOfMaterialVariant  = _Stst.BillOfMaterialVariant
  association [0..1] to I_MaterialText                as _MaterialText   on  $projection.BillOfMaterialComponent = _MaterialText.Material
                                                                                      and _MaterialText.Language              = $session.system_language
  association [0..1] to I_MaterialText                as _MaterialTextEN              on  $projection.BillOfMaterialComponent = _MaterialTextEN.Material
                                                                                      and _MaterialTextEN.Language            = 'E'

   association [0..1] to I_DocumentInfoRecordDesc      as _DocumentText                on  $projection.DocumentType    = _DocumentText.DocumentInfoRecordDocType
                                                                                      and $projection.DocNumber       = _DocumentText.DocumentInfoRecordDocNumber
                                                                                      and $projection.DocumentPart    = _DocumentText.DocumentInfoRecordDocPart
                                                                                      and $projection.DocumentVersion = _DocumentText.DocumentInfoRecordDocVersion
                                                                                      and _DocumentText.Language      = $session.system_language

  association [0..1] to I_DocumentInfoRecordDesc      as _DocumentTextEN              on  $projection.DocumentType    = _DocumentTextEN.DocumentInfoRecordDocType
                                                                                      and $projection.DocNumber       = _DocumentTextEN.DocumentInfoRecordDocNumber
                                                                                      and $projection.DocumentPart    = _DocumentTextEN.DocumentInfoRecordDocPart
                                                                                      and $projection.DocumentVersion = _DocumentTextEN.DocumentInfoRecordDocVersion
                                                                                      and _DocumentTextEN.Language    = 'E'
   association [0..1] to I_ClfnClassVH                 as _Class                       on  $projection.ClassNumber = _Class.Class
                                                                                      and $projection.ClassType   = _Class.ClassType
                                                                                                                                                            
{  
  key valid_items.BillOfMaterialCategory,
  key valid_items.BillOfMaterial as BillOfMaterial,
  key valid_items.BillOfMaterialVariant,
  key valid_items.BillOfMaterialItemNodeNumber,
  key valid_items.BillOfMaterialVersion,
  key valid_items.BOMItemInternalChangeCount,
      valid_items.ValidityStartDate,     
      valid_items.ValidityEndDate,
      valid_items.EngineeringChangeDocument  as EngineeringChangeDocument,
      cast( valid_items.ChgToEngineeringChgDocument as aenra preserving type )  as ChgToEngineeringChgDocument,
      valid_items.InheritedNodeNumberForBOMItem,
      valid_items.InheritedNodeNumberVersionBOM,
     valid_items.BOMItemRecordCreationDate,
      valid_items.BOMItemCreatedByUser,
      valid_items.BOMItemLastChangeDate,
      valid_items.BOMItemLastChangedByUser,
      valid_items.BillOfMaterialComponent, 
      valid_items.BillOfMaterialItemCategory,
      valid_items.BillOfMaterialItemNumber as BillOfMaterialItemNumber,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      case when _BOMItemCategory.FixedItemCategory = 'R'
      then UnitOfMeasureForVarSizeItem
      else valid_items.BillOfMaterialItemUnit
      end                                                          as BillOfMaterialItemUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      @DefaultAggregation :#NONE
      case when _BOMItemCategory.FixedItemCategory = 'R'
      then NumberOfVariableSizeItem
      else valid_items.BillOfMaterialItemQuantity
      end                                                          as BillOfMaterialItemQuantity,
      cast( valid_items.IsAssembly as stlkz preserving type )      as IsAssembly,
       valid_items.IsSubItem,
      valid_items.BOMItemSorter,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      valid_items.FixedQuantity,
      valid_items.BOMItemHasFixedQuantity,
      valid_items.PurchasingGroup,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      valid_items.Currency,
      @Semantics.amount.currencyCode : 'Currency'
      @DefaultAggregation :#NONE
      valid_items.MaterialComponentPrice,
      valid_items.IdentifierBOMItem,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      valid_items.MaterialPriceUnitQty,
      valid_items.ComponentScrapInPercent,
      valid_items.OperationScrapInPercent,
      valid_items.IsNetScrap,
      valid_items.NumberOfVariableSizeItem,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      valid_items.QuantityVariableSizeItem,
      valid_items.FormulaKey,
      case 
            when _BOMItemCategory.FixedItemCategory = 'L' or _BOMItemCategory.FixedItemCategory = 'C'
               then
               case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> ''
               then _MaterialText.MaterialName
               else _MaterialTextEN.MaterialName
               end
            when _BOMItemCategory.FixedItemCategory = 'T'
               then valid_items.BOMItemDescription
            when _BOMItemCategory.FixedItemCategory = 'R' and  (valid_items.BillOfMaterialComponent is not null)
               then
               case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> ''
               then _MaterialText.MaterialName
               else _MaterialTextEN.MaterialName
               end
            when _BOMItemCategory.FixedItemCategory = 'R' and  (valid_items.BillOfMaterialComponent = '')
               then valid_items.BOMItemDescription
            when _BOMItemCategory.FixedItemCategory = 'D'
               then
               case when _DocumentText.DocumentDescription is not null or _DocumentText.DocumentDescription <> ''
               then _DocumentText.DocumentDescription
               else _DocumentTextEN.DocumentDescription
               end
            when _BOMItemCategory.FixedItemCategory = 'K'
               then
               case when _Class._ClassDescription[1:Language = $session.system_language].ClassDescription is not null
                        or _Class._ClassDescription[1:Language = $session.system_language].ClassDescription <> ''
                    then _Class._ClassDescription[1:Language = $session.system_language].ClassDescription
                    else _Class._ClassDescription[1:Language = 'E'].ClassDescription
               end
            when _BOMItemCategory.FixedItemCategory = 'N' and (valid_items.BillOfMaterialComponent <> '')
               then
               case when _MaterialText.MaterialName is not null or _MaterialText.MaterialName <> ''
               then _MaterialText.MaterialName
               else _MaterialTextEN.MaterialName
               end
            when _BOMItemCategory.FixedItemCategory = 'N' and  (valid_items.BillOfMaterialComponent = '')
               then valid_items.BOMItemDescription
       end as ComponentDescription,
      valid_items.BOMItemDescription,
      valid_items.BOMItemText2,
      valid_items.MaterialGroup,
      valid_items.DocumentType,
      valid_items.DocNumber,
      valid_items.DocumentVersion,
      valid_items.DocumentPart,
      valid_items.ClassNumber,
      valid_items.ClassType,
      valid_items.ResultingItemCategory,
      valid_items.DependencyObjectNumber,
      valid_items.ObjectType,
      valid_items.IsClassificationRelevant,
      valid_items.IsBulkMaterial,
      valid_items.BOMItemIsSparePart  , 
      valid_items.BOMItemIsSalesRelevant,
      valid_items.IsProductionRelevant,
      valid_items.BOMItemIsPlantMaintRelevant,
      valid_items.BOMItemIsCostingRelevant,
      valid_items.IsEngineeringRelevant,
      valid_items.SpecialProcurementType,
      valid_items.IsBOMRecursiveAllowed,
      valid_items.OperationLeadTimeOffset,
      valid_items.OpsLeadTimeOffsetUnit,
      valid_items.IsMaterialProvision,
      valid_items.BOMIsRecursive,
      valid_items.DocumentIsCreatedByCAD,
      valid_items.DistrKeyCompConsumption,
      valid_items.DeliveryDurationInDays,
      valid_items.Creditor,
      valid_items.CostElement,
      @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
      valid_items.Size1,
      @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
      valid_items.Size2,
      @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
      valid_items.Size3,
      valid_items.UnitOfMeasureForSize1To3,
      valid_items.GoodsReceiptDuration,
      valid_items.PurchasingOrganization,
      valid_items.RequiredComponent,
      valid_items.MultipleSelectionAllowed,
      valid_items.ProdOrderIssueLocation,
      valid_items.MaterialIsCoProduct,
      valid_items.ExplosionType,
      valid_items.FollowUpGroup,
      valid_items.DiscontinuationGroup,
      valid_items.IsConfigurableBOM,
      valid_items.ReferencePoint,
      valid_items.LeadTimeOffset,
      valid_items.IsSoftwareComponent,
      valid_items.ProductionSupplyArea,
      valid_items.IsDeleted,
      valid_items.IsALE,
//Alternative Item Fields
      valid_items.AlternativeItemGroup,
      valid_items.AlternativeItemPriority,
      valid_items.AlternativeItemStrategy,
      valid_items.UsageProbabilityPercent,     
      _BOMItemCategoryText.BillOfMaterialItemCategoryDesc as BillOfMaterialItemCategoryDesc,
      cast ( valid_items.IsPhantomItem as dumps preserving type )  as MaterialComponentIsPhantomItem,
      cast ( valid_items.IsPhantomItem as dumps preserving type )  as IsPhantomItem,
      valid_items.LastChangeDateTime                               as LastChangeDateTime,
      _BOMItemCategory,
      _UnitOfMeasure,
      _Currency,
      _Mast,
      _Dost,
      _Prst,
      _Kdst,
      _Eqst,
      _Tpst,
      _Stst
     
}where
      ValidityStartDate <= $parameters.P_KeyDate
  and ValidityEndDate   >= $parameters.P_KeyDate
```
