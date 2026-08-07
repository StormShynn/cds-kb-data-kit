---
name: I_PLANCOSTRATEDEX
description: Plancostratedex
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
  - data-extraction
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_PLANCOSTRATEDEX

**Plancostratedex**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingCostRateUUID` | ✓ | |  |  |  |  |
| `CurrencyRole` |  | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `ValidityStartFiscalYear` |  | |  |  |  |  |
| `ValidityStartFiscalPeriod` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndFiscalYear` |  | |  |  |  |  |
| `ValidityEndFiscalPeriod` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `CostRateTotalAmount` |  | |  |  |  |  |
| `CostRateFixedAmount` |  | |  |  |  |  |
| `CostRateVarblAmount` |  | |  |  |  |  |
| `CostRateScaleFactor` |  | |  |  |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  |  |  |  |
| `PlanningCategory` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `ComponentBreakdown` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Data Extraction for Plan Cost Rate'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #A,
        dataClass: #TRANSACTIONAL
    },
    supportedCapabilities: [
        #EXTRACTION_DATA_SOURCE
    ]
}

@ObjectModel.sapObjectNodeType.name: 'PlanCostRate'

@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}

@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_PlanCostRateDEX
  as select from P_PlanCostRateDEX
{
  key AccountingCostRateUUID,
      CurrencyRole,
      Ledger,
      CompanyCode,
      CostCenter,
      ActivityType,
      ValidityStartFiscalYear,
      ValidityStartFiscalPeriod,
      ValidityStartDate,
      ValidityEndFiscalYear,
      ValidityEndFiscalPeriod,
      ValidityEndDate,
      ControllingArea,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateTotalAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateFixedAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateVarblAmount,
      CostRateScaleFactor,
      CostCtrActivityTypeQtyUnit,
      PlanningCategory,
      BusinessTransactionType,
      ComponentBreakdown
}
```
