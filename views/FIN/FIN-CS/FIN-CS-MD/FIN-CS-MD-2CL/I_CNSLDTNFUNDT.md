---
name: I_CNSLDTNFUNDT
description: "Cnsldtnfundt"
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
# I_CNSLDTNFUNDT

**Cnsldtnfundt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `FinancialManagementArea` | ✓ | |  | `cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type )` |  |  |
| `Fund` | ✓ | |  | `cast( _Source.Fund as fincs_fund preserving type )` |  |  |
| `FundName` |  | |  | `cast( _Source.FundName as fincs_fundname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FinancialManagementArea` | `I_CnsldtnFinManagementArea` | [1..1] |
| `_Fund` | `I_CnsldtnFund` | [1..1] |

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
  representativeKey: 'Fund',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFundText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Fund - Text'

define view entity I_CnsldtnFundT
  as select distinct from P_CnsldtnFundT as _Source

    inner join            I_CnsldtnFund  as _Main on  _Main.FinancialManagementArea       = _Source.FinancialManagementArea
                                                  and _Main.Fund                          = _Source.Fund
                                                  and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language                on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFinManagementArea as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea

  association [1..1] to I_CnsldtnFund              as _Fund                    on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                               and $projection.Fund                    = _Fund.Fund

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language                                                                         as Language,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinManagementAreaVH',
          element: 'FinancialManagementArea'
        }
      }]
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key cast( _Source.FinancialManagementArea as fincs_financialmanagementarea preserving type ) as FinancialManagementArea,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFundVH',
          element: 'Fund'},
        additionalBinding: [{ localElement: 'FinancialManagementArea', element: 'FinancialManagementArea', usage: #FILTER_AND_RESULT }]
      }]
      @ObjectModel.foreignKey.association: '_Fund'
  key cast( _Source.Fund as fincs_fund preserving type )                                       as Fund,

      @Semantics.text
      cast( _Source.FundName as fincs_fundname preserving type )                               as FundName,

      _Source.CnsldtnIsAdditionalMasterData,

      /* associations */
      _Language,
      _Fund,
      _FinancialManagementArea
}
where
  _Source.Language is not null
```
