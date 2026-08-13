---
name: I_BILLINGPROCESSDOCUMENTTYPE
description: "Billingprocessdocumenttype"
semantic_vi: "View I_BILLINGPROCESSDOCUMENTTYPE hiển thị các loại tài liệu quy trình hóa đơn và các loại liên quan, được sử dụng để xác định và phân loại tài liệu hóa đơn trong mô-đun Bán hàng và Phân phối."
keywords:
  - "billing process"
  - "document type"
  - "sddocumentcategory"
  - "sales and distribution"
  - "lob sales & distribution"
  - "sd-bil-gf-2cl"
  - "component sd-bil-gf-2cl"
  - "billing document category"
  - "billgprocdoctype"
  - "billgprocdoctype txt detn procedure"
  - "billgprocdoctype item txt detn procedure"
semantic_en: "The I_BILLINGPROCESSDOCUMENTTYPE CDS view exposes billing process document types and related categories, used to identify and categorize billing documents in the Sales and Distribution module."
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
  - billing
  - document
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPROCESSDOCUMENTTYPE

**Billingprocessdocumenttype**

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
| `BillingProcessDocumentType` | ✓ | |  | `cast( fkart as billingprocessdocumenttype preserving type )` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `IncrementItemNumber` |  | |  | `incpo` |  |  |
| `BillingDocumentCategory` |  | |  | `fktyp` |  |  |
| `BillgProcDocTxtDetnProcedure` |  | |  | `cast( txtgr as billg_proc_doc_text_detn_head preserving type )` |  |  |
| `BillgProcDocItmTxtDetnProced` |  | |  | `cast( txtgr_p as billg_proc_doc_text_detn_item preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillgProcDocTxtDetnProcedure` | | ✓ | | | | |
| `_BillgProcDocItmTxtDetnProced` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Billing Process Document Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingProcessDocumentType'
@ObjectModel.sapObjectNodeType.name: 'BillingProcessDocumentType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_BillingProcessDocumentType
  as select from tvfk

  composition of exact one to many I_BillingProcessDocTypeText  as _Text
  association              to exact one I_SDDocumentCategory    as _SDDocumentCategory           on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory
  association              to one I_BillingDocumentCategory     as _BillingDocumentCategory      on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory
  association              to one I_SDDocumentTextDetnProcedure as _BillgProcDocTxtDetnProcedure on $projection.BillgProcDocTxtDetnProcedure = _BillgProcDocTxtDetnProcedure.TextDeterminationProcedure
  association              to one I_SDDocItemTextDetnProcedure  as _BillgProcDocItmTxtDetnProced on $projection.BillgProcDocItmTxtDetnProced = _BillgProcDocItmTxtDetnProced.TextDeterminationProcedure

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast( fkart as billingprocessdocumenttype preserving type )      as BillingProcessDocumentType,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                                                            as SDDocumentCategory,
      incpo                                                            as IncrementItemNumber,
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      fktyp                                                            as BillingDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillgProcDocTxtDetnProcedure'
      cast( txtgr as billg_proc_doc_text_detn_head preserving type )   as BillgProcDocTxtDetnProcedure,
      @ObjectModel.foreignKey.association: '_BillgProcDocItmTxtDetnProced'
      cast( txtgr_p as billg_proc_doc_text_detn_item preserving type ) as BillgProcDocItmTxtDetnProced,

      _Text,
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillgProcDocTxtDetnProcedure,
      _BillgProcDocItmTxtDetnProced
}
```
