---
name: I_REUSBLOBJADDLACCTASSGMTOBJ
description: "Reusblobjaddlacctassgmtobj"
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
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSBLOBJADDLACCTASSGMTOBJ

**Reusblobjaddlacctassgmtobj**

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
| `REObjectTypeTarget` |  | |  | `cast( left(_REObjectAssgmt.REStatusObjectTarget,2) as reipvdmbusobjtypecn preserving type )` |  |  |
| `InternalOrder` |  | | `_REObjectAssgmt._InternalOrder` | `InternalOrder` |  |  |
| `WBSElementExternalID` |  | | `_REObjectAssgmt._WBSElement` | `WBSElementExternalID` |  |  |
| `_REUsableObject` | | ✓ | | | | |
| `_REObjectTypeTarget` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | [1..1] |
| `_REObjectTypeTarget` | `I_REObjectType` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true
}

@ObjectModel: {
            usageType:{
                        dataClass: #MASTER,
                        serviceQuality: #C,
                        sizeCategory: #L
            },
            representativeKey: 'REStatusObjectSource',
            semanticKey: [ 'REStatusObjectSource','REObjectAssignmentType','REStatusObjectTarget','ValidityStartDate' ],
            sapObjectNodeType.name: 'REUsblObjAddlAcctAssgmtObj',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #COMPOSITE }
@EndUserText.label: 'RE Usable Object Addl Account Assign'
define view entity I_REUsblObjAddlAcctAssgmtObj 
  as select from I_REObjectAssgmt as _REObjectAssgmt
    inner join   I_REUsableObject as _REUsableObjectData on  _REObjectAssgmt.REStatusObjectSource   = _REUsableObjectData.REStatusObject
                                                         and _REObjectAssgmt.REObjectAssignmentType = 'IO'
  
  association [1..1] to I_REUsableObject  as _REUsableObject     on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_REObjectType    as _REObjectTypeTarget on $projection.REObjectTypeTarget = _REObjectTypeTarget.RealEstateObjectType
{
      @ObjectModel.foreignKey.association: '_REUsableObject'
  key _REUsableObjectData.RealEstateUsableObjectUUID                                              as RealEstateUsableObjectUUID,
  key _REObjectAssgmt.REStatusObjectSource,
      @ObjectModel.foreignKey.association: '_REObjectAssignmentType'
  key _REObjectAssgmt.REObjectAssignmentType,
      @ObjectModel.foreignKey.association: '_REObjectTypeDetails'
  key _REObjectAssgmt.REStatusObjectTarget,
      @Semantics.businessDate.from: true
  key _REObjectAssgmt.ValidityStartDate,
      @Semantics.businessDate.to: true
      _REObjectAssgmt.ValidityEndDate,
      _REObjectAssgmt.REOnlyInfoAssgmt,
      _REObjectAssgmt.REStatusObjectSourceIsArchived,
      @ObjectModel.foreignKey.association: '_REGenerationType'
      _REObjectAssgmt.REGenerationType,
      _REObjectAssgmt.REIsMainAsset,
      _REObjectAssgmt.REAssignmentHasMultiple,
      _REObjectAssgmt.REObjectPossessionStartDate,
      _REObjectAssgmt.REObjectPossessionEndDate,
      _REObjectAssgmt.REIsLeadingObject,

      cast( left(_REObjectAssgmt.REStatusObjectTarget,2) as reipvdmbusobjtypecn preserving type ) as REObjectTypeTarget,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].CostCenter,
      _REObjectAssgmt._CostCenter[1:ValidityStartDate <= $session.system_date and ValidityEndDate >= $session.system_date ].ControllingArea,
      _REObjectAssgmt._InternalOrder.InternalOrder,
      _REObjectAssgmt._WBSElement.WBSElementExternalID,

      /* Associations */
      _REObjectAssgmt._CostCenter,
      _REObjectAssgmt._FixedAsset,
      _REObjectAssgmt._InternalOrder,
      _REObjectAssgmt._REContractSubject,
      _REObjectAssgmt._REGenerationType,
      _REObjectAssgmt._REObjectAssignmentType,
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
  and  _REObjectAssgmt.REIsLeadingObject    <>   'X'
```
