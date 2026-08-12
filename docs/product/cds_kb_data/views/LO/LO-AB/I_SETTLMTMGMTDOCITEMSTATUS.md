---
name: I_SETTLMTMGMTDOCITEMSTATUS
description: "This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: \" Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUS')/$value
semantic_en: "This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: \" Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)"
semantic_vi: "Settlmt Mgmt Doc Item Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "item"
  - "status"
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
# I_SETTLMTMGMTDOCITEMSTATUS

**This CDS view exposes fixed values of the field Item Status. The following fixed values have been maintained: " Item is active 1 Item Is Inactive (Collective Document Has Been Generated) 2 Item Is Inactive (Settlement Document Has Been Generated)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemStatus` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_item_status )` | `CHAR(1)` | Item Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMSTATUS')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Item Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocItemStatus',
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
  technicalName: 'IWLFSMDITSTAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocItemStatus
  as select from dd07l
  
  composition [0..*] of I_SettlmtMgmtDocItemStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_item_status )          as SettlmtMgmtDocItemStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                     as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_ITEM_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
