---
name: I_CLFNCLASSFORKEYDATE
description: Clfnclassforkeydate
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
# I_CLFNCLASSFORKEYDATE

**Clfnclassforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  |  |
| `ClassType` |  | |  |  |
| `Class` |  | |  |  |
| `ClassStatus` |  | |  |  |
| `ClassGroup` |  | |  |  |
| `ClassSearchAuthGrp` |  | |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |
| `ClassMaintAuthGrp` |  | |  |  |
| `DocumentInfoRecordDocNumber` |  | |  |  |
| `DocumentInfoRecordDocType` |  | |  |  |
| `DocumentInfoRecordDocPart` |  | |  |  |
| `DocumentInfoRecordDocVersion` |  | |  |  |
| `SameClassfctnReaction` |  | |  |  |
| `ClfnOrganizationalArea` |  | |  |  |
| `ClassStandardOrgName` |  | |  |  |
| `ClassStandardNumber` |  | |  |  |
| `ClassStandardStartDate` |  | |  |  |
| `ClassStandardVersionStartDate` |  | |  |  |
| `ClassStandardVersion` |  | |  |  |
| `ClassStandardCharcTable` |  | |  |  |
| `ClassBaseUnit` |  | |  |  |
| `ClassIsUsableInBOM` |  | |  |  |
| `ClassIsLocal` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `ClassLastChangedDateTime` |  | |  |  |
| `_ClassDescription` | | ✓ | | |
| `_ClassKeyword` | | ✓ | | |
| `_ClassCharc` | | ✓ | | |
| `_ClassGroup` | | ✓ | | |
| `_ClassStatus` | | ✓ | | |
| `_ClassType` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassDescription` | `I_ClfnClassDescForKeyDate` | [0..*] |
| `_ClassKeyword` | `I_ClfnClassKeywordForKeyDate` | [0..*] |
| `_ClassCharc` | `I_ClfnClassCharcForKeyDate` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLS6'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@EndUserText.label: 'Classification Class for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ClassInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
define view I_ClfnClassForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnClass as Class 
  
    association [0..*] to I_ClfnClassDescForKeyDate   as _ClassDescription              
      on $projection.ClassInternalID = _ClassDescription.ClassInternalID 
    association [0..*] to I_ClfnClassKeywordForKeyDate   as _ClassKeyword              
      on $projection.ClassInternalID = _ClassKeyword.ClassInternalID 
    association [0..*] to I_ClfnClassCharcForKeyDate   as _ClassCharc              
      on $projection.ClassInternalID = _ClassCharc.ClassInternalID 
    
{
  key Class.ClassInternalID,
      Class.ClassType,
      Class.Class,
      Class.ClassStatus,
      Class.ClassGroup,
      Class.ClassSearchAuthGrp,
      Class.ClassClassfctnAuthGrp,
      Class.ClassMaintAuthGrp,     
      Class.DocumentInfoRecordDocNumber,
      Class.DocumentInfoRecordDocType,
      Class.DocumentInfoRecordDocPart,
      Class.DocumentInfoRecordDocVersion,  
      Class.SameClassfctnReaction,
      Class.ClfnOrganizationalArea,
      Class.ClassStandardOrgName,
      Class.ClassStandardNumber,
      Class.ClassStandardStartDate,
      Class.ClassStandardVersionStartDate,
      Class.ClassStandardVersion,
      Class.ClassStandardCharcTable,
      Class.ClassBaseUnit,
      Class.ClassIsUsableInBOM,
      Class.ClassIsLocal, 
      @Semantics.businessDate.from: true
      Class.ValidityStartDate,
      @Semantics.businessDate.to: true
      Class.ValidityEndDate,
      Class.CreatedByUser,
      Class.CreationDate,
      Class.LastChangedByUser,
      Class.LastChangeDate,    
      Class.ClassLastChangedDateTime,
      
      _ClassDescription,
      _ClassKeyword,
      _ClassGroup,
      _ClassStatus,
      _ClassType,
      _ClassCharc,
      _CreatedByUser,
      _LastChangedByUser      
}
where Class.ValidityStartDate <= $parameters.P_KeyDate
  and Class.ValidityEndDate   >= $parameters.P_KeyDate
```
