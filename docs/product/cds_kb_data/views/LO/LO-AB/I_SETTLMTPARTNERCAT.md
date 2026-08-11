---
name: I_SETTLMTPARTNERCAT
description: "This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: \" Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: \" Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information"
semantic_vi: "Settlement Partner Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "partner"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTPARTNERCAT

**This CDS view exposes fixed values of the field Settlement Partner Category. The following fixed values have been maintained: " Standard 1 Only Supplier Side 2 Only Customer Side 3 None 4 Personnel Number 5 Only Supplier Side - Customer for Information 6 Only Customer Side - Supplier for Information**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtPartnerCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_settlement_party )` | `CHAR(1)` | Settlement Partner Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPARTNERCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Partner Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlementPartnerCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtPartnerCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET,  
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE, 
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
  technicalName: 'IWLFSMTPARTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtPartnerCat
  as select from dd07l

  composition [0..*] of I_SettlmtPartnerCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_settlement_party )                                  as SettlmtPartnerCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                  as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_SETTLEMENT_PARTY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
