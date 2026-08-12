---
name: I_TRANSACTIONTYPESTDGLACCT
description: "Transactiontypestdglacct"
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TRANSACTIONTYPESTDGLACCT

**Transactiontypestdglacct**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `ChartOfAccounts` | ✓ | |  | `cast (ktopl as fis_ktopl preserving type)` |  |  |
| `TransactionTypeDetermination` | ✓ | |  | `cast (ktosl as fac_ktosl preserving type )` |  |  |
| `ValuationAreaGroup` | ✓ | |  | `bwmod` |  |  |
| `GLAcctDetnDifferentiation` | ✓ | |  | `komok` |  |  |
| `ValuationClass` | ✓ | |  | `bklas` |  |  |
| `DebitGLAccount` |  | |  | `cast (konts as ftr_gen_gl_account_debit preserving type)` |  |  |
| `CreditGLAccount` |  | |  | `cast (case when konth is null then konts else konth end as ftr_gen_gl_account_credit preserving type )` |  |  |
| `_StandardGLAcctDetnRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StandardGLAcctDetnRule` | `I_StandardGLAcctDetnRule` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTDGLACCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Transaction Type Standard G/L Account'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

@AbapCatalog.buffering: {
  type: #GENERIC,
  numberOfKeyFields: 2,
  status: #ACTIVE
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
  },
  supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
}

define view I_TransactionTypeStdGLAcct
  as select from t030

  association [0..1] to I_StandardGLAcctDetnRule as _StandardGLAcctDetnRule on  $projection.ChartOfAccounts              = _StandardGLAcctDetnRule.ChartOfAccounts
                                                                            and $projection.TransactionTypeDetermination = _StandardGLAcctDetnRule.TransactionTypeDetermination

{
  key cast (ktopl as fis_ktopl preserving type)                    as ChartOfAccounts,
  key cast (ktosl as fac_ktosl preserving type )                   as TransactionTypeDetermination,
  key bwmod                                                        as ValuationAreaGroup,
  key komok                                                        as GLAcctDetnDifferentiation,
  key bklas                                                        as ValuationClass,
      cast (konts as ftr_gen_gl_account_debit preserving type)     as DebitGLAccount,
      cast (case
              when konth is null then konts
              else konth
            end as ftr_gen_gl_account_credit preserving type )     as CreditGLAccount

  ,_StandardGLAcctDetnRule
}
```
