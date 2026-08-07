---
name: I_CAINVCGDOCCREATIONMODE
description: "Cainvcgdoccreationmode"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCCREATIONMODE

**Cainvcgdoccreationmode**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocCreationMode` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as inv_crmode_kk preserving type )` |  |  |
| `_CAInvcgDocCreationModeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocCreationModeText` | `I_CAInvcgDocCreationModeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Erstellungsmodus des Fakturierungsbelegs'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgDocCreationMode',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocCreationMode',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC


define view entity I_CAInvcgDocCreationMode
  as select from dd07l

  association [1..*] to I_CAInvcgDocCreationModeText as _CAInvcgDocCreationModeText on $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationModeText.CAInvcgDocCreationMode
{
      @ObjectModel.text.association: '_CAInvcgDocCreationModeText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as inv_crmode_kk preserving type ) as CAInvcgDocCreationMode,
      _CAInvcgDocCreationModeText
}
where
      domname  = 'INV_CRMODE_KK'
  and as4local = 'A'
```
