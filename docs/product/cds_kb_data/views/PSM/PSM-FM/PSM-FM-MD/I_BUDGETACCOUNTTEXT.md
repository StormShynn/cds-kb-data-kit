---
name: I_BUDGETACCOUNTTEXT
description: "Budget Account - Text"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTTEXT')/$value
semantic_en: "Budget Account - Text"
semantic_vi: "Budget Account - Text — CDS view giao diện (master data) dựa trên skat."
keywords:
  - "budget"
  - "account"
  - "text"
  - "chart"
  - "accounts"
  - "language"
  - "name"
  - "description"
tags:
  - PSM
  - account
  - budget
  - component:PSM-FM-MD
  - interface-view
  - PSM-FM
  - PSM-FM-MD
---
# I_BUDGETACCOUNTTEXT

**Budget Account - Text**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `cast( ktopl as fis_ktopl preserving type )` | `CHAR(4)` | Chart of Accounts |
| `PubSecBudgetAccount` | ✓ | |  | `cast( saknr as psm_bdgt_account preserving type )` | `CHAR(10)` | Budget Account |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BudgetAccountName` |  | |  | `cast( txt20 as fmis_budget_account_name )` | `CHAR(20)` | Budget Account Name |
| `BudgetAccountDescription` |  | |  | `cast( txt50 as psm_budget_account_desc )` | `CHAR(50)` | Budget Account Description |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_Language` | `I_Language` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETACCOUNTTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDACT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Budget Account - Text'

@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     representativeKey: 'PubSecBudgetAccount',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']

define view I_BudgetAccountText
  as select from skat
    inner join   I_GLAccountForPublicSector as GLAcctX on  skat.ktopl = GLAcctX.ChartOfAccounts
                                                       and skat.saknr = GLAcctX.GLAccount
  association [0..*] to I_ChartOfAccountsText as _ChartOfAccountsText on $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
  association [0..1] to I_ChartOfAccounts     as _ChartOfAccounts     on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key cast( ktopl as fis_ktopl preserving type ) as ChartOfAccounts,
      @ObjectModel.text.element: 'BudgetAccountDescription'
  key cast( saknr as psm_bdgt_account preserving type ) as PubSecBudgetAccount,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras           as Language,
      @Semantics.text: true
      cast( txt20 as fmis_budget_account_name ) as BudgetAccountName,
      @Semantics.text: true
      cast( txt50 as psm_budget_account_desc ) as BudgetAccountDescription,
      _Language,
      _ChartOfAccounts,
      @Consumption.hidden: true
      _ChartOfAccountsText

} where GLAcctX.PubSecBdgtAcctRevnExpnCode <> '';
```
