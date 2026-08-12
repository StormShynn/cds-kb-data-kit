---
name: I_PUBSECBUDGETACCOUNTSTDVH
description: "Budget Account"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETACCOUNTSTDVH')/$value
semantic_en: "Budget Account"
semantic_vi: "Budget Account — CDS view giao diện dựa trên I_PubSecBudgetAccount."
keywords:
  - "budget"
  - "account"
  - "code"
  - "chart"
  - "accounts"
  - "bdgt"
  - "acct"
  - "revn"
  - "expn"
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
# I_PUBSECBUDGETACCOUNTSTDVH

**Budget Account**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETACCOUNTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetAccount` | ✓ | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` | ✓ | |  |  | `CHAR(4)` | Budget Account Company Code |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_BudgetAccountText` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETACCOUNTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBUDGETACCOUNTSTDVH')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDACVH'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Budget Account'

@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'PubSecBudgetAccount',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #C,
         sizeCategory: #S
     }
}

@Search.searchable: true

@AccessControl.privilegedAssociations: ['_BudgetAccountText', '_ChartOfAccountsText']

@Consumption.ranked: true
define view I_PubSecBudgetAccountStdVH 
  as select from I_PubSecBudgetAccount as Main
{
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
      @ObjectModel.text.association: '_BudgetAccountText'
  key Main.PubSecBudgetAccount,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
  key Main.PubSecBudgetAccountCoCode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      Main.ChartOfAccounts,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
                     element: 'PubSecBdgtAcctRevnExpnCode' }
        }]
      Main.PubSecBdgtAcctRevnExpnCode,
      Main.PubSecBudgetIsRelevant,

      @Consumption.hidden: true
      Main._PubSecBdgtAcctRevnExpnCode, 
      _ChartOfAccountsText,
      _BudgetAccountText
           
}
```
