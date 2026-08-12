---
name: I_CNSLDTNPERIODCATEGORYTEXT
description: "Cnsldtnperiodcategorytext"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - text-view
  - text
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNPERIODCATEGORYTEXT

**Cnsldtnperiodcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationPeriodCategory` | ✓ | |  | `cast( pertp as fincs_periodcategory preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CnsldtnPeriodCategoryText` |  | |  | `cast(txt as fincs_periodcategory_txt preserving type )` |  |  |
| `_CnsldtnPeriodCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnPeriodCategory` | `I_CnsldtnPeriodCategory` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPERCATGT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics.dataExtraction.enabled: true
@AccessControl:{
  authorizationCheck: #PRIVILEGED_ONLY,
  privilegedAssociations: [ '_CnsldtnPeriodCategory' ]
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'ConsolidationPeriodCategory',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Period Category - Text'
define view I_CnsldtnPeriodCategoryText as
  select from tf326 
  
    association [1..1] to I_CnsldtnPeriodCategory  as _CnsldtnPeriodCategory  on $projection.ConsolidationPeriodCategory = _CnsldtnPeriodCategory.ConsolidationPeriodCategory
    association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{ 
      @ObjectModel.foreignKey.association: '_CnsldtnPeriodCategory'
  key cast( pertp as fincs_periodcategory preserving type )       as ConsolidationPeriodCategory,
  
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                       as Language,
  
      @Search:{
            defaultSearchElement: true,
            ranking: #LOW,
            fuzzinessThreshold: 0.8
            }
      @Semantics.text
      cast(txt as fincs_periodcategory_txt preserving type )      as CnsldtnPeriodCategoryText,
      
      _CnsldtnPeriodCategory,
      _Language
}
```
