---
name: I_SERVICEDOCERRORSTATUSTEXT
description: Service DocumentERRORSTATUSTEXT
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
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCERRORSTATUSTEXT

**Service DocumentERRORSTATUSTEXT**

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
| `Language` | ✓ | |  | `ddlanguage` |
| `ServiceDocumentHasErrorName` |  | |  | `ddtext` |
| `_ServiceDocHasError` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocHasError` | `I_ServiceDocErrorStatus` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Error Status of Srvc Transaction - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCERRSTATX',
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
   representativeKey: 'ServiceDocumentHasError',
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



define view I_ServiceDocErrorStatusText
  as select from dd07t
  association [1..1] to I_ServiceDocErrorStatus as _ServiceDocHasError on $projection.ServiceDocumentHasError = _ServiceDocHasError.ServiceDocumentHasError
  association [1..1] to I_Language              as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
  key domvalue_l as ServiceDocumentHasError,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as ServiceDocumentHasErrorName,

      _ServiceDocHasError,
      _Language
}
where
      domname  = 'CRMS4_STAT_ERROR'
  and as4local = 'A'
```
