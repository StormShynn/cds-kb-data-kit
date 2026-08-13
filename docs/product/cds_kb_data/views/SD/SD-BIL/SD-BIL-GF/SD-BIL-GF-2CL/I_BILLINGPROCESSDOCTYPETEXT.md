---
name: I_BILLINGPROCESSDOCTYPETEXT
description: "Billingprocessdoctypetext"
semantic_vi: "View I_BILLINGPROCESSDOCTYPETEXT cung cấp mô tả văn bản cho loại tài liệu quy trình hóa đơn, có thể được sử dụng để hiển thị thông tin chi tiết về quy trình hóa đơn trong thành phần Sales và Distribution."
keywords:
  - "billing process"
  - "document type"
  - "text description"
  - "sales and distribution"
  - "sabill"
  - "sabillgf"
  - "sabillgf2cl"
  - "lobservation"
  - "lob sales & distribution"
  - "document type text"
  - "billing process document type"
  - "document type name"
semantic_en: "The I_BILLINGPROCESSDOCTYPETEXT view provides text descriptions for billing process document types, which can be used to display detailed information about billing processes in the Sales and Distribution component."
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
  - billing
  - text
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPROCESSDOCTYPETEXT

**Billingprocessdoctypetext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `BillingProcessDocumentTypeName` |  | |  | `cast( vtext as billingprocessdocumenttypename preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_BillingProcessDocumentType` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Billing Process Document Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'BillingProcessDocumentType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_BillingProcessDocTypeText
  as select from tvfkt

  association to parent I_BillingProcessDocumentType as _BillingProcessDocumentType on $projection.BillingProcessDocumentType = _BillingProcessDocumentType.BillingProcessDocumentType
  association to exact one I_Language                as _Language                   on $projection.Language = _Language.Language

{

      @ObjectModel.foreignKey.association: '_BillingProcessDocumentType'
      @ObjectModel.text.element: ['BillingProcessDocumentTypeName']
  key cast( fkart as billingprocessdocumenttype preserving type )     as BillingProcessDocumentType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                                           as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( vtext as billingprocessdocumenttypename preserving type ) as BillingProcessDocumentTypeName,

      _Language,
      _BillingProcessDocumentType
}
```
