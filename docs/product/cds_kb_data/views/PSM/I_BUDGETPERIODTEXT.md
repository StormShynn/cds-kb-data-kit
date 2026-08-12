---
name: I_BUDGETPERIODTEXT
description: "Budget Period - Text"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODTEXT')/$value
semantic_en: "Budget Period - Text"
semantic_vi: "Budget Period - Text — CDS view giao diện dựa trên fmbudgetpdt."
keywords:
  - "budget"
  - "period"
  - "text"
  - "language"
  - "name"
tags:
  - PSM
  - budget
  - component:PSM
  - interface-view
---
# I_BUDGETPERIODTEXT

**Budget Period - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BudgetPeriod` | ✓ | |  | `budget_pd` | `CHAR(10)` | Budget Period |
| `BudgetPeriodName` |  | |  | `cast( budgetpdtx as fm_budget_period_name preserving type )` | `CHAR(35)` | Budget Period Name |
| `_Language` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPERIODTEXT')/$value)*

```abap
@EndUserText.label: 'Budget Period - Text'
@Analytics: { 
              dataExtraction.enabled: true, 
              internalName: #LOCAL 
            }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BudgetPeriod'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IBUDGETPERIODT'
@ObjectModel.sapObjectNodeType.name: 'BudgetPeriodText'
define view I_BudgetPeriodText
  as select from fmbudgetpdt
  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
  association [0..1] to I_BudgetPeriod as _BudgetPeriod on $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod   //for authorization check
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                                       as Language,
  key budget_pd                                                                   as BudgetPeriod,
      @Semantics.text: true
      cast( budgetpdtx as fm_budget_period_name preserving type )                 as BudgetPeriodName,

      _Language,
      _BudgetPeriod

}
```
