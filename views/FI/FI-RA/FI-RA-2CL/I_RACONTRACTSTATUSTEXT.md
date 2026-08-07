---
name: I_RACONTRACTSTATUSTEXT
description: Racontractstatustext
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
  - contract
  - text
  - status
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RACONTRACTSTATUSTEXT

**Racontractstatustext**

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
| `RevnAcctgContractStatus` | ✓ | |  | `domvalue_l` |  |  |
| `RevnAcctgContractStatusName` |  | |  | `cast(dd07t.ddtext as farr_cds_contr_status_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_RAContractStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRACSTSTEXT'

@EndUserText.label: 'RA Contract Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RevnAcctgContractStatus'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_RAContractStatusText
  as select from dd07t

  association        to parent I_RAContractStatus as _RAContractStatus
    on $projection.RevnAcctgContractStatus = _RAContractStatus.RevnAcctgContractStatus

  association [0..1] to I_Language                as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)                  as Language,

      // cast(dd07t.domvalue_l as farr_contract_status) not possible with released API (C1), as field would be shortened
      @ObjectModel.foreignKey.association: '_RAContractStatus'
      @ObjectModel.text.element: [ 'RevnAcctgContractStatusName' ]
  key dd07t.domvalue_l                                                 as RevnAcctgContractStatus,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      cast(dd07t.ddtext as farr_cds_contr_status_text preserving type) as RevnAcctgContractStatusName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      _RAContractStatus,
      _Language

}
where dd07t.domname  = 'FARR_CONTRACT_STATUS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
