---
name: I_CAINVCGDOCITMCRTNMETHOD
description: Cainvcgdocitmcrtnmethod
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
# I_CAINVCGDOCITMCRTNMETHOD

**Cainvcgdocitmcrtnmethod**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocItemCrtnMethod` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as invitem_crmet_kk preserving type )` |  |  |
| `_CAInvcgDocItmCrtnMethodText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocItmCrtnMethodText` | `I_CAInvcgDocItmCrtnMethodText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Erstellungsmethode der Fakturaposition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgDocItemCrtnMethod',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocItmCrtnMeth',
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
define view entity I_CAInvcgDocItmCrtnMethod
  as select from dd07l

  association [1..*] to I_CAInvcgDocItmCrtnMethodText as _CAInvcgDocItmCrtnMethodText on $projection.CAInvcgDocItemCrtnMethod = _CAInvcgDocItmCrtnMethodText.CAInvcgDocItemCrtnMethod
{
      @ObjectModel.text.association: '_CAInvcgDocItmCrtnMethodText'
  key cast ( substring( dd07l.domvalue_l,1,1 )  as invitem_crmet_kk preserving type ) as CAInvcgDocItemCrtnMethod,
      _CAInvcgDocItmCrtnMethodText
}
where
      domname  = 'INVITEM_CRMET_KK'
  and as4local = 'A'
```
