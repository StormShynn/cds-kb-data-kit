---
name: I_CNSLDTNFINANCIALDATASOURCET
description: "Cnsldtnfinancialdatasourcet"
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
# I_CNSLDTNFINANCIALDATASOURCET

**Cnsldtnfinancialdatasourcet**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `FinancialDataSource` | ✓ | |  | `cast( _Source.FinancialDataSource as fincs_financialdatasource preserving type )` |  |  |
| `FinancialDataSourceName` |  | |  | `cast( _Source.FinancialDataSourceName as fincs_financialdatasourcename preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinancialDataSource` | `I_CnsldtnFinancialDataSource` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSFINDATASOURCET'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'FinancialDataSource',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFinancialDataSourceText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Financial Data Source - Text'

define view entity I_CnsldtnFinancialDataSourceT
  as select distinct from P_CnsldtnFinancialDataSourceT as _Source

    inner join            I_CnsldtnFinancialDataSource  as _Main on  _Main.FinancialDataSource           = _Source.FinancialDataSource
                                                                 and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinancialDataSource as _FinancialDataSource on $projection.FinancialDataSource = _FinancialDataSource.FinancialDataSource
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                         as Language,

      @ObjectModel.foreignKey.association: '_FinancialDataSource'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinancialDataSourceVH',
          element: 'FinancialDataSource'
        }
      }]
  key cast( _Source.FinancialDataSource as fincs_financialdatasource preserving type )          as FinancialDataSource,

      @Semantics.text
      cast( _Source.FinancialDataSourceName  as fincs_financialdatasourcename preserving type ) as FinancialDataSourceName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FinancialDataSource
}
where
  _Source.Language is not null
```
