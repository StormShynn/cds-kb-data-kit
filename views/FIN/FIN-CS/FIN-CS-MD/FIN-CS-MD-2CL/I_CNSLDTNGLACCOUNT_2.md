---
name: I_CNSLDTNGLACCOUNT_2
description: Cnsldtngl Account 2
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
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNT_2

**Cnsldtngl Account 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `cast( ChartOfAccounts as fincs_chartofaccounts preserving type )` |
| `GLAccount` |  | |  | `}] key cast( GLAccount as fincs_glaccount preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `CreationDateTime` |  | |  | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |
| `_ChartOfAccounts` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_GLAccountHierNode` | | ✓ | | |
| `_GLAccountHierNode_2` | | ✓ | | |
| `_MDSource` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnGLAccountT_2` | [0..*] |
| `_GLAccountHierNode` | `I_CnsldtnGLAccountHierNode` | [0..*] |
| `_GLAccountHierNode_2` | `I_CnsldtnGLAccountHierNode_2` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLACCOUNT2',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  // remove priv access after HierNode Renova when it receives DCL
  privilegedAssociations: ['_GLAccountHierNode', '_GLAccountHierNode_2']
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'GLAccount',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGLAccount'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined G/L Account'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnGLAccount_2
  as select distinct from P_CnsldtnGLAccount

  association [1..1] to I_CnsldtnGLChartOfAccounts   as _ChartOfAccounts     on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountT_2        as _Text                on  $projection.GLAccount       = _Text.GLAccount
                                                                             and $projection.ChartOfAccounts = _Text.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountHierNode   as _GLAccountHierNode   on  $projection.GLAccount       = _GLAccountHierNode.GLAccount
                                                                             and $projection.ChartOfAccounts = _GLAccountHierNode.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountHierNode_2 as _GLAccountHierNode_2 on  $projection.GLAccount       = _GLAccountHierNode_2.GLAccount
                                                                             and $projection.ChartOfAccounts = _GLAccountHierNode_2.ChartOfAccounts

  association [1..1] to I_CnsldtnMDSource            as _MDSource            on  $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel: {
        foreignKey.association: '_ChartOfAccounts'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key cast( ChartOfAccounts as fincs_chartofaccounts preserving type )                              as ChartOfAccounts,

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_GLAccountHierNode_2'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLAccountVH',
          element: 'GLAccount'},
        additionalBinding: [{ localElement: 'ChartOfAccounts', element: 'ChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key cast( GLAccount as fincs_glaccount preserving type )                                          as GLAccount,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,

      /* associations */
      _ChartOfAccounts,
      _Text,
      @API.element: {releaseState: #DEPRECATED, successor: '_GLAccountHierNode_2'}
      _GLAccountHierNode,
      _GLAccountHierNode_2,
      _MDSource
}
where
      ChartOfAccounts is not initial //required to avoid access to corrupt database entries
  and GLAccount       is not initial
group by
  ChartOfAccounts,
  GLAccount
```
