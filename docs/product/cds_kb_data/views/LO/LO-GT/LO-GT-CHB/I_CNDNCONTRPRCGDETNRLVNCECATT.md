---
name: I_CNDNCONTRPRCGDETNRLVNCECATT
description: "This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECATT')/$value
semantic_en: "This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant"
semantic_vi: "Prcg Determination Relevance Cat - Txt — CDS view cơ bản dựa trên dd07t."
keywords:
  - "prcg"
  - "determination"
  - "relevance"
  - "cat"
  - "txt"
  - "cndn"
  - "contr"
  - "detn"
  - "rlvnce"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPRCGDETNRLVNCECATT

**This CDS view exposes the values for the Royalty Condition Contracts. The following fixed values have been maintained: '' From Customizing 1 Only if Partner is Business Volume Selection Criterion 2 Always 3 Not Relevant**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPrcgDetnRlvnceCat` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_coco_determ_rel_contract )` | `CHAR(1)` | CC Determination Relevance in Pricing (Condition Contract) |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnContrPrcgDetnRlvnceCatName` |  | |  | `cast( dd07t.ddtext as wb2_coco_determ_rel_contr_t preserving type )` | `CHAR(60)` | Text of CC Determination Relevance in Pricing (CC) |
| `_Language` | | ✓ | | | | |
| `_CndnContrPrcgDetnRlvnceCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECATT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRCGDETNRLVNCECATT')/$value)*

```abap
@EndUserText.label: 'Prcg Determination Relevance Cat - Txt'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrPrcgDetnRlvnceCat',
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
  technicalName: 'ICCPRCDETRELCT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrPrcgDetnRlvnceCatT
  as select from dd07t

  association        to parent I_CndnContrPrcgDetnRlvnceCat as _CndnContrPrcgDetnRlvnceCat on $projection.CndnContrPrcgDetnRlvnceCat = _CndnContrPrcgDetnRlvnceCat.CndnContrPrcgDetnRlvnceCat
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrPrcgDetnRlvnceCat'
      @ObjectModel.text.element: ['CndnContrPrcgDetnRlvnceCatName']
  key cast( dd07t.domvalue_l as wb2_coco_determ_rel_contract )                                  as CndnContrPrcgDetnRlvnceCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                         as Language,
  
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                          as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_coco_determ_rel_contr_t preserving type )                       as CndnContrPrcgDetnRlvnceCatName,

      /* Associations */
      _CndnContrPrcgDetnRlvnceCat,
      _Language
}

where
      dd07t.domname  = 'WB2_COCO_DETERM_REL_CONTRACT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
