---
name: I_SETTLMTITMSTATISTICALPRPTY
description: "This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' \" Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTY')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' \" Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting"
semantic_vi: "Settlement Item Statistical Property — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "item"
  - "statistical"
  - "property"
  - "settlmt"
  - "prpty"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTITMSTATISTICALPRPTY

**This CDS view exposes fixed values of the field Settlement Item Statistical Property. The following fixed values have been maintained: '' " Item Transferred to Header Totals and Accounting X Header Totals Adjusted, not Relevant to Accounting Y Not Header Totals and not Relevant to Accounting**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtItmStatisticalPrpty` | ✓ | |  | `cast( dd07l.domvalue_l as wkowrr )` | `CHAR(1)` | Item Control |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTITMSTATISTICALPRPTY')/$value)*

```abap
@EndUserText.label: 'Settlement Item Statistical Property'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtItmStatisticalPrpty',
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
  technicalName: 'IWLFSMTITMSTPR'    
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtItmStatisticalPrpty
  as select from dd07l

  composition [0..*] of I_SettlmtItmStatisticalPrptyT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wkowrr )                                  as SettlmtItmStatisticalPrpty,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                   as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WKOWRR'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
