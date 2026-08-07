---
name: I_FINANCIALDATASOURCET
description: Financialdatasourcet
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINANCIALDATASOURCET

**Financialdatasourcet**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `FinancialDataSource` | ✓ | |  | `datasource_id` |  |  |
| `FinancialDataSourceName` |  | |  | `cast( datasource_tt as ffs_vdm_datasource_tt preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Financial Data Source - Text'
@ObjectModel:{
    representativeKey: 'FinancialDataSource',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #SEARCHABLE_ENTITY]
}
@VDM :{
viewType: #BASIC,
lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinancialDataSourceT
  as select from ffs_d_datasrce_t
  association        to parent I_FinancialDataSource as _FinancialDataSource on $projection.FinancialDataSource = _FinancialDataSource.FinancialDataSource
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      @ObjectModel.text.element: ['LanguageName']
  key langu                                                          as Language,
      @ObjectModel.foreignKey.association: '_FinancialDataSource'
      @ObjectModel.text.element: ['FinancialDataSourceName']
  key datasource_id                                                  as FinancialDataSource,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( datasource_tt as ffs_vdm_datasource_tt preserving type ) as FinancialDataSourceName,
      _Language._Text[Language = $session.system_language].LanguageName,

      /* Associations */
      _FinancialDataSource,
      _Language
}
```
