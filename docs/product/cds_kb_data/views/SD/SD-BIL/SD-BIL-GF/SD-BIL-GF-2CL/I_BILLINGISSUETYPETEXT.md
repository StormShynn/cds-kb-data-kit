---
name: I_BILLINGISSUETYPETEXT
description: "Billingissuetypetext"
semantic_vi: "View I_BILLINGISSUETYPETEXT cung cấp mô tả văn bản cho các loại vấn đề hóa đơn trong các ngôn ngữ khác nhau, hữu ích cho việc hiển thị tên loại vấn đề hóa đơn trong các ứng dụng đa ngôn ngữ."
keywords:
  - "billing"
  - "issue"
  - "type"
  - "text"
  - "description"
  - "language"
  - "multilingual"
  - "sap"
  - "sd-bil"
  - "sales & distribution"
semantic_en: "The I_BILLINGISSUETYPETEXT view provides text descriptions for billing issue types in different languages, useful for displaying billing issue type names in multilingual applications."
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
# I_BILLINGISSUETYPETEXT

**Billingissuetypetext**

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
| `BillingIssueType` | ✓ | |  | `cast( domvalue_l as vf_todo )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingIssueTypeName` |  | |  | `ddtext` |  |  |
| `_BillingIssueType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingIssueType` | `I_BillingIssueType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingIssueType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Billing Issue Type - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDBLLGISSUETYPT',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingIssueTypeText
as select from dd07t

association[0..1] to I_BillingIssueType as _BillingIssueType on $projection.BillingIssueType = _BillingIssueType.BillingIssueType
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillingIssueType'
    key cast( domvalue_l as vf_todo ) as BillingIssueType,    
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    ddtext as BillingIssueTypeName,
    
    //Associations
    _BillingIssueType,
    _Language
}
where (dd07t.domname = 'VF_TODO') and (dd07t.as4local = 'A');
```
