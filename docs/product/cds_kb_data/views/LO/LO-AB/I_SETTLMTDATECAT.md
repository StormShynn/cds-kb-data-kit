---
name: I_SETTLMTDATECAT
description: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECAT')/$value
semantic_en: "This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral"
semantic_vi: "Settlement Date Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "date"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDATECAT

**This CDS view is used to select the settlement date category. Domains: WB2_SETTLEMENT_DATE_TYPE Values: Final Settlement 1 - Partial Settlement 2 - Delta Settlement 3 - Delta Accruals 4 - Accruals Deferral**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_settlement_date_type )` | `CHAR(1)` | Rebates: Settlement Date Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATECAT')/$value)*

```abap
@EndUserText.label: 'Settlement Date Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CndnContrSettlementDateCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDateCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY, 
                           #VALUE_HELP_PROVIDER,
                           #EXTRACTION_DATA_SOURCE],
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
  dataExtraction.enabled: true,
  internalName: #LOCAL, 
  technicalName: 'IWLFSMTDATECAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtDateCat
  as select from dd07l

  composition [0..*] of I_SettlmtDateCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_settlement_date_type )         as SettlmtDateCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                             as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_SETTLEMENT_DATE_TYPE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
