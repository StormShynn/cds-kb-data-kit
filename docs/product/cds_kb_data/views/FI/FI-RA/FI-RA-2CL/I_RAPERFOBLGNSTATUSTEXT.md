---
name: I_RAPERFOBLGNSTATUSTEXT
description: "Raperfoblgnstatustext"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - text-view
  - text
  - status
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNSTATUSTEXT

**Raperfoblgnstatustext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` |  |  |
| `RevnAcctgPerfOblgnStatus` | ✓ | |  | `cast(dd07t.domvalue_l as farr_cds_pob_status)` |  |  |
| `RevnAcctgPerfOblgnStatusName` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_RAPerfOblgnStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRAPOBSTATUSTEXT'

@EndUserText.label: 'Performance Obligation Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RevnAcctgPerfOblgnStatus'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAPerfOblgnStatusText
  as select from dd07t

  association to parent I_RAPerfOblgnStatus as _RAPerfOblgnStatus
    on $projection.RevnAcctgPerfOblgnStatus = _RAPerfOblgnStatus.RevnAcctgPerfOblgnStatus

  association [0..1] to I_Language as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type) as Language,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnStatus'
      @ObjectModel.text.element: [ 'RevnAcctgPerfOblgnStatusName' ]
  key cast(dd07t.domvalue_l as farr_cds_pob_status)   as RevnAcctgPerfOblgnStatus,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                    as RevnAcctgPerfOblgnStatusName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                as DomainValue,

      _RAPerfOblgnStatus,
      _Language

}
where dd07t.domname  = 'FARR_POB_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
