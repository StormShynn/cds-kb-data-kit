---
name: I_SETTLMTDOCSIGNADJMT
description: "This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type"
semantic_vi: "Settlement Document Sign Adjustment — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "document"
  - "sign"
  - "adjustment"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCSIGNADJMT

**This CDS view exposes fixed values of the field Settlement Document Sign Adjustment. The following fixed values have been maintained: 1 No 2 For Credit Memos 3 For Invoices 4 According to Customizing Settings in Settlement Doc Type**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocSignAdjustment` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_adjust_sign_hdr )` | `CHAR(1)` | Adjust Plus/Minus Sign |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCSIGNADJMT')/$value)*

```abap
@EndUserText.label: 'Settlement Document Sign Adjustment'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDocSignAdjustment',
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
  technicalName: 'IWLFSDCADJSIGN'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDocSignAdjmt
  as select from dd07l

  composition [0..*] of I_SettlmtDocSignAdjmtText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wlf_adjust_sign_hdr )                      as SettlmtDocSignAdjustment,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                    as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_ADJUST_SIGN_HDR'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
