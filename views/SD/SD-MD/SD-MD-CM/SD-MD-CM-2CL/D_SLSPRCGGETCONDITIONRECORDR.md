---
name: D_SLSPRCGGETCONDITIONRECORDR
description: D SLSPRCGGETCondition RecordR
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_SLSPRCGGETCONDITIONRECORDR

**D SLSPRCGGETCondition RecordR**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` |  | |  | `knumh` |  |  |
| `ConditionSequentialNumber` |  | |  | `kopos` |  |  |
| `ConditionTable` |  | |  | `kotabnr_char` |  |  |
| `ConditionApplication` |  | |  | `kappl` |  |  |
| `ConditionType` |  | |  | `kschl` |  |  |
| `ConditionValidityEndDate` |  | |  | `datbi` |  |  |
| `ConditionValidityStartDate` |  | |  | `datab` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `ConditionTextID` |  | |  | `knumt` |  |  |
| `PricingScaleType` |  | |  | `stfkz` |  |  |
| `PricingScaleBasis` |  | |  | `kzbzg` |  |  |
| `ConditionScaleQuantity` |  | |  | `kstbm` |  |  |
| `ConditionScaleQuantityUnit` |  | |  | `konms` |  |  |
| `ConditionScaleAmount` |  | |  | `kstbw` |  |  |
| `ConditionScaleAmountCurrency` |  | |  | `konws` |  |  |
| `ConditionCalculationType` |  | |  | `krech` |  |  |
| `ConditionRateValue` |  | |  | `kbetr_kond` |  |  |
| `ConditionRateValueUnit` |  | |  | `konwa` |  |  |
| `ConditionRateRatio` |  | |  | `vfprc_element_ratio` |  |  |
| `ConditionRateRatioUnit` |  | |  | `msehiunit` |  |  |
| `ConditionRateAmount` |  | |  | `vfprc_element_amount` |  |  |
| `ConditionCurrency` |  | |  | `konwa` |  |  |
| `ConditionQuantity` |  | |  | `kpein` |  |  |
| `ConditionQuantityUnit` |  | |  | `kmein` |  |  |
| `ConditionToBaseQtyNmrtr` |  | |  | `kumza` |  |  |
| `ConditionToBaseQtyDnmntr` |  | |  | `kumne` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `ConditionLowerLimit` |  | |  | `mxwrt` |  |  |
| `ConditionUpperLimit` |  | |  | `gkwrt` |  |  |
| `ConditionLowerLimitAmount` |  | |  | `vfprc_element_amount` |  |  |
| `ConditionLowerLimitRatio` |  | |  | `vfprc_element_ratio` |  |  |
| `ConditionUpperLimitAmount` |  | |  | `vfprc_element_amount` |  |  |
| `ConditionUpperLimitRatio` |  | |  | `vfprc_element_ratio` |  |  |
| `ConditionAlternativeCurrency` |  | |  | `kwaeh` |  |  |
| `ConditionExclusion` |  | |  | `kznep` |  |  |
| `ConditionIsDeleted` |  | |  | `loevm_ko` |  |  |
| `AdditionalValueDays` |  | |  | `valtg` |  |  |
| `FixedValueDate` |  | |  | `valdt` |  |  |
| `PaymentTerms` |  | |  | `dzterm` |  |  |
| `CndnMaxNumberOfSalesOrders` |  | |  | `anzauf` |  |  |
| `MinimumConditionBasisValue` |  | |  | `mikbas` |  |  |
| `MaximumConditionBasisValue` |  | |  | `mxkbas` |  |  |
| `MaximumConditionAmount` |  | |  | `komxwrt` |  |  |
| `IncrementalScale` |  | |  | `klf_stg` |  |  |
| `PricingScaleLine` |  | |  | `klf_kal` |  |  |
| `SalesPriceApprovalRequest` |  | |  | `priceapprovalrequest` |  |  |
| `PrevApprovedConditionRecord` |  | |  | `knumh_prev_aprvd` |  |  |
| `LastChangeDateTime` |  | |  | `timestampl` |  |  |
| `D_SlsPrcgCndnRecordValidityR` |  | |  | `_Validity : composition [1..*] of D_SlsPrcgCndnRecordValidityR` |  |  |

## Source Code

```abap
@EndUserText.label: 'Condition Record'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define root abstract entity D_SlsPrcgGetConditionRecordR
{
  ConditionRecord              : knumh;
  ConditionSequentialNumber    : kopos;
  ConditionTable               : kotabnr_char;
  ConditionApplication         : kappl;
  ConditionType                : kschl;
  ConditionValidityEndDate     : datbi;
  ConditionValidityStartDate   : datab;
  CreatedByUser                : ernam;
  CreationDate                 : erdat;
  ConditionTextID              : knumt;
  PricingScaleType             : stfkz;
  PricingScaleBasis            : kzbzg;
  @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
  ConditionScaleQuantity       : kstbm;
  ConditionScaleQuantityUnit   : konms;
  @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
  ConditionScaleAmount         : kstbw;
  ConditionScaleAmountCurrency : konws;
  ConditionCalculationType     : krech;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionRateValue           : kbetr_kond;
  ConditionRateValueUnit       : konwa;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionRateRatio           : vfprc_element_ratio;
  ConditionRateRatioUnit       : msehiunit;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionRateAmount          : vfprc_element_amount;
  ConditionCurrency            : konwa;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity            : kpein;
  ConditionQuantityUnit        : kmein;
  ConditionToBaseQtyNmrtr      : kumza;
  ConditionToBaseQtyDnmntr     : kumne;
  BaseUnit                     : meins;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionLowerLimit          : mxwrt;
  @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
  ConditionUpperLimit          : gkwrt;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionLowerLimitAmount    : vfprc_element_amount;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionLowerLimitRatio     : vfprc_element_ratio;
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  ConditionUpperLimitAmount    : vfprc_element_amount;
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionUpperLimitRatio     : vfprc_element_ratio;
  ConditionAlternativeCurrency : kwaeh;
  ConditionExclusion           : kznep;
  ConditionIsDeleted           : loevm_ko;
  AdditionalValueDays          : valtg;
  FixedValueDate               : valdt;
  PaymentTerms                 : dzterm;
  CndnMaxNumberOfSalesOrders   : anzauf;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  MinimumConditionBasisValue   : mikbas;
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  MaximumConditionBasisValue   : mxkbas;
  @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
  MaximumConditionAmount       : komxwrt;
  IncrementalScale             : klf_stg;
  PricingScaleLine             : klf_kal;
//  ConditionReleaseStatus       : kfrst;
  SalesPriceApprovalRequest    : priceapprovalrequest;
//  ConditionChangeReason        : cndn_chgreason;
  PrevApprovedConditionRecord  : knumh_prev_aprvd;
//  ConditionTaxCode             : mwskz;
//  ConditionWithholdingTaxCode  : wt_withcd;
//  TaxExemptionLicense          : licno;
//  LicenseGrantDate             : licdt;
  @Semantics.systemDateTime.lastChangedAt: true
  LastChangeDateTime           : timestampl;

  _Validity   : composition [1..*] of D_SlsPrcgCndnRecordValidityR;

}
```
