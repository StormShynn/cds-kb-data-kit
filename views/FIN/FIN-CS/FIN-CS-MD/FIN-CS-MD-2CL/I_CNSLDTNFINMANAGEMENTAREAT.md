---
name: I_CNSLDTNFINMANAGEMENTAREAT
description: Cnsldtnfinmanagementareat
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
# I_CNSLDTNFINMANAGEMENTAREAT

**Cnsldtnfinmanagementareat**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( _Source.Language as spras preserving type )` |
| key `FinancialManagementArea` | `cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type )` |
| `FinancialManagementAreaName` | `cast( _Source.FinancialManagementAreaName as fincs_finmanagementareaname preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `_Source.CnsldtnIsAdditionalMasterData` |
| `_Language` | *Association* |
| `_FinancialManagementArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinancialManagementArea` | `I_CnsldtnFinManagementArea` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  representativeKey: 'FinancialManagementArea',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFinManagementAreaText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Financial Management Area - Text'
define view entity I_CnsldtnFinManagementAreaT
  as select distinct from P_CnsldtnFinManagementAreaT as _Source

    inner join            I_CnsldtnFinManagementArea  as _Main on  _Main.FinancialManagementArea       = _Source.FinancialManagementArea
                                                               and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language                on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinManagementArea as _FinancialManagementArea on $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                           as Language,

      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinManagementAreaVH',
          element: 'FinancialManagementArea'
        }
      }]
  key cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type )    as FinancialManagementArea,

      @Semantics.text
      cast( _Source.FinancialManagementAreaName  as fincs_finmanagementareaname preserving type ) as FinancialManagementAreaName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FinancialManagementArea
}
where
  _Source.Language is not null
```
