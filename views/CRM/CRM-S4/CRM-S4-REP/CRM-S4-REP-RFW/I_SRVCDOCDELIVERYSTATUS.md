---
name: I_SRVCDOCDELIVERYSTATUS
description: Srvcdocdeliverystatus
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - delivery
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCDELIVERYSTATUS

**Srvcdocdeliverystatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SrvcDocItmDeliveryStatus` | `domvalue_l` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_SrvcDocDeliveryStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocDeliveryStatusText` | `I_SrvcDocDeliveryStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Delivery Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDELSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'SrvcDocItmDeliveryStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
   #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE],
   dataCategory: #VALUE_HELP,
   sapObjectNodeType.name: 'SrvcDocDeliveryStatus'
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
  }
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_SrvcDocDeliveryStatus
  as select from dd07l
  association [1..*] to I_SrvcDocDeliveryStatusText as _SrvcDocDeliveryStatusText on $projection.SrvcDocItmDeliveryStatus = _SrvcDocDeliveryStatusText.SrvcDocItmDeliveryStatus

{

      @ObjectModel.text.association: '_SrvcDocDeliveryStatusText'
  key domvalue_l       as SrvcDocItmDeliveryStatus,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l as DomainValue,

      _SrvcDocDeliveryStatusText
}
where
      domname  = 'CRMS4_STAT_DELIVERY'
  and as4local = 'A'
```
