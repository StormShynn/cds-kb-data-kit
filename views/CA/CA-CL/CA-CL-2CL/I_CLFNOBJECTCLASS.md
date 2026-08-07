---
name: I_CLFNOBJECTCLASS
description: Clfnobjectclass
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
# I_CLFNOBJECTCLASS

**Clfnobjectclass**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ClfnObjectID` | ✓ | |  |  |
| `ClfnObjectTable` | ✓ | |  |  |
| `ClassInternalID` | ✓ | |  |  |
| `ClassType` | ✓ | |  |  |
| `TimeIntervalNumber` | ✓ | |  |  |
| `ClfnObjectInternalID` |  | |  |  |
| `ClfnStatus` |  | |  |  |
| `ClassPositionNumber` |  | |  |  |
| `ClassIsStandardClass` |  | |  |  |
| `BOMIsRecursive` |  | |  |  |
| `IsDeleted` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_Class` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClass` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.sqlViewName: 'INGCCLFN9'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Classification Class of Object'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET, 
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API    
@VDM.viewType: #BASIC
define view I_ClfnObjectClass
  as select from I_ClfnObjectClassBasic as ObjectClassBasic
    inner join P_ClfnObjectHeader as ObjectHeader
      on  ObjectClassBasic.ClassType      = ObjectHeader.ClassType
      and ObjectClassBasic.ClfnObjectType = ObjectHeader.ClfnObjectType
      and ObjectClassBasic.ClfnObjectID   = ObjectHeader.objekp   

      association [1..1] to I_ClfnClass as _Class 
        on $projection.ClassInternalID    = _Class.ClassInternalID  
       and $projection.ValidityStartDate <= _Class.ValidityEndDate
       and $projection.ValidityEndDate   >= _Class.ValidityStartDate    
{
  key ObjectHeader.ClfnObjectID,
  key ObjectHeader.ClfnObjectTable,
  key ObjectClassBasic.ClassInternalID,
  key ObjectClassBasic.ClassType,
  key ObjectClassBasic.TimeIntervalNumber,
      ObjectHeader.ClfnObjectInternalID,
      ObjectClassBasic.ClfnStatus,
      ObjectClassBasic.ClassPositionNumber,
      ObjectClassBasic.ClassIsStandardClass,
      ObjectClassBasic.BOMIsRecursive,
      ObjectClassBasic.IsDeleted,                  
      ObjectClassBasic.ChangeNumber,
      ObjectClassBasic.ValidityStartDate,
      ObjectClassBasic.ValidityEndDate,
      ObjectHeader.LastChangeDateTime,
      
      _Class
}  
  where ObjectClassBasic.ClfnObjectType = 'O'
```
