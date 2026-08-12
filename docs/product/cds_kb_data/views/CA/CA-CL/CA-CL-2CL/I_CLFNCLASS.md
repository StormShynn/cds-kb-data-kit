---
name: I_CLFNCLASS
description: "Clfnclass"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  | `clint` | `NUMC(10)` | Internal Class Number |
| `ClassType` |  | |  | `klart` | `CHAR(3)` | Class Type |
| `Class` |  | |  | `class` | `CHAR(18)` | Class number |
| `ClassStatus` |  | |  | `statu` | `CHAR(1)` | Class status |
| `ClassGroup` |  | |  | `klagr` | `CHAR(10)` | Class Group |
| `ClassSearchAuthGrp` |  | |  | `bgrse` | `CHAR(3)` | Authorization Group for Finding Objects |
| `ClassClassfctnAuthGrp` |  | |  | `bgrkl` | `CHAR(3)` | Classification Authorization Group |
| `ClassMaintAuthGrp` |  | |  | `bgrkp` | `CHAR(3)` | Class Authorization Group |
| `CreatedByUser` |  | |  | `aname` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  | `adatu` | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  | `vname` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  | `vdatu` | `DATS(8)` | Last Changed On |
| `ValidityStartDate` |  | |  | `vondt` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  | `bisdt` | `DATS(8)` | Valid-to date |
| `SameClassfctnReaction` |  | |  | `cast( Class.praus as char1 preserving type )` | `CHAR(1)` | Single-Character Flag |
| `ClfnOrganizationalArea` |  | |  | `cast( Class.sicht as clfnorganizationalarea preserving type )` | `CHAR(10)` | Organizational Area |
| `DocumentInfoRecordDocNumber` |  | |  | `doknr` | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocType` |  | |  | `dokar` | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocPart` |  | |  | `doktl` | `CHAR(3)` | Document Part |
| `DocumentInfoRecordDocVersion` |  | |  | `dokvr` | `CHAR(2)` | Document Version |
| `ClassStandardOrgName` |  | |  | `nnorm` | `CHAR(10)` | Name of standards organization |
| `ClassStandardNumber` |  | |  | `normn` | `CHAR(20)` | Standard Number |
| `ClassStandardStartDate` |  | |  | `ausgd` | `DATS(8)` | Issue date |
| `ClassStandardVersionStartDate` |  | |  | `versd` | `DATS(8)` | Version date |
| `ClassStandardVersion` |  | |  | `versi` | `NUMC(2)` | Version Number |
| `ClassStandardCharcTable` |  | |  | `leist` | `CHAR(20)` | Characteristics table |
| `ClassBaseUnit` |  | |  | `meins` | `UNIT(3)` | Base Unit of Measure |
| `ClassIsUsableInBOM` |  | |  | `vwstl` | `CHAR(1)` | Can Be Used in Bills of Material |
| `ClassIsLocal` |  | |  | `locla` | `CHAR(1)` | Local class |
| `ClassLastChangedDateTime` |  | |  | `lastchangeddatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_ClassDescription` | | ✓ | | | | |
| `_ClassKeyword` | | ✓ | | | | |
| `_ClassStatus` | | ✓ | | | | |
| `_ClassGroup` | | ✓ | | | | |
| `_ClassType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

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
