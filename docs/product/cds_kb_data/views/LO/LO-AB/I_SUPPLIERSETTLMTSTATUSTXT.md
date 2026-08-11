---
name: I_SUPPLIERSETTLMTSTATUSTXT
description: "This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUSTXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation"
semantic_vi: "Supplier Settlement Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "supplier"
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
  - bo:companycode
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPPLIERSETTLMTSTATUSTXT

**This CDS view exposes fixed values of the field Supplier Settlement Status. The following fixed values have been maintained: ' ' Not Relevant 1 Open 2 Blocked 3 Settled 4 Open (Creation at Item Level) 5 Party Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUSTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierSettlmtStatus` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_settlement_status_v )` | `CHAR(1)` | Settlement Status - Supplier |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SupplierSettlmtStatusName` |  | |  | `cast( dd07t.ddtext as wlf_settlement_status_v_desc preserving type )` | `CHAR(60)` | Settlement Status - Supplier Description |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SupplierSettlmtStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUSTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPPLIERSETTLMTSTATUSTXT')/$value)*

```abap
@EndUserText.label: 'Supplier Settlement Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SupplierSettlmtStatus',
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
  technicalName: 'IWLFSPLRSMTSTATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SupplierSettlmtStatusTxt
  as select from dd07t

  association        to parent I_SupplierSettlmtStatus as _SupplierSettlmtStatus on $projection.SupplierSettlmtStatus = _SupplierSettlmtStatus.SupplierSettlmtStatus
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
  
{
      @ObjectModel.foreignKey.association: '_SupplierSettlmtStatus'
      @ObjectModel.text.element: ['SupplierSettlmtStatusName']
  key cast( dd07t.domvalue_l as wlf_settlement_status_v )                                 as SupplierSettlmtStatus,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_settlement_status_v_desc preserving type )                as SupplierSettlmtStatusName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _SupplierSettlmtStatus,
      _Language
}

where
      dd07t.domname  = 'WLF_SETTLEMENT_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
