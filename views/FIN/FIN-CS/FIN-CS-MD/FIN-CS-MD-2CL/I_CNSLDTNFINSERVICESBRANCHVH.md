---
name: I_CNSLDTNFINSERVICESBRANCHVH
description: "Cnsldtnfinservicesbranchvh"
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
  - service
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSERVICESBRANCHVH

**Cnsldtnfinservicesbranchvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialServicesBranch` | ✓ | | `_Source` | `FinancialServicesBranch` |  |  |

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
  representativeKey: 'FinancialServicesBranch',
  semanticKey: ['FinancialServicesBranch'],
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
@EndUserText.label: 'Consolidation Financial Services Branch'

define view entity I_CnsldtnFinServicesBranchVH
  as select from I_CnsldtnFinServicesBranch as _Source

{
      @ObjectModel.text.element: ['FinancialServicesBranchName']
  key _Source.FinancialServicesBranch,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].FinancialServicesBranchName
}
```
