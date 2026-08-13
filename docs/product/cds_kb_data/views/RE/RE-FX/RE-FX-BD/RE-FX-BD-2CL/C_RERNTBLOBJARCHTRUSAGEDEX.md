---
name: C_RERNTBLOBJARCHTRUSAGEDEX
description: "Rerntblobjarchtrusagedex"
semantic_vi: "View Rerntblobjarchtrusagedex cung cấp dữ liệu về việc sử dụng đối tượng kiến trúc bất động sản, bao gồm đo lường và ngày hiệu lực, có thể được sử dụng để phân tích và báo cáo về việc sử dụng các đối tượng này theo thời gian."
keywords:
  - "real estate"
  - "architecture object"
  - "usage"
  - "measurements"
  - "validity dates"
  - "data analysis"
  - "reporting"
  - "sap cds view"
  - "rerntblobjarchtrusagedex"
  - "kiến trúc bất động sản"
  - "sử dụng"
  - "đo lường"
semantic_en: "The Rerntblobjarchtrusagedex view provides data on real estate architecture object usage, including measurements and validity dates, which can be used to analyze and report on the usage of these objects over time."
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
# C_RERNTBLOBJARCHTRUSAGEDEX

**Rerntblobjarchtrusagedex**

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
| `REArchitectureObjectUsageUUID` | ✓ | |  |  |  |  |
| `REArchitectureObjectUUID` |  | |  |  |  |  |
| `RealEstateRentableObjectUUID` |  | |  | `REGenericRentalObjectUUID` |  |  |
| `REArchitectureObjectType` |  | | `_REArchitectureObject` | `REArchitectureObjectType` |  |  |
| `REArchitectureObjectNumber` |  | | `_REArchitectureObject` | `REArchitectureObjectNumber` |  |  |
| `REArchitectureObjectOID` |  | | `_REArchitectureObject` | `REArchitectureObjectOID` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REArchtrObjUsageIsMsmtBased` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_REArchitectureObject` | | ✓ | | | | |
| `_REGenericRentalObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `R_RERentableObjectTP` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rntbl Obj Archtr Usge'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUsageUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjArchtrUsageDEX 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
  
  association        to R_RERentableObjectTP as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
  key REArchitectureObjectUsageUUID,
      REArchitectureObjectUUID,
      REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
      _REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
      REArchtrObjUsageIsMsmtBased,

      _REArchitectureObject,
      _REGenericRentalObject,
      _RERentableObject
    
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'R'
```
