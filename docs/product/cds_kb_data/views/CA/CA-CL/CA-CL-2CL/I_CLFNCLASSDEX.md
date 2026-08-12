---
name: I_CLFNCLASSDEX
description: "Clfnclassdex"
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `Class` |  | |  |  |  |  |
| `ClassStatus` |  | |  |  |  |  |
| `ClassGroup` |  | |  |  |  |  |
| `ClassSearchAuthGrp` |  | |  |  |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |  |  |
| `ClassMaintAuthGrp` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `SameClassfctnReaction` |  | |  | `Class. SameClassfctnReaction` |  |  |
| `ClfnOrganizationalArea` |  | |  |  |  |  |
| `DocumentInfoRecordDocNumber` |  | |  |  |  |  |
| `DocumentInfoRecordDocType` |  | |  |  |  |  |
| `DocumentInfoRecordDocPart` |  | |  |  |  |  |
| `DocumentInfoRecordDocVersion` |  | |  |  |  |  |
| `ClassStandardOrgName` |  | |  |  |  |  |
| `ClassStandardNumber` |  | |  |  |  |  |
| `ClassStandardStartDate` |  | |  |  |  |  |
| `ClassStandardVersionStartDate` |  | |  |  |  |  |
| `ClassStandardVersion` |  | |  |  |  |  |
| `ClassStandardCharcTable` |  | |  |  |  |  |
| `ClassBaseUnit` |  | |  |  |  |  |
| `ClassIsUsableInBOM` |  | |  |  |  |  |
| `ClassIsLocal` |  | |  |  |  |  |
| `ClassLastChangedDateTime` |  | |  |  |  |  |
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
