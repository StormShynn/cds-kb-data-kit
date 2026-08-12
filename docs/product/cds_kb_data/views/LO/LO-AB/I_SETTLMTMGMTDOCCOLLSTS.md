---
name: I_SETTLMTMGMTDOCCOLLSTS
description: "This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTS')/$value
semantic_en: "This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation"
semantic_vi: "Settlmt Mgmt Doc Collection Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "mgmt"
  - "doc"
  - "collection"
  - "status"
  - "coll"
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
# I_SETTLMTMGMTDOCCOLLSTS

**This CDS view esposes fixed values of the field Settlement Management Document Collections Status. The following fixed values have been maintained: '' Not Relevant 1 Open 2 Locked 3 Settled 4 Open (Creation at Item Level) 5 Partially Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtDocCollSts` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_collection_status )` | `CHAR(1)` | Collective Settlement Status of Settlement Documents |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTDOCCOLLSTS')/$value)*

```abap
@EndUserText.label: 'Settlmt Mgmt Doc Collection Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtDocCollSts',
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
  technicalName: 'IWLFSMTMGDCCOLS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtDocCollSts
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtDocCollStsText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_collection_status )                                  as SettlmtMgmtDocCollSts,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_COLLECTION_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
