---
name: I_GLACCOUNTINCHARTOFACCOUNTS
description: "GL AccountINCHARTOFACCOUNTS"
app_component: FI-GL-GL-N-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_GLACCOUNTINCHARTOFACCOUNTS

**GL AccountINCHARTOFACCOUNTS**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` |  |  |
| `GLAccount` | ✓ | |  | `saknr` |  |  |
| `IsBalanceSheetAccount` |  | |  | `cast( ska1.xbilk as isbalancesheetaccount )` |  |  |
| `GLAccountGroup` |  | |  | `ktoks` |  |  |
| `CorporateGroupChartOfAccounts` |  | | `_ChartOfAccounts` | `CorporateGroupChartOfAccounts` |  |  |
| `CorporateGroupAccount` |  | |  | `bilkt` |  |  |
| `ProfitLossAccountType` |  | |  | `gvtyp` |  |  |
| `SampleGLAccount` |  | |  | `mustr` |  |  |
| `AccountIsMarkedForDeletion` |  | |  | `xloev` |  |  |
| `AccountIsBlockedForCreation` |  | |  | `xspea` |  |  |
| `AccountIsBlockedForPosting` |  | |  | `xspeb` |  |  |
| `AccountIsBlockedForPlanning` |  | |  | `xspep` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `FunctionalArea` |  | |  | `func_area` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangeDateTime` |  | |  | `last_changed_ts` |  |  |
| `GLAccountType` |  | |  | `glaccount_type` |  |  |
| `GLAccountSubtype` |  | |  | `glaccount_subtype` |  |  |
| `GLAccountExternal` |  | |  | `cast( ska1.sakan as fac_sakan )` |  |  |
| `BankReconciliationAccount` |  | |  | `main_saknr` |  |  |
| `IsProfitLossAccount` |  | |  | `cast(case when ska1.xbilk = 'X' then ' ' else 'X' end as xbilk)` |  |  |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_GLAccountGroupText` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_GLAccountSubtype` | | ✓ | | | | |
| `_RetainedEarningsGLAccount` | | ✓ | | | | |
| `_GLAccountHierarchyNode` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_GlobalCompany` | | ✓ | | | | |
| `_GLAccountGroup` | | ✓ | | | | |
| `_GLAcctInChartOfAcctsProdn` | | ✓ | | | | |
| `_GLAcctInChartOfAcctsStatus` | | ✓ | | | | |
| `_PublicSector` | | ✓ | | | | |
| `_CorporateGroupChartOfAccounts` | | ✓ | | | | |
| `_CorporateGroupAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_GLAccountGroupText` | `I_GLAccountGroupText` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_Text` | `I_GLAccountText` | [0..*] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_GLAccountSubtype` | `I_GLAccountSubtype` | [0..1] |
| `_RetainedEarningsGLAccount` | `I_RetainedEarningsGLAccount` | [0..1] |
| `_GLAccountHierarchyNode` | `I_GLAccountHierarchyNode` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_User` | `I_User` | [1..1] |
| `_GlobalCompany` | `I_Globalcompany` | [1..1] |
| `_GLAccountGroup` | `I_GLAccountGroup` | [0..1] |
| `_GLAcctInChartOfAcctsProdn` | `I_GLAcctInChartOfAcctsProdn` | [0..1] |
| `_GLAcctInChartOfAcctsStatus` | `I_GLAcctInCOAImplementStat` | [0..1] |
| `_PublicSector` | `I_GLAccountForPublicSector` | [0..1] |
| `_CorporateGroupChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CorporateGroupAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'G/L Account In Chart Of Accounts'

@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
        mapping:
            [ { table: 'SKA1',
                role: #MAIN,
                viewElement: ['ChartOfAccounts', 'GLAccount'],
                tableElement: ['ktopl', 'saknr']
            },
            { table: 'T004',
            role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement: ['CorporateGroupChartOfAccounts'],
            tableElement: ['ktopl']
            } ]
        }
    }
}

@ObjectModel: {representativeKey: 'GLAccount',
               sapObjectNodeType.name: 'GeneralLedgerAccount', //BS
               supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE],
               entityChangeStateId: 'LastChangeDateTime',
               usageType: {
                            dataClass: #MASTER,
                            serviceQuality: #B,
                            sizeCategory: #M
                           }
              } 
              
@VDM.viewType: #BASIC 
@AbapCatalog.sqlViewName: 'IFIGLACCINCOA'

//@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.buffering.status: #NOT_ALLOWED

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@Search.searchable: true
@Metadata.allowExtensions: true
@AbapCatalog.preserveKey:true
//--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
@AccessControl.privilegedAssociations: ['_ChartOfAccountsText','_GLAccountGroupText']
// ]--GENERATED

define view I_GLAccountInChartOfAccounts
  as select from ska1
  
  
  //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
  association [0..*] to I_ChartOfAccountsText      as _ChartOfAccountsText on   $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..*] to I_GLAccountGroupText      as _GLAccountGroupText on   $projection.GLAccountGroup = _GLAccountGroupText.GLAccountGroup
                                                                                 and   $projection.ChartOfAccounts = _GLAccountGroupText.ChartOfAccounts
  // ]--GENERATED
  association [0..1] to I_ChartOfAccounts           as _ChartOfAccounts           on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..*] to I_GLAccountText             as _Text                      on  $projection.ChartOfAccounts = _Text.ChartOfAccounts
                                                                                  and $projection.GLAccount       = _Text.GLAccount

  association [0..1] to I_GLAccountType             as _GLAccountType             on  $projection.GLAccountType = _GLAccountType.GLAccountType
  
  association [0..1] to I_GLAccountSubtype          as _GLAccountSubtype          on  $projection.GLAccountSubtype = _GLAccountSubtype.GLAccountSubtype
  
  association [0..1] to I_RetainedEarningsGLAccount as _RetainedEarningsGLAccount on  $projection.ChartOfAccounts       = _RetainedEarningsGLAccount.ChartOfAccounts
                                                                                  and $projection.ProfitLossAccountType = _RetainedEarningsGLAccount.ProfitLossAccountType


  association [0..*] to I_GLAccountHierarchyNode    as _GLAccountHierarchyNode    on  $projection.GLAccount       = _GLAccountHierarchyNode.GLAccount
                                                                                  and $projection.ChartOfAccounts = _GLAccountHierarchyNode.ChartOfAccounts

  association [0..1] to I_FunctionalArea            as _FunctionalArea            on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [1..1] to I_User                      as _User                      on  $projection.CreatedByUser = _User.UserID

  association [1..1] to I_Globalcompany             as _GlobalCompany             on  $projection.PartnerCompany = _GlobalCompany.Company

  association [0..1] to I_GLAccountGroup            as _GLAccountGroup            on  $projection.GLAccountGroup  = _GLAccountGroup.GLAccountGroup
                                                                                  and $projection.ChartOfAccounts = _GLAccountGroup.ChartOfAccounts
                                                                                  
  association [0..1] to I_GLAcctInChartOfAcctsProdn as _GLAcctInChartOfAcctsProdn on  $projection.ChartOfAccounts  = _GLAcctInChartOfAcctsProdn.ChartOfAccounts
                                                                                  and $projection.GLAccount        = _GLAcctInChartOfAcctsProdn.GLAccount

  association [0..1] to I_GLAcctInCOAImplementStat as _GLAcctInChartOfAcctsStatus   on  $projection.ChartOfAccounts  = _GLAcctInChartOfAcctsStatus.ChartOfAccounts
                                                                                  and $projection.GLAccount        = _GLAcctInChartOfAcctsStatus.GLAccount
                                                                                                                                                                                                                           
  association [0..1] to I_GLAccountForPublicSector as _PublicSector               on  $projection.ChartOfAccounts = _PublicSector.ChartOfAccounts
                                                                                  and $projection.GLAccount       = _PublicSector.GLAccount                                                                                        

  association [0..1] to I_ChartOfAccounts            as _CorporateGroupChartOfAccounts on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupChartOfAccounts.ChartOfAccounts
  association [0..1] to I_GLAccountInChartOfAccounts as _CorporateGroupAccount         on  $projection.CorporateGroupChartOfAccounts = _CorporateGroupAccount.ChartOfAccounts
                                                                                       and $projection.CorporateGroupAccount         = _CorporateGroupAccount.GLAccount


{
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ChartOfAccountsStdVH',
                     element: 'ChartOfAccounts' }
        }]
      @ObjectModel.text.association: '_ChartOfAccountsText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ChartOfAccounts' //Inserted by VDM CDS Suite Plugin
      @Search.defaultSearchElement:true
      @Search.fuzzinessThreshold:0.8
      @Search.ranking:#HIGH 
  key ska1.ktopl                                     as ChartOfAccounts,
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_GLAccountHierarchyNode'
  key ska1.saknr                                     as GLAccount,
      cast( ska1.xbilk as isbalancesheetaccount )    as IsBalanceSheetAccount,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_GLAccountGroupStdVH',
                     element: 'GLAccountGroup' },
          additionalBinding: [{ localElement: 'ChartOfAccounts',
                                element: 'ChartOfAccounts' }]
        }]
      @ObjectModel.text.association: '_GLAccountGroupText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_GLAccountGroup'
      ska1.ktoks                                     as GLAccountGroup,
      @ObjectModel.foreignKey.association: '_CorporateGroupChartOfAccounts'
      _ChartOfAccounts.CorporateGroupChartOfAccounts as CorporateGroupChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CorporateGroupAccount'
      ska1.bilkt                                     as CorporateGroupAccount,
      ska1.gvtyp                                     as ProfitLossAccountType,
      ska1.mustr                                     as SampleGLAccount,
      ska1.xloev                                     as AccountIsMarkedForDeletion,
      ska1.xspea                                     as AccountIsBlockedForCreation,
      ska1.xspeb                                     as AccountIsBlockedForPosting,
      ska1.xspep                                     as AccountIsBlockedForPlanning,
      @ObjectModel.foreignKey.association: '_GlobalCompany'
      ska1.vbund                                     as PartnerCompany,
      @ObjectModel.foreignKey.association: '_FunctionalArea' //Inserted by VDM CDS Suite Plugin
      ska1.func_area                                 as FunctionalArea,
      @Semantics.systemDate.createdAt: true
      ska1.erdat                                     as CreationDate,
      ska1.ernam                                     as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ska1.last_changed_ts                           as LastChangeDateTime,
      @ObjectModel.foreignKey.association: '_GLAccountType' //Inserted by VDM CDS Suite Plugin
      ska1.glaccount_type                            as GLAccountType,
      @ObjectModel.foreignKey.association: '_GLAccountSubtype'
      ska1.glaccount_subtype                         as GLAccountSubtype,
      cast( ska1.sakan as fac_sakan )                as GLAccountExternal,
      ska1.main_saknr                                as BankReconciliationAccount,
      //ska1.sakan                                     as GLAccountExternal,
      @EndUserText.label: 'Profit Loss Account'
      cast(case when ska1.xbilk = 'X' then
          ' '
      else
          'X'
      end as xbilk)                                  as IsProfitLossAccount,
      _User,
      _ChartOfAccounts,
      _Text,
      _GLAccountHierarchyNode,
      _FunctionalArea,
      _RetainedEarningsGLAccount,
      _GLAccountType,
      _GLAccountSubtype,
      _GLAccountGroup,
      _GlobalCompany,
      _GLAcctInChartOfAcctsProdn,
      _GLAcctInChartOfAcctsStatus,
      _PublicSector,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.hidden: true
      _ChartOfAccountsText,
      @Consumption.hidden: true
      _GLAccountGroupText,
      // ]--GENERATED
      _CorporateGroupChartOfAccounts,
      _CorporateGroupAccount      

};
```
