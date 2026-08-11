---
name: I_PRODUCTPLANTESPP
description: "This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity"
app_component: SCM-S4H-MD-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value
semantic_en: "This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity"
semantic_vi: "Product Plant ESPP active core entity — CDS view giao diện dựa trên P_ProductPlantBasic."
keywords:
  - "product"
  - "plant"
  - "espp"
  - "active"
  - "core"
  - "entity"
  - "used"
  - "alert"
  - "relevance"
  - "code"
  - "prod"
  - "goods"
  - "receipt"
  - "proc"
  - "hours"
tags:
  - SCM
  - bo:companycode
  - component:SCM-S4H-MD-PR-2CL
  - interface-view
  - plan
  - product
  - SCM-S4H
  - SCM-S4H-MD
  - SCM-S4H-MD-PR
  - SCM-S4H-MD-PR-2CL
  - bo:material
---
# I_PRODUCTPLANTESPP

**This CDS view provides the consumer with list of Extended Service Parts Planning Specific details of the product-plant records. Description: Product Plant ESPP active core entity**

| Property | Value |
|---|---|
| App Component | `SCM-S4H-MD-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  | `CHAR(40)` | Product |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `ESPPIsUsed` |  | |  |  | `CHAR(1)` | Usage in Extended Service Parts Planning |
| `ProductAlertRelevanceCode` |  | |  |  | `CHAR(1)` | Alert Relevance of Product |
| `LocProdGoodsReceiptProcHours` |  | |  |  | `DEC(11)` | Goods Receipt Processing Time |
| `LocProdGoodsIssueProcHours` |  | |  |  | `DEC(11)` | Goods Issue Processing Time |
| `SrvcPartsThroughputTimeDurn` |  | |  |  | `DEC(11)` | Service Parts Throughput Time |
| `ThirdPartyOrderProcessing` |  | |  |  | `CHAR(2)` | Third-Party Order Processing |
| `ParLocSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock at Parent Location |
| `RepairSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Repair Safety Stock |
| `VCLSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock for Virtual Child Location |
| `VCLParLocSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Safety Stock of Parent Location Virtual Child Location |
| `VCLRepairSafetyStockQuantity` |  | |  |  | `QUAN(13)` | Repair Safety Stock for Virtual Child Location |
| `VCLReorderPointQuantity` |  | |  |  | `QUAN(13)` | Reorder Point for Virtual Child Location |
| `VCLMaximumStockQuantity` |  | |  |  | `QUAN(13)` | Maximum Stock Level for Virtual Child Locations |
| `CostFactorForStockHoldingVal` |  | |  |  | `DEC(3)` | Cost Factor for Stockholding Costs |
| `ProductProcurementCostsVal` |  | |  |  | `DEC(13)` | Procurement Costs for Product |
| `GoodsReceiptHandlingCost` |  | |  |  | `DEC(13)` | Goods Receiving Costs |
| `GoodsIssueHandlingCost` |  | |  |  | `DEC(13)` | Goods Issue Costs |
| `BaseUnit` |  | | `_Product` | `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductAlertRelevanceCode` | | ✓ | | | | |
| `_ThirdPartyOrderProcessing` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductAlertRelevanceCode` | `I_ProductAlert` | [0..1] |
| `_ThirdPartyOrderProcessing` | `I_ThirdPartyOrderProcessing` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTPLANTESPP')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'IPRDPLNTESPP',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Plant ESPP active core entity'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory : #XL,
    dataClass: #MASTER
  }
}
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
@ObjectModel.sapObjectNodeType.name:'Product'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #BASIC
/*+[hideWarning] { "IDS" :
 [ "CALCULATED_FIELD_CHECK" ] } */
define view I_ProductPlantESPP
  as select from P_ProductPlantBasic as eSPP
  association [1..1] to I_Product                   as _Product                   on $projection.Product = _Product.Product
  association [1..1] to I_Plant                     as _Plant                     on $projection.Plant = _Plant.Plant

  association [0..1] to I_ProductAlert              as _ProductAlertRelevanceCode on $projection.ProductAlertRelevanceCode = _ProductAlertRelevanceCode.ProductAlert
  association [0..1] to I_ThirdPartyOrderProcessing as _ThirdPartyOrderProcessing on $projection.ThirdPartyOrderProcessing = _ThirdPartyOrderProcessing.ThirdPartyOrderProcessing

{
      @ObjectModel.foreignKey.association: '_Product'
  key eSPP.Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key eSPP.Plant,
      eSPP.ESPPIsUsed,
      @ObjectModel.foreignKey.association: '_ProductAlertRelevanceCode'
      eSPP.ProductAlertRelevanceCode,
      eSPP.LocProdGoodsReceiptProcHours,
      eSPP.LocProdGoodsIssueProcHours,
      eSPP.SrvcPartsThroughputTimeDurn,
      @ObjectModel.foreignKey.association: '_ThirdPartyOrderProcessing'
      eSPP.ThirdPartyOrderProcessing,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.ParLocSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.RepairSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.VCLSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.VCLParLocSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.VCLRepairSafetyStockQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.VCLReorderPointQuantity,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eSPP.VCLMaximumStockQuantity,
      eSPP.CostFactorForStockHoldingVal,
      eSPP.ProductProcurementCostsVal,
      eSPP.GoodsReceiptHandlingCost,
      eSPP.GoodsIssueHandlingCost,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      _Product.BaseUnit as BaseUnit,
      _Product,
      _Plant,
      _ProductAlertRelevanceCode,
      _ThirdPartyOrderProcessing,
      _Product._BaseUnitOfMeasure
}
```
