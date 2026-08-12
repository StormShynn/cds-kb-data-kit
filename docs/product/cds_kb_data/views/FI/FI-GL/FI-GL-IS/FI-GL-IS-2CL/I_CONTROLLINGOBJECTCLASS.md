---
name: I_CONTROLLINGOBJECTCLASS
description: "Controllingobjectclass"
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
# I_CONTROLLINGOBJECTCLASS

**Controllingobjectclass**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingObjectClass` | ✓ | |  | `cast( substring(dd07l.domvalue_l, 1, 2) as fis_scope_cv_conv_co )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ControllingObjectClassT` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Controlling Object Class'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOOBJCLASS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ControllingObjectClass'
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #L
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#VALUE_HELP_PROVIDER ]
@ObjectModel.sapObjectNodeType.name: 'ControllingObjectClass'
@Search.searchable: true
@Consumption.ranked: true

define view I_ControllingObjectClass
as select from dd07l
association [1..*] to I_ControllingObjectClassT as _Text on $projection.ControllingObjectClass = _Text.ControllingObjectClass
{

@ObjectModel.text.association: '_Text'
     key cast( substring(dd07l.domvalue_l, 1, 2) as fis_scope_cv_conv_co ) as ControllingObjectClass,
     @Analytics.hidden: true
     @Consumption.hidden: true     
     @Search.defaultSearchElement: true
     @Search.fuzzinessThreshold: 0.8
     @Search.ranking: #HIGH
     dd07l.domvalue_l as DomainValue,
     _Text
}
where 
     domname = 'SCOPE_CV' and as4local = 'A';
```
