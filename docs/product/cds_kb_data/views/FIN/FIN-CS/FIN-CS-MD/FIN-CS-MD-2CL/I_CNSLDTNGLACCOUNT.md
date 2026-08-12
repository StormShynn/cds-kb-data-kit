---
name: I_CNSLDTNGLACCOUNT
description: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value
semantic_en: "This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Consolidation Combined G/L Account — CDS view tổng hợp (master data) dựa trên Consolidation Combined G/L Account."
keywords:
  - "consolidation"
  - "combined"
  - "g/l"
  - "account"
  - "chart"
  - "accounts"
  - "additional"
  - "master"
  - "data"
  - "source"
  - "cnsldtn"
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
# I_CNSLDTNGLACCOUNT

**This CDS view provides access to the G/L account in consolidation. It combines the values from the CDS view I_GLAccountInChartOfAccounts with additional G/L accounts maintained for consolidation only. This CDS view provides the data to answer the following business questions: What G/L accounts exist and in which G/L chart of accounts? What is the source of a G/L account using the value ACCTG for values of I_GLAccountInChartOfAccounts and the value CNSLDTN for consolidation. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` | ✓ | |  | `cast( GLAccount as fincs_glaccount preserving type )` | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` | ✓ | |  | `cast( ChartOfAccounts as fincs_chartofaccounts preserving type )` | `CHAR(4)` | G/L Chart of Accounts |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` | `CHAR(10)` | Consolidation Additional Master Data Source |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` | `CHAR(1)` | Is Additional Master Data |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_GLAccountHierNode` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnGLAccountT` | [0..*] |
| `_GLAccountHierNode` | `I_CnsldtnGLAccountHierNode_2` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnGLAccountHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGLACCOUNT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICSGLACCOUNT',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false
}
@AccessControl:{
  authorizationCheck: #CHECK,
  // remove priv access after HierNode Renova when it receives DCL
  privilegedAssociations: ['_GLAccountHierNode']
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
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnGLAccount'
}
@VDM:{
  viewType: #COMPOSITE
//  lifecycle:{
//    status: #DEPRECATED,
//    successor: 'I_CnsldtnGLAccount_2'}
  }
@EndUserText.label: 'Consolidation Combined G/L Account'

// C1 Releasd, key user tools since Year 2020
// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnGLAccount
  as select distinct from P_CnsldtnGLAccount

  association [1..1] to I_CnsldtnGLChartOfAccounts   as _ChartOfAccounts   on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountT          as _Text              on  $projection.GLAccount       = _Text.GLAccount
                                                                           and $projection.ChartOfAccounts = _Text.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountHierNode_2 as _GLAccountHierNode on  $projection.GLAccount       = _GLAccountHierNode.GLAccount
                                                                           and $projection.ChartOfAccounts = _GLAccountHierNode.ChartOfAccounts

  association [0..*] to I_CnsldtnGLAccountHierNode   as _HierarchyNode     on  $projection.GLAccount       = _HierarchyNode.GLAccount
                                                                           and $projection.ChartOfAccounts = _HierarchyNode.ChartOfAccounts

  association [1..1] to I_CnsldtnMDSource            as _MDSource          on  $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLAccountVH',
          element: 'GLAccount'},
        additionalBinding: [{ localElement: 'ChartOfAccounts', element: 'ChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key cast( GLAccount as fincs_glaccount preserving type )                                          as GLAccount,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGLChartOfAccountsVH',
          element: 'ChartOfAccounts'
        }
      }]
  key cast( ChartOfAccounts as fincs_chartofaccounts preserving type )                              as ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      /* associations */
      _ChartOfAccounts,
      _Text,
      _GLAccountHierNode,
      _HierarchyNode,
      _MDSource
}
where
      ChartOfAccounts is not initial //required to avoid access to corrupt database entries
  and GLAccount       is not initial
group by
  ChartOfAccounts,
  GLAccount
```
