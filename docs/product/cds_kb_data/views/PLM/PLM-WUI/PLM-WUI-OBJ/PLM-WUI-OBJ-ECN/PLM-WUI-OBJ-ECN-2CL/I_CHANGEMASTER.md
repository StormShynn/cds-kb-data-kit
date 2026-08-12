---
name: I_CHANGEMASTER
description: "This CDS view provides the prerequisites for answering the following business questions: How many change masters are there in the system? What's the status of my change masters? Which change masters have been created by me? Are there any change masters in the system marked for deletion? Which change masters are valid from a given date? For what reasons have change masters been created?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTER')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many change masters are there in the system? What's the status of my change masters? Which change masters have been created by me? Are there any change masters in the system marked for deletion? Which change masters are valid from a given date? For what reasons have change masters been created?"
semantic_vi: "Change Number — CDS view giao diện dựa trên aenr."
keywords:
  - "change"
  - "number"
  - "status"
  - "authorization"
  - "group"
  - "function"
  - "technically"
  - "released"
tags:
  - PLM
  - bo:plant
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTER

**This CDS view provides the prerequisites for answering the following business questions: How many change masters are there in the system? What's the status of my change masters? Which change masters have been created by me? Are there any change masters in the system marked for deletion? Which change masters are valid from a given date? For what reasons have change masters been created?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumber` | ✓ | |  | `aennr` | `CHAR(12)` | Change Number |
| `ChangeNumberStatus` |  | |  | `cast( aenst as /plmb/ecn_status preserving type )` | `NUMC(2)` | Status of Change Number |
| `AuthorizationGroup` |  | |  | `cast( aenbe as /plmb/aenbe preserving type )` | `CHAR(4)` | Authorization group for change master record |
| `ChangeNumberFunction` |  | |  | `aefun` | `CHAR(1)` | Change number function |
| `IsTechnicallyReleased` |  | |  | `terel` | `CHAR(1)` | Indicator: Technical release occurs |
| `ChangeNumberReleaseKey` |  | |  | `cast( rlkey as /plmb/cc_rlkey preserving type )` | `NUMC(2)` | Release Key for Change Master Record |
| `ReasonForChangeText` |  | |  | `aegru` | `CHAR(40)` | Reason for change |
| `ChangeNumberDescription` |  | |  | `aetxt` | `CHAR(40)` | Change number description |
| `ChangeNumberValidFromDate` |  | |  | `datuv` | `DATS(8)` | Valid-From Date |
| `ChangeNumberCreationDate` |  | |  | `cast ( andat as /plmb/cc_andat preserving type )` | `DATS(8)` | Date on Which Record Was Created |
| `ChangeNumberCreatedByUser` |  | |  | `cast ( annam as /plmb/cc_annam preserving type )` | `CHAR(12)` | User Who Created Record |
| `ChangeNumberLastChangedDate` |  | |  | `cast ( aedat as /plmb/aedat preserving type )` | `DATS(8)` | Changed On |
| `ChangeNumberLastChangedByUser` |  | |  | `cast ( aenam as /plmb/aenam preserving type )` | `CHAR(12)` | Name of Person Who Changed Object |
| `IsUsedForDataDefinition` |  | |  | `cast (fluse as /plmb/inuse preserving type)` | `CHAR(1)` | Change Number Is Currently Being Used in Objects |
| `ChangeNumberIsMrkdForDeletion` |  | |  | `cast (lvorm as /plmb/loekz preserving type)` | `CHAR(1)` | Deletion Flag for Change Number (Reorganization) |
| `ChangeNumberLastChgdDateTime` |  | |  | `lastchangeddatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_ChangeNumberStatus` | | ✓ | | | | |
| `_ChangeNumberFunction` | | ✓ | | | | |
| `_ChangeNumberReleaseKey` | | ✓ | | | | |
| `_ObjTypeAssignment` | | ✓ | | | | |
| `_AlternativeDate` | | ✓ | | | | |
| `_LeadingChangeNumber` | | ✓ | | | | |
| `_ChangeMstrObjectMgmtRecord` | | ✓ | | | | |
| `_ChangeMstrObMgReDocInfoRecd` | | ✓ | | | | |
| `_ChangeMstrObMgReMaterial` | | ✓ | | | | |
| `_ChangeMstrObMgReMatlBOM` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ClfnObjectClassForKeyDate` | | ✓ | | | | |
| `_ClfnObjectCharcValForKeyDate` | | ✓ | | | | |
| `_DocumentInfoRecordObjectLink` | | ✓ | | | | |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |
| `_ChangeMasterLogAccMActive` | | ✓ | | | | |
| `_ChgMstrLogAccMSecureIDAssgmt` | | ✓ | | | | |
| `_ChangeMstrLogAccMUserAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeNumberStatus` | `I_ChangeMasterStatus` | [0..1] |
| `_ChangeNumberFunction` | `I_ChangeMasterFunction` | [0..1] |
| `_ChangeNumberReleaseKey` | `I_ChangeMasterReleaseKey` | [0..1] |
| `_ObjTypeAssignment` | `I_ChangeMasterObjTypeAssgmt` | [0..*] |
| `_AlternativeDate` | `I_ChangeMasterAltDate` | [0..*] |
| `_LeadingChangeNumber` | `I_ChangeMasterHierarchy` | [0..1] |
| `_ChangeMstrObjectMgmtRecord` | `I_ChangeMstrObjectMgmtRecord` | [0..*] |
| `_ChangeMstrObMgReDocInfoRecd` | `I_ChangeMstrObMgReDocInfoRecd` | [0..*] |
| `_ChangeMstrObMgReMaterial` | `I_ChangeMstrObMgReMaterial` | [0..*] |
| `_ChangeMstrObMgReMatlBOM` | `I_ChangeMstrObMgReMatlBOM` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_ClfnObjectClassForKeyDate` | `I_ClfnObjectClassForKeyDate` | [0..*] |
| `_ClfnObjectCharcValForKeyDate` | `I_ClfnObjectCharcValForKeyDate` | [0..*] |
| `_DocumentInfoRecordObjectLink` | `I_DocumentInfoRecordObjectLink` | [0..*] |
| `_LogAccMObjectTypeActive` | `I_LogAccMObjectTypeActive` | [0..1] |
| `_LogAccMObjSecureIDAssgmt` | `I_LogAccMObjSecureIDAssgmt` | [0..*] |
| `_LogAccMObjectUserAuthzn` | `I_LogAccMObjectUserAuthzn` | [0..*] |
| `_ChangeMasterLogAccMActive` | `I_ChangeMasterLogAccMActive` | [0..1] |
| `_ChgMstrLogAccMSecureIDAssgmt` | `I_ChgMstrLogAccMSecureIDAssgmt` | [0..*] |
| `_ChangeMstrLogAccMUserAuthzn` | `I_ChangeMstrLogAccMUserAuthzn` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTER')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICHANGEMASTER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: [
  '_LastChangedByUser'       ,
  '_CreatedByUser'           ,
  '_LogAccMObjectTypeActive' ,
  '_LogAccMObjSecureIDAssgmt',
  '_LogAccMObjectUserAuthzn' ,
  '_ChangeMasterLogAccMActive',
  '_ChgMstrLogAccMSecureIDAssgmt',
  '_ChangeMstrLogAccMUserAuthzn' ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel: {
   compositionRoot: true,
   semanticKey: ['ChangeNumber'],
   representativeKey: 'ChangeNumber'
  // modelCategory: #BUSINESS_OBJECT
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number'
define view I_ChangeMaster
  as select from aenr
  association [0..1] to I_ChangeMasterStatus           as _ChangeNumberStatus           on  $projection.ChangeNumberStatus = _ChangeNumberStatus.ChangeNumberStatus
  association [0..1] to I_ChangeMasterFunction         as _ChangeNumberFunction         on  $projection.ChangeNumberFunction = _ChangeNumberFunction.ChangeNumberFunction
  association [0..1] to I_ChangeMasterReleaseKey       as _ChangeNumberReleaseKey       on  $projection.ChangeNumberReleaseKey = _ChangeNumberReleaseKey.ChangeNumberReleaseKey
  association [0..*] to I_ChangeMasterObjTypeAssgmt    as _ObjTypeAssignment            on  $projection.ChangeNumber = _ObjTypeAssignment.ChangeNumber
  association [0..*] to I_ChangeMasterAltDate          as _AlternativeDate              on  $projection.ChangeNumber = _AlternativeDate.ChangeNumber
  association [0..1] to I_ChangeMasterHierarchy        as _LeadingChangeNumber          on  $projection.ChangeNumber = _LeadingChangeNumber.PackageChangeNumber
  association [0..*] to I_ChangeMstrObjectMgmtRecord   as _ChangeMstrObjectMgmtRecord   on  $projection.ChangeNumber = _ChangeMstrObjectMgmtRecord.ChangeNumber
  association [0..*] to I_ChangeMstrObMgReDocInfoRecd  as _ChangeMstrObMgReDocInfoRecd  on  $projection.ChangeNumber = _ChangeMstrObMgReDocInfoRecd.ChangeNumber
  association [0..*] to I_ChangeMstrObMgReMaterial     as _ChangeMstrObMgReMaterial     on  $projection.ChangeNumber = _ChangeMstrObMgReMaterial.ChangeNumber
  association [0..*] to I_ChangeMstrObMgReMatlBOM      as _ChangeMstrObMgReMatlBOM      on  $projection.ChangeNumber = _ChangeMstrObMgReMatlBOM.ChangeNumber
  association [0..1] to I_User                         as _CreatedByUser                on  $projection.ChangeNumberCreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser            on  $projection.ChangeNumberLastChangedByUser = _LastChangedByUser.UserID
  association [0..*] to I_ClfnObjectClassForKeyDate    as _ClfnObjectClassForKeyDate    on  $projection.ChangeNumber                   = _ClfnObjectClassForKeyDate.ClfnObjectID
                                                                                        and _ClfnObjectClassForKeyDate.ClfnObjectTable = 'AENR'
  association [0..*] to I_ClfnObjectCharcValForKeyDate as _ClfnObjectCharcValForKeyDate on  $projection.ChangeNumber                      = _ClfnObjectCharcValForKeyDate.ClfnObjectID
                                                                                        and _ClfnObjectCharcValForKeyDate.ClfnObjectTable = 'AENR'
  association [0..*] to I_DocumentInfoRecordObjectLink as _DocumentInfoRecordObjectLink on  $projection.ChangeNumber                      = _DocumentInfoRecordObjectLink.LinkedSAPObjectKey
                                                                                        and _DocumentInfoRecordObjectLink.LinkedSAPObject = 'AENR'

  // Access Control Management integration - target views are not C1 released (kept for historical reason, not used in DCL anymore)
  association [0..1] to I_LogAccMObjectTypeActive      as _LogAccMObjectTypeActive      on  _LogAccMObjectTypeActive.LogAccMObjectType = 'PLM_ECN'

  association [0..*] to I_LogAccMObjSecureIDAssgmt     as _LogAccMObjSecureIDAssgmt     on  $projection.ChangeNumber                    = _LogAccMObjSecureIDAssgmt.LogAccMObjectID
                                                                                        and _LogAccMObjSecureIDAssgmt.LogAccMObjectType = 'PLM_ECN'
  association [0..*] to I_LogAccMObjectUserAuthzn      as _LogAccMObjectUserAuthzn      on  $projection.ChangeNumber                              = _LogAccMObjectUserAuthzn.LogAccMObjectID
                                                                                        and _LogAccMObjectUserAuthzn.LogAccMObjectType            = 'PLM_ECN'
                                                                                        and _LogAccMObjectUserAuthzn.LogAccMUserAuthznObject      = 'PLM_ECN'
                                                                                        and _LogAccMObjectUserAuthzn.LogAccMReadActivityIsEnabled = 'X'
                                                                                        and _LogAccMObjectUserAuthzn.LogAccMUserAuthznField       = 'ACTVT'
                                                                                        and _LogAccMObjectUserAuthzn.LogAccMUserEntityID          = $session.user
                                                                                        and _LogAccMObjectUserAuthzn.UserID                       = $session.user //DT2869058

  // Access Control Management integration - target views are ECN object specific projection views on ACM, C1 released, used in DCL
  association [0..1] to I_ChangeMasterLogAccMActive    as _ChangeMasterLogAccMActive    on  _ChangeMasterLogAccMActive.LogAccMObjectType = 'PLM_ECN'
  association [0..*] to I_ChgMstrLogAccMSecureIDAssgmt as _ChgMstrLogAccMSecureIDAssgmt on  _ChgMstrLogAccMSecureIDAssgmt.LogAccMObjectID = $projection.ChangeNumber
  association [0..*] to I_ChangeMstrLogAccMUserAuthzn  as _ChangeMstrLogAccMUserAuthzn  on  _ChangeMstrLogAccMUserAuthzn.LogAccMObjectID              = $projection.ChangeNumber
                                                                                        and _ChangeMstrLogAccMUserAuthzn.LogAccMUserAuthznField       = 'ACTVT'
                                                                                        and _ChangeMstrLogAccMUserAuthzn.LogAccMReadActivityIsEnabled = 'X'
                                                                                        and _ChangeMstrLogAccMUserAuthzn.UserID                       = $session.user
                                                                                        and _ChangeMstrLogAccMUserAuthzn.LogAccMUserEntityID          = $session.user
{
      @ObjectModel.text.element: 'ChangeNumberDescription'
  key aennr                                             as ChangeNumber,

      @ObjectModel.foreignKey.association: '_ChangeNumberStatus'
      @ObjectModel.text.element: [ 'ChangeNumberStatus' ]
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ChangeMasterStatusStdVH',
                   element: 'ChangeNumberStatus' }
      }]
      cast( aenst as /plmb/ecn_status preserving type ) as ChangeNumberStatus,

      cast( aenbe as /plmb/aenbe preserving type )      as AuthorizationGroup,

      @ObjectModel.foreignKey.association: '_ChangeNumberFunction'
      @ObjectModel.text.element: [ 'ChangeNumberFunction' ]
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ChangeMasterFunctionStdVH',
                   element: 'ChangeNumberFunction' }
      }]
      aefun                                             as ChangeNumberFunction,

      terel                                             as IsTechnicallyReleased,

      @ObjectModel.foreignKey.association: '_ChangeNumberReleaseKey'
      @ObjectModel.text.element: [ 'ChangeNumberReleaseKey' ]
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_ChangeMasterReleaseKeyStdVH',
                   element: 'ChangeNumberReleaseKey' }
      }]
      cast( rlkey as /plmb/cc_rlkey preserving type )   as ChangeNumberReleaseKey,

      @Semantics.text:true
      aegru                                             as ReasonForChangeText,

      @Semantics.text:true
      aetxt                                             as ChangeNumberDescription,

      @Semantics.businessDate.from
      datuv                                             as ChangeNumberValidFromDate,

      cast ( andat as /plmb/cc_andat preserving type )  as ChangeNumberCreationDate,
      cast ( annam as /plmb/cc_annam preserving type )  as ChangeNumberCreatedByUser,
      cast ( aedat as /plmb/aedat preserving type )     as ChangeNumberLastChangedDate,
      cast ( aenam as /plmb/aenam preserving type )     as ChangeNumberLastChangedByUser,

      cast (fluse as /plmb/inuse preserving type)       as IsUsedForDataDefinition,

      cast (lvorm  as /plmb/loekz preserving type)      as ChangeNumberIsMrkdForDeletion,

      lastchangeddatetime                               as ChangeNumberLastChgdDateTime,

      _ChangeNumberStatus,
      _ChangeNumberFunction,
      _ChangeNumberReleaseKey,
      _ObjTypeAssignment,
      _AlternativeDate,
      _LeadingChangeNumber,
      _ChangeMstrObjectMgmtRecord,
      _ChangeMstrObMgReDocInfoRecd,
      _DocumentInfoRecordObjectLink,
      _ChangeMstrObMgReMaterial,
      _ChangeMstrObMgReMatlBOM,
      _CreatedByUser,
      _LastChangedByUser,
      _ClfnObjectClassForKeyDate,
      _ClfnObjectCharcValForKeyDate,

      // Access Control Management not C1 released, kept for history, not used in DCL anymore
      @Consumption.hidden:true
      _LogAccMObjectTypeActive,
      @Consumption.hidden:true
      _LogAccMObjectUserAuthzn,
      @Consumption.hidden:true
      _LogAccMObjSecureIDAssgmt,

      // Access Control Management C1 released, used in DCL
      @Consumption.hidden:true
      _ChangeMasterLogAccMActive,
      @Consumption.hidden:true
      _ChgMstrLogAccMSecureIDAssgmt,
      @Consumption.hidden:true
      _ChangeMstrLogAccMUserAuthzn
}
```
