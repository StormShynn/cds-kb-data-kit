---
name: I_SETTLMTDOCTYPEVARIANT
description: "This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value
semantic_en: "This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection"
semantic_vi: "Settlement Document Type Variant — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "document"
  - "type"
  - "variant"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTDOCTYPEVARIANT

**This CDS view exposes the values for Variant of the Settlement Document Type such as Generic, Supplier Settlement List, Customer Settlement List, etc. The following fixed values have been maintained: '' Generic B Settlement Document D Supplier Settlement List C Customer Settlement List K Settlement Document List A Supplier Billing Document H Expense Settlement L Supplier Settlement G Customer Settlement W Supplier Settlement List Entry V Settlement Document Collection**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocTypeVariant` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_lfart_type )` | `CHAR(1)` | Settlement Document Type Variant |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCTYPEVARIANT')/$value)*

```abap
@EndUserText.label: 'Settlement Document Type Variant'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDocTypeVariant',
  modelingPattern: #ANALYTICAL_DIMENSION,
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
  technicalName: 'ISETDOCVAR'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtDocTypeVariant
  as select from dd07l

  composition [0..*] of I_SettlmtDocTypeVariantT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_lfart_type )                    as SettlmtDocTypeVariant,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                              as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_LFART_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
