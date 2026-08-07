---
name: I_CNSLDTNCONTROLLINGAREAVH
description: Cnsldtncontrollingareavh
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
# I_CNSLDTNCONTROLLINGAREAVH

**Cnsldtncontrollingareavh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICSCTRLAREAVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl: {
  authorizationCheck: #CHECK
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M },
  representativeKey: 'ControllingArea',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined Controlling Area'

define view I_CnsldtnControllingAreaVH
  as select from I_CnsldtnControllingArea

{
      @ObjectModel.text.element: ['ControllingAreaName']
  key ControllingArea,

      @Semantics.text
      _Text[1: Language=$session.system_language].ControllingAreaName
}
```
