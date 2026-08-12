---
name: I_CHARCATTRIBSELECTEDSETCODE
description: "Charcattribselectedsetcode"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBSELECTEDSETCODE

**Charcattribselectedsetcode**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SelectedCodeSetPlant` | ✓ | |  | `werks` |  |  |
| `SelectedCodeSet` | ✓ | |  | `auswahlmge` |  |  |
| `CharacteristicAttributeCodeGrp` | ✓ | |  | `codegruppe` |  |  |
| `CharacteristicAttributeCode` | ✓ | |  | `code` |  |  |
| `CharcAttributeValuation` |  | |  | `bewertung` |  |  |
| `CodeIsInactive` |  | |  | `geloescht` |  |  |
| `DefectClass` |  | |  | `fehlklasse` |  |  |
| `CharcAttribSeldSetCodeCrtedBy` |  | |  | `ersteller` |  |  |
| `CharcAttribSeldSetCodeCrtedOn` |  | |  | `e_datum` |  |  |
| `CharcAttribSeldSetCodeChgdBy` |  | |  | `aenderer` |  |  |
| `CharcAttribSeldSetCodeChgdOn` |  | |  | `a_datum` |  |  |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |
| `_CharcAttributeCode` | | ✓ | | | | |
| `_CodeIsInactive` | | ✓ | | | | |
| `_CharcAttribSelectedCodeSet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [0..1] |
| `_CharcAttributeCode` | `I_CharcAttributeCode` | [0..1] |
| `_CodeIsInactive` | `I_Indicator` | [0..1] |
| `_CharcAttribSelectedCodeSet` | `I_CharcAttribSelectedCodeSet` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Selected Set Code for Charc Attribute'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CharcAttribSelectedSetCode as select from qpac 
   association [0..1] to I_CharcAttributeCodeGrp as _CharcAttributeCodeGrp
      on $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp
      
   association [0..1] to I_CharcAttributeCode as _CharcAttributeCode
      on  $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCode.CharacteristicAttributeCodeGrp
      and $projection.CharacteristicAttributeCode  = _CharcAttributeCode.CharacteristicAttributeCode
      
   association [0..1] to I_Indicator as _CodeIsInactive
      on $projection.CodeIsInactive = _CodeIsInactive.IndicatorValue

// Required for authority checks
   association [0..1] to I_CharcAttribSelectedCodeSet as _CharcAttribSelectedCodeSet
      on  $projection.SelectedCodeSetPlant = _CharcAttribSelectedCodeSet.SelectedCodeSetPlant
      and $projection.SelectedCodeSet      = _CharcAttribSelectedCodeSet.SelectedCodeSet

{
    key qpac.werks      as SelectedCodeSetPlant,
    //key katalogart as CharacteristicAttributeCatalog,
    key qpac.auswahlmge as SelectedCodeSet,
    key qpac.codegruppe as CharacteristicAttributeCodeGrp, 
    key qpac.code       as CharacteristicAttributeCode,
    //  key qpcd.version --> is always 1 so we could leave out   
    qpac.bewertung      as CharcAttributeValuation,
    qpac.geloescht      as CodeIsInactive,
    qpac.fehlklasse     as DefectClass,
    
    @Semantics.user.createdBy: true
    qpac.ersteller      as CharcAttribSeldSetCodeCrtedBy,
    @Semantics.businessDate.at: true
    qpac.e_datum        as CharcAttribSeldSetCodeCrtedOn,
    @Semantics.user.lastChangedBy: true
    qpac.aenderer       as CharcAttribSeldSetCodeChgdBy,
    @Semantics.businessDate.at: true
    qpac.a_datum        as CharcAttribSeldSetCodeChgdOn,
        
    /* Associations */
    _CharcAttributeCodeGrp,
    _CharcAttributeCode,
    _CodeIsInactive,
    _CharcAttribSelectedCodeSet
}
where katalogart = '1' and qpac.versionam = '000001'
```
