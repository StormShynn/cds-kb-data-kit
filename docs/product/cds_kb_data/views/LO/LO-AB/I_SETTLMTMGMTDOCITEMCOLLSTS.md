---
name: I_SETTLMTMGMTDOCITEMCOLLSTS
description: "This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: \" Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTS')/$value
semantic_en: "This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: \" Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation"
semantic_vi: "Doc Item Coll Status for Settlmt Mgmt — CDS view cơ bản dựa trên dd07l."
keywords:
  - "doc"
  - "item"
  - "coll"
  - "status"
  - "for"
  - "settlmt"
  - "mgmt"
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
---
# I_SETTLMTMGMTDOCITEMCOLLSTS

**This CDS view exposes fixed values of the field Status for Collection of Settlement Document Item. The following fixed values have been maintained: " Not Relevant 1 Open 2 Locked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCollSts` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_collection_status_item )` | `CHAR(1)` | Status for Collection of Settlement Document Item |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCOLLSTS')/$value)*

```abap
@EndUserText.label: 'Doc Item Coll Status for Settlmt Mgmt'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocItemCollSts',
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
  technicalName: 'IWLFSMTMDITCLS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocItemCollSts
  as select from dd07l
  
  composition [0..*] of I_SettlmtMgmtDocItemCollStsT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_collection_status_item  )                                 as SettlmtMgmtDocItemCollSts,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                        as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_COLLECTION_STATUS_ITEM'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
