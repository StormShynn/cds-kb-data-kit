---
name: I_SRVCDOCEXECUTIONSTATUSTEXT
description: Srvcdocexecutionstatustext
app_component: CRM-S4-SRV-SVO-2CL
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCEXECUTIONSTATUSTEXT

**Srvcdocexecutionstatustext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `searchable` | `true` |

## Source Code

```abap
@EndUserText.label: 'Service Transact Execution Status - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'SrvcDocExecutionStatus',
    usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING},
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}

@Analytics: {
    technicalName: 'ISRVCDOCEXCSTTXT',
    dataExtraction.enabled: true
}

@Search:
{ searchable: true }

@Metadata: {
    ignorePropagatedAnnotations: true
}
define view entity I_SrvcDocExecutionStatusText
  as select from           crms4c_stat_exec

    left outer to one join dd07t on crms4c_stat_exec.stat_execution = dd07t.domvalue_l

  association [1..1] to I_SrvcDocExecutionStatus as _SrvcDocExecutionStatus on  crms4c_stat_exec.stat_execution = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                            and crms4c_stat_exec.stat_quotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association [1..1] to I_Indicator              as _SrvcDocIsQuotation     on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.IndicatorValue

  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation'
      @Semantics.booleanIndicator
  key crms4c_stat_exec.stat_quotation                   as ServiceDocumentIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
  key crms4c_stat_exec.stat_execution                   as SrvcDocExecutionStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,


      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as SrvcDocExecutionStatusText,
      _SrvcDocExecutionStatus,
      _SrvcDocIsQuotation,
      _Language

}

where
      dd07t.domname  = 'CRMS4_STAT_MAINTENANCE'
  and dd07t.as4local = 'A'
```
