---
name: I_RESVNCOMPLETIONSTATUSTEXT
description: Resvncompletionstatustext
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-RS
  - interface-view
  - text-view
  - text
  - status
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESVNCOMPLETIONSTATUSTEXT

**Resvncompletionstatustext**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `ReservationCompletionStatus` | `cast ( dd07t.domvalue_l as imrs_resvn_compltn_status_code )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `ResvnCompletionStatusText` | `cast( dd07t.ddtext as imrs_resvn_compltn_status_text preserving type )` |
| `_ResvnCompletionStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ResvnCompletionStatus` | `I_ResvnCompletionStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Completion Status of Reservation - Text'
@AbapCatalog.sqlViewName: 'IRESCMPLSTSTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel : {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'ReservationCompletionStatus',
  usageType : {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  }
}
@ObjectModel.sapObjectNodeType.name: 'ReservationCompletionStatusTxt' 
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}

define view I_ResvnCompletionStatusText
  as select from dd07t

  /*+[hideWarning] { "IDS" :  [ "CALCULATED_FIELD_CHECK" ] } */
  association [1..1] to I_ResvnCompletionStatus as _ResvnCompletionStatus 
    on $projection.ReservationCompletionStatus = _ResvnCompletionStatus.ReservationCompletionStatus
  association [0..1] to I_Language as _Language              
    on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @EndUserText.label: 'Status'
      @ObjectModel.foreignKey.association: '_ResvnCompletionStatus'
      @ObjectModel.text.element: ['ResvnCompletionStatusText']
  key cast ( dd07t.domvalue_l as imrs_resvn_compltn_status_code ) as ReservationCompletionStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      
      @EndUserText.label: 'Status Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as imrs_resvn_compltn_status_text preserving type ) as ResvnCompletionStatusText,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, 
                                      #TO_COMPOSITION_ROOT] 
      _ResvnCompletionStatus,
      _Language

}
where
      dd07t.domname  = 'IMRS_RESVN_COMPLTN_STATUS_CODE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
