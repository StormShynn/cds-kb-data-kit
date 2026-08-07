---
name: I_CNSLDTNFUNDVH
description: "Cnsldtnfundvh"
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
# I_CNSLDTNFUNDVH

**Cnsldtnfundvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  |  |  |  |
| `Fund` | ✓ | |  |  |  |  |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'Fund',
  semanticKey: ['Fund'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Fund'

define view entity I_CnsldtnFundVH
  as select from I_CnsldtnFund

{
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinManagementAreaVH',
          element: 'FinancialManagementArea'
        }
      }]
  key FinancialManagementArea,

      @ObjectModel.text.element: ['FundName']
  key Fund,

      @Semantics.text
      _Text[1: Language=$session.system_language].FundName

};
```
