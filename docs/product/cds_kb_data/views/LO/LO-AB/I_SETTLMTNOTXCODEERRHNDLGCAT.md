---
name: I_SETTLMTNOTXCODEERRHNDLGCAT
description: "This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value
semantic_en: "This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error"
semantic_vi: "Missing Tax Code Error Handling Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "missing"
  - "tax"
  - "code"
  - "error"
  - "handling"
  - "category"
  - "settlmt"
  - "hndlg"
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
  - pricing
---
# I_SETTLMTNOTXCODEERRHNDLGCAT

**This view displays the parameter controls that decide the behavior when no tax code has been entered or has been found in pricing, although tax codes are active for the document. The following fixed values have been maintained: '' Error Message 1 Pricing Error 2 No Error**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtNoTxCodeErrHndlgCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_handle_tax_code_missing )` | `CHAR(1)` | Handling of Missing Tax Code |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTNOTXCODEERRHNDLGCAT')/$value)*

```abap
@EndUserText.label: 'Missing Tax Code Error Handling Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtNoTxCodeErrHndlgCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtNoTxCodeErrHndlgCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#VALUE_HELP_PROVIDER,
                          #ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET,  
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE, 
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
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'INOTAXERRCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtNoTxCodeErrHndlgCat
  as select from dd07l

  composition [0..*] of I_SettlmtNoTxCodeErrHndlgCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_handle_tax_code_missing )                                  as SettlmtNoTxCodeErrHndlgCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                         as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_HANDLE_TAX_CODE_MISSING'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
