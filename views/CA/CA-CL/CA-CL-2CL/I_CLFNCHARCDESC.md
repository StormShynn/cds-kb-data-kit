---
name: I_CLFNCHARCDESC
description: "Clfncharcdesc"
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
# I_CLFNCHARCDESC

**Clfncharcdesc**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcInternalID` | ✓ | |  | `cast ( CharcDesc.atinn as atinn_no_conv preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TimeIntervalNumber` | ✓ | |  | `adzhl` |  |  |
| `CharcDescription` |  | |  | `cast ( CharcDesc.atbez as charcdescription preserving type )` |  |  |
| `ChangeNumber` |  | |  | `aennr` |  |  |
| `ValidityStartDate` |  | |  | `datuv` |  |  |
| `ValidityEndDate` |  | |  | `datub` |  |  |
| `IsDeleted` |  | |  | `lkenz` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'INGCCHR19'
@AccessControl.authorizationCheck: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Description of Clfn Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnCharcDesc
  as select from cabnt as CharcDesc
  
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language   
      
{
  key cast ( CharcDesc.atinn as atinn_no_conv preserving type ) as CharcInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharcDesc.spras as Language,
      @ObjectModel.foreignKey.association: null
  key CharcDesc.adzhl as TimeIntervalNumber,
      @Semantics.text: true
      cast ( CharcDesc.atbez as charcdescription preserving type ) as CharcDescription,
      CharcDesc.aennr as ChangeNumber,
      @Semantics.businessDate.from: true
      CharcDesc.datuv as ValidityStartDate,
      @Semantics.businessDate.to: true
      CharcDesc.datub as ValidityEndDate,
      CharcDesc.lkenz as IsDeleted,
      
      _Language
}
```
