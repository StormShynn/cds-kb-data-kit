---
name: I_CLFNCLASSCHARACTERISTICDEX
description: "Clfnclasscharacteristicdex"
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
# I_CLFNCLASSCHARACTERISTICDEX

**Clfnclasscharacteristicdex**

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
| `CharcPositionNumber` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `TimeIntervalNumber` |  | |  |  |  |  |
| `CharcInternalID` |  | |  |  |  |  |
| `OverwrittenCharcInternalID` |  | |  |  |  |  |
| `ClfnOrganizationalArea` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `CharcOriginText` |  | |  |  |  |  |
| `CharcIsProposalRelevant` |  | |  |  |  |  |
| `CharcIsPrptnOrProdUnitRelevant` |  | |  |  |  |  |
| `CharcIsPrintRelevant` |  | |  |  |  |  |
| `CharcIsSearchRelevant` |  | |  |  |  |  |
| `CharcIsDisplayRelevant` |  | |  |  |  |  |
| `_Class` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClassDEX` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.alternativeKey: ['ClassInternalID','CharcPositionNumber','TimeIntervalNumber']
@Analytics.dataExtraction.delta.changeDataCapture.automatic
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@EndUserText.label: 'Characteristic of Clfn Class  DEX'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcPositionNumber'
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_DATA_SOURCE,   
     #CDS_MODELING_ASSOCIATION_TARGET,
     #ANALYTICAL_DIMENSION,
     #EXTRACTION_DATA_SOURCE,  
     #SQL_DATA_SOURCE ]
@ObjectModel.usageType.dataClass: #MASTER   
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'ClfnClassCharacteristic'   
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_ClfnClassCharacteristicDEX
  as select from I_ClfnClassCharcBasic as ClassCharc

    association [0..1] to I_ClfnClassDEX as _Class
        on $projection.ClassInternalID = _Class.ClassInternalID
               
{     @ObjectModel.foreignKey.association: '_Class'
  key ClassCharc.ClassInternalID,
  key ClassCharc.CharcPositionNumber,
      @Semantics.businessDate.to: true
  key ClassCharc.ValidityEndDate,
      ClassCharc.TimeIntervalNumber,  
      ClassCharc.CharcInternalID,
      ClassCharc.OverwrittenCharcInternalID,
      ClassCharc.ClfnOrganizationalArea,
      ClassCharc.ClassType,
      ClassCharc.ChangeNumber,
      @Semantics.businessDate.from: true
      ClassCharc.ValidityStartDate,      
      ClassCharc.IsDeleted, 
      ClassCharc.CharcOriginText,
      ClassCharc.CharcIsProposalRelevant,
      ClassCharc.CharcIsPrptnOrProdUnitRelevant,
      ClassCharc.CharcIsPrintRelevant, 
      ClassCharc.CharcIsSearchRelevant, 
      ClassCharc.CharcIsDisplayRelevant,

      _Class
}
```
