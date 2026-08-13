---
name: I_BILLINGDOCUMENTCATEGORYTEXT
description: "Billing DocumentUMENTCATEGORYTEXT"
semantic_vi: "View I_BILLINGDOCUMENTCATEGORYTEXT cung cấp mô tả văn bản cho các loại hóa đơn, có thể được sử dụng để hiển thị tên loại hóa đơn trong các ngôn ngữ khác nhau."
keywords:
  - "billing document"
  - "đơn hóa đơn"
  - "category"
  - "loại hóa đơn"
  - "text view"
  - "view"
  - "sds-bil-gf-2cl"
  - "sales & distribution"
  - "billing document category"
  - "sds-bil"
  - "sds-bil-gf"
semantic_en: "The I_BILLINGDOCUMENTCATEGORYTEXT view provides text descriptions for billing document categories, which can be used to display category names in different languages."
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
# I_BILLINGDOCUMENTCATEGORYTEXT

**Billing DocumentUMENTCATEGORYTEXT**

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
| `BillingDocumentCategory` | ✓ | |  | `cast( domvalue_l as fktyp )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BillingDocumentCategoryName` |  | |  | `cast( ddtext as billingdocumentcategoryname preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingDocumentCategory'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Document Category - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCCATT',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocumentCategoryText
  as select from dd07t

  association [1..1] to I_BillingDocumentCategory as _BillingDocumentCategory on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      @ObjectModel.text.element: ['BillingDocumentCategoryName']
  key cast( domvalue_l as fktyp )                                   as BillingDocumentCategory,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as billingdocumentcategoryname preserving type ) as BillingDocumentCategoryName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                                    as DomainValue,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _BillingDocumentCategory,
      _Language
}
where
      dd07t.domname  = 'FKTYP'
  and dd07t.as4local = 'A'
```
