---
name: I_CLFNCHARCRESTRICTIONDEX
description: Clfncharcrestrictiondex
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
  - data-extraction
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCRESTRICTIONDEX

**Clfncharcrestrictiondex**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  |  |
| `ClassType` | ✓ | |  |  |
| `_ClassType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClassType` | `I_ClfnClassTypeBasic` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled
@Analytics.dataExtraction.delta.changeDataCapture.automatic
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Restriction of Clfn Characteristic'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcInternalID'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #ANALYTICAL_DIMENSION,
     #EXTRACTION_DATA_SOURCE,     
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClfnCharacteristicRestriction' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnCharcRestrictionDEX
  as select from I_ClfnCharcRestriction as CharcRestriction

      association [1..1] to I_ClfnClassTypeBasic as _ClassType 
        on  _ClassType.ClassType = $projection.ClassType
        
{
  key CharcRestriction.CharcInternalID,
      @ObjectModel.foreignKey.association: '_ClassType'
  key CharcRestriction.ClassType,
  
      _ClassType
}
```
