---
name: I_BUDGETINGTYPETEXT
description: "Budget Type - Text"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPETEXT')/$value
semantic_en: "Budget Type - Text"
semantic_vi: "Budget Type - Text — CDS view giao diện dựa trên bdgt_d_subcategt."
keywords:
  - "budget"
  - "type"
  - "text"
  - "budgeting"
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
# I_BUDGETINGTYPETEXT

**Budget Type - Text**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetingType` | ✓ | |  | `budget_subcategory` | `CHAR(8)` | Budget Type (Subcategory) |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `BudgetingTypeText` |  | |  | `description` | `CHAR(40)` | Budget Type Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBDGTTYPET'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Type - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'BudgetingType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}

define view I_BudgetingTypeText 
  as select from bdgt_d_subcategt 
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key budget_subcategory  as BudgetingType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language    as Language,
      @Semantics.text: true
      description as BudgetingTypeText,
      _Language    
}
```
