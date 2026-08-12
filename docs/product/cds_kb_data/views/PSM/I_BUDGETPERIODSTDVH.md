---
name: I_BUDGETPERIODSTDVH
description: "Budget Period"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
