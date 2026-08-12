---
name: I_SALESDOCUMENTPRICINGELEMENT
description: "Salesdocumentpricingelement"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - sales-document
  - pricing
  - document
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCUMENTPRICINGELEMENT

**Salesdocumentpricingelement**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
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
| `IsGroupCondition_2` |  | |  |  |  |  |
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
| `SDDocumentCategory` |  | |  |  |  |  |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Sales Document Pricing Element'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSDOCPREL',
  compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDocumentPricingElement 
  as select from I_PricingElement       as PricingElement
    inner join   I_SalesDocumentBasic   as SalesDocument on  PricingElement.PricingDocument        = SalesDocument.SalesDocumentCondition
                                                         and PricingElement.PricingDocumentItem    = '000000'
      
    association[1..1] to I_SalesDocument   as _SalesDocument   on $projection.SalesDocument   = _SalesDocument.SalesDocument
 
{
      @ObjectModel.foreignKey.association: '_SalesDocument'                                                                                                   
  key SalesDocument.SalesDocument,  
  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PriceConditionDeterminationDte'
      PricingElement.PricingDateTime,      
      PricingElement.PriceConditionDeterminationDte,     
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'     
      PricingElement.ConditionCalculationType,
      PricingElement.ConditionBaseValue,
      PricingElement.ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,
      @DefaultAggregation:#NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      PricingElement.ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      PricingElement.ConditionCategory,
      PricingElement.ConditionIsForStatistics,
      PricingElement.PricingScaleType,
      PricingElement.IsRelevantForAccrual,
      PricingElement.CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      PricingElement.ConditionOrigin,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'IsGroupCondition_2'
      PricingElement.IsGroupCondition,
      PricingElement.IsGroupCondition_2,
      PricingElement.ConditionRecord,
      PricingElement.ConditionSequentialNumber,
      PricingElement.TaxCode,
      PricingElement.WithholdingTaxCode,
      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,
      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_Currency'
      PricingElement.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionControl'
      PricingElement.ConditionControl,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      PricingElement.ConditionInactiveReason,
      @ObjectModel.foreignKey.association: '_ConditionClass'
      PricingElement.ConditionClass,
      PricingElement.PrcgProcedureCounterForHeader,
      PricingElement.FactorForConditionBasisValue,
      @ObjectModel.foreignKey.association: '_StructureCondition'
      PricingElement.StructureCondition,
      PricingElement.PeriodFactorForCndnBasisValue,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingElement.PricingScaleBasis,
      PricingElement.ConditionScaleBasisValue,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      PricingElement.ConditionScaleBasisUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      PricingElement.ConditionScaleBasisCurrency,
      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition,
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      PricingElement.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'   
      SalesDocument.SDDocumentCategory,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SalesDocument,
      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,
      PricingElement._StructureCondition,
      PricingElement._ConditionRateRatioUnit,
      SalesDocument._SDDocumentCategory

}
```
