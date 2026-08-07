---
name: I_SERVICEDOCUMENTSTATUS
description: Service DocumentUMENTSTATUS
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
  - document
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTSTATUS

**Service DocumentUMENTSTATUS**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentStatus` | ✓ | |  | `domvalue_l` |
| `_ServiceDocumentStatusText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentStatusText` | `I_ServiceDocumentStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Status'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey     : 'ServiceDocumentStatus',
   sapObjectNodeType.name: 'ServiceDocumentStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   resultSet.sizeCategory:#XS,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@Search.searchable: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
define view I_ServiceDocumentStatus
  as select from dd07l
  association [1..*] to I_ServiceDocumentStatusText as _ServiceDocumentStatusText on $projection.ServiceDocumentStatus = _ServiceDocumentStatusText.ServiceDocumentStatus

{
      @ObjectModel.text.association: '_ServiceDocumentStatusText'
      @EndUserText.label: 'Life Cycle Status'
      @Search.defaultSearchElement: true
  key domvalue_l as ServiceDocumentStatus,

      _ServiceDocumentStatusText
}
where
      domname  = 'CRMS4_STAT_LIFECYCLE'
  and as4local = 'A'
```
