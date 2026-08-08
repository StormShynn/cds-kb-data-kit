---
name: I_CNSLDTNGLCHARTOFACCOUNTSVH
description: "Cnsldtnglchartofaccountsvh"
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLCHARTOFACCOUNTSVH

**Cnsldtnglchartofaccountsvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `cast(ChartOfAccounts as fincs_chartofaccounts preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLCHOFACVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M },
  representativeKey: 'ChartOfAccounts',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Combined G/L Chart Of Accounts'

// Fully C1 Released in CE2208

define view I_CnsldtnGLChartOfAccountsVH
  as select from I_CnsldtnGLChartOfAccounts

{
      @ObjectModel.text.element: ['ChartOfAccountsName']
  key cast(ChartOfAccounts as fincs_chartofaccounts preserving type )             as ChartOfAccounts,

      @Semantics.text
      _Text[1: Language=$session.system_language].ChartOfAccountsName 

}
```
