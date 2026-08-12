---
name: I_REUSBLOBJECTTOCONTRACTASSGMT
description: "Reusblobjecttocontractassgmt"
app_component: RE-FX-BD-2CL
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
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - contract
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSBLOBJECTTOCONTRACTASSGMT

**Reusblobjecttocontractassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
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
| `REStatusObjectSource` | ✓ | | `_REObjectAssgmt` | `REStatusObjectTarget` |  |  |
| `REObjectAssignmentType` | ✓ | | `_REObjectAssgmt` | `REObjectAssignmentType` |  |  |
| `CompanyCode` | ✓ | | `_REContract` | `CompanyCode` |  |  |
| `RealEstateContract` | ✓ | | `_REContract` | `RealEstateContract` |  |  |
| `ValidityStartEndDateValue` | ✓ | |  | `cast(concat(_REUsableObject.ValidityStartDate, _REUsableObject.ValidityEndDate ) as recadateperiod preserving type )` |  |  |
| `RealEstateUsableObjectUUID` | ✓ | | `_REUsableObject` | `RealEstateUsableObjectUUID` |  |  |
| `ValidityStartDate` |  | |  | `case when _REObjectAssgmt.ValidityStartDate > _REContract.ContractStartDate then cast( coalesce(_REUsableObject.ValidityStartDate, '00000000') as rebdvdmvalidfrom preserving type ) when _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityStartDate > _REContract.ContractStartDate then _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityStartDate else _REContract.ContractStartDate end` |  |  |
| `REStatusObjectTarget` |  | | `_REObjectAssgmt` | `REStatusObjectSource` |  |  |
| `ValidityEndDate` |  | |  | `case when _REObjectAssgmt.ValidityEndDate < _REContract.ContractEndDate then cast( coalesce(_REUsableObject.ValidityEndDate, '99991231') as rebdvdmvalidto preserving type ) when _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityEndDate < _REContract.ContractEndDate then _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityEndDate else _REContract.ContractEndDate end` |  |  |
| `REOnlyInfoAssgmt` |  | | `_REObjectAssgmt` | `REOnlyInfoAssgmt` |  |  |
| `REStatusObjectSourceIsArchived` |  | | `_REObjectAssgmt` | `REStatusObjectSourceIsArchived` |  |  |
| `REGenerationType` |  | | `_REObjectAssgmt` | `REGenerationType` |  |  |
| `REIsMainAsset` |  | | `_REObjectAssgmt` | `REIsMainAsset` |  |  |
| `REAssignmentHasMultiple` |  | | `_REObjectAssgmt` | `REAssignmentHasMultiple` |  |  |
| `REObjectPossessionStartDate` |  | | `_REObjectAssgmt` | `REObjectPossessionStartDate` |  |  |
| `REObjectPossessionEndDate` |  | | `_REObjectAssgmt` | `REObjectPossessionEndDate` |  |  |
| `_REContract` | | ✓ | | | | |
| `_REUsableObjectData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [1..1] |
| `_REUsableObjectData` | `I_REUsableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Usable Object Contract Assignment'
@Analytics:{
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'IREUOTOCN'
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #NONE,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REUsblObjToContractAssignment'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE

define view entity I_REUsblObjectToContractAssgmt
  as select from I_REObjectAssgmt as _REObjectAssgmt
    inner join   I_REUsableObject as _REUsableObject on _REObjectAssgmt.REStatusObjectTarget = _REUsableObject.REStatusObject
    
  association [1..1] to I_REContract as _REContract on $projection.REStatusObjectTarget = _REContract.REStatusObject
  association [1..1] to I_REUsableObject as _REUsableObjectData on $projection.REStatusObjectSource = _REUsableObjectData.REStatusObject

{
  key _REObjectAssgmt.REStatusObjectTarget                                                                as REStatusObjectSource,
  @ObjectModel.foreignKey.association: '_REObjectAssignmentType'
  key _REObjectAssgmt.REObjectAssignmentType,
  key _REContract.CompanyCode,
  key _REContract.RealEstateContract,
  key cast(concat(_REUsableObject.ValidityStartDate, _REUsableObject.ValidityEndDate ) as recadateperiod preserving type ) as ValidityStartEndDateValue,
  key _REUsableObject.RealEstateUsableObjectUUID,
      @Semantics.businessDate.from: true
      case when _REObjectAssgmt.ValidityStartDate > _REContract.ContractStartDate then cast( coalesce(_REUsableObject.ValidityStartDate, '00000000') as rebdvdmvalidfrom preserving type )
           when _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityStartDate > _REContract.ContractStartDate then _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityStartDate
           else _REContract.ContractStartDate
      end                                                                                                 as ValidityStartDate,
      _REObjectAssgmt.REStatusObjectSource                                                                as REStatusObjectTarget,

      @Semantics.businessDate.to: true
      case when _REObjectAssgmt.ValidityEndDate < _REContract.ContractEndDate then cast( coalesce(_REUsableObject.ValidityEndDate, '99991231') as rebdvdmvalidto preserving type )
           when _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityEndDate < _REContract.ContractEndDate then _REObjectAssgmt._REObjectTypeDetails._REUsableObject.ValidityEndDate
           else _REContract.ContractEndDate
      end                                                                                                 as ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,

      _REObjectAssgmt._REObjectTypeDetails,
      _REObjectAssgmt._REObjectAssignmentType,
      _REObjectAssgmt._REGenerationType,
      _REContract._CompanyCode,
      _REContract,
      _REUsableObjectData

}
where
      _REObjectAssgmt.REStatusObjectTarget like 'J7%'
  and _REObjectAssgmt.REStatusObjectSource like 'IS%'
```
