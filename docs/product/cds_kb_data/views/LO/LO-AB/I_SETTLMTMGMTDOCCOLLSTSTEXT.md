---
name: I_SETTLMTMGMTDOCCOLLSTSTEXT
description: "This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTSTEXT')/$value
semantic_en: "This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation"
semantic_vi: "Settlmt Mgmt Doc Collection Sts - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "collection"
  - "sts"
  - "text"
  - "coll"
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
# I_SETTLMTMGMTDOCCOLLSTSTEXT

**This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocCollSts` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_collection_status )` | `CHAR(1)` | Collective Settlement Status of Settlement Documents |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtDocCollStsName` |  | |  | `cast( dd07t.ddtext as wlf_collection_status_txt preserving type )` | `CHAR(60)` | Description of Collective Settlement Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtDocCollSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTSTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Collection Sts - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtDocCollSts',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTMGDCCOLST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtDocCollStsText
  as select from dd07t

  association        to parent I_SettlmtMgmtDocCollSts as _SettlmtMgmtDocCollSts on $projection.SettlmtMgmtDocCollSts = _SettlmtMgmtDocCollSts.SettlmtMgmtDocCollSts
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtDocCollSts'
      @ObjectModel.text.element: ['SettlmtMgmtDocCollStsName']
  key cast( dd07t.domvalue_l as wlf_collection_status )                                   as SettlmtMgmtDocCollSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_collection_status_txt preserving type )                   as SettlmtMgmtDocCollStsName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _SettlmtMgmtDocCollSts,
      _Language
}

where
      dd07t.domname  = 'WLF_COLLECTION_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
