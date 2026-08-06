---
name: I_PLANCOSTRATETP
description: Plancostratetp
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - transactional-processing
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_PLANCOSTRATETP

**Plancostratetp**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `AccountingCostRateUUID` | `AccountingCostRateUUID` |
| `CompanyCode` | `CompanyCode` |
| `CostCenter` | `CostCenter` |
| `ActivityType` | `ActivityType` |
| `Currency` | `Currency` |
| `ControllingArea` | `ControllingArea` |
| `ValidityStartFiscalYear` | `ValidityStartFiscalYear` |
| `ValidityStartFiscalPeriod` | `ValidityStartFiscalPeriod` |
| `ValidityEndFiscalYear` | `ValidityEndFiscalYear` |
| `ValidityEndFiscalPeriod` | `ValidityEndFiscalPeriod` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `CostRateFixedAmount` | `CostRateFixedAmount` |
| `CostRateVarblAmount` | `CostRateVarblAmount` |
| `CostRateScaleFactor` | `CostRateScaleFactor` |
| `CostCtrActivityTypeQtyUnit` | `CostCtrActivityTypeQtyUnit` |
| `Ledger` | `Ledger` |
| `CostRateIsOverwriteMode` | `CostRateIsOverwriteMode` |
| `_CompanyCode` | *Association* |
| `_CostCtrActivityTypeText` | *Association* |
| `_ControllingAreaText` | *Association* |
| `_LedgerText` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'Plan Cost Rate - TP'
@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'AccountingCostRate',
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER,
    #UI_PROVIDER_PROJECTION_SOURCE
  ],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'FINS_PARALLEL_ACCOUNTING_BF'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define root view entity I_PlanCostRateTP
  provider contract transactional_interface
  as projection on R_PlanCostRateTP as PlanCostRate
{
  key AccountingCostRateUUID,
      @ObjectModel.text.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeVH', element: 'CompanyCode' }, useAsTemplate: true } ]
      CompanyCode,
      // @ObjectModel.text.association: '_CostCenterText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterVH', element: 'CostCenter' }, useAsTemplate: true } ] // TODO: VH not released as C1
      CostCenter,
      @ObjectModel.text.association: '_CostCtrActivityTypeText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterActivityTypeVH', element: 'CostCtrActivityType' }, useAsTemplate: true } ] // TODO: VH not released as C1
      ActivityType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Currency', element: 'Currency' }, useAsTemplate: true } ]
      Currency,
      @ObjectModel.text.association: '_ControllingAreaText'
      ControllingArea,

      ValidityStartFiscalYear,
      ValidityStartFiscalPeriod,
      ValidityEndFiscalYear,
      ValidityEndFiscalPeriod,
      
      ValidityStartDate,
      ValidityEndDate,

      @Semantics.amount.currencyCode: 'Currency'
      CostRateFixedAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateVarblAmount,
      CostRateScaleFactor,
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'C_CostCtrActyTypeUnitOfMsrVH', element: 'UnitOfMeasure' }, useAsTemplate: true } ] // TODO: VH not released as C1
      CostCtrActivityTypeQtyUnit,

      @ObjectModel.text.association: '_LedgerText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StdLdgrWthoutShadowVH', element: 'Ledger' }, useAsTemplate: true } ] // TODO: VH not released as C1
      Ledger,
      CostRateIsOverwriteMode,
      
      _CompanyCode,
      // _CostCenterText,
      _CostCtrActivityTypeText,
      _ControllingAreaText,
      _LedgerText
}
```
