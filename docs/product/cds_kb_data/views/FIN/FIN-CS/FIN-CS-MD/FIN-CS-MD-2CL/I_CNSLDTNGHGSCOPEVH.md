---
name: I_CNSLDTNGHGSCOPEVH
description: "Cnsldtnghgscopevh"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGSCOPEVH

**Cnsldtnghgscopevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGScope` | ✓ | | `_Source` | `GHGScope` |  |  |

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
    sizeCategory: #S
  },
  representativeKey: 'GHGScope',
  semanticKey: ['GHGScope'],
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
@EndUserText.label: 'Consolidation Greenhouse Gas Scope'

define view entity I_CnsldtnGHGScopeVH
  as select from I_CnsldtnGHGScope as _Source

{
      @ObjectModel.text.element: ['GHGScopeName']
  key _Source.GHGScope,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].GHGScopeName
}
```
