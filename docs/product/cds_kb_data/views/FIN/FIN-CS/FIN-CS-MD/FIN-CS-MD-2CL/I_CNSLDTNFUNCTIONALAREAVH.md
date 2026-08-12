---
name: I_CNSLDTNFUNCTIONALAREAVH
description: "Cnsldtnfunctionalareavh"
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
# I_CNSLDTNFUNCTIONALAREAVH

**Cnsldtnfunctionalareavh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalArea` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFUNCAREAVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #CHECK
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
    sizeCategory: #M},
  representativeKey: 'FunctionalArea',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
  }
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined Functional Area'

define view I_CnsldtnFunctionalAreaVH
  as select distinct from I_CnsldtnFunctionalArea

{
      @ObjectModel.text.element: ['FunctionalAreaName']
  key FunctionalArea,

      @Semantics.text
      _Text[1: Language=$session.system_language].FunctionalAreaName

}
```
