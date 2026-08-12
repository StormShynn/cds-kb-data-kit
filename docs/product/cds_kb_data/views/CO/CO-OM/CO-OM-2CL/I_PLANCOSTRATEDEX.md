---
name: I_PLANCOSTRATEDEX
description: "Plancostratedex"
app_component: CO-OM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
