---
name: I_CONFIGURABLECODESCATALOG
description: "Configurablecodescatalog"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_CONFIGURABLECODESCATALOG

**Configurablecodescatalog**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfigurableCodesCatalog` | ✓ | |  | `katalogart` |  |  |
| `ConfigblCodesCtlgHasLgclDeltn` |  | |  | `cast( tq15.hist as vdm_qhistkat preserving type )` |  |  |
| `_ConfigblCodesCatalogText` | | ✓ | | | | |
| `_ConfigurableCodesCodeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfigblCodesCatalogText` | `I_ConfigblCodesCatalogText` | [0..*] |
| `_ConfigurableCodesCodeGroup` | `I_ConfigurableCodesCodeGroup` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Catalog of Configurable Codes'
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true,
  dataCategory: #DIMENSION
}
@Analytics.internalName:#LOCAL
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@ObjectModel.representativeKey: 'ConfigurableCodesCatalog'
@ObjectModel.sapObjectNodeType.name: 'ConfigurableCodesCatalog'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ConfigurableCodesCatalog
  as select from tq15
  association [0..*] to I_ConfigblCodesCatalogText as _ConfigblCodesCatalogText on $projection.ConfigurableCodesCatalog = _ConfigblCodesCatalogText.ConfigurableCodesCatalog
  association [1..*] to I_ConfigurableCodesCodeGroup as _ConfigurableCodesCodeGroup on $projection.ConfigurableCodesCatalog = _ConfigurableCodesCodeGroup.ConfigurableCodesCatalog
{
      @ObjectModel.text.association: '_ConfigblCodesCatalogText'
  key tq15.katalogart as ConfigurableCodesCatalog,
  cast( tq15.hist as vdm_qhistkat preserving type ) as ConfigblCodesCtlgHasLgclDeltn,

      /* Associations */
      _ConfigblCodesCatalogText,
      _ConfigurableCodesCodeGroup
}
```
