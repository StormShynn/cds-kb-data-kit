---
name: I_PRODCOSTESTCOSTCOMPRAWDEX
description: "Prodcostestcostcomprawdex"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - data-extraction
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODCOSTESTCOSTCOMPRAWDEX

**Prodcostestcostcomprawdex**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` | ✓ | |  |  |  |  |
| `CostEstimate` | ✓ | |  |  |  |  |
| `CostingType` | ✓ | |  |  |  |  |
| `CostingDate` | ✓ | |  |  |  |  |
| `CostingVersion` | ✓ | |  |  |  |  |
| `ValuationVariant` | ✓ | |  |  |  |  |
| `CostIsEnteredManually` | ✓ | |  |  |  |  |
| `CostingPartnerNumber` | ✓ | |  |  |  |  |
| `CostComponentSplitType` | ✓ | |  |  |  |  |
| `CostIsInCtrlgAreaCrcy` | ✓ | |  |  |  |  |
| `IsCostComponentSplitLowerLevel` | ✓ | |  |  |  |  |
| `CostEstWQSIsInclAdditiveCosts` | ✓ | |  |  |  |  |
| `CostCompSpltDrctPrtnCharc` | ✓ | |  |  |  |  |
| `Currency` |  | |  | `cast ( case when keph.CostIsInCtrlgAreaCrcy = 'X' then _ProductCostEstimate.ControllingAreaCurrency when keph.CostIsInCtrlgAreaCrcy = ' ' then _ProductCostEstimate.CompanyCodeCurrency end as waers )` |  |  |
| `CostComponentCostField1Amt` |  | |  |  |  |  |
| `CostComponentCostField2Amt` |  | |  |  |  |  |
| `CostComponentCostField3Amt` |  | |  |  |  |  |
| `CostComponentCostField4Amt` |  | |  |  |  |  |
| `CostComponentCostField5Amt` |  | |  |  |  |  |
| `CostComponentCostField6Amt` |  | |  |  |  |  |
| `CostComponentCostField7Amt` |  | |  |  |  |  |
| `CostComponentCostField8Amt` |  | |  |  |  |  |
| `CostComponentCostField9Amt` |  | |  |  |  |  |
| `CostComponentCostField10Amt` |  | |  |  |  |  |
| `CostComponentCostField11Amt` |  | |  |  |  |  |
| `CostComponentCostField12Amt` |  | |  |  |  |  |
| `CostComponentCostField13Amt` |  | |  |  |  |  |
| `CostComponentCostField14Amt` |  | |  |  |  |  |
| `CostComponentCostField15Amt` |  | |  |  |  |  |
| `CostComponentCostField16Amt` |  | |  |  |  |  |
| `CostComponentCostField17Amt` |  | |  |  |  |  |
| `CostComponentCostField18Amt` |  | |  |  |  |  |
| `CostComponentCostField19Amt` |  | |  |  |  |  |
| `CostComponentCostField20Amt` |  | |  |  |  |  |
| `CostComponentCostField21Amt` |  | |  |  |  |  |
| `CostComponentCostField22Amt` |  | |  |  |  |  |
| `CostComponentCostField23Amt` |  | |  |  |  |  |
| `CostComponentCostField24Amt` |  | |  |  |  |  |
| `CostComponentCostField25Amt` |  | |  |  |  |  |
| `CostComponentCostField26Amt` |  | |  |  |  |  |
| `CostComponentCostField27Amt` |  | |  |  |  |  |
| `CostComponentCostField28Amt` |  | |  |  |  |  |
| `CostComponentCostField29Amt` |  | |  |  |  |  |
| `CostComponentCostField30Amt` |  | |  |  |  |  |
| `CostComponentCostField31Amt` |  | |  |  |  |  |
| `CostComponentCostField32Amt` |  | |  |  |  |  |
| `CostComponentCostField33Amt` |  | |  |  |  |  |
| `CostComponentCostField34Amt` |  | |  |  |  |  |
| `CostComponentCostField35Amt` |  | |  |  |  |  |
| `CostComponentCostField36Amt` |  | |  |  |  |  |
| `CostComponentCostField37Amt` |  | |  |  |  |  |
| `CostComponentCostField38Amt` |  | |  |  |  |  |
| `CostComponentCostField39Amt` |  | |  |  |  |  |
| `CostComponentCostField40Amt` |  | |  |  |  |  |
| `CostComponentCostField41Amt` |  | |  |  |  |  |
| `CostComponentCostField42Amt` |  | |  |  |  |  |
| `CostComponentCostField43Amt` |  | |  |  |  |  |
| `CostComponentCostField44Amt` |  | |  |  |  |  |
| `CostComponentCostField45Amt` |  | |  |  |  |  |
| `CostComponentCostField46Amt` |  | |  |  |  |  |
| `CostComponentCostField47Amt` |  | |  |  |  |  |
| `CostComponentCostField48Amt` |  | |  |  |  |  |
| `CostComponentCostField49Amt` |  | |  |  |  |  |
| `CostComponentCostField50Amt` |  | |  |  |  |  |
| `CostComponentCostField51Amt` |  | |  |  |  |  |
| `CostComponentCostField52Amt` |  | |  |  |  |  |
| `CostComponentCostField53Amt` |  | |  |  |  |  |
| `CostComponentCostField54Amt` |  | |  |  |  |  |
| `CostComponentCostField55Amt` |  | |  |  |  |  |
| `CostComponentCostField56Amt` |  | |  |  |  |  |
| `CostComponentCostField57Amt` |  | |  |  |  |  |
| `CostComponentCostField58Amt` |  | |  |  |  |  |
| `CostComponentCostField59Amt` |  | |  |  |  |  |
| `CostComponentCostField60Amt` |  | |  |  |  |  |
| `CostComponentCostField61Amt` |  | |  |  |  |  |
| `CostComponentCostField62Amt` |  | |  |  |  |  |
| `CostComponentCostField63Amt` |  | |  |  |  |  |
| `CostComponentCostField64Amt` |  | |  |  |  |  |
| `CostComponentCostField65Amt` |  | |  |  |  |  |
| `CostComponentCostField66Amt` |  | |  |  |  |  |
| `CostComponentCostField67Amt` |  | |  |  |  |  |
| `CostComponentCostField68Amt` |  | |  |  |  |  |
| `CostComponentCostField69Amt` |  | |  |  |  |  |
| `CostComponentCostField70Amt` |  | |  |  |  |  |
| `CostComponentCostField71Amt` |  | |  |  |  |  |
| `CostComponentCostField72Amt` |  | |  |  |  |  |
| `CostComponentCostField73Amt` |  | |  |  |  |  |
| `CostComponentCostField74Amt` |  | |  |  |  |  |
| `CostComponentCostField75Amt` |  | |  |  |  |  |
| `CostComponentCostField76Amt` |  | |  |  |  |  |
| `CostComponentCostField77Amt` |  | |  |  |  |  |
| `CostComponentCostField78Amt` |  | |  |  |  |  |
| `CostComponentCostField79Amt` |  | |  |  |  |  |
| `CostComponentCostField80Amt` |  | |  |  |  |  |
| `CostComponentCostField81Amt` |  | |  |  |  |  |
| `CostComponentCostField82Amt` |  | |  |  |  |  |
| `CostComponentCostField83Amt` |  | |  |  |  |  |
| `CostComponentCostField84Amt` |  | |  |  |  |  |
| `CostComponentCostField85Amt` |  | |  |  |  |  |
| `CostComponentCostField86Amt` |  | |  |  |  |  |
| `CostComponentCostField87Amt` |  | |  |  |  |  |
| `CostComponentCostField88Amt` |  | |  |  |  |  |
| `CostComponentCostField89Amt` |  | |  |  |  |  |
| `CostComponentCostField90Amt` |  | |  |  |  |  |
| `CostComponentCostField91Amt` |  | |  |  |  |  |
| `CostComponentCostField92Amt` |  | |  |  |  |  |
| `CostComponentCostField93Amt` |  | |  |  |  |  |
| `CostComponentCostField94Amt` |  | |  |  |  |  |
| `CostComponentCostField95Amt` |  | |  |  |  |  |
| `CostComponentCostField96Amt` |  | |  |  |  |  |
| `CostComponentCostField97Amt` |  | |  |  |  |  |
| `CostComponentCostField98Amt` |  | |  |  |  |  |
| `CostComponentCostField99Amt` |  | |  |  |  |  |
| `CostComponentCostField100Amt` |  | |  |  |  |  |
| `CostComponentCostField101Amt` |  | |  |  |  |  |
| `CostComponentCostField102Amt` |  | |  |  |  |  |
| `CostComponentCostField103Amt` |  | |  |  |  |  |
| `CostComponentCostField104Amt` |  | |  |  |  |  |
| `CostComponentCostField105Amt` |  | |  |  |  |  |
| `CostComponentCostField106Amt` |  | |  |  |  |  |
| `CostComponentCostField107Amt` |  | |  |  |  |  |
| `CostComponentCostField108Amt` |  | |  |  |  |  |
| `CostComponentCostField109Amt` |  | |  |  |  |  |
| `CostComponentCostField110Amt` |  | |  |  |  |  |
| `CostComponentCostField111Amt` |  | |  |  |  |  |
| `CostComponentCostField112Amt` |  | |  |  |  |  |
| `CostComponentCostField113Amt` |  | |  |  |  |  |
| `CostComponentCostField114Amt` |  | |  |  |  |  |
| `CostComponentCostField115Amt` |  | |  |  |  |  |
| `CostComponentCostField116Amt` |  | |  |  |  |  |
| `CostComponentCostField117Amt` |  | |  |  |  |  |
| `CostComponentCostField118Amt` |  | |  |  |  |  |
| `CostComponentCostField119Amt` |  | |  |  |  |  |
| `CostComponentCostField120Amt` |  | |  |  |  |  |
| `_ProductCostEstimate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductCostEstimate` | `I_ProductCostEstimate` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Prod Cost Est Cost Comp Raw Data Ext'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'ProductCostEstimate',
  modelingPattern: #NONE,
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        dataExtraction: {
           enabled: true,
           delta.changeDataCapture:{
              mapping: [
                    { viewElement: ['CostingReferenceObject', 'CostEstimate', 'CostingType', 'CostingDate', 'CostingVersion', 'ValuationVariant', 'CostIsEnteredManually', 'CostingPartnerNumber', 'CostComponentSplitType', 'CostIsInCtrlgAreaCrcy', 'IsCostComponentSplitLowerLevel', 'CostEstWQSIsInclAdditiveCosts', 'CostCompSpltDrctPrtnCharc' ],
                      role: #MAIN,
                      table: 'KEPH',
                      tableElement: ['BZOBJ','KALNR', 'KALKA', 'KADKY', 'TVERS', 'BWVAR', 'KKZMA', 'PATNR', 'KEART', 'LOSFX', 'KKZST', 'KKZMM', 'DIPA' ]}
                    ]
                    }
              }
}


@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ProdCostEstCostCompRawDEX
  as select from P_KEPH as keph
  association [0..1] to I_ProductCostEstimate as _ProductCostEstimate on  $projection.CostingReferenceObject = _ProductCostEstimate.CostingReferenceObject
                                                                      and $projection.CostEstimate           = _ProductCostEstimate.CostEstimate
                                                                      and $projection.CostingType            = _ProductCostEstimate.CostingType
                                                                      and $projection.CostingDate            = _ProductCostEstimate.CostingDate
                                                                      and $projection.CostingVersion         = _ProductCostEstimate.CostingVersion
                                                                      and $projection.ValuationVariant       = _ProductCostEstimate.ValuationVariant
                                                                      and $projection.CostIsEnteredManually  = _ProductCostEstimate.CostIsEnteredManually

{
  key keph.CostingReferenceObject,
  key keph.CostEstimate,
  key keph.CostingType,
  key keph.CostingDate,
  key keph.CostingVersion,
  key keph.ValuationVariant,
  key keph.CostIsEnteredManually,
  key keph.CostingPartnerNumber,
  key keph.CostComponentSplitType,
  key keph.CostIsInCtrlgAreaCrcy,
      @Semantics.booleanIndicator
  key keph.IsCostComponentSplitLowerLevel,
  key keph.CostEstWQSIsInclAdditiveCosts,
  key keph.CostCompSpltDrctPrtnCharc,
      cast ( case
          when keph.CostIsInCtrlgAreaCrcy = 'X' then _ProductCostEstimate.ControllingAreaCurrency
          when keph.CostIsInCtrlgAreaCrcy = ' ' then _ProductCostEstimate.CompanyCodeCurrency
      end as waers ) as Currency,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField1Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField2Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField3Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField4Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField5Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField6Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField7Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField8Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField9Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField10Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField11Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField12Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField13Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField14Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField15Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField16Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField17Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField18Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField19Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField20Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField21Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField22Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField23Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField24Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField25Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField26Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField27Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField28Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField29Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField30Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField31Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField32Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField33Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField34Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField35Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField36Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField37Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField38Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField39Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField40Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField41Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField42Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField43Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField44Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField45Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField46Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField47Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField48Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField49Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField50Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField51Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField52Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField53Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField54Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField55Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField56Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField57Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField58Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField59Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField60Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField61Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField62Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField63Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField64Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField65Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField66Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField67Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField68Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField69Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField70Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField71Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField72Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField73Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField74Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField75Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField76Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField77Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField78Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField79Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField80Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField81Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField82Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField83Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField84Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField85Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField86Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField87Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField88Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField89Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField90Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField91Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField92Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField93Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField94Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField95Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField96Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField97Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField98Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField99Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField100Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField101Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField102Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField103Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField104Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField105Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField106Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField107Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField108Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField109Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField110Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField111Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField112Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField113Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField114Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField115Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField116Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField117Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField118Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField119Amt,
      @Semantics.amount.currencyCode: 'Currency'
      keph.CostComponentCostField120Amt,

      _ProductCostEstimate
}
```
