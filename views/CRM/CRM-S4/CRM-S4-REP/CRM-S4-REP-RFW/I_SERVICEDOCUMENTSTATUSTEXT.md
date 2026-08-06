---
name: I_SERVICEDOCUMENTSTATUSTEXT
description: Service DocumentUMENTSTATUSTEXT
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
  - document
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTSTATUSTEXT

**Service DocumentUMENTSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocumentStatus` | `domvalue_l` |
| key `Language` | `ddlanguage` |
| `ServiceDocumentStatusName` | `ddtext` |
| `_ServiceDocumentStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentStatus` | `I_ServiceDocumentStatus` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Status - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCSTATTEXT',
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
   representativeKey: 'ServiceDocumentStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentStatusText
  as select from dd07t
  association [1]    to I_ServiceDocumentStatus as _ServiceDocumentStatus on $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus
  association [1..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ServiceDocumentStatus'
  key domvalue_l as ServiceDocumentStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      ddtext     as ServiceDocumentStatusName,

      _ServiceDocumentStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_LIFECYCLE'
  and as4local = 'A'
```
