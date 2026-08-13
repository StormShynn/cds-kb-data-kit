---
name: I_BILLABLECONTROLTEXT
description: "Billablecontroltext"
semantic_vi: "View I_BILLABLECONTROLTEXT cung cấp dữ liệu văn bản kiểm soát có thể tính phí, được sử dụng để hiển thị tên kiểm soát có thể tính phí trong các ngôn ngữ khác nhau. Nó thường được sử dụng khi hiển thị thông tin tài chính trong nhiều ngôn ngữ."
keywords:
  - "billable control"
  - "billable control text"
  - "financial information"
  - "language"
  - "fi-gl"
  - "fi-gl-is"
  - "fi"
  - "fi-gl-is-2cl"
  - "text view"
  - "interface view"
  - "đơn có thể tính phí"
  - "văn bản kiểm soát có thể tính phí"
semantic_en: "The I_BILLABLECONTROLTEXT view provides billable control text data, which is used to display billable control names in different languages. It is typically used when displaying financial information in multiple languages."
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
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_BILLABLECONTROLTEXT

**Billablecontroltext**

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
| `BillableControl` | ✓ | |  | `cast( bemot as fis_bemot preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillableControlName` |  | |  | `cast( bemot_txt as fis_bemot_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IFIBILLABCTRLT',
                compiler.compareFilter: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billable Control - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BillableControl',
                usageType: { dataClass: #CUSTOMIZING,
                serviceQuality: #A,
                sizeCategory: #S },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT } 
@VDM.viewType: #BASIC

define view I_BillableControlText
  as select from tbmotx
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast( bemot as fis_bemot preserving type )          as BillableControl,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                                               as Language,
      @Semantics.text
      cast( bemot_txt as fis_bemot_name preserving type ) as BillableControlName,
      _Language
}
```
