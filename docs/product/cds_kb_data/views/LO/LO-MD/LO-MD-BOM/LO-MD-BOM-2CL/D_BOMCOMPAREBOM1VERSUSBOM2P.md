---
name: D_BOMCOMPAREBOM1VERSUSBOM2P
description: "D Bomcomparebom 1VERSUSBOM 2P"
semantic_vi: "View này so sánh hai phiên bản của một BOM (Danh sách vật liệu) cho một vật liệu trong một nhà máy, hiển thị sự khác biệt giữa BOM chính và phụ. Nó được sử dụng để phân tích thay đổi trong BOM theo thời gian."
keywords:
  - "bom"
  - "bill of materials"
  - "danh sách vật liệu"
  - "sự khác biệt"
  - "thay đổi"
  - "lo"
  - "lo-md"
  - "lo-md-bom"
  - "ekko"
  - "logistics general"
semantic_en: "This view compares two versions of a BOM (Bill of Materials) for a material in a plant, showing the differences between the primary and secondary BOMs. It is used to analyze changes in the BOM over time."
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
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMCOMPAREBOM1VERSUSBOM2P

**D Bomcomparebom 1VERSUSBOM 2P**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialPrimary` |  | |  | `matnr` |  |  |
| `PlantPrimary` |  | |  | `werks_d` |  |  |
| `BOMVariantUsagePrimary` |  | |  | `stlan` |  |  |
| `BOMVariantPrimary` |  | |  | `stalt` |  |  |
| `BOMVersionPrimary` |  | |  | `cs_versn` |  |  |
| `PrimBOMValidityDate` |  | |  | `datuv` |  |  |
| `ChangeNumberPrimary` |  | |  | `aennr` |  |  |
| `MaterialSecondary` |  | |  | `matnr` |  |  |
| `PlantSecondary` |  | |  | `werks_d` |  |  |
| `BOMVariantUsageSecondary` |  | |  | `stlan` |  |  |
| `BOMVariantSecondary` |  | |  | `stalt` |  |  |
| `BOMVersionSecondary` |  | |  | `cs_versn` |  |  |
| `SecondaryBOMValidityDate` |  | |  | `datuv` |  |  |
| `ChangeNumberSecondary` |  | |  | `aennr` |  |  |
| `ComparisonFieldsDesc` |  | |  | `cs_comparison_fields` |  |  |
| `BOMTypeOfPrimBOMValue` |  | |  | `cs_bom_type_primary` |  |  |
| `BOMTypeOfSecdryBOMValue` |  | |  | `cs_bom_type_secondary` |  |  |
| `BOMExplsnApplPrimBOMValue` |  | |  | `capid` |  |  |
| `BOMExplsnApplSecdryBOMValue` |  | |  | `capid` |  |  |
| `SalesOrderNmbrPrimBOMValue` |  | |  | `cs_vbeln` |  |  |
| `PrimBOMSalesOrderItemNmbrValue` |  | |  | `cs_vbpos` |  |  |
| `SalesOrderNmbrSecdryBOMValue` |  | |  | `cs_vbeln` |  |  |
| `SalesOrderItemSecdryBOMValue` |  | |  | `cs_vbpos` |  |  |
| `BOMHasAlternativePriority` |  | |  | `altvo` |  |  |
| `BOMObjDependenciesAreCompared` |  | |  | `cs_bzvgl` |  |  |
| `ScrapQuantityIsRequested` |  | |  | `asflg` |  |  |
| `ExplodeBOMLevelValue` |  | |  | `cs_maxst` |  |  |
| `PrimBOMHdrBaseUoM` |  | |  | `meins` |  |  |
| `BOMPrimaryComponentRequiredQty` |  | |  | `emeng` |  |  |
| `BOMSecondaryCompRequiredQty` |  | |  | `emeng` |  |  |
| `BOMIsFirstCompared` |  | |  | `cs_comparison_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameters for BOM1 VS BOM2'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE               
 }   
define abstract entity D_BOMCompareBOM1VersusBOM2P
{
  MaterialPrimary                : matnr;
  PlantPrimary                   : werks_d;
  BOMVariantUsagePrimary         : stlan;
  BOMVariantPrimary              : stalt;
  BOMVersionPrimary              : cs_versn;
  PrimBOMValidityDate            : datuv;
  ChangeNumberPrimary            : aennr;
  MaterialSecondary              : matnr;
  PlantSecondary                 : werks_d;
  BOMVariantUsageSecondary       : stlan;
  BOMVariantSecondary            : stalt;
  BOMVersionSecondary            : cs_versn;
  SecondaryBOMValidityDate       : datuv;
  ChangeNumberSecondary          : aennr;
  ComparisonFieldsDesc           : cs_comparison_fields;
  BOMTypeOfPrimBOMValue          : cs_bom_type_primary;
  BOMTypeOfSecdryBOMValue        : cs_bom_type_secondary;
  BOMExplsnApplPrimBOMValue      : capid;
  BOMExplsnApplSecdryBOMValue    : capid;
  SalesOrderNmbrPrimBOMValue     : cs_vbeln;
  PrimBOMSalesOrderItemNmbrValue : cs_vbpos;
  SalesOrderNmbrSecdryBOMValue   : cs_vbeln;
  SalesOrderItemSecdryBOMValue   : cs_vbpos;
  BOMHasAlternativePriority      : altvo;
  BOMObjDependenciesAreCompared  : cs_bzvgl;
  ScrapQuantityIsRequested       : asflg;
  ExplodeBOMLevelValue           : cs_maxst;
  PrimBOMHdrBaseUoM              : meins;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMPrimaryComponentRequiredQty : emeng;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMSecondaryCompRequiredQty    : emeng;
  BOMIsFirstCompared             : cs_comparison_type;
}
```
