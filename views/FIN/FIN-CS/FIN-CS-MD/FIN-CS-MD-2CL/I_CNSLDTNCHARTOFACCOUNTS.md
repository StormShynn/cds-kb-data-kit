---
name: I_CNSLDTNCHARTOFACCOUNTS
description: Cnsldtnchartofaccounts
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
# I_CNSLDTNCHARTOFACCOUNTS

**Cnsldtnchartofaccounts**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast(itclg as fincs_conschartofaccounts preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnChartOfAccountsT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCCHOFACC',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #CHECK
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'ConsolidationChartOfAccounts',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'ConsolidationChartOfAccounts'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Chart of Accounts'

define view I_CnsldtnChartOfAccounts
  as select from tf120

  association [0..*] to I_CnsldtnChartOfAccountsT as _Text on $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts

{
       @ObjectModel.text.association: '_Text'
       @Search:{
         defaultSearchElement: true,
         ranking: #HIGH,
         fuzzinessThreshold: 0.8
         }
  key  cast(itclg as fincs_conschartofaccounts preserving type ) as ConsolidationChartOfAccounts,

       _Text
};
```
