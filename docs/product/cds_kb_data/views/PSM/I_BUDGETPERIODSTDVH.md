---
name: I_BUDGETPERIODSTDVH
description: "Budget Period"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value
semantic_en: "Budget Period"
semantic_vi: "Budget Period — CDS view giao diện dựa trên I_BudgetPeriod."
keywords:
  - "budget"
  - "period"
  - "authzn"
  - "name"
  - "validity"
  - "start"
  - "date"
tags:
  - PSM
  - budget
  - component:PSM
  - interface-view
---
# I_BUDGETPERIODSTDVH

**Budget Period**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetPeriod` | ✓ | |  |  | `CHAR(10)` | Budget Period |
| `BudgetPeriodAuthznGrp` |  | |  |  | `CHAR(10)` | Budget Period Authorization Group |
| `BudgetPeriodName` |  | |  | `_Text[1:Language = $session.system_language].BudgetPeriodName` | `CHAR(35)` | Budget Period Name |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Budget Period Valid From |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Budget Period Valid To |
| `BudgetPeriodExpirationDate` |  | |  |  | `DATS(8)` | Budget Period Expiration Date |
| `BudgetPeriodPeriodicity` |  | |  |  | `CHAR(10)` | Frequency for Budget Period |
| `_FundPeriodicity` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyFV7jU}e25o35YSlG
@AbapCatalog.sqlViewName: 'IFMBP_VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BudgetPeriod'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Budget Period'
define view I_BudgetPeriodStdVH
  as select from I_BudgetPeriod
{
      //      @ObjectModel.text.association: '_Text'
      @ObjectModel.text.element:['BudgetPeriodName']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8 
  key BudgetPeriod,

      @Consumption.hidden: true
      BudgetPeriodAuthznGrp,
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _Text[1:Language = $session.system_language].BudgetPeriodName as BudgetPeriodName,

      @Semantics.businessDate.from: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityStartDate,
      
      @Semantics.businessDate.to: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      ValidityEndDate,

      @Semantics.calendar.dayOfYear: true
      @Consumption.filter.multipleSelections: false
      @Consumption.filter.selectionType: #SINGLE
      BudgetPeriodExpirationDate,
      
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @Feature: 'BF:PSM_BUDGET_ACCOUNTING_CONTROL'
      BudgetPeriodPeriodicity,

      @Consumption.filter.hidden: true
      @UI.hidden: true
      _FundPeriodicity,

      _Text

}
```
