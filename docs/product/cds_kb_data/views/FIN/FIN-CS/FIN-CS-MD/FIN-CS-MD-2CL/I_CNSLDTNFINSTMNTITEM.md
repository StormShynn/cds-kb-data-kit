---
name: I_CNSLDTNFINSTMNTITEM
description: "This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items."
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value
semantic_en: "This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items."
semantic_vi: "Financial Statement Item — CDS view cơ bản (master data) dựa trên fincs_fsitem."
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
# I_CNSLDTNFINSTMNTITEM

**This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `itclg` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | ✓ | |  | `cast ( item as fincs_fsi_item )` | `CHAR(10)` | Financial Statement Item |
| `FinancialStatementItemType` |  | |  | `itclass` | `CHAR(10)` | Financial Statement Item Type |
| `BreakdownCategory` |  | |  | `itbrkdwn` | `CHAR(4)` | Breakdown Category |
| `IsConsolidationItem` |  | |  | `itcitem` | `CHAR(1)` | Is Consolidation Item |
| `FinancialStatementItemIsBlkd` |  | |  | `itblkd` | `CHAR(1)` | Blocked for Posting |
| `NetBalanceIsCarriedForward` |  | |  | `itnbcf` | `CHAR(1)` | Carry Forward Balances |
| `FSItemLink` |  | |  | `link` | `CHAR(1333)` | URL |
| `FSItemLinkLabel` |  | |  | `linklabel` | `CHAR(255)` | Label for Link |
| `ETag` |  | |  | `etag` | `CHAR(32)` | Financial Statement Item ETag |
| `FinancialStatementItemGroup` |  | |  | `cast( '' as fc_itcgy )` | `CHAR(1)` | Financial Statement Item Type |
| `DebitCreditCode` |  | |  | `cast( '' as fc_sign )` | `CHAR(1)` | Debit/credit sign (+/-) |
| `FinancialStatementItemClass` |  | |  | `cast( '' as fincs_ittype )` | `CHAR(10)` | Financial Statement Item Type |
| `FinancialStatementItemCategory` |  | |  | `cast( '' as fc_ittyp )` | `CHAR(1)` | FS Item Category |
| `SignOfBalanceIsChecked` |  | |  | `cast( '' as fc_sblnc_i )` | `CHAR(1)` | Check the Sign of Balance |
| `IsAppropriationItem` |  | |  | `cast( '' as fc_appni_i )` | `CHAR(1)` | Appropriation Item |
| `NetBalanceIsCarryForward` |  | |  | `cast( '' as fc_ciind )` | `CHAR(1)` | Carry Forward the Net Balance |
| `TotalItemIsRecorded` |  | |  | `cast( '' as fc_deind )` | `CHAR(1)` | Totals Item May Be Entered/Posted to |
| `_ConsChartOfAccountsText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_LongText` | | ✓ | | | | |
| `_FinStmntItmHierNode` | | ✓ | | | | |
| `_FinStmntItmType` | | ✓ | | | | |
| `_BreakdownCat` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_FinStmntItemGroup` | | ✓ | | | | |
| `_FinStmntItemClass` | | ✓ | | | | |
| `_FinStmntItmCategory` | | ✓ | | | | |
| `_ConsChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsChartOfAccountsText` | `I_CnsldtnChartOfAccountsT` | [0..*] |
| `_Text` | `I_CnsldtnFinStmntItemText` | [0..*] |
| `_LongText` | `I_CnsldtnFinStmntItemLongText` | [0..*] |
| `_FinStmntItmHierNode` | `I_FinStmntItmHier` | [0..*] |
| `_FinStmntItmType` | `I_CnsldtnFinStmntItemType` | [0..1] |
| `_BreakdownCat` | `I_BreakdownCategory` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1..1] |
| `_FinStmntItemGroup` | `I_CnsldtnFinStmntItemGroup` | [1..1] |
| `_FinStmntItemClass` | `I_CnsldtnFinStmntItemClass` | [1..1] |
| `_FinStmntItmCategory` | `I_CnsldtnFinStmntItmCat` | [1..1] |
| `_ConsChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNFSITEM',
  preserveKey:true
  }
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
@AccessControl:{
  authorizationCheck: #CHECK,
  privilegedAssociations: ['_FinStmntItmHierNode', '_ConsChartOfAccountsText' ]
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
  modelingPattern: #NONE,                                            // is this correct?
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE ]                // usage as dimension in analytics?
}
@Analytics: {
  dataCategory: #DIMENSION
}
@VDM:{
  viewType: #BASIC
//  lifecycle:{
//    status: #DEPRECATED,
//    successor: 'I_CnsldtnFSItem_2'}
  }
@EndUserText.label: 'Financial Statement Item'

