---
name: I_SETTLMTMGMTDOCACCTTYPE
description: "This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPE')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer"
semantic_vi: "Settlement Management Doc Acct Type — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "management"
  - "doc"
  - "acct"
  - "type"
  - "settlmt"
  - "mgmt"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SETTLMTMGMTDOCACCTTYPE

**This CDS view exposes fixed values of the field Settlement Management Document Account Type. The following fixed values have been maintained: K Supplier D Customer**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocAcctType` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_koart )` | `CHAR(1)` | Account Type for Which the Bank Data Was Entered |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCACCTTYPE')/$value)*

```abap
@EndUserText.label: 'Settlement Management Doc Acct Type'
@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocAcctType',
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
  technicalName: 'IWLFSMTDOCACCTP'
}   
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocAcctType
  as select from dd07l
  
  composition [0..*] of I_SettlmtMgmtDocAcctTypeText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wlf_koart )                      as SettlmtMgmtDocAcctType,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                          as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_KOART'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
