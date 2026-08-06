---
name: I_JOINTVENTURETP
description: Jointventuretp
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JOINTVENTURETP

**Jointventuretp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `CompanyCode` |
| key `JointVenture` | `JointVenture` |
| `JointVentureName` | `JointVentureName` |
| `JointVenturePaymentTerms` | `JointVenturePaymentTerms` |
| `JointVentureBillingMethod` | `JointVentureBillingMethod` |
| `JointVentureType` | `JointVentureType` |
| `JointVentureOperator` | `JointVentureOperator` |
| `JVAVentureClass` | `JVAVentureClass` |
| `JntOpgAgrmt` | `JntOpgAgrmt` |
| `JntVntrBillgCutbackIsBlk` | `JntVntrBillgCutbackIsBlk` |
| `JntVntrInceptionToDateData` | `JntVntrInceptionToDateData` |
| `JntVntrCurrentMonthBillg` | `JntVntrCurrentMonthBillg` |
| `JntVntrYearToDateBillg` | `JntVntrYearToDateBillg` |
| `JntVntrInceptionToDateBillg` | `JntVntrInceptionToDateBillg` |
| `JntVntrFundingGroup` | `JntVntrFundingGroup` |
| `JointVentureCreatedByUser` | `JointVentureCreatedByUser` |
| `JntVntrTimeCreated` | `JntVntrTimeCreated` |
| `JntVntrDateCreated` | `JntVntrDateCreated` |
| `JntVntrCreationDateTime` | `JntVntrCreationDateTime` |
| `JointVentureLastChangedByUser` | `JointVentureLastChangedByUser` |
| `JntVntrTimeLastChanged` | `JntVntrTimeLastChanged` |
| `JntVntrDateLastChanged` | `JntVntrDateLastChanged` |
| `JntVntrLastChangedDateTime` | `JntVntrLastChangedDateTime` |
| `JntVntrBillgFrqcy` | `JntVntrBillgFrqcy` |
| `JntVntrBillgFormat` | `JntVntrBillgFormat` |
| `JntVntrNonBillgFormat` | `JntVntrNonBillgFormat` |
| `JointVentureTaxCode` | `JointVentureTaxCode` |
| `JntVntrTaxJurisdiction` | `JntVntrTaxJurisdiction` |
| `JntVntrOutTaxCode` | `JntVntrOutTaxCode` |
| `JntVntrOutTaxJurisdiction` | `JntVntrOutTaxJurisdiction` |
| `JntVntrOutPaymentTerms` | `JntVntrOutPaymentTerms` |
| `JntVntrDrillingPayRate` | `JntVntrDrillingPayRate` |
| `JntVntrNonDrillingPayRate` | `JntVntrNonDrillingPayRate` |
| `JntVntrParentCoOvhdExpnCostCtr` | `JntVntrParentCoOvhdExpnCostCtr` |
| `JntVntrParentCoOvhdProject` | `JntVntrParentCoOvhdProject` |
| `JntVntrParentCoOvhdExpnOrder` | `JntVntrParentCoOvhdExpnOrder` |
| `JntVntrSubstituteCostCtr` | `JntVntrSubstituteCostCtr` |
| `JntVntrCrcyIsFundingCrcy` | `JntVntrCrcyIsFundingCrcy` |
| `JntVntrProperty` | `JntVntrProperty` |
| `Currency` | `Currency` |
| `JntVntrBillgThldDebit` | `} JntVntrBillgThldDebit` |
| `JntVntrBillgThldCredit` | `} JntVntrBillgThldCredit` |
| `JntVntrBillgThldIsActive` | `JntVntrBillgThldIsActive` |
| `JntVntrPaymentTermSchema` | `JntVntrPaymentTermSchema` |
| `JVAVentureIntrstCalcGrpID` | `JVAVentureIntrstCalcGrpID` |
| `_Currency` | *Association* |
| `_JointVentureEquityGroup` | *Association* |
| `_JointVentureDescription` | *Association* |
| `_JointVentureEquityType` | *Association* |
| `_JntVntrParCompanyOverhead` | *Association* |
| `_JntVntrOvhdBurdenRatePct` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Joint Venture - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType.name: 'JointVenture',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #XL
  }
}

define root view entity I_JointVentureTP
  provider contract transactional_interface

  as projection on R_JointVentureTP

{
  key CompanyCode,
  key JointVenture,

      @EndUserText.label: 'Joint Venture Description'
      JointVentureName,
      JointVenturePaymentTerms,
      JointVentureBillingMethod,
      JointVentureType,
      JointVentureOperator,
      JVAVentureClass,
      JntOpgAgrmt,
      @Semantics.booleanIndicator
      JntVntrBillgCutbackIsBlk,
      JntVntrInceptionToDateData,
      @EndUserText.label: 'Non-zero period to date values'
      JntVntrCurrentMonthBillg,
      @EndUserText.label: 'Non-zero year to date values'
      JntVntrYearToDateBillg,
      @EndUserText.label: 'Non-zero inception to date values'
      JntVntrInceptionToDateBillg,
      JntVntrFundingGroup,
      JointVentureCreatedByUser,
      JntVntrTimeCreated,
      JntVntrDateCreated,
      JntVntrCreationDateTime,
      JointVentureLastChangedByUser,
      JntVntrTimeLastChanged,
      JntVntrDateLastChanged,
      JntVntrLastChangedDateTime,
      JntVntrBillgFrqcy,

      JntVntrBillgFormat,
      JntVntrNonBillgFormat,
      JointVentureTaxCode,
      JntVntrTaxJurisdiction,
      JntVntrOutTaxCode,
      JntVntrOutTaxJurisdiction,
      JntVntrOutPaymentTerms,
      JntVntrDrillingPayRate,
      JntVntrNonDrillingPayRate,
      JntVntrParentCoOvhdExpnCostCtr,
      JntVntrParentCoOvhdProject,
      JntVntrParentCoOvhdExpnOrder,
      JntVntrSubstituteCostCtr,
      JntVntrCrcyIsFundingCrcy,
      JntVntrProperty,
      @ObjectModel.foreignKey.association: '_Currency'
      Currency,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      JntVntrBillgThldDebit,
      @Semantics: { amount : { currencyCode: 'Currency'} }
      JntVntrBillgThldCredit,
      JntVntrBillgThldIsActive,
      JntVntrPaymentTermSchema,
      JVAVentureIntrstCalcGrpID,
      
      _Currency,

      _JointVentureEquityGroup    : redirected to composition child I_JointVentureEquityGroupTP,
      _JointVentureDescription    : redirected to composition child I_JointVentureDescriptionTP,
      _JointVentureEquityType     : redirected to composition child I_JointVentureEquityTypeTP,
      _JntVntrParCompanyOverhead  : redirected to composition child I_JntVntrParCompanyOverheadTP,
      _JntVntrOvhdBurdenRatePct   : redirected to composition child I_JntVntrOvhdBurdenRatePctTP
}
```
