---
name: I_CAINVCGFUNCTION
description: "Cainvcgfunction"
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
# I_CAINVCGFUNCTION

**Cainvcgfunction**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgFunction` | ✓ | | `_tfk2601` | `inv_function` |  |  |
| `_CAInvcgFunctionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgFunctionText` | `I_CAInvcgFunctionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Funktionen der Fakturierung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgFunction',
  sapObjectNodeType.name: 'ContrAcctgInvoicingFunction',
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
define view entity I_CAInvcgFunction
  as select from tfk2601 as _tfk2601
  association [0..*] to I_CAInvcgFunctionText as _CAInvcgFunctionText on $projection.CAInvcgFunction = _CAInvcgFunctionText.CAInvcgFunction

{
      @ObjectModel.text.association: '_CAInvcgFunctionText'
  key _tfk2601.inv_function as CAInvcgFunction,
      _CAInvcgFunctionText
}
```
