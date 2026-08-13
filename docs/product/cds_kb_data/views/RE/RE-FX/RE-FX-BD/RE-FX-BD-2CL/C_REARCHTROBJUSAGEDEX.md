---
name: C_REARCHTROBJUSAGEDEX
description: "Rearchtrobjusagedex"
semantic_vi: "View C_REARCHTROBJUSAGEDEX hiển thị một chỉ mục chi tiết về việc sử dụng đối tượng kiến trúc, cung cấp một danh sách toàn diện về các đối tượng và trạng thái của chúng theo các ngày bắt đầu có hiệu lực khác nhau. View này hữu ích cho việc phân tích và quản lý dữ liệu sử dụng đối tượng kiến trúc."
keywords:
  - "architectural object"
  - "kiến trúc"
  - "sử dụng"
  - "đối tượng"
  - "trạng thái"
  - "thời gian có hiệu lực"
  - "công cụ quản lý"
  - "sử dụng đối tượng"
semantic_en: "The C_REARCHTROBJUSAGEDEX view exposes a detailed index of architectural object usages, providing a comprehensive list of objects and their statuses across different validity start dates. This view is useful for analyzing and managing architectural object usage data."
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REARCHTROBJUSAGEDEX

**Rearchtrobjusagedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectType` |  | |  |  |  |  |
| `InternalRealEstateNumber` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `REArchitectureObjectOID` |  | |  |  |  |  |
| `REArchitectureObjectNumber` |  | |  |  |  |  |
| `REArchtrObjectAlternativeID` |  | |  |  |  |  |
| `REArchitectureObjectName` |  | |  |  |  |  |
| `REIdentificationKey` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction for Architecture Object Usage'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800
 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjUsageDEX 
  as select from I_REArchitectureObject

{
  key REArchitectureObjectUUID,
      REArchitectureObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      REArchitectureObjectOID,
      REArchitectureObjectNumber,
      REArchtrObjectAlternativeID,
      REArchitectureObjectName,
      REIdentificationKey,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime

//      _REArchitectureObjectType,
//      _REAuthorizationGroup,
//      _REKeyAssgmt,
//      _StatusObject,
//      _Text
}
```
