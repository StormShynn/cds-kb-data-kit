---
name: I_PURGOUTPUTOPERATIONCODETEXT
description: Purgoutputoperationcodetext
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGOUTPUTOPERATIONCODETEXT

**Purgoutputoperationcodetext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurgOutputOperationCode` | `cast ( dd07t.domvalue_l as druvo )` |
| key `Language` | `cast ( dd07t.ddlanguage as spras preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `PurgOutputOperationCodeName` | `cast( dd07t.ddtext as mmpur_output_operation_codname preserving type )` |
| `_Language` | *Association* |
| `_PurgOutputOperationCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURGOUTOPCOT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Output Operation Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'PurgOutputOperationCode'
@ObjectModel.dataCategory:#TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_PurgOutputOperationCodeText
  as select from dd07t
  association        to parent I_PurgOutputOperationCode as _PurgOutputOperationCode on $projection.PurgOutputOperationCode = _PurgOutputOperationCode.PurgOutputOperationCode
  association [0..1] to I_Language                        as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PurgOutputOperationCode'
      @ObjectModel.text.element: ['PurgOutputOperationCodeName']
  key cast ( dd07t.domvalue_l as druvo )                                     as PurgOutputOperationCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( dd07t.ddlanguage as spras preserving type )                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as mmpur_output_operation_codname preserving type ) as PurgOutputOperationCodeName,
      _PurgOutputOperationCode,
      _Language
}
where
      dd07t.domname  = 'DRUVO'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
