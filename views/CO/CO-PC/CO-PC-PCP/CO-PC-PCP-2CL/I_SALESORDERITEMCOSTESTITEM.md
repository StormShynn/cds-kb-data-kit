---
name: I_SALESORDERITEMCOSTESTITEM
description: Sales OrderITEMCOSTESTITEM
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - sales-order
  - item-level
  - component:CO-PC-PCP-2CL
  - lob:Controlling
  - bo:SalesOrder
---
# I_SALESORDERITEMCOSTESTITEM

**Sales OrderITEMCOSTESTITEM**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CostingReferenceObject` | `CostingReferenceObject` |
| key `CostEstimate` | `CostEstimate` |
| key `CostingType` | `CostingType` |
| key `CostingDate` | `CostingDate` |
| key `CostingVersion` | `CostingVersion` |
| key `ValuationVariant` | `ValuationVariant` |
| key `CostIsEnteredManually` | `CostIsEnteredManually` |
| key `CostingItem` | `CostingItem` |
| `CostingItemCategory` | `CostingItemCategory` |
| `CostElement` | `CostElement` |
| `CostOriginGroup` | `CostOriginGroup` |
| `Plant` | `Plant` |
| `Product` | `Product` |
| `ValuationType` | `ValuationType` |
| `Creditor` | `Creditor` |
| `GlobalCurrency` | `_SalesOrderItemCostEstimate.GlobalCurrency` |
| `TotalPriceInGlobalCurrency` | `cast(TotalPriceInInCtrlgAreaCrcy as fpc_total_price_global_crcy preserving type)` |
| `FixedPriceInGlobalCurrency` | `cast(FixedPriceInCtrlgAreaCrcy as fpc_fixed_price_global_crcy preserving type)` |
| `TotalAmountInGlobalCurrency` | `cast(TotalAmountInCtrlgAreaCrcy as fis_ksl)` |
| `FixedAmountInGlobalCrcy` | `cast(FixedAmountInCtrlgAreaCrcy as fis_kfsl)` |
| `CompanyCodeCurrency` | `CompanyCodeCurrency` |
| `TotalPriceInCompanyCodeCrcy` | `TotalPriceInCompanyCodeCrcy` |
| `FixedPriceInCompanyCodeCrcy` | `FixedPriceInCompanyCodeCrcy` |
| `TotalAmountInCoCodeCrcy` | `TotalAmountInCoCodeCrcy` |
| `FixedAmountInCoCodeCrcy` | `FixedAmountInCoCodeCrcy` |
| `UnitOfMeasure` | `BaseUnit` |
| `Quantity` | `QuantityInBaseUnit` |
| `CostingPriceQtyUnit` | `CostingPriceQtyUnit` |
| `CostingPriceUnitQty` | `CostingPriceUnitQty` |
| `CostingValuationStrategy` | `CostingValuationStrategy` |
| `ProductValnPurgInfoRecdStrgy` | `ProductValnPurgInfoRecdStrgy` |
| `BillOfMaterialItemNumber` | `BillOfMaterialItemNumber` |
| `CostingItemIsAssembly` | `CostingItemIsAssembly` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `CostCenter` | `CostCenter` |
| `ProfitCenter` | `ProfitCenter` |
| `Operation` | `Operation` |
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| `PurchasingDocument` | `PurchasingDocument` |
| `PurchasingDocumentItem` | `PurchasingDocumentItem` |
| `IsLotSizeIndependent` | `IsLotSizeIndependent` |
| `HasError` | `HasError` |
| `TransferCostEstimate` | `TransferCostEstimate` |
| `TransferCostingType` | `TransferCostingType` |
| `TransferCostingDate` | `TransferCostingDate` |
| `TransferCostingVersion` | `TransferCostingVersion` |
| `TransferValuationVariant` | `TransferValuationVariant` |
| `_SalesOrderItemCostEstimate` | *Association* |
| `_CostingType` | *Association* |
| `_CostingVersion` | *Association* |
| `_ValuationVariant` | *Association* |
| `_Product` | *Association* |
| `_GlobalCurrency` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_CostingUnitOfMeasure` | *Association* |
| `_UnitOfMeasure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderItemCostEstimate` | `I_SalesOrderItemCostEstimate` | [1..1] |
| `_CostingType` | `I_CostingType` | [0..1] |
| `_CostingVersion` | `I_CostingVersion` | [0..1] |
| `_ValuationVariant` | `I_CostingValuationVariant` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [1..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_CostingUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}

