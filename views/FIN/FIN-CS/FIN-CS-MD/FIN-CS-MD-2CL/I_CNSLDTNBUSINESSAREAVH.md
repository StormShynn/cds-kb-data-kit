---
name: I_CNSLDTNBUSINESSAREAVH
description: "Cnsldtnbusinessareavh"
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
# I_CNSLDTNBUSINESSAREAVH

**Cnsldtnbusinessareavh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessArea` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBUSAREAVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
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
  representativeKey: 'BusinessArea',
  semanticKey: ['BusinessArea'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
  }
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined Business Area'

// C1 Released for Cloud Dev since 2208

define view I_CnsldtnBusinessAreaVH
  as select from I_CnsldtnBusinessArea

{
      @ObjectModel.text.element: ['BusinessAreaName']
  key BusinessArea,

      @Semantics.text
      _Text[1: Language=$session.system_language].BusinessAreaName

}
```
