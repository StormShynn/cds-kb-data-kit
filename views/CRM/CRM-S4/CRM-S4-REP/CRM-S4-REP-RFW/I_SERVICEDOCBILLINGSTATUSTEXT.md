---
name: I_SERVICEDOCBILLINGSTATUSTEXT
description: "Service DocumentBILLINGSTATUSTEXT"
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
  - billing
  - service
  - text
  - status
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCBILLINGSTATUSTEXT

**Service DocumentBILLINGSTATUSTEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocBillingStatus` | ✓ | |  | `domvalue_l` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ServiceDocBillingStatusName` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocBillingStatus` | `I_ServiceDocBillingStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
sqlViewName: 'ISERVDOCBILSTATX',
compiler.compareFilter: true,
preserveKey:true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Billing Status of Srv Transaction - Text'

@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocBillingStatus',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

define view I_ServiceDocBillingStatusText
  as select from dd07t
  association [1..1] to I_ServiceDocBillingStatus as _ServiceDocBillingStatus on $projection.ServiceDocBillingStatus = _ServiceDocBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_Language                as _Language                on _Language.Language = $projection.Language
{

      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
  key domvalue_l       as ServiceDocBillingStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage       as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext           as ServiceDocBillingStatusName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      _ServiceDocBillingStatus,
      _Language
}
where
      domname  = 'CRMS4_STAT_BILLING'
  and as4local = 'A'
```
