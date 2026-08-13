---
name: I_BILLINGDOCUMENTTAXCODETEXT
description: "Billing DocumentUMENTTAXCODETEXT"
semantic_vi: "View I_BILLINGDOCUMENTTAXCODETEXT cung cấp mô tả văn bản cho mã thuế được sử dụng trong các tài liệu hóa đơn, cho phép các nhà phát triển truy cập và sử dụng thông tin này trong các ứng dụng của họ. Nó đặc biệt hữu ích khi làm việc với tài liệu hóa đơn và dữ liệu liên quan đến thuế trong thành phần FI-LOC-LO."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "tax code"
  - "mã thuế"
  - "text description"
  - "mô tả văn bản"
  - "fi-loc-lo"
  - "component"
  - "lob:finance"
  - "bo:billingdocument"
semantic_en: "The I_BILLINGDOCUMENTTAXCODETEXT view provides text descriptions for tax codes used in billing documents, allowing developers to access and utilize this information in their applications. It is particularly useful when working with billing documents and tax-related data in the FI-LOC-LO component."
app_component: FI-LOC-LO
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
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - billing-document
  - billing
  - tax
  - document
  - text
  - component:FI-LOC-LO
  - lob:Finance
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTAXCODETEXT

**Billing DocumentUMENTTAXCODETEXT**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `TaxCalculationProcedure` | ✓ | |  | `kalsm` |  |  |
| `TaxCode` | ✓ | |  | `mwskz` |  |  |
| `BillingDocumentType` | ✓ | |  | `fkart` |  |  |
| `TaxCodeDescription` |  | |  | `reason_text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Legal Tax Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]
define view entity I_BillingDocumentTaxCodeText
  as select from glo_log_reas_txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras       as Language,

  key kalsm       as TaxCalculationProcedure,
  key mwskz       as TaxCode,
  key fkart       as BillingDocumentType,
      @Semantics.text:true
      reason_text as TaxCodeDescription,

      //Associations
      _Language
}
```
