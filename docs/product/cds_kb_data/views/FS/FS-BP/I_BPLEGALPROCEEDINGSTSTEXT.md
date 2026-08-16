---
name: I_BPLEGALPROCEEDINGSTSTEXT
description: "Bplegalproceedingststext"
semantic_vi: "View Bplegalproceedingststext hiển thị dữ liệu văn bản trạng thái vụ việc pháp lý cho quản lý quy trình kinh doanh trong SAP FS-BP. Nó được sử dụng để lấy thông tin mô tả trạng thái vụ việc pháp lý."
keywords:
  - "legal proceeding"
  - "trạng thái vụ việc pháp lý"
  - "business process management"
  - "quản lý quy trình kinh doanh"
  - "sap fs-bp"
  - "bplegalproceedingststext"
  - "text view"
  - "view"
  - "status description"
  - "mô tả trạng thái"
semantic_en: "The Bplegalproceedingststext view exposes legal proceeding status text data for business process management in SAP FS-BP. It is used to retrieve status descriptions for legal proceedings."
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
# I_BPLEGALPROCEEDINGSTSTEXT

**Bplegalproceedingststext**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `BPLegalProceedingStatus` | ✓ | |  | `lgl_proc` |  |  |
| `BPLegalProceedingStatusDesc` |  | |  | `lgl_proc_t` |  |  |
| `_BPLegalProceedingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPLegalProceedingStatus` | `I_BPLegalProceedingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPLGLPROCSTSTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPLegalProceedingStatus',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Legal Proceedings Status of BP - Text'

define view I_BPLegalProceedingStsText
  as select from fsbpcc_lgl_proct
  association [0..1] to I_BPLegalProceedingStatus as _BPLegalProceedingStatus on $projection.BPLegalProceedingStatus = _BPLegalProceedingStatus.BPLegalProceedingStatus
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key fsbpcc_lgl_proct.langu      as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPLegalProceedingStatus'
  key fsbpcc_lgl_proct.lgl_proc   as BPLegalProceedingStatus,

      @Semantics.text: true
      fsbpcc_lgl_proct.lgl_proc_t as BPLegalProceedingStatusDesc,

      _BPLegalProceedingStatus,
      _Language
}
```
