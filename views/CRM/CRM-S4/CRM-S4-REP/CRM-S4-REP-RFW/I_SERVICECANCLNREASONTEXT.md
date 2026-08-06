---
name: I_SERVICECANCLNREASONTEXT
description: Servicecanclnreasontext
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - service
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECANCLNREASONTEXT

**Servicecanclnreasontext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContrCancellationReason` | `canc_reason` |
| key `Language` | `langu` |
| `ServiceContrCanclnReasonName` | `canc_reason_t` |
| `_ServiceCancellationReason` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCancellationReason` | `I_ServiceCancellationReason` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Reason - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCREASONT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceContrCancellationReason',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true


define view I_ServiceCanclnReasonText
  as select from crmc_cancreasont

  association [1..1] to I_ServiceCancellationReason as _ServiceCancellationReason on $projection.ServiceContrCancellationReason = _ServiceCancellationReason.ServiceContrCancellationReason
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_ServiceCancellationReason'
  key canc_reason   as ServiceContrCancellationReason,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu         as Language,

      @Semantics.text: true
      canc_reason_t as ServiceContrCanclnReasonName,


      _ServiceCancellationReason,
      _Language

}
```
