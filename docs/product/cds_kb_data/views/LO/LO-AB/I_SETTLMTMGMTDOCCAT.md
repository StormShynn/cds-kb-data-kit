---
name: I_SETTLMTMGMTDOCCAT
description: "This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: \" \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: \" \" Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List"
semantic_vi: "Settlement Management Document Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "management"
  - "document"
  - "cat"
  - "settlmt"
  - "mgmt"
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
# I_SETTLMTMGMTDOCCAT

**This CDS view exposes fixed values of the field Settlement Management Document Category. The following fixed values have been maintained: " " Not Assigned A Supplier Billing Document B Settlement Document C Customer Settlement List D Supplier Settlement List E Settlement Document List from Supplier Billing Documents F Settlement Document List from Settlement Documents G Customer Settlement H Expense Settlement I Settlement Document List from Customer Settlements J Settlement Document List from Expense Settlements K Settlement Document List from Settlement Document Lists * All Document Categories X Undefined Document Category 0 Settlement Document List from External Documents L Supplier Settlement M Settlement Document List from Supplier Settlements N Any Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocCat` | ✓ | |  | `cast(dd07l.domvalue_l as doctype )` | `CHAR(1)` | Settlement Management Document Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Management Document Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocCat',
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
  technicalName: 'IWLFSMTMGDOCCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocCat
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtDocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as doctype )                                  as SettlmtMgmtDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                    as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'DOCTYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
