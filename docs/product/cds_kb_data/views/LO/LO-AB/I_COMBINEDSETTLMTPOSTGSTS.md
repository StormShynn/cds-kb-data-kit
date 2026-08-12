---
name: I_COMBINEDSETTLMTPOSTGSTS
description: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTS')/$value
semantic_en: "This CDS view exposes fixed values of the Combined Settlement Posting Statuses field."
semantic_vi: "Combined Settlement Posting Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "combined"
  - "settlement"
  - "posting"
  - "status"
  - "settlmt"
  - "postg"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - bo:purchaseorder
---
# I_COMBINEDSETTLMTPOSTGSTS

**This CDS view exposes fixed values of the Combined Settlement Posting Statuses field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CombinedSettlmtPostgSts` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_rfbsk_combined_settlement )` | `CHAR(1)` | Posting Status for Combined Settlement |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMBINEDSETTLMTPOSTGSTS')/$value)*

```abap
@EndUserText.label: 'Combined Settlement Posting Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CombinedSettlmtPostgSts',
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
  technicalName: 'IWLFCBNDSMTPSTS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CombinedSettlmtPostgSts
  as select from dd07l
  
  composition [0..*] of I_CombinedSettlmtPostgStsText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wlf_rfbsk_combined_settlement )                                  as CombinedSettlmtPostgSts,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                          as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_RFBSK_COMBINED_SETTLEMENT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
