---
name: I_SRVCDOCLIFECYCLESTATUSTEXT
description: "Srvcdoclifecyclestatustext"
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
# I_SRVCDOCLIFECYCLESTATUSTEXT

**Srvcdoclifecyclestatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentStatus` | ✓ | |  | `cast(CustMgmtLifecycleUserStatus as crms4_stat_lifecycle preserving type )` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ServiceDocumentStatusName` |  | |  | `cast(CustMgmtLifecycleUserStsName as crms4_stat_lifecycle_desc )` |  |  |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentStatus` | `I_SrvcDocLifecycleStatus` | [1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Transaction Life Cycle Status - Txt'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVDOCLFCSTTXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocumentStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #M
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, 
                            #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ] }*/

define view I_SrvcDocLifecycleStatusText
  as select from I_CustMgmtLifecycleUserStsText

  association [1] to I_SrvcDocLifecycleStatus as _ServiceDocumentStatus on $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus

{
      @ObjectModel.foreignKey.association: '_ServiceDocumentStatus'
  key cast(CustMgmtLifecycleUserStatus as crms4_stat_lifecycle preserving type ) as ServiceDocumentStatus,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      cast(CustMgmtLifecycleUserStsName as crms4_stat_lifecycle_desc )           as ServiceDocumentStatusName,

      _Language,
      _ServiceDocumentStatus
}

union select from I_SrvcLifeCycleSystemStatusT

association [1] to I_SrvcDocLifecycleStatus as _ServiceDocumentStatus on $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus

{
       $session.client                                                          as mandt,
       @ObjectModel.foreignKey.association: '_ServiceDocumentStatus'
  key  cast(SrvcLifeCycleSystemStatus as crms4_stat_lifecycle preserving type ) as ServiceDocumentStatus,
       @Semantics.language:true
       @ObjectModel.foreignKey.association: '_Language'
  key  Language,
       @Semantics.text: true
       cast (SrvcLifeCycleSystemStatusName as crms4_stat_lifecycle_desc )       as ServiceDocumentStatusName,

       _Language,
       _ServiceDocumentStatus
}
```
