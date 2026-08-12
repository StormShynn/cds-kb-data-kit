---
name: I_BUDGETPROCESSTEXT
description: "Budget Process - Text"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESSTEXT')/$value
semantic_en: "Budget Process - Text"
semantic_vi: "Budget Process - Text — CDS view giao diện dựa trên budget_d_proct."
keywords:
  - "budget"
  - "process"
  - "text"
  - "language"
tags:
  - CO
  - budget
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
---
# I_BUDGETPROCESSTEXT

**Budget Process - Text**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetProcess` | ✓ | |  | `budget_process` | `CHAR(4)` | Budget Process Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `BudgetProcessText` |  | |  | `description` | `CHAR(40)` | Budget Process Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBDGTPROCT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Process - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'BudgetProcess',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}

define view I_BudgetProcessText 
  as select from budget_d_proct 
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key budget_process  as BudgetProcess,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language    as Language,
      @Semantics.text: true
      description as BudgetProcessText,
      _Language    
}
```
