---
name: I_EQUIPMENTTEXTDEX
description: "Equipmenttextdex"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - data-extraction
  - equipment
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTTEXTDEX

**Equipmenttextdex**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  | `equnr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `EquipmentName` |  | |  | `eqktx` |  |  |
| `IsPrimaryLanguage` |  | |  | `txasp` |  |  |
| `EquipmentHasLongText` |  | |  | `kzltx` |  |  |
| `LastChangeDateTime` |  | |  | `textchangeddatetime` |  |  |
| `ValidityStartDate` |  | | `_Equipment` | `CreationDate` |  |  |
| `ValidityEndDate` |  | |  | `cast( '99991231' as datbi )` |  |  |
| `_Equipment` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Equipment` | `I_Equipment` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_EquipmentExtension` | `E_Equipment` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Equipment - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog: { sqlViewName: 'IEQUIPMENTTEXTDX', compiler.compareFilter, preserveKey }
@AccessControl.authorizationCheck:#MANDATORY
@ObjectModel.representativeKey: 'Equipment'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Analytics: {
    dataExtraction: { 
        enabled: true,
        delta.changeDataCapture: {
          mapping: [
            { 
              table: 'eqkt', role: #MAIN,
              viewElement: ['Equipment', 'Language'],
              tableElement: ['EQUNR', 'SPRAS' ]

            },
            {
              table: 'equi', role: #LEFT_OUTER_TO_ONE_JOIN,                   
              viewElement: ['Equipment'],
              tableElement: ['EQUNR'] 
              
            }
          ]
        }
    }
}

define view I_EquipmentTextDEX
  as select from eqkt // EQKT = Equipment Short Texts
  association [0..1] to I_Equipment as _Equipment on _Equipment.Equipment = $projection.Equipment
  association [0..1] to I_Language  as _Language  on _Language.Language = $projection.Language
  -- Extensions, do not expose as association:
  association [0..1] to E_Equipment as _EquipmentExtension on _EquipmentExtension.Equipment = $projection.Equipment
{
      @ObjectModel.foreignKey.association: '_Equipment'
  key eqkt.equnr as Equipment,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key eqkt.spras as Language,

      @Semantics.text: true
      @EndUserText.label: 'Description'
      eqkt.eqktx as EquipmentName,

      @Semantics.booleanIndicator: true
      eqkt.txasp as IsPrimaryLanguage,

      eqkt.kzltx as EquipmentHasLongText,
      
      @Semantics.systemDateTime.lastChangedAt: true
      eqkt.textchangeddatetime as LastChangeDateTime,
      
      @Semantics.businessDate.from: true
      _Equipment.CreationDate as ValidityStartDate,
      
      @Semantics.businessDate.to: true
       cast( '99991231' as datbi ) as ValidityEndDate,
    

      // Propagate association
      _Equipment,
      _Language
}
```
