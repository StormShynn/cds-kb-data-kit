---
name: I_SETTLMTTXCODEDETNCAT
description: "This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: \" Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCAT')/$value
semantic_en: "This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: \" Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination"
semantic_vi: "Settlement Tax Code Determination Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "tax"
  - "code"
  - "determination"
  - "cat"
  - "settlmt"
  - "detn"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - pricing
  - supplier
---
# I_SETTLMTTXCODEDETNCAT

**This view displays values that specify whether the tax code should be entered manually in settlement documents or determined from pricing. The following fixed values have been maintained: " Manual Entry 1 Supplier; Manual Entry; Customer: from Price Determination 2 Customer: Manual Entry; Supplier: fromPrice Determination 3 From Price Determination**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtTxCodeDetnCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_tax_code_determination )` | `CHAR(1)` | Tax Code Determination |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTTXCODEDETNCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Tax Code Determination Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlementTaxCodeDetnCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtTxCodeDetnCat',
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
  technicalName: 'ISETTAXDETCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtTxCodeDetnCat
  as select from dd07l

  composition [0..*] of I_SettlmtTxCodeDetnCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_tax_code_determination )                                  as SettlmtTxCodeDetnCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                        as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_TAX_CODE_DETERMINATION'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
