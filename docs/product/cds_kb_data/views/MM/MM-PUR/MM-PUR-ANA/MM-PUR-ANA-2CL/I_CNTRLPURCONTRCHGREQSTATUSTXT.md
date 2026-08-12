---
name: I_CNTRLPURCONTRCHGREQSTATUSTXT
description: "Cntrlpurcontrchgreqstatustxt"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PurgDocChangeRequestStatus` | ✓ | |  | `cast( dd07t.domvalue_l as abap.char( 2 ) )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `ChangeRequestNote` |  | |  | `cast( dd07t.ddtext as abap.char(60) )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ChangeRequestStatus` | | ✓ | | | | |

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
