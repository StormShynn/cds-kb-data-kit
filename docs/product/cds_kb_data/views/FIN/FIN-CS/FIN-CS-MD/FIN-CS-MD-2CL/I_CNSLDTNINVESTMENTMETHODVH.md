---
name: I_CNSLDTNINVESTMENTMETHODVH
description: "Cnsldtninvestmentmethodvh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CNSLDTNINVESTMENTMETHODVH

**Cnsldtninvestmentmethodvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationInvestmentMethod` | ✓ | | `_Source` | `ConsolidationInvestmentMethod` |  |  |
| `CnsldtnInvestmentMethodText` |  | |  | `cast(_Source._Text[1: Language=$session.system_language].CnsldtnInvestmentMethodText as fincs_description_text_30 preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSINVMETHODVH',
  compiler.compareFilter: true,
  preserveKey:true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationInvestmentMethod',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked:true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Investment Method'

define view I_CnsldtnInvestmentMethodVH
  as select from I_CnsldtnInvestmentMethod as _Source

{

      @ObjectModel.text.element: ['CnsldtnInvestmentMethodText']
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _Source.ConsolidationInvestmentMethod,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast(_Source._Text[1: Language=$session.system_language].CnsldtnInvestmentMethodText as fincs_description_text_30 preserving type ) as CnsldtnInvestmentMethodText

}
```
