---
name: C_REARCHTROBJHIERNDERLTNDEX
description: "Rearchtrobjhiernderltndex"
semantic_vi: "View C_REARCHTROBJHIERNDERLTNDEX cung cấp chỉ mục phân cấp của đối tượng kiến trúc, hiển thị mối quan hệ giữa các đối tượng và các loại đối tượng. Nó được sử dụng để phân tích và di chuyển cấu trúc của đối tượng kiến trúc."
keywords:
  - "architecture object"
  - "đối tượng kiến trúc"
  - "hierarchical index"
  - "chỉ mục phân cấp"
  - "object relationship"
  - "quan hệ đối tượng"
  - "sap cds view"
  - "view cds sap"
  - "re-fx-bd-2cl"
  - "kiến trúc"
  - "object category"
  - "loại đối tượng"
semantic_en: "The C_REARCHTROBJHIERNDERLTNDEX view provides a hierarchical index of architecture objects, exposing relationships between objects and their categories. It is used to analyze and navigate the structure of architecture objects."
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
# C_REARCHTROBJHIERNDERLTNDEX

**Rearchtrobjhiernderltndex**

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
| `REArchitectureObjectRltnUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectOID` |  | |  |  |  |  |
| `REArchitectureObjectParentOID` |  | |  |  |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `REArchitectureObjectNumber` |  | |  |  |  |  |
| `REArchitectureObjectName` |  | |  |  |  |  |
| `REArchitectureObjectType` |  | |  |  |  |  |
| `REArchitectureObjectTypeText` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `REArchitectureObjectCategory` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction for Architect Obj Hierarchy'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectRltnUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjHierNdeRltnDEX     
  as select from I_REArchitectureObjectHNRltn



{
  key REArchitectureObjectRltnUUID,
    REArchitectureObjectOID,
    REArchitectureObjectParentOID,
    REArchitectureObjectUUID,
    REArchitectureObjectNumber,
    REArchitectureObjectName,
    REArchitectureObjectType,
    REArchitectureObjectTypeText,
    REAuthorizationGroup,
    REArchitectureObjectCategory,
    ValidityStartDate,
    ValidityEndDate
   
//    _REArchitectureObject._REArchitectureObjectType,
//    _REArchitectureObject._REAuthorizationGroup,
//    _REArchitectureObject,      
//    _Parent   
}
```
