---
name: I_STORAGELOCATION
description: "Storagelocation"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_STORAGELOCATION

**Storagelocation**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `StorageLocation` | ✓ | |  | `lgort` |  |  |
| `StorageLocationName` |  | |  | `cast(lgobe as lgort_name)` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `IsStorLocAuthznCheckActive` |  | |  | `xblgo` |  |  |
| `HandlingUnitIsRequired` |  | |  | `xhupf` |  |  |
| `ConfigDeprecationCode` |  | |  | `configdeprecationcode` |  |  |
| `_Plant` | | ✓ | | | | |
| `_ConfignDeprecationCode` | | ✓ | | | | |
| `_ConfignDeprecationCodeText` | | ✓ | | | | |
| `_SalesOrganizationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_ConfignDeprecationCode` | `I_ConfignDeprecationCode` | [1..1] |
| `_ConfignDeprecationCodeText` | `I_ConfignDeprecationCodeText` | [0..*] |
| `_SalesOrganizationText` | `I_SalesOrganizationText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
                sqlViewName: 'ISTORAGELOCATION',
                preserveKey: true,
                compiler.compareFilter: true
              }
@EndUserText.label: 'Storage Location'
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'StorageLocation',
                sapObjectNodeType: {
                                     name: 'StorageLocation'
                                   },
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@AccessControl: {
                  authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED
                }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: {
              dataCategory: #DIMENSION,
              dataExtraction.enabled: true
            }
@Search.searchable: true
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view I_StorageLocation
  as select from t001l
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
  association [1..1] to I_ConfignDeprecationCode  as _ConfignDeprecationCode on $projection.ConfigDeprecationCode = _ConfignDeprecationCode.ConfigurationDeprecationCode   
  association [0..*] to I_ConfignDeprecationCodeText     as _ConfignDeprecationCodeText      on  $projection.ConfigDeprecationCode= _ConfignDeprecationCodeText.DomainValue 
  association [0..*] to I_SalesOrganizationText          as _SalesOrganizationText           on  $projection.SalesOrganization = _SalesOrganizationText.SalesOrganization                                                                         
{
      @ObjectModel.foreignKey.association: '_Plant'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
  key werks                     as Plant,
      @ObjectModel.text.element: 'StorageLocationName'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key lgort                     as StorageLocation,
      @Semantics.text: true
      cast(lgobe as lgort_name) as StorageLocationName,
      @Consumption.valueHelpDefinition: [{ entity:  { name:    'I_SalesOrganizationStdVH', element: 'SalesOrganization' }, useAsTemplate: true    }]
//      @ObjectModel.text.association: '_SalesOrganizationText'  
      vkorg                     as SalesOrganization,
      vtweg                     as DistributionChannel,
      spart                     as Division,
      xblgo                     as IsStorLocAuthznCheckActive,
      xhupf                     as HandlingUnitIsRequired,
      @ObjectModel.foreignKey.association: '_ConfignDeprecationCode'
//     @Consumption.valueHelpDefinition: [{ entity:  { name:    'I_ConfignDeprecationCode', element: 'ConfigurationDeprecationCode' }, useAsTemplate: true    }]
//      @ObjectModel.text.association: '_ConfignDeprecationCodeText'  
      configdeprecationcode     as ConfigDeprecationCode,
      _Plant,
      _ConfignDeprecationCode,
     _ConfignDeprecationCodeText,
     _SalesOrganizationText
      
}
```
