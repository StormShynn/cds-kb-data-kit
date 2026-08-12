---
name: I_PUBSECBUDGETACCOUNT
description: "Pubsecbudgetaccount"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-MD
  - interface-view
  - component:PSM-FM-MD
  - lob:Other
---
# I_PUBSECBUDGETACCOUNT

**Pubsecbudgetaccount**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetAccount` | ✓ | |  |  |  |  |
| `PubSecBudgetAccountCoCode` | ✓ | |  | `cast( GLAccountInCompanyCode.CompanyCode as psm_bdgt_account_cocode preserving type )` |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnType` |  | |  |  |  |  |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  |  |  |
| `PubSecBudgetIsRelevant` |  | |  |  |  |  |
| `PubSecBdgtAcctIsPostgAllowed` |  | |  |  |  |  |
| `PubSecBdgtAcctIsBdgtAllowed` |  | |  |  |  |  |
| `PubSecBdgtAcctIsCarryFwd` |  | |  |  |  |  |
| `PubSecBdgtAcctCarryFwdTo` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `_CarryForwardBudgetAccount` |  | |  |  |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_BudgetAccountText` | | ✓ | | | | |
| `_PubSecBudgetAccountText` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_BudgetAccountText` | `I_PubSecBudgetAccountText` | [0..*] |
| `_PubSecBudgetAccountText` | `I_GlAccountTextInCompanycode` | [0..*] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDACCT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Budget Account'

@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
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
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]     
}

@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
@ObjectModel.sapObjectNodeType.name: 'PublicSectorBudgetAccount'

define view I_PubSecBudgetAccount 
  as select from I_BudgetAccountInChtAccts as Main
      inner join P_Glacct_In_Cc as  GLAccountInCompanyCode
                                on  Main.PubSecBudgetAccount   = GLAccountInCompanyCode.GLAccount
                                and Main.ChartOfAccounts = GLAccountInCompanyCode.ChartOfAccounts
      inner join t001 as CompanyCode
                                on  GLAccountInCompanyCode.CompanyCode = CompanyCode.bukrs

  association [0..*] to I_ChartOfAccountsText          as _ChartOfAccountsText         on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..*] to I_PubSecBudgetAccountText      as _BudgetAccountText           on  $projection.PubSecBudgetAccount  = _BudgetAccountText.PubSecBudgetAccount
                                                                                       and $projection.PubSecBudgetAccountCoCode = _BudgetAccountText.PubSecBudgetAccountCoCode
  // Do not use this association anymore                                                                                     
  association [0..*] to I_GlAccountTextInCompanycode   as _PubSecBudgetAccountText     on  $projection.PubSecBudgetAccount  = _PubSecBudgetAccountText.GLAccount
                                                                                       and $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountText.CompanyCode
  association [0..1] to I_CompanyCode                  as _PubSecBudgetAccountCoCode   on  $projection.PubSecBudgetAccountCoCode  = _PubSecBudgetAccountCoCode.CompanyCode

{
      @ObjectModel.text.association: '_BudgetAccountText'
      @ObjectModel.hierarchy.association: '_BudgetAccountHierarchyNode'
  key Main.PubSecBudgetAccount,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
  key cast( GLAccountInCompanyCode.CompanyCode as psm_bdgt_account_cocode preserving type ) as PubSecBudgetAccountCoCode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      Main.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
      @UI.hidden: true
      Main.PubSecBudgetCnsmpnType,
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      Main.PubSecBdgtAcctRevnExpnCode,
      Main.PubSecBudgetIsRelevant, 
      Main.PubSecBdgtAcctIsPostgAllowed, 
      Main.PubSecBdgtAcctIsBdgtAllowed, 
      Main.PubSecBdgtAcctIsCarryFwd, 
      @ObjectModel.foreignKey.association: '_CarryForwardBudgetAccount'
      Main.PubSecBdgtAcctCarryFwdTo, 
   //   Main.PubSecBdgtAcctCashOrigin,
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      Main.CashLedgerAccount,

      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_BudgetAccountText'
      Main._Text,   
      Main._PubSecBdgtCnsmpnType,
      Main._PubSecBdgtAcctRevnExpnCode, 
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CarryForwardBudgetAccount'
      Main._PubSecBdgtAcctCarryFwdTo,
      Main._CarryForwardBudgetAccount as _CarryForwardBudgetAccount,
      Main._CashLedgerAccount,
      Main._BudgetAccountHierarchyNode,
      _ChartOfAccounts,
      _ChartOfAccountsText,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_BudgetAccountText'
      _PubSecBudgetAccountText,
      _BudgetAccountText,
      _PubSecBudgetAccountCoCode
           
} where CompanyCode.fikrs <> ''
```
