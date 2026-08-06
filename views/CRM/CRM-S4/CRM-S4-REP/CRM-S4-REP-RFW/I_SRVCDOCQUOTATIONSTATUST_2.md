---
name: I_SRVCDOCQUOTATIONSTATUST_2
description: Srvcdocquotationstatust 2
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
# I_SRVCDOCQUOTATIONSTATUST_2

**Srvcdocquotationstatust 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocumentIsQuotation` | `cast ( substring( domvalue_l, 1, 1 ) as crms4_stat_quotation preserving type )` |
| key `Language` | `ddlanguage` |
| `SrvcDocQuotationStatusText` | `ddtext` |
| `_SrvcDocQuotationStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocQuotationStatus` | `I_SrvcDocQuotationStatus_2` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Quotation Status of Srvc Transac - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocumentIsQuotation',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SrvcDocQuotationStatusT_2  as select from dd07t
   association [1]    to I_SrvcDocQuotationStatus_2 as _SrvcDocQuotationStatus on $projection.ServiceDocumentIsQuotation = _SrvcDocQuotationStatus.ServiceDocumentIsQuotation
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcDocQuotationStatus'
      @Semantics.booleanIndicator: true
  key cast ( substring( domvalue_l, 1, 1 )  as crms4_stat_quotation preserving type )  as ServiceDocumentIsQuotation,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage as Language,
      @Semantics.text: true
      ddtext     as SrvcDocQuotationStatusText,

      _SrvcDocQuotationStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_QUOTATION'
  and as4local = 'A'
```
