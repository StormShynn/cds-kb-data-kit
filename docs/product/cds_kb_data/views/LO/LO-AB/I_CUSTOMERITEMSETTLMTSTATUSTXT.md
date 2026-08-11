---
name: I_CUSTOMERITEMSETTLMTSTATUSTXT
description: "This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation"
semantic_vi: "Customer Item Settlement Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "customer"
  - "item"
  - "settlement"
  - "status"
  - "text"
  - "settlmt"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTOMERITEMSETTLMTSTATUSTXT

**This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerItemSettlmtStatus` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_settlement_status_item_c )` | `CHAR(1)` | Settlement Status - Item - Customer |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CustomerItemSettlmtStatusName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_status_item_c_t preserving type )` | `CHAR(60)` | Description of Settlement Status - Item - Customer |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CustomerItemSettlmtStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUSTXT')/$value)*

```abap
@EndUserText.label: 'Customer Item Settlement Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CustomerItemSettlmtStatus',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFCUSTITSMTSTT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustomerItemSettlmtStatusTxt
  as select from dd07t

  association        to parent I_CustomerItemSettlmtStatus as _CustomerItemSettlmtStatus on $projection.CustomerItemSettlmtStatus = _CustomerItemSettlmtStatus.CustomerItemSettlmtStatus
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CustomerItemSettlmtStatus'
      @ObjectModel.text.element: ['CustomerItemSettlmtStatusName']
  key cast(dd07t.domvalue_l as wlf_settlement_status_item_c )                                  as CustomerItemSettlmtStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                         as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_status_item_c_t preserving type )                   as CustomerItemSettlmtStatusName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                         as DomainValue,

      /* Associations */
      _CustomerItemSettlmtStatus,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_STATUS_ITEM'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
