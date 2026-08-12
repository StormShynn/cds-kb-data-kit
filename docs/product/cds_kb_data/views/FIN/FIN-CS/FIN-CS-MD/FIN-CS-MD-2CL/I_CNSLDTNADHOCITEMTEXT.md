---
name: I_CNSLDTNADHOCITEMTEXT
description: "Cnsldtnadhocitemtext"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
