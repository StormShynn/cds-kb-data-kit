---
name: I_CLFNOBJECTCLASSFORKEYDATE
description: "Clfnobjectclassforkeydate"
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
# I_CLFNOBJECTCLASSFORKEYDATE

**Clfnobjectclassforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClfnObjectID` | ✓ | |  |  |  |  |
| `ClfnObjectTable` | ✓ | |  |  |  |  |
| `ClassInternalID` | ✓ | |  |  |  |  |
| `ClassType` | ✓ | |  |  |  |  |
| `ClfnObjectInternalID` |  | |  |  |  |  |
| `ClfnStatus` |  | |  |  |  |  |
| `ClassPositionNumber` |  | |  |  |  |  |
| `ClassIsStandardClass` |  | |  |  |  |  |
| `BOMIsRecursive` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClassForKeyDate` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLFN10'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Clfn Class of Object for Key Date'
define view I_ClfnObjectClassForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnObjectClass as ObjectClass
      association [1..1] to I_ClfnClassForKeyDate as _Class 
        on $projection.ClassInternalID = _Class.ClassInternalID                    
{
  key ObjectClass.ClfnObjectID,
  key ObjectClass.ClfnObjectTable,
  key ObjectClass.ClassInternalID,
  key ObjectClass.ClassType,  
      ObjectClass.ClfnObjectInternalID,     
      ObjectClass.ClfnStatus,
      ObjectClass.ClassPositionNumber,
      ObjectClass.ClassIsStandardClass,
      ObjectClass.BOMIsRecursive,
      ObjectClass.ChangeNumber,
      @Semantics.businessDate.from: true
      ObjectClass.ValidityStartDate,
      @Semantics.businessDate.to: true
      ObjectClass.ValidityEndDate,
      ObjectClass.LastChangeDateTime,     
      
      _Class
}
  where ValidityStartDate <= $parameters.P_KeyDate
    and ValidityEndDate   >= $parameters.P_KeyDate
    and IsDeleted         = ''
```
