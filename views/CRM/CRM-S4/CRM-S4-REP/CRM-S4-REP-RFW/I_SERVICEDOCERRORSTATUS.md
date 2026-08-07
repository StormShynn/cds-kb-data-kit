---
name: I_SERVICEDOCERRORSTATUS
description: Service DocumentERRORSTATUS
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
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCERRORSTATUS

**Service DocumentERRORSTATUS**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentHasError` | ✓ | |  | `domvalue_l` |
| `_ServiceDocHasErrorText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocHasErrorText` | `I_ServiceDocErrorStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Error Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCERRSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ObjectModel: {
   representativeKey: 'ServiceDocumentHasError',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocErrorStatus
  as select from dd07l
  association [1..*] to I_ServiceDocErrorStatusText as _ServiceDocHasErrorText on $projection.ServiceDocumentHasError = _ServiceDocHasErrorText.ServiceDocumentHasError

{
      @ObjectModel.text.association: '_ServiceDocHasErrorText'
  key domvalue_l as ServiceDocumentHasError,

      _ServiceDocHasErrorText
}
where
      domname  = 'CRMS4_STAT_ERROR'
  and as4local = 'A'
```
