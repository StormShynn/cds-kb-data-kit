---
name: I_PRODUCTPLANTCOSTING
description: Productplantcosting
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTCOSTING

**Productplantcosting**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Costing.Product` |
| key `Plant` | `Costing.Plant` |
| `IsCoProduct` | `Costing.IsCoProduct` |
| `CostingLotSize` | `Costing.CostingLotSize` |
| `TaskListGroup` | `Costing.TaskListGroup` |
| `TaskListType` | `Costing.TaskListType` |
| `CostingSpecialProcurementType` | `Costing.CostingSpecialProcurementType` |
| `SourceBOMAlternative` | `Costing.SourceBOMAlternative` |
| `ProductBOMUsage` | `Costing.ProductBOMUsage` |
| `ProductIsCostingRelevant` | `Costing.ProductIsCostingRelevant` |
| `TaskListGroupCounter` | `Costing.TaskListGroupCounter` |
| `VarianceKey` | `Costing.VarianceKey` |
| `CostingProductionVersion` | `Costing.CostingProductionVersion` |
| `IsFixedPriceCoProduct` | `Costing.IsFixedPriceCoProduct` |
| `BaseUnit` | `_Product.BaseUnit` |
| `_Product` | *Association* |
| `_BillOfMaterialUsageText` | *Association* |
| `_ProductDescription` | *Association* |
| `_BaseUnitOfMeasureText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdPlantCostingExt` | `E_Productplant` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_BillOfMaterialUsageText` | `I_BillOfMaterialUsageText` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLNTCOSTNG',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Plant Costing'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture :{
          mapping: [{ viewElement: ['PRODUCT', 'PLANT'],
                      role: #MAIN,
                      table: 'MARC',
                      tableElement: ['MATNR', 'WERKS']},
                    { viewElement: ['PRODUCT'],
                      role: #LEFT_OUTER_TO_ONE_JOIN,
                      table: 'MARA',
                      tableElement: ['MATNR']}
                    ]
           }
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name:'ProductPlantCosting'

define view I_ProductPlantCosting
  as select from P_ProductPlantBasic as Costing
  association [0..1] to E_Productplant  as _ProdPlantCostingExt on  $projection.Product = _ProdPlantCostingExt.Product
                                                                and $projection.Plant   = _ProdPlantCostingExt.Plant

  association [1..1] to I_Product       as _Product             on  $projection.Product = _Product.Product
  association [0..*] to I_BillOfMaterialUsageText as _BillOfMaterialUsageText on $projection.ProductBOMUsage = _BillOfMaterialUsageText.BillOfMaterialVariantUsage
  association [0..*] to I_ProductDescription_2    as _ProductDescription      on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_UnitOfMeasureText       as _BaseUnitOfMeasureText   on  $projection.baseunit = _BaseUnitOfMeasureText.UnitOfMeasure
  
{
  key Costing.Product,
  key Costing.Plant,
      Costing.IsCoProduct,

      // New fields from MDG model, as part of unified API development
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Costing.CostingLotSize,
      Costing.TaskListGroup,
      @ObjectModel.sapObjectNodeTypeReference:'BillOfOperationsType'
      Costing.TaskListType,
      @ObjectModel.sapObjectNodeTypeReference:'ProcurementSubType'
      Costing.CostingSpecialProcurementType,
      Costing.SourceBOMAlternative,
      Costing.ProductBOMUsage,
      Costing.ProductIsCostingRelevant,
      Costing.TaskListGroupCounter,
      Costing.VarianceKey,
      Costing.CostingProductionVersion,
      Costing.IsFixedPriceCoProduct,
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      _Product.BaseUnit,
      _Product,
      _Product._BaseUnitOfMeasure,
      _BillOfMaterialUsageText,
      _ProductDescription,
      _BaseUnitOfMeasureText
}
```
