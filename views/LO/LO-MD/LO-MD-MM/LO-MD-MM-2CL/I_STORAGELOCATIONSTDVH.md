---
name: I_STORAGELOCATIONSTDVH
description: "Storagelocationstdvh"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_STORAGELOCATIONSTDVH

**Storagelocationstdvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `StorageLocation` | ✓ | |  |  |  |  |
| `StorageLocationName` |  | |  |  |  |  |
| `ConfigDeprecationCode` |  | |  |  |  |  |
| `PlantName` |  | | `_Plant` | `PlantName` |  |  |
| `SalesOrganization` |  | | `_Plant` | `SalesOrganization` |  |  |
| `CompanyCode` |  | | `_Plant._ValuationArea` | `CompanyCode` |  |  |
| `_ConfigDeprecationCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfigDeprecationCode` | `I_ConfignDeprecationCode` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
                sqlViewName: 'ISTORAGELOCSTDVH',
                preserveKey: true,
                compiler.compareFilter: true,
                dataMaintenance: #RESTRICTED
              }
@EndUserText.label: 'Storage Location'
@ObjectModel: {
                usageType:{
                            sizeCategory: #S,
                            serviceQuality: #B,
                            dataClass: #CUSTOMIZING
                          },
                dataCategory: #VALUE_HELP,
                modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'StorageLocation',
                supportedCapabilities: [#VALUE_HELP_PROVIDER,#ANALYTICAL_DIMENSION] //PAT2
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Search.searchable: true
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: {
                  authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED
                }
@Consumption.ranked: true

define view I_StorageLocationStdVH
  as select from I_StorageLocation
  association [1..1] to I_ConfignDeprecationCode as _ConfigDeprecationCode on  $projection.ConfigDeprecationCode                   =  _ConfigDeprecationCode.ConfigurationDeprecationCode
                                                                           and _ConfigDeprecationCode.ConfigurationDeprecationCode <> 'E'
{
      @ObjectModel.text.element: ['PlantName']
      @ObjectModel.foreignKey.association: '_Plant'
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Consumption.valueHelpDefinition: [
        {
          entity:
            { name: 'I_PlantStdVH',
              element: 'Plant'
            }
        }
        ]
      @UI.lineItem:[{position:30}]
      @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key Plant,

      @ObjectModel.text.element: ['StorageLocationName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @UI.lineItem:[{position:10}]
      @Consumption.valueHelpDefault.binding.usage: #FILTER_AND_RESULT
  key StorageLocation,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI.lineItem:[{position:20}]
      StorageLocationName,

      @Consumption.valueHelpDefinition: [
        {
          entity:
            { name: 'I_ConfignDeprecationCode',
              element: 'ConfigurationDeprecationCode'                 // old GFN
            }
        }
        ]
      @ObjectModel.text.element: [ 'ConfignDeprecationCodeName' ]
      ConfigDeprecationCode,
      _ConfigDeprecationCode._Text[1:Language=$session.system_language].ConfignDeprecationCodeName,
      _Plant.PlantName,
      _Plant.SalesOrganization,
      _Plant._ValuationArea.CompanyCode,
      
      /* Associations */
      @Consumption.hidden: true
      _Plant,
      _ConfigDeprecationCode
}
where
  ConfigDeprecationCode <> 'E'
```
