---
name: C_REUSBLOBJTORNTBLOBJASSGMTDEX
description: "Reusblobjtorntblobjassgmtdex"
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
# C_REUSBLOBJTORNTBLOBJASSGMTDEX

**Reusblobjtorntblobjassgmtdex**

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
| `REUsblObjToRntblAssgmtUUID` | ✓ | |  |  |  |  |
| `RealEstateRentableObjectUUID` |  | |  |  |  |  |
| `RealEstateUsableObjectUUID` |  | |  |  |  |  |
| `RealEstateRentableObjectNumber` |  | | `_RERentableObject` | `RealEstateRentableObjectNumber` |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `REIsAssignmentFromUsableObj` |  | |  |  |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_RERentableObject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extractor for RE Usbl to Rentable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLTORNTBLASSGMTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REUsblObjToRntblAssgmtUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjToRntblObjAssgmtDEX 
  as select from I_REUsblObjToRntblObjAssgmt as _REUsblObjToRntblObjAssgmt
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REUsblObjToRntblAssgmtUUID,
      RealEstateRentableObjectUUID,
      RealEstateUsableObjectUUID,
      _RERentableObject.RealEstateRentableObjectNumber as RealEstateRentableObjectNumber,

      ValidityEndDate,
      ValidityStartDate,
      REIsAssignmentFromUsableObj,

      _RERentableObject,
      _REUsableObject
}
where
  REIsAssignmentFromUsableObj = 'X'
```
