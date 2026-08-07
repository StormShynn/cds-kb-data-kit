---
name: I_SERVICEDOCUMENTTYPE
description: Service DocumentUMENTTYPE
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
# I_SERVICEDOCUMENTTYPE

**Service DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  | `process_type` |  |  |
| `ServiceObjectType` |  | |  | `object_type` |  |  |
| `CustMgmtServiceTeamProfile` |  | |  | `service_team_profile` |  |  |
| `SrvcProcessStepOverviewProfile` |  | |  | `proc_stp_ovw_prfl` |  |  |
| `ServiceDocumentTemplateType` |  | |  | `template_type` |  |  |
| `SrvcDocTypeBlockingStatus` |  | |  | `process_blocked` |  |  |
| `StatusProfile` |  | |  | `user_stat_proc` |  |  |
| `SrvcRejectionReasonProfile` |  | |  | `rejprofile` |  |  |
| `SrvcMgmtPrtnDetnProcedure` |  | |  | `part_determ_proc` |  |  |
| `_ServiceDocumentTypeText` | | ✓ | | | | |
| `_ServiceObjectTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentTypeText` | `I_ServiceDocumentTypeText` | [1..*] |
| `_ServiceObjectTypeText` | `I_BusinessObjTypeText` | [1..*] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCTYPE',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Service Transaction Type'
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'ServiceDocumentType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable
@Metadata.allowExtensions:true
//! Code list for the Service Transaction Type
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentType'

define view I_ServiceDocumentType
  as select from crmc_proc_type
  association [1..*] to I_ServiceDocumentTypeText as _ServiceDocumentTypeText on $projection.ServiceDocumentType = _ServiceDocumentTypeText.ServiceDocumentType

  association [1..*] to I_BusinessObjTypeText     as _ServiceObjectTypeText   on $projection.ServiceObjectType = _ServiceObjectTypeText.BusinessObjectType
{


      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @ObjectModel.text.association: '_ServiceDocumentTypeText'
  key process_type         as ServiceDocumentType,
      @ObjectModel.text.association: '_ServiceObjectTypeText'
      object_type          as ServiceObjectType,
      service_team_profile as CustMgmtServiceTeamProfile,
      proc_stp_ovw_prfl    as SrvcProcessStepOverviewProfile,
      template_type        as ServiceDocumentTemplateType,
      process_blocked      as SrvcDocTypeBlockingStatus,
      user_stat_proc       as StatusProfile,
      rejprofile           as SrvcRejectionReasonProfile,
      part_determ_proc     as SrvcMgmtPrtnDetnProcedure,
      _ServiceDocumentTypeText,
      _ServiceObjectTypeText
}
```
