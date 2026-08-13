---
name: I_ACCOUNTINGPOSTINGSTATUSTEXT
description: "Accountingpostingstatustext"
semantic_vi: "View Accountingpostingstatustext cung cấp mô tả văn bản cho trạng thái đăng ký kế toán trong các ngôn ngữ khác nhau, có thể được sử dụng để hiển thị thông tin trạng thái trong giao diện người dùng."
keywords:
  - "accounting posting status"
  - "trạng thái đăng ký kế toán"
  - "text view"
  - "view"
  - "status"
  - "language"
  - "description"
  - "mô tả"
  - "sap"
  - "sd-bil-gf-2cl"
  - "sales & distribution"
  - "sales"
semantic_en: "The Accountingpostingstatustext view provides text descriptions for accounting posting statuses in different languages, which can be used to display status information in user interfaces."
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
  - text
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_ACCOUNTINGPOSTINGSTATUSTEXT

**Accountingpostingstatustext**

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
| `AccountingPostingStatus` | ✓ | |  | `cast( statu as buchk preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountingPostingStatusDesc` |  | |  | `bezei` |  |  |
| `_AccountingPostingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingPostingStatus` | `I_AccountingPostingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountingPostingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@EndUserText.label: 'Accounting Posting Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDACCTPOSTGSTST',
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true

define view I_AccountingPostingStatusText
as select from tvbst

association[0..1] to I_AccountingPostingStatus as _AccountingPostingStatus on $projection.AccountingPostingStatus = _AccountingPostingStatus.AccountingPostingStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_AccountingPostingStatus'
    key cast( statu as buchk preserving type ) as AccountingPostingStatus,    
        
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as AccountingPostingStatusDesc,
    
    //Associations
    _AccountingPostingStatus,
    _Language
}
where (tvbst.tbnam = 'VBRK') and (tvbst.fdnam = 'BUCHK');
```
