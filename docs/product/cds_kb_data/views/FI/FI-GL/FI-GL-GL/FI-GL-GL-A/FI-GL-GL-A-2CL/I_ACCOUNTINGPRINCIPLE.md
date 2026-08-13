---
name: I_ACCOUNTINGPRINCIPLE
description: "Accountingprinciple"
semantic_vi: "View I_ACCOUNTINGPRINCIPLE hiển thị các nguyên tắc kế toán được sử dụng trong quản lý tài chính, thường được truy cập khi thiết lập hoặc phân tích các tài khoản kế toán chung."
keywords:
  - "accounting principle"
  - "nguyên tắc kế toán"
  - "fi"
  - "fi-gl"
  - "fi-gl-gl"
  - "general ledger"
  - "tài khoản kế toán chung"
  - "accounting management"
  - "quản lý kế toán"
semantic_en: "The I_ACCOUNTINGPRINCIPLE view exposes accounting principles used in financial management, typically accessed when setting up or analyzing general ledger accounts."
app_component: FI-GL-GL-A-2CL
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
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCOUNTINGPRINCIPLE

**Accountingprinciple**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `AccountingPrinciple` | ✓ | |  | `acc_principle` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingPrincipleText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IACCPRINCIPLE', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Accounting Principle'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AccountingPrinciple',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AccountingPrinciple
  as select from tacc_principle
  association [0..*] to I_AccountingPrincipleText as _Text on $projection.AccountingPrinciple = _Text.AccountingPrinciple
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key acc_principle as AccountingPrinciple,
      _Text
}
```
