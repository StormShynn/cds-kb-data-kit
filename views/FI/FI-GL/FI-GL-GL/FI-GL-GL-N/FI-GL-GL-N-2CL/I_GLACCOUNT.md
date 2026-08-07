---
name: I_GLACCOUNT
description: "GL Account"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-N-2CL
  - lob:Finance
---
# I_GLACCOUNT

**GL Account**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccount` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccountGroup` |  | | `_GLAccountInChartOfAccounts` | `GLAccountGroup` |  |  |
| `CorporateGroupAccount` |  | | `_GLAccountInChartOfAccounts` | `CorporateGroupAccount` |  |  |
| `AccountIsBlockedForPosting` |  | |  |  |  |  |
| `AccountIsBlockedForPlanning` |  | | `_GLAccountInChartOfAccounts` | `AccountIsBlockedForPlanning` |  |  |
| `AccountIsBlockedForCreation` |  | | `_GLAccountInChartOfAccounts` | `AccountIsBlockedForCreation` |  |  |
| `IsBalanceSheetAccount` |  | | `_GLAccountInChartOfAccounts` | `IsBalanceSheetAccount` |  |  |
| `AccountIsMarkedForDeletion` |  | |  |  |  |  |
| `PartnerCompany` |  | | `_GLAccountInChartOfAccounts` | `PartnerCompany` |  |  |
| `FunctionalArea` |  | | `_GLAccountInChartOfAccounts` | `FunctionalArea` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `SampleGLAccount` |  | | `_GLAccountInChartOfAccounts` | `SampleGLAccount` |  |  |
| `IsProfitLossAccount` |  | | `_GLAccountInChartOfAccounts` | `IsProfitLossAccount` |  |  |
| `GLAccountType` |  | | `_GLAccountInChartOfAccounts` | `GLAccountType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `ProfitLossAccountType` |  | | `_GLAccountInChartOfAccounts` | `ProfitLossAccountType` |  |  |
| `ReconciliationAccountType` |  | |  |  |  |  |
| `LineItemDisplayIsEnabled` |  | |  |  |  |  |
| `IsOpenItemManaged` |  | |  |  |  |  |
| `AlternativeGLAccount` |  | |  |  |  |  |
| `AcctgDocItmDisplaySequenceRule` |  | |  |  |  |  |
| `GLAccountExternal` |  | |  | `cast( _GLAccountInChartOfAccounts.GLAccountExternal as fac_sakan preserving type )` |  |  |
| `CountryChartOfAccounts` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `TaxCategory` |  | |  |  |  |  |
| `IsAutomaticallyPosted` |  | |  |  |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [1..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_Text` | `I_GlAccountTextInCompanycode` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_GLAccountHierarchyNode` | `I_GLAccountHierarchyNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'General Ledger Account'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC


@AbapCatalog: {
                 sqlViewName:      'IFIGLACCOUNT',
                 preserveKey:      true,
                 buffering.status: #NOT_ALLOWED
              }

@ObjectModel: {
                 representativeKey: 'GLAccount',
                 supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY],
                 usageType: {
                                sizeCategory: #M,
                                dataClass:  #MASTER,
                                serviceQuality: #C
                            }
              }


@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true

//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText']
// ]--GENERATED

define view I_GLAccount
  //P-View is needed as CoA is needed and this must not be part of I-View
  as select from P_Glacct_In_Cc 
                 //I_GLAccountInChartOfAccounts as GLAccountInChartOfAccounts
   // inner join   P_Glacct_In_Cc               as GLAccountInCompanyCode on  GLAccountInChartOfAccounts.GLAccount       = GLAccountInCompanyCode.GLAccount
   //                                                                     and GLAccountInChartOfAccounts.ChartOfAccounts = GLAccountInCompanyCode.ChartOfAccounts

  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
  association [0..*] to I_ChartOfAccountsText        as _ChartOfAccountsText        on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  // ]--GENERATED
  association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode     on  $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
                                                                                    and $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode

  association [1..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..*] to I_GlAccountTextInCompanycode as _Text                       on  $projection.CompanyCode = _Text.CompanyCode
                                                                                    and $projection.GLAccount   = _Text.GLAccount

  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_FunctionalArea             as _FunctionalArea             on  $projection.functionalarea = _FunctionalArea.FunctionalArea

  association [0..*] to I_GLAccountHierarchyNode    as _GLAccountHierarchyNode    on  $projection.GLAccount       = _GLAccountHierarchyNode.GLAccount
                                                                                  and $projection.ChartOfAccounts = _GLAccountHierarchyNode.ChartOfAccounts


