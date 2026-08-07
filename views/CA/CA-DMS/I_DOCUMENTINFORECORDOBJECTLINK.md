---
name: I_DOCUMENTINFORECORDOBJECTLINK
description: Documentinforecordobjectlink
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
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
# I_DOCUMENTINFORECORDOBJECTLINK

**Documentinforecordobjectlink**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  |  |
| `LinkedSAPObject` | ✓ | |  |  |
| `LinkedSAPObjectKey` | ✓ | |  |  |
| `DocObjectLinkCounter` | ✓ | |  |  |
| `CreationDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `ChangedDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `DocInfoRecdLinkStatus` |  | |  |  |
| `DocInfoRecdObjectLinkStatus` |  | |  |  |
| `ObjectTypeDatabaseTable` |  | |  |  |
| `DocInfoRecdAdditionalObjectKey` |  | |  |  |
| `DocLinkDirectionIsActive` |  | |  |  |
| `IsDefaultDocument` |  | |  |  |
| `DocInfoRecdIsMarkedForDeletion` |  | |  |  |
| `DocInfoRecdLongTextUUID` |  | |  |  |
| `IsDocInfoRecdCreatedFromCAD` |  | |  |  |
| `DocInfoRecdConfignMgmtFixed` |  | |  |  |
| `IsArchived` |  | |  |  |
| `_Text` | | ✓ | | |
| `_CreatedUser` | | ✓ | | |
| `_ChangedUser` | | ✓ | | |
| `_DocumentInfoRecordDesc` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordObjLinkT` | [0..*] |
| `_CreatedUser` | `I_DocumentInfoRecordUserVH` | [1..1] |
| `_ChangedUser` | `I_DocumentInfoRecordUserVH` | [1..1] |
| `_DocumentInfoRecordDesc` | `I_DocumentInfoRecordDesc` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCOBJECTLINK'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Document Info Record Object Link'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE

define view I_DocumentInfoRecordObjectLink
  as select from P_DocumentInfoRecordObjectLink as ObjLink 

  --Get Linked object description
  association [0..*] to I_DocumentInfoRecordObjLinkT as _Text                   on  $projection.LinkedSAPObject = _Text.LinkedSAPObject
  
  --Get DocumentInfoRecord created user full name
  association [1..1] to I_DocumentInfoRecordUserVH   as _CreatedUser            on  $projection.DocumentInfoRecordDocType    = _CreatedUser.DocumentInfoRecordDocType
                                                                                and $projection.DocumentInfoRecordDocPart    = _CreatedUser.DocumentInfoRecordDocPart
                                                                                and $projection.DocumentInfoRecordDocNumber  = _CreatedUser.DocumentInfoRecordDocNumber
                                                                                and $projection.DocumentInfoRecordDocVersion = _CreatedUser.DocumentInfoRecordDocVersion
                                                                                and $projection.CreatedByUser                = _CreatedUser.ResponsiblePersonName

  --Get DocumentInfoRecord changed user full name
  association [1..1] to I_DocumentInfoRecordUserVH   as _ChangedUser            on  $projection.DocumentInfoRecordDocType    = _ChangedUser.DocumentInfoRecordDocType
                                                                                and $projection.DocumentInfoRecordDocPart    = _ChangedUser.DocumentInfoRecordDocPart
                                                                                and $projection.DocumentInfoRecordDocNumber  = _ChangedUser.DocumentInfoRecordDocNumber
                                                                                and $projection.DocumentInfoRecordDocVersion = _ChangedUser.DocumentInfoRecordDocVersion
                                                                                and $projection.LastChangedByUser            = _ChangedUser.LastChangedByUser
  association [0..*] to I_DocumentInfoRecordDesc     as _DocumentInfoRecordDesc on  $projection.DocumentInfoRecordDocNumber = _DocumentInfoRecordDesc.DocumentInfoRecordDocNumber
{
      /*  Document Info Record key Details */
  key ObjLink.DocumentInfoRecordDocType      as DocumentInfoRecordDocType,
  key ObjLink.DocumentInfoRecordDocNumber    as DocumentInfoRecordDocNumber,
  key ObjLink.DocumentInfoRecordDocVersion   as DocumentInfoRecordDocVersion,
  key ObjLink.DocumentInfoRecordDocPart      as DocumentInfoRecordDocPart,

      /*  Object Type and Object Key Details */
  key ObjLink.LinkedSAPObject                as LinkedSAPObject,
  key ObjLink.LinkedSAPObjectKey             as LinkedSAPObjectKey,
  key ObjLink.DocObjectLinkCounter           as DocObjectLinkCounter,

      /* DIR Administrative Data */
      //@Semantics.businessDate.at: true
      //@Semantics.businessDate.createdAt: true
      ObjLink.CreationDateTime               as CreationDateTime,

      @Consumption.valueHelpDefinition.association: '_CreatedUser'
      @Semantics.user.createdBy: true
      ObjLink.CreatedByUser                  as CreatedByUser,

      //@Semantics.businessDate.at: true
      //@Semantics.businessDate.lastChangedAt: true
      ObjLink.ChangedDateTime                as ChangedDateTime,

      @Consumption.valueHelpDefinition.association: '_ChangedUser'
      @Semantics.user.lastChangedBy: true
      ObjLink.LastChangedByUser              as LastChangedByUser,

      ObjLink.DocInfoRecdLinkStatus          as DocInfoRecdLinkStatus,
      ObjLink.DocInfoRecdObjectLinkStatus    as DocInfoRecdObjectLinkStatus,
      ObjLink.ObjectTypeDatabaseTable        as ObjectTypeDatabaseTable,
      ObjLink.DocInfoRecdAdditionalObjectKey as DocInfoRecdAdditionalObjectKey,
      @Semantics.booleanIndicator: true
      ObjLink.DocLinkDirectionIsActive       as DocLinkDirectionIsActive,
      ObjLink.IsDefaultDocument              as IsDefaultDocument,
      @Semantics.booleanIndicator: true
      ObjLink.DocInfoRecdIsMarkedForDeletion as DocInfoRecdIsMarkedForDeletion,
      @Semantics.uuid: true
      ObjLink.DocInfoRecdLongTextUUID        as DocInfoRecdLongTextUUID,
      @Semantics.booleanIndicator: true
      ObjLink.IsDocInfoRecdCreatedFromCAD    as IsDocInfoRecdCreatedFromCAD,
      ObjLink.DocInfoRecdConfignMgmtFixed    as DocInfoRecdConfignMgmtFixed,
      //ObjLink.DocInfoRecdConfignMgmtIsFixed  as DocInfoRecdConfignMgmtIsFixed,
      ObjLink.IsArchived                     as IsArchived,
      
      //Associations
      _CreatedUser,
      _ChangedUser,
      _Text,
      _DocumentInfoRecordDesc
}
```
