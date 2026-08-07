---
name: I_SRVCDOCREJECTIONSTATUS
description: Srvcdocrejectionstatus
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
# I_SRVCDOCREJECTIONSTATUS

**Srvcdocrejectionstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentIsRejected` | ✓ | |  | `domvalue_l` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_SrvcDocRejectionStatusText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocRejectionStatusText` | `I_SrvcDocRejectionStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Rejection Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVREJSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'ServiceDocumentIsRejected',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
}
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocRejectionStatus
  as select from dd07l
  association [1..*] to I_SrvcDocRejectionStatusText as _SrvcDocRejectionStatusText on $projection.ServiceDocumentIsRejected = _SrvcDocRejectionStatusText.ServiceDocumentIsRejected
{
      @ObjectModel.text.association: '_SrvcDocRejectionStatusText'
  key domvalue_l as ServiceDocumentIsRejected,
      
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,

      _SrvcDocRejectionStatusText
}
where
      domname  = 'CRMS4_STAT_CANCELLED'
  and as4local = 'A'
```
