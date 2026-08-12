---
name: I_SETTLMTITMSTATISTICALPRPTYT
description: "This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' \" Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTYT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' \" Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting"
semantic_vi: "Settlmt Item Statistical Property - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "item"
  - "statistical"
  - "property"
  - "text"
  - "prpty"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTITMSTATISTICALPRPTYT

**This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' " Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTYT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtItmStatisticalPrpty` | ✓ | |  | `cast( dd07t.domvalue_l as wkowrr )` | `CHAR(1)` | Item Control |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtItmStatisticalPrptyName` |  | |  | `cast( dd07t.ddtext as wlf_wkowrr_txt preserving type )` | `CHAR(60)` | Description of Item Statistical Property Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtItmStatisticalPrpty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTYT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTYT')/$value)*

```abap
@EndUserText.label: 'Settlmt Item Statistical Property - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtItmStatisticalPrpty',
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
  technicalName: 'IWLFSMTITMSTPRT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtItmStatisticalPrptyT
  as select from dd07t

  association        to parent I_SettlmtItmStatisticalPrpty as _SettlmtItmStatisticalPrpty on $projection.SettlmtItmStatisticalPrpty = _SettlmtItmStatisticalPrpty.SettlmtItmStatisticalPrpty
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtItmStatisticalPrpty'
      @ObjectModel.text.element: ['SettlmtItmStatisticalPrptyName']
  key cast( dd07t.domvalue_l as wkowrr )                                  as SettlmtItmStatisticalPrpty,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_wkowrr_txt preserving type )             as SettlmtItmStatisticalPrptyName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,

      /* Associations */
      _SettlmtItmStatisticalPrpty,
      _Language
}

where
      dd07t.domname  = 'WKOWRR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
