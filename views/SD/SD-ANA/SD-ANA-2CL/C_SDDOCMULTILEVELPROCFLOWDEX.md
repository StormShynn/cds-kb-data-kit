---
name: C_SDDOCMULTILEVELPROCFLOWDEX
description: Sddocmultilevelprocflowdex
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# C_SDDOCMULTILEVELPROCFLOWDEX

**Sddocmultilevelprocflowdex**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DocRelationshipUUID` | `DocRelationshipUUID` |
| `PrecedingDocument` | `PrecedingDocument` |
| `PrecedingDocumentItem` | `PrecedingDocumentItem` |
| `PrecedingDocumentCategory` | `PrecedingDocumentCategory` |
| `SubsequentDocument` | `SubsequentDocument` |
| `SubsequentDocumentItem` | `SubsequentDocumentItem` |
| `SubsequentDocumentCategory` | `SubsequentDocumentCategory` |
| `ProcessFlowLevel` | `ProcessFlowLevel` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `QuantityInBaseUnit` | `QuantityInBaseUnit` |
| `RefQuantityInOrdQtyUnitAsFloat` | `RefQuantityInOrdQtyUnitAsFloat` |
| `RefQuantityInBaseUnitAsFloat` | `RefQuantityInBaseUnitAsFloat` |
| `BaseUnit` | `BaseUnit` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `SDFulfillmentCalculationRule` | `SDFulfillmentCalculationRule` |
| `NetAmount` | `NetAmount` |
| `StatisticsCurrency` | `StatisticsCurrency` |
| `TransferOrderInWrhsMgmtIsConfd` | `TransferOrderInWrhsMgmtIsConfd` |
| `WarehouseNumber` | `WarehouseNumber` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `BillingPlan` | `BillingPlan` |
| `BillingPlanItem` | `BillingPlanItem` |
| `_BaseUnit` | *Association* |
| `_OrderQuantityUnit` | *Association* |
| `_StatisticsCurrency` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocRelationshipUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'SalesDocument'
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbfa', role: #MAIN,
                    viewElement: ['DocRelationshipUUID'],
                    tableElement: ['ruuid']
                }               
            ]
        }
    }
 }
 
@AbapCatalog.sqlViewName: 'CSDMLPROCFLOWDEX'
@EndUserText.label: 'Data Extraction for Multi-Level Process Flow'




define view C_SDDocMultiLevelProcFlowDEX
    as select from I_SDDocumentMultiLevelProcFlow
 
{
      //Key
  key  DocRelationshipUUID,

      //Preceding
      PrecedingDocument,
      PrecedingDocumentItem,
      PrecedingDocumentCategory,

      //Subsequent
      SubsequentDocument,
      SubsequentDocumentItem,
      SubsequentDocumentCategory,

      //Process Flow Level
      ProcessFlowLevel,

      //Admin
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Quantity of subsequent document
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      RefQuantityInOrdQtyUnitAsFloat,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RefQuantityInBaseUnitAsFloat,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      SDFulfillmentCalculationRule,

      //Pricing of subsequent document
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'StatisticsCurrency'
      NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,

      //Pick Pack Load
      TransferOrderInWrhsMgmtIsConfd,

      // Delivery related fields
      WarehouseNumber,
      MaterialDocumentYear,

      // Billing Plan related fields
      BillingPlan,
      BillingPlanItem,

      _BaseUnit,
      _OrderQuantityUnit,
      _StatisticsCurrency
}
```
