---
name: I_SERIALNOEXPLICITNESSLEVELTXT
description: "Serialnoexplicitnessleveltxt"
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNOEXPLICITNESSLEVELTXT

**Serialnoexplicitnessleveltxt**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SerialNoExplicitnessLevel` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as serlv preserving type )` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `SerialNoExplicitnessLevelText` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as val_text preserving type )` |  |  |
| `_SerialNoExplicitnessLevel` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SerialNoExplicitnessLevel` | `I_SerialNoExplicitnessLevel` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Lvl of Explicitness for Serial No - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { 
              internalName: #LOCAL,
              technicalName: 'ISERNOEXPLLVLTXT'
            } 
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { 
                dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
                representativeKey: 'SerialNoExplicitnessLevel',
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'SerialNumberExplicitnessLevel', 
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY,
                                        #SQL_DATA_SOURCE],
                usageType: { 
                             dataClass: #META, 
                             serviceQuality: #A, 
                             sizeCategory: #S 
                           }
              }
@Search.searchable: true
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC 
      }
      
 /*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] } */
define view entity I_SerialNoExplicitnessLevelTxt 
  as select from dd07t
   
  association [0..1] to I_SerialNoExplicitnessLevel  as _SerialNoExplicitnessLevel on $projection.SerialNoExplicitnessLevel = _SerialNoExplicitnessLevel.SerialNoExplicitnessLevel
  association [0..1] to I_Language                   as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SerialNoExplicitnessLevel'
  key cast(substring(domvalue_l, 1, 1) as serlv preserving type )      as SerialNoExplicitnessLevel,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)        as Language,

      @Search.ranking: #LOW
      @Semantics.text: true
      @Search.defaultSearchElement: true
      cast ( substring ( ddtext, 1, 60 ) as val_text preserving type ) as SerialNoExplicitnessLevelText,

      _SerialNoExplicitnessLevel,
      _Language

}
where domname  = 'SERLV'
  and as4local = 'A'
  and as4vers  = '0000';
```
