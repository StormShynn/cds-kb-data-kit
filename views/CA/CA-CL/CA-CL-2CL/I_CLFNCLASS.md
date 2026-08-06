---
name: I_CLFNCLASS
description: Clfnclass
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASS

**Clfnclass**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ClassInternalID` | `Class.clint` |
| `ClassType` | `Class.klart` |
| `Class` | `Class.class` |
| `ClassStatus` | `Class.statu` |
| `ClassGroup` | `Class.klagr` |
| `ClassSearchAuthGrp` | `Class.bgrse` |
| `ClassClassfctnAuthGrp` | `Class.bgrkl` |
| `ClassMaintAuthGrp` | `Class.bgrkp` |
| `CreatedByUser` | `Class.aname` |
| `CreationDate` | `Class.adatu` |
| `LastChangedByUser` | `Class.vname` |
| `LastChangeDate` | `Class.vdatu` |
| `ValidityStartDate` | `Class.vondt` |
| `ValidityEndDate` | `Class.bisdt` |
| `SameClassfctnReaction` | `cast( Class.praus as char1 preserving type )` |
| `ClfnOrganizationalArea` | `cast( Class.sicht as clfnorganizationalarea preserving type )` |
| `DocumentInfoRecordDocNumber` | `Class.doknr` |
| `DocumentInfoRecordDocType` | `Class.dokar` |
| `DocumentInfoRecordDocPart` | `Class.doktl` |
| `DocumentInfoRecordDocVersion` | `Class.dokvr` |
| `ClassStandardOrgName` | `Class.nnorm` |
| `ClassStandardNumber` | `Class.normn` |
| `ClassStandardStartDate` | `Class.ausgd` |
| `ClassStandardVersionStartDate` | `Class.versd` |
| `ClassStandardVersion` | `Class.versi` |
| `ClassStandardCharcTable` | `Class.leist` |
| `ClassBaseUnit` | `Class.meins` |
| `ClassIsUsableInBOM` | `Class.vwstl` |
| `ClassIsLocal` | `Class.locla` |
| `ClassLastChangedDateTime` | `Class.lastchangeddatetime` |
| `_ClassDescription` | *Association* |
| `_ClassKeyword` | *Association* |
| `_ClassStatus` | *Association* |
| `_ClassGroup` | *Association* |
| `_ClassType` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassDescription` | `I_ClfnClassDescription` | [0..*] |
| `_ClassKeyword` | `I_ClfnClassKeyword` | [0..*] |
| `_ClassStatus` | `I_ClfnClassStatus` | [0..1] |
| `_ClassGroup` | `I_ClfnClassGroup` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCLS1'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Classification Class'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ClassInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API     
define view I_ClfnClass
  as select from klah as Class
  
    association [0..*] to I_ClfnClassDescription          as _ClassDescription              
      on $projection.ClassInternalID = _ClassDescription.ClassInternalID 
                
    association [0..*] to I_ClfnClassKeyword              as _ClassKeyword
      on  $projection.ClassInternalID     = _ClassKeyword.ClassInternalID

    association [0..1] to I_ClfnClassStatus               as _ClassStatus                  
      on  $projection.ClassStatus    = _ClassStatus.ClassStatus
      and $projection.ClassType      = _ClassStatus.ClassType
     
    association [0..1] to I_ClfnClassGroup                as _ClassGroup 
      on  $projection.ClassGroup     = _ClassGroup.ClassGroup

    association [0..1] to I_ClfnClassTypeBasic            as _ClassType 
      on  _ClassType.ClassType       = $projection.ClassType 

    association [0..1] to I_User                         as _CreatedByUser
      on  $projection.CreatedByUser = _CreatedByUser.UserID
      
    association [0..1] to I_User                         as _LastChangedByUser
      on  $projection.LastChangedByUser = _LastChangedByUser.UserID
{
  key Class.clint           as ClassInternalID,
      Class.klart           as ClassType,
      Class.class           as Class,
      Class.statu           as ClassStatus,
      Class.klagr           as ClassGroup,      
      Class.bgrse           as ClassSearchAuthGrp,
      Class.bgrkl           as ClassClassfctnAuthGrp,
      Class.bgrkp           as ClassMaintAuthGrp,
      Class.aname           as CreatedByUser,
      Class.adatu           as CreationDate,
      Class.vname           as LastChangedByUser,
      Class.vdatu           as LastChangeDate,
      @Semantics.businessDate.from: true
      Class.vondt           as ValidityStartDate,
      @Semantics.businessDate.to: true
      Class.bisdt           as ValidityEndDate,      
//      Class.anzou,
      cast( Class.praus as char1 preserving type ) as SameClassfctnReaction,
      cast( Class.sicht as clfnorganizationalarea preserving type ) as ClfnOrganizationalArea,
      Class.doknr           as DocumentInfoRecordDocNumber,
      Class.dokar           as DocumentInfoRecordDocType,
      Class.doktl           as DocumentInfoRecordDocPart,
      Class.dokvr           as DocumentInfoRecordDocVersion,           
//      Class.dinkz           as ClassDINCode,
      Class.nnorm           as ClassStandardOrgName,
      Class.normn           as ClassStandardNumber,
      Class.ausgd           as ClassStandardStartDate,
      Class.versd           as ClassStandardVersionStartDate,
      Class.versi           as ClassStandardVersion,
      Class.leist           as ClassStandardCharcTable,
//      Class.verwe,
//      Class.spart,
      Class.meins           as ClassBaseUnit,
      Class.vwstl           as ClassIsUsableInBOM,
      Class.locla           as ClassIsLocal,
      Class.lastchangeddatetime as ClassLastChangedDateTime,
      
      _ClassDescription,
      _ClassKeyword,
      _ClassStatus,
      _ClassGroup,
      _ClassType,
      _CreatedByUser,
      _LastChangedByUser

}
```
