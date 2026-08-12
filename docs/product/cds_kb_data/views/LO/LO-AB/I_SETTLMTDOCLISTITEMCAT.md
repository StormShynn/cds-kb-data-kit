---
name: I_SETTLMTDOCLISTITEMCAT
description: "This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document"
semantic_vi: "Settlmt Doc List Item Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "doc"
  - "list"
  - "item"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - account
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
# I_SETTLMTDOCLISTITEMCAT

**This CDS view exposes fixed values of the field Settlement Document List item Category. The following fixed values have been maintained: '' " Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expenses Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expenses Settlements K Settlement Document List from Settlement Document Lists L Supplier Settlement M Settlement Document ist from Supplier Settlements * Generically for All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents 1 Accounting Document 2 Customer Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocListItemCat` | ✓ | |  | `cast( dd07l.domvalue_l as doctype_li )` | `CHAR(1)` | Category of List Document Item |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMCAT')/$value)*

```abap
@EndUserText.label: 'Settlmt Doc List Item Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDocListItemCat',
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
  technicalName: 'IWLFSMTDLSITCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDocListItemCat
  as select from dd07l
  
  composition [0..*] of I_SettlmtDocListItemCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as doctype_li )                                  as SettlmtDocListItemCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                        as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'DOCTYPE_LI'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
