---
name: I_CLFNOBJECTCLASSDEX
description: "Clfnobjectclassdex"
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
# I_CLFNOBJECTCLASSDEX

**Clfnobjectclassdex**

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
| `ClfnObjectID` | ✓ | |  |  | `CHAR(90)` | Key of Object to be Classified |
| `ClassInternalID` | ✓ | |  |  | `NUMC(10)` | Internal Class Number |
| `ClassType` | ✓ | |  |  | `CHAR(3)` | Class Type |
| `ClfnObjectType` | ✓ | |  |  | `CHAR(1)` | Indicator: Object/Class |
| `TimeIntervalNumber` | ✓ | |  |  | `NUMC(4)` | Internal Counter for Archiving Objects by ECM |
| `ClfnObjectTable` |  | |  |  | `CHAR(30)` | Classification Object |
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
@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [ 
  { table: 'KSSK',
    role: #MAIN,
    tableElement: ['OBJEK','MAFID','KLART','CLINT','ADZHL'], 
    viewElement: ['ClfnObjectID','ClfnObjectType','ClassType','ClassInternalID','TimeIntervalNumber'] }, 
  { table: 'CLF_HDR', 
    role: #LEFT_OUTER_TO_ONE_JOIN, 
    tableElement: ['OBTAB','OBJEK','MAFID','KLART'], 
    viewElement: ['ClfnObjectTable','ClfnObjectID','ClfnObjectType','ClassType'] } ]
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Clfn Class Assignment of Object DEX'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'ClassificationObjectClass' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC  
define view entity I_ClfnObjectClassDEX
  as select from I_ClfnObjectClassBasic as ObjectClassBasic
    left outer to one join P_ClfnObjectHeader as ObjectHeader
      on  ObjectClassBasic.ClassType      = ObjectHeader.ClassType
      and ObjectClassBasic.ClfnObjectType = ObjectHeader.ClfnObjectType
      and ObjectClassBasic.ClfnObjectID   = ObjectHeader.objekp   

      association [1..1] to I_ClfnClass as _Class 
        on $projection.ClassInternalID = _Class.ClassInternalID   
{
  key ObjectHeader.ClfnObjectID,
  key ObjectClassBasic.ClassInternalID,
  key ObjectClassBasic.ClassType,
  key ObjectClassBasic.ClfnObjectType, 
  key ObjectClassBasic.TimeIntervalNumber,       
      ObjectHeader.ClfnObjectTable,
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
