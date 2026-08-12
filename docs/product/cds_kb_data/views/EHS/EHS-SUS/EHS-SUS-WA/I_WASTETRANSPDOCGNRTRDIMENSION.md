---
name: I_WASTETRANSPDOCGNRTRDIMENSION
description: "Waste Analytics Transp Doc Gnrtr Dimn"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value
semantic_en: "Waste Analytics Transp Doc Gnrtr Dimn"
semantic_vi: "Waste Analytics Transp Doc Gnrtr Dimn — CDS view giao diện dựa trên I_EnvironmentWasteLocation."
keywords:
  - "waste"
  - "analytics"
  - "transp"
  - "doc"
  - "gnrtr"
  - "dimn"
  - "envrmt"
  - "name"
  - "country"
  - "location"
  - "type"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTETRANSPDOCGNRTRDIMENSION

**Waste Analytics Transp Doc Gnrtr Dimn**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteGnrtrID` | ✓ | |  | `cast( EHSLocationID as ehewa_waste_generator_id preserving type )` | `CHAR(20)` | Waste Generator ID |
| `EnvrmtWasteGnrtrUUID` |  | |  | `EHSLocationUUID` | `RAW(16)` | Location |
| `EnvrmtWasteGnrtrName` |  | | `_LocTextDesc` | `EHSLocationName` | `CHAR(60)` |  |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `EHSLocationType` |  | |  |  | `CHAR(21)` | Location Type |
| `EHSLocationStatus` |  | |  |  | `CHAR(2)` | Location Status |
| `EHSLocationAuthorizationGroup` |  | |  | `cast(EHSLocationAuthorizationGroup as ehfnd_loc_auth_group_nc preserving type )` | `CHAR(21)` | Location Authorization Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocTextDesc` | `I_LocationDescFallbackLang` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCGNRTRDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTTDGRD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EnvrmtWasteGnrtrID'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Analytics Transp Doc Gnrtr Dimn'
define view I_WasteTranspDocGnrtrDimension as select from I_EnvironmentWasteLocation 
  association [1..1] to I_LocationDescFallbackLang     as _LocTextDesc on  $projection.EnvrmtWasteGnrtrUUID = _LocTextDesc.EHSLocationUUID
{
  @ObjectModel.text.element: [ 'EnvrmtWasteGnrtrName' ]
  key cast( EHSLocationID as ehewa_waste_generator_id preserving type ) as EnvrmtWasteGnrtrID,
  
  EHSLocationUUID as EnvrmtWasteGnrtrUUID,
  
  @Semantics.text: true
  @EndUserText.label: 'Waste Generator Name'
  _LocTextDesc.EHSLocationName as EnvrmtWasteGnrtrName,
  
  Country,
  
  /*DCL*/
  EHSLocationType,
  EHSLocationStatus,
  cast(EHSLocationAuthorizationGroup  as ehfnd_loc_auth_group_nc preserving type ) as EHSLocationAuthorizationGroup,
  Plant,
  CostCenter,
  CompanyCode,
  BusinessArea

  
} 
//where EHSLocationID is not initial
```
