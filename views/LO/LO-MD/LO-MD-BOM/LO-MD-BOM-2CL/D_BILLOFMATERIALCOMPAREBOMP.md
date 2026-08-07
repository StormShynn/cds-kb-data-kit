---
name: D_BILLOFMATERIALCOMPAREBOMP
description: D Bill of MaterialCOMPAREBOMP
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
# D_BILLOFMATERIALCOMPAREBOMP

**D Bill of MaterialCOMPAREBOMP**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `matnr` |  | |  | `key MaterialPrimary : matnr` |  |  |
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
| `PrimBOMHdrBaseUoM` |  | |  | `meins` |  |  |
| `BOMPrimaryComponentRequiredQty` |  | |  | `emeng` |  |  |
| `BOMSecondaryCompRequiredQty` |  | |  | `emeng` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameters for BOM Comparison'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE      
 }   
define abstract entity D_BillOfMaterialCompareBOMP
{
//      @Consumption.valueHelpDefinition: [
//      { entity                       :  { name:    'I_MaterialStdVH',
//                   element           : 'Material' }
//      }]
  key MaterialPrimary                : matnr;
      @Consumption.valueHelpDefinition: [
      { entity                       :  { name:    'I_PlantStdVH',
               element               : 'Plant' }
      }]
      PlantPrimary                   : werks_d;
//     @Consumption.valueHelpDefinition: [
//          { entity                   :  { name:    'I_BillOfMaterialUsage',
//                     element         : 'BillOfMaterialVariantUsage' }
//          }]
      BOMVariantUsagePrimary         : stlan;
      BOMVariantPrimary              : stalt;
      BOMVersionPrimary              : cs_versn;
      @Semantics.businessDate.from   : true
      PrimBOMValidityDate            : datuv;
      @Consumption.valueHelpDefinition: [
          { entity                   :  { name:    'I_ChangeMasterVH',
                       element       : 'ChangeNumber' }
          }]
      ChangeNumberPrimary            : aennr;
//      @Consumption.valueHelpDefinition: [
//      { entity                       :  { name:    'I_MaterialStdVH',
//                 element             : 'Material' }
//      }]
      MaterialSecondary              : matnr;
      @Consumption.valueHelpDefinition: [
      { entity                       :  { name:    'I_PlantStdVH',
               element               : 'Plant' }
      }]
      PlantSecondary                 : werks_d;
//      @Consumption.valueHelpDefinition: [
//          { entity                   :  { name:    'I_BillOfMaterialUsage',
//                     element         : 'BillOfMaterialVariantUsage' }
//          }]
      BOMVariantUsageSecondary       : stlan;
      BOMVariantSecondary            : stalt;
      BOMVersionSecondary            : cs_versn;
      @Semantics.businessDate.from   : true
      SecondaryBOMValidityDate       : datuv;
      @Consumption.valueHelpDefinition: [
          { entity                   :  { name:    'I_ChangeMasterVH',
                       element       : 'ChangeNumber' }
          }]
      ChangeNumberSecondary          : aennr;
      ComparisonFieldsDesc           : cs_comparison_fields;
      BOMComparisonIsType            : cs_comparison_type;
      BOMTypeOfPrimBOMValue          : cs_bom_type_primary;
      BOMTypeOfSecdryBOMValue        : cs_bom_type_secondary;
//      @Consumption.valueHelpDefinition: [
//            { entity                 :  { name:    'I_BOMExplosionApplication',
//                         element     : 'BOMExplosionApplication' }
//            }]
      BOMExplsnApplPrimBOMValue      : capid;
//      @Consumption.valueHelpDefinition: [
//            { entity                 :  { name:    'I_BOMExplosionApplication',
//                         element     : 'BOMExplosionApplication' }
//            }]
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
}
```
