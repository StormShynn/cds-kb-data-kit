---
name: I_BILLINGDOCUMENTTYPE
description: "Billing DocumentUMENTTYPE"
semantic_vi: "View I_BILLINGDOCUMENTTYPE hiển thị các loại hóa đơn và các loại liên quan, được sử dụng để phân loại và quản lý hóa đơn trong mô-đun Bán hàng và Phân phối."
keywords:
  - "billing document"
  - "hóa đơn"
  - "sales and distribution"
  - "sản phẩm bán hàng"
  - "sddocumentcategory"
  - "billingdocumenttype"
  - "incrementitemnumber"
  - "billingdocumentcategory"
semantic_en: "The I_BILLINGDOCUMENTTYPE view exposes billing document types and related categories, used to categorize and manage billing documents in the Sales and Distribution module."
app_component: SD-BIL-GF-2CL
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
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPE

**Billing DocumentUMENTTYPE**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
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
| `BillingDocumentType` | ✓ | |  | `fkart` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `IncrementItemNumber` |  | |  | `incpo` |  |  |
| `BillingDocumentCategory` |  | |  | `fktyp` |  |  |
| `BillgProcDocTxtDetnProcedure` |  | |  | `cast(txtgr as billg_proc_doc_text_detn_head preserving type)` |  |  |
| `BillgProcDocItmTxtDetnProced` |  | |  | `cast(txtgr_p as billg_proc_doc_text_detn_item preserving type)` |  |  |
| `_Text` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillgProcDocTxtDetnProcedure` | | ✓ | | | | |
| `_BillgProcDocItmTxtDetnProced` | | ✓ | | | | |
| `_BillingDocTypeHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingDocumentTypeText` | [0..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [0..1] |
| `_BillgProcDocTxtDetnProcedure` | `I_TextDeterminationProcedure` | [0..1] |
| `_BillgProcDocItmTxtDetnProced` | `I_TextDeterminationProcedure` | [0..1] |
| `_BillingDocTypeHierNode` | `I_BillingDocTypeHierNode` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Document Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCTYPE',
  buffering: {
    status: #ACTIVE,
    type: #FULL
  },
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BillingDocumentType
  as select from tvfk

  association [0..*] to I_BillingDocumentTypeText    as _Text                         on  $projection.BillingDocumentType = _Text.BillingDocumentType
  association [0..1] to I_SDDocumentCategory         as _SDDocumentCategory           on  $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association [0..1] to I_BillingDocumentCategory    as _BillingDocumentCategory      on  $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory
  association [0..1] to I_TextDeterminationProcedure as _BillgProcDocTxtDetnProcedure on  $projection.BillgProcDocTxtDetnProcedure         = _BillgProcDocTxtDetnProcedure.TextDeterminationProcedure
                                                                                      and _BillgProcDocTxtDetnProcedure.TextObjectCategory = 'VBBK'
  association [0..1] to I_TextDeterminationProcedure as _BillgProcDocItmTxtDetnProced on  $projection.BillgProcDocItmTxtDetnProced         = _BillgProcDocItmTxtDetnProced.TextDeterminationProcedure
                                                                                      and _BillgProcDocItmTxtDetnProced.TextObjectCategory = 'VBBP'
  association [0..*] to I_BillingDocTypeHierNode     as _BillingDocTypeHierNode       on  $projection.BillingDocumentType = _BillingDocTypeHierNode.BillingDocumentType
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_BillingDocTypeHierNode'
  key fkart                                                          as BillingDocumentType,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                                                          as SDDocumentCategory,

      incpo                                                          as IncrementItemNumber,

      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      fktyp                                                          as BillingDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillgProcDocTxtDetnProcedure'
      cast(txtgr as billg_proc_doc_text_detn_head preserving type)   as BillgProcDocTxtDetnProcedure,

      @ObjectModel.foreignKey.association: '_BillgProcDocItmTxtDetnProced'
      cast(txtgr_p as billg_proc_doc_text_detn_item preserving type) as BillgProcDocItmTxtDetnProced,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillgProcDocTxtDetnProcedure,
      _BillgProcDocItmTxtDetnProced,
      _BillingDocTypeHierNode
}
```
