---
name: I_CNSLDTNADHOCITEMTEXT
description: "Cnsldtnadhocitemtext"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCITEMTEXT

**Cnsldtnadhocitemtext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_AdhocItemT` | `langu` |  |  |
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast(_AdhocItemT.itclg as fincs_conschartofaccounts preserving type )` |  |  |
| `CnsldtnAdhocItem` | ✓ | | `_AdhocItemT` | `adhocitem` |  |  |
| `CnsldtnAdhocItemText` |  | | `_AdhocItemT` | `adhocitemtext` |  |  |
| `CnsldtnAdhocItemLongText` |  | | `_AdhocItemT` | `adhocitemlongtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnAdhocItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnAdhocItem` | `I_CnsldtnAdhocItem` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHITMT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 3}
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
    sizeCategory: #M},
  representativeKey: 'CnsldtnAdhocItem',
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
@EndUserText.label: 'Consolidation Ad Hoc Item - Text'

define view I_CnsldtnAdhocItemText
  as select from fincs_adhitmt as _AdhocItemT

  association [1..1] to I_Language               as _Language               on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnAdhocItem       as _CnsldtnAdhocItem       on  $projection.ConsolidationChartOfAccounts = _CnsldtnAdhocItem.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnAdhocItem             = _CnsldtnAdhocItem.CnsldtnAdhocItem

{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key _AdhocItemT.langu                                                     as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key cast(_AdhocItemT.itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnAdhocItem'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key _AdhocItemT.adhocitem                                                 as CnsldtnAdhocItem,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _AdhocItemT.adhocitemtext                                             as CnsldtnAdhocItemText,

      _AdhocItemT.adhocitemlongtext                                         as CnsldtnAdhocItemLongText,


      // association
      _Language,
      _CnsldtnChartOfAccounts,
      _CnsldtnAdhocItem
};
```
