---
name: I_BILLINGRELEVANCECODETEXT
description: "Billingrelevancecodetext"
semantic_vi: "View I_BILLINGRELEVANCECODETEXT cung cấp mô tả văn bản cho mã liên quan đến hóa đơn, có thể được sử dụng để hiển thị ý nghĩa của các mã này trong các ngôn ngữ khác nhau."
keywords:
  - "billing relevance code"
  - "mã liên quan đến hóa đơn"
  - "text view"
  - "view"
  - "billing"
  - "relevance code"
  - "language"
  - "description"
  - "sdlf"
  - "sd-bf-md-2cl"
  - "sales & distribution"
semantic_en: "The I_BILLINGRELEVANCECODETEXT view provides text descriptions for billing relevance codes, which can be used to display the meaning of these codes in different languages."
app_component: SD-BF-MD-2CL
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
  - SD-BF
  - SD-BF-MD
  - interface-view
  - text-view
  - billing
  - text
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_BILLINGRELEVANCECODETEXT

**Billingrelevancecodetext**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
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
| `BillingRelevanceCode` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BillingRelevanceCodeName` |  | |  | `ddtext` |  |  |
| `_BillingRelevanceCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingRelevanceCode` | `I_BillingRelevanceCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingRelevanceCode'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Relevance Code - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLRELVCODET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingRelevanceCodeText
as select from dd07t

association[0..1] to I_BillingRelevanceCode as _BillingRelevanceCode on $projection.BillingRelevanceCode = _BillingRelevanceCode.BillingRelevanceCode
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

    @ObjectModel.foreignKey.association: '_BillingRelevanceCode'
    key SUBSTRING(domvalue_l, 1, 1) as BillingRelevanceCode,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @Semantics.text: true
    ddtext as BillingRelevanceCodeName,
    
    //Associations
    _BillingRelevanceCode,
    _Language
}
where (dd07t.domname = 'FKREL') and (dd07t.as4local = 'A');
```
