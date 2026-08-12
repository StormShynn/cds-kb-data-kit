---
name: I_TAXJURISDICTION
description: "Taxjurisdiction"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXJURISDICTION

**Taxjurisdiction**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxJurisdictionCalcProcedure` | ✓ | |  | `kalsm` |  |  |
| `TaxJurisdiction` | ✓ | |  | `cast( txjcd as fis_txjcd )` |  |  |
| `CashDiscountBaseAmtIsNetAmt` |  | |  | `xskfn` |  |  |
| `TaxBaseAmountIsNetAmount` |  | |  | `xmwsn` |  |  |
| `_Text` | | ✓ | | | | |
| `_TaxJurisCalcProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TaxJurisdictionText` | [0..*] |
| `_TaxJurisCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Tax Jurisdiction'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics.technicalName: 'IFITAXJURI'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'TaxJurisdiction'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'TaxJurisdiction'

/* start suppress warning key_check */
define view entity I_TaxJurisdiction
/* end suppress warning key_check */
  as select from ttxj

/* start suppress warning calculated_field_check */
  association [0..*] to I_TaxJurisdictionText   as _Text                  on  $projection.TaxJurisdictionCalcProcedure = _Text.TaxJurisdictionCalcProcedure
                                                                          and $projection.TaxJurisdiction              = _Text.TaxJurisdiction
/* end suppress warning calculated_field_check */

  association [0..1] to I_TaxJurisCalcProcedure as _TaxJurisCalcProcedure on  $projection.TaxJurisdictionCalcProcedure = _TaxJurisCalcProcedure.TaxJurisdictionCalcProcedure

{
/* start suppress warning shlporigin_not_inherited */
      @ObjectModel.foreignKey.association: '_TaxJurisCalcProcedure' //Inserted by VDM CDS Suite Plugin
//      @ObjectModel.text.association: '_Text'
  key kalsm                      as TaxJurisdictionCalcProcedure,
/* end suppress warning shlporigin_not_inherited */
      @ObjectModel.text.association: '_Text'
  key cast( txjcd as fis_txjcd ) as TaxJurisdiction,

      xskfn                      as CashDiscountBaseAmtIsNetAmt,

      xmwsn                      as TaxBaseAmountIsNetAmount,

      _TaxJurisCalcProcedure,
      _Text

};
```
