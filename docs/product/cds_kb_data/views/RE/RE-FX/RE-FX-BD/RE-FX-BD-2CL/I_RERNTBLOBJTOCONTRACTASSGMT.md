---
name: I_RERNTBLOBJTOCONTRACTASSGMT
description: "Rerntblobjtocontractassgmt"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - contract
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_RERNTBLOBJTOCONTRACTASSGMT

**Rerntblobjtocontractassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REStatusObjectSource` | ✓ | | `_REObjectAssgmt` | `REStatusObjectTarget` |  |  |
| `REObjectAssignmentType` | ✓ | | `_REObjectAssgmt` | `REObjectAssignmentType` |  |  |
| `CompanyCode` | ✓ | | `_RealEstateContract` | `CompanyCode` |  |  |
| `RealEstateContract` | ✓ | | `_RealEstateContract` | `RealEstateContract` |  |  |
| `ValidityStartEndDateValue` | ✓ | |  | `cast(concat(_REObjectAssgmt.ValidityStartDate, _REObjectAssgmt.ValidityEndDate ) as recadateperiod preserving type )` |  |  |
| `RealEstateRentableObjectUUID` | ✓ | | `_RERentableObject` | `RealEstateRentableObjectUUID` |  |  |
| `ValidityStartDate` |  | |  | `case when _REObjectAssgmt.ValidityStartDate > _RealEstateContract.ContractStartDate then cast( coalesce(_REObjectAssgmt.ValidityStartDate, '00000000') as rebdvdmvalidfrom preserving type ) when _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityStartDate > _RealEstateContract.ContractStartDate then _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityStartDate else _RealEstateContract.ContractStartDate end` |  |  |
| `REStatusObjectTarget` |  | | `_REObjectAssgmt` | `REStatusObjectSource` |  |  |
| `ValidityEndDate` |  | |  | `case when _REObjectAssgmt.ValidityEndDate < _RealEstateContract.ContractEndDate then cast( coalesce(_REObjectAssgmt.ValidityEndDate, '99991231') as rebdvdmvalidto preserving type ) when _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityEndDate < _RealEstateContract.ContractEndDate then _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityEndDate else _RealEstateContract.ContractEndDate end` |  |  |
| `REOnlyInfoAssgmt` |  | | `_REObjectAssgmt` | `REOnlyInfoAssgmt` |  |  |
| `REStatusObjectSourceIsArchived` |  | | `_REObjectAssgmt` | `REStatusObjectSourceIsArchived` |  |  |
| `REGenerationType` |  | | `_REObjectAssgmt` | `REGenerationType` |  |  |
| `REIsMainAsset` |  | | `_REObjectAssgmt` | `REIsMainAsset` |  |  |
| `REAssignmentHasMultiple` |  | | `_REObjectAssgmt` | `REAssignmentHasMultiple` |  |  |
| `REObjectPossessionStartDate` |  | | `_REObjectAssgmt` | `REObjectPossessionStartDate` |  |  |
| `REObjectPossessionEndDate` |  | | `_REObjectAssgmt` | `REObjectPossessionEndDate` |  |  |
| `InternalRealEstateNumber` |  | | `_RealEstateContract` | `InternalRealEstateNumber` |  |  |
| `_RERentableObjectData` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObjectData` | `I_RERentableObject` | [1..1] |
| `_REContract` | `I_REContract` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: {
              //dataCategory: #DIMENSION,
              dataExtraction.enabled: true
              //technicalName: 'IREROTOCN'
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #D,
                        sizeCategory: #L
            },
//            representativeKey: 'REStatusObjectSource',
            sapObjectNodeType.name: 'RERntblObjToContractAssignment',
            supportedCapabilities: [
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #NONE
}

@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'RE Rentable Object Contract Assignment'
define view entity I_RERntblObjToContractAssgmt
  as select from I_REObjectAssgmt   as _REObjectAssgmt
    inner join   I_RERentableObject as _RERentableObject on _REObjectAssgmt.REStatusObjectTarget = _RERentableObject.REStatusObject
    inner join   I_REContract       as _RealEstateContract on _REObjectAssgmt.REStatusObjectSource = _RealEstateContract.REStatusObject

  association [1..1] to I_RERentableObject as _RERentableObjectData on $projection.RealEstateRentableObjectUUID = _RERentableObjectData.RealEstateRentableObjectUUID
  association [1..1] to I_REContract as _REContract on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber

{
  key _REObjectAssgmt.REStatusObjectTarget                                                                as REStatusObjectSource,
      @ObjectModel.foreignKey.association: '_REObjectAssignmentType'
  key _REObjectAssgmt.REObjectAssignmentType,
  key _RealEstateContract.CompanyCode,
  key _RealEstateContract.RealEstateContract,


  key cast(concat(_REObjectAssgmt.ValidityStartDate, _REObjectAssgmt.ValidityEndDate ) as recadateperiod preserving type ) as ValidityStartEndDateValue,

      @ObjectModel.foreignKey.association: '_RERentableObjectData'
  key _RERentableObject.RealEstateRentableObjectUUID,
      @Semantics.businessDate.from: true
      case when _REObjectAssgmt.ValidityStartDate > _RealEstateContract.ContractStartDate then cast( coalesce(_REObjectAssgmt.ValidityStartDate, '00000000') as rebdvdmvalidfrom preserving type )
           when _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityStartDate > _RealEstateContract.ContractStartDate then _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityStartDate
           else _RealEstateContract.ContractStartDate
      end                                                                                                 as ValidityStartDate,
      _REObjectAssgmt.REStatusObjectSource                                                                as REStatusObjectTarget,

      @Semantics.businessDate.to: true
      case when _REObjectAssgmt.ValidityEndDate < _RealEstateContract.ContractEndDate then cast( coalesce(_REObjectAssgmt.ValidityEndDate, '99991231') as rebdvdmvalidto preserving type )
           when _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityEndDate < _RealEstateContract.ContractEndDate then _REObjectAssgmt._REObjectTypeDetails._RERentableObject.ValidityEndDate
           else _RealEstateContract.ContractEndDate
      end                                                                                                 as ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      @ObjectModel.foreignKey.association: '_REGenerationType'
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,

      _REObjectAssgmt._REObjectTypeDetails,
      _REObjectAssgmt._REObjectAssignmentType,
      _REObjectAssgmt._REGenerationType,
      _RealEstateContract._CompanyCode,
      _RealEstateContract.InternalRealEstateNumber,

      _REContract,
      _RERentableObjectData
      //_RealEstateContract

}
where
      _REObjectAssgmt.REStatusObjectTarget like 'J7%'
  and _REObjectAssgmt.REStatusObjectSource like 'IS%'
```
