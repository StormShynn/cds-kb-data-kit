---
name: I_ACCOUNTINGPRINCIPLETEXT
description: "Accountingprincipletext"
semantic_vi: "View Accounting Principle Text cung cấp các mô tả văn bản của nguyên tắc kế toán trong nhiều ngôn ngữ khác nhau, cho phép các nhà phát triển truy cập và sử dụng thông tin này trong các ứng dụng của họ. View này hữu ích khi hiển thị tên và mô tả của nguyên tắc kế toán trong giao diện người dùng."
keywords:
  - "accounting principle"
  - "nguyên tắc kế toán"
  - "text view"
  - "view"
  - "fi-gl-gl-a-2cl"
  - "fi"
  - "fi-gl"
  - "fi-gl-gl"
  - "interface view"
  - "text"
  - "finance"
  - "finance industry"
semantic_en: "The Accounting Principle Text view provides text descriptions of accounting principles in multiple languages, enabling developers to access and utilize this information in their applications. This view is useful when displaying accounting principle names and descriptions in a user interface."
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
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCOUNTINGPRINCIPLETEXT

**Accountingprincipletext**

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
| `Language` | ✓ | |  | `cast( langu as spras)` |  |  |
| `AccountingPrinciple` | ✓ | |  | `acc_principle` |  |  |
| `AccountingPrincipleName` |  | |  | `acc_princtxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IACCPRINCIPLET', preserveKey: true}
@EndUserText.label: 'Accounting Principle - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AccountingPrinciple',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AccountingPrincipleText
  as select from tacc_principlet
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
  key cast( langu as spras)         as Language,
  key tacc_principlet.acc_principle as AccountingPrinciple,
      @Semantics.text: true
      @EndUserText.label: 'Name of Accounting Principle'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      acc_princtxt                  as AccountingPrincipleName,

      _Language
}
```
