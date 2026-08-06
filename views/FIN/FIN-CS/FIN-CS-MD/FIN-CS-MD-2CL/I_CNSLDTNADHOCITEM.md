---
name: I_CNSLDTNADHOCITEM
description: Cnsldtnadhocitem
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCITEM

**Cnsldtnadhocitem**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `cast(_AdhocItem.itclg as fincs_conschartofaccounts preserving type )` |
| `CnsldtnAdhocItem` | `}] key _AdhocItem.adhocitem` |
| `CnsldtnAdhocSet` | `}] _AdhocItem.adhocset` |
| `FinancialStatementItem` | `cast ( '' as fincs_md_finstatementitem )` |
| `_CnsldtnChartOfAccounts` | *Association* |
| `_CnsldtnAdhocSet` | *Association* |
| `_CnsldtnFinStmntItem` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnAdhocSet` | `I_CnsldtnAdhocSet` | [0..1] |
| `_CnsldtnFinStmntItem` | `I_CnsldtnFinStmntItem` | [1..1] |
| `_Text` | `I_CnsldtnAdhocItemText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHITM',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 2}
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
  representativeKey: 'CnsldtnAdhocItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'AdhocItem'
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Item'

// C1 Released Key User Tools since OP2020.

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnAdhocItem
  as select from fincs_adhitm as _AdhocItem

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [0..1] to I_CnsldtnAdhocSet        as _CnsldtnAdhocSet        on  $projection.ConsolidationChartOfAccounts = _CnsldtnAdhocSet.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnAdhocSet              = _CnsldtnAdhocSet.CnsldtnAdhocSet

  association [1..1] to I_CnsldtnFinStmntItem    as _CnsldtnFinStmntItem    on  $projection.ConsolidationChartOfAccounts = _CnsldtnFinStmntItem.ConsolidationChartOfAccounts
                                                                            and $projection.FinancialStatementItem       = _CnsldtnFinStmntItem.FinancialStatementItem

  association [0..*] to I_CnsldtnAdhocItemText   as _Text                   on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnAdhocItem             = _Text.CnsldtnAdhocItem

{
      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key cast(_AdhocItem.itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocItemVH',
          element: 'CnsldtnAdhocItem'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _AdhocItem.adhocitem                                                 as CnsldtnAdhocItem,

      @ObjectModel.foreignKey.association: '_CnsldtnAdhocSet'
      @ObjectModel.sapObjectNodeTypeReference: 'AdhocSet'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocSetVH',
          element: 'CnsldtnAdhocSet'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _AdhocItem.adhocset                                                  as CnsldtnAdhocSet,

      @API.element: {releaseState: #DEPRECATED}
      @VDM.lifecycle: {status: #DEPRECATED}
      @ObjectModel.foreignKey.association: '_CnsldtnFinStmntItem'
      cast ( '' as fincs_md_finstatementitem )                             as FinancialStatementItem, //ignore field during processing --> field to be removed


      // association
      _CnsldtnChartOfAccounts,

      _CnsldtnAdhocSet,

      _Text,

      @API.element: {releaseState: #DEPRECATED}
      @VDM.lifecycle: {status: #DEPRECATED}
      _CnsldtnFinStmntItem // required for value help retrieval
}
```
