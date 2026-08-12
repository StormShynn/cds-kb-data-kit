---
name: I_CAINVCGCORRECTIONCAT
description: "Cainvcgcorrectioncat"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CAINVCGCORRECTIONCAT

**Cainvcgcorrectioncat**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgCorrectionCategory` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,2 ) as corrcat_kk preserving type )` |  |  |
| `_CAInvcgCorrectionCatText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgCorrectionCatText` | `I_CAInvcgCorrectionCatText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Typ der Rechnungskorrektur'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgCorrectionCategory',
  sapObjectNodeType.name: 'ContrAcctgInvcgCorrectionCat',
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
define view entity I_CAInvcgCorrectionCat
  as select from dd07l

  association [1..*] to I_CAInvcgCorrectionCatText as _CAInvcgCorrectionCatText on $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCatText.CAInvcgCorrectionCategory
{
      @ObjectModel.text.association: '_CAInvcgCorrectionCatText'
  key cast ( substring( dd07l.domvalue_l,1,2 )  as corrcat_kk preserving type ) as CAInvcgCorrectionCategory,
      _CAInvcgCorrectionCatText
}
where
      domname  = 'CORRCAT_KK'
  and as4local = 'A'
```
