---
name: I_SERVICECOSTRATEDEX
description: "Servicecostratedex"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - data-extraction
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTRATEDEX

**Servicecostratedex**

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
| `IsIntercompanyRate` |  | |  |  |  |  |
| `ReceivingCompanyCode` |  | |  |  |  |  |
| `ServiceCostLevel` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
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
| `PlanningCategory` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `ComponentBreakdown` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Data Extraction for Service Cost Rate'

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

@ObjectModel.sapObjectNodeType.name: 'ServiceCostRate'

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
define view entity I_ServiceCostRateDEX
  as select from P_ServiceCostRateDEX
{
  key AccountingCostRateUUID,
      CurrencyRole,
      Ledger,
      CompanyCode,
      CostCenter,
      ActivityType,
      IsIntercompanyRate,
      ReceivingCompanyCode,
      ServiceCostLevel,
      PersonnelNumber,
      WBSElementInternalID,
      WBSElementExternalID,
      WorkItem,
      TimeSheetOvertimeCategory,
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
      PlanningCategory,
      BusinessTransactionType,
      ComponentBreakdown
}
```
