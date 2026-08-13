---
name: I_BILLINGPLANRULETEXT
description: "Billingplanruletext"
semantic_vi: "View Billingplanruletext cung cấp mô tả văn bản cho các quy tắc kế toán hóa đơn trong các ngôn ngữ khác nhau, cho phép các nhà phát triển truy cập và sử dụng các mô tả này trong các ứng dụng của họ. Nó được sử dụng khi hiển thị hoặc xử lý các quy tắc kế toán hóa đơn với văn bản địa hóa."
keywords:
  - "billing plan"
  - "quy tắc kế toán hóa đơn"
  - "text view"
  - "view"
  - "billing plan rule"
  - "quy tắc kế toán"
  - "language"
  - "ngôn ngữ"
  - "sap"
  - "sd-bil"
  - "sd-bil-iv"
  - "sales & distribution"
semantic_en: "The Billingplanruletext view provides text descriptions for billing plan rules in different languages, enabling developers to access and utilize these descriptions in their applications. It is used when displaying or processing billing plan rules with localized text."
app_component: SD-BIL-IV-BP-2CL
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
  - SD-BIL-IV
  - interface-view
  - text-view
  - billing
  - text
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_BILLINGPLANRULETEXT

**Billingplanruletext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
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
| `BillingPlanRule` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingPlanRuleName` |  | |  | `ddtext` |  |  |
| `_BillingPlanRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingPlanRule` | `I_BillingPlanRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingPlanRule'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Billing Plan Rule - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLPLANRULET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingPlanRuleText
as select from dd07t

association[0..1] to I_BillingPlanRule as _BillingPlanRule on $projection.BillingPlanRule = _BillingPlanRule.BillingPlanRule
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanBillingRule'
    @ObjectModel.foreignKey.association: '_BillingPlanRule'
    key SUBSTRING(domvalue_l, 1, 1) as BillingPlanRule,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as BillingPlanRuleName,
    
    //Associations
    _BillingPlanRule,
    _Language
}
where (dd07t.domname = 'FAREG') and (dd07t.as4local = 'A');
```
