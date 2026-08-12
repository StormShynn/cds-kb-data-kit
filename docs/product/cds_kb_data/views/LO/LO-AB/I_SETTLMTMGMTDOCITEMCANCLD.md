---
name: I_SETTLMTMGMTDOCITEMCANCLD
description: "This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: \" \" is Active 1 Completed by Means of Item Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLD')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: \" \" is Active 1 Completed by Means of Item Cancellation"
semantic_vi: "Settlmt Mgmt Doc Item Cancelled — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "item"
  - "cancelled"
  - "cancld"
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
# I_SETTLMTMGMTDOCITEMCANCLD

**This CDS view exposes fixed values of the field Settlement Management Document Item Cancelled. The following fixed values have been maintained: " " is Active 1 Completed by Means of Item Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocItemCancld` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_item_canceled )` | `CHAR(1)` | Item Was Canceled |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCITEMCANCLD')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Item Cancelled'
@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocItemCancld',
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
  technicalName: 'IWLFSMDITCND'
}   
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocItemCancld 
as select from dd07l

  composition [0..*] of I_SettlmtMgmtDocItemCancldText as _Text
  
{
    @ObjectModel.text.association: '_Text'
    key cast(dd07l.domvalue_l as wlf_item_canceled )                                    as SettlmtMgmtDocItemCancld,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                  as DomainValue,

      /* Associations */
    _Text
}
where     
      dd07l.domname  = 'WLF_ITEM_CANCELED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