define view I_CnsldtnFinStmntItem
  as select from fincs_fsitem

  association [0..*] to I_CnsldtnChartOfAccountsT     as _ConsChartOfAccountsText on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccountsText.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnFinStmntItemText     as _Text                    on  $projection.ConsolidationChartOfAccounts = _Text.ConsolidationChartOfAccounts
                                                                                  and $projection.FinancialStatementItem       = _Text.FinancialStatementItem
  association [0..*] to I_CnsldtnFinStmntItemLongText as _LongText                on  $projection.ConsolidationChartOfAccounts = _LongText.ConsolidationChartOfAccounts
                                                                                  and $projection.FinancialStatementItem       = _LongText.FinancialStatementItem
  association [0..*] to I_FinStmntItmHier             as _FinStmntItmHierNode     on  $projection.ConsolidationChartOfAccounts = _FinStmntItmHierNode.ConsolidationChartOfAccounts
                                                                                  and $projection.FinancialStatementItem       = _FinStmntItmHierNode.FinancialStatementItem
  association [0..1] to I_CnsldtnFinStmntItemType     as _FinStmntItmType         on  $projection.FinancialStatementItemType = _FinStmntItmType.ConsolidationFSItemType

  association [0..1] to I_BreakdownCategory           as _BreakdownCat            on  $projection.ConsolidationChartOfAccounts = _BreakdownCat.ConsolidationChartOfAccounts
                                                                                  and $projection.BreakdownCategory            = _BreakdownCat.BreakdownCategory
  association [1..1] to I_DebitCreditCode             as _DebitCreditCode         on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [1..1] to I_CnsldtnFinStmntItemGroup    as _FinStmntItemGroup       on  $projection.FinancialStatementItemGroup = _FinStmntItemGroup.FinancialStatementItemGroup

  association [1..1] to I_CnsldtnFinStmntItemClass    as _FinStmntItemClass       on  $projection.FinancialStatementItemClass = _FinStmntItemClass.FinancialStatementItemClass

  association [1..1] to I_CnsldtnFinStmntItmCat       as _FinStmntItmCategory     on  $projection.FinancialStatementItemCategory = _FinStmntItmCategory.FinancialStatementItemCategory

  association [1..1] to I_CnsldtnChartOfAccounts      as _ConsChartOfAccounts     on  $projection.ConsolidationChartOfAccounts = _ConsChartOfAccounts.ConsolidationChartOfAccounts

{

      @ObjectModel.text.association: '_ConsChartOfAccountsText' //STS - annotation not required as it is not the representative key
      @ObjectModel.foreignKey.association: '_ConsChartOfAccounts'
  key itclg                           as ConsolidationChartOfAccounts,


      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_FinStmntItmHierNode'
  key cast ( item as fincs_fsi_item ) as FinancialStatementItem,

      @ObjectModel.foreignKey.association: '_FinStmntItmType'
      itclass                         as FinancialStatementItemType,

      @ObjectModel.foreignKey.association: '_BreakdownCat'
      itbrkdwn                        as BreakdownCategory,

      itcitem                         as IsConsolidationItem,

      itblkd                          as FinancialStatementItemIsBlkd,

      itnbcf                          as NetBalanceIsCarriedForward,

      link                            as FSItemLink,

      linklabel                       as FSItemLinkLabel,

      etag                            as ETag,

      // Obsolete fields //    TODO status: #DEPRECATED,
      @EndUserText.label: 'FS Item Type (Obsolete)' // HL remove, ATC 4, no label when cast
      @ObjectModel.foreignKey.association: '_FinStmntItemGroup'
      cast( '' as fc_itcgy )          as FinancialStatementItemGroup,
      @EndUserText.label: 'Dr./Cr. sign (Obsolete)'
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast( '' as fc_sign )           as DebitCreditCode,
      @EndUserText.label: 'Item Type (Obsolete)'
      @ObjectModel.foreignKey.association: '_FinStmntItemClass'
      cast( '' as fincs_ittype )      as FinancialStatementItemClass,
      @EndUserText.label: 'Item Category (Obsolete)'
      @ObjectModel.foreignKey.association: '_FinStmntItmCategory'
      cast( '' as fc_ittyp )          as FinancialStatementItemCategory,
      @EndUserText.label: 'Check Sign (Obsolete)'
      cast( '' as fc_sblnc_i )        as SignOfBalanceIsChecked,
      @EndUserText.label: 'Appropr. Item (Obsolete)'
      cast( '' as fc_appni_i )        as IsAppropriationItem,
      @EndUserText.label: 'Carry Forward (Obsolete)'
      cast( '' as fc_ciind    )       as NetBalanceIsCarryForward,
      @EndUserText.label: 'Tot.Itm Recordble (Obsolete)'
      cast( '' as fc_deind    )       as TotalItemIsRecorded,

      _ConsChartOfAccounts,
      _FinStmntItmType,
      _BreakdownCat,
      _DebitCreditCode,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes:true
      _FinStmntItemGroup,
      _FinStmntItemClass,
      _FinStmntItmCategory,
      _FinStmntItmHierNode,
      _Text,
      _LongText,

      @Consumption.hidden: true
      _ConsChartOfAccountsText

}
```
