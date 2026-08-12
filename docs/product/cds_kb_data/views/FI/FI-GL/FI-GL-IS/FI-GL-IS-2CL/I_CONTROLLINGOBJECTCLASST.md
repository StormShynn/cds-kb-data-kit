---
name: I_CONTROLLINGOBJECTCLASST
description: "Controllingobjectclasst"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_CONTROLLINGOBJECTCLASST

**Controllingobjectclasst**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObjectClass` | ✓ | |  | `substring(domvalue_l, 1, 2)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `ControllingObjectClassName` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Controlling Object Class - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOOBJCLASST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ControllingObjectClass'
@ClientHandling.algorithm: #SESSION_VARIABLE

@Analytics: { dataExtraction.enabled: true }

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ControllingObjectClassT as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

     key substring(domvalue_l, 1, 2) as ControllingObjectClass,
  
     @Semantics.language: true
     key ddlanguage as Language,
     @Semantics.text: true
     @Search.defaultSearchElement: true
     @Search.fuzzinessThreshold: 0.8
     @Search.ranking: #LOW
     @EndUserText.label: 'Controlling Object Class Name'
     ddtext as ControllingObjectClassName,
     @Analytics.hidden: true
     @Consumption.hidden: true     
     dd07t.domvalue_l as DomainValue,
     
     _Language
     
}
where
    domname = 'SCOPE_CV' and as4local = 'A';
```
