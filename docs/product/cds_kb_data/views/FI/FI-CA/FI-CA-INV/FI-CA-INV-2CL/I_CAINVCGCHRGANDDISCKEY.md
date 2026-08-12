---
name: I_CAINVCGCHRGANDDISCKEY
description: "Cainvcgchrganddisckey"
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
# I_CAINVCGCHRGANDDISCKEY

**Cainvcgchrganddisckey**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAApplicationArea` | ✓ | | `_tfk2617` | `applk` |  |  |
| `CAInvcgChargeAndDiscountKey` | ✓ | | `_tfk2617` | `chgkey` |  |  |
| `CAInvcgChrgAndDiscIsIndividual` |  | | `_tfk2617` | `chgindiv` |  |  |
| `_ApplArea` | | ✓ | | | | |
| `_CAInvcgChrgAndDiscKeyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |
| `_CAInvcgChrgAndDiscKeyText` | `I_CAInvcgChrgAndDiscKeyText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName:#LOCAL
}

@EndUserText.label: 'Zuschlags-/Rabattschlüssel für Rechn.'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAInvcgChargeAndDiscountKey',
  sapObjectNodeType.name: 'ContrAcctgInvcgChrgAndDiscKey',
  compositionRoot: true,
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
define view entity I_CAInvcgChrgAndDiscKey
  as select from tfk2617             as _tfk2617
    inner join   I_CAApplicationArea as ApplArea on _tfk2617.applk = ApplArea.CAApplicationArea
  association [1..1] to I_CAApplicationArea         as _ApplArea                  on  $projection.CAApplicationArea = _ApplArea.CAApplicationArea
  association [1..*] to I_CAInvcgChrgAndDiscKeyText as _CAInvcgChrgAndDiscKeyText on  $projection.CAInvcgChargeAndDiscountKey = _CAInvcgChrgAndDiscKeyText.CAInvcgChargeAndDiscountKey
                                                                                  and $projection.CAApplicationArea           = _CAInvcgChrgAndDiscKeyText.CAApplicationArea
{
      @ObjectModel.foreignKey.association: '_ApplArea'
  key _tfk2617.applk   as CAApplicationArea,

      @ObjectModel.text.association: '_CAInvcgChrgAndDiscKeyText'
  key _tfk2617.chgkey  as CAInvcgChargeAndDiscountKey,

      _ApplArea,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] //compositional relationship to text view
      _CAInvcgChrgAndDiscKeyText,

      _tfk2617.chgindiv as CAInvcgChrgAndDiscIsIndividual
}
where
  ApplArea.CAApplicationAreaIsActive = 'X'
```
