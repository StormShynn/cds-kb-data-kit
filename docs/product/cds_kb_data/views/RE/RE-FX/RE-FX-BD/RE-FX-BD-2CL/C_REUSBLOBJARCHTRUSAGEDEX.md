---
name: C_REUSBLOBJARCHTRUSAGEDEX
description: "Reusblobjarchtrusagedex"
semantic_vi: "CDS view Reusblobjarchtrusagedex cung cấp dữ liệu về việc sử dụng kiến trúc đối tượng tái sử dụng, bao gồm loại đối tượng, số đối tượng và UUID sử dụng, có thể được sử dụng để phân tích và quản lý kiến trúc đối tượng tái sử dụng trong các dự án bất động sản."
keywords:
  - "reusable object architecture"
  - "kiến trúc đối tượng tái sử dụng"
  - "real estate project"
  - "dự án bất động sản"
  - "sap cds view"
  - "view"
  - "reusable object"
  - "object architecture"
  - "architecture usage"
  - "sử dụng kiến trúc"
  - "re-fx-bd-2cl"
  - "consumption view"
semantic_en: "The Reusblobjarchtrusagedex CDS view provides data on reusable object architecture usage, including object types, numbers, and usage UUIDs, which can be used to analyze and manage reusable object architecture in real estate projects."
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
# C_REUSBLOBJARCHTRUSAGEDEX

**Reusblobjarchtrusagedex**

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
| `RealEstateUsableObjectUUID` |  | |  | `REGenericRentalObjectUUID` |  |  |
| `REArchitectureObjectType` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectType` |  |  |
| `REArchitectureObjectNumber` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectNumber` |  |  |
| `REArchitectureObjectOID` |  | | `_REArchitectureObjectUsage._REArchitectureObject` | `REArchitectureObjectOID` |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_REGenericRentalObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usbl Obj Archtr Usage'
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



define view entity C_REUsblObjArchtrUsageDEX 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID

{
  key REArchitectureObjectUsageUUID,
      REArchitectureObjectUUID,
      REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
    
      _REArchitectureObjectUsage._REArchitectureObject,
      _REGenericRentalObject,
      _REUsableObject
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'U'
```
