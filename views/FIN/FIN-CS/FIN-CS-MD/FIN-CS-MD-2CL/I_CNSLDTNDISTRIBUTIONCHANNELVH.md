---
name: I_CNSLDTNDISTRIBUTIONCHANNELVH
description: "Cnsldtndistributionchannelvh"
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
# I_CNSLDTNDISTRIBUTIONCHANNELVH

**Cnsldtndistributionchannelvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DistributionChannel` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSDISTRICHLVH',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S},
  representativeKey: 'DistributionChannel',
  semanticKey: ['DistributionChannel'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Combined Distribution Channel'

define view I_CnsldtnDistributionChannelVH
  as select from I_CnsldtnDistributionChannel

{
      @ObjectModel.text.element: ['DistributionChannelName']
  key DistributionChannel,

      @Semantics.text
      _Text[1: Language=$session.system_language].DistributionChannelName
}
```
