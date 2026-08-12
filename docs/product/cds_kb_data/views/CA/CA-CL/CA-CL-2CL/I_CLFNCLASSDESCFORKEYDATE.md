---
name: I_CLFNCLASSDESCFORKEYDATE
description: "Clfnclassdescforkeydate"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
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
# I_CLFNCLASSDESCFORKEYDATE

**Clfnclassdescforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClassInternalID` | ✓ | |  |  | `NUMC(10)` | Internal Class Number |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `ClassDescription` |  | |  |  | `CHAR(40)` | Class Description |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClassForKeyDate` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLS13'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Description of Clfn Class for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ClassInternalID'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
// Although we know that class description is a time independent data,
// this view was introduced to be able to cut time dependent business layer
// completely from time independent one. (Plus P_KeyDate is used in DCL.)
define view I_ClfnClassDescForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate :sydate
  as select from I_ClfnClassDescription 
     association [1..1] to I_ClfnClassForKeyDate as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID 
 {        
  key ClassInternalID, 
      @Semantics.language: true
  key Language, 
      @Semantics.text: true
      ClassDescription,
      
      _Class
 }
```
