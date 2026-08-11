---
name: I_CNDNCONTRPRTLSETTLMTCATTXT
description: "This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCATTXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate"
semantic_vi: "Cndn Contr Partial Settlement Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contr"
  - "partial"
  - "settlement"
  - "cat"
  - "text"
  - "prtl"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPRTLSETTLMTCATTXT

**This CDS view exposes fixed values of the field Rebates: Partial Settlement Type The following fixed values have been maintained: ' ' No Partial Settlement 1 Cumulative 2 Separate**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCATTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrPrtlSettlmtCat` | ✓ | |  | `cast(dd07t.domvalue_l as wb2_partial_settlement_type )` | `CHAR(1)` | Condition Contract Settlement: Partial Settlement Type |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrPrtlSettlmtCatName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrPrtlSettlmtCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCATTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPRTLSETTLMTCATTXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Partial Settlement Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrPrtlSettlmtCat',
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
  technicalName: 'IWCBCCPTLSMTCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrPrtlSettlmtCatTxt
  as select from dd07t

  association        to parent I_CndnContrPrtlSettlmtCat as _CndnContrPrtlSettlmtCat on $projection.CndnContrPrtlSettlmtCat = _CndnContrPrtlSettlmtCat.CndnContrPrtlSettlmtCat
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CndnContrPrtlSettlmtCat'
  key cast(dd07t.domvalue_l as wb2_partial_settlement_type )                                  as CndnContrPrtlSettlmtCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                        as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                                                            as CndnContrPrtlSettlmtCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                        as DomainValue,

      /* Associations */
      _CndnContrPrtlSettlmtCat,
      _Language
}

where
      dd07t.domname  = 'WB2_PARTIAL_SETTLEMENT_TYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
