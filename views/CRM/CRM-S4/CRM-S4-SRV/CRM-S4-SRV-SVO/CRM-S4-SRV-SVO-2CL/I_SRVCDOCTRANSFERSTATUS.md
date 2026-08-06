---
name: I_SRVCDOCTRANSFERSTATUS
description: Srvcdoctransferstatus
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCTRANSFERSTATUS

**Srvcdoctransferstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SrvcDocTransferStatus` | `cast ( domvalue_l as crms4_stat_transfer )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_ServiceDocTransferStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocTransferStatusText` | `I_SrvcDocTransferStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Transfer Status of Service Transaction'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ISERVTRANSFSTAT'
@Analytics.internalName:#LOCAL
@ObjectModel: {
   representativeKey: 'SrvcDocTransferStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   dataCategory: #VALUE_HELP,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true


define view entity I_SrvcDocTransferStatus
  as select from dd07l
  association [1..*] to I_SrvcDocTransferStatusText as _ServiceDocTransferStatusText on $projection.SrvcDocTransferStatus = _ServiceDocTransferStatusText.SrvcDocTransferStatus

{
      @ObjectModel.text.association: '_ServiceDocTransferStatusText'

  key cast ( domvalue_l as crms4_stat_transfer ) as SrvcDocTransferStatus,

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                           as DomainValue,

      _ServiceDocTransferStatusText
}
where
      domname  = 'CRMS4_STAT_TRANSFER'
  and as4local = 'A'
```
