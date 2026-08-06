---
name: I_CNTRLPURCONTRCHGREQSTATUSTXT
description: Cntrlpurcontrchgreqstatustxt
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - status
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRCHGREQSTATUSTXT

**Cntrlpurcontrchgreqstatustxt**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `PurgDocChangeRequestStatus` | `cast( dd07t.domvalue_l as abap.char( 2 ) )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `ChangeRequestNote` | `cast( dd07t.ddtext as abap.char(60) )` |
| `_Language` | *Association* |
| `_ChangeRequestStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICHNGREQNSTSTXT'
@AbapCatalog.compiler.compareFilter: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Change Request Status - Text'

@ObjectModel: {
  representativeKey: 'PurgDocChangeRequestStatus',
  usageType: {
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #META
    }
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_CntrlPurContrChgReqStatusTxt
  as select from dd07t

  association        to parent I_CntrlPurContrChgReqStatus as _ChangeRequestStatus on $projection.PurgDocChangeRequestStatus = _ChangeRequestStatus.PurgDocChangeRequestStatus

  association [0..1] to I_Language                         as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_ChangeRequestStatus'
      @ObjectModel.text.element: ['ChangeRequestNote']
  key cast( dd07t.domvalue_l as abap.char( 2 ) )        as PurgDocChangeRequestStatus,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as abap.char(60) )             as ChangeRequestNote,
      _ChangeRequestStatus,
      _Language
}
where
      dd07t.domname  = 'CR_STAT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
