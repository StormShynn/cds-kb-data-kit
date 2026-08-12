---
name: I_SRVCDOCQUOTATIONSTATUS
description: "Srvcdocquotationstatus"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCQUOTATIONSTATUS

**Srvcdocquotationstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentIsQuotation` | ✓ | |  | `domvalue_l` |  |  |
| `_SrvcDocQuotationStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocQuotationStatusText` | `I_SrvcDocQuotationStatusText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Quotation Status of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVQTNSTAT',
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
   representativeKey: 'ServiceDocumentIsQuotation',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL
define view I_SrvcDocQuotationStatus
  as select from dd07l
  association [1..*] to I_SrvcDocQuotationStatusText as _SrvcDocQuotationStatusText on $projection.ServiceDocumentIsQuotation = _SrvcDocQuotationStatusText.ServiceDocumentIsQuotation

{
      @ObjectModel.text.association: '_SrvcDocQuotationStatusText'
  key domvalue_l   as ServiceDocumentIsQuotation,

      _SrvcDocQuotationStatusText
}
where
      domname  = 'CRMS4_STAT_QUOTATION'
  and as4local = 'A'
```
