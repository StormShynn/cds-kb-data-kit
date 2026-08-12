---
name: I_DOCUMENTINFORECORD
description: "Documentinforecord"
app_component: CA-DMS
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
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORD

**Documentinforecord**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
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
| `DocumentInfoRecordDocType` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  |  |  |  |
| `DocumentInfoRecord` |  | |  |  |  |  |
| `InternalDocumentStatus` |  | |  |  |  |  |
| `ExternalDocumentStatus` |  | | `_DocStatusVH` | `ExternalDocumentStatus` |  |  |
| `LaboratoryOrDesignOffice` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `DocInfoRecdIsMarkedForDeletion` |  | |  |  |  |  |
| `IsDocInfoRecdCreatedFromCAD` |  | |  |  |  |  |
| `IsDocInfoRecdStructure` |  | |  |  |  |  |
| `DocInfoRecdSourceDocNumber` |  | |  |  |  |  |
| `DocInfoRecdSourceDocPart` |  | |  |  |  |  |
| `DocInfoRecdSourceDocVersion` |  | |  |  |  |  |
| `ResponsiblePersonName` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `DocumentInfoRecordIsFrozen` |  | |  |  |  |  |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |
| `_DocVersion` | | ✓ | | | | |
| `_DocPart` | | ✓ | | | | |
| `_CreatedUser` | | ✓ | | | | |
| `_ChangedUser` | | ✓ | | | | |
| `_UserDetails` | | ✓ | | | | |
| `_CreatedUserVH` | | ✓ | | | | |
| `_ChangedUserVH` | | ✓ | | | | |
| `_UserDetailsVH` | | ✓ | | | | |
| `_DocDesc` | | ✓ | | | | |
| `_DocStatus` | | ✓ | | | | |
| `_LabOffice` | | ✓ | | | | |
| `_AuthGroup` | | ✓ | | | | |
| `_Indicator` | | ✓ | | | | |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocType` | `I_DocumentInfoRecordDocType` | [0..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [1..1] |
| `_DocVersion` | `I_DocumentInfoRecordDocVersion` | [0..1] |
| `_DocPart` | `I_DocumentInfoRecordDocPrt` | [0..1] |
| `_CreatedUser` | `I_User` | [1..1] |
| `_ChangedUser` | `I_User` | [1..1] |
| `_UserDetails` | `I_User` | [1..1] |
| `_CreatedUserVH` | `I_DocumentInfoRecordUserVH` | [1..1] |
| `_ChangedUserVH` | `I_DocumentInfoRecordUserVH` | [1..1] |
| `_UserDetailsVH` | `I_DocumentInfoRecordUserVH` | [1..1] |
| `_DocDesc` | `I_DocumentInfoRecordDesc` | [0..*] |
| `_DocStatus` | `I_DocumentInfoRecordDocStatus` | [0..1] |
| `_DocStatusVH` | `I_DocumentInfoRecordDocStsVH` | [0..*] |
| `_LabOffice` | `I_DocumentInfoRecordLbtryOffc` | [1..1] |
| `_AuthGroup` | `I_DocumentInfoRecordAuthznGrp` | [1..1] |
| `_Indicator` | `I_DocumentInfoRecordIndSts` | [1..1] |
| `_LogAccMObjectTypeActive` | `I_DocumentInfoRecordAccMActv` | [0..1] |
| `_LogAccMObjSecureIDAssgmt` | `I_DocInfoRecordAccMSecIDAsgt` | [0..*] |
| `_LogAccMObjectUserAuthzn` | `I_DocumentInfoRecordUAuthAccM` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCINFOREC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations:  [ '_CreatedUser', '_ChangedUser', '_UserDetails' ]
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocPart'
@Analytics: { dataCategory: #DIMENSION } 
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@EndUserText.label: 'Document Info Record Details'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities:  [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE]


define view I_DocumentInfoRecord
  as select from P_DocumentInfoRecord as DocInfo

  --Get Document Type Association
  association [0..1] to I_DocumentInfoRecordDocType    as _DocType                  on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  --Get Document Number Association
  association [1..1] to I_DocumentInfoRecordDocNumber  as _DocNumber                on  $projection.DocumentInfoRecordDocType   = _DocNumber.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocNumber = _DocNumber.DocumentInfoRecordDocNumber

  --Get Document Version Association
  association [0..1] to I_DocumentInfoRecordDocVersion as _DocVersion               on  $projection.DocumentInfoRecordDocType    = _DocVersion.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _DocVersion.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _DocVersion.DocumentInfoRecordDocVersion

  --Get Document Part Association
  association [0..1] to I_DocumentInfoRecordDocPrt     as _DocPart                  on  $projection.DocumentInfoRecordDocType    = _DocPart.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocPart    = _DocPart.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _DocPart.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _DocPart.DocumentInfoRecordDocVersion

  --Get DocumentInfoRecord created user full name
  association [1..1] to I_User                         as _CreatedUser              on  $projection.CreatedByUser = _CreatedUser.UserID

  --Get DocumentInfoRecord changed user full name
  association [1..1] to I_User                         as _ChangedUser              on  $projection.LastChangedByUser = _ChangedUser.UserID

  --Get Responsible user full name
  association [1..1] to I_User                         as _UserDetails              on  $projection.ResponsiblePersonName = _UserDetails.UserID

  --Get DocumentInfoRecord created user value help
  association [1..1] to I_DocumentInfoRecordUserVH     as _CreatedUserVH            on  $projection.DocumentInfoRecordDocType    = _CreatedUserVH.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocPart    = _CreatedUserVH.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _CreatedUserVH.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _CreatedUserVH.DocumentInfoRecordDocVersion
                                                                                    and $projection.CreatedByUser                = _CreatedUserVH.ResponsiblePersonName

  --Get DocumentInfoRecord changed user value help
  association [1..1] to I_DocumentInfoRecordUserVH     as _ChangedUserVH            on  $projection.DocumentInfoRecordDocType    = _ChangedUserVH.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocPart    = _ChangedUserVH.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _ChangedUserVH.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _ChangedUserVH.DocumentInfoRecordDocVersion
                                                                                    and $projection.LastChangedByUser            = _ChangedUserVH.LastChangedByUser

  --Get DocumentInfoRecord Responsible user value help
  association [1..1] to I_DocumentInfoRecordUserVH     as _UserDetailsVH            on  $projection.DocumentInfoRecordDocType    = _UserDetailsVH.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocPart    = _UserDetailsVH.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _UserDetailsVH.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _UserDetailsVH.DocumentInfoRecordDocVersion
                                                                                    and $projection.ResponsiblePersonName        = _UserDetailsVH.ResponsiblePersonName

  --Get DocumentInfoRecord Description
  association [0..*] to I_DocumentInfoRecordDesc       as _DocDesc                  on  $projection.DocumentInfoRecordDocType    = _DocDesc.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _DocDesc.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocPart    = _DocDesc.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocVersion = _DocDesc.DocumentInfoRecordDocVersion

  --Get Document Status and its Description
  association [0..1] to I_DocumentInfoRecordDocStatus  as _DocStatus                on  $projection.DocumentInfoRecordDocType = _DocStatus.DocumentInfoRecordDocType
                                                                                    and $projection.InternalDocumentStatus    = _DocStatus.InternalDocumentStatus
  
  --Get External Document Status
  association [0..*] to I_DocumentInfoRecordDocStsVH   as _DocStatusVH              on  $projection.DocumentInfoRecordDocType = _DocStatusVH.DocumentInfoRecordDocType
                                                                                    and $projection.InternalDocumentStatus    = _DocStatusVH.InternalDocumentStatus
                                                                                    
  
  --Get Lab office Association
  association [1..1] to I_DocumentInfoRecordLbtryOffc  as _LabOffice                on  $projection.LaboratoryOrDesignOffice = _LabOffice.LaboratoryOrDesignOffice

  --Get Authorization Group Association
  association [1..1] to I_DocumentInfoRecordAuthznGrp  as _AuthGroup                on  $projection.AuthorizationGroup = _AuthGroup.AuthorizationGroup

  --Get CAD, Marked for Deletion and Structure Indicator
  association [1..1] to I_DocumentInfoRecordIndSts     as _Indicator                on  $projection.DocumentInfoRecordDocType    = _Indicator.DocumentInfoRecordDocType
                                                                                    and $projection.DocumentInfoRecordDocPart    = _Indicator.DocumentInfoRecordDocPart
                                                                                    and $projection.DocumentInfoRecordDocNumber  = _Indicator.DocumentInfoRecordDocNumber
                                                                                    and $projection.DocumentInfoRecordDocVersion = _Indicator.DocumentInfoRecordDocVersion

  // Access Control Management integration
  association [0..1] to I_DocumentInfoRecordAccMActv   as _LogAccMObjectTypeActive  on  _LogAccMObjectTypeActive.LogAccMObjectType = 'PLM_DIR'
  association [0..*] to I_DocInfoRecordAccMSecIDAsgt     as _LogAccMObjSecureIDAssgmt on  $projection.DocumentInfoRecord              = _LogAccMObjSecureIDAssgmt.LogAccMObjectID
                                                                                        and _LogAccMObjSecureIDAssgmt.LogAccMObjectType = 'PLM_DIR'
  association [0..*] to I_DocumentInfoRecordUAuthAccM      as _LogAccMObjectUserAuthzn  on  $projection.DocumentInfoRecord = _LogAccMObjectUserAuthzn.LogAccMObjectID
                                                                                      and _LogAccMObjectUserAuthzn.LogAccMObjectType       = 'PLM_DIR'
                                                                                  and _LogAccMObjectUserAuthzn.LogAccMUserAuthznObject = 'PLM_DIR'
                                                                                  and (
                                                                                      _LogAccMObjectUserAuthzn.LogAccMUserAuthznFrom    = '03'
                                                                                     or _LogAccMObjectUserAuthzn.LogAccMUserAuthznFrom = '*'
                                                                                  )
                                                                                  and _LogAccMObjectUserAuthzn.LogAccMUserAuthznField  = 'ACTVT'
                                                                                 and (
                                                                                     _LogAccMObjectUserAuthzn.LogAccMUserEntityID      = $session.user
                                                                                     or _LogAccMObjectUserAuthzn.UserID                = $session.user
                                                                              )
    
      {                                                                           
      /*  Document Info Record key Details */
      
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                           element: 'DocumentInfoRecordDocType' }
              }]
      @ObjectModel.foreignKey.association: '_DocType'
  key DocInfo.DocumentInfoRecordDocType                              as  DocumentInfoRecordDocType,
      @ObjectModel.foreignKey.association: '_DocVersion' 
  key DocInfo.DocumentInfoRecordDocVersion                           as  DocumentInfoRecordDocVersion,
      //@ObjectModel.foreignKey.association: '_DocPart'

      @ObjectModel.foreignKey.association: '_DocNumber' 
  key DocInfo.DocumentInfoRecordDocNumber                            as  DocumentInfoRecordDocNumber,
  key DocInfo.DocumentInfoRecordDocPart                              as  DocumentInfoRecordDocPart,

      DocInfo.DocumentInfoRecord                                     as  DocumentInfoRecord,

      /*  Document Info Record other Details */
      DocInfo.InternalDocumentStatus                                 as  InternalDocumentStatus,
      _DocStatusVH.ExternalDocumentStatus                            as  ExternalDocumentStatus,
      DocInfo.LaboratoryOrDesignOffice                               as  LaboratoryOrDesignOffice,
      DocInfo.Plant                                                  as  Plant,
      DocInfo.AuthorizationGroup                                     as  AuthorizationGroup,
      DocInfo.ChangeNumber                                           as  ChangeNumber,

      /*  Document Structure, CAD and Deletion Indicator */
      DocInfo.DocInfoRecdIsMarkedForDeletion                         as  DocInfoRecdIsMarkedForDeletion,
      DocInfo.IsDocInfoRecdCreatedFromCAD                            as  IsDocInfoRecdCreatedFromCAD,
      //DocInfo.DocInfoRecdHierarchy                                   as  DocInfoRecdHierarchy,
      @Semantics.booleanIndicator: true
      DocInfo.IsDocInfoRecdStructure                                 as  IsDocInfoRecdStructure,

      /* Template of Document Info Record */
      DocInfo.DocInfoRecdSourceDocNumber                             as  DocInfoRecdSourceDocNumber,
      DocInfo.DocInfoRecdSourceDocPart                               as  DocInfoRecdSourceDocPart,
      DocInfo.DocInfoRecdSourceDocVersion                            as  DocInfoRecdSourceDocVersion,

      @Consumption.valueHelp :'_UserDetailsVH'
      //@Consumption.valueHelpDefinition.association: '_UserDetailsVH'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocumentInfoRecordUserVH',
                           element: 'ResponsiblePersonName' }
              }]
      DocInfo.ResponsiblePersonName                                  as  ResponsiblePersonName,

      /* DIR Administrative Data */
      //@Semantics.businessDate.at: true
      //@Semantics.businessDate.createdAt: true
      //@Semantics.systemDateTime.createdAt: true
      DocInfo.CreationDateTime                                       as  CreationDateTime,

      @Consumption.valueHelp :'_CreatedUserVH'
      //@Consumption.valueHelpDefinition.association: '_CreatedUserVH'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocumentInfoRecordUserVH',
                           element: 'ResponsiblePersonName' }
              }]
      @Semantics.user.createdBy: true
      DocInfo.CreatedByUser                                          as  CreatedByUser,

      //@Semantics.businessDate.at: true
      //@Semantics.businessDate.lastChangedAt: true
      //@Semantics.systemDateTime.lastChangedAt: true
      DocInfo.ChangedDateTime                                        as  ChangedDateTime,

      @Consumption.valueHelp :'_ChangedUserVH'
      //@Consumption.valueHelpDefinition.association: '_ChangedUserVH'
      @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocumentInfoRecordUserVH',
                           element: 'LastChangedByUser' }
              }]
      @Semantics.user.lastChangedBy: true
      DocInfo.LastChangedByUser                                      as  LastChangedByUser,
      DocInfo.DocumentInfoRecordIsFrozen                             as  DocumentInfoRecordIsFrozen,
      

      /* Associations */
      _DocType,
      _DocNumber,
      _DocVersion,
      _DocPart,
      _CreatedUser,
      _ChangedUser,
      _UserDetails,
      _CreatedUserVH,
      _ChangedUserVH,
      _UserDetailsVH,
      _DocDesc,
      _DocStatus,
      _LabOffice,
      _AuthGroup,
      _Indicator,
      _LogAccMObjectTypeActive,
      _LogAccMObjSecureIDAssgmt,
      _LogAccMObjectUserAuthzn

}
```
