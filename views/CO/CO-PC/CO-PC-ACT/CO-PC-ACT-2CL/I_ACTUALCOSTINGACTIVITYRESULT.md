---
name: I_ACTUALCOSTINGACTIVITYRESULT
description: "Actualcostingactivityresult"
app_component: CO-PC-ACT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ACT
  - interface-view
  - component:CO-PC-ACT-2CL
  - lob:Controlling
---
# I_ACTUALCOSTINGACTIVITYRESULT

**Actualcostingactivityresult**

| Property | Value |
|---|---|
| App Component | `CO-PC-ACT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostEstimate` | ✓ | |  |  |  |  |
| `CurrencyRole` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `MaterialLedgerCategory` | ✓ | |  |  |  |  |
| `ProcessCategory` | ✓ | |  |  |  |  |
| `MatlLdgrDocIsCostingRelevant` | ✓ | |  |  |  |  |
| `ProductionProcess` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `SalesOrder` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `WBSElementExternalID` | ✓ | |  |  |  |  |
| `OrderID` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |
| `FiscalPeriod` |  | |  | `$parameters.P_FiscalPeriod` |  |  |
| `FiscalYear` |  | |  | `$parameters.P_FiscalYear` |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `TotalVltdStockQuantity` |  | |  |  |  |  |
| `ValuationQuantityUnit` |  | |  |  |  |  |
| `InventoryAmtInDspCrcy` |  | |  |  |  |  |
| `InvtryTransacAmtInDisplayCrcy` |  | |  |  |  |  |
| `PriceDiffAmtInDisplayCrcy` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MaterialLedgerCategoryText` |  | |  |  |  |  |
| `ProcessCategoryName` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ControllingValuationType` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
                  authorizationCheck: #MANDATORY,
                  personalData.blocking: #REQUIRED
                }
@ObjectModel: {
                usageType: {
                             serviceQuality: #D,
                             sizeCategory: #XXL,
                             dataClass: #MIXED
                           },
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE,
                sapObjectNodeType.name: 'MaterialValuation'
              }
@Analytics: {
              dataExtraction.enabled: true,
              dataCategory: #FACT,
              technicalName: 'IACTActivityResult'
            }              
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }      
@EndUserText.label: 'Actual Costing Run Result Activity Data'

define view entity I_ActualCostingActivityResult
  with parameters
    P_CostingRunType :ckml_run_type,
    P_FiscalPeriod   :fins_fiscalperiod,
    P_FiscalYear     :fis_gjahr_no_conv
  as select from P_ActualCostingActyRsltWithTxt  (P_CostingRunType : $parameters.P_CostingRunType,
                                                  P_FiscalPeriod: $parameters.P_FiscalPeriod,
                                                  P_FiscalYear: $parameters.P_FiscalYear)
  association [1..1] to I_Product       as _Product      on $projection.Material = _Product.Product
  association [1..1] to I_Ledger        as _Ledger       on $projection.Ledger = _Ledger.Ledger
  association [1..1] to I_Currency      as _Currency     on $projection.Currency = _Currency.Currency
  association [1..1] to I_UnitOfMeasure as _QuantityUnit on $projection.ValuationQuantityUnit = _QuantityUnit.UnitOfMeasure
{
  key     CostEstimate,
  key     CurrencyRole,
          @ObjectModel.foreignKey.association: '_Ledger'
  key     Ledger,
          @ObjectModel.text.element: ['MaterialLedgerCategoryText']
  key     MaterialLedgerCategory,
          @ObjectModel.text.element: ['ProcessCategoryName']
  key     ProcessCategory,
  key     MatlLdgrDocIsCostingRelevant,
  key     ProductionProcess,
          @ObjectModel.foreignKey.association: '_Product'
  key     Material,
  key     SalesOrder,
  key     SalesOrderItem,
  key     WBSElementExternalID,
  key     OrderID,
  key     GLAccount,

          $parameters.P_FiscalPeriod                                                                                                                                as FiscalPeriod,
          $parameters.P_FiscalYear                                                                                                                                  as FiscalYear,

          ValuationArea,
          CostCenter,          
          ActivityType,

          @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
          TotalVltdStockQuantity,
          @ObjectModel.foreignKey.association: '_QuantityUnit'
          ValuationQuantityUnit,
          @Semantics.amount.currencyCode: 'Currency'
          InventoryAmtInDspCrcy,
          @Semantics.amount.currencyCode: 'Currency'
          InvtryTransacAmtInDisplayCrcy,
          @Semantics.amount.currencyCode: 'Currency'
          PriceDiffAmtInDisplayCrcy,
          
          @ObjectModel.foreignKey.association: '_Currency'
          Currency,

          @Semantics.text: true
          MaterialLedgerCategoryText,
          @Semantics.text: true
          ProcessCategoryName,

          CompanyCode,
          @Consumption.hidden: true
          ControllingArea,
          @Consumption.hidden: true
          ControllingValuationType,
          
          //Association
         _Product,
         _Ledger,
         _Currency,
         _QuantityUnit
}
```
