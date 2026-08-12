---
name: I_CUSTOMERSETTLMTSTATUSTXT
description: "This CDS view exposes fixed values of the Customer Settlement Status field."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTSTATUSTXT')/$value
semantic_en: "This CDS view exposes fixed values of the Customer Settlement Status field."
semantic_vi: "Customer Settlement Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "customer"
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
# I_CUSTOMERSETTLMTSTATUSTXT

**This CDS view exposes fixed values of the Customer Settlement Status field.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerSettlmtStatus` | ✓ | |  | `cast(dd07t.domvalue_l as wlf_settlement_status_c )` | `CHAR(1)` | Settlement Status - Customer |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CustomerSettlmtStatusName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_status_c_desc preserving type )` | `CHAR(60)` | Settlement Status - Customer Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CustomerSettlmtStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTSTATUSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERSETTLMTSTATUSTXT')/$value)*

```abap
@EndUserText.label: 'Customer Settlement Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CustomerSettlmtStatus',
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
  technicalName: 'IWLFCUSTSMTSTATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustomerSettlmtStatusTxt
  as select from dd07t

  association        to parent I_CustomerSettlmtStatus as _CustomerSettlmtStatus on $projection.CustomerSettlmtStatus = _CustomerSettlmtStatus.CustomerSettlmtStatus
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  
{
      @ObjectModel.foreignKey.association: '_CustomerSettlmtStatus'
      @ObjectModel.text.element: ['CustomerSettlmtStatusName']
  key cast(dd07t.domvalue_l as wlf_settlement_status_c )                                  as CustomerSettlmtStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_status_c_desc preserving type )                as CustomerSettlmtStatusName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _CustomerSettlmtStatus,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
