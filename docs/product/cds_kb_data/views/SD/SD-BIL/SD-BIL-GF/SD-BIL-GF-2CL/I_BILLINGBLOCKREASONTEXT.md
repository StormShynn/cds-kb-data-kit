---
name: I_BILLINGBLOCKREASONTEXT
description: "Billingblockreasontext"
semantic_vi: "View I_BILLINGBLOCKREASONTEXT cung cấp mô tả lý do chặn hóa đơn trong nhiều ngôn ngữ, có thể được sử dụng để hiển thị lý do chặn hóa đơn."
keywords:
  - "billing"
  - "block"
  - "reason"
  - "description"
  - "language"
  - "sap"
  - "sd"
  - "sales"
  - "distribution"
  - "billingblockreasontext"
  - "i_billingblockreasontext"
semantic_en: "The I_BILLINGBLOCKREASONTEXT view provides billing block reason descriptions in multiple languages, which can be used to display the reason for blocking a billing document."
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
# I_BILLINGBLOCKREASONTEXT

**Billingblockreasontext**

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
| `BillingBlockReason` | ✓ | |  | `faksp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillingBlockReasonDescription` |  | |  | `vtext` |  |  |
| `_BillingBlockReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingBlockReason'
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
@Search.searchable: true
@EndUserText.label: 'Billing Block Reason - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLGBLKRSNT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true 

define view I_BillingBlockReasonText
as
select from tvfst
association [0..1] to I_BillingBlockReason as _BillingBlockReason on $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_BillingBlockReason'
    key faksp as BillingBlockReason,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text
    vtext as BillingBlockReasonDescription,
    
    _BillingBlockReason,
    _Language
};
```
