---
name: I_CNSLDTNCRCYTRNSLTNMETHOD
description: "Cnsldtncrcytrnsltnmethod"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCRCYTRNSLTNMETHOD

**Cnsldtncrcytrnsltnmethod**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnCrcyTranslationMethod` | ✓ | |  | `cast ( ConsolidationMethod as fincs_crcy_trnsltn_method preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnCrcyTrnsltnMethodT` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCRCYTRANSMT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true,
  allowExtensions: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'CnsldtnCrcyTranslationMethod',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnCrcyTranslationMethod'
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Currency Translation Method'

define view I_CnsldtnCrcyTrnsltnMethod
  as select from I_CnsldtnMethod

  association [0..*] to I_CnsldtnCrcyTrnsltnMethodT as _Text on $projection.CnsldtnCrcyTranslationMethod = _Text.CnsldtnCrcyTranslationMethod

{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnCrcyTrnsltnMethodVH',
                                                     element: 'CnsldtnCrcyTranslationMethod' } }]
  key cast ( ConsolidationMethod as fincs_crcy_trnsltn_method preserving type ) as CnsldtnCrcyTranslationMethod,


      // association
      _Text // required for text retrieval and navigation
}
where
  ConsolidationTaskCategory = '05';
```
