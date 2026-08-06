---
name: I_CLFNCLASSKEYWORDFORKEYDATE
description: Clfnclasskeywordforkeydate
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
# I_CLFNCLASSKEYWORDFORKEYDATE

**Clfnclasskeywordforkeydate**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ClassInternalID` | `ClassKeyword.ClassInternalID` |
| key `Language` | `ClassKeyword.Language` |
| key `ClassKeywordPositionNumber` | `ClassKeyword.ClassKeywordPositionNumber` |
| `ClassKeywordText` | `ClassKeyword.ClassKeywordText` |
| `_Class` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClassForKeyDate` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLS14'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Keyword of Clfn Class for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ClassKeywordPositionNumber'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
// Although we know that class keyword is a time independent data,
// this view was introduced to be able to cut time dependent business layer
// completely from time independent one. (Plus P_KeyDate is used in DCL.)
define view I_ClfnClassKeywordForKeyDate 
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate :sydate
  as select from I_ClfnClassKeyword as ClassKeyword
      association [1..1] to I_ClfnClassForKeyDate as _Class 
        on $projection.ClassInternalID = _Class.ClassInternalID         
{
      @ObjectModel.foreignKey.association: '_Class'
  key ClassKeyword.ClassInternalID,
      @Semantics.language: true
  key ClassKeyword.Language,
  key ClassKeyword.ClassKeywordPositionNumber,
      @Semantics.text: true
      ClassKeyword.ClassKeywordText,

      _Language,
      _Class
}
```
