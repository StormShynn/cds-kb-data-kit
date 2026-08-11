---
name: I_INTRASTATDECLNGDSFLWCAT
description: "Intrastat Declaration Goods Flow Cat"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCAT')/$value
semantic_en: "Intrastat Declaration Goods Flow Cat"
semantic_vi: "Intrastat Declaration Goods Flow Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "intrastat"
  - "declaration"
  - "goods"
  - "flow"
  - "cat"
  - "decln"
  - "domain"
  - "value"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_INTRASTATDECLNGDSFLWCAT

**Intrastat Declaration Goods Flow Cat**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IntrastatDeclnGdsFlwCat` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_intrastat_flow_doc )` | `CHAR(1)` | Type of Goods Flow for Intrastat Declarations |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INTRASTATDECLNGDSFLWCAT')/$value)*

```abap
@EndUserText.label: 'Intrastat Declaration Goods Flow Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'IntrastatDeclnGdsFlwCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY,
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFINTSTDGFC'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_IntrastatDeclnGdsFlwCat
  as select from dd07l

  composition [0..*] of I_IntrastatDeclnGdsFlwCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wlf_intrastat_flow_doc )            as IntrastatDeclnGdsFlwCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                             as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_INTRASTAT_FLOW_DOC'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
