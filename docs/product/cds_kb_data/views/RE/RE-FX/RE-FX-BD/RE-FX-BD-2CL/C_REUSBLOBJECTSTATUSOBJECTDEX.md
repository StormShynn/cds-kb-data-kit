---
name: C_REUSBLOBJECTSTATUSOBJECTDEX
description: "Reusblobjectstatusobjectdex"
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
  - status
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REUSBLOBJECTSTATUSOBJECTDEX

**Reusblobjectstatusobjectdex**

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
| `RealEstateUsableObjectUUID` | ✓ | |  | `REGenericRentalObjectUUID` |  |  |
| `StatusProfile` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `InternalRealEstateNumber` |  | | `_REUsableObject` | `InternalRealEstateNumber` |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `IsUserStatus` |  | |  |  |  |  |
| `StatusIsInactive` |  | |  |  |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_StatusCode` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usable Obj Status Obj'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLOBJSTATUSOBJDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
//@ObjectModel.representativeKey: 'StatusCode'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjectStatusObjectDEX 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj
  association to I_REUsableObject as _REUsableObject on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
  key StatusProfile,
  key StatusCode,
      _REUsableObject.InternalRealEstateNumber,
      REStatusObject,
      IsUserStatus,
      StatusIsInactive,

      _StatusCode,
      _StatusProfile,
      _REUsableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'U'
```
