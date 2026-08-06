---
name: I_CNSLDTNUNITVH
description: Cnsldtnunitvh
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
# I_CNSLDTNUNITVH

**Cnsldtnunitvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationUnit` | `} key _CnsldtnUnit.ConsolidationUnit` |

## Source Code

```abap
@AccessControl : {
  authorizationCheck: #MANDATORY
}
@Consumption.ranked:true 
@Metadata : {
  ignorePropagatedAnnotations: true
}
@ObjectModel : {
  dataCategory: #VALUE_HELP,
  representativeKey: 'ConsolidationUnit',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  },
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [
    #VALUE_HELP_PROVIDER,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET
  ]
}
@Search : {
  searchable: true
}
@VDM : {
  viewType: #COMPOSITE
}
@EndUserText : {
  label: 'Consolidation Unit'
}
define view entity I_CnsldtnUnitVH
  as select from I_CnsldtnUnit_4 as _CnsldtnUnit

{
      @ObjectModel : {
        text : {
          element: ['ConsolidationUnitText']
        }
      }
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
  key _CnsldtnUnit.ConsolidationUnit,


      @Semantics : {
        text: true
      }
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.7,
        ranking: #MEDIUM
      }
      _CnsldtnUnit._Text[1: Language=$session.system_language].ConsolidationUnitText

}
```
