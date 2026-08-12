---
name: I_FININSTRPRODTYPESUPLMNT
description: "This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value
semantic_en: "This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Type Supplements — CDS view giao diện dựa trên atpa."
keywords:
  - "product"
  - "type"
  - "supplements"
  - "financial"
  - "instrument"
  - "treasury"
  - "settlement"
  - "option"
  - "exercise"
  - "trade"
  - "finance"
  - "category"
  - "underlying"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - product
  - transaction
---
# I_FININSTRPRODTYPESUPLMNT

**This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrumentProductType` | ✓ | |  | `sgsart` | `CHAR(3)` | Product Type |
| `TreasurySettlementType` |  | |  | `settlfl` | `CHAR(1)` | Settlement Indicator |
| `OptionExerciseType` |  | |  | `soptaus` | `NUMC(1)` | Exercise Type (American or European) |
| `TradeFinanceCategory` |  | |  | `tf_cat` | `CHAR(1)` | Trade Finance Category |
| `OptionUnderlyingProductType` |  | |  | `cast( usgsart as option_underlying_product_type preserving type )` | `CHAR(3)` | Underlying Product Type of the Option |
| `OptionUndrlgTransactionType` |  | |  | `usfhaart` | `CHAR(3)` | Transaction Type of Underlying |
| `IntrstRateSwapIsCrossCurrency` |  | |  | `jwswap` | `CHAR(1)` | Indicator: Currency swap |
| `ProductTypeCashFlowCalculation` |  | |  | `cash_flow_calc` | `CHAR(2)` | Cash Flow Calculation |
| `_ProductType` | | ✓ | | | | |
| `_SettlementType` | | ✓ | | | | |
| `_ExerciseType` | | ✓ | | | | |
| `_TradeFinanceCategory` | | ✓ | | | | |
| `_UnderlyingProductType` | | ✓ | | | | |
| `_UnderlyingTransType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_SettlementType` | `I_OptionSettlementType` | [0..1] |
| `_ExerciseType` | `I_OptionExerciseType` | [0..1] |
| `_TradeFinanceCategory` | `I_TradeFinanceCategory` | [0..1] |
| `_UnderlyingProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_UnderlyingTransType` | `I_FinancialInstrTransType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFININSPRODTPSU'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Product Type Supplements'
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'FinancialInstrumentProductType'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'FinInstrProductTypeSupplement'

define view I_FinInstrProdTypeSuplmnt as select from atpa
     association [0..1] to I_FinancialinstrProductType  as _ProductType             on  $projection.FinancialInstrumentProductType  = _ProductType.FinancialInstrumentProductType
     association [0..1] to I_OptionSettlementType       as _SettlementType          on  $projection.TreasurySettlementType          = _SettlementType.OptionSettlementType
     association [0..1] to I_OptionExerciseType         as _ExerciseType            on  $projection.OptionExerciseType              = _ExerciseType.OptionExerciseType
     association [0..1] to I_TradeFinanceCategory       as _TradeFinanceCategory    on  $projection.TradeFinanceCategory            = _TradeFinanceCategory.TradeFinanceCategory
     association [0..1] to I_FinancialinstrProductType  as _UnderlyingProductType   on  $projection.OptionUnderlyingProductType     = _UnderlyingProductType.FinancialInstrumentProductType
     association [0..1] to I_FinancialInstrTransType    as _UnderlyingTransType     on  $projection.OptionUndrlgTransactionType     = _UnderlyingTransType.FinancialInstrTransactionType
                                                                                      and $projection.OptionUnderlyingProductType   = _UnderlyingTransType.FinancialInstrumentProductType
  
{    
    key sgsart      as FinancialInstrumentProductType,
    settlfl         as TreasurySettlementType,
    soptaus         as OptionExerciseType,
    tf_cat          as TradeFinanceCategory, 
    cast( usgsart as option_underlying_product_type preserving type )
                    as OptionUnderlyingProductType,
    usfhaart        as OptionUndrlgTransactionType,
    jwswap          as IntrstRateSwapIsCrossCurrency,
    cash_flow_calc  as ProductTypeCashFlowCalculation,
    
    _ProductType,
    _SettlementType,
    _ExerciseType,
    _UnderlyingProductType,
    _UnderlyingTransType,
    _TradeFinanceCategory
}
```