{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH

  key P_Glacct_In_Cc.GLAccount                                  as GLAccount,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_Glacct_In_Cc.CompanyCode                                as CompanyCode,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      P_Glacct_In_Cc.ChartOfAccounts,
      _GLAccountInChartOfAccounts.GLAccountGroup,
      _GLAccountInChartOfAccounts.CorporateGroupAccount,
      P_Glacct_In_Cc.AccountIsBlockedForPosting,
      _GLAccountInChartOfAccounts.AccountIsBlockedForPlanning,
      _GLAccountInChartOfAccounts.AccountIsBlockedForCreation,
      _GLAccountInChartOfAccounts.IsBalanceSheetAccount,
      P_Glacct_In_Cc.AccountIsMarkedForDeletion,
      _GLAccountInChartOfAccounts.PartnerCompany,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      _GLAccountInChartOfAccounts.FunctionalArea,
      P_Glacct_In_Cc.CreationDate,
      _GLAccountInChartOfAccounts.SampleGLAccount,
      @EndUserText.label: 'Balance Sheet Account'
      _GLAccountInChartOfAccounts.IsProfitLossAccount,
      _GLAccountInChartOfAccounts.GLAccountType,
      P_Glacct_In_Cc.CreatedByUser,
      _GLAccountInChartOfAccounts.ProfitLossAccountType,
      P_Glacct_In_Cc.ReconciliationAccountType,
      P_Glacct_In_Cc.LineItemDisplayIsEnabled,
      P_Glacct_In_Cc.IsOpenItemManaged,
      P_Glacct_In_Cc.AlternativeGLAccount,
      P_Glacct_In_Cc.AcctgDocItmDisplaySequenceRule,
      cast( _GLAccountInChartOfAccounts.GLAccountExternal as fac_sakan preserving type ) as GLAccountExternal,
      P_Glacct_In_Cc.CountryChartOfAccounts,
      P_Glacct_In_Cc.AuthorizationGroup,
      P_Glacct_In_Cc.TaxCategory,
      P_Glacct_In_Cc.IsAutomaticallyPosted,
      _CompanyCode.CompanyCodeName,
      _CompanyCode,
      _Text,
      _GLAccountHierarchyNode,
      _ChartOfAccounts,
      _FunctionalArea,
      _GLAccountInCompanyCode,
      _GLAccountInChartOfAccounts,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.hidden: true
      _ChartOfAccountsText
      // ]--GENERATED

};
//  as select from I_GLAccountInChartOfAccounts as GLAccountInChartOfAccounts
//    inner join   P_Glacct_In_Cc               as GLAccountInCompanyCode on  GLAccountInChartOfAccounts.GLAccount       = GLAccountInCompanyCode.GLAccount
//                                                                        and GLAccountInChartOfAccounts.ChartOfAccounts = GLAccountInCompanyCode.ChartOfAccounts
//
//  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//  association [0..*] to I_ChartOfAccountsText        as _ChartOfAccountsText        on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
//  // ]--GENERATED
//  association [0..1] to I_GLAccountInCompanyCode     as _GLAccountInCompanyCode     on  $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
//                                                                                    and $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
//
//  association [1..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
//                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
//
//  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts            on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
//
//  association [0..*] to I_GlAccountTextInCompanycode as _Text                       on  $projection.CompanyCode = _Text.CompanyCode
//                                                                                    and $projection.GLAccount   = _Text.GLAccount
//
//  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
//
//  association [0..1] to I_FunctionalArea             as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
//
//{
//      @ObjectModel.text.association: '_Text'
//      @Search.defaultSearchElement:true
//      @Search.fuzzinessThreshold:0.8
//      @Search.ranking:#HIGH
//
//  key GLAccountInChartOfAccounts.GLAccount                                  as GLAccount,
//      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//      @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_CompanyCodeStdVH',
//                     element: 'CompanyCode' }
//        }]
//      // ]--GENERATED
//      @ObjectModel.foreignKey.association: '_CompanyCode'
//  key GLAccountInCompanyCode.CompanyCode                                as CompanyCode,
//      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//      @Consumption.valueHelpDefinition: [
//        { entity:  { name:    'I_ChartOfAccountsStdVH',
//                     element: 'ChartOfAccounts' }
//        }]
//      @ObjectModel.text.association: '_ChartOfAccountsText'
//      // ]--GENERATED
//      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
//      GLAccountInChartOfAccounts.ChartOfAccounts,
//      GLAccountInChartOfAccounts.GLAccountGroup,
//      GLAccountInChartOfAccounts.CorporateGroupAccount,
//      GLAccountInChartOfAccounts.AccountIsBlockedForPosting,
//      GLAccountInChartOfAccounts.AccountIsBlockedForPlanning,
//      GLAccountInChartOfAccounts.AccountIsBlockedForCreation,
//      GLAccountInChartOfAccounts.IsBalanceSheetAccount,
//      GLAccountInChartOfAccounts.AccountIsMarkedForDeletion,
//      GLAccountInChartOfAccounts.PartnerCompany,
//      @ObjectModel.foreignKey.association: '_FunctionalArea'
//      GLAccountInChartOfAccounts.FunctionalArea,
//      GLAccountInChartOfAccounts.CreationDate,
//      GLAccountInChartOfAccounts.SampleGLAccount,
//      @EndUserText.label: 'Balance Sheet Account'
//      GLAccountInChartOfAccounts.IsProfitLossAccount,
//      GLAccountInChartOfAccounts.GLAccountType,
//      GLAccountInChartOfAccounts.CreatedByUser,
//      GLAccountInChartOfAccounts.ProfitLossAccountType,
//      GLAccountInCompanyCode.ReconciliationAccountType,
//      GLAccountInCompanyCode.LineItemDisplayIsEnabled,
//      GLAccountInCompanyCode.IsOpenItemManaged,
//      GLAccountInCompanyCode.AlternativeGLAccount,
//      GLAccountInCompanyCode.AcctgDocItmDisplaySequenceRule,
//      cast( GLAccountInChartOfAccounts.GLAccountExternal as fac_sakan ) as GLAccountExternal,
//      GLAccountInCompanyCode.CountryChartOfAccounts,
//      GLAccountInCompanyCode.AuthorizationGroup,
//      GLAccountInCompanyCode.TaxCategory,
//      GLAccountInCompanyCode.IsAutomaticallyPosted,
//      _CompanyCode.CompanyCodeName,
//      _CompanyCode,
//      _Text,
//      _GLAccountHierarchyNode,
//      _ChartOfAccounts,
//      _FunctionalArea,
//      _GLAccountInCompanyCode,
//      _GLAccountInChartOfAccounts,
//      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
//      @Consumption.hidden: true
//      _ChartOfAccountsText
//      // ]--GENERATED
//
//};
```
