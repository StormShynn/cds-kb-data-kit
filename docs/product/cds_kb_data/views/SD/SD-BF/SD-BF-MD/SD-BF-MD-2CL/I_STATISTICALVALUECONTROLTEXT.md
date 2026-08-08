---
name: I_STATISTICALVALUECONTROLTEXT
description: "Statisticalvaluecontroltext"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - text-view
  - text
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_STATISTICALVALUECONTROLTEXT

**Statisticalvaluecontroltext**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatisticalValueControl` | ✓ | |  | `SUBSTRING(domvalue_l, 1, 1)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `StatisticalValueControlName` |  | |  | `ddtext` |  |  |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatisticalValueControl` | `I_StatisticalValueControl` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Statistical Value Control - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'StatisticalValueControl'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSTATVALCTRT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE   ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_StatisticalValueControlText 
as select from  dd07t

association[0..1] to I_StatisticalValueControl as _StatisticalValueControl on $projection.StatisticalValueControl = _StatisticalValueControl.StatisticalValueControl
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_StatisticalValueControl'
    key SUBSTRING(domvalue_l, 1, 1) as StatisticalValueControl,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Semantics.text: true
    ddtext as StatisticalValueControlName,
    
    //Associations
    _StatisticalValueControl,
    _Language
}
where (dd07t.domname = 'KOWRR') and (dd07t.as4local = 'A');
```
