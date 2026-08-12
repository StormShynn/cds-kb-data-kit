---
name: I_CNSLDTNPERIODCATEGORYTEXT
description: "Cnsldtnperiodcategorytext"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
