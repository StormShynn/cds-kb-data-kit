---
name: I_SERVICECANCELLATIONPARTY
description: Servicecancellationparty
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECANCELLATIONPARTY

**Servicecancellationparty**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContractCanclnParty` | `canc_party` |
| `_ServiceCancellationPartyText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCancellationPartyText` | `I_ServiceCancellationPartyText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Party'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCPARTY',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel: {
   representativeKey: 'ServiceContractCanclnParty',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER]
}
@Consumption.ranked: true
@Search.searchable: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}

//! Code list for the Service Contract Cancellation Party
@ObjectModel.sapObjectNodeType.name: 'ServiceContractCanclnType'

define view I_ServiceCancellationParty
  as select from crmc_party

  association [1..*] to I_ServiceCancellationPartyText as _ServiceCancellationPartyText on $projection.ServiceContractCanclnParty = _ServiceCancellationPartyText.ServiceContractCanclnParty

{

      @ObjectModel.text.association: '_ServiceCancellationPartyText'
      @Search: { ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Search.defaultSearchElement: true
  key canc_party as ServiceContractCanclnParty,

      _ServiceCancellationPartyText

}
```
