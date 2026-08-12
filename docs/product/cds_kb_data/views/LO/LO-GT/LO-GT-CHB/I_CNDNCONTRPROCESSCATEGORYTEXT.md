---
name: I_CNDNCONTRPROCESSCATEGORYTEXT
description: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORYTEXT')/$value
semantic_en: "This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties"
semantic_vi: "Cndn Contract Process Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contract"
  - "process"
  - "category"
  - "text"
  - "contr"
  - "language"
  - "desc"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-GT-CHB
  - contract
  - customer
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - supplier
---
# I_CNDNCONTRPROCESSCATEGORYTEXT

**This CDS view retrieves the condition contract process category which specifies for which purpose a condition contract is used. Examples of possible purposes are Supplier Rebate, Customer Rebate, Commission, Royalties. The delivered values are listed: Values: 1 - Supplier Rebate 2 - Customer Rebate 3 - Commission 4 - Royalties**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcessCategory` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_process_category )` | `CHAR(2)` | Process Category of a Condition Contract |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CndnContrProcessCategoryDesc` |  | |  | `cast( dd07t.ddtext as wlf_process_category_txt preserving type )` | `CHAR(60)` | Description of Condition Contract Process Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrProcessCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCESSCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contract Process Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'CndnContrProcessCategory',
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #META,
     serviceQuality: #A,
     sizeCategory:   #S
   }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IWCBPROCESSCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrProcessCategoryText
  as select from dd07t

  association        to parent I_CndnContrProcessCategory as _CndnContrProcessCategory on $projection.CndnContrProcessCategory = _CndnContrProcessCategory.CndnContrProcessCategory
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrProcessCategory'
      @ObjectModel.text.element: ['CndnContrProcessCategoryDesc']
  key cast(dd07t.domvalue_l as wcb_process_category )                  as CndnContrProcessCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_process_category_txt preserving type ) as CndnContrProcessCategoryDesc,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      /* Associations */
      _CndnContrProcessCategory,
      _Language
}
where
      dd07t.domname  = 'WCB_PROCESS_CATEGORY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
