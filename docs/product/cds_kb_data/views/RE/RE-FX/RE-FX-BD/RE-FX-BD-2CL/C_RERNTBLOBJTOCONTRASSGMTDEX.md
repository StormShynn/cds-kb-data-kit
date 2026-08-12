---
name: C_RERNTBLOBJTOCONTRASSGMTDEX
description: "Rerntblobjtocontrassgmtdex"
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
# C_RERNTBLOBJTOCONTRASSGMTDEX

**Rerntblobjtocontrassgmtdex**

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
| `RealEstateRentableObjectUUID` | ✓ | |  |  |  |  |
| `REObjectAssignmentType` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `RealEstateContract` | ✓ | |  |  |  |  |
| `ValidityStartEndDateValue` | ✓ | |  |  |  |  |
| `REStatusObjectSource` |  | |  |  |  |  |
| `REStatusObjectTarget` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  | `cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom )` |  |  |
| `ValidityEndDate` |  | |  | `cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto )` |  |  |
| `REOnlyInfoAssgmt` |  | |  |  |  |  |
| `REStatusObjectSourceIsArchived` |  | |  |  |  |  |
| `REObjectPossessionStartDate` |  | |  |  |  |  |
| `REObjectPossessionEndDate` |  | |  |  |  |  |
| `_RERentableObject` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_REObjectAssignmentType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | [0..1] |
| `_REContract` | `I_REContract` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rntbl Obj Contr Assgmt'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjToContrAssgmtDEX 
  as select from I_RERntblObjToContractAssgmt as _REContractAssgmt
  association        to I_RERentableObject as _RERentableObject on  $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
  association [1..1] to I_REContract                as _REContract       on  $projection.CompanyCode        = _REContract.CompanyCode
                                                                         and $projection.RealEstateContract = _REContract.RealEstateContract

{
  key RealEstateRentableObjectUUID,
  key REObjectAssignmentType,
  key CompanyCode,
  key RealEstateContract,
  key ValidityStartEndDateValue,
      REStatusObjectSource,
      REStatusObjectTarget,
      cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom ) as ValidityStartDate,
      cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto )     as ValidityEndDate,
      REOnlyInfoAssgmt,
      REStatusObjectSourceIsArchived,
      REObjectPossessionStartDate,
      REObjectPossessionEndDate,

      _REObjectAssignmentType,
      _RERentableObject,
      _REContract,
      _CompanyCode


    
}
```
