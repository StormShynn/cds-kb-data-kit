---
name: I_SERVICEDOCOPENSTATUS
description: Service DocumentOPENSTATUS
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
# I_SERVICEDOCOPENSTATUS

**Service DocumentOPENSTATUS**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocumentIsOpen` | `domvalue_l` |
| `_ServiceDocOpenStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocOpenStatusText` | `I_ServiceDocOpenStatusText` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISERVDOCOPNSTAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Open Status of Service Transaction'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'ServiceDocumentIsOpen'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION

define view I_ServiceDocOpenStatus
  as select from dd07l
  association [1..*] to I_ServiceDocOpenStatusText as _ServiceDocOpenStatusText on $projection.ServiceDocumentIsOpen = _ServiceDocOpenStatusText.ServiceDocumentIsOpen
{

      @ObjectModel.text.association: '_ServiceDocOpenStatusText'
  key domvalue_l as ServiceDocumentIsOpen,

      _ServiceDocOpenStatusText
}
where
      domname  = 'CRMS4_STAT_OPEN'
  and as4local = 'A'
```
