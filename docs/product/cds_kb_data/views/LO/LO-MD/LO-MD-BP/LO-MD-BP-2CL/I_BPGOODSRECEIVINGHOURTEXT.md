---
name: I_BPGOODSRECEIVINGHOURTEXT
description: "Bpgoodsreceivinghourtext"
semantic_vi: "View BPGoodsReceivingHoursText cung cấp mô tả văn bản cho mã giờ nhận hàng hóa, cho phép các nhà phát triển truy cập và hiển thị thông tin này trong các ứng dụng của họ. Nó hữu ích khi tạo các giao diện người dùng cần hiển thị văn bản giờ nhận hàng hóa trong nhiều ngôn ngữ."
keywords:
  - "goods receiving hours"
  - "bpgoodsreceivinghourstext"
  - "sap cds view"
  - "lo-md-bp-2cl"
  - "logistics general"
  - "language"
  - "text description"
  - "goods receiving hours code"
  - "ngôn ngữ"
  - "mô tả văn bản"
  - "giờ nhận hàng hóa"
semantic_en: "The BPGoodsReceivingHoursText view provides text descriptions for goods receiving hours codes, allowing developers to access and display this information in their applications. It is useful when creating user interfaces that require displaying goods receiving hours text in multiple languages."
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - text-view
  - text
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_BPGOODSRECEIVINGHOURTEXT

**Bpgoodsreceivinghourtext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `BPGoodsReceivingHoursCode` | ✓ | |  | `wanid` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BPGoodsReceivingHoursText` |  | |  | `vtext` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGDSRHRTXT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  representativeKey: 'BPGoodsReceivingHoursCode',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
}
@Analytics.dataExtraction.enabled: true 
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@EndUserText.label: 'BPGoodsReceivingHour - Text'
define view I_BPGoodsReceivingHourText as select from tvwat
{
      key tvwat.wanid as BPGoodsReceivingHoursCode,
      @Semantics.language: true
      key tvwat.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Goods Receiving Hours Description'
      tvwat.vtext as BPGoodsReceivingHoursText
}
```
