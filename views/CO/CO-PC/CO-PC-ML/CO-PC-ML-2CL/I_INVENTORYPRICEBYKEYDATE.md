---
name: I_INVENTORYPRICEBYKEYDATE
description: "Inventorypricebykeydate"
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - interface-view
  - inventory
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Inventory
---
# I_INVENTORYPRICEBYKEYDATE

**Inventorypricebykeydate**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostEstimate` | ✓ | |  |  |  |  |
| `CurrencyRole` | ✓ | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `MaterialPriceControl` |  | |  |  |  |  |
| `MaterialPriceUnitQty` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `InventoryPrice` |  | |  |  |  |  |
| `StandardPrice` |  | |  |  |  |  |
| `ActualPrice` |  | |  |  |  |  |
| `LedgerName` |  | |  |  |  |  |
| `CurrencyRoleName` |  | |  |  |  |  |
| `LegalCurrencyRole` |  | |  |  |  |  |
| `LegalCurrencyRoleName` |  | |  |  |  |  |
| `AccountingValuationView` |  | |  | `cast(AccountingValuationView as fins_valutyp)` |  |  |
| `AcctgValnVwSubviewCombinedName` |  | |  |  |  |  |
| `LedgerValnCrcyRoleIsUsedInLogs` |  | |  |  |  |  |
| `_CurrencyRole` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IINVPRKEYDATE'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inventory Price By KeyDate'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel: { modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ] }
@ObjectModel.representativeKey: 'CostEstimate'                                        
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_InventoryPriceByKeyDate_2'

define view entity I_InventoryPriceByKeyDate
  with parameters
    P_CalendarDate : calendardate



  as select from R_InventoryPriceByKeyDate(P_CalendarDate : $parameters.P_CalendarDate) as it
  association [0..1] to I_CurrencyRole as _CurrencyRole on $projection.CurrencyRole = _CurrencyRole.CurrencyRole
  association [0..1] to I_Ledger       as _Ledger       on $projection.Ledger = _Ledger.Ledger

{

  key   CostEstimate,
        @Analytics.internalName: #LOCAL
        @ObjectModel.foreignKey.association: '_CurrencyRole'
  key   CurrencyRole,
        @ObjectModel.foreignKey.association: '_Ledger'
        Ledger,
        FiscalPeriod,
        FiscalYear,
        FiscalYearPeriod,
        Material,
        ValuationArea,
        InventoryValuationType,
        SalesOrder,
        SalesOrderItem,
        Supplier,
        WBSElementInternalID,
        CompanyCode,
        BaseUnit,
        InventorySpecialStockType,
        MaterialPriceControl,
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        MaterialPriceUnitQty,
        Currency,
        @Semantics.amount.currencyCode:'Currency'
        InventoryPrice,
        @Semantics.amount.currencyCode:'Currency'
        StandardPrice,
        @Semantics.amount.currencyCode:'Currency'
        ActualPrice,        
        LedgerName,
        CurrencyRoleName,
        LegalCurrencyRole,
        LegalCurrencyRoleName,
        cast(AccountingValuationView as fins_valutyp) as AccountingValuationView,        
        AcctgValnVwSubviewCombinedName,
        @Semantics.booleanIndicator: true
        LedgerValnCrcyRoleIsUsedInLogs,

        @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
        _Ledger,
        _CurrencyRole
}
```
