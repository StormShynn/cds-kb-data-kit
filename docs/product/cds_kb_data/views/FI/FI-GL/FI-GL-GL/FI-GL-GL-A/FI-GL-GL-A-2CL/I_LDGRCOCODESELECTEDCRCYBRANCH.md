---
name: I_LDGRCOCODESELECTEDCRCYBRANCH
description: "This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?"
semantic_vi: "Selected Currency Branch for Ledger — CDS view giao diện dựa trên P_LedgerCompanyCurrencyBranch."
keywords:
  - "selected"
  - "currency"
  - "branch"
  - "for"
  - "ledger"
  - "company"
  - "code"
  - "role"
tags:
  - FI
  - bo:plant
  - component:FI-GL-GL-A-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-A
  - FI-GL-GL-A-2CL
  - interface-view
  - lob:finance
---
# I_LDGRCOCODESELECTEDCRCYBRANCH

**This CDS view provides the prerequisites for answering the following business question: Which of the selected currency branches can be used for a ledger and a company code?**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `SelectedCurrencyBranch` | ✓ | |  |  | `CHAR(2)` | Currency Type |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Company Code Currency Role |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SelectedCurrencyBranch` | | ✓ | | | | |
| `_CurrencyRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [1] |
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_SelectedCurrencyBranch` | `I_SelectedCurrencyBranch` | [0..1] |
| `_CurrencyRole` | `I_CurrencyRole` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LDGRCOCODESELECTEDCRCYBRANCH')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFALDCCSELCRCY', preserveKey: true, compiler.compareFilter: true}
@EndUserText.label: 'Selected Currency Branch for Ledger'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'SelectedCurrencyBranch',
                usageType.serviceQuality: #C,
                usageType.sizeCategory: #S,
                usageType.dataClass: #MASTER,
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata: {ignorePropagatedAnnotations: true, allowExtensions:true}

define view I_LdgrCoCodeSelectedCrcyBranch
  as select from P_LedgerCompanyCurrencyBranch

  association [1]    to I_Ledger                 as _Ledger                 on _Ledger.Ledger = $projection.Ledger
  association [1]    to I_CompanyCode            as _CompanyCode            on _CompanyCode.CompanyCode = $projection.CompanyCode
  association [0..1] to I_SelectedCurrencyBranch as _SelectedCurrencyBranch on _SelectedCurrencyBranch.SelectedCurrencyBranch = $projection.SelectedCurrencyBranch
  association [0..1] to I_CurrencyRole           as _CurrencyRole           on _CurrencyRole.CurrencyRole = $projection.CurrencyRole
{
       @ObjectModel.foreignKey.association: '_Ledger'
  key  Ledger,
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  CompanyCode,
       @ObjectModel.foreignKey.association: '_SelectedCurrencyBranch'
  key  SelectedCurrencyBranch,

       @ObjectModel.foreignKey.association: '_CurrencyRole'
       CurrencyRole,

       /* Associations */
       _Ledger,
       _CompanyCode,
       _SelectedCurrencyBranch,
       _CurrencyRole
}
```
