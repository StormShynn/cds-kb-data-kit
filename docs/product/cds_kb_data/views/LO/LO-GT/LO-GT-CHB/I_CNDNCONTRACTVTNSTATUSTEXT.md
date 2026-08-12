---
name: I_CNDNCONTRACTVTNSTATUSTEXT
description: "Cndncontractvtnstatustext"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - text-view
  - contract
  - text
  - status
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRACTVTNSTATUSTEXT

**Cndncontractvtnstatustext**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CndnContrActvtnStatus` | ✓ | |  | `cast( dd07t.domvalue_l as wcb_cc_state )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CndnContrActvtnStatusName` |  | |  | `cast( dd07t.ddtext as wcb_cc_state_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CndnContrActvtnStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Condition Contract Activation Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrActvtnStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
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
  dataExtraction.enabled: true,
  technicalName: 'ICCACTSTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrActvtnStatusText
  as select from dd07t
  
  association        to parent I_CndnContrActvtnStatus as _CndnContrActvtnStatus on $projection.CndnContrActvtnStatus = _CndnContrActvtnStatus.CndnContrActvtnStatus
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                         as Language,
      @ObjectModel.foreignKey.association: '_CndnContrActvtnStatus'
      @ObjectModel.text.element: ['CndnContrActvtnStatusName']
  key cast( dd07t.domvalue_l as wcb_cc_state )                                  as CndnContrActvtnStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                          as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cc_state_name preserving type )                 as CndnContrActvtnStatusName,

      /* Associations */
      _CndnContrActvtnStatus,
      _Language
}
where
      dd07t.domname  = 'WCB_CC_STATE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
