---
name: D_BILLOFMATERIALCOMPAREBOMR
description: D Bill of MaterialCOMPAREBOMR
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
  - material
  - bill-of-material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BILLOFMATERIALCOMPAREBOMR

**D Bill of MaterialCOMPAREBOMR**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOMCompareUUID` |  | |  | `guid` |  |  |
| `BOMComponentPrimary` |  | |  | `idnrk` |  |  |
| `BOMComponentSecondary` |  | |  | `idnrk` |  |  |
| `BOMComparisonResult` |  | |  | `bom_comp_result` |  |  |
| `MaterialTypePrimary` |  | |  | `mtart` |  |  |
| `MaterialTypeSecondary` |  | |  | `mtart` |  |  |
| `PrimBOMItemQuantity` |  | |  | `kmpmg` |  |  |
| `SecdryBOMItemQuantity` |  | |  | `kmpmg` |  |  |
| `BOMItemCategoryPrimary` |  | |  | `postp` |  |  |
| `ItemCategorySecdryBOMValue` |  | |  | `postp` |  |  |
| `BOMItemNumberPrimary` |  | |  | `sposn` |  |  |
| `BOMItemNumberSecondary` |  | |  | `sposn` |  |  |
| `CompleteMaintStatusPrimary` |  | |  | `vpsta` |  |  |
| `CompleteMaintStatusSecondary` |  | |  | `vpsta` |  |  |
| `BOMItemDescriptionPrimary` |  | |  | `maktx` |  |  |
| `BOMItemDescriptionSecondary` |  | |  | `maktx` |  |  |
| `PrimBOMHdrBaseUoM` |  | |  | `meins` |  |  |
| `BOMHeaderBaseUnitSecondary` |  | |  | `meins` |  |  |
| `BOMItemUnitPrimary` |  | |  | `kmpme` |  |  |
| `BOMItemUnitSecondary` |  | |  | `kmpme` |  |  |
| `IsProductionRelevantPrimary` |  | |  | `sanfe` |  |  |
| `IsProductionRelevantSecondary` |  | |  | `sanfe` |  |  |
| `PrimBOMItemIsCostingRelevant` |  | |  | `cs_sanka` |  |  |
| `SecdryBOMItemIsCostingRelevant` |  | |  | `cs_sanka` |  |  |
| `PrimaryBOMHeaderIsDeleted` |  | |  | `lkenz` |  |  |
| `SecondaryBOMHeaderIsDeleted` |  | |  | `lkenz` |  |  |
| `SpclProcurementTypeSecdryBOM` |  | |  | `cs_sobsl` |  |  |
| `PrimBOMIsMaterialConfigurable` |  | |  | `kzkfg` |  |  |
| `PrimaryBOMIsMaterialProvision` |  | |  | `beikz` |  |  |
| `IsCADPrimary` |  | |  | `cadpo` |  |  |
| `LeadTimeOffsetPrimBOMValue` |  | |  | `nlfzt` |  |  |
| `PrimaryBOMPurchasingGroupValue` |  | |  | `ekgrp` |  |  |
| `DeliveryTimeInDaysPrimBOM` |  | |  | `lifzt` |  |  |
| `PrimaryBOMSupplier` |  | |  | `lifnr` |  |  |
| `PrimaryBOMItemPrice` |  | |  | `cprei` |  |  |
| `PrimaryBOMItemPriceUnits` |  | |  | `waers` |  |  |
| `NmbrVarblSizeItemPrimBOMQty` |  | |  | `roanz` |  |  |
| `Size1PrimaryBOMQuantity` |  | |  | `roms1` |  |  |
| `Size2PrimaryBOMQuantity` |  | |  | `roms2` |  |  |
| `Size3PrimaryBOMQuantity` |  | |  | `roms3` |  |  |
| `PrimBOMVarblSizeItemQuantity` |  | |  | `romen` |  |  |
| `PrimaryBOMFormulaKeyValue` |  | |  | `rform` |  |  |
| `GoodsReceiptDurationInPrimBOM` |  | |  | `webaz` |  |  |
| `MaterialGroupPrimaryBOM` |  | |  | `matkl` |  |  |
| `PrimBOMSpecialProcurementType` |  | |  | `cs_sobsl` |  |  |
| `SecdryBOMMatlIsConfigurable` |  | |  | `kzkfg` |  |  |
| `SecdryBOMIsMaterialProvision` |  | |  | `beikz` |  |  |
| `SecondaryBOMIsCAD` |  | |  | `cadpo` |  |  |
| `LeadTimeOffsetSecdryBOMValue` |  | |  | `nlfzt` |  |  |
| `SecdryBOMPurchasingGroupValue` |  | |  | `ekgrp` |  |  |
| `DeliveryTimeInDaysSecdryBOM` |  | |  | `lifzt` |  |  |
| `SecondaryBOMSupplierValue` |  | |  | `lifnr` |  |  |
| `SecondaryBOMItemPrice` |  | |  | `cprei` |  |  |
| `SecdryBOMItemPriceUnit` |  | |  | `waers` |  |  |
| `NmbrVarblSizeItemSecdryBOMQty` |  | |  | `roanz` |  |  |
| `Size1SecondaryQuantity` |  | |  | `roms1` |  |  |
| `Size2SecondaryQuantity` |  | |  | `roms2` |  |  |
| `Size3SecondaryQuantity` |  | |  | `roms3` |  |  |
| `SecdryBOMVarblSizeItemQuantity` |  | |  | `romen` |  |  |
| `SecondaryBOMFormulaKeyValue` |  | |  | `rform` |  |  |
| `GoodsReceiptDurationSecdryBOM` |  | |  | `webaz` |  |  |
| `MaterialGroupSecondaryBOM` |  | |  | `matkl` |  |  |
| `PrimBOMComponentLevelValue` |  | |  | `stufe` |  |  |
| `SecdryBOMComponentLevelValue` |  | |  | `stufe` |  |  |
| `CompDiffInBOMComparisonQty` |  | |  | `kmpmg` |  |  |
| `PrimBOMParentCompValue` |  | |  | `matnr` |  |  |
| `SecdryBOMParentCompValue` |  | |  | `matnr` |  |  |
| `BOMComparisonIsSummarized` |  | |  | `lkenz` |  |  |
| `PrimaryBOMValue` |  | |  | `stnum` |  |  |
| `BOMNmbrNextLevelPrimBOMValue` |  | |  | `stnum` |  |  |
| `SecondaryBOMValue` |  | |  | `stnum` |  |  |
| `BOMNmbrNextLevelSecdryBOMValue` |  | |  | `stnum` |  |  |
| `ComparisonResultValue` |  | |  | `cs_comparison_result` |  |  |
| `PrimaryBOMComponentIndexValue` |  | |  | `sytabix` |  |  |
| `SecdryBOMComponentIndexValue` |  | |  | `sytabix` |  |  |
| `BOMItemCategoryPrimaryDesc` |  | |  | `pttxt` |  |  |
| `BOMItemCategorySecondaryDesc` |  | |  | `pttxt` |  |  |

## Source Code

```abap
@EndUserText.label: 'Result of a Bill of Material Comparison'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE              
 }   
