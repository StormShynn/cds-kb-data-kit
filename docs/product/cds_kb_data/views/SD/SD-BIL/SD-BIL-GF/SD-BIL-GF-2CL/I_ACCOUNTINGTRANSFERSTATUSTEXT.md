---
name: I_ACCOUNTINGTRANSFERSTATUSTEXT
description: "Accountingtransferstatustext"
semantic_vi: "View Accountingtransferstatustext cung cấp mô tả văn bản cho trạng thái chuyển đổi kế toán trong các ngôn ngữ khác nhau. Nó được sử dụng để hiển thị thông tin trạng thái trong ứng dụng Sales và Distribution."
keywords:
  - "accounting transfer status"
  - "trạng thái chuyển đổi kế toán"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap"
  - "sd-bil-gf-2cl"
  - "language"
  - "ngôn ngữ"
  - "status"
  - "trạng thái"
semantic_en: "The Accountingtransferstatustext view provides text descriptions for accounting transfer statuses in different languages. It is used to display status information in the Sales and Distribution application."
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
# I_ACCOUNTINGTRANSFERSTATUSTEXT

**Accountingtransferstatustext**

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
| `AccountingTransferStatus` | ✓ | |  | `substring(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `AccountingTransferStatusDesc` |  | |  | `ddtext` |  |  |
| `_AccountingTransferStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingTransferStatus` | `I_AccountingTransferStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountingTransferStatus'
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
@EndUserText.label: 'Accounting Transfer Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDACCTTRNSFSTST',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AccountingTransferStatusText
as select from dd07t

association[0..1] to I_AccountingTransferStatus as _AccountingTransferStatus on $projection.AccountingTransferStatus = _AccountingTransferStatus.AccountingTransferStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_AccountingTransferStatus'
    key substring(domvalue_l, 1, 1) as AccountingTransferStatus,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    ddtext as AccountingTransferStatusDesc,
    
    //Associations
    _AccountingTransferStatus,
    _Language
}
where (dd07t.domname = 'RFBSK') and (dd07t.as4local = 'A');
```
