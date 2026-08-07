---
name: I_CNSLDTNPERIODCATEGORY
description: Cnsldtnperiodcategory
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNPERIODCATEGORY

**Cnsldtnperiodcategory**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationPeriodCategory` | ✓ | |  | `cast( pertp as fincs_periodcategory preserving type )` |
| `CnsldtnPerdCatFormulaValue` |  | |  | `cast( forml as fincs_periodcategory_forml preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnPeriodCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPERCATG',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_Text' ]
}
@Metadata: {
  ignorePropagatedAnnotations:true,
  allowExtensions:true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  resultSet.sizeCategory: #XS,
  representativeKey: 'ConsolidationPeriodCategory',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'ConsolidationPeriodCategory'                         
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Period Category'
define view I_CnsldtnPeriodCategory as 
  select from tf325

    association [0..*] to I_CnsldtnPeriodCategoryText as _Text on $projection.ConsolidationPeriodCategory = _Text.ConsolidationPeriodCategory
{
      @ObjectModel.text.association: '_Text'
      @Search:{
             defaultSearchElement: true,
             ranking: #HIGH,
             fuzzinessThreshold: 0.8
             }
  key cast( pertp as fincs_periodcategory preserving type )         as ConsolidationPeriodCategory,
  
      cast( forml as fincs_periodcategory_forml preserving type )   as CnsldtnPerdCatFormulaValue,
  
      _Text
}
```
