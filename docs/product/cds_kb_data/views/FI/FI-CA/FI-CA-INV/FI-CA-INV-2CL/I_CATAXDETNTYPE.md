---
name: I_CATAXDETNTYPE
description: "Cataxdetntype"
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
  - tax
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CATAXDETNTYPE

**Cataxdetntype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CATaxDetnType` | ✓ | |  | `cast ( substring( dd07l.domvalue_l, 1, 2 ) as tax_det_type_kk preserving type )` |  |  |
| `_CATaxDetnTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CATaxDetnTypeText` | `I_CATaxDetnTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art der Steuerberechnung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CATaxDetnType',
  sapObjectNodeType.name: 'ContrAcctgTaxDetnType',
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

define view entity I_CATaxDetnType
  as select from dd07l

  association [1..*] to I_CATaxDetnTypeText as _CATaxDetnTypeText on $projection.CATaxDetnType = _CATaxDetnTypeText.CATaxDetnType
{
      @ObjectModel.text.association: '_CATaxDetnTypeText'
  key cast ( substring( dd07l.domvalue_l, 1, 2 ) as tax_det_type_kk preserving type ) as CATaxDetnType,
      _CATaxDetnTypeText
}
where
      domname  = 'TAX_DET_TYPE_KK'
  and as4local = 'A'
```
