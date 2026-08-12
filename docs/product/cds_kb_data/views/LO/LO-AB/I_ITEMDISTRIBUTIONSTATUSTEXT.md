---
name: I_ITEMDISTRIBUTIONSTATUSTEXT
description: "This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUSTEXT')/$value
semantic_en: "This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?"
semantic_vi: "Item Distribution Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "item"
  - "distribution"
  - "status"
  - "text"
  - "language"
  - "name"
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
# I_ITEMDISTRIBUTIONSTATUSTEXT

**This CDS view is used to select the Item Distribution Status. The following values have been maintained: ‘’ Distribution Is Not Active 1 Relevant for Distribution 2 Not Relevant for Distribution 3 Distribution Incomplete 4 Distribution Carried Out 9 Item is Distribution Item This CDS view provides the prerequisites for answering the following business questions: What is the item distribution status?**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemDistributionStatus` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_distribution_status )` | `CHAR(1)` | Distribution Status of Settlement Item |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `ItemDistributionStatusName` |  | |  | `cast( dd07t.ddtext as wlf_distribution_status_txt preserving type )` | `CHAR(60)` | Description of Distribution Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_ItemDistributionStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ITEMDISTRIBUTIONSTATUSTEXT')/$value)*

```abap
@EndUserText.label: 'Item Distribution Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ItemDistributionStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFITMDISTRSTT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ItemDistributionStatusText
  as select from dd07t

  association        to parent I_ItemDistributionStatus as _ItemDistributionStatus on $projection.ItemDistributionStatus = _ItemDistributionStatus.ItemDistributionStatus
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_ItemDistributionStatus'
      @ObjectModel.text.element: ['ItemDistributionStatusName']
  key cast( dd07t.domvalue_l as wlf_distribution_status )                                  as ItemDistributionStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_distribution_status_txt preserving type )                  as ItemDistributionStatusName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _ItemDistributionStatus,
      _Language
}

where
      dd07t.domname  = 'WLF_DISTRIBUTION_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
