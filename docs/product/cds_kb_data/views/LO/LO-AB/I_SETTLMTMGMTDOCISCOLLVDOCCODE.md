---
name: I_SETTLMTMGMTDOCISCOLLVDOCCODE
description: "This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: \" \" No 1 Yes (Header Level) 2 Yes (Item Level)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCCODE')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: \" \" No 1 Yes (Header Level) 2 Yes (Item Level)"
semantic_vi: "Settlmt Mgmt Doc Is Collective Doc — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "collective"
  - "collv"
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
# I_SETTLMTMGMTDOCISCOLLVDOCCODE

**This CDS view exposes fixed values of the field Settlement Management Document Collective Document Code. The following fixed values have been maintained: " " No 1 Yes (Header Level) 2 Yes (Item Level)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocIsCollvDoc` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_is_collection )` | `CHAR(1)` | Indicator that Document is a Collective Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCISCOLLVDOCCODE')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Is Collective Doc'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocIsCollvDoc',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,  
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
  technicalName: 'IWLFSMTMGDISCOD'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocIsCollvDocCode
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtDocIsCollvDocText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_is_collection )                                  as SettlmtMgmtDocIsCollvDoc,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                              as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_IS_COLLECTION'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
