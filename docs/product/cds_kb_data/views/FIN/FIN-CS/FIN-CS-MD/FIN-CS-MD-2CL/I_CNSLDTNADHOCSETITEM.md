---
name: I_CNSLDTNADHOCSETITEM
description: "Cnsldtnadhocsetitem"
app_component: FIN-CS-MD-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNADHOCSETITEM

**Cnsldtnadhocsetitem**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast(_AdhocSetItem.itclg as fincs_conschartofaccounts preserving type )` |  |  |
| `CnsldtnAdhocSet` | ✓ | | `_AdhocSetItem` | `adhocset` |  |  |
| `CnsldtnAdhocSetItem` | ✓ | | `_AdhocSetItem` | `adhocsetitem` |  |  |
| `CnsldtnAdhocSetItemText` |  | | `_AdhocSetItem` | `adhocsetitemtext` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnAdhocSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnAdhocSet` | `I_CnsldtnAdhocSet` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSADHSETITM',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 3
  }
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
  allowExtensions: true,
  ignorePropagatedAnnotations:true
  }
@ObjectModel:{
    usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'CnsldtnAdhocSetItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnAdhocSetItem'
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Ad Hoc Set Item'

define view I_CnsldtnAdhocSetItem
  as select from fincs_adhsetitm as _AdhocSetItem

  association [1..1] to I_CnsldtnChartOfAccounts as _CnsldtnChartOfAccounts on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_CnsldtnAdhocSet        as _CnsldtnAdhocSet        on  $projection.ConsolidationChartOfAccounts = _CnsldtnAdhocSet.ConsolidationChartOfAccounts
                                                                            and $projection.CnsldtnAdhocSet              = _CnsldtnAdhocSet.CnsldtnAdhocSet

{

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
  key cast(_AdhocSetItem.itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnAdhocSet'
      @ObjectModel.sapObjectNodeTypeReference: 'AdhocSet'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAdhocSetVH',
          element: 'CnsldtnAdhocSet'
        },
        additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
  key _AdhocSetItem.adhocset                                                  as CnsldtnAdhocSet,

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _AdhocSetItem.adhocsetitem                                              as CnsldtnAdhocSetItem,

      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _AdhocSetItem.adhocsetitemtext                                          as CnsldtnAdhocSetItemText,


      // association
      _CnsldtnChartOfAccounts,
      _CnsldtnAdhocSet
};
```
