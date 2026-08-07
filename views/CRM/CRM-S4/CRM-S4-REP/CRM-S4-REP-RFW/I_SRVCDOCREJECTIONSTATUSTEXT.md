---
name: I_SRVCDOCREJECTIONSTATUSTEXT
description: Srvcdocrejectionstatustext
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
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCREJECTIONSTATUSTEXT

**Srvcdocrejectionstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentIsRejected` | ✓ | |  | `domvalue_l` |
| `Language` | ✓ | |  | `ddlanguage` |
| `SrvcDocRejectionStatusText` |  | |  | `ddtext` |
| `_SrvcDocRejectionStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocRejectionStatus` | `I_SrvcDocRejectionStatus` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Rejection Status of Srvc Transac - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVREJSTATTXT',
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
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,   
   representativeKey: 'ServiceDocumentIsRejected',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   }
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocRejectionStatusText
  as select from dd07t
  association [1]    to I_SrvcDocRejectionStatus as _SrvcDocRejectionStatus on $projection.ServiceDocumentIsRejected = _SrvcDocRejectionStatus.ServiceDocumentIsRejected
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcDocRejectionStatus'
  key domvalue_l as ServiceDocumentIsRejected,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as SrvcDocRejectionStatusText,

      _SrvcDocRejectionStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_CANCELLED'
  and as4local = 'A'
```
