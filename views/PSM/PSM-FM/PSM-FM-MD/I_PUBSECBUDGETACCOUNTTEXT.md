---
name: I_PUBSECBUDGETACCOUNTTEXT
description: "Pubsecbudgetaccounttext"
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-MD
  - interface-view
  - text-view
  - text
  - component:PSM-FM-MD
  - lob:Other
---
# I_PUBSECBUDGETACCOUNTTEXT

**Pubsecbudgetaccounttext**

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
| `PubSecBudgetAccountCoCode` | ✓ | |  | `cast( I_GLAccountInCompanyCode.CompanyCode as psm_bdgt_account_cocode preserving type )` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `BudgetAccountName` |  | |  |  |  |  |
| `BudgetAccountDescription` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDACCTT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Budget Account - Text'

@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.buffering.status: #NOT_ALLOWED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     representativeKey: 'PubSecBudgetAccount',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #B,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]          
}
@Search.searchable: true
// added to have type ahead functionality
@Consumption.ranked: true

define view I_PubSecBudgetAccountText
  as select from I_BudgetAccountText as MainText
    inner join   P_Glacct_In_Cc      as I_GLAccountInCompanyCode on  MainText.ChartOfAccounts     = I_GLAccountInCompanyCode.ChartOfAccounts
                                                                 and MainText.PubSecBudgetAccount = I_GLAccountInCompanyCode.GLAccount
  association [0..1] to I_Language        as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_CompanyCode     as _PubSecBudgetAccountCoCode on $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode
  association [0..1] to I_ChartOfAccounts as _ChartOfAccounts           on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
{
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#LOW
      @ObjectModel.text.element: 'BudgetAccountDescription'
  key MainText.PubSecBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode' //Inserted by VDM CDS Suite Plugin
  key cast( I_GLAccountInCompanyCode.CompanyCode as psm_bdgt_account_cocode preserving type ) as PubSecBudgetAccountCoCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key MainText.Language,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts' //Inserted by VDM CDS Suite Plugin
      MainText.ChartOfAccounts,

      @Semantics.text: true
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#LOW
      MainText.BudgetAccountName,
      @Semantics.text: true
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#LOW
      MainText.BudgetAccountDescription,
      _Language,
      _PubSecBudgetAccountCoCode,
      _ChartOfAccounts
}
```
