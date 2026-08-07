---
name: I_OFFSETTINGACCOUNT
description: "Offsettingaccount"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OFFSETTINGACCOUNT

**Offsettingaccount**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  |  |  |  |
| `OffsettingAccountType` | ✓ | |  |  |  |  |
| `OffsettingAccount` | ✓ | |  |  |  |  |
| `OffsettingAccountName` |  | |  |  |  |  |
| `OffsettingAccountShortName` |  | |  |  |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_GLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Offsetting Account'
@Analytics: {dataCategory: #DIMENSION}
@Analytics.technicalName: 'IFIOFFSETACCT'
@VDM.viewType: #COMPOSITE
@ObjectModel: { representativeKey: 'OffsettingAccount',
                usageType: { sizeCategory: #XL,
                             dataClass:  #MASTER,
                             serviceQuality: #C },
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_DIMENSION }
                             
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 
@Metadata.allowExtensions:true
@Consumption.dbHints:  ['USE_HEX_PLAN']                      

define view entity I_OffsettingAccount
  as select from P_OffsettingAccount as P_OffsettingAccount

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts           on  $projection.ChartOfAccounts       = _ChartOfAccounts.ChartOfAccounts
// association is incorrect - do not use
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccount                 on  $projection.OffsettingAccount     = _GLAccount.ChartOfAccounts
                                                                                  and  $projection.OffsettingAccount     = _GLAccount.GLAccount
                                                                                  and  ( $projection.OffsettingAccountType = 'S' or 
                                                                                         $projection.OffsettingAccountType = 'M' or
                                                                                         $projection.OffsettingAccountType = 'A' )
// correct association                                                                                         
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts     = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and  $projection.OffsettingAccount     = _GLAccountInChartOfAccounts.GLAccount
                                                                                    and  ( $projection.OffsettingAccountType = 'S' or 
                                                                                         $projection.OffsettingAccountType = 'M' or
                                                                                         $projection.OffsettingAccountType = 'A' )                                                                                         
//  association [0..*] to I_OffsettingAccountText     as _Text                      on  $projection.ChartOfAccounts       = _Text.ChartOfAccounts
//                                                                                  and $projection.OffsettingAccount     = _Text.OffsettingAccount
  association [0..1] to I_FinancialAccountType       as _OffsettingAccountType     on  $projection.OffsettingAccountType = _OffsettingAccountType.FinancialAccountType
//  association [0..*] to I_GLAccountHierarchyNode     as _GLAccountHierarchyNode    on  $projection.OffsettingAccount     = _GLAccountHierarchyNode.GLAccount
//                                                                                  and  $projection.ChartOfAccounts       = _GLAccountHierarchyNode.ChartOfAccounts
//                                                                                  and  $projection.OffsettingAccountType = 'S'
  association [0..1] to I_Customer                   as _Customer                  on  $projection.OffsettingAccount     = _Customer.Customer
                                                                                  and  $projection.OffsettingAccountType = 'D'                                                                                                                                                   
  association [0..1] to I_Supplier                   as _Supplier                  on  $projection.OffsettingAccount     = _Supplier.Supplier
                                                                                  and  $projection.OffsettingAccountType = 'K'
{
  @ObjectModel.foreignKey.association: '_ChartOfAccounts' //Inserted by VDM CDS Suite Plugin
  key P_OffsettingAccount.ChartOfAccounts,
  @ObjectModel.foreignKey.association: '_OffsettingAccountType'                  
  key P_OffsettingAccount.OffsettingAccountType,
  @ObjectModel.text.element: ['OffsettingAccountName']
  key P_OffsettingAccount.OffsettingAccount,
  
  @Semantics.text: true
  P_OffsettingAccount.OffsettingAccountName,
  @Semantics.text: true
  @Consumption.hidden: true
  P_OffsettingAccount.OffsettingAccountShortName,
       
      _ChartOfAccounts,
      _GLAccountInChartOfAccounts,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_GLAccountInChartOfAccounts'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_GLAccountInChartOfAccounts'            
      _GLAccount,
//      _GLAccountHierarchyNode,
      _Customer,
      _Supplier,
      _OffsettingAccountType
};
```
