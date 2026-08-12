---
name: I_BILLOFMATERIALITEMBASIC
description: "Bill of MaterialITEMBASIC"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialCategory` | ✓ | |  | `stlty` |  |  |
| `BillOfMaterial` | ✓ | |  | `stlnr` |  |  |
| `BillOfMaterialItemNodeNumber` | ✓ | |  | `stlkn` |  |  |
| `BOMItemInternalChangeCount` | ✓ | |  | `stpoz` |  |  |
| `BillOfMaterialItemUUID` |  | |  | `guidx` |  |  |
| `InheritedNodeNumberForBOMItem` |  | |  | `stvkn` |  |  |
| `InheritedNodeNumberVersionBOM` |  | |  | `stvkn_versn` |  |  |
| `ValidityStartDate` |  | |  | `datuv` |  |  |
| `ValidityEndDate` |  | |  | `case when stpo.datuv != '00000000' and stpo.valid_to = '00000000' then cast('99991231' as datub ) else cast( stpo.valid_to as datub preserving type ) end` |  |  |
| `EngineeringChangeDocument` |  | |  | `aennr` |  |  |
| `ChgToEngineeringChgDocument` |  | |  | `ecn_to` |  |  |
| `BOMItemRecordCreationDate` |  | |  | `andat` |  |  |
| `BOMItemCreatedByUser` |  | |  | `annam` |  |  |
| `BOMItemLastChangeDate` |  | |  | `aedat` |  |  |
| `BOMItemLastChangedByUser` |  | |  | `aenam` |  |  |
| `BillOfMaterialComponent` |  | |  | `idnrk` |  |  |
| `BillOfMaterialItemCategory` |  | |  | `postp` |  |  |
| `BillOfMaterialItemNumber` |  | |  | `posnr` |  |  |
| `BillOfMaterialItemUnit` |  | |  | `meins` |  |  |
| `BillOfMaterialItemQuantity` |  | |  | `menge` |  |  |
| `IsSubItem` |  | |  | `upskz` |  |  |
| `BOMItemSorter` |  | |  | `sortf` |  |  |
| `FixedQuantity` |  | |  | `fmeng` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `MaterialComponentPrice` |  | |  | `preis` |  |  |
| `IdentifierBOMItem` |  | |  | `itmid` |  |  |
| `MaterialPriceUnitQty` |  | |  | `peinh` |  |  |
| `ComponentScrapInPercent` |  | |  | `ausch` |  |  |
| `OperationScrapInPercent` |  | |  | `avoau` |  |  |
| `IsNetScrap` |  | |  | `netau` |  |  |
| `NumberOfVariableSizeItem` |  | |  | `roanz` |  |  |
| `QuantityVariableSizeItem` |  | |  | `romen` |  |  |
| `FormulaKey` |  | |  | `rform` |  |  |
| `BOMItemText1` |  | |  | `potx1` |  |  |
| `BOMItemText2` |  | |  | `potx2` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `DocumentType` |  | |  | `dokar` |  |  |
| `DocNumber` |  | |  | `doknr` |  |  |
| `DocumentVersion` |  | |  | `dokvr` |  |  |
| `DocumentPart` |  | |  | `doktl` |  |  |
| `ClassNumber` |  | |  | `class` |  |  |
| `ClassType` |  | |  | `klart` |  |  |
| `ResultingItemCategory` |  | |  | `potpr` |  |  |
| `DependencyObjectNumber` |  | |  | `knobj` |  |  |
| `ObjectType` |  | |  | `objty` |  |  |
| `IsClassificationRelevant` |  | |  | `kzclb` |  |  |
| `IsBulkMaterial` |  | |  | `schgt` |  |  |
| `BOMItemIsSparePart` |  | |  | `erskz` |  |  |
| `BOMItemIsSalesRelevant` |  | |  | `rvrel` |  |  |
| `IsProductionRelevant` |  | |  | `sanfe` |  |  |
| `BOMItemIsPlantMaintRelevant` |  | |  | `sanin` |  |  |
| `BOMItemIsCostingRelevant` |  | |  | `sanka` |  |  |
| `IsEngineeringRelevant` |  | |  | `sanko` |  |  |
| `SpecialProcurementType` |  | |  | `itsob` |  |  |
| `IsBOMRecursiveAllowed` |  | |  | `rekrs` |  |  |
| `OperationLeadTimeOffset` |  | |  | `nlfzv` |  |  |
| `OpsLeadTimeOffsetUnit` |  | |  | `nlfmv` |  |  |
| `IsMaterialProvision` |  | |  | `beikz` |  |  |
| `BOMIsRecursive` |  | |  | `rekri` |  |  |
| `DocumentIsCreatedByCAD` |  | |  | `cadpo` |  |  |
| `DistrKeyCompConsumption` |  | |  | `verti` |  |  |
| `DeliveryDurationInDays` |  | |  | `lifzt` |  |  |
| `Creditor` |  | |  | `lifnr` |  |  |
| `CostElement` |  | |  | `sakto` |  |  |
| `Size1` |  | |  | `roms1` |  |  |
| `Size2` |  | |  | `roms2` |  |  |
| `Size3` |  | |  | `roms3` |  |  |
| `UnitOfMeasureForSize1To3` |  | |  | `romei` |  |  |
| `GoodsReceiptDuration` |  | |  | `webaz` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `RequiredComponent` |  | |  | `clobk` |  |  |
| `MultipleSelectionAllowed` |  | |  | `clmul` |  |  |
| `ProdOrderIssueLocation` |  | |  | `lgort` |  |  |
| `MaterialIsCoProduct` |  | |  | `kzkup` |  |  |
| `ExplosionType` |  | |  | `dspst` |  |  |
| `FollowUpGroup` |  | |  | `nfgrp` |  |  |
| `DiscontinuationGroup` |  | |  | `nfeag` |  |  |
| `ReinsurContrOrgUnit` |  | |  | `cview` |  |  |
| `IsConfigurableBOM` |  | |  | `awakz` |  |  |
| `ReferencePoint` |  | |  | `rfpnt` |  |  |
| `LeadTimeOffset` |  | |  | `nlfzt` |  |  |
| `IsSoftwareComponent` |  | |  | `sfwind` |  |  |
| `ProductionSupplyArea` |  | |  | `prvbe` |  |  |
| `IsDeleted` |  | |  | `lkenz` |  |  |
| `IsALE` |  | |  | `alekz` |  |  |
| `AlternativeItemGroup` |  | |  | `alpgr` |  |  |
| `AlternativeItemPriority` |  | |  | `alprf` |  |  |
| `AlternativeItemStrategy` |  | |  | `alpst` |  |  |
| `UsageProbabilityPercent` |  | |  | `ewahr` |  |  |
| `_BOMItemCategory` | | ✓ | | | | |
| `_BOMItemCategoryText` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_DocumentText` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

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
