---
name: I_SRVCDOCRELEASESTATUS
description: "Srvcdocreleasestatus"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - lease
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCRELEASESTATUS

**Srvcdocreleasestatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentIsReleased` | ✓ | |  | `domvalue_l` |  |  |
| `_SrvcDocReleaseStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocReleaseStatusText` | `I_SrvcDocReleaseStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Release Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVRELDSTAT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'ServiceDocumentIsReleased',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocReleaseStatus
  as select from dd07l
  association [1..*] to I_SrvcDocReleaseStatusText as _SrvcDocReleaseStatusText on $projection.ServiceDocumentIsReleased = _SrvcDocReleaseStatusText.ServiceDocumentIsReleased

{
      @ObjectModel.text.association: '_SrvcDocReleaseStatusText'
  key domvalue_l as ServiceDocumentIsReleased,

      _SrvcDocReleaseStatusText
}
where
      domname  = 'CRMS4_STAT_RELEASED'
  and as4local = 'A'
```
