---
name: I_CNSLDTNGLCHARTOFACCOUNTST
description: Cnsldtnglchartofaccountst
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
# I_CNSLDTNGLCHARTOFACCOUNTST

**Cnsldtnglchartofaccountst**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ChartOfAccounts as fincs_chartofaccounts preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.ChartOfAccountsName as fincs_description_text_50 preserving type )` |
| `ChartOfAccountsName` |  | |  | `cast( _Source.ChartOfAccountsName as fincs_chartofaccountsname preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |
| `_Language` | | ✓ | | |
| `_ChartOfAccounts` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLCHOFACT',
  compiler.compareFilter: true
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'ChartOfAccounts',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnGLChartOfAccountsText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined G/L Chart Of Accounts - Txt'

// Fully C1 Released in CE2208

define view I_CnsldtnGLChartOfAccountsT
  as select distinct from P_CnsldtnGLChartOfAccountsT as _Source

    inner join            I_CnsldtnGLChartOfAccounts  as _Main on  _Main.ChartOfAccounts               = _Source.ChartOfAccounts
                                                               and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language        on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGLChartOfAccounts as _ChartOfAccounts on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key cast( _Source.ChartOfAccounts as fincs_chartofaccounts preserving type )             as ChartOfAccounts,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'ChartOfAccountsName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'ChartOfAccountsName' }
      cast( _Source.ChartOfAccountsName as fincs_description_text_50 preserving type )     as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.ChartOfAccountsName as fincs_chartofaccountsname preserving type )     as ChartOfAccountsName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ChartOfAccounts
}
where
  _Source.Language is not null
```
