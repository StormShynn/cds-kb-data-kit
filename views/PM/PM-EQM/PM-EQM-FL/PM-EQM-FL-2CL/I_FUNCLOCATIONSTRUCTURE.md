---
name: I_FUNCLOCATIONSTRUCTURE
description: Funclocationstructure
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCLOCATIONSTRUCTURE

**Funclocationstructure**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FuncLocationStructure` | `t370s.tplkz` |
| `FuncLocationStructureEditMask` | `t370s.editm` |
| `FuncLocationStrucHierLevels` | `t370s.stufm` |
| `FuncLocStrucIdentifyingLevel` | `t370s.level_kz` |
| `FuncLocStruc2ndIdentifyingLvl` | `t370s.level_kz2` |
| `FuncnlLocationStructureCodeOID` | `cast( t370s.tplkz as funclocationstructure_oid )` |
| `_FuncLocationStructureText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FuncLocationStructureText` | `I_FuncLocationStructureText` | [0..*] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Functional Location Structure'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFLOCSTRUCTURE'
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'FuncLocationStructure'

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations
@ObjectModel.alternativeKey:[{id:'OID',element:['FuncLocationStructureCodeOID']}] 
//@ObjectModel.sapObjectNodeType.name:'FuncLocationStructureCode' 
@ObjectModel.objectIdentifier.oidElement:'FuncnlLocationStructureCodeOID' 


define view I_FuncLocationStructure
  as select from t370s  
  association [0..*] to I_FuncLocationStructureText as _FuncLocationStructureText on _FuncLocationStructureText.FuncLocationStructure = $projection.FuncLocationStructure
{
      @ObjectModel.text.association: '_Funclocationstructuretext'
  key t370s.tplkz     as FuncLocationStructure,
      t370s.editm     as FuncLocationStructureEditMask,
      t370s.stufm     as FuncLocationStrucHierLevels,
      t370s.level_kz  as FuncLocStrucIdentifyingLevel,
      t370s.level_kz2 as FuncLocStruc2ndIdentifyingLvl,
      
      
      cast( t370s.tplkz as funclocationstructure_oid ) as FuncnlLocationStructureCodeOID, //use your own OID field name
            
      
      _FuncLocationStructureText

}
```
