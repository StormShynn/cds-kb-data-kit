---
name: D_EQUIPCRTEMASSMATLSRLNMBRP
description: D Equipcrtemassmatlsrlnmbrp
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_EQUIPCRTEMASSMATLSRLNMBRP

**D Equipcrtemassmatlsrlnmbrp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `matnr` | `}] Material : matnr` |
| `EquipmentCategory` | `eqtyp` |
| `UniqueItemIdentifierRespPlant` | `uii_plant` |
| `EquipMaterialLastSerialNumber` | `lsernr` |
| `EquipmentNumberOfSerialNumbers` | `anzser` |
| `EquipmentFromSerialNumber` | `servon` |
| `EquipmentToSerialNumber` | `serbis` |
| `D_EquipCreateSerialNumberListP` | `_SerialList : composition [0..*] of D_EquipCreateSerialNumberListP` |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Abstract Parameter for Mass Create'
@Search.searchable: true
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_EquipCrteMassMatlSrlNmbrP
{
 
  @Search                                 : { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 }
  // @Consumption.valueHelpDefinition        : [ { entity :  { name  : 'I_EquipMatlLastSerialNumber', element : 'Material' }}]
  
  @Consumption.valueHelpDefinition        : [ { entity :  { name  : 'C_SerMatItmLastSerialNumberVH', element : 'Material' },
                        additionalBinding : [ { localElement: 'EquipMaterialLastSerialNumber',
                        element: 'EquipMaterialLastSerialNumber' , usage: #RESULT }]
                       // useForValidation  : true
                         }]
  
  Material                                : matnr;
  
  @Consumption.valueHelpDefinition        : [ { entity :  { name:    'I_EquipmentCategoryStdVH', element : 'EquipmentCategory' } }]
  @EndUserText.label                      : 'Category' 
  EquipmentCategory                       : eqtyp;
  @UI.hidden:true
  @EndUserText.label                      : 'Responsible Plant UII' 
  UniqueItemIdentifierRespPlant           : uii_plant;
//  @Consumption.valueHelpDefinition        : [ { entity :  { name  : 'C_SerMatItmLastSerialNumberVH', element : 'Material'}
// }]
  @EndUserText.label                      : 'Last Serial Number' 
  EquipMaterialLastSerialNumber           : lsernr;
  
  @EndUserText.label                      : 'Number of Serial Numbers' 
  EquipmentNumberOfSerialNumbers          : anzser;
  
  @EndUserText.label                      : 'From Serial Number' 
  EquipmentFromSerialNumber               : servon;
  
  @EndUserText.label                      : 'To Serial Number' 
  EquipmentToSerialNumber                 : serbis;
  //@Consumption.hidden: true
  _SerialList                             : composition [0..*] of D_EquipCreateSerialNumberListP;


}
```
