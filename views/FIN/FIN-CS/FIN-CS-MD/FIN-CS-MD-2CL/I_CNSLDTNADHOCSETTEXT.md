---
name: I_CNSLDTNADHOCSETTEXT
description: Cnsldtnadhocsettext
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCSETTEXT

**Cnsldtnadhocsettext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `_AdhocSetT.langu` |
| key `ConsolidationChartOfAccounts` | `cast(_AdhocSetT.itclg as fincs_conschartofaccounts preserving type )` |
| `CnsldtnAdhocSet` | `}] key _AdhocSetT.adhocset` |
| `CnsldtnAdhocSetText` | `_AdhocSetT.adhocsettext` |
| `CnsldtnAdhocSetLongText` | `_AdhocSetT.adhocsetlongtext` |
| `_Language` | *Association* |
| `_CnsldtnChartOfAccounts` | *Association* |
| `_CnsldtnAdhocSet` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnAdhocSet` | `I_CnsldtnAdhocSet` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSETT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 3 }
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling: {
  type:      #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M },
  representativeKey: 'CnsldtnAdhocSet',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Set - Text'

define view I_CnsldtnAdhocSetText
  as select from fincs_adhsett as _AdhocSetT

  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnAdhocSet        as _CnsldtnAdhocSet        on  $projection.ConsolidationChartOfAccounts = _CnsldtnAdhocSet.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnAdhocSet              = _CnsldtnAdhocSet.CnsldtnAdhocSet

{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _AdhocSetT.langu                                                     as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key cast(_AdhocSetT.itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnAdhocSet'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key _AdhocSetT.adhocset                                                  as CnsldtnAdhocSet,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _AdhocSetT.adhocsettext                                              as CnsldtnAdhocSetText,

      _AdhocSetT.adhocsetlongtext                                          as CnsldtnAdhocSetLongText,


      // association
      _Language,
      _CnsldtnChartOfAccounts,
      _CnsldtnAdhocSet
};
```