@ObjectModel: {
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #ANALYTICAL_FACT,
  usageType:{
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@Analytics: {
  dataCategory: #FACT,
  internalName: #LOCAL
  }

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Sales Order Item Cost Estimate Item'

define view entity I_SalesOrderItemCostEstItem
  as select from P_CKIS
  association [1..1] to I_SalesOrderItemCostEstimate as _SalesOrderItemCostEstimate on  $projection.CostingReferenceObject = _SalesOrderItemCostEstimate.CostingReferenceObject
                                                                                    and $projection.CostEstimate           = _SalesOrderItemCostEstimate.CostEstimate
                                                                                    and $projection.CostingType            = _SalesOrderItemCostEstimate.CostingType
                                                                                    and $projection.CostingDate            = _SalesOrderItemCostEstimate.CostingDate
                                                                                    and $projection.CostingVersion         = _SalesOrderItemCostEstimate.CostingVersion
                                                                                    and $projection.ValuationVariant       = _SalesOrderItemCostEstimate.ValuationVariant
                                                                                    and $projection.CostIsEnteredManually  = _SalesOrderItemCostEstimate.CostIsEnteredManually
  association [0..1] to I_CostingType                as _CostingType                on  $projection.CostingType = _CostingType.CostingType
  association [0..1] to I_CostingVersion             as _CostingVersion             on  $projection.CostingVersion   = _CostingVersion.CostingVersion
                                                                                    and $projection.CostingType      = _CostingVersion.CostingType
                                                                                    and $projection.ValuationVariant = _CostingVersion.ValuationVariant
  association [1..1] to I_CostingValuationVariant    as _ValuationVariant           on  $projection.ValuationVariant = _ValuationVariant.ValuationVariant
  association [0..1] to I_Product                    as _Product                    on  $projection.Product = _Product.Product
  association [1..1] to I_Currency                   as _GlobalCurrency             on  $projection.globalcurrency = _GlobalCurrency.Currency
  association [1..1] to I_Currency                   as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure              as _CostingUnitOfMeasure       on  $projection.CostingPriceQtyUnit = _CostingUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure              on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

{
  key   CostingReferenceObject,
  key   CostEstimate,
        @ObjectModel.foreignKey.association: '_CostingType'
  key   CostingType,
        @Semantics.businessDate.at: true
  key   CostingDate,
        @ObjectModel.foreignKey.association: '_CostingVersion'
  key   CostingVersion,
        @ObjectModel.foreignKey.association: '_ValuationVariant'
  key   ValuationVariant,
  key   CostIsEnteredManually,
  key   CostingItem,

        CostingItemCategory,
        CostElement,
        CostOriginGroup,
        Plant,
        @ObjectModel.foreignKey.association: '_Product'
        Product,
        ValuationType,
        Creditor,

        @ObjectModel.foreignKey.association: '_GlobalCurrency'
        _SalesOrderItemCostEstimate.GlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(TotalPriceInInCtrlgAreaCrcy  as fpc_total_price_global_crcy preserving type) as TotalPriceInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(FixedPriceInCtrlgAreaCrcy as  fpc_fixed_price_global_crcy preserving type)   as FixedPriceInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(TotalAmountInCtrlgAreaCrcy as fis_ksl)                                       as TotalAmountInGlobalCurrency,
        @Semantics.amount.currencyCode: 'GlobalCurrency'
        cast(FixedAmountInCtrlgAreaCrcy as fis_kfsl)                                      as FixedAmountInGlobalCrcy,

        @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
        CompanyCodeCurrency,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedPriceInCompanyCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        TotalAmountInCoCodeCrcy,
        @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
        FixedAmountInCoCodeCrcy,

        @ObjectModel.foreignKey.association: '_UnitOfMeasure'
        BaseUnit                                                                          as UnitOfMeasure,
        @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
        QuantityInBaseUnit                                                                as Quantity,
        @ObjectModel.foreignKey.association: '_CostingUnitOfMeasure'
        CostingPriceQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'CostingPriceQtyUnit'
        CostingPriceUnitQty,

        CostingValuationStrategy,
        ProductValnPurgInfoRecdStrgy,
        BillOfMaterialItemNumber,
        CostingItemIsAssembly,
        CostCtrActivityType,
        CostCenter,
        ProfitCenter,
        Operation,
        PurchasingInfoRecord,
        PurchasingOrganization,
        PurchasingInfoRecordCategory,
        PurchasingDocument,
        PurchasingDocumentItem,

        @Semantics.booleanIndicator
        IsLotSizeIndependent,
        HasError,

        TransferCostEstimate,
        TransferCostingType,
        TransferCostingDate,
        TransferCostingVersion,
        TransferValuationVariant,

        _SalesOrderItemCostEstimate,
        _Product,
        _CostingType,
        _CostingVersion,
        _ValuationVariant,
        _GlobalCurrency,
        _CompanyCodeCurrency,
        _CostingUnitOfMeasure,
        _UnitOfMeasure

}
where
//Semantically 'ControllingLedger' is not needed (Field is always filled with '00') but it helps the SQL optimizer to optimize the execution.
      ControllingLedger      = '00'
  and CostingReferenceObject = 'B'
```
