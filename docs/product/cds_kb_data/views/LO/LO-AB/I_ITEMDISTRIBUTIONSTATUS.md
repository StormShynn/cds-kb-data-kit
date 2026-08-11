---
name: I_ITEMDISTRIBUTIONSTATUS
description: "This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value
semantic_en: "This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?"
semantic_vi: "Item Distribution Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "item"
  - "distribution"
  - "status"
  - "domain"
  - "value"
tags:
  - LO
  - bo:plant
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_ITEMDISTRIBUTIONSTATUS

**This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemDistributionStatus` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_distribution_status )` | `CHAR(1)` | Distribution Status of Settlement Item |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUS')/$value)*

```abap
@EndUserText.label: 'Item Distribution Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'ItemDistributionStatus',
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
  technicalName: 'IWLFITMDISTRST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_ItemDistributionStatus
  as select from dd07l

  composition [0..*] of I_ItemDistributionStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_distribution_status )             as ItemDistributionStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                 as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_DISTRIBUTION_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
