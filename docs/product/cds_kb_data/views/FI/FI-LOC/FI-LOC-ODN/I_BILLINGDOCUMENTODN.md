---
name: I_BILLINGDOCUMENTODN
description: "Billing DocumentUMENTODN"
semantic_vi: "View I_BILLINGDOCUMENTODN hiển thị thông tin về hóa đơn thanh toán, cụ thể là số chứng từ chính thức và chi tiết liên quan. Nó được sử dụng khi truy cập hoặc chỉnh sửa dữ liệu hóa đơn thanh toán."
keywords:
  - "billing document"
  - "hóa đơn thanh toán"
  - "official document number"
  - "số chứng từ chính thức"
  - "fi-loc-odn"
  - "sap cds view"
  - "finance"
  - "billing"
  - "document"
semantic_en: "The I_BILLINGDOCUMENTODN CDS view exposes billing document information, specifically the official document number and its associated details. It is used when accessing or manipulating billing document data."
app_component: FI-LOC-ODN
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
  - FI-LOC-ODN
  - interface-view
  - billing-document
  - billing
  - document
  - component:FI-LOC-ODN
  - lob:Finance
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTODN

**Billing DocumentUMENTODN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-ODN` |
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
| `AFDFUniqueKeyUUID` | ✓ | |  |  |  |  |
| `BillingDocument` | ✓ | |  | `cast( AFDFDocumentKey1 as vbeln_vf )` |  |  |
| `OfficialDocumentNumberCountry` |  | |  |  |  |  |
| `OfficialDocumentNumberType` |  | |  |  |  |  |
| `OfficialDocumentNumber` |  | |  |  |  |  |
| `ODNLegalDateTimeText` |  | |  |  |  |  |
| `OfficialDocumentNumberIntType` |  | |  |  |  |  |
| `OfficialDocumentNumberTypeText` |  | |  |  |  |  |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ODN in Billing Document'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
    }
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #SQL_DATA_SOURCE ]

define view entity I_BillingDocumentODN
  as select from I_AdditionalFiscalDataODN
  association [0..*] to I_Country as _Country on $projection.OfficialDocumentNumberCountry = _Country.Country
{
  key AFDFUniqueKeyUUID,
  key cast( AFDFDocumentKey1 as vbeln_vf ) as BillingDocument,
      @ObjectModel.foreignKey.association: '_Country'
      OfficialDocumentNumberCountry,
      @ObjectModel.text.element: ['OfficialDocumentNumberTypeText']
      OfficialDocumentNumberType,
      OfficialDocumentNumber,
      ODNLegalDateTimeText,
      OfficialDocumentNumberIntType,
      @Semantics.text: true
      OfficialDocumentNumberTypeText,
      _Country
}
where
  AFDFDocumentType = 'BDH'
```
