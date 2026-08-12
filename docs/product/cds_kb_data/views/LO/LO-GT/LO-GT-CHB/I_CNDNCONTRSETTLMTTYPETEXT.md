---
name: I_CNDNCONTRSETTLMTTYPETEXT
description: "This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement"
semantic_vi: "Condition Contract Settlement Type - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "settlement"
  - "type"
  - "text"
  - "cndn"
  - "contr"
  - "settlmt"
  - "language"
  - "name"
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
# I_CNDNCONTRSETTLMTTYPETEXT

**This CDS view provides the prerequisites for answering questions about condition contracts settlement types. The condition contract settlement types define the rebate type for: Supplier Contract Settlement Customer Contract Settlement**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtType` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_rebate_type )` | `CHAR(1)` | Condition Contract Settlement Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrSettlmtTypeName` |  | |  | `cast( dd07t.ddtext as wb2_rebate_type_text preserving type )` | `CHAR(60)` | Condition Contract Settlement Type Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrSettlmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Settlement Type - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey:     'CndnContrSettlmtType',
  modelingPattern:       #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY,
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
  technicalName: 'IWCBCCSMTTYPETXT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrSettlmtTypeText
  as select from dd07t

  association        to parent I_CndnContrSettlmtType as _CndnContrSettlmtType on $projection.CndnContrSettlmtType = _CndnContrSettlmtType.CndnContrSettlmtType
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.text.element: ['CndnContrSettlmtTypeName']
      @ObjectModel.foreignKey.association: '_CndnContrSettlmtType'
  key cast( dd07t.domvalue_l as wb2_rebate_type )                  as CndnContrSettlmtType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                             as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_rebate_type_text preserving type ) as CndnContrSettlmtTypeName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                             as DomainValue,

      /* Associations */
      _CndnContrSettlmtType,
      _Language
}

where
      dd07t.domname  = 'WB2_REBATE_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
