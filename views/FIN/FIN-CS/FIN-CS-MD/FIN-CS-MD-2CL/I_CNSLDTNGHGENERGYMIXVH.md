---
name: I_CNSLDTNGHGENERGYMIXVH
description: "Cnsldtnghgenergymixvh"
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
# I_CNSLDTNGHGENERGYMIXVH

**Cnsldtnghgenergymixvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGEnergyMix` | ✓ | | `_Source` | `GHGEnergyMix` |  |  |

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
  representativeKey: 'GHGEnergyMix',
  semanticKey: ['GHGEnergyMix'],
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
@EndUserText.label: 'Consolidation Greenhouse Gas Energy Mix'
define view entity I_CnsldtnGHGEnergyMixVH
  as select from I_CnsldtnGHGEnergyMix as _Source {
      @ObjectModel.text.element: ['GHGEnergyMixName']
  key _Source.GHGEnergyMix,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].GHGEnergyMixName
}
```
