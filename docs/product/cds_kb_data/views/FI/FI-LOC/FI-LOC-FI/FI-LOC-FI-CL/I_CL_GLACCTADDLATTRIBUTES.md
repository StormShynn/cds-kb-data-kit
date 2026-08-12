---
name: I_CL_GLACCTADDLATTRIBUTES
description: "CL Glacctaddlattributes"
app_component: FI-LOC-FI-CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` | ✓ | |  | `ktopl` |  |  |
| `FromGLAccount` | ✓ | |  | `cast( from_account as saknr_v )` |  |  |
| `ToGLAccount` | ✓ | |  | `cast( to_account as saknr_b )` |  |  |
| `CL_GLAccountGroup` |  | |  | `acct_code` |  |  |
| `CL_GLAccountType` |  | |  | `acct_classification` |  |  |

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
