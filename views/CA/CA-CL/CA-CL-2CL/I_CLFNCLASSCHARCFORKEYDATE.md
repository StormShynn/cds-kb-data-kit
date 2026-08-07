---
name: I_CLFNCLASSCHARCFORKEYDATE
description: Clfnclasscharcforkeydate
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
# I_CLFNCLASSCHARCFORKEYDATE

**Clfnclasscharcforkeydate**

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
| `CharcInternalID` | ✓ | |  |  |
| `CharcPositionNumber` |  | |  |  |
| `Characteristic` |  | |  |  |
| `AncestorClassInternalID` |  | |  |  |
| `ClassType` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `CharcIsPrintRelevant` |  | |  |  |
| `CharcIsSearchRelevant` |  | |  |  |
| `CharcIsDisplayRelevant` |  | |  |  |
| `CharcIsProposalRelevant` |  | |  |  |
| `CharcIsPrptnOrProdUnitRelevant` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `_Class` | | ✓ | | |
| `_Characteristic` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClassForKeyDate` | [1..1] |
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'INGCCLS8'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Charc of Clfn Class for Key Date'
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ClfnClassCharcForKeyDate
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_ClfnClassHierCharcForKeyDate( P_KeyDate : $parameters.P_KeyDate )      
      association [1..1] to I_ClfnClassForKeyDate as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID 
      association [1..1] to I_ClfnCharacteristicForKeyDate as _Characteristic
        on $projection.CharcInternalID = _Characteristic.CharcInternalID 
{
  //currently no information is returned about overwritten characteristics in this level
  
  //filtering out not valid characteristics happens in I_ClfnClassHierCharcForKeyDate
  //via extending the where condition 
  
      @ObjectModel.foreignKey.association: '_Class'
  key ClassInternalID, 
  key CharcInternalID, 
  CharcPositionNumber, 
  Characteristic,
  AncestorClassInternalID, 
  ClassType,
  ChangeNumber, 
  CharcIsPrintRelevant, 
  CharcIsSearchRelevant, 
  CharcIsDisplayRelevant, 
  CharcIsProposalRelevant,
  CharcIsPrptnOrProdUnitRelevant,
  ValidityStartDate, 
  ValidityEndDate, 
  
  _Class,
  _Characteristic
}
```
