---
name: I_JVACTBCKCOAACCTMAPPGINTER
description: Jvactbckcoaacctmappginter
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVACTBCKCOAACCTMAPPGINTER

**Jvactbckcoaacctmappginter**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JVAChartOfAccounts` | ✓ | |  |  |  |  |
| `JVAInterCompanyCOA` | ✓ | |  |  |  |  |
| `FromGLAccount` | ✓ | |  |  |  |  |
| `ToGLAccount` |  | |  |  |  |  |
| `CutbackAccount` |  | |  |  |  |  |
| `JVAIsToKeepOriginalAccount` |  | |  |  |  |  |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_JVAInterCompanyCOA` | | ✓ | | | | |
| `_FromGLAccount` | | ✓ | | | | |
| `_ToGLAccount` | | ✓ | | | | |
| `_CutbackAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_JVAInterCompanyCOA` | `I_ChartOfAccounts` | [0..1] |
| `_FromGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ToGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_CutbackAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cutback Account Mapping COA Intercompany'
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'FromGLAccount'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}

define view entity I_JVACtbckCOAAcctMappgInter

  as select from I_JVACtbckCOAAcctMappgInterBsc as JVACtbckCOAAcctMappgInterBsc

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts    on  _ChartOfAccounts.ChartOfAccounts = $projection.JVAChartOfAccounts

  association [0..1] to I_ChartOfAccounts            as _JVAInterCompanyCOA on  _JVAInterCompanyCOA.ChartOfAccounts = $projection.JVAInterCompanyCOA

  association [0..1] to I_GLAccountInChartOfAccounts as _FromGLAccount      on  _FromGLAccount.ChartOfAccounts = $projection.JVAChartOfAccounts
                                                                            and _FromGLAccount.GLAccount       = $projection.FromGLAccount

  association [0..1] to I_GLAccountInChartOfAccounts as _ToGLAccount        on  _ToGLAccount.ChartOfAccounts = $projection.JVAChartOfAccounts
                                                                            and _ToGLAccount.GLAccount       = $projection.ToGLAccount

  association [0..1] to I_GLAccountInChartOfAccounts as _CutbackAccount     on  _CutbackAccount.ChartOfAccounts = $projection.JVAInterCompanyCOA
                                                                            and _CutbackAccount.GLAccount       = $projection.CutbackAccount

{
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key JVACtbckCOAAcctMappgInterBsc.JVAChartOfAccounts,
  @ObjectModel.foreignKey.association: '_JVAInterCompanyCOA'
  key JVACtbckCOAAcctMappgInterBsc.JVAInterCompanyCOA,
  key JVACtbckCOAAcctMappgInterBsc.FromGLAccount,
      JVACtbckCOAAcctMappgInterBsc.ToGLAccount,
      JVACtbckCOAAcctMappgInterBsc.CutbackAccount,
      JVACtbckCOAAcctMappgInterBsc.JVAIsToKeepOriginalAccount,

      _ChartOfAccounts,
      _JVAInterCompanyCOA,
      _FromGLAccount,
      _ToGLAccount,
      _CutbackAccount

}
```
