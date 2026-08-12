---
name: I_BUDGETACCOUNTINCHTACCTS
description: "Budget Account in Chart of Accounts"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value
semantic_en: "Budget Account in Chart of Accounts"
semantic_vi: "Budget Account in Chart of Accounts — CDS view giao diện (master data) dựa trên I_GLAccountForPublicSector."
keywords:
  - "budget"
  - "account"
  - "chart"
  - "accounts"
  - "cnsmpn"
  - "type"
  - "bdgt"
  - "acct"
  - "revn"
  - "expn"
  - "code"
  - "relevant"
tags:
  - PSM
  - account
  - budget
  - component:PSM-FM-MD
  - interface-view
  - PSM-FM
  - PSM-FM-MD
---
# I_BUDGETACCOUNTINCHTACCTS

**Budget Account in Chart of Accounts**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `PubSecBudgetAccount` | ✓ | |  | `cast( GLAcctX.GLAccount as psm_bdgt_account preserving type )` | `CHAR(10)` | Budget Account |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctIsPostgAllowed` |  | |  |  | `CHAR(1)` | Posting to Budget Account Allowed |
| `PubSecBdgtAcctIsBdgtAllowed` |  | |  |  | `CHAR(1)` | Budgeting Allowed for Budget Account |
| `PubSecBdgtAcctIsCarryFwd` |  | |  |  | `CHAR(1)` | Use Budget Account as Carryforward Account |
| `PubSecBdgtAcctCarryFwdTo` |  | |  |  | `CHAR(10)` | Carry Forward Budget Account To Account |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `_CarryForwardBudgetAccount` |  | |  |  |  |  |
| `_BudgetAccountHierarchyNode` | | ✓ | | | | |
| `_BudgetAccountText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BudgetAccountHierarchyNode` | `I_BudgetAccountHierarchyNode` | [0..*] |
| `_BudgetAccountText` | `I_BudgetAccountText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTINCHTACCTS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDACCTCOA' 
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Budget Account in Chart of Accounts'

@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, internalName: #LOCAL }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions:true
@ObjectModel: {
     representativeKey: 'PubSecBudgetAccount',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #C,
         sizeCategory: #S
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY ]
}
@Search.searchable: true
define view I_BudgetAccountInChtAccts 
  as select from I_GLAccountForPublicSector as GLAcctX

  association [0..*] to I_BudgetAccountHierarchyNode   as _BudgetAccountHierarchyNode  on  $projection.ChartOfAccounts = _BudgetAccountHierarchyNode.ChartOfAccounts
                                                                                      and  $projection.PubSecBudgetAccount = _BudgetAccountHierarchyNode.PubSecBudgetAccount
  association [0..*] to I_BudgetAccountText            as _BudgetAccountText           on  $projection.ChartOfAccounts = _BudgetAccountText.ChartOfAccounts
                                                                                      and  $projection.PubSecBudgetAccount = _BudgetAccountText.PubSecBudgetAccount

{  
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key GLAcctX.ChartOfAccounts,
      @ObjectModel.text.association: '_BudgetAccountText'
      @ObjectModel.hierarchy.association: '_BudgetAccountHierarchyNode'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast( GLAcctX.GLAccount as psm_bdgt_account preserving type ) as PubSecBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
      GLAcctX.PubSecBudgetCnsmpnType,
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      GLAcctX.PubSecBdgtAcctRevnExpnCode,
      GLAcctX.PubSecBudgetIsRelevant, 
      GLAcctX.PubSecBdgtAcctIsPostgAllowed, 
      GLAcctX.PubSecBdgtAcctIsBdgtAllowed, 
      GLAcctX.PubSecBdgtAcctIsCarryFwd, 
      @ObjectModel.foreignKey.association: '_CarryForwardBudgetAccount'
      GLAcctX.PubSecBdgtAcctCarryFwdTo, 
//    @ObjectModel.foreignKey.association: '_CashLedgerAccount'
//      GLAcctX.PubSecBdgtAcctCashOrigin,
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      GLAcctX.CashLedgerAccount,
      
      GLAcctX._PubSecBdgtCnsmpnType,
      GLAcctX._PubSecBdgtAcctRevnExpnCode, 
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CarryForwardBudgetAccount'
      GLAcctX._PubSecBdgtAcctCarryFwdTo,
      GLAcctX._CarryForwardBudgetAccount as _CarryForwardBudgetAccount,
      GLAcctX._CashLedgerAccount,
      GLAcctX._ChartOfAccounts,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_BudgetAccountText'
      GLAcctX._Text,   
      _BudgetAccountText,
      _BudgetAccountHierarchyNode
    
} where GLAcctX.PubSecBdgtAcctRevnExpnCode <> ''
```
