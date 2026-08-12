---
name: I_MAINTENANCEPACKAGETEXT
description: "Maintenancepackagetext"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - text-view
  - text
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPACKAGETEXT

**Maintenancepackagetext**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `MaintenanceStrategy` | ✓ | |  | `strat` |  |  |
| `MaintenancePackage` | ✓ | |  | `paket` |  |  |
| `MaintenancePackageText` |  | |  | `ktex1` |  |  |
| `MaintPackageHierarchyShortText` |  | |  | `ktxhi` |  |  |
| `MaintenanceCycleShortText` |  | |  | `kzyk1` |  |  |
| `StartOffsetShortText` |  | |  | `koff1` |  |  |
| `_MaintenanceStrategy` | | ✓ | | | | |
| `_MaintenancePackage` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceStrategy` | `I_MaintenanceStrategy` | [0..1] |
| `_MaintenancePackage` | `I_MaintenancePackage` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMNTPCKGTXT'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Package - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaintenancePackage'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
define view I_MaintenancePackageText
  as select from t351x
  
  association [0..1] to I_MaintenanceStrategy as _MaintenanceStrategy on  _MaintenanceStrategy.MaintenanceStrategy = $projection.MaintenanceStrategy
  
  association [0..1] to I_MaintenancePackage  as _MaintenancePackage  on  _MaintenancePackage.MaintenanceStrategy = $projection.MaintenanceStrategy
                                                                      and _MaintenancePackage.MaintenancePackage  = $projection.MaintenancePackage
  
  association [0..1] to I_Language            as _Language            on  _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,

      @ObjectModel.foreignKey.association: '_MaintenanceStrategy'
  key strat as MaintenanceStrategy,

      @ObjectModel.foreignKey.association: '_MaintenancePackage'
  key paket as MaintenancePackage,

      @Semantics.text: true
      ktex1 as MaintenancePackageText,
      
      @Semantics.text: true
      ktxhi as MaintPackageHierarchyShortText,

      @Semantics.text: true
      kzyk1 as MaintenanceCycleShortText,
      
      @Semantics.text: true
      koff1 as StartOffsetShortText,

      /* Associations - locally defined */
      _Language,
      _MaintenancePackage,
      _MaintenanceStrategy
}
```
