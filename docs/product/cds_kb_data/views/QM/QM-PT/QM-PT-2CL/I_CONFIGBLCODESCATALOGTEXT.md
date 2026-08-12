---
name: I_CONFIGBLCODESCATALOGTEXT
description: "Configblcodescatalogtext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_CONFIGBLCODESCATALOGTEXT

**Configblcodescatalogtext**

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
| `Language` | ✓ | |  | `sprache` |  |  |
| `ConfigblCodesCatalogTxt` |  | |  | `katalogtxt` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Catalog of Configurable Codes - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
    dataCategory: #TEXT,
    representativeKey: 'ConfigurableCodesCatalog',
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ConfigblCodesCatalogText
  as select from tq15t
{
  key tq15t.katalogart as ConfigurableCodesCatalog,
      @Semantics.language: true
  key tq15t.sprache    as Language,

      @Semantics.text: true
      tq15t.katalogtxt as ConfigblCodesCatalogTxt
}
```
