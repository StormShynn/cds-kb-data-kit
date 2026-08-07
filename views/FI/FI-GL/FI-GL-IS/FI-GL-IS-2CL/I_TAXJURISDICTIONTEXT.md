---
name: I_TAXJURISDICTIONTEXT
description: Taxjurisdictiontext
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - tax
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_TAXJURISDICTIONTEXT

**Taxjurisdictiontext**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `TaxJurisdictionName` |  | |  | `text1` |  |  |
| `_Language` | | ✓ | | | | |
| `_TaxJurisCalcProcedure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TaxJurisCalcProcedure` | `I_TaxJurisCalcProcedure` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Tax Jurisdiction - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFITAXJURIT'
@Analytics: { dataExtraction.enabled: true  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.representativeKey: 'TaxJurisdiction'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

/* start suppress warning key_check */
define view entity I_TaxJurisdictionText
/* end suppress warning key_check */
  as select from ttxjt

  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language

  association [0..1] to I_TaxJurisCalcProcedure as _TaxJurisCalcProcedure on $projection.TaxJurisdictionCalcProcedure = _TaxJurisCalcProcedure.TaxJurisdictionCalcProcedure


{
      @ObjectModel.foreignKey.association: '_TaxJurisCalcProcedure' //Inserted by VDM CDS Suite Plugin
  key kalsm                      as TaxJurisdictionCalcProcedure,

  key cast( txjcd as fis_txjcd ) as TaxJurisdiction,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
/* start suppress warning shlporigin_not_inherited */
  key spras                      as Language,
/* end suppress warning shlporigin_not_inherited */
      @Semantics.text
      text1                      as TaxJurisdictionName,

      _TaxJurisCalcProcedure,
      _Language
};
```
