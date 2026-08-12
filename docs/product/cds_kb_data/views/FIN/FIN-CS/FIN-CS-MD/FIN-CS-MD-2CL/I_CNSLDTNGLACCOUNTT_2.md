---
name: I_CNSLDTNGLACCOUNTT_2
description: "Cnsldtngl AccountT 2"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS-MD
  - interface-view
  - gl-account
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGLACCOUNTT_2

**Cnsldtngl AccountT 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ChartOfAccounts as fincs_chartofaccounts preserving type )` |  |  |
| `GLAccount` | ✓ | |  | `cast( _Source.GLAccount as fincs_glaccount preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `GLAccountName` |  | |  | `cast( _Source.GLAccountName as fincs_glaccountname preserving type )` |  |  |
| `GLAccountLongName` |  | |  | `cast( _Source.GLAccountLongName as fincs_long_description_50 preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_GLAccount` | `I_CnsldtnGLAccount_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLACCOUNTT2',
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
  representativeKey: 'GLAccount',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnGLAccountText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined G/L Account - Txt'

// V2 Complete C1 Release in CE2208

define view I_CnsldtnGLAccountT_2
  as select distinct from P_CnsldtnGLAccountT  as _Source

    inner join            I_CnsldtnGLAccount_2 as _Main on  _Main.ChartOfAccounts               = _Source.ChartOfAccounts
                                                        and _Main.GLAccount                     = _Source.GLAccount
                                                        and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGLChartOfAccounts as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnGLAccount_2       as _GLAccount       on  $projection.GLAccount       = _GLAccount.GLAccount
                                                                       and $projection.ChartOfAccounts = _GLAccount.ChartOfAccounts
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

      @ObjectModel.foreignKey.association: '_GLAccount'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLAccountVH',
          element: 'GLAccount'},
        additionalBinding: [{ localElement: 'ChartOfAccounts', element: 'ChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key cast( _Source.GLAccount as fincs_glaccount preserving type )                         as GLAccount,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      cast( _Source.GLAccountName as fincs_glaccountname preserving type )                 as GLAccountName,

      @Semantics.text
      cast( _Source.GLAccountLongName as fincs_long_description_50 preserving type )       as GLAccountLongName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ChartOfAccounts,
      _GLAccount
}
where
  _Source.Language is not null
```
