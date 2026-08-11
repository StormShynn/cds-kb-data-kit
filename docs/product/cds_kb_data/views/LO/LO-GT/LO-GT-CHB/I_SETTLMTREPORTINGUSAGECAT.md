---
name: I_SETTLMTREPORTINGUSAGECAT
description: "Reporting Usage of a Settlement Document"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECAT')/$value
semantic_en: "Reporting Usage of a Settlement Document"
semantic_vi: "Reporting Usage of a Settlement Document — CDS view cơ bản dựa trên dd07l."
keywords:
  - "reporting"
  - "usage"
  - "settlement"
  - "document"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - bo:purchaseorder
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_SETTLMTREPORTINGUSAGECAT

**Reporting Usage of a Settlement Document**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtReportingUsageCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_lfart_reporting_usage )` | `CHAR(1)` | Reporting Usage of Settlement Document Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREPORTINGUSAGECAT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Reporting Usage of a Settlement Document'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@Consumption.ranked: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtReportingUsageCat',
  dataCategory: #VALUE_HELP,
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'SettlmtReportingUsageCat',
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE,
    #VALUE_HELP_PROVIDER
  ],
  usageType: {
    dataClass: #META,
    sizeCategory: #S,
    serviceQuality: #A
  }
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtReportingUsageCat
  as select from dd07l

  composition [0..*] of I_SettlmtReportingUsageCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_lfart_reporting_usage ) as SettlmtReportingUsageCat,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue,

      _Text
}
where
      dd07l.domname  = 'WB2_LFART_REPORTING_USAGE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
