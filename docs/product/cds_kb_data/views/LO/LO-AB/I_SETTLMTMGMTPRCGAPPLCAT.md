---
name: I_SETTLMTMGMTPRCGAPPLCAT
description: "This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value
semantic_en: "This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution"
semantic_vi: "Pricing Application Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "pricing"
  - "application"
  - "category"
  - "settlmt"
  - "mgmt"
  - "prcg"
  - "appl"
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
  - bo:pricingcondition
  - pricing
---
# I_SETTLMTMGMTPRCGAPPLCAT

**This view is used to display which parameter controls MM or SD price determination that should be used during the creation of the settlement management document. The following fixed values have been maintained: M Purchasing V Sales/Distribution**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtPrcgApplCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_kappl_pricing )` | `CHAR(2)` | Application for Price Determination |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTPRCGAPPLCAT')/$value)*

```abap
@EndUserText.label: 'Pricing Application Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtMgmtPrcgApplCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtPrcgApplCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER, 
                          #SEARCHABLE_ENTITY ],
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
  technicalName: 'ISMPRCAPPLCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtMgmtPrcgApplCat
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtPrcgApplCatT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_kappl_pricing )                                  as SettlmtMgmtPrcgApplCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                               as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_KAPPL_PRICING'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
