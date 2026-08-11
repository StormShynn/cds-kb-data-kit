---
name: I_CNDNCONTRCHANGEABILITYTEXT
description: "This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITYTEXT')/$value
semantic_en: "This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?"
semantic_vi: "Condition Contract Changeability - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "condition"
  - "contract"
  - "changeability"
  - "text"
  - "cndn"
  - "contr"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRCHANGEABILITYTEXT

**This CDS view is used to check the changeability for the condition contract. This CDS view provides the prerequisites for answering the following business questions: What is the changeability of condition contract?**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrChangeability` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_ui_change )` | `CHAR(2)` | Control for Changes on the User Interface |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrChangeabilityName` |  | |  | `cast( dd07t.ddtext as wcb_ui_change_txt preserving type )` | `CHAR(60)` | UI Changeability Category Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrChangeability` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCHANGEABILITYTEXT')/$value)*

```abap
@EndUserText.label: 'Condition Contract Changeability - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrChangeability',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
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
  technicalName: 'IWCBCOCOCHGUIT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrChangeabilityText
  as select from dd07t

  association        to parent I_CndnContrChangeability as _CndnContrChangeability on $projection.CndnContrChangeability = _CndnContrChangeability.CndnContrChangeability
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrChangeability'
      @ObjectModel.text.element: ['CndnContrChangeabilityName']
  key cast(dd07t.domvalue_l as wcb_ui_change )                                  as CndnContrChangeability,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                          as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_ui_change_txt preserving type )                 as CndnContrChangeabilityName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                          as DomainValue,

      /* Associations */
      _CndnContrChangeability,
      _Language
}

where
      dd07t.domname  = 'WCB_UI_CHANGE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
