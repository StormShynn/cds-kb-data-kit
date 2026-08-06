---
name: I_CAINVCGBOLLOTAXPOSTSTATUS
description: Cainvcgbollotaxpoststatus
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
  - tax
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGBOLLOTAXPOSTSTATUS

**Cainvcgbollotaxpoststatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgBolloTaxPostStatus` | `cast ( cast ( substring( dd07l.domvalue_l,1,1 ) as abap.char( 1 ) ) as inv_bollotax_kk)` |
| `_CAInvcgBolloTaxPostStatText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgBolloTaxPostStatText` | `I_CAInvcgBolloTaxPostStatText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Stempelsteuer gebucht'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgBolloTaxPostStatus',
  sapObjectNodeType.name: 'ContrAcctgInvcgStmpTxPostgSts',
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
define view entity I_CAInvcgBolloTaxPostStatus
  as select from dd07l

  association [1..*] to I_CAInvcgBolloTaxPostStatText as _CAInvcgBolloTaxPostStatText on $projection.CAInvcgBolloTaxPostStatus = _CAInvcgBolloTaxPostStatText.CAInvcgBolloTaxPostStatus
{
      @ObjectModel.text.association: '_CAInvcgBolloTaxPostStatText'
  key cast ( cast ( substring( dd07l.domvalue_l,1,1 ) as abap.char( 1 ) ) as inv_bollotax_kk) as CAInvcgBolloTaxPostStatus,
      _CAInvcgBolloTaxPostStatText
}
where
      domname  = 'INV_BOLLOTAX_KK'
  and as4local = 'A'
```
