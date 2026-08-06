---
name: I_FININSTRUMENTSTATUSTEXT
description: Fininstrumentstatustext
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - status
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FININSTRUMENTSTATUSTEXT

**Fininstrumentstatustext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `FinancialInstrumentStatus` | `cast( dd07t.domvalue_l as tb_saktiv )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `FinancialInstrumentStatusName` | `cast( dd07t.ddtext as tb_saktiv_name preserving type )` |
| `_Status` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Status` | `I_FinInstrumentStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IFININSTRSTATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Instrument Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern:  #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'FinancialInstrumentStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'FinancialInstrumentStatusText'

define view I_FinInstrumentStatusText 
  as select from dd07t
  association [0..1] to I_FinInstrumentStatus as _Status   on $projection.FinancialInstrumentStatus = _Status.FinancialInstrumentStatus
  association [0..1] to I_Language            as _Language on $projection.Language                  = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language, 
      @ObjectModel.foreignKey.association: '_Status'
      @ObjectModel.text.element: ['FinancialInstrumentStatusName']
  key cast( dd07t.domvalue_l as tb_saktiv )                  as FinancialInstrumentStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as tb_saktiv_name preserving type ) as FinancialInstrumentStatusName,

      _Status,
      _Language
} 
where dd07t.domname  = 'T_SAKTIV'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
