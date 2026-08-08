---
name: I_CNSLDTNCHARTOFACCOUNTST
description: "Cnsldtnchartofaccountst"
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
# I_CNSLDTNCHARTOFACCOUNTST

**Cnsldtnchartofaccountst**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast(itclg as fincs_conschartofaccounts preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ConsolidationChartOfAcctsText` |  | |  | `cast(txt as fincs_description_text_30 preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCCHOFACCT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics: {
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationChartOfAccounts',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnChartOfAccountsText'                        
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Chart of Accounts - Text'

define view I_CnsldtnChartOfAccountsT
  as select from tf121

  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts
{
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast(itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key langu                                                     as Language,

      @Semantics.text
      @Search:{
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
        }
      cast(txt as fincs_description_text_30 preserving type )   as ConsolidationChartOfAcctsText,


      _Language,
      _ChartOfAccounts
};
```
