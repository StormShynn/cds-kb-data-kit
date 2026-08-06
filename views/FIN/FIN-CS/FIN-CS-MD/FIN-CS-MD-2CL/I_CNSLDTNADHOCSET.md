---
name: I_CNSLDTNADHOCSET
description: Cnsldtnadhocset
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCSET

**Cnsldtnadhocset**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `cast(_AdhocSet.itclg as fincs_conschartofaccounts preserving type )` |
| `CnsldtnAdhocSet` | `}] key _AdhocSet.adhocset` |
| `CnsldtnAdhocSetBrkdwnType` | `_AdhocSet.adhocsetbrkdwntype` |
| `_CnsldtnChartOfAccounts` | *Association* |
| `_CnsldtnAdhocSetBrkdwnType` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnAdhocSetBrkdwnType` | `I_CnsldtnAdhocSetBrkdwnType` | [1..1] |
| `_Text` | `I_CnsldtnAdhocSetText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSET',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 2 }
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling: {
  type:      #CLIENT_DEPENDENT,
  algorithm: #SESSION_VARIABLE
}
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
    },
  representativeKey: 'CnsldtnAdhocSet',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'AdhocSet'
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Set'

// C1 Released Key User Tools since OP2020.

define view I_CnsldtnAdhocSet
  as select from fincs_adhset as _AdhocSet

  association [1..1] to I_CnsldtnChartOfAccounts    as _CnsldtnChartOfAccounts    on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnAdhocSetBrkdwnType as _CnsldtnAdhocSetBrkdwnType on  $projection.CnsldtnAdhocSetBrkdwnType = _CnsldtnAdhocSetBrkdwnType.CnsldtnAdhocSetBrkdwnType

  association [0..*] to I_CnsldtnAdhocSetText       as _Text                      on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                                  and $projection.CnsldtnAdhocSet              = _Text.CnsldtnAdhocSet

{
      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key cast(_AdhocSet.itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocSetVH',
          element: 'CnsldtnAdhocSet'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _AdhocSet.adhocset                                                  as CnsldtnAdhocSet,

      @ObjectModel:{
        foreignKey.association: '_CnsldtnAdhocSetBrkdwnType',
        sapObjectNodeTypeReference: 'CnsldtnAdhocSetBreakdownType' }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocSetBrkdwnTypeVH',
          element: 'CnsldtnAdhocSetBrkdwnType'
        }
      }]
      _AdhocSet.adhocsetbrkdwntype                                        as CnsldtnAdhocSetBrkdwnType,

      // association
      _CnsldtnChartOfAccounts,

      _CnsldtnAdhocSetBrkdwnType,

      _Text
}
```
