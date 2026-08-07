---
name: I_MATERIALSUBSTITUTIONREASONT
description: Materialsubstitutionreasont
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - material
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_MATERIALSUBSTITUTIONREASONT

**Materialsubstitutionreasont**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialSubstitutionReason` | ✓ | |  | `sugrd` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialSubstitutionReasonName` |  | |  | `vtext` |  |  |
| `_MaterialSubstitutionReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialSubstitutionReason` | `I_MaterialSubstitutionReason` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaterialSubstitutionReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Material Substitution Reason - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDMATLSUBSTRSNT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true

define view I_MaterialSubstitutionReasonT
as
select from tvsut
association[0..1] to I_MaterialSubstitutionReason as _MaterialSubstitutionReason on $projection.MaterialSubstitutionReason = _MaterialSubstitutionReason.MaterialSubstitutionReason
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
    key sugrd as MaterialSubstitutionReason,
    
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text:true
    vtext as MaterialSubstitutionReasonName,
    
    _MaterialSubstitutionReason,
    _Language
}
```
