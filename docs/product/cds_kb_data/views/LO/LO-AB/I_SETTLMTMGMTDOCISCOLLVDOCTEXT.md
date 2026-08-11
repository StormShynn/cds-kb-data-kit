---
name: I_SETTLMTMGMTDOCISCOLLVDOCTEXT
description: "This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: \" \" No 1 Yes (Header Level) 2 Yes (Item Level)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: \" \" No 1 Yes (Header Level) 2 Yes (Item Level)"
semantic_vi: "Settlmt Mgmt Doc Is Coll Doc - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "coll"
  - "text"
  - "collv"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTMGMTDOCISCOLLVDOCTEXT

**This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: " " No 1 Yes (Header Level) 2 Yes (Item Level)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocIsCollvDoc` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_is_collection )` | `CHAR(1)` | Indicator that Document is a Collective Document |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocIsCollvDocName` |  | |  | `cast( dd07t.ddtext as wlf_is_collection_txt preserving type )` | `CHAR(60)` | Description of Document is Collective Document Indicator |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocIsCollvDoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Is Coll Doc - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocIsCollvDoc',
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
  technicalName: 'IWLFSMTMGDISCODT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocIsCollvDocText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocIsCollvDocCode as _SettlmtMgmtDocIsCollvDoc on $projection.SettlmtMgmtDocIsCollvDoc = _SettlmtMgmtDocIsCollvDoc.SettlmtMgmtDocIsCollvDoc
  association [0..1] to I_Language                            as _Language                 on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocIsCollvDoc'
      @ObjectModel.text.element: ['SettlmtMgmtDocIsCollvDocName']
  key cast( dd07t.domvalue_l as wlf_is_collection )                                  as SettlmtMgmtDocIsCollvDoc,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                               as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_is_collection_txt preserving type )                  as SettlmtMgmtDocIsCollvDocName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,

      /* Associations */
      _SettlmtMgmtDocIsCollvDoc,
      _Language
}

where
      dd07t.domname  = 'WLF_IS_COLLECTION'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
