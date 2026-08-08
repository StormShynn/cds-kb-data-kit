---
name: I_CNSLDTNCRCYTRNSLTNMETHODVH
description: "Cnsldtncrcytrnsltnmethodvh"
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
# I_CNSLDTNCRCYTRNSLTNMETHODVH

**Cnsldtncrcytrnsltnmethodvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnCrcyTranslationMethod` | ✓ | |  |  |  |  |
| `CnsldtnCrcyTrnsltnMethodText` |  | |  | `cast(_Text[1: Language=$session.system_language].CnsldtnCrcyTrnsltnMethodText as fincs_description_text_30 preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCRCYTRANSMTVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'CnsldtnCrcyTranslationMethod',
  semanticKey: ['CnsldtnCrcyTranslationMethod'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Currency Translation Method'

define view I_CnsldtnCrcyTrnsltnMethodVH
  as select from I_CnsldtnCrcyTrnsltnMethod

{
      @ObjectModel.text.element: ['CnsldtnCrcyTrnsltnMethodText']
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key CnsldtnCrcyTranslationMethod,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast(_Text[1: Language=$session.system_language].CnsldtnCrcyTrnsltnMethodText as fincs_description_text_30 preserving type ) as CnsldtnCrcyTrnsltnMethodText
};
```
