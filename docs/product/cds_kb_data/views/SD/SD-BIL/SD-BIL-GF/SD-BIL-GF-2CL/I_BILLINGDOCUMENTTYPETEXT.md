---
name: I_BILLINGDOCUMENTTYPETEXT
description: "Billing DocumentUMENTTYPETEXT"
semantic_vi: "View I_BILLINGDOCUMENTTYPETEXT hiển thị tên loại hóa đơn theo ngôn ngữ khác nhau, hữu ích khi hiển thị hoặc xử lý hóa đơn có loại cụ thể."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "billing document type"
  - "loại hóa đơn"
  - "language"
  - "ngôn ngữ"
  - "sap"
  - "sd-bil"
  - "sd-bil-gf"
  - "sales & distribution"
  - "lob: sales & distribution"
  - "bo: billing document"
semantic_en: "The I_BILLINGDOCUMENTTYPETEXT view exposes billing document type names in different languages, useful when displaying or processing billing documents with specific types."
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
  - text-view
  - billing-document
  - billing
  - document
  - text
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPETEXT

**Billing DocumentUMENTTYPETEXT**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `BillingDocumentTypeName` |  | |  | `vtext` |  |  |
| `_BillingDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingDocumentType'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE, 
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Document Type - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCTYPET',
  buffering: {
    status: #ACTIVE,
    type: #FULL
  },
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_BillingDocumentTypeText
as
select from tvfkt
association [0..1] to I_BillingDocumentType as _BillingDocumentType on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillingDocumentType'
    key fkart as BillingDocumentType,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Semantics.text
    vtext as BillingDocumentTypeName,
    
    _BillingDocumentType,
    _Language
};
```
