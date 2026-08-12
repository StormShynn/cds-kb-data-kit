---
name: I_CLFNOBJECTCLASS
description: "Clfnobjectclass"
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
# I_CLFNOBJECTCLASS

**Clfnobjectclass**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClfnObjectID` | ✓ | |  |  | `CHAR(90)` | Key of Object to be Classified |
| `ClfnObjectTable` | ✓ | |  |  | `CHAR(30)` | Classification Object |
| `ClassInternalID` | ✓ | |  |  | `NUMC(10)` | Internal Class Number |
| `ClassType` | ✓ | |  |  | `CHAR(3)` | Class Type |
| `TimeIntervalNumber` | ✓ | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal Object Number |
| `ClfnStatus` |  | |  |  | `CHAR(1)` | Classification status |
| `ClassPositionNumber` |  | |  |  | `INT2(5)` | Sort position |
| `ClassIsStandardClass` |  | |  |  | `CHAR(1)` | Class Is Standard Class Indicator |
| `BOMIsRecursive` |  | |  |  | `CHAR(1)` | BOM is recursive |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_Class` | | ✓ | | | | |

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
