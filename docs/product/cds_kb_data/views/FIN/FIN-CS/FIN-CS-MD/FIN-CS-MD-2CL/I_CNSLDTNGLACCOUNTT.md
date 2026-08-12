---
name: I_CNSLDTNGLACCOUNTT
description: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNTT')/$value
semantic_en: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidation Combined G/L Account - Txt — CDS view giao diện (master data) dựa trên Consolidation Combined G/L Account - Txt."
keywords:
  - "consolidation"
  - "combined"
  - "g/l"
  - "account"
  - "txt"
  - "language"
  - "chart"
  - "accounts"
  - "additional"
  - "master"
  - "data"
  - "source"
  - "text"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_CNSLDTNGLACCOUNTT

**This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNTT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` | `LANG(1)` | Language Key |
| `GLAccount` | ✓ | |  | `cast( _Source.GLAccount as fincs_glaccount preserving type )` | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` | ✓ | |  | `cast( _Source.ChartOfAccounts as fincs_chartofaccounts preserving type )` | `CHAR(4)` | G/L Chart of Accounts |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` | `CHAR(10)` | Consolidation Additional Master Data Source |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.GLAccountName as fincs_description_text_20 preserving type )` | `CHAR(20)` | Description |
| `GLAccountName` |  | |  | `cast( _Source.GLAccountName as fincs_glaccountname preserving type )` | `CHAR(20)` | G/L Account Name |
| `GLAccountLongName` |  | |  | `cast( _Source.GLAccountLongName as fincs_long_description_50 preserving type )` | `CHAR(50)` | Long Description |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( _Source.CnsldtnIsAdditionalMasterData as fincs_isadditionalmasterdata preserving type )` | `CHAR(1)` | Is Additional Master Data |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_GLAccount` | `I_CnsldtnGLAccount` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNTT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNTT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLACCOUNTT',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #CHECK
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
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT ]
  }
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined G/L Account - Txt'

define view I_CnsldtnGLAccountT
  as select distinct from P_CnsldtnGLAccountT as _Source

    inner join            I_CnsldtnGLAccount  as _Main on  _Main.ChartOfAccounts               = _Source.ChartOfAccounts
                                                       and _Main.GLAccount                     = _Source.GLAccount
                                                       and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language                 as _Language        on  $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGLChartOfAccounts as _ChartOfAccounts on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [1..1] to I_CnsldtnGLAccount         as _GLAccount       on  $projection.GLAccount       = _GLAccount.GLAccount
                                                                       and $projection.ChartOfAccounts = _GLAccount.ChartOfAccounts

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_GLAccount'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLAccountVH',
          element: 'GLAccount'},
        additionalBinding: [{ localElement: 'ChartOfAccounts', element: 'ChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key cast( _Source.GLAccount as fincs_glaccount preserving type )                                  as GLAccount,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key cast( _Source.ChartOfAccounts as fincs_chartofaccounts preserving type )                      as ChartOfAccounts,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'GLAccountName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'GLAccountName' }
      cast( _Source.GLAccountName as fincs_description_text_20 preserving type )                    as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.GLAccountName as fincs_glaccountname preserving type )                          as GLAccountName,

      @Semantics.text
      cast( _Source.GLAccountLongName as fincs_long_description_50 preserving type )                as GLAccountLongName,

      cast( _Source.CnsldtnIsAdditionalMasterData as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ChartOfAccounts,
      _GLAccount
}
where
  _Source.Language is not null
```
