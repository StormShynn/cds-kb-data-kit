---
name: I_SERVICECANCELLATIONREASON
description: "Servicecancellationreason"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SERVICECANCELLATIONREASON

**Servicecancellationreason**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContrCancellationReason` | ✓ | |  | `canc_reason` |  |  |
| `ServiceContractCanclnParty` |  | |  | `cancparty` |  |  |
| `_ServiceCanclnReasonText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCanclnReasonText` | `I_ServiceCanclnReasonText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Reason'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCREASON',
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
   representativeKey: 'ServiceContrCancellationReason',
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

//! Code list for the Service Contract Cancellation Reason
@ObjectModel.sapObjectNodeType.name: 'ServiceContrCancellationReason'

define view I_ServiceCancellationReason
  as select from crmc_cancreason

  association [1..*] to I_ServiceCanclnReasonText as _ServiceCanclnReasonText on $projection.ServiceContrCancellationReason = _ServiceCanclnReasonText.ServiceContrCancellationReason

{
      @ObjectModel.text.association: '_ServiceCanclnReasonText'
      @Search: { ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Search.defaultSearchElement: true
  key canc_reason as ServiceContrCancellationReason,

      @Semantics.text: true
      cancparty   as ServiceContractCanclnParty,

      _ServiceCanclnReasonText

}
```
