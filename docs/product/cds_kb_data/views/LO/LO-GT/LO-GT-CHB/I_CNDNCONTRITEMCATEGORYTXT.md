---
name: I_CNDNCONTRITEMCATEGORYTXT
description: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORYTXT')/$value
semantic_en: "This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: \"\" None 1 Materials 2 Materials with Unit of Measure (as Key)"
semantic_vi: "Condition Contract Item Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "item"
  - "category"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - material
---
# I_CNDNCONTRITEMCATEGORYTXT

**This CDS view is used to select the Condition Contract Item Category. This CDS view provides the parameters for the domain WCB_CONTRACT_ITEMS with the following values: "" None 1 Materials 2 Materials with Unit of Measure (as Key)**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORYTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrItemCategory` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_contract_items )` | `CHAR(1)` | Condition Contract Items Category |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrItemCategoryName` |  | |  | `cast( dd07t.ddtext as wcb_contract_items_name preserving type )` | `CHAR(60)` | Description of Condition Contract Items Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORYTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRITEMCATEGORYTXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Item Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrItemCategory',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
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
  internalName: #LOCAL,
  technicalName: 'IWCBCOCOITEMCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrItemCategoryTxt
  as select from dd07t

  association        to parent I_CndnContrItemCategory as _CndnContrItemCategory on $projection.CndnContrItemCategory = _CndnContrItemCategory.CndnContrItemCategory
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrItemCategory'
      @ObjectModel.text.element: ['CndnContrItemCategoryName']
  key cast(dd07t.domvalue_l as wcb_contract_items )                                  as CndnContrItemCategory,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_contract_items_name preserving type )                as CndnContrItemCategoryName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,

      /* Associations */
      _CndnContrItemCategory,
      _Language
}

where
      dd07t.domname  = 'WCB_CONTRACT_ITEMS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
