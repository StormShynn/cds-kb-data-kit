---
name: I_PERSSETTLMTACCTGTRANSFSTST
description: "Perssettlmtacctgtransfstst"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTACCTGTRANSFSTST

**Perssettlmtacctgtransfstst**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersSettlmtAcctgTransfSts` | ✓ | |  | `cast(dd07t.domvalue_l as wfbsk )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PersSettlmtAcctgTransfStsName` |  | |  | `cast( dd07t.ddtext as wlf_rfbsk_name preserving type)` |  |  |
| `_Language` | | ✓ | | | | |
| `_PersSettlmtAcctgTransfSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Pers Settlmt Acctg Transfer Status - Txt' 
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'PersSettlmtAcctgTransfSts',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFPSDACCTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PersSettlmtAcctgTransfStsT
  as select from dd07t

  association        to parent I_PersSettlmtAcctgTransfSts as _PersSettlmtAcctgTransfSts on $projection.PersSettlmtAcctgTransfSts = _PersSettlmtAcctgTransfSts.PersSettlmtAcctgTransfSts
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_PersSettlmtAcctgTransfSts'
      @ObjectModel.text.element: ['PersSettlmtAcctgTransfStsName']
  key cast(dd07t.domvalue_l  as  wfbsk )                                   as PersSettlmtAcctgTransfSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                     as Language,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as  wlf_rfbsk_name preserving type)               as PersSettlmtAcctgTransfStsName,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PersSettlmtAcctgTransfSts,
      _Language
}

where
       dd07t.domname    = 'WFBSK'
  and  dd07t.as4local   = 'A'
  and  dd07t.as4vers    = '0000'
  and(
       dd07t.domvalue_l = 'A'
    or dd07t.domvalue_l = 'B'
    or dd07t.domvalue_l = 'C'
    or dd07t.domvalue_l = 'D'
    or dd07t.domvalue_l = 'E'
    or dd07t.domvalue_l = 'F'
    or dd07t.domvalue_l = 'J'
    or dd07t.domvalue_l = 'P'
    or dd07t.domvalue_l = 'R'
  )
```
