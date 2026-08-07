---
name: I_CATAXDETERMINATIONCODE
description: Cataxdeterminationcode
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - tax
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CATAXDETERMINATIONCODE

**Cataxdeterminationcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `CATaxDeterminationCode` | ✓ | |  | `ermwskz` |  |  |
| `CATaxDetnCodeValidFromDate` | ✓ | |  | `ab` |  |  |
| `CATaxDetnCodeValidToDate` |  | |  | `bis` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxCalculationProcedure` |  | | `_Country` | `TaxCalculationProcedure` |  |  |
| `_Country` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Tax Determination Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE, 
                sapObjectNodeType.name: 'ContrAcctgTaxDeterminationCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #SQL_DATA_SOURCE, 
                                         #CDS_MODELING_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING } }

@VDM.viewType: #BASIC

define view entity I_CATaxDeterminationCode
  as select from te011

  association [0..1] to I_Country                 as _Country                 on  $projection.Country                 = _Country.Country
  association [0..1] to I_TaxCalculationProcedure as _TaxCalculationProcedure on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure
  association [0..1] to I_TaxCode                 as _TaxCode                 on  $projection.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure
                                                                              and $projection.TaxCode                 = _TaxCode.TaxCode

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1                            as Country,
  key ermwskz                          as CATaxDeterminationCode,
  key ab                               as CATaxDetnCodeValidFromDate,
      
      bis                              as CATaxDetnCodeValidToDate,
      @ObjectModel.foreignKey.association: '_TaxCode'
      mwskz                            as TaxCode,

      // required for association to TaxCode
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
     _Country.TaxCalculationProcedure as TaxCalculationProcedure,

      /* Associations */
      _Country,
      _TaxCalculationProcedure,
      _TaxCode
}
```
