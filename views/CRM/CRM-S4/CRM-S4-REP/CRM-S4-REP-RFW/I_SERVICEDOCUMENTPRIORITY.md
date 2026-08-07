---
name: I_SERVICEDOCUMENTPRIORITY
description: Service DocumentUMENTPRIORITY
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTPRIORITY

**Service DocumentUMENTPRIORITY**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentPriority` | ✓ | |  | `priority` |
| `_ServiceDocumentPriorityText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentPriorityText` | `I_ServiceDocumentPriorityText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Priority'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCPRIO',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'ServiceDocumentPriority',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   dataCategory:#VALUE_HELP,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
   #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE],
   resultSet.sizeCategory:#XS
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true
  }
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

//! Code list for the Service Transaction Priority
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentPriority'
    
define view I_ServiceDocumentPriority
  as select from scprio
  association [0..*] to I_ServiceDocumentPriorityText as _ServiceDocumentPriorityText on $projection.ServiceDocumentPriority = _ServiceDocumentPriorityText.ServiceDocumentPriority
{

      @ObjectModel.text.association: '_ServiceDocumentPriorityText'
      @Search.defaultSearchElement: true
  key priority as ServiceDocumentPriority,

      _ServiceDocumentPriorityText
}
```
