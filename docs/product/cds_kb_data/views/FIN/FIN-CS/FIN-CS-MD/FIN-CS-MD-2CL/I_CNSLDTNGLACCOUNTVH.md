---
name: I_CNSLDTNGLACCOUNTVH
description: "Cnsldtngl AccountVH"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTVH

**Cnsldtngl AccountVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLACCOUNTVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #CHECK
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'GLAccount',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined G/L Account'

// Complete C1 Release in CE2208

define view I_CnsldtnGLAccountVH
  as select from I_CnsldtnGLAccount_2

{
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key ChartOfAccounts,
  
      @ObjectModel.text.element: ['GLAccountName']
  key GLAccount,

      @Semantics.text
      _Text[1: Language=$session.system_language].GLAccountName

};
```
