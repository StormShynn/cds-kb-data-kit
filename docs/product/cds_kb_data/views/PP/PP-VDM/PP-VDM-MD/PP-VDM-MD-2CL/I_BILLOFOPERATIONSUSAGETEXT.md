---
name: I_BILLOFOPERATIONSUSAGETEXT
description: "Billofoperationsusagetext"
semantic_vi: "View I_BILLOFOPERATIONSUSAGETEXT cung cấp mô tả văn bản cho việc sử dụng bảng kê hoạt động, có liên quan đến quy trình sản xuất trong SAP PP-VDM-MD-2CL. Nó có thể được sử dụng để hiển thị hoặc truy xuất các mô tả dựa trên ngôn ngữ và sử dụng."
keywords:
  - "bill of operations"
  - "sử dụng bảng kê hoạt động"
  - "text view"
  - "view"
  - "sản xuất"
  - "quy trình sản xuất"
  - "sap pp-vdm-md-2cl"
  - "manufacturing"
  - "pp-vdm"
  - "pp"
semantic_en: "The I_BILLOFOPERATIONSUSAGETEXT view provides text descriptions for bill of operations usage, which is relevant for manufacturing processes in SAP PP-VDM-MD-2CL. It can be used to display or retrieve these descriptions based on language and usage."
app_component: PP-VDM-MD-2CL
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
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BILLOFOPERATIONSUSAGETEXT

**Billofoperationsusagetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
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
| `BillOfOperationsUsage` | ✓ | |  | `cast(txt.verwe as billofoperationsusage preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfOperationsUsageDesc` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOUSAGETEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsUsage'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Usage - Text'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsUsageText'
@Analytics.dataExtraction.enabled: true

define view I_BillOfOperationsUsageText
  as select from t411t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'BillOfOperationsUsageDesc'
  key cast(txt.verwe as billofoperationsusage preserving type) as BillOfOperationsUsage,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt   as BillOfOperationsUsageDesc,

      //Associations
      _Language
};
```
