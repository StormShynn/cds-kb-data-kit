---
name: C_SDDOCMULTILEVELPROCFLOWDEX
description: "Sddocmultilevelprocflowdex"
app_component: SD-ANA-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocRelationshipUUID` | ✓ | |  |  |  |  |
| `PrecedingDocument` |  | |  |  |  |  |
| `PrecedingDocumentItem` |  | |  |  |  |  |
| `PrecedingDocumentCategory` |  | |  |  |  |  |
| `SubsequentDocument` |  | |  |  |  |  |
| `SubsequentDocumentItem` |  | |  |  |  |  |
| `SubsequentDocumentCategory` |  | |  |  |  |  |
| `ProcessFlowLevel` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `QuantityInBaseUnit` |  | |  |  |  |  |
| `RefQuantityInOrdQtyUnitAsFloat` |  | |  |  |  |  |
| `RefQuantityInBaseUnitAsFloat` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `SDFulfillmentCalculationRule` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `TransferOrderInWrhsMgmtIsConfd` |  | |  |  |  |  |
| `WarehouseNumber` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `BillingPlanItem` |  | |  |  |  |  |
| `_BaseUnit` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |

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
