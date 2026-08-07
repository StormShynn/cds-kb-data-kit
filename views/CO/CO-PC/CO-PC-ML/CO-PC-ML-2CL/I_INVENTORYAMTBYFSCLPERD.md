---
name: I_INVENTORYAMTBYFSCLPERD
description: "Inventoryamtbyfsclperd"
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
# I_INVENTORYAMTBYFSCLPERD

**Inventoryamtbyfsclperd**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `CostEstimate` | ✓ | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `InvtryValnSpecialStockType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  | `$parameters.P_FiscalPeriod` |  |  |
| `FiscalYear` |  | |  | `$parameters.P_FiscalYear` |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `UnitOfMeasure` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@EndUserText.label: 'Inventory Amount for Fiscal Period'
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InventoryAmtByFsclPerd with parameters
  P_FiscalPeriod : poper, 
  P_FiscalYear : gjahr
//  as select from P_acdoca_m_extract_agg(P_poper :  $parameters.P_FiscalPeriod,
//                                    P_ryear :  $parameters.P_FiscalYear )
 as select from R_MatlValnEndgInvtryByFsclPerd( P_FiscalPeriod: $parameters.P_FiscalPeriod, P_FiscalYear: $parameters.P_FiscalYear )
{

  key  Ledger,
  key  CompanyCode,
  key  CostEstimate,
       Material,
       ValuationType,
       ValuationArea,
       InvtryValnSpecialStockType,
       SalesOrder,
       SalesOrderItem,
       Supplier,
       WBSElementInternalID,
       $parameters.P_FiscalPeriod as FiscalPeriod,
       $parameters.P_FiscalYear as FiscalYear,
       @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
       ValuationQuantity,
       UnitOfMeasure,
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AmountInCompanyCodeCurrency,
       CompanyCodeCurrency,
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AmountInGlobalCurrency,
       GlobalCurrency,
       @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
       AmountInFreeDefinedCurrency1,
       FreeDefinedCurrency1
}
```
