---
name: I_COMBINEDSETTLMTPOSTGSTSTEXT
description: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
semantic_vi: "Combined Settlement Posting Sts - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "combined"
  - "settlement"
  - "posting"
  - "sts"
  - "text"
  - "settlmt"
  - "postg"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - bo:purchaseorder
---
# I_COMBINEDSETTLMTPOSTGSTSTEXT

**This CDS view exposes fixed values of the Combined Settlement Posting Statuses field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CombinedSettlmtPostgSts` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_rfbsk_combined_settlement )` | `CHAR(1)` | Posting Status for Combined Settlement |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CombinedSettlmtPostgStsName` |  | |  | `cast( dd07t.ddtext as wlf_rfbsk_combined_settlmt_txt preserving type )` | `CHAR(60)` | Posting Status Description of Combined Settlement |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CombinedSettlmtPostgSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTSTEXT')/$value)*

```abap
@EndUserText.label: 'Combined Settlement Posting Sts - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CombinedSettlmtPostgSts',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFCBNDSMTPSTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CombinedSettlmtPostgStsText
  as select from dd07t

  association        to parent I_CombinedSettlmtPostgSts as _CombinedSettlmtPostgSts on $projection.CombinedSettlmtPostgSts = _CombinedSettlmtPostgSts.CombinedSettlmtPostgSts
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CombinedSettlmtPostgSts'
      @ObjectModel.text.element: ['CombinedSettlmtPostgStsName']      
  key cast(dd07t.domvalue_l as wlf_rfbsk_combined_settlement )                                  as CombinedSettlmtPostgSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language:true
  key dd07t.ddlanguage                                                                          as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_rfbsk_combined_settlmt_txt preserving type )                    as CombinedSettlmtPostgStsName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                          as DomainValue,

      /* Associations */
      _CombinedSettlmtPostgSts,
      _Language
}

where
      dd07t.domname  = 'WLF_RFBSK_COMBINED_SETTLEMENT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
