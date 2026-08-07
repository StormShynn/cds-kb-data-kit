---
name: I_CNSLDTNMETHOD
description: Cnsldtnmethod
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNMETHOD

**Cnsldtnmethod**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationMethod` | ✓ | |  | `cast(cmeth as fincs_method preserving type )` |
| `ConsolidationTaskCategory` |  | |  | `cast(cactt as fincs_taskcategory preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnMethodText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMETHOD',
  compiler.compareFilter: true
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
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
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'ConsolidationMethod',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'ConsolidationMethod'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Method'

define view I_CnsldtnMethod
  as select from tf550

  association [0..*] to I_CnsldtnMethodText as _Text on $projection.ConsolidationMethod = _Text.ConsolidationMethod
{

      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnMethodVH',
                                                     element: 'ConsolidationMethod' } }]
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key cast(cmeth as fincs_method preserving type )       as ConsolidationMethod,

      @Consumption.valueHelpDefinition: [{ entity: {
          name: 'I_CnsldtnTaskCategoryVH',
          element: 'ConsolidationTaskCategory' } }]
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskCategory'
      cast(cactt as fincs_taskcategory preserving type ) as ConsolidationTaskCategory,


      _Text
}
where
  dimen = 'Y1';
```
