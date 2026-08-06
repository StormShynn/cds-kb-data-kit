---
name: I_SRVCCANCLNPROCEDURETEXT
description: Srvccanclnproceduretext
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCCANCLNPROCEDURETEXT

**Srvccanclnproceduretext**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SrvcCanclnProcedure` | `cancproc` |
| key `Language` | `langu` |
| `SrvcCanclnProcedureText` | `cancproc_t` |
| `_SrvcCanclnProcedure` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcCanclnProcedure` | `I_SrvcCanclnProcedure` | [1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Cancellation Procedure - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCANCPROCTXT',
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
   representativeKey: 'SrvcCanclnProcedure',
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

define view I_SrvcCanclnProcedureText
  as select from crmc_cancproc_t
  association [1]    to I_SrvcCanclnProcedure as _SrvcCanclnProcedure on $projection.SrvcCanclnProcedure = _SrvcCanclnProcedure.SrvcCanclnProcedure
  association [1..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SrvcCanclnProcedure'
  key cancproc   as SrvcCanclnProcedure,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,
      @Semantics.text: true
      cancproc_t as SrvcCanclnProcedureText,

      _SrvcCanclnProcedure,
      _Language
}
```
