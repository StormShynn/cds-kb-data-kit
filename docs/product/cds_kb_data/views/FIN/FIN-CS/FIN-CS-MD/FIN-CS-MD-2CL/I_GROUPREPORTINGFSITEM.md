---
name: I_GROUPREPORTINGFSITEM
description: "This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUPREPORTINGFSITEM')/$value
semantic_en: "This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items."
semantic_vi: "Financial Statement Item — CDS view giao diện (master data) dựa trên fincs_fsitem."
keywords:
  - "financial"
  - "statement"
  - "item"
  - "consolidation"
  - "chart"
  - "accounts"
  - "type"
  - "breakdown"
  - "category"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - bo:companycode
---
# I_GROUPREPORTINGFSITEM

**This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUPREPORTINGFSITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | ✓ | |  | `cast(item as fc_item preserving type )` | `CHAR(10)` | Financial Statement Item |
| `FinancialStatementItemType` |  | |  | `itclass` | `CHAR(10)` | Financial Statement Item Type |
| `BreakdownCategory` |  | |  | `itbrkdwn` | `CHAR(4)` | Breakdown Category |
| `IsConsolidationItem` |  | |  | `itcitem` | `CHAR(1)` | Is Consolidation Item |
| `FinancialStatementItemIsBlkd` |  | |  | `itblkd` | `CHAR(1)` | Blocked for Posting |
| `_ConsChartOfAccountsText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |
| `_FinStmntItmHierNode` | | ✓ | | | | |
| `_FinStmntItmType` | | ✓ | | | | |
| `_BreakdownCat` | | ✓ | | | | |
| `_ConsChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsChartOfAccountsText` | `I_CnsldtnChartOfAccountsT` | [0..*] |
| `_Text` | `I_CnsldtnFinStmntItemText` | [0..*] |
| `_LongText` | `I_CnsldtnFinStmntItemLongText` | [0..*] |
| `_FinStmntItmHierNode` | `I_GroupReportingFSItemHierNode` | [0..*] |
| `_FinStmntItmType` | `I_CnsldtnFinStmntItemType` | [0..1] |
| `_BreakdownCat` | `I_BreakdownCategory` | [0..1] |
| `_ConsChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUPREPORTINGFSITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GROUPREPORTINGFSITEM')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFSITEM',
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL }
  }
@AccessControl:{
  authorizationCheck: #CHECK,
  privilegedAssociations: ['_FinStmntItmHierNode','_ConsChartOfAccountsText']
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L},
  representativeKey: 'FinancialStatementItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION]
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Financial Statement Item'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_GroupReportingFSItem
  as select from fincs_fsitem

  association [0..*] to I_CnsldtnChartOfAccountsT      as _ConsChartOfAccountsText on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccountsText.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnFinStmntItemText      as _Text                    on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                                   and $projection.FinancialStatementItem       = _Text.FinancialStatementItem

  association [0..*] to I_CnsldtnFinStmntItemLongText  as _LongText                on  $projection.ConsolidationChartOfAccounts = _LongText.ConsolidationChartOfAccounts
                                                                                   and $projection.FinancialStatementItem       = _LongText.FinancialStatementItem

  association [0..*] to I_GroupReportingFSItemHierNode as _FinStmntItmHierNode     on  $projection.ConsolidationChartOfAccounts = _FinStmntItmHierNode.ConsolidationChartOfAccounts
                                                                                   and $projection.FinancialStatementItem       = _FinStmntItmHierNode.FinancialStatementItem

  association [0..1] to I_CnsldtnFinStmntItemType      as _FinStmntItmType         on  $projection.FinancialStatementItemType = _FinStmntItmType.ConsolidationFSItemType

  association [0..1] to I_BreakdownCategory            as _BreakdownCat            on  $projection.ConsolidationChartOfAccounts = _BreakdownCat.ConsolidationChartOfAccounts
                                                                                   and $projection.BreakdownCategory            = _BreakdownCat.BreakdownCategory

  association [1..1] to I_CnsldtnChartOfAccounts       as _ConsChartOfAccounts     on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccounts.ConsolidationChartOfAccounts

{

      @ObjectModel.text.association: '_ConsChartOfAccountsText' //STS - annotation not required as it is not the representative key
      @ObjectModel.foreignKey.association: '_ConsChartOfAccounts'
  key itclg                                  as ConsolidationChartOfAccounts,


      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FinStmntItmHierNode'
  key cast(item as fc_item preserving type ) as FinancialStatementItem,

      @ObjectModel.foreignKey.association: '_FinStmntItmType'
      itclass                                as FinancialStatementItemType,

      @ObjectModel.foreignKey.association: '_BreakdownCat'
      itbrkdwn                               as BreakdownCategory,

      itcitem                                as IsConsolidationItem,

      itblkd                                 as FinancialStatementItemIsBlkd,


      _ConsChartOfAccounts,
      _FinStmntItmType,
      _BreakdownCat,
      _FinStmntItmHierNode,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes:true
      _Text,
      _LongText,

      @Consumption.hidden: true
      _ConsChartOfAccountsText

}
```
