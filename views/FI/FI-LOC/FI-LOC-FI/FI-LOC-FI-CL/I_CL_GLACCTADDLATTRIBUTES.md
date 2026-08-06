---
name: I_CL_GLACCTADDLATTRIBUTES
description: CL Glacctaddlattributes
app_component: FI-LOC-FI-CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-CL
  - lob:Finance
---
# I_CL_GLACCTADDLATTRIBUTES

**CL Glacctaddlattributes**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ChartOfAccounts` | `ktopl` |
| key `FromGLAccount` | `cast( from_account as saknr_v )` |
| key `ToGLAccount` | `cast( to_account as saknr_b )` |
| `CL_GLAccountGroup` | `acct_code` |
| `CL_GLAccountType` | `acct_classification` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICLGLACCTATTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [#NONE]
@EndUserText.label: 'GL Acct Additional Attributes for Chile' 
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_CL_GLAcctAddlAttributes
  as select from ficlc_actcfn_cod
{
  key ktopl as ChartOfAccounts,
  key cast( from_account as saknr_v ) as FromGLAccount,
  key cast( to_account as saknr_b ) as ToGLAccount,
  acct_code as CL_GLAccountGroup,
  acct_classification as CL_GLAccountType
}
```
