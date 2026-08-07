---
name: I_SRVCDOCQUOTATIONSTATUS_2
description: Srvcdocquotationstatus 2
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
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
# I_SRVCDOCQUOTATIONSTATUS_2

**Srvcdocquotationstatus 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocumentIsQuotation` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as crms4_stat_quotation preserving type )` |
| `_SrvcDocQuotationStatusText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocQuotationStatusText` | `I_SrvcDocQuotationStatusT_2` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Quotation Status of Service Transaction'

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

define view entity I_SrvcDocQuotationStatus_2 as select from dd07l
  association [1..*] to I_SrvcDocQuotationStatusT_2 as _SrvcDocQuotationStatusText on $projection.ServiceDocumentIsQuotation = _SrvcDocQuotationStatusText.ServiceDocumentIsQuotation

{
      @ObjectModel.text.association: '_SrvcDocQuotationStatusText'
      @Semantics.booleanIndicator: true
  key cast ( substring( domvalue_l, 1, 1 )  as crms4_stat_quotation preserving type )  as ServiceDocumentIsQuotation,

      _SrvcDocQuotationStatusText
}
where
      domname  = 'CRMS4_STAT_QUOTATION'
  and as4local = 'A'
```
