---
name: I_SERVICECANCELLATIONPARTYTEXT
description: Servicecancellationpartytext
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
# I_SERVICECANCELLATIONPARTYTEXT

**Servicecancellationpartytext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContractCanclnParty` | ✓ | |  | `canc_party` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ServiceContrCanclnPartyName` |  | |  | `canc_party_t` |  |  |
| `_ServiceCancellationParty` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceCancellationParty` | `I_ServiceCancellationParty` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Party - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCPARTYT',
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
   representativeKey: 'ServiceContractCanclnParty',
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


define view I_ServiceCancellationPartyText
  as select from crmc_party_t

  association [1..1] to I_ServiceCancellationParty as _ServiceCancellationParty on $projection.ServiceContractCanclnParty = _ServiceCancellationParty.ServiceContractCanclnParty
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_ServiceCancellationParty'
  key canc_party   as ServiceContractCanclnParty,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu        as Language,

      @Semantics.text: true
      canc_party_t as ServiceContrCanclnPartyName,


      _ServiceCancellationParty,
      _Language
}
```
