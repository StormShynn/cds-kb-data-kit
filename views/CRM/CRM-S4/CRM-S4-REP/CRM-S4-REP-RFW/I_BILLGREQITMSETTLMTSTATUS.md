---
name: I_BILLGREQITMSETTLMTSTATUS
description: Billgreqitmsettlmtstatus
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BILLGREQITMSETTLMTSTATUS

**Billgreqitmsettlmtstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillgReqItemBillingStatus` | ✓ | |  | `domvalue_l` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BillgReqItmSettlmtStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillgReqItmSettlmtStatusText` | `I_BillgReqItmSettlmtStatusText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBILLREQISTLSTAT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Billing Request Item Settlement Status'

@VDM.viewType: #BASIC


@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'BillgReqItemBillingStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true

/* Enhancement Solution Order */
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, 
                                     #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER ]

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BillgReqItmSettlmtStatus'

define view I_BillgReqItmSettlmtStatus
  as select from dd07l
  association [1..*] to I_BillgReqItmSettlmtStatusText as _BillgReqItmSettlmtStatusText on $projection.BillgReqItemBillingStatus = _BillgReqItmSettlmtStatusText.BillgReqItemBillingStatus

{
      @ObjectModel.text.association: '_BillgReqItmSettlmtStatusText'
  key domvalue_l as BillgReqItemBillingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,

      _BillgReqItmSettlmtStatusText
}
where
      domname  = 'CRM_BILLING_SETTLEMENT_STATUS'
  and as4local = 'A'
```
