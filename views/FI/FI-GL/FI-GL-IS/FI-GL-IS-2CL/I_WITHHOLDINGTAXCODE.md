---
name: I_WITHHOLDINGTAXCODE
description: "Withholdingtaxcode"
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
  - tax
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_WITHHOLDINGTAXCODE

**Withholdingtaxcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `WithholdingTaxCode` | ✓ | |  | `qsskz` |  |  |
| `OfficialWhldgTaxCode` |  | |  | `qscod` |  |  |
| `WhldgTaxCodeName` |  | |  | `qsbez` |  |  |
| `WhldgTaxRelevantPercent` |  | |  | `qproz` |  |  |
| `WithholdingTaxPercent` |  | |  | `qsatz` |  |  |
| `Region` |  | |  | `bland` |  |  |
| `ProvincialTaxCode` |  | |  | `fprcd` |  |  |
| `WithholdingTaxIncomeType` |  | |  | `qekar` |  |  |
| `GermanReunificationTaxPercent` |  | |  | `qsats` |  |  |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Withholding Tax Code'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'WithholdingTaxCode'
@ObjectModel.representativeKey: 'WithholdingTaxCode'
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IFIWHTAXCODE'
@AbapCatalog.compiler.compareFilter:true
//@AbapCatalog.preserveKey:true

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

define view I_WithholdingTaxCode
  as select from t059q
  association [0..1] to I_Country as _Country on $projection.Country = _Country.Country
  //association[0..*] to I_Currency as _Currency on $projection.WHTaxAmountCurrency = _Currency.Currency
{
      @ObjectModel.foreignKey.association: '_Country' //Inserted by VDM CDS Suite Plugin
  key land1 as Country,
  key qsskz as WithholdingTaxCode,
      qscod as OfficialWhldgTaxCode,
      @Semantics.text
      qsbez as WhldgTaxCodeName,
      qproz as WhldgTaxRelevantPercent,
      qsatz as WithholdingTaxPercent,
      //xntto as BaseForCalculatingNetWHTax,
      //xqsbz as WHTaxPostingWithPayment,
      //qsatr as ReducedWHTaxRateForExempt,
      //xqfor as CalculateWHTaxAsPerFormula,
      //qmind as WHTaxMinimumAmount,
      //qmiwa as WHTaxAmountCurrency,
      bland as Region,
      fprcd as ProvincialTaxCode,
      qekar as WithholdingTaxIncomeType,
      qsats as GermanReunificationTaxPercent,
      //j_1isectio as TDSSection,
      //j_1itxvnty as TypeOfCompany,
      //j_1ixvnds as WHTaxVendor,
      _Country
      //_Currency
};
```
