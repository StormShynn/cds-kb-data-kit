---
name: I_BILLOFMATERIALITEMBASIC
description: Bill of MaterialITEMBASIC
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
  - material
  - bill-of-material
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALITEMBASIC

**Bill of MaterialITEMBASIC**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterialCategory` | `stpo.stlty` |
| key `BillOfMaterial` | `stpo.stlnr` |
| key `BillOfMaterialItemNodeNumber` | `stpo.stlkn` |
| key `BOMItemInternalChangeCount` | `stpo.stpoz` |
| `BillOfMaterialItemUUID` | `stpo.guidx` |
| `InheritedNodeNumberForBOMItem` | `stpo.stvkn` |
| `InheritedNodeNumberVersionBOM` | `stpo.stvkn_versn` |
| `ValidityStartDate` | `stpo.datuv` |
| `ValidityEndDate` | `case when stpo.datuv != '00000000' and stpo.valid_to = '00000000' then cast('99991231' as datub ) else cast( stpo.valid_to as datub preserving type ) end` |
| `EngineeringChangeDocument` | `stpo.aennr` |
| `ChgToEngineeringChgDocument` | `stpo.ecn_to` |
| `BOMItemRecordCreationDate` | `stpo.andat` |
| `BOMItemCreatedByUser` | `stpo.annam` |
| `BOMItemLastChangeDate` | `stpo.aedat` |
| `BOMItemLastChangedByUser` | `stpo.aenam` |
| `BillOfMaterialComponent` | `stpo.idnrk` |
| `BillOfMaterialItemCategory` | `stpo.postp` |
| `BillOfMaterialItemNumber` | `stpo.posnr` |
| `BillOfMaterialItemUnit` | `stpo.meins` |
| `BillOfMaterialItemQuantity` | `stpo.menge` |
| `IsSubItem` | `stpo.upskz` |
| `BOMItemSorter` | `stpo.sortf` |
| `FixedQuantity` | `stpo.fmeng` |
| `PurchasingGroup` | `stpo.ekgrp` |
| `Currency` | `stpo.waers` |
| `MaterialComponentPrice` | `stpo.preis` |
| `IdentifierBOMItem` | `stpo.itmid` |
| `MaterialPriceUnitQty` | `stpo.peinh` |
| `ComponentScrapInPercent` | `stpo.ausch` |
| `OperationScrapInPercent` | `stpo.avoau` |
| `IsNetScrap` | `stpo.netau` |
| `NumberOfVariableSizeItem` | `stpo.roanz` |
| `QuantityVariableSizeItem` | `stpo.romen` |
| `FormulaKey` | `stpo.rform` |
| `BOMItemText1` | `stpo.potx1` |
| `BOMItemText2` | `stpo.potx2` |
| `MaterialGroup` | `stpo.matkl` |
| `DocumentType` | `stpo.dokar` |
| `DocNumber` | `stpo.doknr` |
| `DocumentVersion` | `stpo.dokvr` |
| `DocumentPart` | `stpo.doktl` |
| `ClassNumber` | `stpo.class` |
| `ClassType` | `stpo.klart` |
| `ResultingItemCategory` | `stpo.potpr` |
| `DependencyObjectNumber` | `stpo.knobj` |
| `ObjectType` | `stpo.objty` |
| `IsClassificationRelevant` | `stpo.kzclb` |
| `IsBulkMaterial` | `stpo.schgt` |
| `BOMItemIsSparePart` | `stpo.erskz` |
| `BOMItemIsSalesRelevant` | `stpo.rvrel` |
| `IsProductionRelevant` | `stpo.sanfe` |
| `BOMItemIsPlantMaintRelevant` | `stpo.sanin` |
| `BOMItemIsCostingRelevant` | `stpo.sanka` |
| `IsEngineeringRelevant` | `stpo.sanko` |
| `SpecialProcurementType` | `stpo.itsob` |
| `IsBOMRecursiveAllowed` | `stpo.rekrs` |
| `OperationLeadTimeOffset` | `stpo.nlfzv` |
| `OpsLeadTimeOffsetUnit` | `stpo.nlfmv` |
| `IsMaterialProvision` | `stpo.beikz` |
| `BOMIsRecursive` | `stpo.rekri` |
| `DocumentIsCreatedByCAD` | `stpo.cadpo` |
| `DistrKeyCompConsumption` | `stpo.verti` |
| `DeliveryDurationInDays` | `stpo.lifzt` |
| `Creditor` | `stpo.lifnr` |
| `CostElement` | `stpo.sakto` |
| `Size1` | `stpo.roms1` |
| `Size2` | `stpo.roms2` |
| `Size3` | `stpo.roms3` |
| `UnitOfMeasureForSize1To3` | `stpo.romei` |
| `GoodsReceiptDuration` | `stpo.webaz` |
| `PurchasingOrganization` | `stpo.ekorg` |
| `RequiredComponent` | `stpo.clobk` |
| `MultipleSelectionAllowed` | `stpo.clmul` |
| `ProdOrderIssueLocation` | `stpo.lgort` |
| `MaterialIsCoProduct` | `stpo.kzkup` |
| `ExplosionType` | `stpo.dspst` |
| `FollowUpGroup` | `stpo.nfgrp` |
| `DiscontinuationGroup` | `stpo.nfeag` |
| `ReinsurContrOrgUnit` | `stpo.cview` |
| `IsConfigurableBOM` | `stpo.awakz` |
| `ReferencePoint` | `stpo.rfpnt` |
| `LeadTimeOffset` | `stpo.nlfzt` |
| `IsSoftwareComponent` | `stpo.sfwind` |
| `ProductionSupplyArea` | `stpo.prvbe` |
| `IsDeleted` | `stpo.lkenz` |
| `IsALE` | `stpo.alekz` |
| `AlternativeItemGroup` | `stpo.alpgr` |
| `AlternativeItemPriority` | `stpo.alprf` |
| `AlternativeItemStrategy` | `stpo.alpst` |
| `UsageProbabilityPercent` | `stpo.ewahr` |
| `_BOMItemCategory` | *Association* |
| `_BOMItemCategoryText` | *Association* |
| `_Product` | *Association* |
| `_ProductText` | *Association* |
| `_DocumentText` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BOMItemCategory` | `I_BillOfMaterialItemCategory` | [1..1] |
| `_BOMItemCategoryText` | `I_BomItemCategoryText` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductText` | [0..1] |
| `_DocumentText` | `I_DocumentInfoRecordDesc` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMITEMSBASIC'
@ClientHandling.type : #INHERITED
@ClientHandling.algorithm : #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bill of Material Item Details'
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations: true
define view I_BillOfMaterialItemBasic 
  as select from stpo as stpo
  association [1..1] to I_BillOfMaterialItemCategory as _BOMItemCategory        on  $projection.BillOfMaterialItemCategory = _BOMItemCategory.BillOfMaterialItemCategory
  association [0..1] to I_BomItemCategoryText        as _BOMItemCategoryText    on  $projection.BillOfMaterialItemCategory = _BOMItemCategoryText.BillOfMaterialItemCategory
                                                                                         and _BOMItemCategoryText.Language = $session.system_language
  association [0..1] to I_Product                    as _Product                on  $projection.BillOfMaterialComponent = _Product.Product
  association [0..1] to I_ProductText                as _ProductText            on  $projection.BillOfMaterialComponent = _ProductText.Product
                                                                                      and _ProductText.Language         = $session.system_language
   association [0..1] to I_DocumentInfoRecordDesc      as _DocumentText         on  $projection.DocumentType    = _DocumentText.DocumentInfoRecordDocType
                                                                                and $projection.DocNumber       = _DocumentText.DocumentInfoRecordDocNumber
                                                                                and $projection.DocumentPart    = _DocumentText.DocumentInfoRecordDocPart
                                                                                and $projection.DocumentVersion = _DocumentText.DocumentInfoRecordDocVersion
                                                                                and _DocumentText.Language      = $session.system_language
   association [1..1] to I_UnitOfMeasure              as _UnitOfMeasure         on  $projection.BillOfMaterialItemUnit = _UnitOfMeasure.UnitOfMeasure
   association [1..1] to I_Currency                   as _Currency              on  $projection.Currency = _Currency.Currency
  
  {
    
    key stpo.stlty                            as    BillOfMaterialCategory,
    key stpo.stlnr                            as    BillOfMaterial,
    key stpo.stlkn                            as    BillOfMaterialItemNodeNumber,
    key stpo.stpoz                            as    BOMItemInternalChangeCount,
        stpo.guidx                            as    BillOfMaterialItemUUID,        
        stpo.stvkn                            as    InheritedNodeNumberForBOMItem,
        stpo.stvkn_versn                      as    InheritedNodeNumberVersionBOM,
--        stas.bom_versn                        as    BillOfMaterialVersion,
        @Semantics.businessDate.from: true
        stpo.datuv                            as    ValidityStartDate,
        @Semantics.businessDate.to: true
        case 
          when stpo.datuv != '00000000' and stpo.valid_to = '00000000'
          then  cast('99991231' as datub )
          else cast( stpo.valid_to as datub preserving type )
        end                                   as    ValidityEndDate,
        stpo.aennr                            as    EngineeringChangeDocument,
        stpo.ecn_to                           as    ChgToEngineeringChgDocument,
        stpo.andat                            as    BOMItemRecordCreationDate,
        stpo.annam                            as    BOMItemCreatedByUser,
        stpo.aedat                            as    BOMItemLastChangeDate,
        stpo.aenam                            as    BOMItemLastChangedByUser,
        @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      --  @Consumption.semanticObject: 'Product'
        @ObjectModel.foreignKey.association: '_Product'
        stpo.idnrk                            as    BillOfMaterialComponent,
        stpo.postp                            as    BillOfMaterialItemCategory,
        stpo.posnr                            as    BillOfMaterialItemNumber,
        @Semantics.unitOfMeasure: true
        @ObjectModel.foreignKey.association: '_UnitOfMeasure'
        stpo.meins                            as    BillOfMaterialItemUnit,
        @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
        stpo.menge                            as    BillOfMaterialItemQuantity,
        stpo.upskz                            as    IsSubItem,
        stpo.sortf                            as    BOMItemSorter,
        @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
        stpo.fmeng                            as    FixedQuantity,
        stpo.ekgrp                            as    PurchasingGroup,
        @Semantics.currencyCode: true
       @ObjectModel.foreignKey.association: '_Currency'
        stpo.waers                            as    Currency,
        @Semantics.amount.currencyCode : 'Currency'
        stpo.preis                            as    MaterialComponentPrice,
        stpo.itmid                            as    IdentifierBOMItem,
        @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
        stpo.peinh                            as    MaterialPriceUnitQty,
        stpo.ausch                            as    ComponentScrapInPercent,
        stpo.avoau                            as    OperationScrapInPercent,
        stpo.netau                            as    IsNetScrap,
        stpo.roanz                            as    NumberOfVariableSizeItem,
        @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
        stpo.romen                            as    QuantityVariableSizeItem,
        stpo.rform                            as    FormulaKey,
        stpo.potx1                            as    BOMItemText1, // To be changed to BOMItemText1
        stpo.potx2                            as    BOMItemText2,
        stpo.matkl                            as    MaterialGroup,
        stpo.dokar                            as    DocumentType,
        stpo.doknr                            as    DocNumber,
        stpo.dokvr                            as    DocumentVersion,
        stpo.doktl                            as    DocumentPart,
        stpo.class                            as    ClassNumber,
        stpo.klart                            as    ClassType,
        stpo.potpr                            as    ResultingItemCategory,
        stpo.knobj                            as    DependencyObjectNumber,
        stpo.objty                            as    ObjectType,
        stpo.kzclb                            as    IsClassificationRelevant,
        stpo.schgt                            as    IsBulkMaterial,
        stpo.erskz                            as    BOMItemIsSparePart,
        stpo.rvrel                            as    BOMItemIsSalesRelevant,
        stpo.sanfe                            as    IsProductionRelevant,
        stpo.sanin                            as    BOMItemIsPlantMaintRelevant,
        stpo.sanka                            as    BOMItemIsCostingRelevant,
        stpo.sanko                            as    IsEngineeringRelevant,
        stpo.itsob                            as    SpecialProcurementType,
        stpo.rekrs                            as    IsBOMRecursiveAllowed,
        stpo.nlfzv                            as    OperationLeadTimeOffset,
        stpo.nlfmv                            as    OpsLeadTimeOffsetUnit,
        stpo.beikz                            as    IsMaterialProvision,
        stpo.rekri                            as    BOMIsRecursive,
        stpo.cadpo                            as    DocumentIsCreatedByCAD,
        stpo.verti                            as    DistrKeyCompConsumption,
        stpo.lifzt                            as    DeliveryDurationInDays,
        stpo.lifnr                            as    Creditor,
        stpo.sakto                            as    CostElement,
        @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
        stpo.roms1                            as    Size1,
        @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
        stpo.roms2                            as    Size2,
        @Semantics.quantity.unitOfMeasure : 'UnitOfMeasureForSize1To3'
        stpo.roms3                            as    Size3,
        stpo.romei                            as    UnitOfMeasureForSize1To3,
        stpo.webaz                            as    GoodsReceiptDuration,
        stpo.ekorg                            as    PurchasingOrganization,
        stpo.clobk                            as    RequiredComponent,
        stpo.clmul                            as    MultipleSelectionAllowed,
        stpo.lgort                            as    ProdOrderIssueLocation,
        stpo.kzkup                            as    MaterialIsCoProduct,
        stpo.dspst                            as    ExplosionType,
        stpo.nfgrp                            as    FollowUpGroup,
        stpo.nfeag                            as    DiscontinuationGroup,
        stpo.cview                            as    ReinsurContrOrgUnit,
        stpo.awakz                            as    IsConfigurableBOM,
        stpo.rfpnt                            as    ReferencePoint,
        stpo.nlfzt                            as    LeadTimeOffset,
        stpo.sfwind                           as    IsSoftwareComponent,
        stpo.prvbe                            as    ProductionSupplyArea,
        stpo.lkenz                            as    IsDeleted,
        stpo.alekz                            as    IsALE,
        stpo.alpgr                            as    AlternativeItemGroup,
        stpo.alprf                            as    AlternativeItemPriority,
        stpo.alpst                            as    AlternativeItemStrategy,
        stpo.ewahr                            as    UsageProbabilityPercent,
        _Product,
        _ProductText,
        _UnitOfMeasure,
        _BOMItemCategory,
        _BOMItemCategoryText,
        _DocumentText,
        _Currency    
}
```
