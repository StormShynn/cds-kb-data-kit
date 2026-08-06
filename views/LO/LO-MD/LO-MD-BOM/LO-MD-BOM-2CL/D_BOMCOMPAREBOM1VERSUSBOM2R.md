---
name: D_BOMCOMPAREBOM1VERSUSBOM2R
description: D Bomcomparebom 1VERSUSBOM 2R
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
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMCOMPAREBOM1VERSUSBOM2R

**D Bomcomparebom 1VERSUSBOM 2R**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BOMCompareUUID` | `guid` |
| `BOMComponentPrimary` | `idnrk` |
| `BOMComparisonResult` | `bom_comp_result` |
| `MaterialTypePrimary` | `mtart` |
| `PrimBOMItemQuantity` | `kmpmg` |
| `BOMItemCategoryPrimary` | `postp` |
| `BOMItemNumberPrimary` | `sposn` |
| `CompleteMaintStatusPrimary` | `vpsta` |
| `BOMItemDescriptionPrimary` | `maktx` |
| `PrimBOMHdrBaseUoM` | `meins` |
| `BOMItemUnitPrimary` | `kmpme` |
| `IsProductionRelevantPrimary` | `sanfe` |
| `PrimBOMItemIsCostingRelevant` | `cs_sanka` |
| `PrimaryBOMHeaderIsDeleted` | `lkenz` |
| `PrimBOMIsMaterialConfigurable` | `kzkfg` |
| `PrimaryBOMIsMaterialProvision` | `beikz` |
| `IsCADPrimary` | `cadpo` |
| `LeadTimeOffsetPrimBOMValue` | `nlfzt` |
| `PrimaryBOMPurchasingGroupValue` | `ekgrp` |
| `DeliveryTimeInDaysPrimBOM` | `lifzt` |
| `PrimaryBOMSupplier` | `lifnr` |
| `PrimaryBOMItemPrice` | `cprei` |
| `PrimaryBOMItemPriceUnits` | `waers` |
| `NmbrVarblSizeItemPrimBOMQty` | `roanz` |
| `Size1PrimaryBOMQuantity` | `roms1` |
| `Size2PrimaryBOMQuantity` | `roms2` |
| `Size3PrimaryBOMQuantity` | `roms3` |
| `PrimBOMVarblSizeItemQuantity` | `romen` |
| `PrimaryBOMFormulaKeyValue` | `rform` |
| `GoodsReceiptDurationInPrimBOM` | `webaz` |
| `MaterialGroupPrimaryBOM` | `matkl` |
| `PrimBOMSpecialProcurementType` | `cs_sobsl` |
| `PrimBOMComponentLevelValue` | `stufe` |
| `CompDiffInBOMComparisonQty` | `kmpmg` |
| `PrimBOMParentCompValue` | `matnr` |
| `BOMComparisonIsSummarized` | `lkenz` |
| `PrimaryBOMValue` | `stnum` |
| `BOMNmbrNextLevelPrimBOMValue` | `stnum` |
| `ComparisonResultValue` | `cs_comparison_result` |
| `BOMHdrMatlHierNode` | `matnr` |
| `BOMItemCategoryPrimaryDesc` | `pttxt` |

## Source Code

```abap
@EndUserText.label: 'Result of a BOM1 VS BOM2'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE            
 }   
define abstract entity D_BOMCompareBOM1VersusBOM2R
{
  BOMCompareUUID                 : guid;
  BOMComponentPrimary            : idnrk;
  BOMComparisonResult            : bom_comp_result;
  MaterialTypePrimary            : mtart;
  @Semantics.quantity.unitOfMeasure : 'BOMItemUnitPrimary'
  PrimBOMItemQuantity            : kmpmg;
  BOMItemCategoryPrimary         : postp;
  BOMItemNumberPrimary           : sposn;
  CompleteMaintStatusPrimary     : vpsta;
  BOMItemDescriptionPrimary      : maktx;
  PrimBOMHdrBaseUoM              : meins;
  BOMItemUnitPrimary             : kmpme;
  IsProductionRelevantPrimary    : sanfe;
  PrimBOMItemIsCostingRelevant   : cs_sanka;
  PrimaryBOMHeaderIsDeleted      : lkenz;
  PrimBOMIsMaterialConfigurable  : kzkfg;
  PrimaryBOMIsMaterialProvision  : beikz;
  IsCADPrimary                   : cadpo;
  LeadTimeOffsetPrimBOMValue     : nlfzt;
  PrimaryBOMPurchasingGroupValue : ekgrp;
  DeliveryTimeInDaysPrimBOM      : lifzt;
  PrimaryBOMSupplier             : lifnr;
  @Consumption.valueHelpDefinition: [
  { entity                       :  { name:    'I_Currency',
               element           : 'Currency' }
  }]
  @Semantics.amount.currencyCode : 'PrimaryBOMItemPriceUnits'
  PrimaryBOMItemPrice            : cprei;
  @Semantics.currencyCode        : true
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
  PrimBOMComponentLevelValue     : stufe;
  @Semantics.quantity.unitOfMeasure : 'BOMItemUnitPrimary'
  CompDiffInBOMComparisonQty     : kmpmg;
  PrimBOMParentCompValue         : matnr;
  BOMComparisonIsSummarized      : lkenz;
  PrimaryBOMValue                : stnum;
  BOMNmbrNextLevelPrimBOMValue   : stnum;
  ComparisonResultValue          : cs_comparison_result;
  BOMHdrMatlHierNode             : matnr;
  BOMItemCategoryPrimaryDesc     : pttxt; 
}
```
