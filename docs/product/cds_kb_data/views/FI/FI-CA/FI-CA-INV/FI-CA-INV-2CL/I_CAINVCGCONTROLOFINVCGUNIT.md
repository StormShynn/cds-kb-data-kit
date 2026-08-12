---
name: I_CAINVCGCONTROLOFINVCGUNIT
description: "Cainvcgcontrolofinvcgunit"
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
# I_CAINVCGCONTROLOFINVCGUNIT

**Cainvcgcontrolofinvcgunit**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgControlOfInvoicingUnit` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as separate_inv_kk preserving type )` |  |  |
| `_CAInvcgControlOfInvcgUnitTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgControlOfInvcgUnitTxt` | `I_CAInvcgControlOfInvcgUnitTxt` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Steuerung der Fakt.seinheit'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgControlOfInvoicingUnit',
  sapObjectNodeType.name: 'ContrAcctgInvcgCtrlOfInvcgUnit',
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
define view entity I_CAInvcgControlOfInvcgUnit
  as select from dd07l

  association [1..*] to I_CAInvcgControlOfInvcgUnitTxt as _CAInvcgControlOfInvcgUnitTxt on $projection.CAInvcgControlOfInvoicingUnit = _CAInvcgControlOfInvcgUnitTxt.CAInvcgControlOfInvoicingUnit
{
      @ObjectModel.text.association: '_CAInvcgControlOfInvcgUnitTxt'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as separate_inv_kk preserving type ) as CAInvcgControlOfInvoicingUnit,
      _CAInvcgControlOfInvcgUnitTxt
}
where
      domname  = 'SEPARATE_INV_KK'
  and as4local = 'A'
```
