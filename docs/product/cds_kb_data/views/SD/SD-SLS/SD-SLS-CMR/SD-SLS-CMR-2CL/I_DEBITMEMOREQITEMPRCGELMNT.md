---
name: I_DEBITMEMOREQITEMPRCGELMNT
description: "Debitmemoreqitemprcgelmnt"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQITEMPRCGELMNT

**Debitmemoreqitemprcgelmnt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  | `cast(SalesDocument as debit_memo_request preserving type)` |  |  |
| `DebitMemoRequestItem` | ✓ | |  | `cast(SalesDocumentItem as debit_memo_request_item preserving type)` |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `PricingDateTime` |  | |  |  |  |  |
| `PriceConditionDeterminationDte` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionBaseValue` |  | |  |  |  |  |
| `ConditionRateValue` |  | |  |  |  |  |
| `ConditionCurrency` |  | |  |  |  |  |
| `ConditionQuantity` |  | |  |  |  |  |
| `ConditionQuantityUnit` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `IsRelevantForAccrual` |  | |  |  |  |  |
| `CndnIsRelevantForInvoiceList` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `IsGroupCondition` |  | |  |  |  |  |
| `ConditionRecord` |  | |  |  |  |  |
| `ConditionSequentialNumber` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `WithholdingTaxCode` |  | |  |  |  |  |
| `CndnRoundingOffDiffAmount` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionControl` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `PrcgProcedureCounterForHeader` |  | |  |  |  |  |
| `FactorForConditionBasisValue` |  | |  |  |  |  |
| `StructureCondition` |  | |  |  |  |  |
| `PeriodFactorForCndnBasisValue` |  | |  |  |  |  |
| `PricingScaleBasis` |  | |  |  |  |  |
| `ConditionScaleBasisValue` |  | |  |  |  |  |
| `ConditionScaleBasisUnit` |  | |  |  |  |  |
| `ConditionScaleBasisCurrency` |  | |  |  |  |  |
| `CndnIsRelevantForIntcoBilling` |  | |  |  |  |  |
| `ConditionIsManuallyChanged` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ConditionRateAmount` |  | |  |  |  |  |
| `ConditionRateRatio` |  | |  |  |  |  |
| `ConditionRateRatioUnit` |  | |  |  |  |  |
| `ConditionBaseAmount` |  | |  |  |  |  |
| `ConditionBaseQuantity` |  | |  |  |  |  |
| `_DebitMemoRequest` | | ✓ | | | | |
| `_DebitMemoRequestItem` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |
| `_PricingConditionType` | | ✓ | | | | |
| `_ConditionCalculationType` | | ✓ | | | | |
| `_ConditionCurrency` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_ConditionQuantityUnit` | | ✓ | | | | |
| `_ConditionCategory` | | ✓ | | | | |
| `_ConditionOrigin` | | ✓ | | | | |
| `_ConditionControl` | | ✓ | | | | |
| `_ConditionInactiveReason` | | ✓ | | | | |
| `_ConditionClass` | | ✓ | | | | |
| `_PricingScaleBasis` | | ✓ | | | | |
| `_ScaleUnitOfMeasure` | | ✓ | | | | |
| `_ScaleCurrency` | | ✓ | | | | |
| `_VariantCondition` | | ✓ | | | | |
| `_StructureCondition` | | ✓ | | | | |
| `_ConditionRateRatioUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DebitMemoRequest` | `I_DebitMemoRequest` | [1..1] |
| `_DebitMemoRequestItem` | `I_DebitMemoRequestItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Debit Memo Request Item Pricing Element'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSDMRITMPREL',
  compiler.compareFilter: true
}
@AbapCatalog.preserveKey:true
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
   
}
@Metadata.ignorePropagatedAnnotations: true

define view I_DebitMemoReqItemPrcgElmnt as select from I_SalesDocItemPricingElement       as PricingElement

    association[1..1] to I_DebitMemoRequest       as _DebitMemoRequest      on  $projection.DebitMemoRequest     = _DebitMemoRequest.DebitMemoRequest
    association[1..1] to I_DebitMemoRequestItem   as _DebitMemoRequestItem  on  $projection.DebitMemoRequest     = _DebitMemoRequestItem.DebitMemoRequest  
                                                                            and $projection.DebitMemoRequestItem = _DebitMemoRequestItem.DebitMemoRequestItem  

{
      @ObjectModel.foreignKey.association: '_DebitMemoRequest'                                                                                                   
  key cast(SalesDocument as debit_memo_request preserving type) as DebitMemoRequest,  
      @ObjectModel.foreignKey.association: '_DebitMemoRequestItem'                                                                                                   
  key cast(SalesDocumentItem as debit_memo_request_item preserving type) as DebitMemoRequestItem,   
  key PricingProcedureStep,
  key PricingProcedureCounter, 
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      ConditionApplication, 
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      ConditionType,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PriceConditionDeterminationDte'
      PricingDateTime,
      PriceConditionDeterminationDte,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      ConditionCalculationType,
      ConditionBaseValue,
      ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      ConditionCurrency,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      ConditionCategory,
      ConditionIsForStatistics,
      PricingScaleType,
      IsRelevantForAccrual,
      CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      ConditionOrigin,
      IsGroupCondition,
      ConditionRecord,
      ConditionSequentialNumber,
      TaxCode,
      WithholdingTaxCode,
      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CndnRoundingOffDiffAmount,
      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionControl'
      ConditionControl,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      ConditionInactiveReason,
      @ObjectModel.foreignKey.association: '_ConditionClass'
      ConditionClass,
      PrcgProcedureCounterForHeader,
      FactorForConditionBasisValue,
      @ObjectModel.foreignKey.association: '_StructureCondition'
      StructureCondition,
      PeriodFactorForCndnBasisValue,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingScaleBasis,
      ConditionScaleBasisValue,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      ConditionScaleBasisUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      ConditionScaleBasisCurrency,
      CndnIsRelevantForIntcoBilling,
      ConditionIsManuallyChanged,
      ConditionIsForConfiguration,
      VariantCondition,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionBaseQuantity,   
      
      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
      _DebitMemoRequest,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
      _DebitMemoRequestItem, 
      _ConditionApplication,
      _PricingConditionType,
      _ConditionCalculationType,
      _ConditionCurrency,
      _Currency, 
      _ConditionQuantityUnit,
      _ConditionCategory,
      _ConditionOrigin,
      _ConditionControl,
      _ConditionInactiveReason,
      _ConditionClass,
      _PricingScaleBasis,
      _ScaleUnitOfMeasure, 
      _ScaleCurrency, 
      _VariantCondition,
      _StructureCondition,
      _ConditionRateRatioUnit

}
where SDDocumentCategory = 'L';
```
