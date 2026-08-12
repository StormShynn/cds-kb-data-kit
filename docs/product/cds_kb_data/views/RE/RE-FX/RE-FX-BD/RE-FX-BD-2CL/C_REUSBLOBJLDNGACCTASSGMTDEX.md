---
name: C_REUSBLOBJLDNGACCTASSGMTDEX
description: "Reusblobjldngacctassgmtdex"
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
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REUSBLOBJLDNGACCTASSGMTDEX

**Reusblobjldngacctassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateUsableObjectUUID` | ✓ | | `_REUsableObjectData` | `RealEstateUsableObjectUUID` |  |  |
| `REStatusObjectSource` | ✓ | | `_REObjectAssgmt` | `REStatusObjectSource` |  |  |
| `REObjectAssignmentType` | ✓ | | `_REObjectAssgmt` | `REObjectAssignmentType` |  |  |
| `REStatusObjectTarget` | ✓ | | `_REObjectAssgmt` | `REStatusObjectTarget` |  |  |
| `ValidityStartDate` | ✓ | | `_REObjectAssgmt` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_REObjectAssgmt` | `ValidityEndDate` |  |  |
| `REOnlyInfoAssgmt` |  | | `_REObjectAssgmt` | `REOnlyInfoAssgmt` |  |  |
| `REStatusObjectSourceIsArchived` |  | | `_REObjectAssgmt` | `REStatusObjectSourceIsArchived` |  |  |
| `REGenerationType` |  | | `_REObjectAssgmt` | `REGenerationType` |  |  |
| `REIsMainAsset` |  | | `_REObjectAssgmt` | `REIsMainAsset` |  |  |
| `REAssignmentHasMultiple` |  | | `_REObjectAssgmt` | `REAssignmentHasMultiple` |  |  |
| `REObjectPossessionStartDate` |  | | `_REObjectAssgmt` | `REObjectPossessionStartDate` |  |  |
| `REObjectPossessionEndDate` |  | | `_REObjectAssgmt` | `REObjectPossessionEndDate` |  |  |
| `REIsLeadingObject` |  | | `_REObjectAssgmt` | `REIsLeadingObject` |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_REObjectTypeTarget` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [0..1] |
| `_REObjectTypeTarget` | `I_REObjectType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor RE Usbl Obj Ldng Acct Assign'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true
//@ObjectModel.representativeKey: 'RealEstateUsableObjectUUID'
//@ObjectModel.semanticKey: [ 'REStatusObjectSource','REObjectAssignmentType','REStatusObjectTarget','ValidityStartDate' ]
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjLdngAcctAssgmtDEX 
  as select from I_REObjectAssgmt as _REObjectAssgmt
    inner join   I_REUsableObject as _REUsableObjectData on  _REObjectAssgmt.REStatusObjectSource   = _REUsableObjectData.REStatusObject
                                                         and _REObjectAssgmt.REObjectAssignmentType = 'IO'
  association        to I_REUsableObject          as _REUsableObject     on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_REObjectType            as _REObjectTypeTarget on $projection.REStatusObjectTarget = _REObjectTypeTarget.RealEstateObjectType
{
  key _REUsableObjectData.RealEstateUsableObjectUUID                                              as RealEstateUsableObjectUUID,
  key _REObjectAssgmt.REStatusObjectSource,
  key _REObjectAssgmt.REObjectAssignmentType,
  key _REObjectAssgmt.REStatusObjectTarget,
  key _REObjectAssgmt.ValidityStartDate                           as ValidityStartDate,
      _REObjectAssgmt.ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,
      _REObjectAssgmt.REIsLeadingObject,
      
      _REObjectAssgmt._CostCenter,
      _REObjectAssgmt._FixedAsset,
      _REObjectAssgmt._InternalOrder,
      _REObjectAssgmt._REContractSubject,
      _REObjectAssgmt._REGenerationType,
      //      _REObjectAssgmt._REObjectAssignmentType,
      _REObjectAssgmt._REObjectGroup,
      _REObjectAssgmt._REObjectTypeDetails,
      _REObjectAssgmt._TechnicalObject,
      _REObjectAssgmt._WBSElement,

      _REUsableObject,
      _REObjectTypeTarget

}
where
  (
       _REObjectAssgmt.REStatusObjectTarget like 'KS%'
    or _REObjectAssgmt.REStatusObjectTarget like 'OR%'
    or _REObjectAssgmt.REStatusObjectTarget like 'PR%'
  )
  and  _REObjectAssgmt.REIsLeadingObject    =   'X'
```
