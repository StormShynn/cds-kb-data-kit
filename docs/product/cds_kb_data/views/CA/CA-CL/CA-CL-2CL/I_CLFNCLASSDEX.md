---
name: I_CLFNCLASSDEX
description: "Clfnclassdex"
app_component: CA-CL-2CL
software_component: SAP_BASIS
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
  - CA-CL
  - interface-view
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCLASSDEX

**Clfnclassdex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  |  | `NUMC(10)` | Internal Class Number |
| `ClassType` |  | |  |  | `CHAR(3)` | Class Type |
| `Class` |  | |  |  | `CHAR(18)` | Class number |
| `ClassStatus` |  | |  |  | `CHAR(1)` | Class status |
| `ClassGroup` |  | |  |  | `CHAR(10)` | Class Group |
| `ClassSearchAuthGrp` |  | |  |  | `CHAR(3)` | Authorization Group for Finding Objects |
| `ClassClassfctnAuthGrp` |  | |  |  | `CHAR(3)` | Classification Authorization Group |
| `ClassMaintAuthGrp` |  | |  |  | `CHAR(3)` | Class Authorization Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `SameClassfctnReaction` |  | |  | `Class. SameClassfctnReaction` | `CHAR(1)` | Single-Character Flag |
| `ClfnOrganizationalArea` |  | |  |  | `CHAR(10)` | Organizational Area |
| `DocumentInfoRecordDocNumber` |  | |  |  | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocType` |  | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocPart` |  | |  |  | `CHAR(3)` | Document Part |
| `DocumentInfoRecordDocVersion` |  | |  |  | `CHAR(2)` | Document Version |
| `ClassStandardOrgName` |  | |  |  | `CHAR(10)` | Name of standards organization |
| `ClassStandardNumber` |  | |  |  | `CHAR(20)` | Standard Number |
| `ClassStandardStartDate` |  | |  |  | `DATS(8)` | Issue date |
| `ClassStandardVersionStartDate` |  | |  |  | `DATS(8)` | Version date |
| `ClassStandardVersion` |  | |  |  | `NUMC(2)` | Version Number |
| `ClassStandardCharcTable` |  | |  |  | `CHAR(20)` | Characteristics table |
| `ClassBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ClassIsUsableInBOM` |  | |  |  | `CHAR(1)` | Can Be Used in Bills of Material |
| `ClassIsLocal` |  | |  |  | `CHAR(1)` | Local class |
| `ClassLastChangedDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_ClassDescription` | | ✓ | | | | |
| `_ClassKeyword` | | ✓ | | | | |
| `_ClassCharacteristic` | | ✓ | | | | |
| `_ClassStatus` | | ✓ | | | | |
| `_ClassGroup` | | ✓ | | | | |
| `_ClassType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassDescription` | `I_ClfnClassDescriptionDEX` | [0..*] |
| `_ClassKeyword` | `I_ClfnClassKeywordDEX` | [0..*] |
| `_ClassCharacteristic` | `I_ClfnClassCharacteristicDEX` | [0..*] |
| `_ClassStatus` | `I_ClfnClassStatus` | [0..1] |
| `_ClassGroup` | `I_ClfnClassGroup` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Classification Class DEX'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ClassInternalID'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClassificationClass'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API     
@VDM.viewType: #BASIC
define view entity I_ClfnClassDEX
  as select from I_ClfnClass as Class
  
    association [0..*] to I_ClfnClassDescriptionDEX as _ClassDescription              
      on $projection.ClassInternalID = _ClassDescription.ClassInternalID 
                
    association [0..*] to I_ClfnClassKeywordDEX as _ClassKeyword
      on  $projection.ClassInternalID = _ClassKeyword.ClassInternalID
    
    association [0..*] to I_ClfnClassCharacteristicDEX as _ClassCharacteristic
      on  $projection.ClassInternalID = _ClassCharacteristic.ClassInternalID
    
    association [0..1] to I_ClfnClassStatus as _ClassStatus                  
      on  $projection.ClassStatus = _ClassStatus.ClassStatus
      and $projection.ClassType   = _ClassStatus.ClassType
     
    association [0..1] to I_ClfnClassGroup as _ClassGroup 
      on  $projection.ClassGroup = _ClassGroup.ClassGroup

    association [0..1] to I_ClfnClassTypeBasic as _ClassType 
      on  _ClassType.ClassType = $projection.ClassType 
{
  key Class.ClassInternalID,
      Class.ClassType,
      Class.Class,
      Class.ClassStatus,
      Class.ClassGroup,      
      Class.ClassSearchAuthGrp,
      Class.ClassClassfctnAuthGrp,
      Class.ClassMaintAuthGrp,
      Class.CreatedByUser,
      Class.CreationDate,
      Class.LastChangedByUser,
      Class.LastChangeDate,
      Class.ValidityStartDate,
      Class.ValidityEndDate,      
      Class. SameClassfctnReaction,
      Class.ClfnOrganizationalArea,
      Class.DocumentInfoRecordDocNumber,
      Class.DocumentInfoRecordDocType,
      Class.DocumentInfoRecordDocPart,
      Class.DocumentInfoRecordDocVersion,           
      Class.ClassStandardOrgName,
      Class.ClassStandardNumber,
      Class.ClassStandardStartDate,
      Class.ClassStandardVersionStartDate,
      Class.ClassStandardVersion,
      Class.ClassStandardCharcTable,
      Class.ClassBaseUnit,
      Class.ClassIsUsableInBOM,
      Class.ClassIsLocal,
      Class.ClassLastChangedDateTime,
      
      _ClassDescription,
      _ClassKeyword,
      _ClassCharacteristic,
      _ClassStatus,
      _ClassGroup,
      _ClassType
}
```
