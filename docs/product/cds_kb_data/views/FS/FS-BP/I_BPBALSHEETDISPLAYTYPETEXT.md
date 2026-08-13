---
name: I_BPBALSHEETDISPLAYTYPETEXT
description: "Bpbalsheetdisplaytypetext"
semantic_vi: "View I_BPBALSHEETDISPLAYTYPETEXT cung cấp mô tả loại hiển thị cho bảng cân đối kế toán trong dữ liệu chủ doanh nghiệp. Nó được sử dụng để lấy mô tả văn bản cho loại hiển thị bảng cân đối kế toán."
keywords:
  - "balance sheet"
  - "bảng cân đối kế toán"
  - "business partner"
  - "chủ doanh nghiệp"
  - "display type"
  - "loại hiển thị"
  - "text description"
  - "mô tả văn bản"
  - "sap cds view"
  - "view i_bpbalsheetdisplaytypetext"
semantic_en: "The Bpbalsheetdisplaytypetext CDS view provides display type descriptions for balance sheets in business partner master data. It is used to retrieve text descriptions for balance sheet display types."
app_component: FS-BP
software_component: SAP_BASIS
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
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPBALSHEETDISPLAYTYPETEXT

**Bpbalsheetdisplaytypetext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BPBalanceSheetDisplayType` | ✓ | |  | `cast ( dd07t.domvalue_l as bp_bal_flg )` |  |  |
| `BPBalanceSheetDisplayTypeDesc` |  | |  | `ddtext` |  |  |
| `_BPBalanceSheetDisplayType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPBalanceSheetDisplayType` | `I_BPBalanceSheetDisplayType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Balance Sheet Display for BP - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BPBalanceSheetDisplayType'
}
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BPBalSheetDisplayTypeText
  as select from dd07t
  association [0..1] to I_BPBalanceSheetDisplayType as _BPBalanceSheetDisplayType on $projection.BPBalanceSheetDisplayType = _BPBalanceSheetDisplayType.BPBalanceSheetDisplayType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                        as Language,

      @ObjectModel.text.element: ['BPBalanceSheetDisplayTypeDesc']
      @ObjectModel.foreignKey.association: '_BPBalanceSheetDisplayType'
  key cast ( dd07t.domvalue_l as bp_bal_flg ) as BPBalanceSheetDisplayType,
      @Semantics.text: true
      dd07t.ddtext                            as BPBalanceSheetDisplayTypeDesc,

      _BPBalanceSheetDisplayType,
      _Language
}
where
      dd07t.domname  = 'BP_BAL_FLG'
  and dd07t.as4local = 'A'
```
