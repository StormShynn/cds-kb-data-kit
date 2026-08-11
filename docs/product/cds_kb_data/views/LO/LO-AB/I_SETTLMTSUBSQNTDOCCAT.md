---
name: I_SETTLMTSUBSQNTDOCCAT
description: "This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries"
semantic_vi: "Settlmt Subsequent Doc Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "subsequent"
  - "doc"
  - "category"
  - "subsqnt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTSUBSQNTDOCCAT

**This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtSubsqntDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wftypn )` | `CHAR(2)` | Document Category of Subsequent Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCAT')/$value)*

```abap
@EndUserText.label: 'Settlmt Subsequent Doc Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtSubsqntDocCat',
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
  technicalName: 'IWLFSMTSSUBDCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtSubsqntDocCat
  as select from dd07l

  composition [0..*] of I_SettlmtSubsqntDocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wftypn )                                  as SettlmtSubsqntDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                    as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WFTYPN'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
