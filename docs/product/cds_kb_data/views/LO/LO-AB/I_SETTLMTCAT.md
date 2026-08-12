---
name: I_SETTLMTCAT
description: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value
semantic_en: "This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting"
semantic_vi: "Settlement Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - material
---
# I_SETTLMTCAT

**This CDS view is used to select the settlement category. Domains: NAFKT Values: A - Final Settlement, Subsequent Settlement B - Correction Settlement, Subsequent Settlement C - Partial Settlement, Subsequent Settlement D - Pro Forma Invoice E - Expenses Settlement F - Material Adjustment G - Expenses Settlement H - Customer/Material Posting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtCat` | ✓ | |  | `cast( dd07l.domvalue_l as nafkt )` | `CHAR(1)` | Settlement Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlementCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtCat',
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
  technicalName: 'IWLFSMTCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtCat
  as select from dd07l

  composition [0..*] of I_SettlmtCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l  as nafkt )             as SettlmtCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'NAFKT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
