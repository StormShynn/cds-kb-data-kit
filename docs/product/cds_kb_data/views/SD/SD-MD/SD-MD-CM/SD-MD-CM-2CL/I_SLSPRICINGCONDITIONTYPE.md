---
name: I_SLSPRICINGCONDITIONTYPE
description: "SLSPricing ConditionTYPE"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_SLSPRICINGCONDITIONTYPE

**SLSPricing ConditionTYPE**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` | ✓ | |  |  |  |  |
| `AccessSequence` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `ConditionCalculationType` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `PrcgCndnAmountRoundingRule` |  | |  |  |  |  |
| `PricingConditionFunction` |  | |  |  |  |  |
| `StructureCondition` |  | |  |  |  |  |
| `PrcgConditionAmountSign` |  | |  |  |  |  |
| `IsGroupCondition` |  | |  |  |  |  |
| `PrcgCndnRndngDiffsIsSettled` |  | |  |  |  |  |
| `PrcgGroupConditionRoutine` |  | |  |  |  |  |
| `CndnManualEntries` |  | |  |  |  |  |
| `CndnAppliesHeader` |  | |  |  |  |  |
| `CndnAppliesItems` |  | |  |  |  |  |
| `PrcgCndnTypeDeletionIsAllowed` |  | |  |  |  |  |
| `PrcgCndnAmountChangedIsAllowed` |  | |  |  |  |  |
| `PrcgCndnCnvrsnFctrChgIsAllowed` |  | |  |  |  |  |
| `PrcgCndnValChgIsAllwd` |  | |  |  |  |  |
| `PrcgCndnPrpsdValidFromDateCode` |  | |  |  |  |  |
| `PrcgCndnPrpsdValidToDateCode` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `PrcgConditionDeletionMethod` |  | |  |  |  |  |
| `CndnIsRelevantForLimitValue` |  | |  |  |  |  |
| `PricingScaleBasisShort` |  | |  |  |  |  |
| `PricingScaleCheckingRule` |  | |  |  |  |  |
| `PricingScaleType` |  | |  |  |  |  |
| `PricingScaleRoutine` |  | |  |  |  |  |
| `PricingScaleUnit` |  | |  |  |  |  |
| `PrcgCndnCrcyCnvrsnIsAftMltpl` |  | |  |  |  |  |
| `IsRelevantForAccrual` |  | |  |  |  |  |
| `CndnIsForVariantConfiguration` |  | |  |  |  |  |
| `PrcgCndnQtyCnvrsnIsActivated` |  | |  |  |  |  |
| `CndnIsRelevantForIntcoBilling` |  | |  |  |  |  |
| `PricingDateIdentificationCode` |  | |  |  |  |  |
| `CndnValueZeroProcgCode` |  | |  |  |  |  |
| `ConditionTypeIsInclusionPoint` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsPricingConditionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSCNDNTYPE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'ConditionType'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Pricing Condition Type in Sales'
@ObjectModel.sapObjectNodeType.name: 'SalesPricingConditionType'

define view I_SlsPricingConditionType
  as select from I_PricingConditionType
  association [0..*] to I_SlsPricingConditionTypeText as _Text on  $projection.ConditionType        = _Text.ConditionType
{
  //key ConditionUsage,
  //key ConditionApplication,
   @ObjectModel.text.association: '_Text'
  key ConditionType,
      AccessSequence,
      ConditionClass,
      ConditionCalculationType,
      ConditionCategory,
      PrcgCndnAmountRoundingRule,
      PricingConditionFunction,
      StructureCondition,
      PrcgConditionAmountSign,
      @Semantics.booleanIndicator
      IsGroupCondition,
      PrcgCndnRndngDiffsIsSettled,
      PrcgGroupConditionRoutine, 
      CndnManualEntries,
      CndnAppliesHeader,
      CndnAppliesItems,
      PrcgCndnTypeDeletionIsAllowed,
      PrcgCndnAmountChangedIsAllowed,
      PrcgCndnCnvrsnFctrChgIsAllowed,
      PrcgCndnValChgIsAllwd,
      PrcgCndnPrpsdValidFromDateCode,
      PrcgCndnPrpsdValidToDateCode,
      PricingProcedure,
      PrcgConditionDeletionMethod,
      CndnIsRelevantForLimitValue,
      PricingScaleBasisShort,
      PricingScaleCheckingRule,
      PricingScaleType,
      PricingScaleRoutine,
      PricingScaleUnit,
      PrcgCndnCrcyCnvrsnIsAftMltpl,
      IsRelevantForAccrual,
      CndnIsForVariantConfiguration,
      PrcgCndnQtyCnvrsnIsActivated,
      CndnIsRelevantForIntcoBilling,
      PricingDateIdentificationCode,
      CndnValueZeroProcgCode,
      ConditionTypeIsInclusionPoint,
      _Text
}
where
      ConditionUsage       = 'A'
  and ConditionApplication = 'V'
```
