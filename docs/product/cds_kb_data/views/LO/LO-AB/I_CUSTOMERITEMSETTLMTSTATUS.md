---
name: I_CUSTOMERITEMSETTLMTSTATUS
description: "This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUS')/$value
semantic_en: "This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation"
semantic_vi: "Customer Item Settlement Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "customer"
  - "item"
  - "settlement"
  - "status"
  - "settlmt"
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
# I_CUSTOMERITEMSETTLMTSTATUS

**This CDS view exposes fixed values of the field Customer Item Settlement Status. The following fixed values have been maintained: ‘ ‘ Not Relevant 1 Open 2 Blocked 3 Settled 6 Completed Through Cancellation**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerItemSettlmtStatus` | ✓ | |  | `cast(dd07l.domvalue_l as wlf_settlement_status_item_c )` | `CHAR(1)` | Settlement Status - Item - Customer |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERITEMSETTLMTSTATUS')/$value)*

```abap
@EndUserText.label: 'Customer Item Settlement Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'CustomerItemSettlmtStatus',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CustomerItemSettlmtStatus',
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
  technicalName: 'IWLFCUSTITSMTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CustomerItemSettlmtStatus
  as select from dd07l

  composition [0..*] of I_CustomerItemSettlmtStatusTxt as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wlf_settlement_status_item_c )                                  as CustomerItemSettlmtStatus,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                         as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WLF_SETTLEMENT_STATUS_ITEM'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
