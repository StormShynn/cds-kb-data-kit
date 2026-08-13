---
name: D_BOMCOMPAREBOMCOMPONENTSP
description: "D Bomcomparebomcomponentsp"
semantic_vi: "View này hiển thị dữ liệu so sánh BOM, bao gồm các thành phần BOM chính và phụ, cho việc sử dụng trong logistics và quản lý vật liệu."
keywords:
  - "bom"
  - "component"
  - "logistics"
  - "material management"
  - "sap"
  - "cds view"
  - "bom comparison"
  - "lo"
  - "lo-md"
  - "lo-md-bom"
  - "lob:logistics general"
semantic_en: "This view exposes BOM comparison data, including primary and secondary BOM components, for use in logistics and material management."
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
# D_BOMCOMPAREBOMCOMPONENTSP

**D Bomcomparebomcomponentsp**

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
| `BOMComparisonIsType` |  | |  | `cs_comparison_type` |  |  |
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
| `BillOfMaterialComponent` |  | |  | `idnrk` |  |  |
| `BOMComparisonIsSummarized` |  | |  | `lkenz` |  |  |
| `BOMItemNumberPrimary` |  | |  | `sposn` |  |  |
| `BOMItemNumberSecondary` |  | |  | `sposn` |  |  |
| `PrimBOMHdrBaseUoM` |  | |  | `meins` |  |  |
| `BOMPrimaryComponentRequiredQty` |  | |  | `emeng` |  |  |
| `BOMSecondaryCompRequiredQty` |  | |  | `emeng` |  |  |
| `PrimBOMComponentLevelValue` |  | |  | `stufe` |  |  |
| `PrimaryBOMValue` |  | |  | `stnum` |  |  |
| `BOMNmbrNextLevelPrimBOMValue` |  | |  | `stnum` |  |  |
| `SecdryBOMComponentLevelValue` |  | |  | `stufe` |  |  |
| `SecondaryBOMValue` |  | |  | `stnum` |  |  |
| `BOMNmbrNextLevelSecdryBOMValue` |  | |  | `stnum` |  |  |
| `PrimaryBOMComponentIndexValue` |  | |  | `sytabix` |  |  |
| `SecdryBOMComponentIndexValue` |  | |  | `sytabix` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameters for BOM Comparison details'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE             
 }   
define abstract entity D_BOMCompareBOMComponentsP
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
  BOMComparisonIsType            : cs_comparison_type;
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
  BillOfMaterialComponent        : idnrk;
  BOMComparisonIsSummarized      : lkenz;
  BOMItemNumberPrimary           : sposn;
  BOMItemNumberSecondary         : sposn;
  PrimBOMHdrBaseUoM              : meins;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMPrimaryComponentRequiredQty : emeng;
  @Semantics.quantity.unitOfMeasure : 'PrimBOMHdrBaseUoM'
  BOMSecondaryCompRequiredQty    : emeng;
  PrimBOMComponentLevelValue     : stufe;
  PrimaryBOMValue                : stnum;
  BOMNmbrNextLevelPrimBOMValue   : stnum;
  SecdryBOMComponentLevelValue   : stufe;
  SecondaryBOMValue              : stnum;
  BOMNmbrNextLevelSecdryBOMValue : stnum;
  PrimaryBOMComponentIndexValue  : sytabix;
  SecdryBOMComponentIndexValue   : sytabix;
}
```