define abstract entity D_BillOfMaterialCompareBOMR
{
  BOMCompareUUID                 : guid;
  BOMComponentPrimary            : idnrk;
  BOMComponentSecondary          : idnrk;
  BOMComparisonResult            : bom_comp_result;
  MaterialTypePrimary            : mtart;
  MaterialTypeSecondary          : mtart;
  @Semantics.quantity.unitOfMeasure : 'BOMItemUnitPrimary'
  PrimBOMItemQuantity            : kmpmg;
  @Semantics.quantity.unitOfMeasure : 'BOMItemUnitSecondary'
  SecdryBOMItemQuantity          : kmpmg;
  BOMItemCategoryPrimary         : postp;
  ItemCategorySecdryBOMValue     : postp;
  BOMItemNumberPrimary           : sposn;
  BOMItemNumberSecondary         : sposn;
  CompleteMaintStatusPrimary     : vpsta;
  CompleteMaintStatusSecondary   : vpsta;
  BOMItemDescriptionPrimary      : maktx;
  BOMItemDescriptionSecondary    : maktx;
  PrimBOMHdrBaseUoM              : meins;
  BOMHeaderBaseUnitSecondary     : meins;
  BOMItemUnitPrimary             : kmpme;
  BOMItemUnitSecondary           : kmpme;
  IsProductionRelevantPrimary    : sanfe;
  IsProductionRelevantSecondary  : sanfe;
  PrimBOMItemIsCostingRelevant   : cs_sanka;
  SecdryBOMItemIsCostingRelevant : cs_sanka;
  PrimaryBOMHeaderIsDeleted      : lkenz;
  SecondaryBOMHeaderIsDeleted    : lkenz;
  SpclProcurementTypeSecdryBOM   : cs_sobsl;
  PrimBOMIsMaterialConfigurable  : kzkfg;
  PrimaryBOMIsMaterialProvision  : beikz;
  IsCADPrimary                   : cadpo;
  LeadTimeOffsetPrimBOMValue     : nlfzt;
  PrimaryBOMPurchasingGroupValue : ekgrp;
  DeliveryTimeInDaysPrimBOM      : lifzt;
  PrimaryBOMSupplier             : lifnr;
  @Semantics.amount.currencyCode : 'PrimaryBOMItemPriceUnits'
  PrimaryBOMItemPrice            : cprei;
  PrimaryBOMItemPriceUnits       : waers;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  NmbrVarblSizeItemPrimBOMQty    : roanz;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  Size1PrimaryBOMQuantity        : roms1;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  Size2PrimaryBOMQuantity        : roms2;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  Size3PrimaryBOMQuantity        : roms3;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  PrimBOMVarblSizeItemQuantity   : romen;
  PrimaryBOMFormulaKeyValue      : rform;
  GoodsReceiptDurationInPrimBOM  : webaz;
  MaterialGroupPrimaryBOM        : matkl;
  PrimBOMSpecialProcurementType  : cs_sobsl;
  SecdryBOMMatlIsConfigurable    : kzkfg;
  SecdryBOMIsMaterialProvision   : beikz;
  SecondaryBOMIsCAD              : cadpo;
  LeadTimeOffsetSecdryBOMValue   : nlfzt;
  SecdryBOMPurchasingGroupValue  : ekgrp;
  DeliveryTimeInDaysSecdryBOM    : lifzt;
  SecondaryBOMSupplierValue      : lifnr;
  @Semantics.amount.currencyCode : 'SecdryBOMItemPriceUnit'
  SecondaryBOMItemPrice          : cprei;
  @Semantics.currencyCode        :true
  SecdryBOMItemPriceUnit         : waers;
  @Semantics.quantity.unitOfMeasure : 'BOMHeaderBaseUnitSecondary'
  NmbrVarblSizeItemSecdryBOMQty  : roanz;
  @Semantics.quantity.unitOfMeasure : 'BOMHeaderBaseUnitSecondary'
  Size1SecondaryQuantity         : roms1;
  @Semantics.quantity.unitOfMeasure : 'BOMHeaderBaseUnitSecondary'
  Size2SecondaryQuantity         : roms2;
  @Semantics.quantity.unitOfMeasure : 'BOMHeaderBaseUnitSecondary'
  Size3SecondaryQuantity         : roms3;
  @Semantics.quantity.unitOfMeasure : 'BOMHeaderBaseUnitSecondary'
  SecdryBOMVarblSizeItemQuantity : romen;
  SecondaryBOMFormulaKeyValue    : rform;
  GoodsReceiptDurationSecdryBOM  : webaz;
  MaterialGroupSecondaryBOM      : matkl;
  PrimBOMComponentLevelValue     : stufe;
  SecdryBOMComponentLevelValue   : stufe;
  @Semantics.quantity.unitOfMeasure : 'BOMItemUnitPrimary'
  CompDiffInBOMComparisonQty     : kmpmg;
  PrimBOMParentCompValue         : matnr;
  SecdryBOMParentCompValue       : matnr;
  BOMComparisonIsSummarized      : lkenz;
  //BOMHeaderRootNodeValue         : matnr;
  PrimaryBOMValue                : stnum;
  BOMNmbrNextLevelPrimBOMValue   : stnum;
  SecondaryBOMValue              : stnum;
  BOMNmbrNextLevelSecdryBOMValue : stnum;
  ComparisonResultValue          : cs_comparison_result;
  PrimaryBOMComponentIndexValue  : sytabix;
  SecdryBOMComponentIndexValue   : sytabix;
  BOMItemCategoryPrimaryDesc     : pttxt;
  BOMItemCategorySecondaryDesc   : pttxt; 
}
```
