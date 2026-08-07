---
name: I_STATISTICALKEYFIGURE
description: Statisticalkeyfigure
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_STATISTICALKEYFIGURE

**Statisticalkeyfigure**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatisticalKeyFigure` | ✓ | |  | `cast(stagr as fis_stagr preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast(kokrs as fis_kokrs preserving type )` |  |  |
| `StstcKeyFigQuantityUnit` |  | |  | `msehi` |  |  |
| `StstcKeyFigCategory` |  | |  | `grtyp` |  |  |
| `StstclKeyFigCreatedAtDateTime` |  | |  | `created_on` |  |  |
| `StstclKeyFigLastChgdAtDteTme` |  | |  | `last_changed_on` |  |  |
| `StstclKeyFigureCreatedByUser` |  | |  | `created_by` |  |  |
| `StstclKeyFigLastChangedByUser` |  | |  | `last_changed_by` |  |  |
| `StstclKeyFigureOrigin` |  | |  | `hktyp` |  |  |
| `LogsInformationSystemTable` |  | |  | `struct` |  |  |
| `LogsInfoSystemKeyFigure` |  | |  | `kennz` |  |  |
| `StstclKeyFigureIsCurrency` |  | |  | `w_flag` |  |  |
| `StstclKeyFigProcgPlndValType` |  | |  | `m_plan` |  |  |
| `StstclKeyFigProcgActlValType` |  | |  | `m_ist` |  |  |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_StatisticalKeyFigureCat` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_StstclKeyFigureHierNode` | | ✓ | | | | |
| `_UserCrtedContactCard` | | ✓ | | | | |
| `_LastChangedByUserContactCard` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_StatisticalKeyFigureText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_StatisticalKeyFigureCat` | `I_StatisticalKeyFigureCat` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_StstclKeyFigureHierNode` | `I_StstclKeyFigureHierNode` | [0..*] |
| `_UserCrtedContactCard` | `I_UserContactCard` | [0..1] |
| `_LastChangedByUserContactCard` | `I_UserContactCard` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'StatisticalKeyFigure' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Statistical Key Figure'
@AbapCatalog.sqlViewName: 'IFISTSTCKEYFIG'
@ObjectModel.sapObjectNodeType.name: 'StatisticalKeyFigure'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_StatisticalKeyFigure as select from tka03 
association [0..*] to I_StatisticalKeyFigureText as _Text 
   on $projection.ControllingArea       = _Text.ControllingArea 
  and $projection.StatisticalKeyFigure  = _Text.StatisticalKeyFigure
  
association[0..1] to I_ControllingArea as _ControllingArea 
   on $projection.ControllingArea = _ControllingArea.ControllingArea
   
association [0..1] to I_StatisticalKeyFigureCat as _StatisticalKeyFigureCat
  on  $projection.StstcKeyFigCategory  = _StatisticalKeyFigureCat.StstcKeyFigCategory

association [0..1] to I_UnitOfMeasure as _UnitOfMeasure
  on  $projection.StstcKeyFigQuantityUnit      = _UnitOfMeasure.UnitOfMeasure

association [0..*] to I_StstclKeyFigureHierNode  as _StstclKeyFigureHierNode on $projection.ControllingArea = _StstclKeyFigureHierNode.ControllingArea
                                                                            and $projection.StatisticalKeyFigure = _StstclKeyFigureHierNode.StatisticalKeyFigure 
                                                                            
association [0..1] to I_UserContactCard          as _UserCrtedContactCard   on  $projection.StstclKeyFigureCreatedByUser = _UserCrtedContactCard.ContactCardID

association [0..1] to I_UserContactCard          as _LastChangedByUserContactCard on  $projection.StstclKeyFigLastChangedByUser = _LastChangedByUserContactCard.ContactCardID
{
@ObjectModel.hierarchy.association: '_StstclKeyFigureHierNode'
@ObjectModel.text.association: '_Text'
    key cast(stagr as fis_stagr preserving type ) as StatisticalKeyFigure,
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
    key cast(kokrs as fis_kokrs preserving type ) as ControllingArea,
@ObjectModel.foreignKey.association: '_UnitOfMeasure'
    msehi as StstcKeyFigQuantityUnit,
@ObjectModel.foreignKey.association: '_StatisticalKeyFigureCat'
    grtyp as StstcKeyFigCategory,
    
@Semantics.systemDateTime.createdAt: true
    created_on as StstclKeyFigCreatedAtDateTime,
@Semantics.systemDateTime.lastChangedAt: true    
    last_changed_on as StstclKeyFigLastChgdAtDteTme,
@ObjectModel.foreignKey.association: '_UserCrtedContactCard'  
@Semantics.user.createdBy: true
    created_by as StstclKeyFigureCreatedByUser,
@ObjectModel.foreignKey.association: '_LastChangedByUserContactCard'
@Semantics.user.lastChangedBy: true
    last_changed_by as StstclKeyFigLastChangedByUser,
    
    hktyp   as StstclKeyFigureOrigin,
    
    struct  as LogsInformationSystemTable,
    
    kennz   as LogsInfoSystemKeyFigure,
    
    w_flag  as StstclKeyFigureIsCurrency,
     
    m_plan  as StstclKeyFigProcgPlndValType,
    
    m_ist   as StstclKeyFigProcgActlValType,
        
    _Text,
    _ControllingArea,
    _StatisticalKeyFigureCat,
    _UnitOfMeasure,
    _StstclKeyFigureHierNode,
    _UserCrtedContactCard,
    _LastChangedByUserContactCard
}
```
